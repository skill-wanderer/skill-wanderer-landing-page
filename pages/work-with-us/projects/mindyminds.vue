<template>
  <div>
    <!-- Hero Section -->
    <section class="hero">
      <div class="hero-content">
        <NuxtLink to="/work-with-us/our-projects" class="back-link">
          &larr; Back to Our Projects
        </NuxtLink>
        <div class="status-badge">
          <span>In Development</span>
        </div>
        <img src="/projects/mindyminds/mindyminds-logo.jpg" alt="MindyMinds Logo" class="hero-logo" />
        <h1>MindyMinds</h1>
        <p class="tagline">AI Platform for Start-ups</p>
        <div class="hero-meta">
          <span class="meta-tag">Multi-Tenant Architecture</span>
          <span class="meta-tag">MVP in &lt; 3 Months</span>
          <a href="https://hellomindy.mindycore.com/" target="_blank" rel="noopener noreferrer" class="meta-tag link-tag">hellomindy.mindycore.com &rarr;</a>
        </div>
      </div>
    </section>

    <!-- Mission Section -->
    <section class="detail-section darker">
      <div class="detail-container">
        <h2>Mission</h2>
        <p>
          MindyMinds is an <strong>AI platform built for start-ups</strong> — enabling businesses to deploy
          customizable AI chatbots tailored to their specific needs. Using a multi-tenant design pattern, each
          client gets a fully personalized AI experience while sharing the same robust frontend and backend
          infrastructure.
        </p>
        <div class="highlight-box">
          <span class="highlight-number">&lt; 3 months</span>
          <span class="highlight-label">from zero to MVP — developed from start to finish</span>
        </div>
      </div>
    </section>

    <!-- Key Stats Section -->
    <section class="detail-section">
      <div class="detail-container">
        <div class="stats-grid">
          <div class="stat-card">
            <span class="stat-number">2</span>
            <span class="stat-label">Environments (Staging & Production)</span>
          </div>
          <div class="stat-card">
            <span class="stat-number">Multi</span>
            <span class="stat-label">Tenant Architecture</span>
          </div>
          <div class="stat-card">
            <span class="stat-number">EU</span>
            <span class="stat-label">Cloud Hosted</span>
          </div>
          <div class="stat-card">
            <span class="stat-number">Defense</span>
            <span class="stat-label">In-Depth Security</span>
          </div>
        </div>
      </div>
    </section>

    <!-- Architecture Section -->
    <section class="detail-section">
      <div class="detail-container">
        <h2>Architecture</h2>
        <p class="section-intro">
          Built with a similar architecture to chanhdao.vn — sharing the same backend patterns — but with a
          Next.js frontend and a multi-tenant design that allows each client to have a fully customized AI chatbot
          while running on a single shared platform.
        </p>

        <div class="arch-grid">
          <div class="arch-card arch-card--primary">
            <h3>MindyMinds</h3>
            <span class="arch-label">Frontend</span>
            <p>Next.js</p>
          </div>
        </div>

        <div class="arch-grid arch-grid--three">
          <div class="arch-card">
            <h3>Backend API</h3>
            <span class="arch-label">Backend</span>
            <p>Shared backend serving all tenants</p>
          </div>
          <div class="arch-card">
            <h3>Multi-Tenant Engine</h3>
            <span class="arch-label">Core</span>
            <p>Tenant isolation, customization & routing</p>
          </div>
          <div class="arch-card">
            <h3>AI Chatbot Fleet</h3>
            <span class="arch-label">AI</span>
            <p>Customizable AI chatbots per tenant</p>
          </div>
        </div>

        <div class="arch-grid arch-grid--two">
          <div class="arch-card">
            <h3>Docker Compose</h3>
            <span class="arch-label">Infrastructure</span>
            <p>Container orchestration on EU cloud</p>
          </div>
          <div class="arch-card">
            <h3>Cloudflare</h3>
            <span class="arch-label">Security</span>
            <p>Protection, CDN & DDoS mitigation</p>
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
            <div class="tech-name">Next.js</div>
            <div class="tech-why">React-based framework — SSR/SSG, optimized for performance and SEO</div>
          </div>
          <div class="tech-row">
            <div class="tech-layer">Backend</div>
            <div class="tech-name">Shared API (same as chanhdao.vn)</div>
            <div class="tech-why">Common backend patterns reused from chanhdao.vn, adapted for multi-tenant workloads</div>
          </div>
          <div class="tech-row">
            <div class="tech-layer">Architecture</div>
            <div class="tech-name">Multi-Tenant Design Pattern</div>
            <div class="tech-why">Single FE and BE serving multiple customized AI chatbots per client</div>
          </div>
          <div class="tech-row">
            <div class="tech-layer">Hosting</div>
            <div class="tech-name">Docker Compose on EU Cloud</div>
            <div class="tech-why">Containerized deployment with staging and production environments</div>
          </div>
          <div class="tech-row">
            <div class="tech-layer">Security</div>
            <div class="tech-name">Cloudflare + Defense in Depth</div>
            <div class="tech-why">Layered security strategy — WAF, DDoS protection, SSL, and access controls</div>
          </div>
          <div class="tech-row">
            <div class="tech-layer">Environments</div>
            <div class="tech-name">Staging & Production</div>
            <div class="tech-why">Two isolated environments for safe testing and reliable releases</div>
          </div>
        </div>
      </div>
    </section>

    <!-- Multi-Tenant Section -->
    <section class="detail-section">
      <div class="detail-container">
        <h2>Multi-Tenant Design</h2>
        <p class="section-intro">
          The tenant design pattern is the backbone of MindyMinds — allowing multiple customized AI chatbots to
          run on the same frontend and backend while each tenant gets a tailored experience.
        </p>
        <div class="features-grid">
          <div class="feature-card">
            <div class="feature-icon">🏢</div>
            <h3>Tenant Isolation</h3>
            <p>Each client operates in their own isolated tenant space with dedicated configurations and data boundaries.</p>
          </div>
          <div class="feature-card">
            <div class="feature-icon">🎨</div>
            <h3>Per-Tenant Customization</h3>
            <p>Each AI chatbot can be customized to fit the client's specific use case, branding, and conversation style.</p>
          </div>
          <div class="feature-card">
            <div class="feature-icon">⚡</div>
            <h3>Shared Infrastructure</h3>
            <p>One frontend, one backend — serving all tenants efficiently without duplicating resources.</p>
          </div>
          <div class="feature-card">
            <div class="feature-icon">📈</div>
            <h3>Scalable by Design</h3>
            <p>Adding new tenants requires configuration, not infrastructure — enabling rapid client onboarding.</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Security Section -->
    <section class="detail-section darker">
      <div class="detail-container">
        <h2>Defense in Depth Security</h2>
        <p class="section-intro">
          MindyMinds implements a layered security strategy — no single point of failure, multiple barriers
          between threats and data.
        </p>
        <div class="infra-list">
          <div class="infra-item">
            <div class="infra-icon">🛡️</div>
            <div class="infra-content">
              <h3>Cloudflare Protection</h3>
              <p>WAF, DDoS mitigation, SSL termination, and bot management as the first line of defense.</p>
            </div>
          </div>
          <div class="infra-item">
            <div class="infra-icon">🔒</div>
            <div class="infra-content">
              <h3>Application-Level Security</h3>
              <p>Authentication, authorization, input validation, and tenant-level access controls.</p>
            </div>
          </div>
          <div class="infra-item">
            <div class="infra-icon">🐳</div>
            <div class="infra-content">
              <h3>Container Isolation</h3>
              <p>Docker Compose with isolated services — each component runs in its own container with minimal privileges.</p>
            </div>
          </div>
          <div class="infra-item">
            <div class="infra-icon">🌍</div>
            <div class="infra-content">
              <h3>EU Cloud Hosting</h3>
              <p>Data hosted on EU cloud servers with staging and production environments fully separated.</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Deployment Section -->
    <section class="detail-section">
      <div class="detail-container">
        <h2>Deployment Pipeline</h2>
        <div class="pipeline">
          <div class="pipeline-step">
            <div class="pipeline-number">1</div>
            <div class="pipeline-content">
              <h3>Development</h3>
              <p>Local development with Docker Compose mirroring production</p>
            </div>
          </div>
          <div class="pipeline-arrow">&darr;</div>
          <div class="pipeline-step">
            <div class="pipeline-number">2</div>
            <div class="pipeline-content">
              <h3>Staging</h3>
              <p>Deploy to staging environment on EU cloud for testing and validation</p>
            </div>
          </div>
          <div class="pipeline-arrow">&darr;</div>
          <div class="pipeline-step">
            <div class="pipeline-number">3</div>
            <div class="pipeline-content">
              <h3>Production</h3>
              <p>Promote to production behind Cloudflare protection — serving live tenants</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Current Status Section -->
    <section class="detail-section darker">
      <div class="detail-container">
        <h2>Current Status</h2>
        <p>
          The MVP was <strong>developed from start to finish in under 3 months</strong>. The platform is currently
          in active development, focusing on deeper customization capabilities per tenant — enabling more granular
          control over AI behavior, UI theming, and conversation flows.
        </p>
        <div class="status-timeline">
          <div class="timeline-item timeline-item--done">
            <div class="timeline-marker"></div>
            <div class="timeline-content">
              <h3>MVP Completed</h3>
              <p>Core platform, multi-tenant engine, and AI chatbot infrastructure built and deployed.</p>
            </div>
          </div>
          <div class="timeline-item timeline-item--done">
            <div class="timeline-marker"></div>
            <div class="timeline-content">
              <h3>Staging & Production Live</h3>
              <p>Both environments running on EU cloud with Cloudflare protection.</p>
            </div>
          </div>
          <div class="timeline-item timeline-item--active">
            <div class="timeline-marker"></div>
            <div class="timeline-content">
              <h3>Enhanced Customization</h3>
              <p>Currently developing more granular per-tenant customization for AI chatbots.</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Team Section -->
    <section class="detail-section">
      <div class="detail-container">
        <h2>Built by Two People, End to End</h2>
        <p>
          MindyMinds was <strong>developed from start to finish by the Guild Master of Skill-Wanderer and a
          mentee</strong> — single-handedly covering every discipline needed to ship a production platform.
        </p>
        <div class="roles-grid">
          <div class="role-card">
            <div class="role-icon">💻</div>
            <h3>Full-Stack Development</h3>
            <p>Next.js frontend and shared backend — built, tested, and deployed by the same two-person team.</p>
          </div>
          <div class="role-card">
            <div class="role-icon">🏗️</div>
            <h3>Solution Architecture</h3>
            <p>Multi-tenant design, defense-in-depth security, and EU cloud infrastructure — all architected in-house.</p>
          </div>
          <div class="role-card">
            <div class="role-icon">⚙️</div>
            <h3>DevOps</h3>
            <p>Docker Compose, staging/production environments, Cloudflare integration, and CI/CD — set up and maintained by the team.</p>
          </div>
          <div class="role-card">
            <div class="role-icon">📋</div>
            <h3>Project Management</h3>
            <p>Managed using Scrum and Scrumban — sprints, backlogs, and continuous delivery with a lean two-person workflow.</p>
          </div>
        </div>
        <div class="team-note">
          <strong>Guild Master + Mentee</strong> — after the project, the mentee decided to join the client
          part-time while still attending university. A living example of Skill-Wanderer's mentorship model:
          real projects create real career opportunities, even before graduation.
        </div>
      </div>
    </section>

    <!-- CTA Section -->
    <section class="cta-section">
      <div class="cta-container">
        <h2>Want to Build Something Like This?</h2>
        <p class="cta-headline">
          Two people. Three months. One production-ready AI platform.
        </p>
        <p class="cta-body">
          MindyMinds was built from zero to MVP by a Guild Master and a mentee — covering full-stack development,
          DevOps, architecture, and project management. This is the kind of project you could be working on at
          Skill-Wanderer: real products, real users, real impact on your career.
        </p>
        <div class="cta-highlights">
          <div class="cta-highlight">
            <span class="cta-highlight-icon">🚀</span>
            <span>Ship real products, not toy projects</span>
          </div>
          <div class="cta-highlight">
            <span class="cta-highlight-icon">🧑&zwj;🏫</span>
            <span>Learn from experienced Guild Masters</span>
          </div>
          <div class="cta-highlight">
            <span class="cta-highlight-icon">🔧</span>
            <span>Own every layer — from code to cloud</span>
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
useSEO({
  title: 'MindyMinds — AI Platform for Start-ups | Skill-Wanderer',
  description:
    'A multi-tenant AI platform enabling start-ups to deploy customized chatbots — built with Next.js, Docker Compose on EU cloud, and a defense-in-depth security strategy.',
  image: '/cropped-skill-wanderer-logo-768x256.webp',
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
}

.arch-grid--two {
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
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
  grid-template-columns: 120px 220px 1fr;
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

/* ── Infrastructure List ──────────────────────────── */
.infra-list {
  display: flex;
  flex-direction: column;
  gap: 16px;
}

.infra-item {
  display: flex;
  align-items: flex-start;
  gap: 20px;
  background: rgba(255, 255, 255, 0.04);
  border: 1px solid rgba(255, 107, 53, 0.12);
  border-radius: 16px;
  padding: 24px;
  transition: all 0.3s ease;
}

.infra-item:hover {
  border-color: rgba(255, 107, 53, 0.35);
  background: rgba(255, 255, 255, 0.06);
}

.infra-icon {
  font-size: 1.8rem;
  flex-shrink: 0;
  margin-top: 2px;
}

.infra-content h3 {
  color: white;
  font-size: 1.1rem;
  font-weight: 700;
  margin-bottom: 6px;
}

.infra-content p {
  color: rgba(255, 255, 255, 0.72);
  font-size: 0.95rem;
  line-height: 1.6;
}

/* ── Pipeline ─────────────────────────────────────── */
.pipeline {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0;
}

.pipeline-step {
  display: flex;
  align-items: center;
  gap: 20px;
  background: rgba(255, 255, 255, 0.04);
  border: 1px solid rgba(255, 107, 53, 0.15);
  border-radius: 16px;
  padding: 24px 32px;
  width: 100%;
  max-width: 600px;
  transition: all 0.3s ease;
}

.pipeline-step:hover {
  border-color: rgba(255, 107, 53, 0.4);
  background: rgba(255, 255, 255, 0.07);
}

.pipeline-number {
  width: 44px;
  height: 44px;
  background: linear-gradient(135deg, var(--primary-orange), var(--deep-orange));
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 800;
  font-size: 1.2rem;
  color: white;
  flex-shrink: 0;
}

.pipeline-content h3 {
  color: white;
  font-size: 1.1rem;
  font-weight: 700;
  margin-bottom: 4px;
}

.pipeline-content p {
  color: rgba(255, 255, 255, 0.7);
  font-size: 0.9rem;
  line-height: 1.5;
}

.pipeline-arrow {
  font-size: 1.5rem;
  color: var(--primary-orange);
  padding: 8px 0;
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
  .arch-grid--two,
  .features-grid,
  .roles-grid {
    grid-template-columns: 1fr;
  }
}
</style>
