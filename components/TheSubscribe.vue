<template>
  <section class="subscribe-section">
    <div class="subscribe-container">
      <div class="subscribe-content">
        <h2 class="subscribe-title">Join the Skill-Wanderer Community</h2>
        <p class="subscribe-description">
          Get exclusive insights, early access to new content, and join a community of passionate learners.
          No spam, just valuable content delivered to your inbox.
        </p>
        
        <form @submit.prevent="handleSubmit" class="subscribe-form">
          <div class="input-group">
            <input
              v-model="email"
              type="email"
              placeholder="Enter your email address"
              required
              class="email-input"
              :disabled="isSubmitting"
            />
            <button
              type="submit"
              class="subscribe-btn"
              :disabled="isSubmitting"
            >
              <span v-if="!isSubmitting">Subscribe</span>
              <span v-else class="loading">
                <svg class="spinner" viewBox="0 0 24 24">
                  <circle cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4" fill="none" stroke-dasharray="32" stroke-dashoffset="32">
                    <animate attributeName="stroke-dashoffset" values="32;0" dur="1s" repeatCount="indefinite"/>
                  </circle>
                </svg>
                Subscribing...
              </span>
            </button>
          </div>
        </form>

        <div v-if="message" class="message" :class="messageType">
          {{ message }}
        </div>

        <p class="privacy-note">
          We respect your privacy. Unsubscribe at any time. Read our 
          <NuxtLink to="/privacy" class="privacy-link">Privacy Policy</NuxtLink>.
        </p>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { collection, addDoc, serverTimestamp } from 'firebase/firestore'

const email = ref('')
const isSubmitting = ref(false)
const message = ref('')
const messageType = ref<'success' | 'error'>('success')

const { $firestore } = useNuxtApp()

const handleSubmit = async () => {
  if (!email.value || isSubmitting.value) return

  isSubmitting.value = true
  message.value = ''

  try {
    // Add email to Firestore
    await addDoc(collection($firestore, 'subscribers'), {
      email: email.value,
      timestamp: serverTimestamp(),
      source: 'website',
      subscribed: true
    })

    message.value = 'Thank you for subscribing! Welcome to the Skill-Wanderer community!'
    messageType.value = 'success'
    email.value = ''
    
  } catch (error) {
    console.error('Error subscribing:', error)
    message.value = 'Oops! Something went wrong. Please try again.'
    messageType.value = 'error'
  } finally {
    isSubmitting.value = false
    
    // Clear message after 5 seconds
    setTimeout(() => {
      message.value = ''
    }, 5000)
  }
}
</script>

<style scoped>
.subscribe-section {
  background: linear-gradient(135deg, #FF6B35 0%, #E85D25 100%);
  padding: 80px 20px;
  margin-top: 80px;
  position: relative;
  overflow: hidden;
}

.subscribe-section::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><defs><pattern id="grid" width="10" height="10" patternUnits="userSpaceOnUse"><path d="M 10 0 L 0 0 0 10" fill="none" stroke="rgba(255,255,255,0.1)" stroke-width="1"/></pattern></defs><rect width="100" height="100" fill="url(%23grid)"/></svg>');
  opacity: 0.3;
}

.subscribe-container {
  max-width: 800px;
  margin: 0 auto;
  position: relative;
  z-index: 1;
}

.subscribe-content {
  text-align: center;
  color: white;
}

.subscribe-title {
  font-size: clamp(2rem, 4vw, 3rem);
  font-weight: 800;
  margin-bottom: 20px;
  text-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.subscribe-description {
  font-size: 1.2rem;
  line-height: 1.6;
  margin-bottom: 40px;
  opacity: 0.95;
  max-width: 600px;
  margin-left: auto;
  margin-right: auto;
}

.subscribe-form {
  margin-bottom: 20px;
}

.input-group {
  display: flex;
  gap: 0;
  max-width: 500px;
  margin: 0 auto;
  border-radius: 50px;
  overflow: hidden;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
}

.email-input {
  flex: 1;
  padding: 16px 24px;
  border: none;
  font-size: 1rem;
  background: white;
  color: #333;
  outline: none;
  transition: all 0.3s ease;
}

.email-input:focus {
  box-shadow: inset 0 0 0 2px rgba(255, 217, 61, 0.5);
}

.email-input::placeholder {
  color: #666;
}

.subscribe-btn {
  padding: 16px 32px;
  background: #FFD93D;
  color: #333;
  border: none;
  font-size: 1rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  white-space: nowrap;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  min-width: 140px;
}

.subscribe-btn:hover:not(:disabled) {
  background: #FFC107;
  transform: translateY(-1px);
}

.subscribe-btn:disabled {
  opacity: 0.8;
  cursor: not-allowed;
}

.loading {
  display: flex;
  align-items: center;
  gap: 8px;
}

.spinner {
  width: 16px;
  height: 16px;
  animation: spin 1s linear infinite;
}

@keyframes spin {
  to {
    transform: rotate(360deg);
  }
}

.message {
  margin: 20px 0;
  padding: 16px;
  border-radius: 12px;
  font-weight: 500;
  animation: fadeIn 0.3s ease-out;
}

.message.success {
  background: rgba(255, 255, 255, 0.2);
  color: white;
  border: 1px solid rgba(255, 255, 255, 0.3);
}

.message.error {
  background: rgba(255, 0, 0, 0.2);
  color: white;
  border: 1px solid rgba(255, 0, 0, 0.3);
}

.privacy-note {
  font-size: 0.9rem;
  opacity: 0.8;
  margin-top: 20px;
}

.privacy-link {
  color: #FFD93D;
  text-decoration: underline;
  font-weight: 500;
}

.privacy-link:hover {
  color: #FFC107;
}

@keyframes fadeIn {
  from {
    opacity: 0;
    transform: translateY(10px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

/* Responsive */
@media (max-width: 768px) {
  .subscribe-section {
    padding: 60px 20px;
    margin-top: 60px;
  }

  .input-group {
    flex-direction: column;
    border-radius: 16px;
  }

  .email-input {
    border-radius: 16px 16px 0 0;
  }

  .subscribe-btn {
    border-radius: 0 0 16px 16px;
    min-width: unset;
  }

  .subscribe-description {
    font-size: 1.1rem;
    margin-bottom: 30px;
  }
}
</style>
