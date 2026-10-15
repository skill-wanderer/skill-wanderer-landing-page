<template>
  <div class="paypal-donate">
    <div v-if="completedMessage" ref="resultElement" class="donate-result" tabindex="-1">
      <p class="donate-thanks">{{ completedMessage }}</p>
      <button type="button" class="btn btn-outline" @click="resetDonation">Make Another Donation</button>
    </div>

    <div v-else class="donate-form">
      <fieldset v-if="isMonthlyConfigured" class="frequency-picker" :disabled="isLocked">
        <legend class="visually-hidden">How often to give</legend>
        <div class="frequency-options">
          <label class="frequency-option">
            <input v-model="frequency" type="radio" name="paypal-donation-frequency" value="once" />
            <span>One-time</span>
          </label>
          <label class="frequency-option">
            <input v-model="frequency" type="radio" name="paypal-donation-frequency" value="monthly" />
            <span>Monthly</span>
          </label>
        </div>
      </fieldset>

      <div class="amount-picker">
        <label for="paypal-donation-amount" class="amount-label">
          {{ frequency === 'monthly' ? 'Your monthly amount in US dollars' : 'Your amount in US dollars' }}
        </label>
        <div class="amount-field">
          <span aria-hidden="true">$</span>
          <input
            id="paypal-donation-amount"
            v-model="amountInput"
            type="text"
            inputmode="decimal"
            autocomplete="off"
            placeholder="Enter an amount"
            :disabled="isLocked"
            :aria-invalid="showAmountError"
            aria-describedby="paypal-donation-amount-hint"
          />
        </div>
        <p id="paypal-donation-amount-hint" :class="['amount-hint', { invalid: showAmountError }]">
          {{ DONATION_RANGE_HINT }}
        </p>

        <!-- Suggestions only: each fills in the amount above, which the donor can still change. -->
        <div class="amount-suggestions" role="group" aria-label="Suggested amounts">
          <button
            v-for="preset in DONATION_PRESET_AMOUNTS"
            :key="preset"
            type="button"
            class="amount-suggestion"
            :aria-pressed="donationAmount === preset.toFixed(2)"
            :disabled="isLocked"
            @click="amountInput = String(preset)"
          >{{ formatWholeAmount(preset) }}</button>
        </div>
      </div>

      <!-- A recurring payment is spelled out before the donor commits to it. -->
      <p v-if="frequency === 'monthly' && donationAmount" class="donate-summary">
        You'll give {{ formatDonationAmount(donationAmount) }} every month until you cancel, which you can do anytime in your PayPal account.
      </p>

      <div class="donate-button-area">
        <!--
          A PayPal web component, rebuilt when the frequency changes so its label follows.
          "|| null" removes the attribute instead of writing disabled="false".
        -->
        <paypal-button
          v-if="sdkState === 'ready' && isFrequencyReady"
          :key="frequency"
          :type="frequency === 'monthly' ? 'subscribe' : 'donate'"
          class="paypal-gold donate-button"
          :disabled="!donationAmount || isLocked || null"
          @click="startDonation"
        />
        <p v-else-if="sdkState === 'loading'" class="donate-status">Loading PayPal...</p>
        <p v-else-if="sdkState === 'ready'" class="donate-status">
          Monthly donations through PayPal are not available right now, but you can still give once.
        </p>
        <p v-else-if="sdkState === 'unavailable'" class="donate-status">
          PayPal is not available in this browser right now.
        </p>
        <template v-else>
          <p class="donate-status">PayPal could not load. Check your connection and try again.</p>
          <button type="button" class="btn btn-outline" @click="setUpPayPal">Try Again</button>
        </template>
      </div>

      <p class="donate-note">
        PayPal opens in its own window to finish the donation, so we never see your payment details.
      </p>
    </div>

    <div role="status" :aria-live="notice?.type === 'error' ? 'assertive' : 'polite'">
      <p v-if="notice" :class="['donate-notice', notice.type]">{{ notice.text }}</p>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed, nextTick, onBeforeUnmount, onMounted, ref, watch } from 'vue'
