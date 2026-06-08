<template>
  <section class="accordion-section">
    <div class="accordion-container">
      <h2 v-if="sectionTitle" class="accordion-heading">{{ sectionTitle }}</h2>
      <p v-if="sectionSubtitle" class="accordion-subtitle">{{ sectionSubtitle }}</p>
      <div class="accordion-list">
        <div
          v-for="(item, index) in items"
          :key="index"
          class="accordion-item"
          :class="{ 'accordion-item--open': openIndex === index }"
        >
          <button
            class="accordion-trigger"
            :aria-expanded="openIndex === index"
            :aria-controls="`accordion-panel-${index}`"
            @click="toggle(index)"
          >
            <component
              :is="item.icon"
              v-if="item.icon"
              class="accordion-icon"
              :size="20"
              :stroke-width="2"
            />
            <span class="accordion-trigger-text">{{ item.title }}</span>
            <svg
              class="accordion-chevron"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <polyline points="6 9 12 15 18 9" />
            </svg>
          </button>
          <div
            :id="`accordion-panel-${index}`"
            class="accordion-panel"
            role="region"
          >
            <div class="accordion-content">
              <p v-if="typeof item.content === 'string'">{{ item.content }}</p>
              <slot v-else :name="`item-${index}`" :item="item" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import type { Component } from 'vue'

interface AccordionItem {
  title: string
  content?: string
  icon?: Component
}

interface Props {
  items: AccordionItem[]
  sectionTitle?: string
  sectionSubtitle?: string
  allowMultiple?: boolean
}

const props = withDefaults(defineProps<Props>(), {
  sectionTitle: undefined,
  sectionSubtitle: undefined,
  allowMultiple: false,
})

const openIndex = ref<number | null>(null)

function toggle(index: number) {
  openIndex.value = openIndex.value === index ? null : index
}
</script>

<style scoped>
.accordion-section {
  padding: 80px 20px;
  background: var(--dark-bg);
}

.accordion-container {
  max-width: 800px;
  margin: 0 auto;
}

.accordion-heading {
  text-align: center;
  font-size: clamp(2rem, 5vw, 3rem);
  background: linear-gradient(135deg, var(--primary-orange), var(--accent-yellow));
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
  margin-bottom: 16px;
}

.accordion-subtitle {
  text-align: center;
  color: var(--light-text);
  font-size: 1.1rem;
  margin-bottom: 50px;
  opacity: 0.8;
}

.accordion-list {
  display: flex;
  flex-direction: column;
  gap: 12px;
}

.accordion-item {
  background: var(--card-bg);
  border: 1px solid rgba(255, 107, 53, 0.15);
  border-radius: 15px;
  overflow: hidden;
  transition: all 0.3s ease;
}

.accordion-item:hover {
  border-color: rgba(255, 107, 53, 0.3);
}

.accordion-item--open {
  background: var(--card-hover);
  border-color: rgba(255, 107, 53, 0.3);
}

.accordion-trigger {
  width: 100%;
  display: flex;
  align-items: center;
  gap: 14px;
  padding: 22px 28px;
  background: none;
  border: none;
  color: white;
  font-size: 1.1rem;
  font-weight: 600;
  cursor: pointer;
  text-align: left;
  transition: color 0.3s ease;
}

.accordion-trigger:hover {
  color: var(--primary-orange);
}

.accordion-icon {
  color: var(--primary-orange);
  flex-shrink: 0;
}

.accordion-trigger-text {
  flex: 1;
}

.accordion-chevron {
  color: var(--primary-orange);
  transition: transform 0.3s ease;
  flex-shrink: 0;
}

.accordion-item--open .accordion-chevron {
  transform: rotate(180deg);
}

.accordion-panel {
  display: grid;
  grid-template-rows: 0fr;
  transition: grid-template-rows 0.35s ease;
}

.accordion-item--open .accordion-panel {
  grid-template-rows: 1fr;
}

.accordion-content {
  overflow: hidden;
  padding: 0 28px;
  transition: padding 0.35s ease;
}

.accordion-item--open .accordion-content {
  padding: 0 28px 24px;
}

.accordion-content p {
  font-size: 1.05rem;
  line-height: 1.8;
  color: var(--light-text);
  opacity: 0.9;
}

@media (max-width: 768px) {
  .accordion-trigger {
    padding: 18px 20px;
    font-size: 1rem;
  }

  .accordion-content {
    padding: 0 20px;
  }

  .accordion-item--open .accordion-content {
    padding: 0 20px 20px;
  }
}
</style>
