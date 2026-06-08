<template>
  <div>
    <!-- Hero Section -->
    <section class="hero">
      <div class="hero-content">
        <NuxtLink to="/work-with-us/our-projects" class="back-link">
          &larr; Back to Our Projects
        </NuxtLink>
        <div class="status-badge">
          <span>Active Development</span>
        </div>
        <img src="/projects/mindyplay/mindyplay-logo.jpg" alt="MindyPlay Logo" class="hero-logo" />
        <h1>MindyPlay</h1>
        <p class="tagline">Mobile Game Development for Start-ups</p>
        <div class="hero-meta">
          <span class="meta-tag">Flutter &amp; Flame Engine</span>
          <span class="meta-tag">Game Digitalization</span>
          <a href="https://mindycore.com/mindy-play" target="_blank" rel="noopener noreferrer" class="meta-tag link-tag">mindycore.com/mindy-play &rarr;</a>
        </div>
      </div>
    </section>

    <!-- Mission Section -->
    <section class="detail-section darker">
      <div class="detail-container">
        <h2>Mission</h2>
        <p>
          MindyPlay is a <strong>suite of mobile games under the MindyPlay brand</strong> — combining entertainment
          with meaningful, mind-engaging experiences. The project focuses on digitalizing an existing game concept for
          a client, turning a physical game into an interactive mobile experience powered by Flutter and the Flame
          game engine.
        </p>
        <div class="highlight-box">
          <span class="highlight-number">3</span>
          <span class="highlight-label">person team — Guild Master as Technical Project Manager with 2 mentees</span>
        </div>
      </div>
    </section>

    <!-- Key Stats Section -->
    <section class="detail-section">
      <div class="detail-container">
        <div class="stats-grid">
          <div class="stat-card">
            <span class="stat-number">3</span>
            <span class="stat-label">Team Members</span>
          </div>
          <div class="stat-card">
            <span class="stat-number">Flutter</span>
            <span class="stat-label">Cross-Platform Framework</span>
          </div>
          <div class="stat-card">
            <span class="stat-number">Flame</span>
            <span class="stat-label">Game Engine</span>
          </div>
          <div class="stat-card">
            <span class="stat-number">Firebase</span>
            <span class="stat-label">Backend Services</span>
          </div>
        </div>
      </div>
    </section>

    <!-- Architecture Section -->
    <section class="detail-section">
      <div class="detail-container">
        <h2>Architecture</h2>
        <p class="section-intro">
          Built with Flutter and the Flame game engine for cross-platform mobile game development, backed by
          Firebase for real-time data and backend services, and Keycloak for secure user authorization.
        </p>

        <div class="arch-grid">
          <div class="arch-card arch-card--primary">
            <h3>MindyPlay</h3>
            <span class="arch-label">Mobile App</span>
            <p>Flutter &amp; Flame Engine</p>
          </div>
        </div>

        <div class="arch-grid arch-grid--three">
          <div class="arch-card">
            <h3>Flame Engine</h3>
            <span class="arch-label">Game</span>
            <p>2D game engine built on top of Flutter</p>
          </div>
          <div class="arch-card">
            <h3>Firebase</h3>
            <span class="arch-label">Backend</span>
            <p>Real-time database, authentication &amp; cloud functions</p>
          </div>
          <div class="arch-card">
            <h3>Keycloak</h3>
            <span class="arch-label">Authorization</span>
            <p>Identity &amp; access management for secure user login</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Tech Stack Section -->
    <section class="detail-section darker">
      <div class="detail-container">
        <h2>Tech Stack</h2>
        <div class="tech-table">
          <div class="tech-row">
            <div class="tech-layer">Frontend</div>
            <div class="tech-name">Flutter</div>
            <div class="tech-why">Cross-platform framework — single codebase for iOS and Android with native performance</div>
          </div>
          <div class="tech-row">
            <div class="tech-layer">Game Engine</div>
            <div class="tech-name">Flame Engine</div>
            <div class="tech-why">Lightweight 2D game engine built on Flutter — game loops, sprites, collision detection &amp; animations</div>
          </div>
          <div class="tech-row">
            <div class="tech-layer">Backend</div>
            <div class="tech-name">Firebase</div>
            <div class="tech-why">Real-time database, cloud functions, analytics, and push notifications for game services</div>
          </div>
          <div class="tech-row">
            <div class="tech-layer">Authorization</div>
            <div class="tech-name">Keycloak</div>
            <div class="tech-why">Enterprise-grade identity and access management — SSO, role-based access, and secure token management</div>
          </div>
        </div>
      </div>
    </section>

    <!-- Game Digitalization Section -->
    <section class="detail-section">
      <div class="detail-container">
        <h2>Game Digitalization</h2>
        <p class="section-intro">
          The core mission of MindyPlay is to take an existing game concept from a client and transform it into a
          fully interactive mobile experience — preserving the original game design while leveraging mobile
          capabilities to enhance gameplay.
        </p>
        <div class="features-grid">
          <div class="feature-card">
            <div class="feature-icon">🎲</div>
            <h3>Physical to Digital</h3>
            <p>Converting a traditional game into a rich mobile experience with touch controls, animations, and real-time feedback.</p>
          </div>
          <div class="feature-card">
            <div class="feature-icon">🎨</div>
            <h3>Visual &amp; Interactive Design</h3>
            <p>Sprite-based graphics, smooth animations, and engaging UI built with the Flame engine and Flutter widgets.</p>
          </div>
          <div class="feature-card">
            <div class="feature-icon">📱</div>
            <h3>Cross-Platform</h3>
            <p>One codebase targeting both iOS and Android — consistent gameplay experience across all devices.</p>
          </div>
          <div class="feature-card">
            <div class="feature-icon">🔒</div>
            <h3>Secure Access</h3>
            <p>Keycloak-powered authorization ensuring secure user authentication and role-based game access.</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Current Status Section -->
    <section class="detail-section darker">
      <div class="detail-container">
        <h2>Current Status</h2>
        <p>
          The project is currently <strong>in active development</strong>. The team is building the game engine
          integration and core gameplay mechanics using Flutter and Flame, with Firebase backend services being
          set up in parallel.
        </p>
        <div class="status-timeline">
          <div class="timeline-item timeline-item--done">
            <div class="timeline-marker"></div>
            <div class="timeline-content">
              <h3>Project Kickoff</h3>
              <p>Game concept analysis, technical architecture design, and team onboarding completed.</p>
            </div>
          </div>
          <div class="timeline-item timeline-item--done">
            <div class="timeline-marker"></div>
            <div class="timeline-content">
              <h3>Tech Stack Selection</h3>
              <p>Flutter + Flame Engine chosen for game development, Firebase for backend, Keycloak for authorization.</p>
            </div>
          </div>
          <div class="timeline-item timeline-item--active">
            <div class="timeline-marker"></div>
            <div class="timeline-content">
              <h3>Core Development</h3>
              <p>Building game mechanics, integrating Flame engine, and setting up Firebase services.</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Team Section -->
    <section class="detail-section">
      <div class="detail-container">
        <h2>Built by Three People, Real Mentorship in Action</h2>
        <p>
          MindyPlay was developed by a <strong>Guild Master acting as Technical Project Manager alongside 2
          mentees</strong> — a hands-on team that covered game development, backend integration, and project
          management from start to finish.
        </p>
        <div class="roles-grid">
          <div class="role-card">
            <div class="role-icon">🎮</div>
            <h3>Game Development</h3>
            <p>Flutter and Flame Engine — building game mechanics, rendering, and interactive gameplay from scratch.</p>
          </div>
          <div class="role-card">
            <div class="role-icon">🔧</div>
            <h3>Backend Integration</h3>
            <p>Firebase setup for real-time data, cloud functions, and analytics — powering the game's backend services.</p>
          </div>
          <div class="role-card">
            <div class="role-icon">🔒</div>
            <h3>Authorization</h3>
            <p>Keycloak integration for secure user identity management, SSO, and role-based access control.</p>
          </div>
          <div class="role-card">
            <div class="role-icon">📋</div>
            <h3>Technical Project Management</h3>
            <p>Guild Master led the project as TPM — coordinating sprints, unblocking the team, and ensuring delivery.</p>
          </div>
        </div>
        <div class="team-note">
          <strong>Guild Master + 2 Mentees</strong> — after the project, both mentees ultimately decided to join the
          partner company to continue their work on MindyMinds and MindyPlay. A testament to Skill-Wanderer's model:
          real projects create real career opportunities.
        </div>
      </div>
    </section>

    <!-- CTA Section -->
    <section class="cta-section">
      <div class="cta-container">
        <h2>Want to Build Something Like This?</h2>
        <p class="cta-headline">
          Three people. One game. Real career outcomes.
        </p>
        <p class="cta-body">
          MindyPlay was built by a Guild Master and two mentees — covering game development, backend integration,
          authorization, and project management. Both mentees went on to join the partner company full-time. This is
          the kind of project you could be working on at Skill-Wanderer: real products, real responsibility, real
          career impact.
        </p>
        <div class="cta-highlights">
          <div class="cta-highlight">
            <span class="cta-highlight-icon">🚀</span>
            <span>Ship real products, not toy projects</span>
          </div>
          <div class="cta-highlight">
            <span class="cta-highlight-icon">🎓</span>
            <span>Learn from experienced Guild Masters</span>
          </div>
          <div class="cta-highlight">
            <span class="cta-highlight-icon">💼</span>
            <span>Real projects lead to real career opportunities</span>
          </div>
        </div>
        <div class="cta-buttons">
          <NuxtLink to="/work-with-us/become-a-partner" class="btn btn-primary">
            Become a Partner
          </NuxtLink>
          <NuxtLink to="/learning-path" class="btn btn-secondary">
            Start Your Learning Journey
          </NuxtLink>
          <NuxtLink to="/work-with-us/our-projects" class="btn btn-tertiary">
            Explore More Projects
          </NuxtLink>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
