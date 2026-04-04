<template>
  <section id="values" class="values">
    <div class="values-content">
      <div class="section-header">
        <h2>Our Guiding Principles</h2>
        <p>The foundation of everything we build and teach</p>
      </div>
      <div class="values-grid">
        <div class="value-item" style="animation-delay: 0.1s;">
          <span class="value-icon"><Shield :size="48" :stroke-width="1.5" /></span>
          <h3>Complete Integrity</h3>
          <p>No ads, no affiliate marketing, no commissions. Our recommendations are purely for your benefit.</p>
        </div>
        <div class="value-item" style="animation-delay: 0.2s;">
          <span class="value-icon"><RefreshCw :size="48" :stroke-width="1.5" /></span>
          <h3>Mission-Centric Reinvestment</h3>
          <p>All net revenue is reinvested into the platform, community, and global educational impact.</p>
        </div>
        <div class="value-item" style="animation-delay: 0.3s;">
          <span class="value-icon"><Globe :size="48" :stroke-width="1.5" /></span>
          <h3>Accessible Education</h3>
          <p>Free learning content with quality human mentors sustained through our social enterprise model and open Social Impact Tokens.</p>
        </div>
        <div class="value-item" style="animation-delay: 0.4s;">
          <span class="value-icon"><Palette :size="48" :stroke-width="1.5" /></span>
          <h3>Creative Learning</h3>
          <p>Encouraging experimentation, celebrating failures, and finding joy in the learning process.</p>
        </div>
      </div>
      <div class="principles-cta" style="animation-delay: 0.6s;">
        <NuxtLink to="/principles" class="btn btn-outline">
          View All 12 Principles
          <span>→</span>
        </NuxtLink>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { Shield, RefreshCw, Globe, Palette } from 'lucide-vue-next'

let observer: IntersectionObserver | null = null

onMounted(() => {
  const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
  }

  observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        (entry.target as HTMLElement).style.opacity = '1'

        // stop observing after first trigger
        observer?.unobserve(entry.target)
      }
    })
  }, observerOptions)

  document.querySelectorAll('.value-item').forEach(item => {
    observer?.observe(item)
  })
})

onUnmounted(() => {
  if (observer) {
    observer.disconnect()
    observer = null
  }
})
</script>

<style scoped>
.values {
  padding: 100px 20px;
  background: linear-gradient(135deg, rgba(255, 107, 53, 0.05) 0%, transparent 50%);
}

.values-content {
  max-width: 1200px;
  margin: 0 auto;
}

.values-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 30px;
  margin-top: 60px;
}

.value-item {
  text-align: center;
  opacity: 0;
  animation: fadeInUp 0.6s ease-out forwards;
}

.value-icon {
  color: var(--primary-orange);
  margin-bottom: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.value-item h3 {
  color: var(--primary-orange);
  margin-bottom: 10px;
  font-size: 1.3rem;
  white-space: nowrap;
}

.value-item p {
  opacity: 0.8;
  font-size: 0.95rem;
}

.principles-cta {
  text-align: center;
  margin-top: 60px;
  opacity: 0;
  animation: fadeInUp 0.6s ease-out forwards;
}

@media (max-width: 768px) {
  .values-grid {
    grid-template-columns: 1fr;
  }
}
</style>
