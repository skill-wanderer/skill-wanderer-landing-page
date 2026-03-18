<template>
  <div class="lcbe-page">
    <section class="hero">
      <div class="hero-content">
        <p class="eyebrow">Learning Tree Navigation</p>
        <h1>Learn. Contribute. Build. Earn.</h1>
        <p class="hero-description">
          Follow the Skill-Wanderer pathway from guided learning to real contribution,
          from building projects to earning through expertise. Each phase builds on the last.
        </p>
        <div class="hero-actions">
          <NuxtLink to="/learning-path" class="btn btn-secondary">← Back to Topic Hub</NuxtLink>
        </div>
      </div>
      <svg class="hero-wave" viewBox="0 0 1200 120" aria-hidden="true">
        <path d="M0,92 C180,65 320,26 520,34 C720,42 860,104 1200,62 L1200,120 L0,120 Z" />
      </svg>
    </section>

    <section class="pathway-section">
      <div class="pathway-wrapper">
        <div class="section-header">
          <h2>The Pathway</h2>
          <p>Four connected phases that turn curiosity into capability and impact.</p>
        </div>

        <div class="pathway-tree">
          <div
            v-for="(phase, index) in phases"
            :key="phase.key"
            class="phase-node"
            :class="`phase-${phase.key}`"
          >
            <div class="phase-connector" aria-hidden="true" v-if="index < phases.length - 1" />
            <div class="phase-card">
              <div class="phase-top">
                <span class="phase-icon" aria-hidden="true">{{ phase.icon }}</span>
                <span class="phase-step">Phase {{ index + 1 }}</span>
              </div>
              <h3>{{ phase.title }}</h3>
              <p>{{ phase.description }}</p>
              <ul class="phase-outcomes">
                <li v-for="outcome in phase.outcomes" :key="outcome">{{ outcome }}</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="topics-section">
      <div class="topics-wrapper">
        <div class="section-header">
          <h2>Explore Learning Paths</h2>
          <p>Each topic fits into the pathway. Choose where to begin your journey.</p>
        </div>

        <div class="topics-grid">
          <NuxtLink
            v-for="topic in topics"
            :key="topic.slug"
            :to="`/learning-path/${topic.slug}`"
            class="topic-card"
            :aria-label="`Open learning path for ${topic.title}`"
          >
            <div class="topic-top">
              <span class="topic-icon" aria-hidden="true">{{ topic.icon }}</span>
              <span class="topic-phase">{{ topic.phase }}</span>
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
  title: 'Learn. Contribute. Build. Earn. | Skill-Wanderer Learning Tree',
  description: 'Follow the Skill-Wanderer pathway from guided learning to real contribution, building projects, and earning through expertise.',
  keywords: [
    'learning tree',
    'learn contribute build earn',
    'skill wanderer pathway',
    'learning path navigation',
    'developer career progression'
  ]
})

interface Phase {
  key: string
  icon: string
  title: string
  description: string
  outcomes: string[]
}

const phases: Phase[] = [
  {
    key: 'learn',
    icon: '📖',
    title: 'Learn',
    description: 'Build foundational knowledge through structured, principle-driven content across technical and professional tracks.',
    outcomes: [
      'Complete guided learning paths',
      'Master core concepts with hands-on exercises',
      'Track progress with clear milestones'
    ]
  },
  {
    key: 'contribute',
    icon: '🤝',
    title: 'Contribute',
    description: 'Apply what you learn by contributing to open-source projects, community content, and peer reviews.',
    outcomes: [
      'Submit pull requests to real projects',
      'Write tutorials and share knowledge',
      'Review and mentor fellow learners'
    ]
  },
  {
    key: 'build',
    icon: '🔨',
    title: 'Build',
    description: 'Create meaningful projects that demonstrate your skills and solve real problems.',
    outcomes: [
      'Ship portfolio-ready projects',
      'Collaborate on team-based builds',
      'Apply architecture and design patterns'
    ]
  },
  {
    key: 'earn',
    icon: '💎',
    title: 'Earn',
    description: 'Turn your expertise into opportunity through freelancing, partnerships, and the success-sharing model.',
    outcomes: [
      'Access freelance and contract opportunities',
      'Join the expertise-impact partner network',
      'Earn through the success-sharing model'
    ]
  }
]

interface Topic {
  slug: string
  title: string
  icon: string
  description: string
  phase: string
}