// Icons replaced with emojis

useSEO({
  title: 'MindyPlay — Mobile Game Development | Skill-Wanderer',
  description:
    'A mobile game digitalization project built with Flutter, Flame Engine, Firebase, and Keycloak — developed by a Guild Master and 2 mentees who went on to join the partner company.',
  image: '/cropped-skill-wanderer-logo-768x256.webp',
  keywords: ['Flutter game development', 'Flame Engine', 'mobile game project', 'game digitalization', 'startup mobile development', 'Firebase game backend'],
  structuredData: createBreadcrumbSchema([
    { name: 'Home', url: 'https://skill-wanderer.com/' },
    { name: 'Work With Us', url: 'https://skill-wanderer.com/work-with-us' },
    { name: 'Our Projects', url: 'https://skill-wanderer.com/work-with-us/our-projects' },
    { name: 'MindyPlay', url: 'https://skill-wanderer.com/work-with-us/projects/mindyplay' },
  ]),
})
</script>

<style scoped>
/* ── Hero ─────────────────────────────────────────── */
.hero {
  background: radial-gradient(circle at 30% 20%, rgba(255, 107, 53, 0.15) 0%, transparent 50%),
              radial-gradient(circle at 70% 80%, rgba(255, 217, 61, 0.1) 0%, transparent 50%),
              linear-gradient(135deg, var(--dark-bg) 0%, var(--darker-bg) 100%);
  padding: 120px 20px 80px;
  text-align: center;
}

