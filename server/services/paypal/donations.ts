import { getHeader, getRequestIP, readBody, setResponseHeader, setResponseStatus } from 'h3'
import type { H3Event } from 'h3'
import type { DonationFailure, DonationRequest } from '~/types'
import { DONATION_RANGE_HINT, parseDonationAmount } from '~/data/donation'
import { getPayPalCredentials, PayPalApiError, requestPayPal } from '~/server/services/paypal/client'
import type { PayPalCredentials } from '~/server/services/paypal/client'

// Shown in PayPal's checkout window and on the donor's PayPal receipt.
const DONATION_DESCRIPTION = 'Donation to Skill-Wanderer'
const BRAND_NAME = 'Skill-Wanderer'

// Every click on the PayPal button starts one order or monthly donation. Ten in ten minutes leaves
// room for donors who cancel and try again, while stopping a script from flooding the PayPal account.
const DONATION_START_LIMIT = 10
const DONATION_START_WINDOW_MS = 10 * 60_000

// Capture failures where PayPal refused the payment method, so nothing was charged and
// the donor can simply try again, with another card or account if needed.
const NOT_CHARGED_ISSUES = new Set([
  'INSTRUMENT_DECLINED',
  'INSUFFICIENT_FUNDS',
  'TRANSACTION_REFUSED',
  'PAYER_ACTION_REQUIRED',
  'ORDER_NOT_APPROVED'
])

const donationStarts = new Map<string, number[]>()

type DonationLogLevel = 'info' | 'warn' | 'error'
type DonationLogFields = Record<string, string | number | boolean | undefined>

export type DonationCaptureOutcome =
  | { kind: 'completed' | 'pending'; amount: string; currency: string }
  // reason is PayPal's issue code or capture status, for the logs.
  | { kind: 'not-charged'; reason: string }

export type MonthlyDonationOutcome =
  | { kind: 'active' | 'pending'; amount: string; currency: string }
  | { kind: 'not-approved' }
  | { kind: 'ended' }

type DonationStart =
  | { ok: false; failure: DonationFailure }
  | { ok: true; amount: string; credentials: PayPalCredentials }

interface CapturedOrder {
  purchase_units?: Array<{
    payments?: {
      captures?: Array<{
        status?: unknown
        amount?: { value?: unknown; currency_code?: unknown }
      }>
    }
  }>
}

interface MonthlySubscription {
  status?: unknown
  plan?: {
    billing_cycles?: Array<{
      tenure_type?: unknown
      pricing_scheme?: { fixed_price?: { value?: unknown; currency_code?: unknown } }
    }>
  }
}

const getClientKey = (event: H3Event) =>
  getHeader(event, 'cf-connecting-ip') || getRequestIP(event, { xForwardedFor: true }) || 'unknown-client'

/** Records a donation start and reports whether this client has gone over the limit. */
const isOverDonationStartLimit = (event: H3Event) => {
  const now = Date.now()

  for (const [key, starts] of donationStarts) {
    if (starts.every((startedAt) => now - startedAt >= DONATION_START_WINDOW_MS)) {
      donationStarts.delete(key)
    }
  }

  const clientKey = getClientKey(event)
  const recentStarts = (donationStarts.get(clientKey) ?? []).filter((startedAt) => now - startedAt < DONATION_START_WINDOW_MS)

  if (recentStarts.length >= DONATION_START_LIMIT) {
    donationStarts.set(clientKey, recentStarts)
    return true
  }

  donationStarts.set(clientKey, [...recentStarts, now])
  return false
}

export const logDonationEvent = (level: DonationLogLevel, fields: DonationLogFields) => {
  console[level](JSON.stringify({
    scope: 'donation',
    timestamp: new Date().toISOString(),
    ...fields
  }))
}

/** Log fields that help trace a PayPal failure. They never include donor details. */
export const describePayPalFailure = (error: unknown): DonationLogFields =>
  error instanceof PayPalApiError
    ? { providerStatus: error.status, providerIssue: error.issue, providerDebugId: error.debugId }
    : { providerError: error instanceof Error ? error.name : 'unknown' }

/** Marks a donation response as uncacheable and gives it a request ID for logs and support. */
export const beginDonationResponse = (event: H3Event) => {
  const requestId = globalThis.crypto.randomUUID()

  setResponseHeader(event, 'Cache-Control', 'no-store')
  setResponseHeader(event, 'X-Request-Id', requestId)

  return requestId
}

