<template>
  <section class="quote-section">
    <div class="quote-content">
      <p class="principle-quote">
        {{ quote }}
      </p>
      <p class="quote-author">- {{ author }}</p>
    </div>
  </section>
</template>

<script setup lang="ts">
interface Props {
  quote: string
  author?: string
}

withDefaults(defineProps<Props>(), {
  author: 'Quan Nguyen, Founder of Skill-Wanderer'
})
</script>

<style scoped>
/* Quote Section */
.quote-section {
  padding: 80px 20px;
  background: linear-gradient(135deg, rgba(255, 107, 53, 0.1) 0%, rgba(255, 217, 61, 0.05) 100%);
  text-align: center;
}

.quote-content {
  max-width: 800px;
  margin: 0 auto;
}

.principle-quote {
  font-size: 1.8rem;
  font-style: italic;
  color: var(--primary-orange);
  line-height: 1.8;
  margin-bottom: 30px;
}

.quote-author {
  font-size: 1.1rem;
  opacity: 0.8;
}
</style>
