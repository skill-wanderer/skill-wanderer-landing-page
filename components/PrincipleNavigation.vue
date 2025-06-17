<template>
  <section class="principle-nav">
    <div class="nav-content">
      <!-- Previous Principle -->
      <NuxtLink 
        v-if="previousPrinciple"
        :to="`/principles/${previousPrinciple.slug}`" 
        class="nav-button prev"
      >
        <span class="nav-arrow">←</span>
        <div>
          <div class="nav-label">Previous Principle</div>
          <div class="nav-title">{{ previousPrinciple.name }}</div>
        </div>
      </NuxtLink>
      <div v-else class="nav-button-placeholder"></div>
      
      <!-- All Principles -->
      <NuxtLink to="/principles" class="nav-button all">
        <span class="nav-arrow">↑</span>
        <div>
          <div class="nav-title">All Principles</div>
        </div>
      </NuxtLink>
      
      <!-- Next Principle -->
      <NuxtLink 
        v-if="nextPrinciple"
        :to="`/principles/${nextPrinciple.slug}`" 
        class="nav-button next"
      >
        <div>
          <div class="nav-label">Next Principle</div>
          <div class="nav-title">{{ nextPrinciple.name }}</div>
        </div>
        <span class="nav-arrow">→</span>
      </NuxtLink>
      <div v-else class="nav-button-placeholder"></div>
    </div>
  </section>
</template>

<script setup lang="ts">
interface Props {
  currentSlug: string
}

const props = defineProps<Props>()

// All principles in order
const principles = [
  { slug: 'accessible', name: 'Accessible' },
  { slug: 'integrity', name: 'Integrity & Impartiality' },
  { slug: 'individualized', name: 'Individualized' },
  { slug: 'engaging', name: 'Engaging & Rewarding' },
  { slug: 'creativity', name: 'Creativity & Learning Through Failure' },
  { slug: 'relevant', name: 'Relevant & Impactful' },
  { slug: 'pathways', name: 'Pathways for Our Learners' },
  { slug: 'tech-services', name: 'Technology Services Fueling Mission' },
  { slug: 'resourceful', name: 'Resourceful Curation' },
  { slug: 'community', name: 'Collaborative Community' },
  { slug: 'equitable-access', name: 'Premium Services with Equity' },
  { slug: 'mission-centric-reinvestment', name: 'Mission-Centric Reinvestment' }
]

// Find current principle index
const currentIndex = principles.findIndex(p => p.slug === props.currentSlug)

// Get previous and next principles
const previousPrinciple = currentIndex > 0 ? principles[currentIndex - 1] : null
const nextPrinciple = currentIndex < principles.length - 1 ? principles[currentIndex + 1] : null
</script>

<style scoped>
/* Navigation Section */
.principle-nav {
  padding: 60px 20px;
  background: var(--darker-bg);
  border-top: 1px solid rgba(255, 107, 53, 0.2);
}

.nav-content {
  max-width: 1000px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 30px;
}

.nav-button {
  flex: 1;
  padding: 20px 30px;
  background: var(--card-bg);
  border: 1px solid rgba(255, 107, 53, 0.2);
  border-radius: 15px;
  text-decoration: none;
  color: var(--light-text);
  transition: all 0.3s ease;
  display: flex;
  align-items: center;
  gap: 15px;
}

.nav-button:hover {
  background: var(--card-hover);
  transform: translateY(-3px);
  border-color: rgba(255, 107, 53, 0.4);
}

.nav-button.prev {
  justify-content: flex-start;
}

.nav-button.next {
  justify-content: flex-end;
}

.nav-button.all {
  justify-content: center;
  max-width: 200px;
}

.nav-button-placeholder {
  flex: 1;
  /* Invisible placeholder to maintain layout when no prev/next exists */
}

.nav-arrow {
  font-size: 1.5rem;
  color: var(--primary-orange);
}

.nav-label {
  font-size: 0.9rem;
  opacity: 0.7;
}

.nav-title {
  font-size: 1.1rem;
  font-weight: 600;
  color: white;
}

/* Responsive */
@media (max-width: 768px) {
  .nav-content {
    flex-direction: column;
  }

  .nav-button {
    width: 100%;
  }

  .nav-button-placeholder {
    display: none;
  }
}
</style>
