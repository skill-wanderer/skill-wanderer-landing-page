<template>
  <section class="subscribe-section">
    <div class="subscribe-container">
      <div class="subscribe-content">
        <h2>Stay in the Loop</h2>
        <p>Get notified about guild updates, new learning paths, and community initiatives</p>
        
        <form @submit.prevent="handleSubscribe" class="subscribe-form">
          <div class="input-group">
            <label class="sr-only" for="subscribe-email">Email address</label>
            <input
              v-model="email"
              id="subscribe-email"
              type="email"
              placeholder="Enter your email address"
              autocomplete="email"
              inputmode="email"
              maxlength="254"
              required
              :disabled="isSubmitting"
              class="email-input"
            />
            <button
              type="submit"
              :disabled="isSubmitting || !trimmedEmail"
              class="subscribe-btn"
            >
              <span v-if="!isSubmitting">Subscribe</span>
              <span v-else>Subscribing...</span>
            </button>
          </div>
        </form>

        <div
          v-if="message"
          :class="['message', messageType]"
          role="status"
          :aria-live="messageType === 'error' ? 'assertive' : 'polite'"
        >
          {{ message }}
        </div>

        <p class="privacy-note">
          We respect your privacy. Unsubscribe at any time.
        </p>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { computed, onBeforeUnmount, onMounted, ref } from 'vue'
import type { SubscribeResponse } from '~/types'

const SUBSCRIBE_REQUEST_TIMEOUT_MS = 10_000
const SUBSCRIBE_PENDING_STORAGE_KEY = 'skill-wanderer:subscribe-pending'
const SUBSCRIBE_PENDING_NOTICE_WINDOW_MS = 30_000

const email = ref('')
const isSubmitting = ref(false)
const message = ref('')
const messageType = ref<'success' | 'error' | 'info'>('success')
const isPageUnloading = ref(false)
const route = useRoute()

const trimmedEmail = computed(() => email.value.trim())
const subscribeSource = computed<'home' | 'contact'>(() => (route.path === '/contact' ? 'contact' : 'home'))

const getRequestReference = (requestId: string) => requestId.split('-')[0] || requestId

const formatFailureMessage = (baseMessage: string, requestId?: string, retryAfterSeconds?: number) => {
  const retryMessage = typeof retryAfterSeconds === 'number'
    ? ` Try again in ${retryAfterSeconds} second${retryAfterSeconds === 1 ? '' : 's'}.`
    : ''
  const referenceMessage = requestId ? ` Reference: ${getRequestReference(requestId)}.` : ''

  return `${baseMessage}${retryMessage}${referenceMessage}`.trim()
}

const isSubscribeResponse = (value: unknown): value is SubscribeResponse => {
  if (!value || typeof value !== 'object') {
    return false
  }

  const payload = value as {
    ok?: unknown
    status?: unknown
    message?: unknown
    requestId?: unknown
    retryAfterSeconds?: unknown
  }

  if (typeof payload.ok !== 'boolean' || typeof payload.status !== 'string' || typeof payload.message !== 'string' || typeof payload.requestId !== 'string') {
    return false
  }

  if (payload.ok) {
    return payload.status === 'accepted' || payload.status === 'confirmed'
  }

  const validFailureStatuses = new Set(['invalid', 'throttled', 'unavailable', 'failed'])

  return validFailureStatuses.has(payload.status)
    && (payload.retryAfterSeconds === undefined || typeof payload.retryAfterSeconds === 'number')
}

const readSubscribeResponse = async (response: Response) => {
  const contentType = response.headers.get('content-type') || ''

  if (!contentType.includes('application/json')) {
    return null
  }

  const payload = await response.json() as unknown
  return isSubscribeResponse(payload) ? payload : null
}

const setPendingRequestMarker = () => {
  if (!import.meta.client) {
    return
  }

  window.sessionStorage.setItem(
    SUBSCRIBE_PENDING_STORAGE_KEY,
    JSON.stringify({
      startedAt: Date.now(),
      source: subscribeSource.value
    })
  )
}

const clearPendingRequestMarker = () => {
  if (!import.meta.client) {
    return
  }

  window.sessionStorage.removeItem(SUBSCRIBE_PENDING_STORAGE_KEY)
}

const restorePendingRequestNotice = () => {
  if (!import.meta.client) {
    return
  }

  const rawValue = window.sessionStorage.getItem(SUBSCRIBE_PENDING_STORAGE_KEY)

  if (!rawValue) {
    return
  }

  clearPendingRequestMarker()

  try {
    const payload = JSON.parse(rawValue) as { startedAt?: number }

    if (typeof payload.startedAt === 'number' && Date.now() - payload.startedAt <= SUBSCRIBE_PENDING_NOTICE_WINDOW_MS) {
      message.value = 'A previous subscription request may still be processing. If you do not receive a confirmation email shortly, you can try again.'
      messageType.value = 'info'
    }
  } catch {
    // Ignore unreadable pending state.
  }
}

onMounted(() => {
  const handlePageHide = () => {
    isPageUnloading.value = true
  }

  window.addEventListener('pagehide', handlePageHide)
  window.addEventListener('beforeunload', handlePageHide)
  restorePendingRequestNotice()

  onBeforeUnmount(() => {
    window.removeEventListener('pagehide', handlePageHide)
    window.removeEventListener('beforeunload', handlePageHide)
  })
})

