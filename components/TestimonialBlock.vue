<template>
  <section class="testimonial-section">
    <div class="testimonial-container">
      <h2 v-if="sectionTitle" class="testimonial-heading">{{ sectionTitle }}</h2>
      <div :class="['testimonial-grid', `testimonial-grid--${layout}`]">
        <div
          v-for="(testimonial, index) in testimonials"
          :key="index"
          class="testimonial-card"
          :style="{ animationDelay: `${index * 0.15}s` }"
        >
          <div class="testimonial-quote-mark">"</div>
          <blockquote class="testimonial-text">{{ testimonial.quote }}</blockquote>
          <div class="testimonial-author">
            <img
              v-if="testimonial.avatar"
              :src="testimonial.avatar"
              :alt="testimonial.name"
              class="testimonial-avatar"
              loading="lazy"
            />
            <div v-else class="testimonial-avatar-placeholder">
              {{ testimonial.name.charAt(0) }}
            </div>
            <div class="testimonial-meta">
              <p class="testimonial-name">{{ testimonial.name }}</p>
              <p v-if="testimonial.role" class="testimonial-role">{{ testimonial.role }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
interface Testimonial {
  quote: string
  name: string
  role?: string
  avatar?: string
}

interface Props {
  testimonials: Testimonial[]
  sectionTitle?: string
  layout?: 'single' | 'grid' | 'stacked'
}

withDefaults(defineProps<Props>(), {
  layout: 'grid',
  sectionTitle: undefined,
})
</script>

<style scoped>
.testimonial-section {
  padding: 80px 20px;
  background: var(--darker-bg);
}

.testimonial-container {
  max-width: 1200px;
  margin: 0 auto;
}

.testimonial-heading {
  text-align: center;
  font-size: clamp(2rem, 5vw, 3rem);
  background: linear-gradient(135deg, var(--primary-orange), var(--accent-yellow));
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
  margin-bottom: 60px;
}

.testimonial-grid {
  display: grid;
  gap: 30px;
}

.testimonial-grid--grid {
  grid-template-columns: repeat(auto-fit, minmax(340px, 1fr));
}

.testimonial-grid--stacked {
  grid-template-columns: 1fr;
  max-width: 800px;
  margin: 0 auto;
}

.testimonial-grid--single {
  grid-template-columns: 1fr;
  max-width: 700px;
  margin: 0 auto;
}

.testimonial-card {
  position: relative;
  background: var(--card-bg);
  border: 1px solid rgba(255, 107, 53, 0.15);
  border-radius: 20px;
  padding: 40px;
  transition: all 0.3s ease;
  animation: fadeInUp 0.8s ease-out both;
}

.testimonial-card:hover {
  background: var(--card-hover);
  transform: translateY(-3px);
  border-color: rgba(255, 107, 53, 0.3);
}

.testimonial-quote-mark {
  font-size: 4rem;
  font-weight: 700;
  line-height: 1;
  background: linear-gradient(135deg, var(--primary-orange), var(--accent-yellow));
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
  margin-bottom: 10px;
}

.testimonial-text {
  font-size: 1.1rem;
  line-height: 1.8;
  color: var(--light-text);
  margin-bottom: 30px;
  font-style: italic;
}

.testimonial-author {
  display: flex;
  align-items: center;
  gap: 15px;
}

.testimonial-avatar {
  width: 48px;
  height: 48px;
  border-radius: 50%;
  object-fit: cover;
  border: 2px solid rgba(255, 107, 53, 0.3);
}

.testimonial-avatar-placeholder {
  width: 48px;
  height: 48px;
  border-radius: 50%;
  background: linear-gradient(135deg, var(--primary-orange), var(--deep-orange));
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 700;
  font-size: 1.2rem;
  color: white;
}

.testimonial-name {
  font-weight: 600;
  color: white;
  font-size: 1rem;
}

.testimonial-role {
  font-size: 0.9rem;
  color: var(--primary-orange);
  margin-top: 2px;
}

@keyframes fadeInUp {
  from { opacity: 0; transform: translateY(30px); }
  to { opacity: 1; transform: translateY(0); }
}

@media (max-width: 768px) {
  .testimonial-grid--grid {
    grid-template-columns: 1fr;
  }

  .testimonial-card {
    padding: 30px;
  }
}
</style>
