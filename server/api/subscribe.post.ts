import { Resend } from 'resend'
import { getHeader, setResponseHeader } from 'h3'
import type { H3Event } from 'h3'
import type { SubscribeRequest, SubscribeResponse } from '~/types'
import { createSubscriptionConfirmationEmail } from '~/server/services/email/subscription'

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
const MAX_EMAIL_LENGTH = 254
const REQUEST_ID_HEADER = 'X-Request-Id'
const SUBSCRIBE_STATUS_HEADER = 'X-Subscribe-Status'
const SUBSCRIBE_CODE_HEADER = 'X-Subscribe-Code'
const SUBSCRIBE_DURATION_HEADER = 'X-Subscribe-Duration-Ms'
const CACHE_CONTROL_HEADER = 'Cache-Control'
const CACHE_CONTROL_VALUE = 'no-store'
const RETRY_AFTER_HEADER = 'Retry-After'
const SUBSCRIPTION_UNAVAILABLE_MESSAGE = 'Subscription service is temporarily unavailable.'
const SUBSCRIPTION_FAILED_MESSAGE = 'Something went wrong. Please try again.'
const SUBSCRIPTION_THROTTLED_MESSAGE = 'Please wait before trying again.'
const RESEND_API_KEY_PLACEHOLDER = 'YOUR_RESEND_API_KEY'
const SUBSCRIPTION_THROTTLE_WINDOW_MS = 60_000
const SUBSCRIPTION_IDEMPOTENCY_PREFIX = 'skill-wanderer-subscribe'
const SUBSCRIBE_ACCEPTED_MESSAGE = 'We received your request and sent a confirmation email. Please check your inbox.'

const subscriptionThrottle = new Map<string, number>()

type SubscribeFailureResponse = Extract<SubscribeResponse, { ok: false }>
type SubscribeSuccessResponse = Extract<SubscribeResponse, { ok: true }>
type SubscribeLogLevel = 'info' | 'warn' | 'error'

const maskEmail = (email: string) => {
  const [localPart = '', domain = ''] = email.split('@')

  if (!localPart || !domain) {
    return 'invalid-email'
  }

  const visiblePrefix = localPart.slice(0, 2)
  return `${visiblePrefix}${'*'.repeat(Math.max(localPart.length - visiblePrefix.length, 0))}@${domain}`
}

const getClientThrottleKey = (event: H3Event) => {
  const forwardedFor = getHeader(event, 'x-forwarded-for')
  const realIp = getHeader(event, 'x-real-ip')
  const cfConnectingIp = getHeader(event, 'cf-connecting-ip')
  const firstForwardedIp = forwardedFor?.split(',')[0]?.trim()

  return cfConnectingIp || realIp || firstForwardedIp || event.node.req.socket?.remoteAddress || 'unknown-client'
}

const pruneExpiredThrottleEntries = (now: number) => {
  for (const [clientKey, lastAttemptAt] of subscriptionThrottle.entries()) {
    if (now - lastAttemptAt >= SUBSCRIPTION_THROTTLE_WINDOW_MS) {
      subscriptionThrottle.delete(clientKey)
    }
  }
}

const getRetryAfterMs = (now: number, lastAttemptAt: number) =>
  Math.max(SUBSCRIPTION_THROTTLE_WINDOW_MS - (now - lastAttemptAt), 0)

const toRetryAfterSeconds = (retryAfterMs: number) => Math.max(Math.ceil(retryAfterMs / 1000), 1)

const encodeHex = (buffer: ArrayBuffer) =>
  Array.from(new Uint8Array(buffer), (byte) => byte.toString(16).padStart(2, '0')).join('')

const createSubscriptionIdempotencyKey = async (email: string) => {
  const digest = await globalThis.crypto.subtle.digest('SHA-256', new TextEncoder().encode(email))
  const fingerprint = encodeHex(digest).slice(0, 32)

  return `${SUBSCRIPTION_IDEMPOTENCY_PREFIX}:${fingerprint}`
}

const pickRuntimeString = (...values: unknown[]) =>
  values.find((value): value is string => typeof value === 'string' && value.trim().length > 0)?.trim()

const createRequestId = () => globalThis.crypto.randomUUID()

const setResponseMetadata = (
  event: H3Event,
  requestId: string,
  status: SubscribeResponse['status'],
  durationMs: number,
  code?: SubscribeFailureResponse['code'],
  retryAfterSeconds?: number
) => {
  setResponseHeader(event, CACHE_CONTROL_HEADER, CACHE_CONTROL_VALUE)
  setResponseHeader(event, REQUEST_ID_HEADER, requestId)
  setResponseHeader(event, SUBSCRIBE_STATUS_HEADER, status)
  setResponseHeader(event, SUBSCRIBE_DURATION_HEADER, String(durationMs))

  if (code) {
    setResponseHeader(event, SUBSCRIBE_CODE_HEADER, code)
  }

  if (typeof retryAfterSeconds === 'number') {
    setResponseHeader(event, RETRY_AFTER_HEADER, retryAfterSeconds)
  }
}

