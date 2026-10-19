<template>
  <div class="learning-path-page">
    <section class="hero">
      <div class="hero-content">
        <p class="eyebrow">Skill-Wanderer Learning Hub</p>
        <h1>Start With Learning in the AI Era</h1>
        <p class="hero-description">
          Before any single skill, you need the mindset, the sense of direction and the ways of learning that keep you
          growing while AI changes everything. That's the path we're building now, free for learners in any field.
          Our other paths are planned for later, once we've revised their content.
        </p>
        <ImageSlot name="learning-paths/hub" class="hero-image" priority />
      </div>
      <svg class="hero-wave" viewBox="0 0 1200 120" aria-hidden="true">
        <path d="M0,92 C180,65 320,26 520,34 C720,42 860,104 1200,62 L1200,120 L0,120 Z" />
      </svg>
    </section>

    <!-- Featured path: the one path open now -->
    <section class="featured-section">
      <div class="topics-wrapper">
        <div class="section-header">
          <h2>Featured Path</h2>
          <p>Open now and in development. We add lessons as we finish them.</p>
        </div>

        <article class="featured-card">
          <ImageSlot :name="`learning-paths/${featured.slug}`" class="featured-cover" />
          <div class="featured-body">
            <div class="topic-top">
              <span class="topic-icon" aria-hidden="true">🧭</span>
              <span class="topic-badge topic-badge--featured">In Development</span>
            </div>
            <h3>{{ featured.title }}</h3>
            <p class="featured-description">{{ featured.description }}</p>
            <ol class="featured-stages" aria-label="Stages in this path">
              <li v-for="stage in featured.stages" :key="stage.id">
                <span class="featured-stage-id">{{ stage.id }}</span>
                {{ stage.title }}
              </li>
            </ol>
            <div class="featured-actions">
              <NuxtLink :to="`/learning-path/${featured.slug}`" class="btn btn-primary">
                Open the Path <span>→</span>
              </NuxtLink>
              <a v-if="firstLesson" :href="firstLesson.url" target="_blank" rel="noopener noreferrer" class="btn btn-secondary">
                Take the First Lesson
              </a>
            </div>
          </div>
        </article>
      </div>
    </section>

    <!-- Planned paths: offered later, once their old content is revised -->
    <section class="topics-section">
      <div class="topics-wrapper">
        <div class="section-header">
          <h2>Planned Paths</h2>
          <p>These open later. We're revising their old content first, so each outline will change before it opens.</p>
        </div>

        <h3 class="topics-group-title">Foundational</h3>
        <div class="topics-grid">
          <NuxtLink
            v-for="topic in foundationalTopics"
            :key="topic.slug"
            :to="`/learning-path/${topic.slug}`"
            class="topic-card"
            :aria-label="`See the planned ${topic.title} path`"
          >
            <ImageSlot :name="`learning-paths/${topic.slug}`" group="learningPathCovers" class="topic-cover" />
            <div class="topic-top">
              <span class="topic-icon" aria-hidden="true">{{ topic.icon }}</span>
              <span class="topic-badge topic-badge--planned">Planned</span>
            </div>
            <h4>{{ topic.title }}</h4>
            <p>{{ topic.description }}</p>
            <span class="topic-action">See the Plan →</span>
          </NuxtLink>
        </div>

        <h3 class="topics-group-title topics-group-title--advanced">Advanced &amp; Specialized</h3>
        <div class="topics-grid">
          <NuxtLink
            v-for="topic in advancedTopics"
            :key="topic.slug"
            :to="`/learning-path/${topic.slug}`"
            class="topic-card"
            :aria-label="`See the planned ${topic.title} path`"
          >
            <ImageSlot :name="`learning-paths/${topic.slug}`" group="learningPathCovers" class="topic-cover" />
            <div class="topic-top">
              <span class="topic-icon" aria-hidden="true">{{ topic.icon }}</span>
              <span class="topic-badge topic-badge--planned">Planned</span>
            </div>
            <h4>{{ topic.title }}</h4>
            <p>{{ topic.description }}</p>
            <span class="topic-action">See the Plan →</span>
          </NuxtLink>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import { FEATURED_PATH_SLUG, reusablePathOverviews } from '~/data/learning-path-overviews'

useSEO({
  title: 'Learning Paths | Skill-Wanderer',
  description: 'Start with Learning in the AI Era, our free path on the mindset, practical navigation and ways of learning you need now. More paths are planned for later.',
  keywords: [
    'learning in the ai era',
    'learning mindset',
    'how to learn with ai',
    'free learning path',
    'self-learning',
    'learning path',
    'skill wanderer'
  ]
})

interface LearningTopic {
  slug: string
  title: string
  icon: string
  description: string
}

