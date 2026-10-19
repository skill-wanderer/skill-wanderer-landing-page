<template>
  <div class="roadmap-page">
    <!-- Hero Section -->
    <section class="hero">
      <div class="hero-content">
        <h1 class="hero-title">Our Roadmap</h1>
        <p class="hero-subtitle">Three phases toward a social enterprise that keeps itself going</p>
        <p class="hero-description">
          We're building Skill-Wanderer in a deliberate order. First, serve enough clients with small budgets to make
          free education sustainable. Then build our own learning platform and grow our network of learners. Then
          make a community where members help each other grow.
        </p>
        <ImageSlot name="roadmap/hero" class="hero-image" priority />
      </div>
    </section>

    <!-- Roadmap Timeline Section -->
    <section class="roadmap-timeline">
      <div class="container">
        <div class="section-header">
          <h2>Three Phases</h2>
          <p>Each phase stands on the one before it. Here's where we are today.</p>
        </div>

        <ol class="timeline">
          <!-- Phase 1: the engine that makes free education sustainable -->
          <li class="timeline-item" :class="{ visible: visibleItems.has('clients') }" data-timeline-id="clients">
            <div class="timeline-marker" aria-hidden="true">
              <span class="phase-number">1</span>
            </div>
            <article class="timeline-card">
              <div class="card-main">
                <div class="card-header">
                  <span class="card-icon" aria-hidden="true">🤝</span>
                  <div class="card-status status-active">
                    <span class="status-dot"></span>
                    In Progress
                  </div>
                </div>
                <p class="card-phase">Phase 1</p>
                <h3>Serve Enough Clients With Small Budgets</h3>
                <p class="card-subtitle">To make free education sustainable</p>
                <p class="card-description">
                  We help solo founders, freelancers, coaches, writers, small businesses and non-profits get the
                  websites and AI tools they need at a price they can carry: a free working prototype first, no
                  development fee, then a <NuxtLink to="/work-with-us/service-model#plans">monthly plan</NuxtLink>,
                  down to $8 a month plus your own domain for a simple website.
                </p>
                <p class="card-description">
                  Every client we serve well helps twice: their project gets built, and their fees fund free
                  education. Today client work covers our running costs but not yet our contributors, so this phase
                  continues until it can carry both.
                </p>
                <ul class="card-features">
                  <li class="feature-tag">Free Working Prototypes</li>
                  <li class="feature-tag">No Development Fee</li>
                  <li class="feature-tag">Care &amp; Hosting-Only Plans</li>
                  <li class="feature-tag">Built With AI, Reviewed by People</li>
                  <li class="feature-tag">Long-Term Tech Partnership</li>
                  <li class="feature-tag">Inquiry &amp; Project Tracking</li>
                </ul>
                <p class="card-goal">
                  <strong>Goal:</strong> enough steady client work to cover our running costs and pay contributors
                  fairly, so free education never depends on donations, grants or luck.
                </p>
              </div>
              <ImageSlot name="roadmap/phase-clients" group="roadmapPhases" class="card-image" />
            </article>
          </li>

          <!-- Phase 2: our own platform and a wider learner network -->
          <li class="timeline-item" :class="{ visible: visibleItems.has('platform') }" data-timeline-id="platform">
            <div class="timeline-marker" aria-hidden="true">
              <span class="phase-number">2</span>
            </div>
            <article class="timeline-card">
              <div class="card-main">
                <div class="card-header">
                  <span class="card-icon" aria-hidden="true">📚</span>
                  <div class="card-status status-next">
                    <span class="status-dot"></span>
                    Up Next
                  </div>
                </div>
                <p class="card-phase">Phase 2</p>
                <h3>Develop the Platform and Expand the Learner Network</h3>
                <p class="card-subtitle">To reach many more self-learners</p>
                <p class="card-description">
                  With a steady engine underneath, we build out our own learning platform to replace our Moodle setup,
                  so we fully own the learning experience. Our featured path,
                  <NuxtLink to="/learning-path/learning-in-the-ai-era">Learning in the AI Era</NuxtLink>, is already
                  in development, and our other paths reopen once their content is revised.
                </p>
                <p class="card-description">
                  Then we reach many more self-learners, and open more ways for them to grow into contributors on real
                  projects.
                </p>
                <ul class="card-features">
                  <li class="feature-tag">Our Own Learning Platform</li>
                  <li class="feature-tag">Member Portal &amp; Dashboards</li>
                  <li class="feature-tag">Progress Tracking</li>
                  <li class="feature-tag">Learning in the AI Era</li>
                  <li class="feature-tag">Revised Paths Reopening</li>
                  <li class="feature-tag">Wider Learner Network</li>
                  <li class="feature-tag">Privacy-First Analytics</li>
                </ul>
                <p class="card-goal">
                  <strong>Goal:</strong> a platform we fully own, with no vendor lock-in, and a growing network of
                  self-learners who learn for free and grow into contributors.
                </p>
              </div>
              <ImageSlot name="roadmap/phase-platform" group="roadmapPhases" class="card-image" />
            </article>
          </li>

          <!-- Phase 3: a community where members help members -->
          <li class="timeline-item" :class="{ visible: visibleItems.has('community') }" data-timeline-id="community">
            <div class="timeline-marker" aria-hidden="true">
              <span class="phase-number">3</span>
            </div>
            <article class="timeline-card">
              <div class="card-main">
                <div class="card-header">
                  <span class="card-icon" aria-hidden="true">🌱</span>
                  <div class="card-status status-planned">
                    <span class="status-dot"></span>
                    Planned
                  </div>
                </div>
                <p class="card-phase">Phase 3</p>
                <h3>Make a Community</h3>
                <p class="card-subtitle">Where members help members</p>
                <p class="card-description">
                  The last phase is the one that lasts longest: a community where learners, contributors, mentors and
                  clients help each other. Discussions and chat, study groups, peer reviews and project showcases, all
                  on our own platform, so the culture of guild over competition can truly come alive.
                </p>
                <ul class="card-features">
                  <li class="feature-tag">Discussion &amp; Chat</li>
                  <li class="feature-tag">Study Groups</li>
                  <li class="feature-tag">Peer Reviews</li>
                  <li class="feature-tag">Member Mentoring</li>
                  <li class="feature-tag">Project Showcases</li>
                  <li class="feature-tag">Events &amp; Meetups</li>
                </ul>
                <p class="card-goal">
                  <strong>Goal:</strong> a self-sustaining community where today's apprentices become tomorrow's
                  masters, and nobody with limited resources has to grow alone.
                </p>
              </div>
              <ImageSlot name="roadmap/phase-community" group="roadmapPhases" class="card-image" />
            </article>
          </li>
        </ol>
      </div>
    </section>

    <!-- Why the phases come in this order -->
    <section class="order-section">
      <div class="container">
        <div class="section-header">
          <h2>Why This Order</h2>
          <p>A mission that rests on luck or goodwill can stop at any time, so we build the engine first.</p>
        </div>

        <div class="order-grid">
          <article class="order-card">
            <span class="order-icon" aria-hidden="true">⚙️</span>
            <h3>The engine comes first</h3>
            <p>
              Serving clients with small budgets is how the mission pays its own way. Until that's steady, everything
              else would rest on factors outside our control.
            </p>
          </article>
          <article class="order-card">
            <span class="order-icon" aria-hidden="true">📚</span>
            <h3>Then reach</h3>
            <p>
              Our own platform lets us teach many more learners at a cost we control, and a wider network brings more
              of them in.
            </p>
          </article>
          <article class="order-card">
            <span class="order-icon" aria-hidden="true">🌱</span>
            <h3>Then a community to multiply it</h3>
            <p>
              With a solid base underneath, members helping members makes everything go further, for longer.
            </p>
          </article>
        </div>

        <p class="order-link">
          <NuxtLink to="/social-enterprise">Read why we chose social enterprise over charity →</NuxtLink>
        </p>
      </div>
    </section>

    <!-- Vision Banner -->
    <section class="vision-banner">
      <div class="container">
        <div class="banner-content">
          <h2>Built in the Open, Driven by Purpose</h2>
          <p>
            This roadmap follows the same principles as everything we do:
            <strong>transparency, integrity, and community-first thinking</strong>. It's a living document, and it
            changes as we learn from our clients, our learners and the community.
          </p>
          <div class="banner-stats">
            <div class="stat">
              <span class="stat-number">3</span>
              <span class="stat-label">Phases</span>
            </div>
            <div class="stat">
              <span class="stat-number">1</span>
              <span class="stat-label">Path in Development</span>
            </div>
            <div class="stat">
              <span class="stat-number">100%</span>
              <span class="stat-label">Net Revenue Reinvested</span>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- CTA Section -->
    <section class="cta">
      <h2>Want to Be Part of the Journey?</h2>
      <p>
        Phase 1 is where help counts most right now: bring us a project, or tell a small business about us. Learners
        are welcome at every phase.
      </p>
      <div class="cta-buttons">
        <NuxtLink to="/contact" class="btn btn-primary">
          Tell Us About Your Idea
          <span>→</span>
        </NuxtLink>
        <NuxtLink to="/learning-path" class="btn btn-secondary">
          Start Learning for Free
        </NuxtLink>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import { onMounted, onUnmounted, ref } from 'vue'