.hero-content {
  max-width: 900px;
  margin: 0 auto;
}

.hero-logo {
  width: 160px;
  height: 160px;
  border-radius: 50%;
  object-fit: cover;
  margin-bottom: 24px;
  border: 3px solid rgba(255, 107, 53, 0.4);
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.4);
  background: #0d0b2e;
}

.back-link {
  display: inline-block;
  color: var(--primary-orange);
  text-decoration: none;
  font-size: 1rem;
  margin-bottom: 30px;
  transition: all 0.3s ease;
}

.back-link:hover {
  color: #FFD93D;
  transform: translateX(-5px);
}

.status-badge {
  margin-bottom: 20px;
}

.status-badge span {
  background: linear-gradient(135deg, var(--primary-orange), var(--deep-orange));
  color: white;
  padding: 10px 25px;
  border-radius: 30px;
  font-weight: 700;
  font-size: 1rem;
  display: inline-block;
}

.hero h1 {
  font-size: clamp(2.5rem, 6vw, 3.5rem);
  font-weight: 800;
  margin-bottom: 10px;
  background: linear-gradient(135deg, var(--primary-orange), #FFD93D);
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  line-height: 1.2;
}

.tagline {
  font-size: clamp(1.2rem, 3vw, 1.5rem);
  color: rgba(255, 255, 255, 0.7);
  margin-bottom: 25px;
}

.hero-meta {
  display: flex;
  gap: 15px;
  justify-content: center;
  flex-wrap: wrap;
}

.meta-tag {
  background: rgba(255, 107, 53, 0.15);
  color: rgba(255, 255, 255, 0.9);
  padding: 10px 20px;
  border-radius: 25px;
  font-size: 0.95rem;
}

.link-tag {
  text-decoration: none;
  transition: all 0.3s ease;
  cursor: pointer;
  color: var(--primary-orange);
  font-weight: 600;
}

.link-tag:hover {
  background: rgba(255, 107, 53, 0.3);
  color: #fff;
}

/* ── Detail Sections ─────────────────────────────── */
.detail-section {
  padding: 80px 20px;
  background: var(--dark-bg);
}

.detail-section.darker {
  background: var(--darker-bg);
}

.detail-container {
  max-width: 1000px;
  margin: 0 auto;
}

.detail-container h2 {
  color: var(--primary-orange);
  font-size: clamp(1.8rem, 4vw, 2.2rem);
  margin-bottom: 25px;
}

.detail-container > p {
  font-size: 1.15rem;
  line-height: 1.9;
  color: rgba(255, 255, 255, 0.88);
}

.detail-container > p strong {
  color: var(--primary-orange);
}

.section-intro {
  font-size: 1.15rem;
  line-height: 1.8;
  color: rgba(255, 255, 255, 0.85);
  margin-bottom: 40px;
}

/* ── Stats Grid ───────────────────────────────────── */
.stats-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));
  gap: 20px;
}

