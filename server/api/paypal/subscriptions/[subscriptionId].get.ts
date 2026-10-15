import { getRouterParam } from 'h3'
import type { MonthlyDonationStatusResponse } from '~/types'
import { DONATION_CURRENCY, formatDonationAmount } from '~/data/donation'
import { getPayPalCredentials, PayPalApiError } from '~/server/services/paypal/client'
import {
  beginDonationResponse,
  describePayPalFailure,
  getMonthlyDonation,
  logDonationEvent,
  respondDonationFailure,
  respondDonationUnavailable
} from '~/server/services/paypal/donations'
import type { MonthlyDonationOutcome } from '~/server/services/paypal/donations'

// PayPal subscription IDs look like I-BW452GLLEP1G.
const SUBSCRIPTION_ID_PATTERN = /^I-[A-Z0-9]{6,32}$/

// Confirms a monthly donation after the donor approves it. PayPal starts it on approval,
// so this only reads it back to check it is running and to thank the donor.
export default defineEventHandler(async (event): Promise<MonthlyDonationStatusResponse> => {
  const requestId = beginDonationResponse(event)
  const subscriptionId = getRouterParam(event, 'subscriptionId') ?? ''

  if (!SUBSCRIPTION_ID_PATTERN.test(subscriptionId)) {
    return respondDonationFailure(event, requestId, 400, {
      code: 'DONATION_NOT_FOUND',
      message: 'That monthly donation could not be found. Please try again.',
      retryable: false
    })
  }

  const credentials = getPayPalCredentials(event)

  if (!credentials) {
    return respondDonationUnavailable(event, requestId)
  }

  let outcome: MonthlyDonationOutcome

  try {
    outcome = await getMonthlyDonation(credentials, subscriptionId)
  } catch (error) {
    if (error instanceof PayPalApiError && error.status === 404) {
      return respondDonationFailure(
        event,
        requestId,
        404,
        {
          code: 'DONATION_NOT_FOUND',
          message: 'That monthly donation could not be found. Please try again.',
          retryable: false
        },
        { subscriptionId, ...describePayPalFailure(error) }
      )
    }

    // The donation may well be running already (a timeout, for example), so the message
    // points the donor to PayPal's email instead of saying it failed.
    return respondDonationFailure(
      event,
      requestId,
      502,
      {
        code: 'DONATION_PROVIDER_ERROR',
        message: 'We could not confirm your monthly donation with PayPal. If PayPal emails you about it, it is set up. If not, please try again.',
        retryable: true
      },
      { subscriptionId, ...describePayPalFailure(error) }
    )
  }

  if (outcome.kind === 'not-approved') {
    return respondDonationFailure(
      event,
      requestId,
      409,
      {
        code: 'DONATION_NOT_ACTIVE',
        message: 'PayPal has not confirmed this monthly donation yet, so nothing was charged. Please try again.',
        retryable: true
      },
      { subscriptionId }
    )
  }

  if (outcome.kind === 'ended') {
    return respondDonationFailure(
      event,
      requestId,
      409,
      {
        code: 'DONATION_NOT_ACTIVE',
        message: 'This monthly donation is no longer active. You can start a new one whenever you like.',
        retryable: false
      },
      { subscriptionId }
    )
  }

  logDonationEvent('info', {
    event: 'donation.monthly_confirmed',
    requestId,
    subscriptionId,
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
    message: outcome.kind === 'active'
      ? `Thank you! Your ${amountLabel} monthly donation is set up, and it helps keep education free. PayPal will email you a receipt each month, and you can cancel anytime in your PayPal account.`
      : `Thank you! PayPal is finishing setting up your ${amountLabel} monthly donation and will email you when it starts. You can cancel anytime in your PayPal account.`,
    requestId
  }
})
