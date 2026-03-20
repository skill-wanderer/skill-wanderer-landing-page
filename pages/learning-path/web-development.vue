<template>
  <div class="web-path-page">
    <section class="hero">
      <div class="hero-content">
        <p class="eyebrow">Learning Path Overview</p>
        <h1>Web Development</h1>
        <p class="hero-subtitle">A guided path from frontend foundations to shipping full-stack products.</p>
        <p class="hero-description">
          This path is built for learners who want more than scattered tutorials. You will start with
          the core building blocks of the web, learn how modern frontend and backend systems connect,
          and gradually build the judgment needed to ship production-ready work.
        </p>

        <div class="hero-actions">
          <NuxtLink to="/learning-path" class="btn btn-primary">← Back to Topic Hub</NuxtLink>
          <a href="https://dojo.skill-wanderer.com/paths" class="btn btn-secondary" target="_blank" rel="noopener noreferrer">
            Explore Dojo Paths
          </a>
        </div>
      </div>
    </section>

    <section class="overview-section">
      <div class="section-shell intro-grid">
        <article class="panel intro-panel">
          <p class="section-label">Introduction</p>
          <h2>What this path is about</h2>
          <p>
            Web development is not only about making pages look good. It is about understanding user
            experience, application logic, data flow, performance, security, and delivery. This overview
            gives learners a clear map of what will be covered so each lesson feels connected to a real goal.
          </p>
        </article>

        <article class="panel objective-panel">
          <p class="section-label">Goals</p>
          <h2>What you should be able to do</h2>
          <ul class="goal-list">
            <li>Understand the full journey from static pages to interactive full-stack applications.</li>
            <li>Build responsive interfaces with clean HTML, CSS, and modern JavaScript.</li>
            <li>Work with frontend frameworks, backend APIs, and database-backed features.</li>
            <li>Ship projects with stronger habits in debugging, testing, deployment, and maintainability.</li>
          </ul>
        </article>
      </div>
    </section>

    <section class="roadmap-section">
      <div class="section-shell">
        <div class="section-header">
          <p class="section-label">Path Structure</p>
          <h2>What is inside the Web Development path</h2>
          <p>
            The path is split into practical stages. Each stage prepares you for the next one, so you do not
            just memorize syntax, you understand how a real product is built and maintained.
          </p>
        </div>

        <div class="stage-grid">
          <article v-for="stage in stages" :key="stage.id" class="stage-card">
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
          <h2>Planned lessons</h2>
          <p>
            The list below shows how the Web Development path will expand. Early lessons define the core foundations,
            and later lessons are marked as coming soon while the curriculum is being prepared.
          </p>
        </div>

        <div class="lesson-list">
          <article v-for="lesson in lessons" :key="lesson.id" class="lesson-card" :class="lesson.statusClass">
            <div class="lesson-meta">
              <span class="lesson-id">{{ lesson.id }}</span>
              <span class="lesson-badge" :class="lesson.statusClass">{{ lesson.status }}</span>
            </div>
            <div class="lesson-body">
              <h3>{{ lesson.title }}</h3>
              <p>{{ lesson.description }}</p>
            </div>
          </article>
        </div>
      </div>
    </section>

    <section class="cta-section">
      <div class="section-shell">
        <div class="cta-card">
          <p class="section-label">Next Step</p>
          <h2>More lessons are on the way</h2>
          <p>
            This overview is the map. The detailed lessons will be published step by step, starting from the
            fundamentals and expanding into framework, backend, and deployment work.
          </p>
          <div class="hero-actions">
            <NuxtLink to="/contact" class="btn btn-primary">Ask About This Path</NuxtLink>
            <NuxtLink to="/learning-path/learn-contribute-build-earn" class="btn btn-outline">See Learning Philosophy</NuxtLink>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
useSEO({
  title: 'Web Development Learning Path | Skill-Wanderer',
  description: 'Explore the Skill-Wanderer Web Development learning path overview, including goals, curriculum structure, and upcoming lessons.',
  keywords: [
    'web development learning path',
    'frontend backend roadmap',
    'full stack learning path',
    'skill wanderer web development',
    'coming soon lessons'
  ]
})

