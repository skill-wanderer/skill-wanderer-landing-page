import { getRequestURL } from 'h3'
import type { MonthlyDonationStartResponse } from '~/types'
import { DONATION_CURRENCY } from '~/data/donation'
import {
  beginDonationResponse,
  checkDonationStart,
  createMonthlyDonation,
  describePayPalFailure,
  getMonthlyPlanId,
  logDonationEvent,
  respondDonationFailure,
  respondDonationUnavailable
} from '~/server/services/paypal/donations'

// Starts a monthly donation: creates the PayPal subscription the donor then approves in PayPal's window.
export default defineEventHandler(async (event): Promise<MonthlyDonationStartResponse> => {
  const requestId = beginDonationResponse(event)
  const start = await checkDonationStart(event, requestId)

  if (!start.ok) {
    return start.failure
  }

  const planId = getMonthlyPlanId(event)

  if (!planId) {
    return respondDonationUnavailable(event, requestId)
  }

  const { amount, credentials } = start

  try {
    const subscriptionId = await createMonthlyDonation(credentials, {
      amount,
      currency: DONATION_CURRENCY,
      planId,
      requestId,
      returnUrl: new URL('/help-the-mission', getRequestURL(event).origin).href
    })

    logDonationEvent('info', {
      event: 'donation.monthly_created',
      requestId,
      subscriptionId,
      amount,
      environment: credentials.environment
    })

    return { ok: true, subscriptionId, requestId }
  } catch (error) {
    return respondDonationFailure(
      event,
      requestId,
      502,
      {
        code: 'DONATION_PROVIDER_ERROR',
        message: 'PayPal is not responding right now. Please try again in a moment.',
        retryable: true
      },
      { amount, ...describePayPalFailure(error) }
    )
  }
})
