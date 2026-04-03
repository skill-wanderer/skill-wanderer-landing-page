<template>
  <div>
    <!-- Hero Section -->
    <section class="hero">
      <div class="hero-content">
        <NuxtLink to="/work-with-us/our-projects" class="back-link">
          &larr; Back to Our Projects
        </NuxtLink>
        <div class="status-badge">
          <span>Completed</span>
        </div>
        <div class="hero-icon">📊</div>
        <h1>Recruitment Validator</h1>
        <p class="tagline">Recruitment Data Validation at Scale</p>
        <div class="hero-meta">
          <span class="meta-tag">FastAPI + Python</span>
          <span class="meta-tag">Vietnamese EdTech & OPM Provider</span>
          <span class="meta-tag">Days &rarr; Minutes</span>
        </div>
      </div>
    </section>

    <!-- Mission Section -->
    <section class="detail-section darker">
      <div class="detail-container">
        <h2>The Problem</h2>
        <p>
          A <strong>large Vietnamese EdTech & Online Program Management (OPM) provider</strong> receives
          hundreds to thousands of recruitment applications each cycle. Each application contains details
          submitted by both the student and the partnering university — and these details must match.
          Previously, this validation was done <strong>manually using pure Excel</strong>, a process that
          was not only time-consuming but next to impossible to complete accurately within the tight
          turnaround of just a few days.
        </p>
        <div class="highlight-box">
          <span class="highlight-number">Days &rarr; Minutes</span>
          <span class="highlight-label">Manual checking reduced from days to minutes with automated mismatch detection</span>
        </div>
      </div>
    </section>

    <!-- Key Stats Section -->
    <section class="detail-section">
      <div class="detail-container">
        <div class="stats-grid">
          <div class="stat-card">
            <span class="stat-number">1000+</span>
            <span class="stat-label">Applications per Cycle</span>
          </div>
          <div class="stat-card">
            <span class="stat-number">3</span>
            <span class="stat-label">Severity Levels (Low / Medium / High)</span>
          </div>
          <div class="stat-card">
            <span class="stat-number">Minutes</span>
            <span class="stat-label">Instead of Days</span>
          </div>
          <div class="stat-card">
            <span class="stat-number">0</span>
            <span class="stat-label">Missed Mismatches</span>
          </div>
        </div>
      </div>
    </section>

    <!-- Solution Section -->
    <section class="detail-section darker">
      <div class="detail-container">
        <h2>The Solution</h2>
        <p>
          The Recruitment Validator is an <strong>automated recruitment data validation tool</strong> that ingests application data
          from both the company and the university, cross-references every field, and flags any discrepancies.
          Each mismatch is clearly marked with <strong>what exactly mismatched</strong> and rated by severity
          — Low, Medium, or High — so the operations team knows exactly what needs attention.
        </p>
        <p class="section-detail">
          High-severity mismatches signal that the company may need to <strong>contact the student and/or the
          university directly</strong> to resolve critical discrepancies before proceeding. Medium-severity
          items require review but may not block the process. Low-severity flags are informational and can
          often be resolved internally.
        </p>
      </div>
    </section>

    <!-- How It Works Section -->
    <section class="detail-section">
      <div class="detail-container">
        <h2>How It Works</h2>
        <div class="pipeline">
          <div class="pipeline-step">
            <div class="pipeline-number">1</div>
            <div class="pipeline-content">
              <h3>Data Ingestion</h3>
              <p>Application data from the company and the university is uploaded into the system</p>
            </div>
          </div>
          <div class="pipeline-arrow">&darr;</div>
          <div class="pipeline-step">
            <div class="pipeline-number">2</div>
            <div class="pipeline-content">
              <h3>Automated Cross-Referencing</h3>
              <p>Every field is compared between the two sources — identifying discrepancies across hundreds to thousands of records</p>
            </div>
          </div>
          <div class="pipeline-arrow">&darr;</div>
          <div class="pipeline-step">
            <div class="pipeline-number">3</div>
            <div class="pipeline-content">
              <h3>Mismatch Detection & Marking</h3>
              <p>Each mismatch is flagged with a clear description of what mismatched and where</p>
            </div>
          </div>
          <div class="pipeline-arrow">&darr;</div>
          <div class="pipeline-step">
            <div class="pipeline-number">4</div>
            <div class="pipeline-content">
              <h3>Severity Rating</h3>
              <p>Every mismatch is rated Low, Medium, or High — guiding the team on what to check, escalate, or resolve</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Severity System Section -->
    <section class="detail-section darker">
      <div class="detail-container">
        <h2>Severity Rating System</h2>
        <p class="section-intro">
          Not all mismatches are equal. The system classifies each discrepancy by severity so the operations team
          can prioritise their response effectively.
        </p>
        <div class="severity-grid">
          <div class="severity-card severity-card--low">
            <div class="severity-header">
              <span class="severity-level">Low</span>
            </div>
            <h3>Informational</h3>
            <p>Minor discrepancies that can typically be resolved internally without external contact. Examples: formatting differences, minor typos.</p>
          </div>
          <div class="severity-card severity-card--medium">
            <div class="severity-header">
              <span class="severity-level">Medium</span>
            </div>
            <h3>Requires Review</h3>
            <p>Notable mismatches that need attention but may not block the recruitment process. The team should verify and correct as needed.</p>
          </div>
          <div class="severity-card severity-card--high">
            <div class="severity-header">
              <span class="severity-level">High</span>
            </div>
            <h3>Escalation Required</h3>
            <p>Critical discrepancies where the company may need to contact the student and/or the university directly to resolve before proceeding.</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Architecture Section -->
    <section class="detail-section">
      <div class="detail-container">
        <h2>MVC Architecture</h2>
        <p class="section-intro">
          Built with a <strong>Model-View-Controller (MVC)</strong> architecture — chosen deliberately for speed
          and simplicity. The clean separation of concerns made it fast to develop, easy to reason about, and
          straightforward to deliver results without over-engineering.
        </p>
        <div class="arch-grid arch-grid--three">
          <div class="arch-card">
            <h3>Model</h3>
            <span class="arch-label">Data Layer</span>
            <p>Pydantic models for data validation and structure — ensuring type-safe, validated data flows through the entire pipeline</p>
          </div>
          <div class="arch-card">
            <h3>View</h3>
            <span class="arch-label">Presentation</span>
            <p>Jinja2 templates rendering results directly in the browser — the operations team gets instant, readable output without a separate frontend</p>
          </div>
          <div class="arch-card">
            <h3>Controller</h3>
            <span class="arch-label">Logic</span>
            <p>FastAPI route handlers orchestrating file uploads, cross-referencing logic, mismatch detection, and severity rating</p>
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
            <div class="tech-layer">Framework</div>
            <div class="tech-name">FastAPI</div>
            <div class="tech-why">High-performance Python web framework — async-first, ideal for data processing workloads</div>
          </div>
          <div class="tech-row">
            <div class="tech-layer">Server</div>
            <div class="tech-name">Uvicorn</div>
            <div class="tech-why">Lightning-fast ASGI server running the FastAPI application in production</div>
          </div>
          <div class="tech-row">
            <div class="tech-layer">Validation</div>
            <div class="tech-name">Pydantic</div>
            <div class="tech-why">Data validation and settings management — enforcing type safety and structure across all data models</div>
          </div>
          <div class="tech-row">
            <div class="tech-layer">Views</div>
            <div class="tech-name">Jinja2</div>
            <div class="tech-why">Template engine rendering validation results directly in the browser — no separate frontend needed</div>
          </div>
          <div class="tech-row">
            <div class="tech-layer">Uploads</div>
            <div class="tech-name">python-multipart</div>
            <div class="tech-why">Form data parsing for handling Excel file uploads from the operations team</div>
          </div>
          <div class="tech-row">
            <div class="tech-layer">Data</div>
            <div class="tech-name">Pandas</div>
            <div class="tech-why">Powerful data manipulation and analysis — cross-referencing thousands of records efficiently</div>
          </div>
          <div class="tech-row">
            <div class="tech-layer">Excel</div>
            <div class="tech-name">openpyxl</div>
            <div class="tech-why">Reading and writing Excel files — integrating seamlessly into the existing spreadsheet-based workflow</div>
          </div>
          <div class="tech-row">
            <div class="tech-layer">Deployment</div>
            <div class="tech-name">Server-Deployed</div>
            <div class="tech-why">Deployed to a dedicated server for reliable, on-demand processing of large application batches</div>
          </div>
        </div>
      </div>
    </section>

    <!-- Impact Section -->
    <section class="detail-section darker">
      <div class="detail-container">
        <h2>Impact</h2>
        <div class="features-grid">
          <div class="feature-card">
            <div class="feature-icon">⚡</div>
            <h3>Speed</h3>
            <p>What took days of manual Excel checking is now completed in minutes — freeing the operations team to focus on resolution instead of detection.</p>
          </div>
          <div class="feature-card">
            <div class="feature-icon">🎯</div>
            <h3>Accuracy</h3>
            <p>Automated cross-referencing eliminates human error — no more missed mismatches in thousands of records.</p>
          </div>
          <div class="feature-card">
            <div class="feature-icon">📋</div>
            <h3>Clarity</h3>
            <p>Every mismatch is documented with what went wrong and how severe it is — no guesswork for the team.</p>
          </div>
          <div class="feature-card">
            <div class="feature-icon">📈</div>
            <h3>Scalability</h3>
            <p>Handles hundreds to thousands of applications per cycle without performance degradation — ready for growth.</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Client Context Section -->
    <section class="detail-section">
      <div class="detail-container">
        <h2>Client Context</h2>
        <p>
          The client is a <strong>large Vietnamese EdTech & Online Program Management (OPM) provider</strong>
          that works with multiple universities and handles large volumes of recruitment applications.
          Due to confidentiality, further details about the company cannot be disclosed.
        </p>
        <div class="context-note">
          This project demonstrates how targeted automation can transform a manual, error-prone process
          into a fast, reliable operation — even in complex, multi-stakeholder environments like
          education recruitment.
        </div>
      </div>
    </section>

    <!-- CTA Section -->
    <section class="cta-section">
      <div class="cta-container">
        <h2>Have a Data Problem That Needs Solving?</h2>
        <p class="cta-headline">
          From days of manual work to minutes of automated validation.
        </p>
        <p class="cta-body">
          This tool was built to solve a real operational bottleneck — turning an impossible manual process into
          a reliable, automated workflow. If your organisation faces similar challenges with data validation,
          reconciliation, or process automation, the guild can help.
        </p>
        <div class="cta-highlights">
          <div class="cta-highlight">
            <span class="cta-highlight-icon">🔍</span>
            <span>Automated mismatch detection</span>
          </div>
          <div class="cta-highlight">
            <span class="cta-highlight-icon">⚡</span>
            <span>Days to minutes</span>
          </div>
          <div class="cta-highlight">
            <span class="cta-highlight-icon">📊</span>
            <span>Severity-rated reporting</span>
          </div>
        </div>
        <div class="cta-buttons">
          <NuxtLink to="/work-with-us/become-a-partner" class="btn btn-primary">
            Become a Partner
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
  title: 'Recruitment Validator — Data Validation Tool | Skill-Wanderer',
  description:
    'An automated recruitment data validation tool built with FastAPI and Python for a Vietnamese EdTech & OPM provider — reducing days of manual Excel checking to minutes with severity-rated mismatch detection.',
  image: '/cropped-skill-wanderer-logo-768x256.webp',
  keywords: ['data validation tool', 'FastAPI Python', 'recruitment automation', 'EdTech data processing', 'Excel validation automation', 'enterprise data tool'],
  structuredData: createBreadcrumbSchema([
    { name: 'Home', url: 'https://skill-wanderer.com/' },
    { name: 'Work With Us', url: 'https://skill-wanderer.com/work-with-us' },
    { name: 'Our Projects', url: 'https://skill-wanderer.com/work-with-us/our-projects' },
    { name: 'Recruitment Validator', url: 'https://skill-wanderer.com/work-with-us/projects/recruitment-validator' },
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

.hero-icon {
  font-size: 5rem;
  margin-bottom: 24px;
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
  background: linear-gradient(135deg, #4CAF50, #388E3C);
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

.section-detail {
  margin-top: 20px;
  font-size: 1.15rem;
  line-height: 1.9;
  color: rgba(255, 255, 255, 0.88);
}

.section-detail strong {
  color: var(--primary-orange);
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

/* ── Severity Grid ───────────────────────────────── */
.severity-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
  gap: 20px;
}

.severity-card {
  border-radius: 16px;
  padding: 28px;
  transition: all 0.3s ease;
}

.severity-card:hover {
  transform: translateY(-4px);
}

.severity-card--low {
  background: rgba(76, 175, 80, 0.08);
  border: 1px solid rgba(76, 175, 80, 0.25);
}

.severity-card--low:hover {
  border-color: rgba(76, 175, 80, 0.5);
  background: rgba(76, 175, 80, 0.12);
}

.severity-card--medium {
  background: rgba(255, 193, 7, 0.08);
  border: 1px solid rgba(255, 193, 7, 0.25);
}

.severity-card--medium:hover {
  border-color: rgba(255, 193, 7, 0.5);
  background: rgba(255, 193, 7, 0.12);
}

.severity-card--high {
  background: rgba(244, 67, 54, 0.08);
  border: 1px solid rgba(244, 67, 54, 0.25);
}

.severity-card--high:hover {
  border-color: rgba(244, 67, 54, 0.5);
  background: rgba(244, 67, 54, 0.12);
}

.severity-header {
  margin-bottom: 12px;
}

.severity-level {
  padding: 5px 16px;
  border-radius: 50px;
  font-size: 0.82rem;
  font-weight: 700;
  letter-spacing: 0.05em;
  text-transform: uppercase;
}

.severity-card--low .severity-level {
  background: rgba(76, 175, 80, 0.2);
  color: #4CAF50;
}

.severity-card--medium .severity-level {
  background: rgba(255, 193, 7, 0.2);
  color: #FFC107;
}

.severity-card--high .severity-level {
  background: rgba(244, 67, 54, 0.2);
  color: #F44336;
}

.severity-card h3 {
  color: white;
  font-size: 1.1rem;
  font-weight: 700;
  margin-bottom: 8px;
}

.severity-card p {
  color: rgba(255, 255, 255, 0.72);
  font-size: 0.92rem;
  line-height: 1.7;
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

/* ── Context Note ────────────────────────────────── */
.context-note {
  margin-top: 24px;
  background: rgba(255, 107, 53, 0.1);
  border: 1px solid rgba(255, 107, 53, 0.3);
  border-radius: 16px;
  padding: 24px 32px;
  font-size: 1.05rem;
  line-height: 1.7;
  color: rgba(255, 255, 255, 0.85);
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
  .severity-grid {
    grid-template-columns: 1fr;
  }
}
</style>
