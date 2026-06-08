<template>
  <section class="metric-strip" :class="{ 'metric-strip--compact': compact }">
    <div class="metric-strip__container">
      <div
        v-for="(metric, index) in metrics"
        :key="index"
        class="metric-item"
        :style="{ animationDelay: `${index * 0.12}s` }"
      >
        <component
          :is="metric.icon"
          v-if="metric.icon"
          class="metric-icon"
          :size="28"
          :stroke-width="1.8"
        />
        <span class="metric-value">{{ metric.value }}</span>
        <span class="metric-label">{{ metric.label }}</span>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import type { Component } from 'vue'

interface Metric {
  value: string
  label: string
  icon?: Component
}

interface Props {
  metrics: Metric[]
  compact?: boolean
}

withDefaults(defineProps<Props>(), {
  compact: false,
})
</script>

<style scoped>
.metric-strip {
  padding: 60px 20px;
  background: linear-gradient(135deg, rgba(255, 107, 53, 0.08) 0%, rgba(255, 217, 61, 0.04) 100%);
  border-top: 1px solid rgba(255, 107, 53, 0.1);
  border-bottom: 1px solid rgba(255, 107, 53, 0.1);
}

.metric-strip--compact {
  padding: 40px 20px;
}

.metric-strip__container {
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  justify-content: center;
  gap: 60px;
  flex-wrap: wrap;
}

.metric-item {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
  animation: fadeInUp 0.8s ease-out both;
  min-width: 120px;
}

.metric-icon {
  color: var(--primary-orange);
  margin-bottom: 4px;
}

.metric-value {
  font-size: clamp(2rem, 4vw, 3rem);
  font-weight: 800;
  background: linear-gradient(135deg, var(--primary-orange), var(--accent-yellow));
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
  line-height: 1.1;
}

.metric-label {
  font-size: 0.95rem;
  color: var(--light-text);
  opacity: 0.8;
  text-align: center;
  max-width: 160px;
}

.metric-strip--compact .metric-value {
  font-size: clamp(1.5rem, 3vw, 2.2rem);
}

.metric-strip--compact .metric-item {
  gap: 4px;
}

@keyframes fadeInUp {
  from { opacity: 0; transform: translateY(20px); }
  to { opacity: 1; transform: translateY(0); }
}

@media (max-width: 768px) {
  .metric-strip__container {
    gap: 30px;
  }

  .metric-item {
    min-width: 100px;
  }
}

@media (max-width: 480px) {
  .metric-strip__container {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 30px 20px;
  }
}
</style>