import type {
  OnApproveDataOneTimePayments,
  OnApproveDataSubscriptions,
  OneTimePaymentSession,
  PayPalSubscriptionPaymentSession
} from '@paypal/paypal-js/sdk-v6'
import type {
  DonationCaptureResponse,
  DonationFailure,
  DonationOrderResponse,
  MonthlyDonationStartResponse,
  MonthlyDonationStatusResponse
} from '~/types'
import {
  DONATION_CURRENCY,
  DONATION_DEFAULT_AMOUNT,
  DONATION_PRESET_AMOUNTS,
  DONATION_RANGE_HINT,
  formatDonationAmount,
  formatWholeAmount,
  parseDonationAmount
} from '~/data/donation'

type SdkState = 'loading' | 'ready' | 'unavailable' | 'failed'
type Frequency = 'once' | 'monthly'
type DonationApiResponse =
  | DonationOrderResponse
  | DonationCaptureResponse
  | MonthlyDonationStartResponse
  | MonthlyDonationStatusResponse

interface Notice {
  type: 'info' | 'error'
  text: string
}

// Leaves room for the server's own calls to PayPal, which can each take up to 15 seconds.
const REQUEST_TIMEOUT_MS = 35_000
const UNREACHABLE_ERROR = 'We could not reach PayPal right now. Please try again in a moment.'
const UNCONFIRMED_ERROR = 'We could not confirm your donation with PayPal. If PayPal emails you a receipt, it went through. If not, please try again.'
const UNCONFIRMED_MONTHLY_ERROR = 'We could not confirm your monthly donation with PayPal. If PayPal emails you about it, it is set up. If not, please try again.'

const { loadPayPal, isMonthlyConfigured } = usePayPal()

const sdkState = ref<SdkState>('loading')
const frequency = ref<Frequency>('once')
const isMonthlyEligible = ref(false)
const amountInput = ref(String(DONATION_DEFAULT_AMOUNT))
const isStarting = ref(false)
const isConfirming = ref(false)
const notice = ref<Notice | null>(null)
const completedMessage = ref('')
const resultElement = ref<HTMLElement | null>(null)

// SDK objects are not reactive state, so they stay out of refs.
let oneTimeSession: OneTimePaymentSession | null = null
let monthlySession: PayPalSubscriptionPaymentSession | null = null
// Set when our server refuses to start a donation, so its message wins over PayPal's generic error.
let startFailureMessage = ''
let isUnmounted = false

const donationAmount = computed(() => parseDonationAmount(amountInput.value))
const showAmountError = computed(() => amountInput.value.trim() !== '' && !donationAmount.value)
const isLocked = computed(() => isStarting.value || isConfirming.value)
const isFrequencyReady = computed(() => frequency.value === 'once' || isMonthlyEligible.value)

const showNotice = (type: Notice['type'], text: string) => {
  notice.value = { type, text }
}

// A message about one frequency means little once the donor switches to the other.
watch(frequency, () => {
  notice.value = null
})

// The server answers in JSON, but a proxy or an outage can still send back an HTML error page.
const isDonationResponse = <T extends DonationApiResponse>(value: unknown): value is T =>
  typeof value === 'object' && value !== null && typeof (value as { ok?: unknown }).ok === 'boolean'

// PayPal's own error messages are written for developers, so donors see these instead.
const describePayPalError = (error: unknown) => {
  switch ((error as { code?: unknown } | null)?.code) {
    case 'INSTRUMENT_DECLINED':
      return 'PayPal declined that payment method. Please try again with another card or account.'
    case 'ERR_DEV_UNABLE_TO_OPEN_POPUP':
      return 'Your browser blocked the PayPal window. Please allow pop-ups for this site and try again.'
    case 'NETWORK_ERROR':
      return UNREACHABLE_ERROR
    default:
      return 'Something went wrong with PayPal. Please try again.'
  }
}