const logSubscribeEvent = (
  level: SubscribeLogLevel,
  payload: Record<string, string | number | boolean | undefined>
) => {
  const entry = JSON.stringify({
    scope: 'subscribe',
    timestamp: new Date().toISOString(),
    ...payload
  })

  if (level === 'error') {
    console.error(entry)
    return
  }

  if (level === 'warn') {
    console.warn(entry)
    return
  }

  console.info(entry)
}

const getDurationMs = (startedAt: number) => Math.max(Date.now() - startedAt, 0)

const getSubscribeSource = (value: unknown): SubscribeRequest['source'] | 'unknown' => {
  if (value === 'home' || value === 'contact') {
    return value
  }

  return 'unknown'
}

const getProviderErrorMetadata = (error: unknown) => {
  if (!error || typeof error !== 'object') {
    return {
      providerCode: 'UNKNOWN_PROVIDER_ERROR',
      providerStatusCode: undefined as number | undefined
    }
  }

  const maybeError = error as {
    name?: unknown
    code?: unknown
    statusCode?: unknown
  }

  return {
    providerCode:
      typeof maybeError.code === 'string'
        ? maybeError.code
        : typeof maybeError.name === 'string'
          ? maybeError.name
          : 'UNKNOWN_PROVIDER_ERROR',
    providerStatusCode: typeof maybeError.statusCode === 'number' ? maybeError.statusCode : undefined
  }
}

const respondFailure = (
  event: H3Event,
  startedAt: number,
  requestId: string,
  response: Omit<SubscribeFailureResponse, 'requestId' | 'ok'> & { httpStatus: number },
  context: {
    maskedEmail?: string
    source?: string
    providerCode?: string
    providerStatusCode?: number
    level?: SubscribeLogLevel
  } = {}
): SubscribeFailureResponse => {
  const durationMs = getDurationMs(startedAt)
  const retryAfterSeconds = response.retryAfterSeconds

  setResponseStatus(event, response.httpStatus)
  setResponseMetadata(event, requestId, response.status, durationMs, response.code, retryAfterSeconds)
  logSubscribeEvent(context.level ?? 'warn', {
    event: 'subscribe.failure',
    requestId,
    status: response.status,
    code: response.code,
    durationMs,
    maskedEmail: context.maskedEmail,
    source: context.source,
    retryAfterSeconds,
    providerCode: context.providerCode,
    providerStatusCode: context.providerStatusCode
  })

  return {
    ok: false,
    requestId,
    status: response.status,
    code: response.code,
    message: response.message,
    retryable: response.retryable,
    ...(typeof retryAfterSeconds === 'number' ? { retryAfterSeconds } : {})
  }
}

const respondSuccess = (
  event: H3Event,
  startedAt: number,
  requestId: string,
  response: Omit<SubscribeSuccessResponse, 'requestId' | 'ok'>,
  context: {
    maskedEmail?: string
    source?: string
  } = {}
): SubscribeSuccessResponse => {
  const durationMs = getDurationMs(startedAt)

  setResponseMetadata(event, requestId, response.status, durationMs)
  logSubscribeEvent('info', {
    event: 'subscribe.success',
    requestId,
    status: response.status,
    durationMs,
    maskedEmail: context.maskedEmail,
    source: context.source
  })

  return {
    ok: true,
    requestId,
    status: response.status,
    message: response.message
  }
}