// SEO and meta management
useSEO({
  title: 'Roadmap: Three Phases to a Lasting Mission | Skill-Wanderer',
  description: 'Our roadmap in three phases: serve enough clients with small budgets to make free education sustainable, build our learning platform, then grow a community.',
  keywords: ['skill-wanderer roadmap', 'social enterprise roadmap', 'affordable tech for small business', 'learning platform', 'learner network', 'learning community', 'free education roadmap'],
  type: 'website',
})

const visibleItems = ref(new Set<string>())
let observer: IntersectionObserver | null = null

onMounted(() => {
  observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const id = (entry.target as HTMLElement).dataset.timelineId
        if (id) {
          visibleItems.value.add(id)
        }
      }
    })
  }, {
    threshold: 0.15,
    rootMargin: '0px 0px -80px 0px'
  })

  document.querySelectorAll('.timeline-item').forEach(item => observer?.observe(item))
})

onUnmounted(() => {
  observer?.disconnect()
})
</script>

<style scoped>
/* ========== Hero Section ========== */
.hero {
  padding: 140px 20px 80px;
  text-align: center;
  background: radial-gradient(circle at 50% 50%, rgba(255, 107, 53, 0.1) 0%, transparent 50%);
}

.hero-title {
  font-size: clamp(2.5rem, 6vw, 4rem);
  font-weight: 800;
  margin-bottom: 20px;
  background: linear-gradient(135deg, var(--primary-orange), var(--accent-yellow));
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

.hero-subtitle {
  font-size: clamp(1.1rem, 2.5vw, 1.4rem);
  opacity: 0.9;
  margin-bottom: 20px;
}

.hero-description {
  max-width: 700px;
  margin: 0 auto;
  opacity: 0.8;
  line-height: 1.8;
  font-size: 1.05rem;
}

.hero-image {
  max-width: 900px;
  margin: 48px auto 0;
}

/* ========== Roadmap Timeline Section ========== */
.roadmap-timeline {
  padding: 80px 20px;
}

.container {
  max-width: 1200px;
  margin: 0 auto;
}

.section-header {
  text-align: center;
  margin-bottom: 60px;
}

.section-header h2 {
  font-size: clamp(2rem, 4vw, 3rem);
  font-weight: 800;
  margin-bottom: 15px;
  background: linear-gradient(135deg, var(--primary-orange), var(--accent-yellow));
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

.section-header p {
  opacity: 0.8;
  font-size: 1.1rem;
  max-width: 600px;
  margin: 0 auto;
  line-height: 1.7;
}

/* ========== Timeline ========== */
.timeline {
  position: relative;
  list-style: none;
  margin: 0;
  padding: 20px 0;
}

.timeline::before {
  content: '';
  position: absolute;
  left: 40px;
  top: 0;
  bottom: 0;
  width: 3px;
  background: linear-gradient(180deg, var(--primary-orange), var(--accent-yellow), rgba(255, 107, 53, 0.2));
  border-radius: 3px;
}

.timeline-item {
  position: relative;
  padding-left: 100px;
  margin-bottom: 60px;
  opacity: 0;
  transform: translateX(-30px);
  transition: all 0.6s ease;
}

.timeline-item:last-child {
  margin-bottom: 0;
}

.timeline-item.visible {
  opacity: 1;
  transform: translateX(0);
}

.timeline-marker {
  position: absolute;
  left: 22px;
  top: 20px;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background: linear-gradient(135deg, var(--primary-orange), var(--deep-orange));
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 2;
  box-shadow: 0 0 20px rgba(255, 107, 53, 0.4);
}

.phase-number {
  color: #fff;
  font-weight: 800;
  font-size: 1.1rem;
}

/* Text on the left and the phase image on the right; the image stacks on top on small screens. */
.timeline-card {
  display: grid;
  grid-template-columns: minmax(0, 1fr) minmax(0, 340px);
  gap: 32px;
  align-items: start;
  background: var(--card-bg);
  border: 1px solid rgba(255, 107, 53, 0.15);
  border-radius: 16px;
  padding: 35px;
  transition: all 0.3s ease;
}

/* Until the phase images exist (production skips the group until all three do), the text takes the whole card. */
.timeline-card:not(:has(.card-image)) {
  grid-template-columns: minmax(0, 1fr);
}

.timeline-card:hover {
  background: var(--card-hover);
  border-color: rgba(255, 107, 53, 0.3);
  transform: translateY(-3px);
}

.card-image {
  border-radius: 14px;
}

.card-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 15px;
}

.card-icon {
  font-size: 2.5rem;
}

.card-status {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 6px 16px;
  border-radius: 50px;
  font-size: 0.85rem;
  font-weight: 600;
}

.status-dot {
  width: 8px;
  height: 8px;
  border-radius: 50%;
  display: inline-block;
}

.status-active {
  background: rgba(76, 175, 80, 0.15);
  color: #4CAF50;
  border: 1px solid rgba(76, 175, 80, 0.3);
}

.status-active .status-dot {
  background: #4CAF50;
  animation: pulse-dot 2s infinite;
}

.status-next {
  background: rgba(255, 107, 53, 0.12);
  color: #ff8757;
  border: 1px solid rgba(255, 107, 53, 0.35);
}

.status-next .status-dot {
  background: #ff8757;
}

.status-planned {
  background: rgba(255, 193, 7, 0.12);
  color: #FFD93D;
  border: 1px solid rgba(255, 193, 7, 0.3);
}

.status-planned .status-dot {
  background: #FFD93D;
}

@keyframes pulse-dot {
  0%, 100% { opacity: 1; }
  50% { opacity: 0.4; }
}

.card-phase {
  margin: 0 0 6px;
  font-size: 0.8rem;
  font-weight: 700;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  color: var(--accent-yellow);
}

.timeline-card h3 {
  font-size: 1.5rem;
  font-weight: 700;
  color: var(--primary-orange);
  margin-bottom: 8px;
}

.card-subtitle {
  font-size: 1rem;
  opacity: 0.7;
  margin-bottom: 15px;
  font-style: italic;
}

.card-description {
  line-height: 1.8;
  opacity: 0.85;
  margin-bottom: 16px;
  font-size: 0.98rem;
}

.card-description a {
  color: var(--primary-orange);
  font-weight: 600;
}

.card-features {
  list-style: none;
  padding: 0;
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  margin: 4px 0 20px;
}

.feature-tag {
  background: rgba(255, 107, 53, 0.1);
  border: 1px solid rgba(255, 107, 53, 0.2);
  color: var(--accent-yellow);
  padding: 6px 14px;
  border-radius: 50px;
  font-size: 0.82rem;
  font-weight: 500;
}

.card-goal {
  margin: 0;
  background: rgba(255, 255, 255, 0.03);
  border-left: 3px solid var(--primary-orange);
  padding: 12px 18px;
  border-radius: 0 8px 8px 0;
  font-size: 0.92rem;
  line-height: 1.7;
  opacity: 0.9;
}

.card-goal strong {
  color: var(--primary-orange);
}

/* ========== Why This Order ========== */
.order-section {
  padding: 80px 20px;
  background: radial-gradient(ellipse at 50% 0%, rgba(255, 107, 53, 0.06) 0%, transparent 60%);
}

.order-grid {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 30px;
}

.order-card {
  background: var(--card-bg);
  border: 1px solid rgba(255, 107, 53, 0.12);
  border-radius: 16px;
  padding: 30px;
  transition: all 0.3s ease;
}

.order-card:hover {
  background: var(--card-hover);
  transform: translateY(-5px);
  border-color: rgba(255, 107, 53, 0.3);
}

.order-icon {
  font-size: 2.2rem;
  display: block;
  margin-bottom: 15px;
}

.order-card h3 {
  color: var(--primary-orange);
  font-size: 1.2rem;
  margin-bottom: 12px;
}

.order-card p {
  opacity: 0.85;
  line-height: 1.7;
  font-size: 0.95rem;
  margin: 0;
}

.order-link {
  text-align: center;
  margin: 40px 0 0;
}

.order-link a {
  color: var(--primary-orange);
  font-weight: 600;
  text-decoration: none;
}

.order-link a:hover {
  text-decoration: underline;
}

/* ========== Vision Banner ========== */
.vision-banner {
  padding: 80px 20px;
}

.banner-content {
  max-width: 900px;
  margin: 0 auto;
  text-align: center;
  background: var(--card-bg);
  border: 1px solid rgba(255, 107, 53, 0.15);
  border-radius: 20px;
  padding: 50px 40px;
}

.banner-content h2 {
  font-size: clamp(1.5rem, 3vw, 2.2rem);
  font-weight: 700;
  margin-bottom: 20px;
  background: linear-gradient(135deg, var(--primary-orange), var(--accent-yellow));
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

.banner-content p {
  opacity: 0.85;
  line-height: 1.8;
  font-size: 1.05rem;
  margin-bottom: 35px;
}

.banner-content p strong {
  color: var(--primary-orange);
}

.banner-stats {
  display: flex;
  justify-content: center;
  gap: 50px;
  flex-wrap: wrap;
}

.stat {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.stat-number {
  font-size: 2.5rem;
  font-weight: 800;
  background: linear-gradient(135deg, var(--primary-orange), var(--accent-yellow));
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

.stat-label {
  font-size: 0.9rem;
  opacity: 0.7;
  margin-top: 5px;
}

/* ========== CTA Section ========== */
.cta {
  padding: 80px 20px;
  text-align: center;
  background: radial-gradient(circle at 50% 50%, rgba(255, 107, 53, 0.08) 0%, transparent 50%);
}

.cta h2 {
  font-size: clamp(1.8rem, 4vw, 2.5rem);
  font-weight: 800;
  margin-bottom: 15px;
  background: linear-gradient(135deg, var(--primary-orange), var(--accent-yellow));
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

.cta p {
  opacity: 0.8;
  font-size: 1.1rem;
  margin-bottom: 30px;
  max-width: 600px;
  margin-left: auto;
  margin-right: auto;
  line-height: 1.7;
}

.cta-buttons {
  display: flex;
  gap: 20px;
  justify-content: center;
  flex-wrap: wrap;
}

.btn {
  padding: 15px 30px;
  border-radius: 50px;
  font-size: 1.1rem;
  font-weight: 600;
  transition: all 0.3s ease;
  display: inline-flex;
  align-items: center;
  gap: 10px;
  text-decoration: none;
  cursor: pointer;
}

.btn-primary {
  background: linear-gradient(135deg, var(--primary-orange), var(--deep-orange));
  color: white;
  border: none;
  box-shadow: 0 4px 15px rgba(255, 107, 53, 0.3);
}

.btn-primary:hover {
  transform: translateY(-2px);
  box-shadow: 0 6px 25px rgba(255, 107, 53, 0.4);
}

.btn-secondary {
  background: transparent;
  color: var(--primary-orange);
  border: 2px solid var(--primary-orange);
}

.btn-secondary:hover {
  background: rgba(255, 107, 53, 0.1);
  transform: translateY(-2px);
}

/* ========== Responsive ========== */
@media (max-width: 1024px) {
  .timeline-card {
    grid-template-columns: minmax(0, 1fr);
  }

  .card-image {
    order: -1;
    max-width: 520px;
  }
}

@media (max-width: 900px) {
  .order-grid {
    grid-template-columns: minmax(0, 1fr);
    max-width: 600px;
    margin: 0 auto;
  }
}

@media (max-width: 768px) {
  .hero {
    padding: 120px 20px 60px;
  }

  .timeline::before {
    left: 20px;
  }

  .timeline-item {
    padding-left: 60px;
    margin-bottom: 40px;
  }

  .timeline-marker {
    left: 2px;
    width: 36px;
    height: 36px;
  }

  .timeline-card {
    padding: 25px;
  }

  .timeline-card h3 {
    font-size: 1.3rem;
  }

  .banner-content {
    padding: 35px 25px;
  }

  .banner-stats {
    gap: 30px;
  }

  .cta-buttons {
    flex-direction: column;
    align-items: center;
  }

  .card-header {
    flex-direction: column;
    align-items: flex-start;
    gap: 10px;
  }
}

@media (max-width: 480px) {
  .hero {
    padding: 110px 16px 40px;
  }

  .timeline::before {
    left: 16px;
  }

  .timeline-item {
    padding-left: 48px;
    margin-bottom: 35px;
  }

  .timeline-marker {
    left: 0;
    width: 32px;
    height: 32px;
    top: 16px;
  }

  .phase-number {
    font-size: 0.95rem;
  }

  .timeline-card {
    padding: 20px 16px;
    border-radius: 14px;
  }

  .feature-tag {
    font-size: 0.75rem;
    padding: 4px 10px;
  }

  .card-features {
    gap: 6px;
  }

  .cta-buttons .btn {
    width: 100%;
    max-width: 300px;
    justify-content: center;
  }
}
</style>
