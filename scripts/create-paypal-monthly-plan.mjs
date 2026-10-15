// Creates the PayPal product and monthly plan behind "Monthly" donations on /help-the-mission.
// Run it once per PayPal environment (sandbox first, then production) and put the printed plan ID
// in NUXT_PUBLIC_PAYPAL_MONTHLY_PLAN_ID. The plan's $1 price is only a template: every monthly
// donation replaces it with the amount the donor chose.
//
//   npm run paypal:create-monthly-plan    (reads the PayPal settings from .env)

const clientId = process.env.NUXT_PUBLIC_PAYPAL_CLIENT_ID
const clientSecret = process.env.NUXT_PAYPAL_CLIENT_SECRET
const environment = process.env.NUXT_PUBLIC_PAYPAL_ENVIRONMENT === 'production' ? 'production' : 'sandbox'
const apiBaseUrl = environment === 'production' ? 'https://api-m.paypal.com' : 'https://api-m.sandbox.paypal.com'

if (!clientId || !clientSecret) {
  console.error('Set NUXT_PUBLIC_PAYPAL_CLIENT_ID and NUXT_PAYPAL_CLIENT_SECRET first, for example in .env.')
  process.exit(1)
}

const callPayPal = async (path, init) => {
  const response = await fetch(`${apiBaseUrl}${path}`, init)
  const body = await response.json().catch(() => null)

  if (!response.ok) {
    throw new Error(`PayPal ${init.method} ${path} failed with HTTP ${response.status}: ${JSON.stringify(body)}`)
  }

  return body
}

const { access_token: accessToken } = await callPayPal('/v1/oauth2/token', {
  method: 'POST',
  headers: {
    Authorization: `Basic ${Buffer.from(`${clientId}:${clientSecret}`).toString('base64')}`,
    'Content-Type': 'application/x-www-form-urlencoded'
  },
  body: 'grant_type=client_credentials'
})

const postToPayPal = (path, body) => callPayPal(path, {
  method: 'POST',
  headers: {
    Authorization: `Bearer ${accessToken}`,
    'Content-Type': 'application/json'
  },
  body: JSON.stringify(body)
})

const product = await postToPayPal('/v1/catalogs/products', {
  name: 'Skill-Wanderer donations',
  description: "Donations that keep Skill-Wanderer's education free.",
  type: 'SERVICE'
})

const plan = await postToPayPal('/v1/billing/plans', {
  product_id: product.id,
  name: 'Monthly donation',
  description: 'A monthly donation to Skill-Wanderer, at an amount the donor chooses.',
  status: 'ACTIVE',
  billing_cycles: [
    {
      frequency: { interval_unit: 'MONTH', interval_count: 1 },
      tenure_type: 'REGULAR',
      sequence: 1,
      // 0 means every month until the donor cancels.
      total_cycles: 0,
      // Matches DONATION_CURRENCY and DONATION_MIN_AMOUNT in data/donation.ts.
      pricing_scheme: { fixed_price: { currency_code: 'USD', value: '1.00' } }
    }
  ],
  payment_preferences: {
    // A missed month is not added on top of the next month's donation.
    auto_bill_outstanding: false,
    // PayPal pauses the donation after three failed payments in a row.
    payment_failure_threshold: 3
  }
})

console.log(`Created PayPal ${environment} product ${product.id} and plan ${plan.id}.`)
console.log('Add this line to .env, and to the deployed environment for the same PayPal account:')
console.log(`NUXT_PUBLIC_PAYPAL_MONTHLY_PLAN_ID=${plan.id}`)