interface LearningStage {
  id: string
  title: string
  timeline: string
  description: string
  points: string[]
}

interface PlannedLesson {
  id: string
  title: string
  description: string
  status: string
  statusClass: 'available' | 'coming-soon'
}

const stages: LearningStage[] = [
  {
    id: '01',
    title: 'Frontend Foundations',
    timeline: 'Stage One',
    description: 'Build the base skills required to structure content, style interfaces, and think in reusable UI pieces.',
    points: [
      'Semantic HTML and accessible page structure',
      'CSS layout systems, responsive design, and visual consistency',
      'JavaScript fundamentals for interaction and browser behavior'
    ]
  },
  {
    id: '02',
    title: 'Modern Frontend Development',
    timeline: 'Stage Two',
    description: 'Move from static pages into component-based application development with state, routing, and data flow.',
    points: [
      'Component thinking and frontend architecture',
      'Routing, reusable logic, and state handling',
      'Data fetching, forms, validation, and user feedback'
    ]
  },
  {
    id: '03',
    title: 'Backend and API Skills',
    timeline: 'Stage Three',
    description: 'Understand how web apps communicate with services, manage business logic, and protect data.',
    points: [
      'REST concepts, request lifecycle, and error handling',
      'Authentication, authorization, and secure application flow',
      'Server-side logic and integration patterns'
    ]
  },
  {
    id: '04',
    title: 'Data, Deployment, and Product Thinking',
    timeline: 'Stage Four',
    description: 'Connect application features to real product delivery with persistence, deployment, and maintainable workflows.',
    points: [
      'Database basics, modeling, and CRUD workflows',
      'Deployment pipelines, environment configuration, and monitoring',
      'Testing, debugging, and improving production quality'
    ]
  }
]

const lessons: PlannedLesson[] = [
  {
    id: 'L01',
    title: 'How the Web Works',
    description: 'A high-level orientation to browsers, servers, requests, responses, and how websites become applications.',
    status: 'Overview Ready',
    statusClass: 'available'
  },
  {
    id: 'L02',
    title: 'HTML and Semantic Structure',
    description: 'Learn how to build meaningful page structure that supports accessibility, SEO, and maintainability.',
    status: 'Coming Soon',
    statusClass: 'coming-soon'
  },
  {
    id: 'L03',
    title: 'CSS Layout and Responsive Design',
    description: 'Use spacing, typography, Flexbox, Grid, and breakpoints to build layouts that adapt well.',
    status: 'Coming Soon',
    statusClass: 'coming-soon'
  },
  {
    id: 'L04',
    title: 'JavaScript for Interactivity',
    description: 'Understand variables, functions, DOM interaction, events, and async behavior in the browser.',
    status: 'Coming Soon',
    statusClass: 'coming-soon'
  },
  {
    id: 'L05',
    title: 'Component-Based Frontend Development',
    description: 'Step into modern frameworks and learn how UI is split into manageable, reusable pieces.',
    status: 'Coming Soon',
    statusClass: 'coming-soon'
  },
  {
    id: 'L06',
    title: 'Backend APIs and Data Flow',
    description: 'See how the frontend talks to servers, sends data, and handles responses safely.',
    status: 'Coming Soon',
    statusClass: 'coming-soon'
  },
  {
    id: 'L07',
    title: 'Databases and Persistence',
    description: 'Introduce relational and document database thinking for real application storage.',
    status: 'Coming Soon',
    statusClass: 'coming-soon'
  },
  {
    id: 'L08',
    title: 'Testing, Deployment, and Next Steps',
    description: 'Wrap the path with quality practices, release workflows, and how to keep growing after the basics.',
    status: 'Coming Soon',
    statusClass: 'coming-soon'
  }
]
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
  align-items: center;
  gap: 12px;
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

.btn-secondary,
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