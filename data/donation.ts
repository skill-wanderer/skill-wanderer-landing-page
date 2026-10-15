// Donation settings shared by the PayPal form on /help-the-mission and the server route
// that creates the PayPal order, so the browser and the server always agree on the limits.

export const DONATION_CURRENCY = 'USD'
export const DONATION_MIN_AMOUNT = 1
export const DONATION_MAX_AMOUNT = 10_000

/** Suggestions under the amount field. Picking one fills in the field, which donors can still change. */
export const DONATION_PRESET_AMOUNTS = [5, 10, 25] as const
export const DONATION_DEFAULT_AMOUNT: (typeof DONATION_PRESET_AMOUNTS)[number] = 5

// Dollars with up to two decimals and an optional leading "$": "25", "25.5", "$25.50".
const DONATION_AMOUNT_PATTERN = /^\$?\s*(\d{1,7}(?:\.\d{1,2})?)$/

const wholeAmountFormat = new Intl.NumberFormat('en-US', {
  style: 'currency',
  currency: DONATION_CURRENCY,
  minimumFractionDigits: 0,
  maximumFractionDigits: 0
})
const amountFormat = new Intl.NumberFormat('en-US', { style: 'currency', currency: DONATION_CURRENCY })

/** "$25", for the quick picks and the limits. */
export const formatWholeAmount = (amount: number) => wholeAmountFormat.format(amount)

/** "$25.00", the way PayPal shows the amount on the receipt. */
export const formatDonationAmount = (amount: number | string) => amountFormat.format(Number(amount))

export const DONATION_RANGE_HINT =
  `Any amount from ${formatWholeAmount(DONATION_MIN_AMOUNT)} to ${formatWholeAmount(DONATION_MAX_AMOUNT)}.`

/**
 * Reads an amount a donor picked or typed. Returns it the way the PayPal Orders API
 * expects it ("25.00"), or null when it is not a valid amount within the limits.
 */
export const parseDonationAmount = (value: unknown): string | null => {
  const text = typeof value === 'number' ? String(value) : typeof value === 'string' ? value.trim() : ''
  const digits = DONATION_AMOUNT_PATTERN.exec(text)?.[1]

  if (!digits) {
    return null
  }

  const amount = Number(digits)

  return amount >= DONATION_MIN_AMOUNT && amount <= DONATION_MAX_AMOUNT ? amount.toFixed(2) : null
}
