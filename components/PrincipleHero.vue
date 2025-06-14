<template>
  <section class="hero">
    <div class="breadcrumb">
      <NuxtLink to="/">Home</NuxtLink>
      <span>→</span>
      <NuxtLink to="/principles">Principles</NuxtLink>
      <span>→</span>
      <span>{{ displayBreadcrumb }}</span>
    </div>
    
    <div class="principle-header">
      <div class="principle-number-large">{{ number }}</div>
      <div class="principle-title-section">
        <h1>{{ title }}</h1>
        <p class="principle-tagline-large">{{ tagline }}</p>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
interface Props {
  number: number | string
  title: string
  tagline: string
  breadcrumbName?: string
}

const props = withDefaults(defineProps<Props>(), {
  breadcrumbName: undefined
})

// Use title as fallback for breadcrumbName
const displayBreadcrumb = computed(() => props.breadcrumbName || props.title)
</script>

<style scoped>
/* Hero Section */
.hero {
  padding: 140px 20px 80px;
  text-align: center;
  background: radial-gradient(circle at 50% 50%, rgba(255, 107, 53, 0.15) 0%, transparent 50%);
}

.breadcrumb {
  display: flex;
  align-items: center;
  gap: 10px;
  margin-bottom: 30px;
  font-size: 0.95rem;
  opacity: 0.7;
  animation: fadeInUp 0.6s ease-out;
  justify-content: center;
}

.breadcrumb a {
  color: var(--light-text);
  text-decoration: none;
  transition: color 0.3s ease;
}

.breadcrumb a:hover {
  color: var(--primary-orange);
}

.principle-header {
  display: flex;
  align-items: center;
  gap: 30px;
  margin-bottom: 30px;
  animation: fadeInUp 0.6s ease-out 0.1s both;
  justify-content: center;
}

.principle-number-large {
  width: 100px;
  height: 100px;
  background: linear-gradient(135deg, var(--primary-orange), var(--deep-orange));
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 3rem;
  font-weight: bold;
  color: white;
  flex-shrink: 0;
  box-shadow: 0 10px 30px rgba(255, 107, 53, 0.3);
}

.principle-title-section h1 {
  font-size: clamp(2.5rem, 5vw, 3.5rem);
  background: linear-gradient(135deg, var(--primary-orange), var(--accent-yellow));
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  margin-bottom: 10px;
}

.principle-tagline-large {
  font-size: 1.5rem;
  color: var(--primary-orange);
  opacity: 0.9;
}

/* Animations */
@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

/* Responsive */
@media (max-width: 768px) {
  .principle-header {
    flex-direction: column;
    text-align: center;
  }
}
</style>