// Asks our server to start a donation. A network failure or timeout comes back as null.
const postDonationStart = async (url: string, amount: string): Promise<unknown> => {
  try {
    return await $fetch(url, {
      method: 'POST',
      body: { amount },
      ignoreResponseError: true,
      timeout: REQUEST_TIMEOUT_MS
    })
  } catch {
    return null
  }
}

// Keeps our server's reason for refusing, so the donor sees it instead of PayPal's generic error.
const rememberStartFailure = (result: unknown) => {
  startFailureMessage = isDonationResponse<DonationFailure>(result) && !result.ok ? result.message : UNREACHABLE_ERROR
  return new Error(startFailureMessage)
}

const createOrder = async (amount: string) => {
  const result = await postDonationStart('/api/paypal/orders', amount)

  if (isDonationResponse<DonationOrderResponse>(result) && result.ok) {
    return { orderId: result.orderId }
  }

  throw rememberStartFailure(result)
}

const createMonthlyDonation = async (amount: string) => {
  const result = await postDonationStart('/api/paypal/subscriptions', amount)

  if (isDonationResponse<MonthlyDonationStartResponse>(result) && result.ok) {
    return { subscriptionId: result.subscriptionId }
  }

  throw rememberStartFailure(result)
}

// Runs after the donor approves in PayPal: our server confirms the donation and writes the thank-you.
const confirmDonation = async (request: () => Promise<unknown>, unconfirmedMessage: string) => {
  isConfirming.value = true
  showNotice('info', 'Confirming your donation with PayPal...')

  let result: unknown = null

  try {
    result = await request()
  } catch {
    // A network failure or timeout. PayPal may still have the donation, as the message below says.
  } finally {
    isConfirming.value = false
  }

  if (!isDonationResponse<DonationCaptureResponse | MonthlyDonationStatusResponse>(result)) {
    showNotice('error', unconfirmedMessage)
    return
  }

  if (!result.ok) {
    showNotice('error', result.message)
    return
  }

  notice.value = null
  completedMessage.value = result.message

  // The form the donor was using is gone, so move focus to the thank-you message.
  await nextTick()
  resultElement.value?.focus()
}

const captureDonation = ({ orderId }: OnApproveDataOneTimePayments) =>
  confirmDonation(
    () => $fetch(`/api/paypal/orders/${encodeURIComponent(orderId)}/capture`, {
      method: 'POST',
      ignoreResponseError: true,
      timeout: REQUEST_TIMEOUT_MS
    }),
    UNCONFIRMED_ERROR
  )

const confirmMonthlyDonation = ({ subscriptionId }: OnApproveDataSubscriptions) =>
  confirmDonation(
    () => $fetch(`/api/paypal/subscriptions/${encodeURIComponent(subscriptionId)}`, {
      ignoreResponseError: true,
      timeout: REQUEST_TIMEOUT_MS
    }),
    UNCONFIRMED_MONTHLY_ERROR
  )

// Both PayPal sessions report cancels and errors the same way.
const sessionCallbacks = {
  onCancel: () => showNotice('info', 'You closed PayPal before finishing, so nothing was charged.'),
  onError: (error: unknown) => {
    console.error('PayPal reported an error.', error)
    showNotice('error', startFailureMessage || describePayPalError(error))
  }
}

const startDonation = async () => {
  const amount = donationAmount.value

  if (!amount || isLocked.value) {
    return
  }

  isStarting.value = true
  notice.value = null
  startFailureMessage = ''

  try {
    // The request to our server is not awaited first: PayPal has to open its window during
    // this click, or the browser treats it as an unrequested pop-up and blocks it.
    if (frequency.value === 'monthly') {
      await monthlySession?.start({ presentationMode: 'auto' }, createMonthlyDonation(amount))
    } else {
      await oneTimeSession?.start({ presentationMode: 'auto' }, createOrder(amount))
    }
  } catch (error) {
    showNotice('error', startFailureMessage || describePayPalError(error))
  } finally {
    isStarting.value = false
  }
}

