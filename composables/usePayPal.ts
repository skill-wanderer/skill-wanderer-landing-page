import { loadCoreSdkScript } from '@paypal/paypal-js/sdk-v6'
import type { SdkInstance } from '@paypal/paypal-js/sdk-v6'

// PayPal JavaScript SDK v6. Each component in this list adds its own methods to the SDK
// instance: one-time payments, and subscriptions for monthly donations.
const PAYPAL_COMPONENTS = ['paypal-payments', 'paypal-subscriptions'] as const

export type PayPalSdk = SdkInstance<typeof PAYPAL_COMPONENTS>

// One SDK instance per page load, shared by every component that asks for it.
let sdkPromise: Promise<PayPalSdk> | null = null

// English to match the site, but with the visitor's region, because PayPal's card form starts on
// the locale's country: a Vietnamese browser gets en-VN, so Vietnam is preselected, not the US.
const getRegionalEnglishLocale = () => {
  try {
    const region = new Intl.Locale(navigator.language).maximize().region

    return region && /^[A-Z]{2}$/.test(region) ? `en-${region}` : null
  } catch {
    return null
  }
}

export const usePayPal = () => {
  const { clientId, environment, monthlyPlanId } = useRuntimeConfig().public.paypal

  /** Loads PayPal's script from paypal.com on first use. Call it only in the browser. */
  const loadPayPal = () => {
    if (!clientId) {
      return Promise.reject(new Error('PayPal is not configured. Set NUXT_PUBLIC_PAYPAL_CLIENT_ID.'))
    }

    sdkPromise ??= loadCoreSdkScript({ environment: environment === 'production' ? 'production' : 'sandbox' })
      .then(async (paypal) => {
        if (!paypal) {
          throw new Error('The PayPal SDK can only load in the browser.')
        }

        const options = { clientId, components: PAYPAL_COMPONENTS, pageType: 'checkout' } as const
        const regionalLocale = getRegionalEnglishLocale()

        if (regionalLocale && regionalLocale !== 'en-US') {
          try {
            return await paypal.createInstance({ ...options, locale: regionalLocale })
          } catch {
            // PayPal rejects regions it does not serve (en-IR, for example), so fall back to US English.
          }
        }

        return paypal.createInstance({ ...options, locale: 'en-US' })
      })
      .catch((error: unknown) => {
        // Forget the failure so the next call can try again.
        sdkPromise = null
        throw error
      })

    return sdkPromise
  }

  return {
    isConfigured: Boolean(clientId),
    // Monthly donations also need the plan made by `npm run paypal:create-monthly-plan`.
    isMonthlyConfigured: Boolean(clientId && monthlyPlanId),
    loadPayPal
  }
}
