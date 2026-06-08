<template>
  <div>
    <!-- Hero Section -->
    <section class="hero">
      <h1>Our Projects</h1>
      <p>
        From non-profits to start-ups, big enterprises to our own guild infrastructure—every project we take on is an opportunity
        to create real impact and fuel free education.
      </p>
      <span class="launch-badge">Real Work. Real Impact. Real Learning.</span>
    </section>

    <!-- ═══════════════════════════════════════════════ -->
    <!-- SHIPPED WORK — Case Study Cards                -->
    <!-- ═══════════════════════════════════════════════ -->

    <!-- Non-Profit Section -->
    <section class="projects-section">
      <div class="content">
        <div class="section-header">
          <div class="section-tag">Non-Profit</div>
          <h2>Giving Back Through Technology</h2>
          <p>We apply our skills where they matter most—supporting missions that serve communities for free.</p>
        </div>

        <div class="case-study-grid">
          <NuxtLink to="/work-with-us/projects/wm-smile-generation-uganda" class="case-study-card">
            <div class="case-study-hero">
              <img src="/projects/wmsmile/children-learning.jpeg" alt="WM Smile Generation Uganda" class="case-study-image" />
              <span class="status-badge status-badge--maintenance">On Maintenance</span>
              <img src="/projects/wmsmile/og-image.jpeg" alt="WM Smile Generation Uganda Logo" class="case-study-logo" />
            </div>
            <div class="case-study-body">
              <h3>WM Smile Generation Uganda</h3>
              <p class="case-study-result">
                Built a full website for a Ugandan non-profit—giving them a digital presence to attract donors,
                share impact stories, and coordinate community healthcare and education programmes.
              </p>
              <div class="case-study-stack">
                <span class="stack-tag">Nuxt 3</span>
                <span class="stack-tag">TypeScript</span>
                <span class="stack-tag">Tailwind</span>
                <span class="stack-tag">Kubernetes</span>
              </div>
              <span class="case-study-link">View Case Study →</span>
            </div>
          </NuxtLink>

          <NuxtLink to="/work-with-us/projects/chanhdao-vn" class="case-study-card">
            <div class="case-study-hero">
              <img src="/projects/chanhdao/preview.svg" alt="ChanhDao.vn" class="case-study-image" />
              <span class="status-badge status-badge--active">Active Development</span>
            </div>
            <div class="case-study-body">
              <h3>ChanhDao.vn</h3>
              <p class="case-study-result">
                Digitalised 162 Buddhist lessons with AI-powered Q&A and structured learning paths for Vietnamese
                learners—running entirely on a self-hosted Kubernetes cluster with zero hosting cost to the client.
              </p>
              <div class="case-study-stack">
                <span class="stack-tag">Nuxt 3</span>
                <span class="stack-tag">Python</span>
                <span class="stack-tag">OpenAI</span>
                <span class="stack-tag">Kubernetes</span>
                <span class="stack-tag">PostgreSQL</span>
              </div>
              <span class="case-study-link">View Case Study →</span>
            </div>
          </NuxtLink>
        </div>
      </div>
    </section>

    <!-- Start-up Section -->
    <section class="projects-section alt-bg">
      <div class="content">
        <div class="section-header">
          <div class="section-tag">Start-up</div>
          <h2>Building the Future Together</h2>
          <p>We partner with ambitious start-ups to turn bold ideas into real products—sharing the journey from zero to launch.</p>
        </div>

        <div class="case-study-grid">
          <NuxtLink to="/work-with-us/projects/mindyminds" class="case-study-card">
            <div class="case-study-hero case-study-hero--contain">
              <img src="/projects/mindyminds/mindyminds-logo.jpg" alt="MindyMinds" class="case-study-image" />
              <span class="status-badge status-badge--active">Active Development</span>
            </div>
            <div class="case-study-body">
              <h3>MindyMinds</h3>
              <p class="case-study-result">
                Delivered a multi-tenant AI chatbot platform from concept to production in under 3 months—enabling
                the client to onboard multiple B2B customers with customisable AI assistants and a defence-in-depth security model.
              </p>
              <div class="case-study-stack">
                <span class="stack-tag">Next.js</span>
                <span class="stack-tag">TypeScript</span>
                <span class="stack-tag">OpenAI</span>
                <span class="stack-tag">Docker</span>
                <span class="stack-tag">PostgreSQL</span>
              </div>
              <span class="case-study-link">View Case Study →</span>
            </div>
          </NuxtLink>

          <NuxtLink to="/work-with-us/projects/mindyplay" class="case-study-card">
            <div class="case-study-hero case-study-hero--contain">
              <img src="/projects/mindyplay/mindyplay-logo.jpg" alt="MindyPlay" class="case-study-image" />
              <span class="status-badge status-badge--active">Active Development</span>
            </div>
            <div class="case-study-body">
              <h3>MindyPlay</h3>
              <p class="case-study-result">
                Turned a client's board game concept into an interactive mobile experience—built with Flutter
                and Flame Engine, powered by Firebase for real-time multiplayer and Keycloak for secure authentication.
              </p>
              <div class="case-study-stack">
                <span class="stack-tag">Flutter</span>
                <span class="stack-tag">Flame Engine</span>
                <span class="stack-tag">Firebase</span>
                <span class="stack-tag">Keycloak</span>
              </div>
              <span class="case-study-link">View Case Study →</span>
            </div>
          </NuxtLink>
        </div>
      </div>
    </section>

    <!-- Big Company Section -->
    <section class="projects-section">
      <div class="content">
        <div class="section-header">
          <div class="section-tag">Big Company</div>
          <h2>Enterprise-Grade Solutions</h2>
          <p>We tackle complex operational challenges for large organisations, delivering automation and tools that scale.</p>
        </div>

        <div class="case-study-grid case-study-grid--single">
          <NuxtLink to="/work-with-us/projects/recruitment-validator" class="case-study-card">
            <div class="case-study-hero case-study-hero--placeholder">
              <div class="hero-placeholder-inner">
                <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" class="hero-placeholder-icon">
                  <rect x="6" y="8" width="36" height="32" rx="4" stroke="currentColor" stroke-width="2.5"/>
                  <path d="M6 16h36" stroke="currentColor" stroke-width="2.5"/>
                  <path d="M14 24h8M14 30h12M14 36h6" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
                  <circle cx="34" cy="30" r="6" stroke="currentColor" stroke-width="2"/>
                  <path d="M32 30l2 2 4-4" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
              </div>
              <span class="status-badge status-badge--shipped">Shipped</span>
            </div>
            <div class="case-study-body">
              <h3>Recruitment Validator</h3>
              <p class="case-study-result">
                Automated mismatch detection across hundreds to thousands of recruitment applications for a Vietnamese
                EdTech provider—reducing days of manual Excel checking to minutes with severity-rated alerts and detailed reports.
              </p>
              <div class="case-study-stack">
                <span class="stack-tag">FastAPI</span>
                <span class="stack-tag">Python</span>
                <span class="stack-tag">Pandas</span>
                <span class="stack-tag">Docker</span>
              </div>
              <span class="case-study-link">View Case Study →</span>
            </div>
          </NuxtLink>
        </div>
      </div>
    </section>

    <!-- ═══════════════════════════════════════════════ -->
    <!-- GUILD PLATFORM ROADMAP — Simpler Cards         -->
    <!-- ═══════════════════════════════════════════════ -->
    <section class="roadmap-section">
      <div class="content">
        <div class="section-header">
          <div class="section-tag">Guild Platform</div>
          <h2>What We Are Building</h2>
          <p>
            Skill-Wanderer is not just a product—it is our mission made tangible. Every module below is being
            built in the open, by our guild, for our community.
          </p>
        </div>

        <div class="roadmap-grid">
          <div class="roadmap-card roadmap-card--live">
            <div class="roadmap-icon">🏠</div>
            <div class="roadmap-body">
              <div class="roadmap-header">
                <h4>This Landing Page</h4>
                <span class="roadmap-status roadmap-status--live">Live</span>
              </div>
              <p>The public face of the guild—communicating our mission, model, and community to the world.</p>
              <div class="roadmap-tags">
                <span class="roadmap-tag">Nuxt</span>
              </div>
            </div>
          </div>

          <div class="roadmap-card">
            <div class="roadmap-icon">📚</div>
            <div class="roadmap-body">
              <div class="roadmap-header">
                <h4>LMS</h4>
                <span class="roadmap-status">In Progress</span>
              </div>
              <p>A Learning Management System purpose-built for structured, guild-driven education at scale.</p>
              <div class="roadmap-tags">
                <span class="roadmap-tag">Education</span>
              </div>
            </div>
          </div>

          <div class="roadmap-card">
            <div class="roadmap-icon">✏️</div>
            <div class="roadmap-body">
              <div class="roadmap-header">
                <h4>Blog System</h4>
                <span class="roadmap-status">In Progress</span>
              </div>
              <p>A publishing system for knowledge sharing—enabling guild members to document their journeys.</p>
              <div class="roadmap-tags">
                <span class="roadmap-tag">Content</span>
              </div>
            </div>
          </div>

          <div class="roadmap-card">
            <div class="roadmap-icon">🧭</div>
            <div class="roadmap-body">
              <div class="roadmap-header">
                <h4>PathFinder AI Fleet</h4>
                <span class="roadmap-status">In Progress</span>
              </div>
              <p>AI agents guiding guild members through personalised learning paths based on goals and progress.</p>
              <div class="roadmap-tags">
                <span class="roadmap-tag">AI</span>
              </div>
            </div>
          </div>

          <div class="roadmap-card">
            <div class="roadmap-icon">🔧</div>
            <div class="roadmap-body">
              <div class="roadmap-header">
                <h4>Admin & Teacher Panel</h4>
                <span class="roadmap-status">In Progress</span>
              </div>
              <p>A control centre for administrators and mentors to manage content and guild operations.</p>
              <div class="roadmap-tags">
                <span class="roadmap-tag">Dashboard</span>
              </div>
            </div>
          </div>

          <div class="roadmap-card">
            <div class="roadmap-icon">💬</div>
            <div class="roadmap-body">
              <div class="roadmap-header">
                <h4>Communication Module</h4>
                <span class="roadmap-status">In Progress</span>
              </div>
              <p>Real-time messaging and notifications connecting guild members, mentors, and the community.</p>
              <div class="roadmap-tags">
                <span class="roadmap-tag">Messaging</span>
              </div>
            </div>
          </div>

          <div class="roadmap-card">
            <div class="roadmap-icon">🔒</div>
            <div class="roadmap-body">
              <div class="roadmap-header">
                <h4>Authorization Module</h4>
                <span class="roadmap-status">In Progress</span>
              </div>
              <p>Robust identity and access management ensuring secure, role-based access across all guild modules.</p>
              <div class="roadmap-tags">
                <span class="roadmap-tag">Security</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- CTA Section -->
    <section class="cta-section">
      <div class="content">
        <h2>Want to Engage the Guild?</h2>
        <p>If you have a project that needs a guild partner committed to real impact, let's talk.</p>
        <div class="cta-buttons">
          <NuxtLink to="/work-with-us/become-a-partner" class="btn-primary">Become a Partner</NuxtLink>
          <NuxtLink to="/work-with-us/success-sharing-model" class="btn-secondary">How It Works</NuxtLink>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