const setUpPayPal = async () => {
  sdkState.value = 'loading'

  try {
    const sdk = await loadPayPal()
    const [oneTimeMethods, monthlyMethods] = await Promise.all([
      sdk.findEligibleMethods({ currencyCode: DONATION_CURRENCY }),
      // Monthly giving is an extra, so a failed check only hides it.
      isMonthlyConfigured
        ? sdk.findEligibleMethods({ currencyCode: DONATION_CURRENCY, paymentFlow: 'RECURRING_PAYMENT' }).catch(() => null)
        : null
    ])

    if (isUnmounted) {
      return
    }

    if (!oneTimeMethods.isEligible('paypal')) {
      sdkState.value = 'unavailable'
      return
    }

    oneTimeSession ??= sdk.createPayPalOneTimePaymentSession({
      // The order is captured as soon as the donor approves it, so PayPal says "Pay Now", not "Continue".
      commit: true,
      onApprove: captureDonation,
      ...sessionCallbacks
    })

    if (monthlyMethods?.isEligible('paypal')) {
      monthlySession ??= sdk.createPayPalSubscriptionPaymentSession({
        onApprove: confirmMonthlyDonation,
        ...sessionCallbacks
      })
      isMonthlyEligible.value = true
    }

    sdkState.value = 'ready'
  } catch (error) {
    console.error('PayPal could not be set up.', error)

    if (!isUnmounted) {
      sdkState.value = 'failed'
    }
  }
}

const resetDonation = () => {
  completedMessage.value = ''
  notice.value = null
}

onMounted(setUpPayPal)

onBeforeUnmount(() => {
  isUnmounted = true
  oneTimeSession?.destroy()
  monthlySession?.destroy()
  oneTimeSession = null
  monthlySession = null
})
</script>

<style scoped>
.donate-form {
  display: flex;
  flex-direction: column;
  gap: 18px;
}

.frequency-picker {
  min-width: 0;
  margin: 0;
  padding: 0;
  border: 0;
}

/* Read by screen readers only: the two options already say what they are. */
.visually-hidden {
  position: absolute;
  width: 1px;
  height: 1px;
  margin: -1px;
  padding: 0;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border: 0;
}

.frequency-option {
  position: relative;
  cursor: pointer;
}

/* The radios stay in the page for keyboards and screen readers. People see the pills next to them. */
.frequency-option input {
  position: absolute;
  width: 1px;
  height: 1px;
  margin: 0;
  opacity: 0;
}

.frequency-option input:focus-visible + span {
  outline: 2px solid var(--accent-yellow);
  outline-offset: 2px;
}

.frequency-picker:disabled .frequency-option {
  cursor: not-allowed;
  opacity: 0.6;
}

/* A two-way switch, as wide as the PayPal button. */
.frequency-options {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 4px;
  max-width: 360px;
  padding: 4px;
  border: 2px solid rgba(255, 107, 53, 0.3);
  border-radius: 50px;
}

.frequency-option span {
  display: block;
  padding: 8px 12px;
  border-radius: 50px;
  font-weight: 600;
  text-align: center;
  transition: background 0.2s ease, color 0.2s ease;
}

.frequency-option:hover span {
  color: var(--accent-yellow);
}

.frequency-option input:checked + span {
  background: linear-gradient(135deg, var(--primary-orange), var(--deep-orange));
  color: white;
}

.amount-label {
  display: block;
  margin-bottom: 10px;
  font-weight: 600;
}

