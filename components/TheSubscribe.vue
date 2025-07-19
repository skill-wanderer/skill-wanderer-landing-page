<template>
  <section class="subscribe-section">
    <div class="subscribe-container">
      <div class="subscribe-content">
        <h2>Stay in the Loop</h2>
        <p>Get notified when the platform launches and receive updates on new learning content</p>
        
        <form @submit.prevent="handleSubscribe" class="subscribe-form">
          <div class="input-group">
            <input
              v-model="email"
              type="email"
              placeholder="Enter your email address"
              required
              :disabled="isSubmitting"
              class="email-input"
            />
            <button
              type="submit"
              :disabled="isSubmitting || !email"
              class="subscribe-btn"
            >
              <span v-if="!isSubmitting">Subscribe</span>
              <span v-else>Subscribing...</span>
            </button>
          </div>
        </form>

        <div v-if="message" :class="['message', messageType]">
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
import { ref } from 'vue'
import { collection, addDoc, serverTimestamp } from 'firebase/firestore'
import type { Subscriber } from '~/types'

const { $firestore } = useNuxtApp()

const email = ref('')
const isSubmitting = ref(false)
const message = ref('')
const messageType = ref<'success' | 'error'>('success')

const handleSubscribe = async () => {
  if (!email.value || isSubmitting.value) return

  isSubmitting.value = true
  message.value = ''

  try {
    // Add email to Firestore
    const subscriberData: Omit<Subscriber, 'subscribedAt'> & { subscribedAt: any } = {
      email: email.value,
      subscribedAt: serverTimestamp(),
      source: 'landing-page'
    }

    await addDoc(collection($firestore, 'subscribers'), subscriberData)

    message.value = 'Thanks for subscribing! We\'ll keep you updated.'
    messageType.value = 'success'
    email.value = ''
  } catch (error) {
    console.error('Error adding subscriber:', error)
    message.value = 'Something went wrong. Please try again.'
    messageType.value = 'error'
  } finally {
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

.message.error {
  background: rgba(239, 68, 68, 0.1);
  color: #ef4444;
  border: 1px solid rgba(239, 68, 68, 0.3);
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
