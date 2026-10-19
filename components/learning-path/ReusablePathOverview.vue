<template>
  <div class="web-path-page">
    <section class="hero">
      <div class="hero-content">
        <p class="eyebrow">{{ isPlanned ? 'Planned Learning Path' : 'Featured Learning Path' }}</p>
        <h1>{{ overview.title }}</h1>
        <p class="hero-subtitle">{{ overview.description }}</p>

        <p v-if="isPlanned" class="status-notice">
          <strong>This path is planned, not open yet.</strong> We'll offer it later, once we've revised the outline
          below, so the details will change. To start now, begin with our featured path,
          <NuxtLink :to="featuredPath">{{ featuredTitle }}</NuxtLink>.
        </p>
        <p v-else class="status-notice status-notice--open">
          <strong>Open now and in development.</strong> It's free, and we add lessons as we finish them.
        </p>

        <p class="hero-description">{{ overview.intro }}</p>

        <div class="hero-actions">
          <NuxtLink v-if="isPlanned" :to="featuredPath" class="btn btn-primary">Start With {{ featuredTitle }}</NuxtLink>
          <a v-else-if="firstLesson" :href="firstLesson.url" class="btn btn-primary" target="_blank" rel="noopener noreferrer">
            Take the First Lesson
          </a>
          <NuxtLink to="/learning-path" class="btn btn-secondary">← All Learning Paths</NuxtLink>
        </div>

        <ImageSlot :name="`learning-paths/${overview.slug}`" class="hero-image" priority />
      </div>
    </section>

    <section class="overview-section">
      <div class="section-shell intro-grid">
        <article class="panel intro-panel">
          <p class="section-label">Introduction</p>
          <h2>What this path is about</h2>
          <p>{{ overview.intro }}</p>
        </article>

        <article class="panel objective-panel">
          <p class="section-label">Goals</p>
          <h2>What you should be able to do</h2>
          <ul class="goal-list">
            <li v-for="goal in overview.goals" :key="goal">{{ goal }}</li>
          </ul>
        </article>
      </div>
    </section>

    <section class="roadmap-section">
      <div class="section-shell">
        <div class="section-header">
          <p class="section-label">Path Structure</p>
          <h2>What is inside the {{ overview.title }} path</h2>
          <p v-if="isPlanned">
            This is our earlier outline for the path. We're revising it before the path opens, so expect it to
            change.
          </p>
          <p v-else>
            The path is split into practical stages. Each stage prepares you for the next one, so you don't just
            collect ideas, you build habits you can use.
          </p>
        </div>

        <div class="stage-grid">
          <article v-for="stage in overview.stages" :key="stage.id" class="stage-card">
            <div class="stage-top">
              <span class="stage-id">{{ stage.id }}</span>
              <span class="stage-time">{{ stage.timeline }}</span>
            </div>
            <h3>{{ stage.title }}</h3>
            <p>{{ stage.description }}</p>
            <ul>
              <li v-for="point in stage.points" :key="point">{{ point }}</li>
            </ul>
          </article>
        </div>
      </div>
    </section>

    <section class="lesson-section">
      <div class="section-shell">
        <div class="section-header">
          <p class="section-label">Lecture Plan</p>
          <h2>{{ isPlanned ? 'Planned lessons' : 'Lessons in this path' }}</h2>
          <p v-if="isPlanned">
            These were the planned lessons. Any marked available are open on the Dojo today, and the rest will change
            as we revise the path.
          </p>
          <p v-else>
            The first lesson is open now. We publish the rest one by one, as each is ready.
          </p>
        </div>

        <div class="lesson-list">
          <article v-for="lesson in overview.lessons" :key="lesson.id" class="lesson-card" :class="lesson.status">
            <div class="lesson-meta">
              <span class="lesson-id">{{ lesson.id }}</span>
              <span class="lesson-badge" :class="lesson.status">{{ lesson.status === 'available' ? 'Available Now' : 'Coming Soon' }}</span>
            </div>
            <div class="lesson-body">
              <h3>
                <a v-if="lesson.url" :href="lesson.url" target="_blank" rel="noopener noreferrer" class="lesson-link">{{ lesson.title }}</a>
                <template v-else>{{ lesson.title }}</template>
              </h3>
              <p v-if="lesson.description">{{ lesson.description }}</p>
            </div>
          </article>
        </div>
      </div>
    </section>

    <section class="cta-section">
      <div class="section-shell">
        <div class="cta-card">
          <p class="section-label">Next Step</p>
          <template v-if="isPlanned">
            <h2>This path opens later</h2>
            <p>
              Until then, the best place to start is {{ featuredTitle }}: the mindset, practical navigation and ways
              of learning that every other path builds on.
            </p>
            <div class="hero-actions">
              <NuxtLink :to="featuredPath" class="btn btn-primary">Start With {{ featuredTitle }}</NuxtLink>
              <NuxtLink to="/contact?tab=join" class="btn btn-outline">Ask About This Path</NuxtLink>
            </div>
          </template>
          <template v-else>
            <h2>More lessons are on the way</h2>
            <p>
              We publish each lesson as soon as it's ready. Stuck or unsure where to begin in the meantime? Ask us.
              Guidance is always free.
            </p>
            <div class="hero-actions">
              <NuxtLink to="/contact?tab=join" class="btn btn-primary">Ask for Guidance</NuxtLink>
              <NuxtLink to="/learning-path/learn-contribute-build-earn" class="btn btn-outline">See Learning Philosophy</NuxtLink>
            </div>
          </template>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import { FEATURED_PATH_SLUG, reusablePathOverviews, type ReusablePathOverview } from '~/data/learning-path-overviews'