export const respondDonationFailure = (
  event: H3Event,
  requestId: string,
  httpStatus: number,
  failure: Omit<DonationFailure, 'ok' | 'requestId'>,
  logFields: DonationLogFields = {}
): DonationFailure => {
  setResponseStatus(event, httpStatus)
  logDonationEvent(httpStatus >= 500 ? 'error' : 'warn', {
    event: 'donation.failure',
    requestId,
    httpStatus,
    code: failure.code,
    ...logFields
  })

  return { ok: false, requestId, ...failure }
}

/** For when PayPal credentials or the monthly plan are not configured. */
export const respondDonationUnavailable = (event: H3Event, requestId: string) =>
  respondDonationFailure(event, requestId, 503, {
    code: 'DONATION_CONFIG_MISSING',
    message: 'PayPal donations are not available right now. Please try again later.',
    retryable: true
  })

/**
 * The checks every new donation passes before PayPal is called: a readable body, an amount within
 * the limits, the rate limit and PayPal credentials. Returns what the route needs, or the failure to send.
 */
export const checkDonationStart = async (event: H3Event, requestId: string): Promise<DonationStart> => {
  const body = await readBody<Partial<DonationRequest> | null>(event).catch(() => null)

  if (!body || typeof body !== 'object' || Array.isArray(body)) {
    return {
      ok: false,
      failure: respondDonationFailure(event, requestId, 400, {
        code: 'DONATION_INVALID_BODY',
        message: 'Invalid request body.',
        retryable: false
      })
    }
  }

  // The amount is the donor's choice, so the server checks it rather than trusting the browser's check.
  const amount = parseDonationAmount(body.amount)

  if (!amount) {
    return {
      ok: false,
      failure: respondDonationFailure(event, requestId, 400, {
        code: 'DONATION_INVALID_AMOUNT',
        message: `Please enter a valid amount. ${DONATION_RANGE_HINT}`,
        retryable: false
      })
    }
  }

  if (isOverDonationStartLimit(event)) {
    return {
      ok: false,
      failure: respondDonationFailure(event, requestId, 429, {
        code: 'DONATION_THROTTLED',
        message: 'Please wait a few minutes before trying again.',
        retryable: true
      })
    }
  }

  const credentials = getPayPalCredentials(event)

  if (!credentials) {
    return { ok: false, failure: respondDonationUnavailable(event, requestId) }
  }

  return { ok: true, amount, credentials }
}

/** The plan made by `npm run paypal:create-monthly-plan`, or null while monthly donations are not set up. */
export const getMonthlyPlanId = (event: H3Event) => {
  const planId = useRuntimeConfig(event).public.paypal.monthlyPlanId

  return typeof planId === 'string' && planId.trim() ? planId.trim() : null
}

/** Creates a PayPal order for one donation and returns its order ID. */
export const createDonationOrder = async (
  credentials: PayPalCredentials,
  { amount, currency, requestId }: { amount: string; currency: string; requestId: string }
) => {
  const order = await requestPayPal(credentials, '/v2/checkout/orders', {
    headers: {
      // A repeated request with the same ID returns the first order instead of creating a second one.
      'PayPal-Request-Id': requestId,
      Prefer: 'return=minimal'
    },
    body: {
      intent: 'CAPTURE',
      purchase_units: [
        {
          description: DONATION_DESCRIPTION,
          amount: { currency_code: currency, value: amount }
        }
      ],
      payment_source: {
        paypal: {
          experience_context: {
            brand_name: BRAND_NAME,
            // Nothing ships for a donation, so PayPal should not ask for an address.
            shipping_preference: 'NO_SHIPPING',
            // The donation completes on PayPal's last screen, so its button reads "Pay Now".
            user_action: 'PAY_NOW',
            // Opens PayPal's window on the card form, since many donors have no PayPal account.
            // PayPal users log in from the top of that page. Monthly donations have no such setting.
            landing_page: 'GUEST_CHECKOUT'
          }
        }
      }
    }
  }) as { id?: unknown } | null

  const orderId = order?.id

  if (typeof orderId !== 'string') {
    throw new PayPalApiError('PayPal returned no order ID.', 502)
  }

  return orderId
}

