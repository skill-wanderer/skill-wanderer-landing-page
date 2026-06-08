<template>
  <section
    class="fullwidth-hero"
    :class="{ 'fullwidth-hero--overlay': overlayDarkness }"
    :style="heroStyle"
  >
    <div v-if="overlayDarkness" class="fullwidth-hero__overlay" :style="{ opacity: overlayDarkness }"></div>
    <div class="fullwidth-hero__content" :class="`fullwidth-hero__content--${align}`">
      <span v-if="badge" class="fullwidth-hero__badge">{{ badge }}</span>
      <h1 v-if="title" class="fullwidth-hero__title">{{ title }}</h1>
      <p v-if="subtitle" class="fullwidth-hero__subtitle">{{ subtitle }}</p>
      <div v-if="$slots.default" class="fullwidth-hero__actions">
        <slot />
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { computed } from 'vue'

interface Props {
  title?: string
  subtitle?: string
  badge?: string
  backgroundImage?: string
  backgroundColor?: string
  align?: 'left' | 'center' | 'right'
  minHeight?: string
  overlayDarkness?: number
}

const props = withDefaults(defineProps<Props>(), {
  title: undefined,
  subtitle: undefined,
  badge: undefined,
  backgroundImage: undefined,
  backgroundColor: undefined,
  align: 'center',
  minHeight: '60vh',
  overlayDarkness: 0,
})

const heroStyle = computed(() => {
  const style: Record<string, string> = {
    minHeight: props.minHeight,
  }
  if (props.backgroundImage) {
    style.backgroundImage = `url(${props.backgroundImage})`
  }
  if (props.backgroundColor) {
    style.backgroundColor = props.backgroundColor
  }
  return style
})
</script>

<style scoped>
.fullwidth-hero {
  position: relative;
  width: 100%;
  display: flex;
  align-items: center;
  padding: 120px 40px 80px;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  background-color: var(--dark-bg);
  overflow: hidden;
}

.fullwidth-hero::before {
  content: '';
  position: absolute;
  inset: 0;
  background:
    radial-gradient(circle at 20% 50%, rgba(255, 107, 53, 0.08) 0%, transparent 50%),
    radial-gradient(circle at 80% 50%, rgba(255, 217, 61, 0.04) 0%, transparent 50%);
  pointer-events: none;
}

.fullwidth-hero__overlay {
  position: absolute;
  inset: 0;
  background: var(--dark-bg);
  pointer-events: none;
}

.fullwidth-hero__content {
  position: relative;
  z-index: 1;
  max-width: 1200px;
  width: 100%;
  margin: 0 auto;
  animation: fadeInUp 0.8s ease-out both;
}

.fullwidth-hero__content--center {
  text-align: center;
}

.fullwidth-hero__content--left {
  text-align: left;
  max-width: 700px;
  margin: 0;
}

.fullwidth-hero__content--right {
  text-align: right;
  max-width: 700px;
  margin-left: auto;
  margin-right: 0;
}

.fullwidth-hero__badge {
  display: inline-block;
  padding: 8px 20px;
  border-radius: 30px;
  font-size: 0.85rem;
  font-weight: 600;
  letter-spacing: 0.5px;
  text-transform: uppercase;
  background: rgba(255, 107, 53, 0.15);
  color: var(--primary-orange);
  border: 1px solid rgba(255, 107, 53, 0.3);
  margin-bottom: 24px;
}

.fullwidth-hero__title {
  font-size: clamp(2.5rem, 6vw, 4.5rem);
  font-weight: 800;
  line-height: 1.1;
  margin-bottom: 24px;
  background: linear-gradient(135deg, var(--primary-orange), var(--accent-yellow));
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
}

.fullwidth-hero__subtitle {
  font-size: clamp(1.1rem, 2vw, 1.4rem);
  line-height: 1.7;
  color: var(--light-text);
  max-width: 650px;
  margin-bottom: 40px;
}

.fullwidth-hero__content--center .fullwidth-hero__subtitle {
  margin-left: auto;
  margin-right: auto;
}

.fullwidth-hero__actions {
  display: flex;
  gap: 16px;
  flex-wrap: wrap;
}

.fullwidth-hero__content--center .fullwidth-hero__actions {
  justify-content: center;
}

.fullwidth-hero__content--right .fullwidth-hero__actions {
  justify-content: flex-end;
}

@keyframes fadeInUp {
  from { opacity: 0; transform: translateY(30px); }
  to { opacity: 1; transform: translateY(0); }
}

@media (max-width: 768px) {
  .fullwidth-hero {
    padding: 100px 20px 60px;
  }

  .fullwidth-hero__content--left,
  .fullwidth-hero__content--right {
    text-align: center;
    max-width: 100%;
    margin: 0 auto;
  }

  .fullwidth-hero__actions {
    justify-content: center !important;
  }
}
</style>