const topics: Topic[] = [
  {
    slug: 'web-development',
    title: 'Web Development',
    icon: '🌐',
    description: 'Frontend, backend, and full-stack foundations to ship modern web products.',
    phase: 'Learn → Build'
  },
  {
    slug: 'mobile-development',
    title: 'Mobile Development',
    icon: '📱',
    description: 'Build native and cross-platform apps with production-ready workflows.',
    phase: 'Learn → Build'
  },
  {
    slug: 'ai-and-machine-learning',
    title: 'AI and Machine Learning',
    icon: '🤖',
    description: 'Learn core ML concepts, model building, and practical AI integration.',
    phase: 'Learn → Build'
  },
  {
    slug: 'devops',
    title: 'DevOps',
    icon: '⚙️',
    description: 'Automate delivery, improve reliability, and scale systems with confidence.',
    phase: 'Learn → Contribute'
  },
  {
    slug: 'qa-tester',
    title: 'QA / Tester',
    icon: '🔍',
    description: 'Build quality-first testing skills across manual, automation, and strategy.',
    phase: 'Learn → Contribute'
  },
  {
    slug: 'software-architecture-and-design-patterns',
    title: 'Software Architecture & Design Patterns',
    icon: '🏗️',
    description: 'Design scalable systems with proven patterns and architecture principles.',
    phase: 'Build → Earn'
  },
  {
    slug: 'start-up-foundation',
    title: 'Start-Up Foundation',
    icon: '🚀',
    description: 'Learn startup essentials from validation and MVP planning to execution.',
    phase: 'Build → Earn'
  },
  {
    slug: 'project-management',
    title: 'Project Management',
    icon: '📌',
    description: 'Plan, execute, and deliver projects with practical frameworks and tools.',
    phase: 'Contribute → Build'
  }
]
</script>

<style scoped>
.lcbe-page {
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
  font-size: clamp(2.5rem, 6vw, 4.2rem);
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

.hero-actions {
  margin-top: 28px;
  display: flex;
  justify-content: center;
  gap: 16px;
}

.btn {
  display: inline-flex;
  align-items: center;
  padding: 12px 28px;
  border-radius: 10px;
  font-weight: 600;
  text-decoration: none;
  transition: all 0.3s ease;
}

.btn-secondary {
  background: var(--card-bg);
  color: var(--light-text);
  border: 1px solid rgba(255, 107, 53, 0.3);
}

.btn-secondary:hover {
  background: var(--card-hover);
  border-color: var(--primary-orange);
}

.hero-wave {
  position: absolute;
  bottom: -1px;
  left: 0;
  width: 100%;
  height: auto;
  fill: rgba(255, 107, 53, 0.08);
}

/* Pathway Section */
.pathway-section {
  padding: 36px 24px 72px;
}

.pathway-wrapper {
  max-width: 900px;
  margin: 0 auto;
}

.section-header {
  text-align: center;
  margin-bottom: 48px;
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

.pathway-tree {
  display: flex;
  flex-direction: column;
  gap: 0;
  position: relative;
}

.phase-node {
  position: relative;
  padding-bottom: 24px;
}

.phase-connector {
  position: absolute;
  left: 38px;
  top: 100%;
  width: 3px;
  height: 24px;
  background: linear-gradient(to bottom, var(--primary-orange), rgba(255, 107, 53, 0.2));
  transform: translateY(-24px);
}

.phase-card {
  background: var(--card-bg);
  border: 1px solid rgba(255, 107, 53, 0.2);
  border-radius: 16px;
  padding: 24px 28px;
  transition: all 0.3s ease;
  animation: riseIn 0.6s ease both;
}

.phase-card:hover {
  border-color: var(--primary-orange);
  background: var(--card-hover);
  box-shadow: 0 12px 32px rgba(0, 0, 0, 0.3);
}

.phase-node:nth-child(2) .phase-card { animation-delay: 0.1s; }
.phase-node:nth-child(3) .phase-card { animation-delay: 0.2s; }
.phase-node:nth-child(4) .phase-card { animation-delay: 0.3s; }

.phase-top {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 10px;
}

.phase-icon {
  font-size: 1.5rem;
}

.phase-step {
  font-size: 0.82rem;
  letter-spacing: 0.14em;
  text-transform: uppercase;
  color: var(--primary-orange);
  font-weight: 600;
}

.phase-card h3 {
  margin: 0 0 10px;
  font-size: 1.4rem;
  color: #fff;
}

.phase-card p {
  margin: 0 0 14px;
  color: var(--light-text);
  line-height: 1.7;
}

.phase-outcomes {
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
  gap: 6px;
}

.phase-outcomes li {
  padding-left: 20px;
  position: relative;
  color: var(--light-text);
  font-size: 0.94rem;
}

.phase-outcomes li::before {
  content: '→';
  position: absolute;
  left: 0;
  color: var(--primary-orange);
  font-weight: 600;
}

/* Phase accent colors */
.phase-learn .phase-card { border-left: 3px solid var(--growth-blue); }
.phase-contribute .phase-card { border-left: 3px solid var(--success-green); }
.phase-build .phase-card { border-left: 3px solid var(--primary-orange); }
.phase-earn .phase-card { border-left: 3px solid var(--accent-yellow); }

/* Topics Section */
.topics-section {
  padding: 36px 24px 96px;
}

.topics-wrapper {
  max-width: 1200px;
  margin: 0 auto;
}

.topics-grid {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 30px;
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

.topic-card:nth-child(2n) { animation-delay: 0.08s; }
.topic-card:nth-child(3n) { animation-delay: 0.14s; }

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

.topic-phase {
  font-size: 0.76rem;
  letter-spacing: 0.1em;
  color: var(--accent-yellow);
  font-weight: 600;
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
  .topics-grid {
    grid-template-columns: repeat(2, minmax(0, 1fr));
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

  .phase-connector {
    left: 28px;
  }
}
</style>
