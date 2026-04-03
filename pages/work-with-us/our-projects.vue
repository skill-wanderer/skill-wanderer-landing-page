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

    <!-- Non-Profit Section -->
    <section class="projects-section">
      <div class="content">
        <div class="section-header">
          <div class="section-tag">Non-Profit</div>
          <h2>Giving Back Through Technology</h2>
          <p>We apply our skills where they matter most—supporting missions that serve communities for free.</p>
        </div>

        <div class="projects-grid">
          <NuxtLink to="/work-with-us/projects/wm-smile-generation-uganda" class="project-card project-card--link">
            <div class="project-image-wrapper">
              <img src="/projects/wmsmile/children-learning.jpeg" alt="WM Smile Generation Uganda" class="project-image" />
              <img src="/projects/wmsmile/og-image.jpeg" alt="WM Smile Generation Uganda Logo" class="project-logo-overlay" />
            </div>
            <div class="project-info">
              <h3>WM Smile Generation Uganda</h3>
              <p>
                A website built for WM Smile Generation Uganda—a non-profit dedicated to supporting
                communities through healthcare, education, and sustainable development in Uganda.
              </p>
              <div class="project-tags">
                <span class="tag">Website</span>
                <span class="tag">Non-Profit</span>
                <span class="tag">Uganda</span>
              </div>
              <span class="view-detail">View Project Detail →</span>
            </div>
          </NuxtLink>

          <NuxtLink to="/work-with-us/projects/chanhdao-vn" class="project-card project-card--link">
            <div class="project-image-wrapper">
              <img src="/projects/chanhdao/favicon.svg" alt="ChanhDao.vn" class="project-image project-image--logo" />
            </div>
            <div class="project-info">
              <h3>ChanhDao.vn</h3>
              <p>
                A non-profit, open-source platform digitalizing Buddhism for Vietnamese learners—162 lessons,
                AI-powered Q&A, and structured learning paths, all running on a self-hosted Kubernetes cluster.
              </p>
              <div class="project-tags">
                <span class="tag">AI Platform</span>
                <span class="tag">Buddhism</span>
                <span class="tag">Vietnam</span>
              </div>
              <span class="view-detail">View Project Detail →</span>
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

        <div class="projects-grid">
          <NuxtLink to="/work-with-us/projects/mindyminds" class="project-card project-card--link">
            <div class="project-image-wrapper">
              <img src="/projects/mindyminds/mindyminds-logo.jpg" alt="MindyMinds" class="project-image project-image--contain" />
            </div>
            <div class="project-info">
              <h3>MindyMinds</h3>
              <p>
                A multi-tenant AI platform for start-ups—enabling customizable AI chatbots per client, built with
                Next.js, hosted via Docker Compose on an EU cloud server with a defense-in-depth security strategy.
                MVP developed from start to finish in under 3 months.
              </p>
              <div class="project-tags">
                <span class="tag">AI Platform</span>
                <span class="tag">Multi-Tenant</span>
                <span class="tag">Start-up</span>
              </div>
              <span class="view-detail">View Project Detail →</span>
            </div>
          </NuxtLink>

          <NuxtLink to="/work-with-us/projects/mindyplay" class="project-card project-card--link">
            <div class="project-image-wrapper">
              <img src="/projects/mindyplay/mindyplay-logo.jpg" alt="MindyPlay" class="project-image project-image--contain" />
            </div>
            <div class="project-info">
              <h3>MindyPlay</h3>
              <p>
                A mobile game digitalization project built with Flutter and Flame Engine—turning a client's game
                concept into an interactive mobile experience, powered by Firebase and Keycloak.
              </p>
              <div class="project-tags">
                <span class="tag">Mobile Games</span>
                <span class="tag">Flutter</span>
                <span class="tag">Start-up</span>
              </div>
              <span class="view-detail">View Project Detail →</span>
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

        <div class="projects-grid projects-grid--single">
          <NuxtLink to="/work-with-us/projects/recruitment-validator" class="project-card project-card--link">
            <div class="project-image-placeholder">
              <div class="placeholder-inner">
                <span class="placeholder-icon">📊</span>
                <span class="placeholder-text">Recruitment Validator</span>
              </div>
            </div>
            <div class="project-info">
              <h3>Recruitment Validator</h3>
              <p>
                A recruitment data validation tool built for a Vietnamese EdTech & OPM provider—automating
                mismatch detection across hundreds to thousands of applications, reducing days of manual
                Excel checking to minutes with severity-rated alerts.
              </p>
              <div class="project-tags">
                <span class="tag">FastAPI</span>
                <span class="tag">Python</span>
                <span class="tag">Automation</span>
                <span class="tag">Enterprise</span>
              </div>
              <span class="view-detail">View Project Detail →</span>
            </div>
          </NuxtLink>
        </div>
      </div>
    </section>

    <!-- Skill-Wanderer Platform Section -->
    <section class="projects-section alt-bg">
      <div class="content">
        <div class="section-header">
          <div class="section-tag">Skill-Wanderer Guild</div>
          <h2>What We Are Building</h2>
          <p>
            Skill-Wanderer is not just a product—it is our mission made tangible. Every module below is being
            built in the open, by our guild, for our community.
          </p>
        </div>

        <div class="platform-grid">
          <div class="platform-card">
            <div class="project-image-placeholder platform-placeholder">
              <div class="placeholder-inner">
                <span class="placeholder-icon">🏠</span>
                <span class="placeholder-text">Landing Page</span>
              </div>
            </div>
            <div class="project-info">
              <h3>This Landing Page</h3>
              <p>The public face of the guild—communicating our mission, model, and community to the world.</p>
              <div class="project-tags">
                <span class="tag">Nuxt</span>
                <span class="tag">Live</span>
              </div>
            </div>
          </div>

          <div class="platform-card">
            <div class="project-image-placeholder platform-placeholder">
              <div class="placeholder-inner">
                <span class="placeholder-icon">📚</span>
                <span class="placeholder-text">LMS</span>
              </div>
            </div>
            <div class="project-info">
              <h3>LMS</h3>
              <p>A Learning Management System purpose-built for structured, guild-driven education at scale.</p>
              <div class="project-tags">
                <span class="tag">Education</span>
                <span class="tag">In Progress</span>
              </div>
            </div>
          </div>

          <div class="platform-card">
            <div class="project-image-placeholder platform-placeholder">
              <div class="placeholder-inner">
                <span class="placeholder-icon">✍️</span>
                <span class="placeholder-text">Blog System</span>
              </div>
            </div>
            <div class="project-info">
              <h3>Blog System</h3>
              <p>A publishing system for knowledge sharing—enabling guild members and mentors to document their journeys.</p>
              <div class="project-tags">
                <span class="tag">Content</span>
                <span class="tag">In Progress</span>
              </div>
            </div>
          </div>

          <div class="platform-card">
            <div class="project-image-placeholder platform-placeholder">
              <div class="placeholder-inner">
                <span class="placeholder-icon">🧭</span>
                <span class="placeholder-text">PathFinder AI</span>
              </div>
            </div>
            <div class="project-info">
              <h3>PathFinder AI Fleet</h3>
              <p>A fleet of AI agents that guide guild members through personalised learning paths based on their goals and progress.</p>
              <div class="project-tags">
                <span class="tag">AI</span>
                <span class="tag">In Progress</span>
              </div>
            </div>
          </div>

          <div class="platform-card">
            <div class="project-image-placeholder platform-placeholder">
              <div class="placeholder-inner">
                <span class="placeholder-icon">🛠️</span>
                <span class="placeholder-text">Admin & Teacher Panel</span>
              </div>
            </div>
            <div class="project-info">
              <h3>Admin & Teacher Panel</h3>
              <p>A control centre for administrators and mentors to manage content, guild members, and guild operations.</p>
              <div class="project-tags">
                <span class="tag">Dashboard</span>
                <span class="tag">In Progress</span>
              </div>
            </div>
          </div>

          <div class="platform-card">
            <div class="project-image-placeholder platform-placeholder">
              <div class="placeholder-inner">
                <span class="placeholder-icon">💬</span>
                <span class="placeholder-text">Communication Module</span>
              </div>
            </div>
            <div class="project-info">
              <h3>Communication Module</h3>
              <p>Real-time messaging and notifications connecting guild members, mentors, and the wider Skill-Wanderer community.</p>
              <div class="project-tags">
                <span class="tag">Messaging</span>
                <span class="tag">In Progress</span>
              </div>
            </div>
          </div>

          <div class="platform-card">
            <div class="project-image-placeholder platform-placeholder">
              <div class="placeholder-inner">
                <span class="placeholder-icon">🔐</span>
                <span class="placeholder-text">Authorization Module</span>
              </div>
            </div>
            <div class="project-info">
              <h3>Authorization Module</h3>
              <p>A robust identity and access management layer ensuring secure, role-based access across all guild modules.</p>
              <div class="project-tags">
                <span class="tag">Security</span>
                <span class="tag">In Progress</span>
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