.stat-card {
  background: rgba(255, 107, 53, 0.06);
  border: 1px solid rgba(255, 107, 53, 0.2);
  border-radius: 16px;
  padding: 32px 20px;
  text-align: center;
  transition: all 0.3s ease;
}

.stat-card:hover {
  border-color: rgba(255, 107, 53, 0.45);
  transform: translateY(-4px);
  background: rgba(255, 107, 53, 0.1);
}

.stat-number {
  display: block;
  font-size: 2.5rem;
  font-weight: 800;
  color: var(--primary-orange);
  line-height: 1.2;
  margin-bottom: 8px;
}

.stat-label {
  color: rgba(255, 255, 255, 0.7);
  font-size: 0.9rem;
  font-weight: 600;
}

/* ── Highlight Box ────────────────────────────────── */
.highlight-box {
  display: flex;
  align-items: center;
  gap: 16px;
  background: rgba(255, 107, 53, 0.1);
  border: 1px solid rgba(255, 107, 53, 0.3);
  border-radius: 16px;
  padding: 24px 32px;
  margin-top: 30px;
}

.highlight-number {
  font-size: 2.2rem;
  font-weight: 800;
  color: var(--primary-orange);
  white-space: nowrap;
}

.highlight-label {
  font-size: 1.15rem;
  color: rgba(255, 255, 255, 0.8);
}

/* ── Architecture Grid ────────────────────────────── */
.arch-grid {
  display: grid;
  grid-template-columns: 1fr;
  gap: 16px;
  margin-bottom: 16px;
}

.arch-grid--three {
  grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
  margin-bottom: 0;
}

.arch-card {
  background: rgba(255, 255, 255, 0.04);
  border: 1px solid rgba(255, 107, 53, 0.15);
  border-radius: 16px;
  padding: 24px;
  text-align: center;
  transition: all 0.3s ease;
}

.arch-card:hover {
  border-color: rgba(255, 107, 53, 0.4);
  background: rgba(255, 255, 255, 0.07);
}

.arch-card--primary {
  border-color: rgba(255, 107, 53, 0.35);
  background: rgba(255, 107, 53, 0.08);
}

.arch-card h3 {
  color: white;
  font-size: 1.15rem;
  font-weight: 700;
  margin-bottom: 4px;
}