export default defineEventHandler(async (event): Promise<SubscribeResponse> => {
  const startedAt = Date.now()
  const requestId = createRequestId()
  let body: Partial<SubscribeRequest> | null = null

  try {
    body = await readBody<Partial<SubscribeRequest>>(event)
  } catch {
    return respondFailure(
      event,
      startedAt,
      requestId,
      {
        httpStatus: 400,
        status: 'invalid',
        code: 'SUBSCRIBE_INVALID_BODY',
        message: 'Invalid request body.',
        retryable: false
      }
    )
  }

  if (!body || typeof body !== 'object' || Array.isArray(body)) {
    return respondFailure(
      event,
      startedAt,
      requestId,
      {
        httpStatus: 400,
        status: 'invalid',
        code: 'SUBSCRIBE_INVALID_BODY',
        message: 'Invalid request body.',
        retryable: false
      }
    )
  }

  const email = typeof body?.email === 'string' ? body.email.trim().toLowerCase() : ''
  const maskedEmail = email ? maskEmail(email) : 'missing-email'
  const source = getSubscribeSource(body?.source)

  if (!email) {
    return respondFailure(
      event,
      startedAt,
      requestId,
      {
        httpStatus: 400,
        status: 'invalid',
        code: 'SUBSCRIBE_EMAIL_REQUIRED',
        message: 'Email is required.',
        retryable: false
      },
      {
        maskedEmail,
        source
      }
    )
  }

  if (email.length > MAX_EMAIL_LENGTH) {
    return respondFailure(
      event,
      startedAt,
      requestId,
      {
        httpStatus: 400,
        status: 'invalid',
        code: 'SUBSCRIBE_EMAIL_TOO_LONG',
        message: 'Please enter a valid email address.',
        retryable: false
      },
      {
        maskedEmail,
        source
      }
    )
  }

  if (!EMAIL_PATTERN.test(email)) {
    return respondFailure(
      event,
      startedAt,
      requestId,
      {
        httpStatus: 400,
        status: 'invalid',
        code: 'SUBSCRIBE_INVALID_EMAIL',
        message: 'Please enter a valid email address.',
        retryable: false
      },
      {
        maskedEmail,
        source
      }
    )
  }

  const now = Date.now()
  const clientThrottleKey = getClientThrottleKey(event)

  pruneExpiredThrottleEntries(now)

  const lastAttemptAt = subscriptionThrottle.get(clientThrottleKey)

  if (typeof lastAttemptAt === 'number' && now - lastAttemptAt < SUBSCRIPTION_THROTTLE_WINDOW_MS) {
    const retryAfterSeconds = toRetryAfterSeconds(getRetryAfterMs(now, lastAttemptAt))

    return respondFailure(
      event,
      startedAt,
      requestId,
      {
        httpStatus: 429,
        status: 'throttled',
        code: 'SUBSCRIBE_THROTTLED',
        message: SUBSCRIPTION_THROTTLED_MESSAGE,
        retryable: true,
        retryAfterSeconds
      },
      {
        maskedEmail,
        source
      }
    )
  }

  subscriptionThrottle.set(clientThrottleKey, now)

  const runtimeConfig = useRuntimeConfig(event)
  const resendApiKey = pickRuntimeString(runtimeConfig.resendApiKey)
  const resendFromEmail = pickRuntimeString(runtimeConfig.resendFromEmail)

  if (!resendApiKey || resendApiKey === RESEND_API_KEY_PLACEHOLDER || !resendFromEmail) {
    return respondFailure(
      event,
      startedAt,
      requestId,
      {
        httpStatus: 503,
        status: 'unavailable',
        code: 'SUBSCRIBE_CONFIG_MISSING',
        message: SUBSCRIPTION_UNAVAILABLE_MESSAGE,
        retryable: true
      },
      {
        maskedEmail,
        source,
        level: 'error'
      }
    )
  }

  try {
    const resend = new Resend(resendApiKey)
    const idempotencyKey = await createSubscriptionIdempotencyKey(email)

    const { data, error } = await resend.emails.send(
      createSubscriptionConfirmationEmail(email, resendFromEmail),
      {
        idempotencyKey
      }
    )

    if (error) {
      const { providerCode, providerStatusCode } = getProviderErrorMetadata(error)

      return respondFailure(
        event,
        startedAt,
        requestId,
        {
          httpStatus: 502,
          status: 'failed',
          code: 'SUBSCRIBE_PROVIDER_REJECTED',
          message: SUBSCRIPTION_FAILED_MESSAGE,
          retryable: true
        },
        {
          maskedEmail,
          source,
          providerCode,
          providerStatusCode,
          level: 'error'
        }
      )
    }

    if (!data) {
      return respondFailure(
        event,
        startedAt,
        requestId,
        {
          httpStatus: 502,
          status: 'failed',
          code: 'SUBSCRIBE_PROVIDER_NO_DATA',
          message: SUBSCRIPTION_FAILED_MESSAGE,
          retryable: true
        },
        {
          maskedEmail,
          source,
          level: 'error'
        }
      )
    }

    return respondSuccess(
      event,
      startedAt,
      requestId,
      {
        status: 'accepted',
        message: SUBSCRIBE_ACCEPTED_MESSAGE
      },
      {
        maskedEmail,
        source
      }
    )
  } catch (error) {
    const { providerCode, providerStatusCode } = getProviderErrorMetadata(error)

    return respondFailure(
      event,
      startedAt,
      requestId,
      {
        httpStatus: 502,
        status: 'unavailable',
        code: 'SUBSCRIBE_PROVIDER_EXCEPTION',
        message: SUBSCRIPTION_UNAVAILABLE_MESSAGE,
        retryable: true
      },
      {
        maskedEmail,
        source,
        providerCode,
        providerStatusCode,
        level: 'error'
      }
    )
  }
})