/* ── Project Cards ─────────────────────────────────── */
.projects-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(340px, 1fr));
  gap: 30px;
}

.projects-grid--single {
  grid-template-columns: minmax(340px, 600px);
  justify-content: center;
}

.project-card {
  background: var(--card-bg);
  border: 1px solid rgba(255, 107, 53, 0.15);
  border-radius: 20px;
  overflow: hidden;
  transition: all 0.3s ease;
  display: flex;
  flex-direction: column;
}

.project-card:hover {
  border-color: rgba(255, 107, 53, 0.4);
  transform: translateY(-6px);
  box-shadow: 0 12px 32px rgba(0, 0, 0, 0.25);
  background: var(--card-hover);
}

.project-card--link {
  text-decoration: none;
  color: inherit;
  cursor: pointer;
}

.view-detail {
  display: inline-block;
  color: var(--primary-orange);
  font-size: 0.9rem;
  font-weight: 600;
  margin-top: 12px;
  transition: all 0.3s ease;
}

.project-card--link:hover .view-detail {
  color: #FFD93D;
  transform: translateX(4px);
}

/* ── Project Image ─────────────────────────────────── */
.project-image-wrapper {
  width: 100%;
  height: 180px;
  background: linear-gradient(135deg, rgba(255, 107, 53, 0.1) 0%, rgba(255, 107, 53, 0.03) 100%);
  border-bottom: 1px solid rgba(255, 107, 53, 0.1);
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  overflow: hidden;
  position: relative;
}