// Icons replaced with emojis
useSEO({
  title: 'Our Projects | Skill-Wanderer',
  description:
    'Explore the real-world projects the Skill-Wanderer guild has built—from non-profits and start-ups to enterprise solutions and our own guild infrastructure.',
  image: '/cropped-skill-wanderer-logo-768x256.webp',
  keywords: ['software portfolio', 'web development projects', 'non-profit technology', 'startup projects', 'guild project showcase', 'case studies'],
  structuredData: createBreadcrumbSchema([
    { name: 'Home', url: 'https://skill-wanderer.com/' },
    { name: 'Work With Us', url: 'https://skill-wanderer.com/work-with-us' },
    { name: 'Our Projects', url: 'https://skill-wanderer.com/work-with-us/our-projects' },
  ]),
})
</script>

<style scoped>
/* ── Hero ─────────────────────────────────────────── */
.hero {
  background: linear-gradient(135deg, var(--dark-bg) 0%, var(--darker-bg) 100%);
  padding: 150px 20px 80px;
  text-align: center;
  position: relative;
  overflow: hidden;
}

.hero::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background:
    radial-gradient(circle at 25% 50%, rgba(255, 107, 53, 0.12) 0%, transparent 50%),
    radial-gradient(circle at 75% 20%, rgba(255, 107, 53, 0.06) 0%, transparent 40%);
}

