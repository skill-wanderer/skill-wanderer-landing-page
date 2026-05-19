import { Resend } from 'resend'
import type { SubscribeRequest, SubscribeResponse } from '~/types'
import { createSubscriptionConfirmationEmail } from '~/server/services/email/subscription'

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
const SUBSCRIPTION_UNAVAILABLE_MESSAGE = 'Subscription service is temporarily unavailable.'
const SUBSCRIPTION_FAILED_MESSAGE = 'Something went wrong. Please try again.'
const RESEND_API_KEY_PLACEHOLDER = 'YOUR_RESEND_API_KEY'

const maskEmail = (email: string) => {
  const [localPart = '', domain = ''] = email.split('@')

  if (!localPart || !domain) {
    return 'invalid-email'
  }

  const visiblePrefix = localPart.slice(0, 2)
  return `${visiblePrefix}${'*'.repeat(Math.max(localPart.length - visiblePrefix.length, 0))}@${domain}`
}

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

  console.info('[SUBSCRIBE_FLOW]', {
    stage: 'request_received',
    method: event.method,
    path: getRequestURL(event).pathname,
    recipient: maskedEmail
  })

  if (!email) {
    console.info('[SUBSCRIBE_FLOW]', {
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
    console.info('[SUBSCRIBE_FLOW]', {
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

  const runtimeConfig = useRuntimeConfig(event)
  const resendApiKey = runtimeConfig.resendApiKey || runtimeConfig.NUXT_RESEND_API_KEY || process.env.RESEND_API_KEY
  const resendFromEmail = runtimeConfig.resendFromEmail || runtimeConfig.NUXT_RESEND_FROM_EMAIL || process.env.RESEND_FROM_EMAIL

  if (!resendApiKey || resendApiKey === RESEND_API_KEY_PLACEHOLDER || !resendFromEmail) {
    console.error('[SUBSCRIBE_FLOW]', {
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
    const resend = new Resend(resendApiKey)

    const { data, error } = await resend.emails.send(
      createSubscriptionConfirmationEmail(email, resendFromEmail),
      {
        idempotencyKey: `skill-wanderer-subscribe:${email}`
      }
    )

    if (error) {
      console.error('[RESEND_SEND_ERROR]', {
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
      console.error('[RESEND_SEND_ERROR]', {
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

    console.info('[RESEND_SEND_SUCCESS]', {
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
    console.error('[RESEND_SEND_ERROR]', {
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