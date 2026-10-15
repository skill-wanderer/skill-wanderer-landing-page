import type { DonationOrderResponse } from '~/types'
import { DONATION_CURRENCY } from '~/data/donation'
import {
  beginDonationResponse,
  checkDonationStart,
  createDonationOrder,
  describePayPalFailure,
  logDonationEvent,
  respondDonationFailure
} from '~/server/services/paypal/donations'

// Starts a one-time donation: creates the PayPal order the donor then approves in PayPal's window.
export default defineEventHandler(async (event): Promise<DonationOrderResponse> => {
  const requestId = beginDonationResponse(event)
  const start = await checkDonationStart(event, requestId)

  if (!start.ok) {
    return start.failure
  }

  const { amount, credentials } = start

  try {
    const orderId = await createDonationOrder(credentials, { amount, currency: DONATION_CURRENCY, requestId })

    logDonationEvent('info', {
      event: 'donation.order_created',
      requestId,
      orderId,
      amount,
      environment: credentials.environment
    })

    return { ok: true, orderId, requestId }
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