const handleSubscribe = async () => {
  const normalizedEmail = trimmedEmail.value

  if (!normalizedEmail || isSubmitting.value) return

  isPageUnloading.value = false
  isSubmitting.value = true
  message.value = ''
  setPendingRequestMarker()

  const controller = new AbortController()
  let didTimeout = false
  const timeoutId = window.setTimeout(() => {
    didTimeout = true
    controller.abort()
  }, SUBSCRIBE_REQUEST_TIMEOUT_MS)

  try {
    const response = await fetch('/api/subscribe', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      signal: controller.signal,
      body: JSON.stringify({
        email: normalizedEmail,
        source: subscribeSource.value
      })
    })

    const requestId = response.headers.get('x-request-id') || undefined
    const result = await readSubscribeResponse(response)

    if (!result) {
      message.value = formatFailureMessage('Subscription service returned an unexpected response.', requestId)
      messageType.value = 'error'
      return
    }

    if (result.ok && result.status === 'confirmed') {
      message.value = result.message
      messageType.value = 'success'
      email.value = ''
      return
    }

    if (result.ok && result.status === 'accepted') {
      message.value = result.message
      messageType.value = 'info'
      email.value = ''
      return
    }

    if (!result.ok) {
      message.value = formatFailureMessage(result.message, result.requestId, result.retryAfterSeconds)
      messageType.value = 'error'
      return
    }

    message.value = formatFailureMessage('Subscription service returned an unexpected response.', result.requestId)
    messageType.value = 'error'
  } catch {
    message.value = didTimeout
      ? 'Subscription is taking longer than expected. Please try again in a moment.'
      : 'Something went wrong. Please try again.'
    messageType.value = 'error'
  } finally {
    window.clearTimeout(timeoutId)

    if (!isPageUnloading.value) {
      clearPendingRequestMarker()
    }

    isSubmitting.value = false
  }
}
</script>

<style scoped>
.subscribe-section {
  background: linear-gradient(135deg, rgba(255, 107, 53, 0.1) 0%, rgba(255, 217, 61, 0.05) 100%);
  padding: 80px 20px;
  border-top: 1px solid rgba(255, 107, 53, 0.2);
}

.subscribe-container {
  max-width: 800px;
  margin: 0 auto;
  text-align: center;
}

.subscribe-content h2 {
  font-size: clamp(2rem, 5vw, 2.5rem);
  color: var(--primary-orange, #FF6B35);
  margin-bottom: 15px;
  font-weight: 700;
}

.subscribe-content p {
  font-size: 1.1rem;
  opacity: 0.9;
  margin-bottom: 40px;
  color: var(--light-text, #e0e0e0);
}

.subscribe-form {
  margin-bottom: 20px;
}

.input-group {
  display: flex;
  gap: 15px;
  max-width: 500px;
  margin: 0 auto;
  flex-wrap: wrap;
}

.email-input {
  flex: 1;
  min-width: 250px;
  padding: 15px 20px;
  border: 2px solid rgba(255, 107, 53, 0.3);
  border-radius: 50px;
  background: rgba(255, 255, 255, 0.05);
  color: var(--light-text, #e0e0e0);
  font-size: 1rem;
  outline: none;
  transition: all 0.3s ease;
}

.email-input::placeholder {
  color: rgba(224, 224, 224, 0.6);
}

.email-input:focus {
  border-color: var(--primary-orange, #FF6B35);
  background: rgba(255, 255, 255, 0.08);
  box-shadow: 0 0 0 4px rgba(255, 107, 53, 0.1);
}

.email-input:disabled {
  opacity: 0.6;
  cursor: not-allowed;
}

.subscribe-btn {
  padding: 15px 30px;
  background: linear-gradient(135deg, var(--primary-orange, #FF6B35), var(--deep-orange, #E85D25));
  color: white;
  border: none;
  border-radius: 50px;
  font-size: 1rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  white-space: nowrap;
  min-width: 120px;
}

.subscribe-btn:hover:not(:disabled) {
  transform: translateY(-2px);
  box-shadow: 0 6px 25px rgba(255, 107, 53, 0.4);
}

.subscribe-btn:disabled {
  opacity: 0.6;
  cursor: not-allowed;
  transform: none;
}

.message {
  padding: 12px 20px;
  border-radius: 8px;
  margin-bottom: 20px;
  font-weight: 500;
}

.message.success {
  background: rgba(34, 197, 94, 0.1);
  color: #22c55e;
  border: 1px solid rgba(34, 197, 94, 0.3);
}

.message.info {
  background: rgba(59, 130, 246, 0.1);
  color: #60a5fa;
  border: 1px solid rgba(96, 165, 250, 0.35);
}

.message.error {
  background: rgba(239, 68, 68, 0.1);
  color: #ef4444;
  border: 1px solid rgba(239, 68, 68, 0.3);
}

.sr-only {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border: 0;
}

.privacy-note {
  font-size: 0.9rem;
  opacity: 0.7;
  color: var(--light-text, #e0e0e0);
}

/* Responsive */
@media (max-width: 600px) {
  .input-group {
    flex-direction: column;
    align-items: stretch;
  }

  .email-input {
    min-width: unset;
    margin-bottom: 15px;
  }

  .subscribe-btn {
    width: 100%;
  }
}

/* CSS Variables fallback */
:root {
  --primary-orange: #FF6B35;
  --deep-orange: #E85D25;
  --light-text: #e0e0e0;
}
</style>
