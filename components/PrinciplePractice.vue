<template>
  <section class="practice-section" :style="{ backgroundColor: props.backgroundColor }">
    <div class="practice-content">
      <div class="practice-header">
        <h2>{{ title }}</h2>
        <p>{{ subtitle }}</p>
      </div>

      <div 
        v-for="(example, index) in examples" 
        :key="index"
        class="practice-example"
      >
        <h3>{{ example.title }}</h3>
        <ul>
          <li v-for="(item, itemIndex) in example.items" :key="itemIndex">
            {{ item }}
          </li>
        </ul>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
interface PracticeExample {
  title: string
  items: string[]
}

interface Props {
  title: string
  subtitle: string
  examples: PracticeExample[]
  backgroundColor?: string
}

const props = withDefaults(defineProps<Props>(), {
  backgroundColor: 'var(--darker-bg)'
})
</script>

<style scoped>
/* Practice Section */
.practice-section {
  padding: 80px 20px;
  /* background removed - now set dynamically via props */
}

.practice-content {
  max-width: 900px;
  margin: 0 auto;
}

.practice-header {
  text-align: center;
  margin-bottom: 50px;
}

.practice-header h2 {
  font-size: 2.5rem;
  color: var(--primary-orange);
  margin-bottom: 10px;
}

.practice-header p {
  font-size: 1.2rem;
  opacity: 0.9;
}

.practice-example {
  background: var(--card-bg);
  border: 1px solid rgba(255, 107, 53, 0.2);
  border-radius: 20px;
  padding: 40px;
  margin-bottom: 30px;
  transition: all 0.3s ease;
}

.practice-example:hover {
  transform: translateY(-3px);
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3);
}

.practice-example h3 {
  color: white;
  margin-bottom: 20px;
  font-size: 1.4rem;
}

.practice-example ul {
  list-style: none;
  padding: 0;
}

.practice-example li {
  padding: 12px 0;
  padding-left: 35px;
  position: relative;
  opacity: 0.9;
  line-height: 1.7;
}

.practice-example li::before {
  content: '✓';
  position: absolute;
  left: 0;
  color: var(--primary-orange);
  font-weight: bold;
  font-size: 1.2rem;
}

/* Responsive */
@media (max-width: 768px) {
  .practice-example {
    padding: 25px 20px;
  }
}
</style>