.project-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.4s ease;
}

.project-card--link:hover .project-image {
  transform: scale(1.05);
}

.project-image--logo {
  width: 80px;
  height: 80px;
  object-fit: contain;
}

.project-image--contain {
  object-fit: contain;
  background: #0d0b2e;
}

.project-logo-overlay {
  position: absolute;
  bottom: 12px;
  right: 12px;
  width: 44px;
  height: 44px;
  border-radius: 50%;
  object-fit: cover;
  border: 2px solid rgba(255, 107, 53, 0.5);
  background: var(--darker-bg);
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.3);
}

/* ── Image Placeholder ─────────────────────────────── */
.project-image-placeholder {
  width: 100%;
  height: 180px;
  background: linear-gradient(135deg, rgba(255, 107, 53, 0.1) 0%, rgba(255, 107, 53, 0.03) 100%);
  border-bottom: 1px solid rgba(255, 107, 53, 0.1);
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
}

.placeholder-inner {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
}

.placeholder-icon {
  font-size: 3rem;
}

.placeholder-text {
  color: var(--primary-orange);
  opacity: 0.45;
  font-size: 0.82rem;
  font-weight: 600;
  letter-spacing: 0.05em;
}

/* ── Project Info ──────────────────────────────────── */
.project-info {
  padding: 28px;
  flex: 1;
  display: flex;
  flex-direction: column;
}

.project-info h3 {
  font-size: 1.25rem;
  font-weight: 700;
  color: white;
  margin-bottom: 10px;
}

.project-info p {
  opacity: 0.82;
  font-size: 0.95rem;
  line-height: 1.7;
  margin-bottom: 20px;
  flex: 1;
}

.project-tags {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  margin-top: auto;
}

.tag {
  background: rgba(255, 107, 53, 0.1);
  border: 1px solid rgba(255, 107, 53, 0.25);
  color: var(--primary-orange);
  padding: 4px 13px;
  border-radius: 50px;
  font-size: 0.78rem;
  font-weight: 600;
}

/* ── Platform Grid ─────────────────────────────────── */
.platform-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 28px;
}

.platform-card {
  background: var(--card-bg);
  border: 1px solid rgba(255, 107, 53, 0.15);
  border-radius: 20px;
  overflow: hidden;
  transition: all 0.3s ease;
  display: flex;
  flex-direction: column;
}

.platform-card:hover {
  border-color: rgba(255, 107, 53, 0.4);
  transform: translateY(-6px);
  box-shadow: 0 12px 32px rgba(0, 0, 0, 0.25);
  background: var(--card-hover);
}

.platform-placeholder {
  height: 130px;
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

  .projects-grid,
  .projects-grid--single,
  .platform-grid,
  .audience-grid {
    grid-template-columns: 1fr;
  }

  .audience-callout {
    flex-direction: column;
    text-align: center;
    padding: 24px 20px;
  }
}
</style>