.hero h1 {
  font-size: 3.5rem;
  color: white;
  margin-bottom: 20px;
  position: relative;
  z-index: 1;
}

.hero p {
  font-size: 1.25rem;
  color: var(--light-text);
  opacity: 0.9;
  max-width: 700px;
  margin: 0 auto 30px;
  line-height: 1.8;
  position: relative;
  z-index: 1;
}

.launch-badge {
  background: linear-gradient(135deg, var(--primary-orange), var(--deep-orange));
  color: white;
  padding: 12px 30px;
  border-radius: 50px;
  font-weight: bold;
  font-size: 1rem;
  display: inline-block;
  position: relative;
  z-index: 1;
}

/* ── Shared ────────────────────────────────────────── */
.content {
  max-width: 1200px;
  margin: 0 auto;
}

.section-header {
  text-align: center;
  margin-bottom: 55px;
}

.section-tag {
  display: inline-block;
  background: rgba(255, 107, 53, 0.12);
  border: 1px solid rgba(255, 107, 53, 0.35);
  color: var(--primary-orange);
  padding: 5px 18px;
  border-radius: 50px;
  font-size: 0.78rem;
  font-weight: 700;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  margin-bottom: 16px;
}

.section-header h2 {
  font-size: 2.5rem;
  color: var(--primary-orange);
  margin-bottom: 14px;
}