.arch-label {
  display: inline-block;
  background: rgba(255, 107, 53, 0.12);
  color: var(--primary-orange);
  padding: 3px 12px;
  border-radius: 50px;
  font-size: 0.72rem;
  font-weight: 600;
  letter-spacing: 0.05em;
  text-transform: uppercase;
  margin-bottom: 8px;
}

.arch-card p {
  color: rgba(255, 255, 255, 0.7);
  font-size: 0.9rem;
  line-height: 1.5;
}

/* ── Tech Table ───────────────────────────────────── */
.tech-table {
  display: flex;
  flex-direction: column;
  gap: 2px;
  border-radius: 16px;
  overflow: hidden;
}

.tech-row {
  display: grid;
  grid-template-columns: 140px 180px 1fr;
  gap: 20px;
  padding: 18px 24px;
  background: rgba(255, 255, 255, 0.04);
  align-items: center;
  transition: background 0.2s ease;
}

.tech-row:hover {
  background: rgba(255, 255, 255, 0.07);
}

.tech-layer {
  color: var(--primary-orange);
  font-weight: 700;
  font-size: 0.88rem;
  text-transform: uppercase;
  letter-spacing: 0.05em;
}

.tech-name {
  color: white;
  font-weight: 600;
  font-size: 0.95rem;
}

.tech-why {
  color: rgba(255, 255, 255, 0.68);
  font-size: 0.9rem;
  line-height: 1.5;
}

/* ── Features Grid ────────────────────────────────── */
.features-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 20px;
}

.feature-card {
  background: rgba(255, 255, 255, 0.04);
  border: 1px solid rgba(255, 107, 53, 0.15);
  border-radius: 16px;
  padding: 24px;
  transition: all 0.3s ease;
}

.feature-card:hover {
  transform: translateY(-4px);
  border-color: rgba(255, 107, 53, 0.4);
  background: rgba(255, 255, 255, 0.07);
}

.feature-icon {
  font-size: 2rem;
  margin-bottom: 12px;
}

.feature-card h3 {
  color: white;
  font-size: 1.05rem;
  font-weight: 700;
  margin-bottom: 8px;
}

.feature-card p {
  color: rgba(255, 255, 255, 0.72);
  font-size: 0.92rem;
  line-height: 1.6;
}

/* ── Status Timeline ─────────────────────────────── */
.status-timeline {
  margin-top: 40px;
  display: flex;
  flex-direction: column;
  gap: 0;
  position: relative;
  padding-left: 30px;
}

.status-timeline::before {
  content: '';
  position: absolute;
  left: 11px;
  top: 12px;
  bottom: 12px;
  width: 2px;
  background: rgba(255, 107, 53, 0.25);
}

.timeline-item {
  display: flex;
  align-items: flex-start;
  gap: 20px;
  padding: 16px 0;
  position: relative;
}

.timeline-marker {
  width: 24px;
  height: 24px;
  border-radius: 50%;
  border: 3px solid rgba(255, 107, 53, 0.3);
  background: var(--darker-bg);
  flex-shrink: 0;
  position: relative;
  margin-left: -30px;
  z-index: 1;
}

.timeline-item--done .timeline-marker {
  background: var(--primary-orange);
  border-color: var(--primary-orange);
}

.timeline-item--active .timeline-marker {
  border-color: var(--primary-orange);
  background: var(--darker-bg);
  box-shadow: 0 0 0 4px rgba(255, 107, 53, 0.2);
}

.timeline-content h3 {
  color: white;
  font-size: 1.05rem;
  font-weight: 700;
  margin-bottom: 4px;
}

.timeline-content p {
  color: rgba(255, 255, 255, 0.7);
  font-size: 0.92rem;
  line-height: 1.6;
}

/* ── CTA Section ──────────────────────────────────── */
.cta-section {
  padding: 90px 20px;
  background: var(--dark-bg);
  text-align: center;
}

.cta-container {
  max-width: 760px;
  margin: 0 auto;
}

.cta-section h2 {
  font-size: clamp(1.8rem, 4vw, 2.5rem);
  font-weight: 700;
  color: white;
  margin-bottom: 16px;
}

