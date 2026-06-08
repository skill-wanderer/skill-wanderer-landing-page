<template>
  <div class="learning-path-page">
    <section class="hero">
      <div class="hero-content">
        <p class="eyebrow">Skill-Wanderer Guild Learning Hub</p>
        <h1>Choose Your Learning Path</h1>
        <p class="hero-description">
          Start from the topic that matches your mission. Each guild path is designed to grow practical
          skills through guided progression, real-world craft, and clear milestones.
        </p>
      </div>
      <svg class="hero-wave" viewBox="0 0 1200 120" aria-hidden="true">
        <path d="M0,92 C180,65 320,26 520,34 C720,42 860,104 1200,62 L1200,120 L0,120 Z" />
      </svg>
    </section>

    <section class="topics-section">
      <div class="topics-wrapper">
        <!-- Foundational Paths -->
        <div class="section-header">
          <h2>Foundational Paths</h2>
          <p>Core disciplines for starting your guild journey</p>
        </div>

        <div class="topics-grid topics-grid--foundation">
          <NuxtLink
            v-for="topic in foundationalTopics"
            :key="topic.slug"
            :to="`/learning-path/${topic.slug}`"
            class="topic-card topic-card--foundation"
            :aria-label="`Open learning path for ${topic.title}`"
          >
            <div class="topic-top">
              <span class="topic-icon" aria-hidden="true">{{ topic.icon }}</span>
              <span class="topic-badge topic-badge--foundation">Foundation</span>
            </div>
            <h3>{{ topic.title }}</h3>
            <p>{{ topic.description }}</p>
            <span class="topic-action">Open Path →</span>
          </NuxtLink>
        </div>

        <!-- Advanced & Specialized Paths -->
        <div class="section-header section-header--advanced">
          <h2>Advanced &amp; Specialized</h2>
          <p>Deeper disciplines for experienced practitioners</p>
        </div>

        <div class="topics-grid topics-grid--advanced">
          <NuxtLink
            v-for="topic in advancedTopics"
            :key="topic.slug"
            :to="`/learning-path/${topic.slug}`"
            class="topic-card topic-card--advanced"
            :aria-label="`Open learning path for ${topic.title}`"
          >
            <div class="topic-top">
              <span class="topic-icon" aria-hidden="true">{{ topic.icon }}</span>
              <span class="topic-badge topic-badge--advanced">Advanced</span>
            </div>
            <h3>{{ topic.title }}</h3>
            <p>{{ topic.description }}</p>
            <span class="topic-action">Open Path →</span>
          </NuxtLink>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
useSEO({
  title: 'Guild Learning Paths | Skill-Wanderer',
  description: 'Explore Skill-Wanderer guild learning paths across Web Development, Mobile Development, AI/ML, DevOps, QA, project and career tracks.',
  keywords: [
    'learning path',
    'web development',
    'mobile development',
    'ai and machine learning',
    'devops',
    'mlops',
    'qa tester',
    'software architecture',
    'skill wanderer'
  ]
})

interface LearningTopic {
  slug: string
  title: string
  icon: string
  description: string
}

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

.topics-section {
  padding: 36px 24px 96px;
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

.topics-grid {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 30px;
}

.topics-grid--advanced {
  grid-template-columns: repeat(3, minmax(0, 1fr));
}

.section-header--advanced {
  margin-top: 64px;
}

.topic-badge {
  font-size: 0.68rem;
  font-weight: 700;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  padding: 3px 12px;
  border-radius: 50px;
}

.topic-badge--foundation {
  background: rgba(76, 175, 80, 0.12);
  border: 1px solid rgba(76, 175, 80, 0.35);
  color: #4caf50;
}

.topic-badge--advanced {
  background: rgba(156, 39, 176, 0.12);
  border: 1px solid rgba(156, 39, 176, 0.35);
  color: #ce93d8;
}

.topic-card {
  background: var(--card-bg);
  border: 1px solid rgba(255, 107, 53, 0.2);
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

.topic-card--foundation {
  border-color: rgba(76, 175, 80, 0.2);
}

.topic-card--foundation:hover {
  border-color: #4caf50;
}

.topic-card--advanced {
  border-color: rgba(156, 39, 176, 0.2);
}

.topic-card--advanced:hover {
  border-color: #ce93d8;
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

.topic-top {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.topic-icon {
  font-size: 1.35rem;
}

.topic-card h3 {
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
  .topics-grid,
  .topics-grid--advanced {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
}

@media (max-width: 700px) {
  .hero {
    padding-top: 112px;
  }

  .topics-grid,
  .topics-grid--advanced {
    grid-template-columns: 1fr;
  }

  .topic-card {
    min-height: 200px;
  }
}
</style>