.section-header p {
  font-size: 1.1rem;
  opacity: 0.8;
  max-width: 620px;
  margin: 0 auto;
  line-height: 1.7;
}

/* ── Project Sections ──────────────────────────────── */
.projects-section {
  padding: 90px 20px;
  background: var(--dark-bg);
}

.projects-section.alt-bg {
  background: var(--darker-bg);
}

/* ═══════════════════════════════════════════════════ */
/* CASE STUDY CARDS — Shipped Project Premium Cards   */
/* ═══════════════════════════════════════════════════ */
.case-study-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(440px, 1fr));
  gap: 36px;
}

.case-study-grid--single {
  grid-template-columns: minmax(440px, 640px);
  justify-content: center;
}

.case-study-card {
  background: var(--card-bg);
  border: 1px solid rgba(255, 107, 53, 0.15);
  border-radius: 20px;
  overflow: hidden;
  transition: all 0.35s ease;
  display: flex;
  flex-direction: column;
  text-decoration: none;
  color: inherit;
  cursor: pointer;
}

.case-study-card:hover {
  border-color: rgba(255, 107, 53, 0.5);
  transform: translateY(-8px);
  box-shadow: 0 16px 48px rgba(0, 0, 0, 0.35);
}

/* Hero Image */
.case-study-hero {
  width: 100%;
  height: 260px;
  overflow: hidden;
  position: relative;
  background: linear-gradient(135deg, rgba(255, 107, 53, 0.08) 0%, rgba(255, 107, 53, 0.02) 100%);
}