// The one path open now, shown in full above the planned ones.
const featured = reusablePathOverviews[FEATURED_PATH_SLUG]!
const firstLesson = featured.lessons.find(lesson => lesson.status === 'available' && lesson.url)

const foundationalTopics: LearningTopic[] = [
  {
    slug: 'web-development',
    title: 'Web Development',
    icon: '🌐',
    description: 'Frontend, backend, and full-stack foundations to ship modern web products.'
  },
  {
    slug: 'mobile-development',
    title: 'Mobile Development',
    icon: '📱',
    description: 'Build native and cross-platform apps with production-ready workflows.'
  },
  {
    slug: 'qa-tester',
    title: 'QA / Tester',
    icon: '🧪',
    description: 'Build quality-first testing skills across manual, automation, and strategy.'
  },
  {
    slug: 'business-analyst',
    title: 'Business Analyst',
    icon: '📈',
    description: 'Bridge business and technical teams with strong analysis and communication.'
  },
  {
    slug: 'software-development-roles-and-career',
    title: 'Software Development Roles & Career',
    icon: '🧭',
    description: 'Understand role pathways, growth plans, and career transitions in tech.'
  },
  {
    slug: 'project-management',
    title: 'Project Management',
    icon: '🎯',
    description: 'Plan, execute, and deliver projects with practical frameworks and tools.'
  }
]

const advancedTopics: LearningTopic[] = [
  {
    slug: 'ai-and-machine-learning',
    title: 'AI and Machine Learning',
    icon: '🤖',
    description: 'Learn core ML concepts, model building, and practical AI integration.'
  },
  {
    slug: 'devops',
    title: 'DevOps',
    icon: '🔧',
    description: 'Automate delivery, improve reliability, and scale systems with confidence.'
  },
  {
    slug: 'mlops',
    title: 'MLOps',
    icon: '⚗️',
    description: 'Operationalize ML pipelines from training and validation to monitoring.'
  },
  {
    slug: 'start-up-foundation',
    title: 'Start-Up Foundation',
    icon: '🚀',
    description: 'Learn startup essentials from validation and MVP planning to execution.'
  },
  {
    slug: 'advanced-software-development-skills',
    title: 'Advanced Software Development Skills',
    icon: '⚙️',
    description: 'Strengthen architecture, performance, testing, and advanced engineering craft.'
  },
  {
    slug: 'software-architecture-and-design-patterns',
    title: 'Software Architecture & Design Patterns',
    icon: '🏛️',
    description: 'Design scalable systems with proven patterns and architecture principles.'
  }
]
</script>

<style scoped>
.learning-path-page {
  min-height: 100vh;
  background:
    radial-gradient(circle at 8% 12%, rgba(255, 107, 53, 0.05) 0, transparent 42%),
    radial-gradient(circle at 92% 88%, rgba(255, 217, 61, 0.04) 0, transparent 48%),
    var(--dark-bg);
  color: var(--light-text);
}

.hero {
  position: relative;
  padding: 130px 24px 70px;
  overflow: hidden;
}

.hero-content {
  max-width: 960px;
  margin: 0 auto;
  text-align: center;
}

.eyebrow {
  text-transform: uppercase;
  letter-spacing: 0.22em;
  font-size: 0.78rem;
  margin-bottom: 18px;
  color: var(--primary-orange);
}

.hero h1 {
  margin: 0;
  font-size: clamp(2.5rem, 6vw, 4.5rem);
  line-height: 1.15;
  background: linear-gradient(135deg, var(--primary-orange), var(--accent-yellow));
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
}

.hero-description {
  margin: 20px auto 0;
  max-width: 760px;
  font-size: clamp(1rem, 1.8vw, 1.22rem);
  line-height: 1.8;
  color: var(--light-text);
}

.hero-wave {
  position: absolute;
  bottom: -1px;
  left: 0;
  width: 100%;
  height: auto;
  fill: rgba(255, 107, 53, 0.08);
}

.hero-image {
  z-index: 1;
  max-width: 900px;
  margin: 40px auto 0;
}

.topics-wrapper {
  max-width: 1200px;
  margin: 0 auto;
}

.section-header {
  text-align: center;
  margin-bottom: 34px;
}

.section-header h2 {
  margin: 0;
  font-size: clamp(2rem, 4vw, 3rem);
  background: linear-gradient(135deg, var(--primary-orange), var(--accent-yellow));
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
}

.section-header p {
  margin: 12px 0 0;
  color: var(--light-text);
}

/* Featured path: the one path open now */
.featured-section {
  padding: 36px 24px 24px;
}

