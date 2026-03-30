<template>
  <Transition name="cookie-banner">
    <div v-if="visible" class="cookie-banner" role="region" aria-label="Cookie notice">
      <div class="cookie-banner-content">
        <div class="cookie-banner-text">
          <span class="cookie-icon" aria-hidden="true">&#x1F36A;</span>
          <p>
            This website uses <strong>essential cookies only</strong> — the minimum required for the site to function. No tracking, no advertising, no profiling.
            <NuxtLink to="/cookie-policy" class="learn-more">Learn more</NuxtLink>
          </p>
        </div>
        <button class="cookie-banner-btn" @click="dismiss" aria-label="Acknowledge cookie notice">
          Got it
        </button>
      </div>
    </div>
  </Transition>
</template>

<script setup lang="ts">
const visible = ref(false)

onMounted(() => {
  if (typeof localStorage !== 'undefined') {
    visible.value = !localStorage.getItem('cookie_banner_dismissed')
  }
})

function dismiss() {
  visible.value = false
  if (typeof localStorage !== 'undefined') {
    localStorage.setItem('cookie_banner_dismissed', '1')
  }
}
</script>

<style scoped>
.cookie-banner {
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 9999;
  background: #1a1a1a;
  border-top: 2px solid rgba(255, 107, 53, 0.5);
  padding: 16px 24px;
  box-shadow: 0 -4px 24px rgba(0, 0, 0, 0.5);
}

.cookie-banner-content {
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 20px;
}

.cookie-banner-text {
  display: flex;
  align-items: center;
  gap: 12px;
  flex: 1;
}

.cookie-icon {
  font-size: 1.4rem;
  flex-shrink: 0;
}

.cookie-banner-text p {
  margin: 0;
  color: #e0e0e0;
  font-size: 0.95rem;
  line-height: 1.5;
}

.cookie-banner-text strong {
  color: #FF6B35;
}

.learn-more {
  color: #FF6B35;
  text-decoration: underline;
  margin-left: 6px;
  white-space: nowrap;
  font-weight: 500;
  transition: color 0.2s ease;
}

.learn-more:hover {
  color: #ff8a65;
}

.cookie-banner-btn {
  background: #FF6B35;
  color: #fff;
  border: none;
  border-radius: 6px;
  padding: 10px 24px;
  font-size: 0.95rem;
  font-weight: 600;
  cursor: pointer;
  white-space: nowrap;
  flex-shrink: 0;
  transition: background 0.2s ease;
}

.cookie-banner-btn:hover {
  background: #E85D25;
}

/* Transition */
.cookie-banner-enter-active,
.cookie-banner-leave-active {
  transition: transform 0.3s ease, opacity 0.3s ease;
}

.cookie-banner-enter-from,
.cookie-banner-leave-to {
  transform: translateY(100%);
  opacity: 0;
}

@media (max-width: 600px) {
  .cookie-banner-content {
    flex-direction: column;
    align-items: flex-start;
    gap: 14px;
  }

  .cookie-banner-btn {
    width: 100%;
    text-align: center;
  }
}
</style>