/* The donor's own amount comes first, as wide as the PayPal button. */
.amount-field {
  display: flex;
  align-items: center;
  gap: 6px;
  max-width: 360px;
  padding: 0 20px;
  border: 2px solid rgba(255, 107, 53, 0.3);
  border-radius: 50px;
  background: rgba(255, 255, 255, 0.05);
  font-size: 1.15rem;
  font-weight: 600;
  transition: border-color 0.2s ease, box-shadow 0.2s ease;
}

.amount-field:focus-within {
  border-color: var(--primary-orange);
  box-shadow: 0 0 0 4px rgba(255, 107, 53, 0.1);
}

.amount-field input {
  flex: 1;
  min-width: 0;
  padding: 12px 0;
  border: 0;
  background: transparent;
  color: var(--light-text);
  font: inherit;
  outline: none;
}

.amount-field input::placeholder {
  color: rgba(224, 224, 224, 0.5);
  font-weight: 400;
}

.amount-field input:disabled {
  cursor: not-allowed;
  opacity: 0.6;
}

/* Three even suggestions under the field. */
.amount-suggestions {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 8px;
  max-width: 360px;
  margin-top: 12px;
}

.amount-suggestion {
  padding: 8px 12px;
  border: 2px solid rgba(255, 107, 53, 0.3);
  border-radius: 50px;
  background: transparent;
  color: var(--light-text);
  font: inherit;
  font-weight: 600;
  cursor: pointer;
  transition: background 0.2s ease, border-color 0.2s ease, color 0.2s ease;
}

.amount-suggestion:hover:not(:disabled) {
  border-color: var(--primary-orange);
}

/* Lit up while the field holds exactly this amount. */
.amount-suggestion[aria-pressed='true'] {
  background: rgba(255, 107, 53, 0.15);
  border-color: var(--primary-orange);
  color: var(--accent-yellow);
}

.amount-suggestion:focus-visible {
  outline: 2px solid var(--accent-yellow);
  outline-offset: 2px;
}

.amount-suggestion:disabled {
  cursor: not-allowed;
  opacity: 0.6;
}

.amount-hint {
  margin: 6px 0 0;
  font-size: 0.85rem;
  opacity: 0.75;
}

.amount-hint.invalid {
  color: #ef4444;
  opacity: 1;
}

.donate-summary {
  max-width: 360px;
  margin: 0;
  font-size: 0.95rem;
  line-height: 1.6;
}

.donate-button-area {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 12px;
}

.donate-button {
  display: block;
  width: 100%;
  max-width: 360px;
  /* A pill, like the site's own buttons. */
  --paypal-button-border-radius: 50px;
}

.donate-status,
.donate-note {
  margin: 0;
  line-height: 1.6;
}

.donate-status {
  font-size: 0.95rem;
  opacity: 0.8;
}

.donate-note {
  font-size: 0.85rem;
  opacity: 0.7;
}

.donate-notice {
  margin: 16px 0 0;
  padding: 12px 16px;
  border-radius: 8px;
  font-weight: 500;
  line-height: 1.6;
}

.donate-notice.info {
  background: rgba(59, 130, 246, 0.1);
  color: #60a5fa;
  border: 1px solid rgba(96, 165, 250, 0.35);
}

.donate-notice.error {
  background: rgba(239, 68, 68, 0.1);
  color: #ef4444;
  border: 1px solid rgba(239, 68, 68, 0.3);
}

.donate-result {
  padding: 18px 20px;
  border: 1px solid rgba(34, 197, 94, 0.3);
  border-radius: 12px;
  background: rgba(34, 197, 94, 0.1);
}

/* Focus moves here only so screen readers read the message. It is not a control. */
.donate-result:focus {
  outline: none;
}

.donate-thanks {
  margin: 0 0 14px;
  color: #22c55e;
  font-weight: 600;
  line-height: 1.7;
}

.paypal-donate .btn {
  padding: 10px 20px;
  font-family: inherit;
  font-size: 0.95rem;
}
</style>
