import { Resend } from 'resend'
import type { ConsolaInstance } from 'consola/core'
import { getHeader } from 'h3'
import type { H3Event } from 'h3'
import { useNitroApp } from 'nitropack/runtime'
import type { SubscribeRequest, SubscribeResponse } from '~/types'
import { createSubscriptionConfirmationEmail } from '~/server/services/email/subscription'

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
const SUBSCRIPTION_UNAVAILABLE_MESSAGE = 'Subscription service is temporarily unavailable.'
const SUBSCRIPTION_FAILED_MESSAGE = 'Something went wrong. Please try again.'
const SUBSCRIPTION_THROTTLED_MESSAGE = 'Please wait before trying again.'
const RESEND_API_KEY_PLACEHOLDER = 'YOUR_RESEND_API_KEY'
const SUBSCRIPTION_THROTTLE_WINDOW_MS = 60_000
const SUBSCRIPTION_IDEMPOTENCY_PREFIX = 'skill-wanderer-subscribe'

const subscriptionThrottle = new Map<string, number>()

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

const encodeHex = (buffer: ArrayBuffer) =>
  Array.from(new Uint8Array(buffer), (byte) => byte.toString(16).padStart(2, '0')).join('')

const createSubscriptionIdempotencyKey = async (email: string) => {
  const digest = await globalThis.crypto.subtle.digest('SHA-256', new TextEncoder().encode(email))
  const fingerprint = encodeHex(digest).slice(0, 32)

  return `${SUBSCRIPTION_IDEMPOTENCY_PREFIX}:${fingerprint}`
}

const pickRuntimeString = (...values: unknown[]) =>
  values.find((value): value is string => typeof value === 'string' && value.length > 0)

type SubscriptionLogger = Pick<ConsolaInstance, 'info' | 'warn' | 'error'>

const getSubscriptionLogger = () =>
  (useNitroApp() as ReturnType<typeof useNitroApp> & { logger: SubscriptionLogger }).logger

export default defineEventHandler(async (event): Promise<SubscribeResponse> => {
  let body: Partial<SubscribeRequest> | null = null

  try {
    body = await readBody<Partial<SubscribeRequest>>(event)
  } catch {
    setResponseStatus(event, 400)
    return {
      success: false,
      message: 'Invalid request body.'
    }
  }

  if (!body || typeof body !== 'object' || Array.isArray(body)) {
    setResponseStatus(event, 400)
    return {
      success: false,
      message: 'Invalid request body.'
    }
  }

  const email = typeof body?.email === 'string' ? body.email.trim().toLowerCase() : ''
  const maskedEmail = email ? maskEmail(email) : 'missing-email'
  const logger = getSubscriptionLogger()

  logger.info('[SUBSCRIBE_FLOW]', {
    stage: 'request_received',
    method: event.method,
    path: getRequestURL(event).pathname,
    recipient: maskedEmail
  })

  if (!email) {
    logger.info('[SUBSCRIBE_FLOW]', {
      stage: 'validation_failed',
      reason: 'missing_email',
      recipient: maskedEmail
    })
    setResponseStatus(event, 400)
    return {
      success: false,
      message: 'Email is required.'
    }
  }

  if (!EMAIL_PATTERN.test(email)) {
    logger.info('[SUBSCRIBE_FLOW]', {
      stage: 'validation_failed',
      reason: 'invalid_email_format',
      recipient: maskedEmail
    })
    setResponseStatus(event, 400)
    return {
      success: false,
      message: 'Please enter a valid email address.'
    }
  }

  const now = Date.now()
  const clientThrottleKey = getClientThrottleKey(event)

  pruneExpiredThrottleEntries(now)

  const lastAttemptAt = subscriptionThrottle.get(clientThrottleKey)

  if (typeof lastAttemptAt === 'number' && now - lastAttemptAt < SUBSCRIPTION_THROTTLE_WINDOW_MS) {
    logger.warn('[SUBSCRIBE_FLOW]', {
      stage: 'throttled',
      reason: 'cooldown_active',
      recipient: maskedEmail,
      retryAfterMs: getRetryAfterMs(now, lastAttemptAt)
    })
    setResponseStatus(event, 429)
    return {
      success: false,
      message: SUBSCRIPTION_THROTTLED_MESSAGE
    }
  }

  const runtimeConfig = useRuntimeConfig(event)
  const resendApiKey = pickRuntimeString(
    runtimeConfig.resendApiKey,
    runtimeConfig.NUXT_RESEND_API_KEY,
    process.env.RESEND_API_KEY
  )
  const resendFromEmail = pickRuntimeString(
    runtimeConfig.resendFromEmail,
    runtimeConfig.NUXT_RESEND_FROM_EMAIL,
    process.env.RESEND_FROM_EMAIL
  )

  if (!resendApiKey || resendApiKey === RESEND_API_KEY_PLACEHOLDER || !resendFromEmail) {
    logger.error('[SUBSCRIBE_FLOW]', {
      stage: 'configuration_failed',
      reason: 'missing_resend_env',
      recipient: maskedEmail
    })
    setResponseStatus(event, 503)
    return {
      success: false,
      message: SUBSCRIPTION_UNAVAILABLE_MESSAGE
    }
  }

  try {
    subscriptionThrottle.set(clientThrottleKey, now)

    const resend = new Resend(resendApiKey)
    const idempotencyKey = await createSubscriptionIdempotencyKey(email)

    const { data, error } = await resend.emails.send(
      createSubscriptionConfirmationEmail(email, resendFromEmail),
      {
        idempotencyKey
      }
    )

    if (error) {
      logger.error('[RESEND_SEND_ERROR]', {
        success: false,
        recipient: maskedEmail,
        provider: 'resend',
        providerResponse: error
      })
      setResponseStatus(event, 502)
      return {
        success: false,
        message: SUBSCRIPTION_FAILED_MESSAGE
      }
    }

    if (!data) {
      logger.error('[RESEND_SEND_ERROR]', {
        success: false,
        recipient: maskedEmail,
        provider: 'resend',
        providerResponse: 'missing_data'
      })
      setResponseStatus(event, 502)
      return {
        success: false,
        message: SUBSCRIPTION_FAILED_MESSAGE
      }
    }

    logger.info('[RESEND_SEND_SUCCESS]', {
      success: true,
      recipient: maskedEmail,
      provider: 'resend',
      resendId: data.id,
      providerResponse: data
    })

    return {
      success: true
    }
  } catch (error) {
    logger.error('[RESEND_SEND_ERROR]', {
      success: false,
      recipient: maskedEmail,
      provider: 'resend',
      providerResponse: error instanceof Error ? error.message : error
    })
    setResponseStatus(event, 502)
    return {
      success: false,
      message: SUBSCRIPTION_UNAVAILABLE_MESSAGE
    }
  }
})