/** Captures an order the donor approved in PayPal, which is the step that moves the money. */
export const captureDonationOrder = async (
  credentials: PayPalCredentials,
  orderId: string
): Promise<DonationCaptureOutcome> => {
  let order: CapturedOrder | null

  try {
    order = await requestPayPal(credentials, `/v2/checkout/orders/${orderId}/capture`, {
      headers: {
        // One key per order, so capturing the same order twice returns the first result.
        'PayPal-Request-Id': `skill-wanderer-capture-${orderId}`,
        Prefer: 'return=representation'
      }
    }) as CapturedOrder | null
  } catch (error) {
    if (error instanceof PayPalApiError && error.issue && NOT_CHARGED_ISSUES.has(error.issue)) {
      return { kind: 'not-charged', reason: error.issue }
    }

    throw error
  }

  const capture = order?.purchase_units?.[0]?.payments?.captures?.[0]
  const status = capture?.status
  const amount = capture?.amount?.value
  const currency = capture?.amount?.currency_code

  if ((status === 'COMPLETED' || status === 'PENDING') && typeof amount === 'string' && typeof currency === 'string') {
    return { kind: status === 'COMPLETED' ? 'completed' : 'pending', amount, currency }
  }

  if (status === 'DECLINED' || status === 'FAILED') {
    return { kind: 'not-charged', reason: `CAPTURE_${status}` }
  }

  throw new PayPalApiError(`PayPal returned an unexpected capture status: ${String(status)}.`, 502)
}

/** Creates a PayPal subscription that gives the donor's amount every month, and returns its ID. */
export const createMonthlyDonation = async (
  credentials: PayPalCredentials,
  { amount, currency, planId, requestId, returnUrl }: {
    amount: string
    currency: string
    planId: string
    requestId: string
    returnUrl: string
  }
) => {
  const subscription = await requestPayPal(credentials, '/v1/billing/subscriptions', {
    headers: {
      'PayPal-Request-Id': requestId,
      Prefer: 'return=minimal'
    },
    body: {
      plan_id: planId,
      // The plan's $1 price is only a template. The donor's own amount replaces it.
      plan: {
        billing_cycles: [
          {
            sequence: 1,
            pricing_scheme: { fixed_price: { currency_code: currency, value: amount } }
          }
        ]
      },
      application_context: {
        brand_name: BRAND_NAME,
        shipping_preference: 'NO_SHIPPING',
        // PayPal switches the monthly donation on as soon as the donor approves it.
        user_action: 'SUBSCRIBE_NOW',
        // The API requires these, but only full-page redirects use them, and the PayPal window never redirects.
        return_url: returnUrl,
        cancel_url: returnUrl
      }
    }
  }) as { id?: unknown } | null

  const subscriptionId = subscription?.id

  if (typeof subscriptionId !== 'string') {
    throw new PayPalApiError('PayPal returned no subscription ID.', 502)
  }

  return subscriptionId
}

/** Reads a monthly donation back from PayPal, with the amount the donor chose. */
export const getMonthlyDonation = async (
  credentials: PayPalCredentials,
  subscriptionId: string
): Promise<MonthlyDonationOutcome> => {
  // fields=plan includes the donor's own amount, which replaced the plan's template price.
  const subscription = await requestPayPal(credentials, `/v1/billing/subscriptions/${subscriptionId}?fields=plan`, {
    method: 'GET'
  }) as MonthlySubscription | null

  const status = subscription?.status

  if (status === 'APPROVAL_PENDING') {
    return { kind: 'not-approved' }
  }

  if (status === 'SUSPENDED' || status === 'CANCELLED' || status === 'EXPIRED') {
    return { kind: 'ended' }
  }

  const price = subscription?.plan?.billing_cycles
    ?.find((cycle) => cycle.tenure_type === 'REGULAR')
    ?.pricing_scheme?.fixed_price
  const amount = price?.value
  const currency = price?.currency_code

  if ((status === 'ACTIVE' || status === 'APPROVED') && typeof amount === 'string' && typeof currency === 'string') {
    // PayPal drops trailing zeros ("7.5"), so the cents go back on.
    return { kind: status === 'ACTIVE' ? 'active' : 'pending', amount: Number(amount).toFixed(2), currency }
  }

  throw new PayPalApiError(`PayPal returned an unexpected subscription status: ${String(status)}.`, 502)
}