const props = defineProps<{
  overview: ReusablePathOverview
}>()

// Planned paths send learners to the one path that is open now.
const isPlanned = computed(() => props.overview.status === 'planned')
const featuredPath = `/learning-path/${FEATURED_PATH_SLUG}`
const featuredTitle = reusablePathOverviews[FEATURED_PATH_SLUG]?.title ?? 'our featured path'
const firstLesson = computed(() => props.overview.lessons.find(lesson => lesson.status === 'available' && lesson.url))
</script>

<style scoped>
.web-path-page {
  min-height: 100vh;
  background:
    radial-gradient(circle at 8% 12%, rgba(255, 107, 53, 0.15) 0, transparent 42%),
    radial-gradient(circle at 88% 82%, rgba(255, 217, 61, 0.08) 0, transparent 46%),
    linear-gradient(160deg, #111 0%, #1b1816 44%, #0d0d0d 100%);
  color: #f4f4f4;
}

.hero {
  padding: 130px 24px 78px;
}

.hero-content,
.section-shell {
  max-width: 1180px;
  margin: 0 auto;
}

.hero-content {
  text-align: center;
}

.eyebrow,
.section-label {
  margin: 0;
  text-transform: uppercase;
  letter-spacing: 0.2em;
  color: #ffc793;
  font-size: 0.78rem;
}

h1 {
  margin: 16px 0 14px;
  font-size: clamp(2.4rem, 6vw, 4.6rem);
  line-height: 1.06;
  background: linear-gradient(135deg, #ff6b35, #ffd93d);
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
}

.hero-subtitle {
  margin: 0;
  font-size: clamp(1.08rem, 2vw, 1.42rem);
  font-weight: 600;
  color: #ffd9b4;
}

.hero-description {
  max-width: 820px;
  margin: 18px auto 0;
  font-size: 1.05rem;
  line-height: 1.8;
  color: rgba(243, 243, 243, 0.88);
}

.hero-actions {
  margin-top: 28px;
  display: flex;
  justify-content: center;
  gap: 14px;
  flex-wrap: wrap;
}

/* Planned paths say so up front; the featured path says it is open. */
.status-notice {
  max-width: 760px;
  margin: 22px auto 0;
  padding: 14px 20px;
  border: 1px dashed rgba(255, 217, 61, 0.45);
  border-radius: 14px;
  background: rgba(255, 217, 61, 0.07);
  line-height: 1.7;
  color: rgba(243, 243, 243, 0.92);
}

.status-notice strong {
  color: #ffd93d;
}

.status-notice a {
  color: #ff8757;
  font-weight: 600;
}

.status-notice--open {
  border-style: solid;
  border-color: rgba(76, 175, 80, 0.4);
  background: rgba(76, 175, 80, 0.07);
}

.status-notice--open strong {
  color: #81c784;
}

.hero-image {
  max-width: 960px;
  margin: 40px auto 0;
}

.overview-section,
.roadmap-section,
.lesson-section,
.cta-section {
  padding: 0 24px 84px;
}

.intro-grid {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 24px;
}

.panel,
.stage-card,
.lesson-card,
.cta-card {
  background: rgba(255, 255, 255, 0.04);
  border: 1px solid rgba(255, 107, 53, 0.18);
  border-radius: 22px;
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.18);
}

.panel {
  padding: 30px 28px;
}

.panel h2,
.section-header h2,
.cta-card h2 {
  margin: 12px 0 14px;
  font-size: clamp(1.8rem, 4vw, 3rem);
  background: linear-gradient(135deg, #ff6b35, #ffd93d);
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
}

.panel p,
.section-header p,
.cta-card p,
.stage-card p,
.lesson-card p {
  line-height: 1.75;
  color: rgba(243, 243, 243, 0.84);
}

.goal-list,
.stage-card ul {
  margin: 18px 0 0;
  padding-left: 20px;
  color: rgba(255, 255, 255, 0.86);
  line-height: 1.75;
}

.section-header {
  max-width: 880px;
  margin: 0 auto 34px;
  text-align: center;
}

.stage-grid {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 24px;
}

.stage-card {
  padding: 28px 26px;
}

.stage-top,
.lesson-meta {
  display: flex;
  justify-content: space-between;
  gap: 12px;
  align-items: center;
}

.stage-id,
.lesson-id {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  min-width: 48px;
  height: 48px;
  padding: 0 14px;
  border-radius: 999px;
  background: rgba(255, 107, 53, 0.16);
  color: #ffd93d;
  font-weight: 800;
  letter-spacing: 0.08em;
}

.stage-time {
  color: #ffc793;
  font-size: 0.9rem;
}

.stage-card h3,
.lesson-card h3 {
  margin: 18px 0 10px;
  color: #ff8757;
  font-size: 1.3rem;
}

.lesson-list {
  display: grid;
  gap: 18px;
}

.lesson-card {
  display: grid;
  grid-template-columns: 190px 1fr;
  gap: 22px;
  padding: 22px 24px;
  align-items: start;
}

.lesson-card.available {
  border-color: rgba(255, 217, 61, 0.28);
}

.lesson-card.coming-soon {
  opacity: 0.92;
}

.lesson-badge {
  padding: 8px 14px;
  border-radius: 999px;
  font-size: 0.78rem;
  text-transform: uppercase;
  letter-spacing: 0.08em;
  font-weight: 700;
}

.lesson-badge.available {
  background: rgba(255, 217, 61, 0.14);
  color: #ffd93d;
}

.lesson-badge.coming-soon {
  background: rgba(255, 107, 53, 0.14);
  color: #ffc793;
}

.lesson-link {
  color: #ff8757;
  text-decoration: none;
  border-bottom: 1px solid rgba(255, 135, 87, 0.4);
}

.lesson-link:hover {
  color: #ffd93d;
  border-color: rgba(255, 217, 61, 0.6);
}

.cta-card {
  padding: 34px 28px;
  text-align: center;
}

.btn {
  padding: 10px 18px;
  border-radius: 999px;
  font-weight: 600;
  text-decoration: none;
  border: 1px solid transparent;
  transition: transform 0.2s ease, opacity 0.2s ease;
}

.btn:hover {
  transform: translateY(-2px);
  opacity: 0.95;
}

.btn-primary {
  background: linear-gradient(135deg, #ff6b35, #ff8848);
  color: #fff;
}

.btn-secondary {
  border-color: rgba(255, 199, 147, 0.55);
  color: #ffd9b4;
}

.btn-outline {
  border-color: rgba(255, 199, 147, 0.55);
  color: #ffd9b4;
}

@media (max-width: 900px) {
  .intro-grid,
  .stage-grid,
  .lesson-card {
    grid-template-columns: 1fr;
  }

  .lesson-card {
    gap: 16px;
  }
}

@media (max-width: 640px) {
  .hero {
    padding-top: 118px;
  }

  .panel,
  .stage-card,
  .lesson-card,
  .cta-card {
    border-radius: 18px;
  }
}
</style>