.featured-card {
  display: grid;
  grid-template-columns: minmax(0, 1.1fr) minmax(0, 1fr);
  align-items: center;
  gap: 36px;
  padding: 28px;
  background: linear-gradient(135deg, rgba(255, 107, 53, 0.1), rgba(255, 217, 61, 0.04));
  border: 1px solid rgba(255, 107, 53, 0.4);
  border-radius: 22px;
  box-shadow: 0 20px 44px rgba(0, 0, 0, 0.3);
  animation: riseIn 0.6s ease both;
}

/* Until its cover exists (production skips empty slots), the text takes the whole card. */
.featured-card:not(:has(.featured-cover)) {
  grid-template-columns: minmax(0, 1fr);
  max-width: 820px;
  margin: 0 auto;
}

.featured-cover {
  border-radius: 16px;
}

.featured-body h3 {
  margin: 14px 0 10px;
  font-size: clamp(1.6rem, 3vw, 2.2rem);
  line-height: 1.2;
  color: #fff;
}

.featured-description {
  margin: 0 0 20px;
  font-size: 1.08rem;
  line-height: 1.7;
}

.featured-stages {
  list-style: none;
  padding: 0;
  margin: 0 0 26px;
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 10px;
}

.featured-stages li {
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 10px 12px;
  border: 1px solid rgba(255, 107, 53, 0.18);
  border-radius: 12px;
  background: rgba(255, 255, 255, 0.04);
  font-size: 0.95rem;
  font-weight: 600;
  line-height: 1.35;
}

.featured-stage-id {
  flex-shrink: 0;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 32px;
  height: 32px;
  border-radius: 50%;
  background: rgba(255, 107, 53, 0.16);
  color: var(--accent-yellow);
  font-size: 0.8rem;
  font-weight: 800;
}

.featured-actions {
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
}

.featured-actions .btn {
  font-size: 1rem;
  padding: 12px 22px;
}

/* Planned paths */
.topics-section {
  padding: 60px 24px 96px;
}

.topics-group-title {
  margin: 0 0 18px;
  font-size: 1rem;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: var(--accent-yellow);
}

.topics-group-title--advanced {
  margin-top: 56px;
}

.topics-grid {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 30px;
}

.topic-badge {
  font-size: 0.68rem;
  font-weight: 700;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  padding: 3px 12px;
  border-radius: 50px;
}

.topic-badge--featured {
  background: rgba(76, 175, 80, 0.12);
  border: 1px solid rgba(76, 175, 80, 0.4);
  color: #81c784;
}

.topic-badge--planned {
  background: rgba(255, 217, 61, 0.1);
  border: 1px solid rgba(255, 217, 61, 0.35);
  color: var(--accent-yellow);
}

/* Dashed, because these paths aren't open yet. */
.topic-card {
  background: var(--card-bg);
  border: 1px dashed rgba(255, 107, 53, 0.3);
  border-radius: 16px;
  padding: 22px;
  text-decoration: none;
  color: inherit;
  display: flex;
  flex-direction: column;
  min-height: 220px;
  transition: all 0.3s ease;
  animation: riseIn 0.6s ease both;
}

.topic-card:nth-child(2n) {
  animation-delay: 0.08s;
}

.topic-card:nth-child(3n) {
  animation-delay: 0.14s;
}

.topic-card:hover {
  transform: translateY(-5px);
  border-color: var(--primary-orange);
  background: var(--card-hover);
  box-shadow: 0 16px 36px rgba(0, 0, 0, 0.34);
}

.topic-card .topic-cover {
  margin: -22px -22px 18px;
  border: 0;
  border-radius: 15px 15px 0 0;
}

.topic-top {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.topic-icon {
  font-size: 1.35rem;
}

.topic-card h4 {
  margin: 14px 0 10px;
  font-size: 1.24rem;
  line-height: 1.35;
  color: #fff;
}

.topic-card p {
  margin: 0;
  color: var(--light-text);
  line-height: 1.6;
  flex-grow: 1;
}

.topic-action {
  margin-top: 16px;
  color: var(--primary-orange);
  font-weight: 600;
  letter-spacing: 0.02em;
}

@keyframes riseIn {
  from {
    opacity: 0;
    transform: translateY(12px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@media (max-width: 1024px) {
  .topics-grid {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
}

@media (max-width: 900px) {
  .featured-card {
    grid-template-columns: minmax(0, 1fr);
    gap: 24px;
    padding: 22px;
  }
}

@media (max-width: 700px) {
  .hero {
    padding-top: 112px;
  }

  .topics-grid {
    grid-template-columns: 1fr;
  }

  .topic-card {
    min-height: 200px;
  }
}

@media (max-width: 520px) {
  .featured-stages {
    grid-template-columns: minmax(0, 1fr);
  }

  .featured-actions .btn {
    width: 100%;
    justify-content: center;
  }
}
</style>