.cta-headline {
  font-size: 1.3rem;
  font-weight: 700;
  color: var(--primary-orange);
  margin-bottom: 16px;
  line-height: 1.5;
}

.cta-body {
  opacity: 0.85;
  font-size: 1.1rem;
  margin-bottom: 32px;
  line-height: 1.8;
}

.cta-highlights {
  display: flex;
  gap: 24px;
  justify-content: center;
  flex-wrap: wrap;
  margin-bottom: 40px;
}

.cta-highlight {
  display: flex;
  align-items: center;
  gap: 10px;
  background: rgba(255, 107, 53, 0.08);
  border: 1px solid rgba(255, 107, 53, 0.2);
  border-radius: 50px;
  padding: 12px 22px;
  font-size: 0.95rem;
  color: rgba(255, 255, 255, 0.9);
  transition: all 0.3s ease;
}

.cta-highlight:hover {
  border-color: rgba(255, 107, 53, 0.45);
  background: rgba(255, 107, 53, 0.14);
  transform: translateY(-2px);
}

.cta-highlight-icon {
  font-size: 1.2rem;
}

.cta-buttons {
  display: flex;
  gap: 20px;
  justify-content: center;
  flex-wrap: wrap;
}

.btn {
  padding: 15px 35px;
  border-radius: 50px;
  font-weight: bold;
  text-decoration: none;
  transition: all 0.3s ease;
  font-size: 1rem;
  display: inline-block;
}

.btn-primary {
  background: linear-gradient(135deg, var(--primary-orange), var(--deep-orange));
  color: white;
}

.btn-primary:hover {
  background: linear-gradient(135deg, var(--deep-orange), var(--primary-orange));
  transform: translateY(-2px);
  box-shadow: 0 10px 30px rgba(255, 107, 53, 0.35);
}

.btn-secondary {
  background: transparent;
  color: var(--primary-orange);
  border: 2px solid var(--primary-orange);
}

.btn-secondary:hover {
  background: var(--primary-orange);
  color: white;
  transform: translateY(-2px);
}

.btn-tertiary {
  background: transparent;
  color: rgba(255, 255, 255, 0.7);
  border: 1px solid rgba(255, 255, 255, 0.2);
}

.btn-tertiary:hover {
  color: white;
  border-color: rgba(255, 255, 255, 0.5);
  transform: translateY(-2px);
}

/* ── Roles Grid ───────────────────────────────────── */
.roles-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 20px;
  margin-top: 40px;
}

.role-card {
  background: rgba(255, 255, 255, 0.04);
  border: 1px solid rgba(255, 107, 53, 0.15);
  border-radius: 16px;
  padding: 24px;
  transition: all 0.3s ease;
}

.role-card:hover {
  transform: translateY(-4px);
  border-color: rgba(255, 107, 53, 0.4);
  background: rgba(255, 255, 255, 0.07);
}

.role-icon {
  font-size: 2rem;
  margin-bottom: 12px;
}

.role-card h3 {
  color: white;
  font-size: 1.05rem;
  font-weight: 700;
  margin-bottom: 8px;
}

.role-card p {
  color: rgba(255, 255, 255, 0.72);
  font-size: 0.92rem;
  line-height: 1.6;
}

.team-note {
  margin-top: 32px;
  background: rgba(255, 107, 53, 0.1);
  border: 1px solid rgba(255, 107, 53, 0.3);
  border-radius: 16px;
  padding: 24px 32px;
  font-size: 1.05rem;
  line-height: 1.7;
  color: rgba(255, 255, 255, 0.85);
}

.team-note strong {
  color: var(--primary-orange);
}

/* ── Responsive ───────────────────────────────────── */
@media (max-width: 768px) {
  .hero-meta {
    flex-direction: column;
    align-items: center;
  }

  .tech-row {
    grid-template-columns: 1fr;
    gap: 6px;
  }

  .highlight-box {
    flex-direction: column;
    text-align: center;
  }

  .stats-grid {
    grid-template-columns: repeat(2, 1fr);
  }

  .arch-grid--three,
  .features-grid,
  .roles-grid {
    grid-template-columns: 1fr;
  }
}
</style>
