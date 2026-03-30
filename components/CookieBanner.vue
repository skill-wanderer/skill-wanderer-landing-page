<template>
  <Transition name="cookie-banner">
    <div v-if="visible" class="cookie-banner" role="region" aria-label="Cookie notice">
      <div class="cookie-banner-inner">
        <div class="cookie-banner-accent" aria-hidden="true"></div>
        <div class="cookie-banner-content">
          <div class="cookie-banner-icon-wrap" aria-hidden="true">
            <svg class="cookie-shield-icon" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M12 2L3 7v5c0 5.25 3.83 10.16 9 11.25C17.17 22.16 21 17.25 21 12V7l-9-5z" fill="rgba(255,107,53,0.15)" stroke="#FF6B35" stroke-width="1.5"/>
              <path d="M9 12l2 2 4-4" stroke="#FF6B35" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
          </div>
          <div class="cookie-banner-body">
            <p class="cookie-banner-heading">Essential cookies only</p>
            <p class="cookie-banner-desc">
              Only the minimum cookies required for this site to function. No tracking, no advertising, no profiling.
              <NuxtLink to="/cookie-policy" class="learn-more">Cookie policy &rarr;</NuxtLink>
            </p>
          </div>
          <button class="cookie-banner-btn" @click="dismiss" aria-label="Acknowledge cookie notice">
            <span>Got it</span>
          </button>
        </div>
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
  padding: 0 16px 16px;
  pointer-events: none;
}

.cookie-banner-inner {
  max-width: 720px;
  margin: 0 auto;
  background: linear-gradient(135deg, #1c1c1e 0%, #252528 100%);
  border: 1px solid rgba(255, 107, 53, 0.25);
  border-radius: 14px;
  overflow: hidden;
  box-shadow:
    0 8px 32px rgba(0, 0, 0, 0.45),
    0 0 0 1px rgba(255, 255, 255, 0.04) inset,
    0 -1px 24px rgba(255, 107, 53, 0.08);
  pointer-events: auto;
  position: relative;
}

.cookie-banner-accent {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 3px;
  background: linear-gradient(90deg, #FF6B35, #ff8a65, #FF6B35);
  background-size: 200% 100%;
  animation: accentShimmer 3s ease-in-out infinite;
}

@keyframes accentShimmer {
  0%, 100% { background-position: 0% 50%; }
  50% { background-position: 100% 50%; }
}

.cookie-banner-content {
  display: flex;
  align-items: center;
  gap: 16px;
  padding: 18px 22px;
}

.cookie-banner-icon-wrap {
  flex-shrink: 0;
  width: 42px;
  height: 42px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgba(255, 107, 53, 0.08);
  border-radius: 10px;
  border: 1px solid rgba(255, 107, 53, 0.15);
}

.cookie-shield-icon {
  width: 22px;
  height: 22px;
}

.cookie-banner-body {
  flex: 1;
  min-width: 0;
}

.cookie-banner-heading {
  margin: 0 0 2px;
  font-size: 0.9rem;
  font-weight: 700;
  color: #FF6B35;
  letter-spacing: 0.02em;
  text-transform: uppercase;
}

.cookie-banner-desc {
  margin: 0;
  color: #b0b0b0;
  font-size: 0.85rem;
  line-height: 1.5;
}

.learn-more {
  color: #e0e0e0;
  text-decoration: none;
  margin-left: 4px;
  white-space: nowrap;
  font-weight: 500;
  transition: color 0.2s ease;
  border-bottom: 1px dotted rgba(255, 255, 255, 0.3);
}

.learn-more:hover {
  color: #FF6B35;
  border-bottom-color: #FF6B35;
}

.cookie-banner-btn {
  background: transparent;
  color: #FF6B35;
  border: 1.5px solid #FF6B35;
  border-radius: 8px;
  padding: 9px 22px;
  font-size: 0.88rem;
  font-weight: 600;
  cursor: pointer;
  white-space: nowrap;
  flex-shrink: 0;
  transition: all 0.2s ease;
  letter-spacing: 0.02em;
}

.cookie-banner-btn:hover {
  background: #FF6B35;
  color: #fff;
  box-shadow: 0 0 16px rgba(255, 107, 53, 0.35);
}

.cookie-banner-btn:active {
  transform: scale(0.97);
}

/* Transition */
.cookie-banner-enter-active {
  transition: transform 0.4s cubic-bezier(0.16, 1, 0.3, 1), opacity 0.35s ease;
}

.cookie-banner-leave-active {
  transition: transform 0.25s cubic-bezier(0.4, 0, 1, 1), opacity 0.2s ease;
}

.cookie-banner-enter-from {
  transform: translateY(20px);
  opacity: 0;
}

.cookie-banner-leave-to {
  transform: translateY(10px);
  opacity: 0;
}

@media (max-width: 600px) {
  .cookie-banner {
    padding: 0 10px 10px;
  }

  .cookie-banner-content {
    flex-wrap: wrap;
    gap: 12px;
    padding: 16px;
  }

  .cookie-banner-icon-wrap {
    display: none;
  }

  .cookie-banner-body {
    flex-basis: 100%;
  }

  .cookie-banner-btn {
    width: 100%;
    text-align: center;
    padding: 11px 22px;
  }
}
</style>