.case-study-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.5s ease;
}

.case-study-card:hover .case-study-image {
  transform: scale(1.06);
}

.case-study-hero--contain .case-study-image {
  object-fit: contain;
  background: #0d0b2e;
}

.case-study-hero--placeholder {
  display: flex;
  align-items: center;
  justify-content: center;
  background: linear-gradient(135deg, rgba(255, 107, 53, 0.1) 0%, rgba(255, 107, 53, 0.03) 100%);
}

.hero-placeholder-inner {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
}

.hero-placeholder-icon {
  width: 80px;
  height: 80px;
  color: var(--primary-orange);
  opacity: 0.5;
}

/* Status Badge */
.status-badge {
  position: absolute;
  top: 16px;
  right: 16px;
  padding: 6px 16px;
  border-radius: 50px;
  font-size: 0.75rem;
  font-weight: 700;
  letter-spacing: 0.06em;
  text-transform: uppercase;
  z-index: 2;
}

.status-badge--shipped {
  background: linear-gradient(135deg, #22c55e, #16a34a);
  color: white;
  box-shadow: 0 2px 12px rgba(34, 197, 94, 0.3);
}

.status-badge--active {
  background: linear-gradient(135deg, #f59e0b, #ea580c);
  color: white;
  box-shadow: 0 2px 12px rgba(245, 158, 11, 0.3);
}

.status-badge--maintenance {
  background: linear-gradient(135deg, #64748b, #475569);
  color: white;
  box-shadow: 0 2px 12px rgba(100, 116, 139, 0.3);
}

/* Logo Overlay */
.case-study-logo {
  position: absolute;
  bottom: 14px;
  right: 14px;
  width: 48px;
  height: 48px;
  border-radius: 50%;
  object-fit: cover;
  border: 2px solid rgba(255, 107, 53, 0.5);
  background: var(--darker-bg);
  box-shadow: 0 3px 10px rgba(0, 0, 0, 0.4);
  z-index: 2;
}

/* Card Body */
.case-study-body {
  padding: 30px 28px 28px;
  flex: 1;
  display: flex;
  flex-direction: column;
}

.case-study-body h3 {
  font-size: 1.4rem;
  font-weight: 700;
  color: white;
  margin-bottom: 12px;
}

.case-study-result {
  font-size: 0.98rem;
  line-height: 1.75;
  opacity: 0.85;
  margin-bottom: 20px;
  flex: 1;
}

.case-study-stack {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  margin-bottom: 18px;
}

.stack-tag {
  background: rgba(255, 107, 53, 0.1);
  border: 1px solid rgba(255, 107, 53, 0.25);
  color: var(--primary-orange);
  padding: 5px 14px;
  border-radius: 50px;
  font-size: 0.78rem;
  font-weight: 600;
}

.case-study-link {
  display: inline-block;
  color: var(--primary-orange);
  font-size: 0.95rem;
  font-weight: 600;
  transition: all 0.3s ease;
  margin-top: auto;
}

.case-study-card:hover .case-study-link {
  color: #FFD93D;
  transform: translateX(4px);
}

/* ═══════════════════════════════════════════════════ */
/* ROADMAP — Simpler Internal Module Cards            */
/* ═══════════════════════════════════════════════════ */
.roadmap-section {
  padding: 90px 20px;
  background: var(--darker-bg);
  border-top: 1px solid rgba(255, 107, 53, 0.08);
}

.roadmap-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
  gap: 20px;
}

.roadmap-card {
  background: rgba(255, 255, 255, 0.02);
  border: 1px solid rgba(255, 255, 255, 0.06);
  border-radius: 14px;
  padding: 20px 22px;
  display: flex;
  gap: 16px;
  align-items: flex-start;
  transition: all 0.25s ease;
}

.roadmap-card:hover {
  background: rgba(255, 255, 255, 0.04);
  border-color: rgba(255, 255, 255, 0.12);
}

.roadmap-card--live {
  border-color: rgba(34, 197, 94, 0.2);
  background: rgba(34, 197, 94, 0.03);
}

.roadmap-icon {
  font-size: 1.6rem;
  flex-shrink: 0;
  margin-top: 2px;
}

.roadmap-body {
  flex: 1;
  min-width: 0;
}

.roadmap-header {
  display: flex;
  align-items: center;
  gap: 10px;
  margin-bottom: 6px;
}

.roadmap-header h4 {
  font-size: 1rem;
  font-weight: 700;
  color: white;
  margin: 0;
}

.roadmap-status {
  font-size: 0.68rem;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.08em;
  padding: 3px 10px;
  border-radius: 50px;
  background: rgba(255, 255, 255, 0.06);
  color: rgba(255, 255, 255, 0.5);
  white-space: nowrap;
}

.roadmap-status--live {
  background: rgba(34, 197, 94, 0.15);
  color: #4ade80;
}

.roadmap-body p {
  font-size: 0.88rem;
  line-height: 1.6;
  opacity: 0.65;
  margin-bottom: 10px;
}

.roadmap-tags {
  display: flex;
  gap: 6px;
}

.roadmap-tag {
  font-size: 0.72rem;
  padding: 2px 10px;
  border-radius: 50px;
  background: rgba(255, 255, 255, 0.04);
  color: rgba(255, 255, 255, 0.4);
  border: 1px solid rgba(255, 255, 255, 0.06);
}

/* ── CTA Section ───────────────────────────────────── */
.cta-section {
  padding: 90px 20px;
  background: var(--dark-bg);
  text-align: center;
}

.cta-section .content {
  max-width: 760px;
}

.cta-section h2 {
  font-size: 2.5rem;
  font-weight: 700;
  color: white;
  margin-bottom: 16px;
}

.cta-section p {
  opacity: 0.85;
  font-size: 1.1rem;
  margin-bottom: 38px;
  line-height: 1.7;
}

.cta-buttons {
  display: flex;
  gap: 20px;
  justify-content: center;
  flex-wrap: wrap;
}

.btn-primary {
  background: linear-gradient(135deg, var(--primary-orange), var(--deep-orange));
  color: white;
  padding: 15px 35px;
  border-radius: 50px;
  font-weight: bold;
  text-decoration: none;
  transition: all 0.3s ease;
  font-size: 1rem;
  display: inline-block;
}

.btn-primary:hover {
  background: linear-gradient(135deg, var(--deep-orange), var(--primary-orange));
  transform: translateY(-2px);
  box-shadow: 0 10px 30px rgba(255, 107, 53, 0.35);
}

.btn-secondary {
  background: transparent;
  color: var(--primary-orange);
  padding: 15px 35px;
  border-radius: 50px;
  font-weight: bold;
  text-decoration: none;
  border: 2px solid var(--primary-orange);
  transition: all 0.3s ease;
  font-size: 1rem;
  display: inline-block;
}

.btn-secondary:hover {
  background: var(--primary-orange);
  color: white;
  transform: translateY(-2px);
}

/* ── Responsive ────────────────────────────────────── */
@media (max-width: 768px) {
  .hero h1 {
    font-size: 2.4rem;
  }

  .hero p {
    font-size: 1.1rem;
  }

  .section-header h2 {
    font-size: 2rem;
  }

  .case-study-grid,
  .case-study-grid--single {
    grid-template-columns: 1fr;
  }

  .case-study-hero {
    height: 200px;
  }

  .roadmap-grid {
    grid-template-columns: 1fr;
  }
}
</style>