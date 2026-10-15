import { getRouterParam } from 'h3'
import type { DonationCaptureResponse } from '~/types'
import { DONATION_CURRENCY, formatDonationAmount } from '~/data/donation'
import { getPayPalCredentials, PayPalApiError } from '~/server/services/paypal/client'
import {
  beginDonationResponse,
  captureDonationOrder,
  describePayPalFailure,
  logDonationEvent,
  respondDonationFailure,
  respondDonationUnavailable
} from '~/server/services/paypal/donations'
import type { DonationCaptureOutcome } from '~/server/services/paypal/donations'

// PayPal order IDs are capital letters and digits, such as 5O190127TN364715T.
const ORDER_ID_PATTERN = /^[A-Z0-9]{8,36}$/

export default defineEventHandler(async (event): Promise<DonationCaptureResponse> => {
  const requestId = beginDonationResponse(event)
  const orderId = getRouterParam(event, 'orderId') ?? ''

  if (!ORDER_ID_PATTERN.test(orderId)) {
    return respondDonationFailure(event, requestId, 400, {
      code: 'DONATION_NOT_FOUND',
      message: 'That PayPal payment could not be found. Please try again.',
      retryable: false
    })
  }

  const credentials = getPayPalCredentials(event)

  if (!credentials) {
    return respondDonationUnavailable(event, requestId)
  }

  let outcome: DonationCaptureOutcome

  try {
    outcome = await captureDonationOrder(credentials, orderId)
  } catch (error) {
    if (error instanceof PayPalApiError && error.status === 404) {
      return respondDonationFailure(
        event,
        requestId,
        404,
        {
          code: 'DONATION_NOT_FOUND',
          message: 'That PayPal payment could not be found. Please try again.',
          retryable: false
        },
        { orderId, ...describePayPalFailure(error) }
      )
    }

    // PayPal may still have taken the payment (a timeout, for example), so the message
    // points the donor to their PayPal receipt instead of saying it failed.
    return respondDonationFailure(
      event,
      requestId,
      502,
      {
        code: 'DONATION_PROVIDER_ERROR',
        message: 'We could not confirm your donation with PayPal. If PayPal emails you a receipt, it went through. If not, please try again.',
        retryable: true
      },
      { orderId, ...describePayPalFailure(error) }
    )
  }

  if (outcome.kind === 'not-charged') {
    return respondDonationFailure(
      event,
      requestId,
      402,
      {
        code: 'DONATION_DECLINED',
        message: 'PayPal could not complete that payment, so nothing was charged. Please try again, or choose another way to pay in PayPal.',
        retryable: true
      },
      { orderId, providerIssue: outcome.reason }
    )
  }

  logDonationEvent('info', {
    event: 'donation.captured',
    requestId,
    orderId,
    status: outcome.kind,
    amount: outcome.amount,
    currency: outcome.currency
  })

  const amountLabel = outcome.currency === DONATION_CURRENCY
    ? formatDonationAmount(outcome.amount)
    : `${outcome.amount} ${outcome.currency}`

  return {
    ok: true,
    status: outcome.kind,
    amount: outcome.amount,
    currency: outcome.currency,
    message: outcome.kind === 'completed'
      ? `Thank you! Your ${amountLabel} donation went through, and it helps keep education free. PayPal will email you a receipt.`
      : `Thank you! PayPal is still processing your ${amountLabel} donation and will email you when it is complete.`,
    requestId
  }
})
