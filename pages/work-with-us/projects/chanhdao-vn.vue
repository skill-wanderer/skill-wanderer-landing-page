<template>
  <div>
    <!-- Hero Section -->
    <section class="hero">
      <div class="hero-content">
        <NuxtLink to="/work-with-us/our-projects" class="back-link">
          ← Back to Our Projects
        </NuxtLink>
        <div class="status-badge">
          <span>Active Development</span>
        </div>
        <img src="/projects/chanhdao/favicon.svg" alt="ChanhDao.vn Logo" class="hero-logo" />
        <h1>ChanhDao.vn</h1>
        <p class="tagline">Digitalizing Buddhism for Vietnamese Learners</p>
        <div class="hero-meta">
          <span class="meta-tag">Non-Profit &middot; Open Source</span>
          <span class="meta-tag">License: Apache-2.0</span>
          <a href="https://chanhdao.vn" target="_blank" rel="noopener noreferrer" class="meta-tag link-tag">chanhdao.vn →</a>
        </div>
      </div>
    </section>

    <!-- Mission Section -->
    <section class="detail-section darker">
      <div class="detail-container">
        <h2>Mission</h2>
        <p>
          ChanhDao.vn exists to <strong>digitalize Buddhism</strong> and leverage AI — chatbots and AI-generated
          content — to aid Vietnamese people in learning and practicing Buddhism. All source code and content are
          public. This is a non-profit project with nothing to hide.
        </p>
        <div class="highlight-box">
          <span class="highlight-number">3 days</span>
          <span class="highlight-label">from development to launch</span>
        </div>
      </div>
    </section>

    <!-- Key Stats Section -->
    <section class="detail-section">
      <div class="detail-container">
        <div class="stats-grid">
          <div class="stat-card">
            <span class="stat-number">162</span>
            <span class="stat-label">Structured Lessons</span>
          </div>
          <div class="stat-card">
            <span class="stat-number">3</span>
            <span class="stat-label">Volumes</span>
          </div>
          <div class="stat-card">
            <span class="stat-number">100%</span>
            <span class="stat-label">Free & Open Source</span>
          </div>
          <div class="stat-card">
            <span class="stat-number">~$0</span>
            <span class="stat-label">Running Cost</span>
          </div>
        </div>
      </div>
    </section>

    <!-- Architecture Section -->
    <section class="detail-section">
      <div class="detail-container">
        <h2>Architecture</h2>
        <p class="section-intro">
          A microservice architecture designed for scalability, AI-powered learning, and full transparency.
        </p>

        <div class="arch-grid">
          <div class="arch-card arch-card--primary">
            <h3>chanhdao.vn</h3>
            <span class="arch-label">Frontend</span>
            <p>Nuxt 4 + Vue 3 + TailwindCSS</p>
          </div>
        </div>

        <div class="arch-grid arch-grid--three">
          <div class="arch-card">
            <h3>NestJS API</h3>
            <span class="arch-label">Backend</span>
            <p>REST API, course & user management</p>
          </div>
          <div class="arch-card">
            <h3>Keycloak</h3>
            <span class="arch-label">Auth</span>
            <p>Realm-based SSO shared with skill-wanderer.com</p>
          </div>
          <div class="arch-card">
            <h3>An Lac Vien</h3>
            <span class="arch-label">AI Fleet</span>
            <p>FastAPI chatbot microservice for Buddhist Q&A</p>
          </div>
        </div>

        <div class="arch-grid arch-grid--two">
          <div class="arch-card">
            <h3>PostgreSQL</h3>
            <span class="arch-label">Database</span>
            <p>Primary relational data store</p>
          </div>
          <div class="arch-card">
            <h3>Qdrant</h3>
            <span class="arch-label">Vector DB</span>
            <p>Semantic search and RAG retrieval</p>
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
            <div class="tech-name">Nuxt 4 + Vue 3 + TailwindCSS</div>
            <div class="tech-why">SSG/SSR, SEO-optimized. All content stored in-repo as TypeScript — fully public, fast to serve</div>
          </div>
          <div class="tech-row">
            <div class="tech-layer">Backend</div>
            <div class="tech-name">NestJS</div>
            <div class="tech-why">REST API, course & user management</div>
          </div>
          <div class="tech-row">
            <div class="tech-layer">Auth</div>
            <div class="tech-name">Keycloak (Realm-based)</div>
            <div class="tech-why">Reusable SSO infrastructure shared with skill-wanderer.com</div>
          </div>
          <div class="tech-row">
            <div class="tech-layer">Database</div>
            <div class="tech-name">PostgreSQL</div>
            <div class="tech-why">Primary relational data store</div>
          </div>
          <div class="tech-row">
            <div class="tech-layer">AI Fleet</div>
            <div class="tech-name">FastAPI (An Lac Vien)</div>
            <div class="tech-why">AI chatbot microservice fleet for Buddhist Q&A and learning assistance</div>
          </div>
          <div class="tech-row">
            <div class="tech-layer">AI Vector DB</div>
            <div class="tech-name">Qdrant</div>
            <div class="tech-why">Vector database powering semantic search and RAG retrieval</div>
          </div>
          <div class="tech-row">
            <div class="tech-layer">Content Gen</div>
            <div class="tech-name">Google NotebookLM</div>
            <div class="tech-why">All course content generated using NotebookLM, then structured into lessons</div>
          </div>
        </div>
      </div>
    </section>

    <!-- Microservice Repositories Section -->
    <section class="detail-section">
      <div class="detail-container">
        <h2>Microservice Repositories</h2>
        <div class="repo-grid repo-grid--four">
          <a href="https://github.com/skill-wanderer/chanhdao-fe" target="_blank" rel="noopener noreferrer" class="repo-card">
            <h3>chanhdao-fe</h3>
            <span class="repo-stack">Nuxt 4, Vue 3, TailwindCSS</span>
            <p>Frontend & all public course content</p>
          </a>
          <a href="https://github.com/skill-wanderer/chanhdao-be" target="_blank" rel="noopener noreferrer" class="repo-card">
            <h3>chanhdao-be</h3>
            <span class="repo-stack">NestJS</span>
            <p>Backend API</p>
          </a>
          <a href="https://github.com/skill-wanderer/keycloak-sso" target="_blank" rel="noopener noreferrer" class="repo-card">
            <h3>keycloak-sso</h3>
            <span class="repo-stack">Keycloak</span>
            <p>SSO & authorization (shared with skill-wanderer)</p>
          </a>
          <a href="https://github.com/skill-wanderer/an-lac-vien-ai" target="_blank" rel="noopener noreferrer" class="repo-card">
            <h3>an-lac-vien-ai</h3>
            <span class="repo-stack">FastAPI, Qdrant</span>
            <p>AI chatbot fleet</p>
          </a>
        </div>
      </div>
    </section>

    <!-- Features Section -->
    <section class="detail-section darker">
      <div class="detail-container">
        <h2>Features</h2>
        <div class="features-grid">
          <div class="feature-card">
            <div class="feature-icon">📚</div>
            <h3>162 Structured Lessons</h3>
            <p>
              "Phat Hoc Pho Thong" (General Buddhist Studies) across 3 volumes — based on the
              teachings of Venerable Thich Thien Hoa.
            </p>
          </div>
          <div class="feature-card">
            <div class="feature-icon">🧠</div>
            <h3>Interactive Multi-Learn UI</h3>
            <p>Multiple learning modes with quizzes per lesson for active engagement and retention.</p>
          </div>
          <div class="feature-card">
            <div class="feature-icon">☸️</div>
            <h3>Thien Thu — AI Companion</h3>
            <p>
              An AI learning companion that helps users find lessons, trace reference sources, and connect
              study content — "holding the lamp, not replacing the path."
            </p>
          </div>
          <div class="feature-card">
            <div class="feature-icon">🛤️</div>
            <h3>Phap Lo — Learning Pathways</h3>
            <p>
              Structured learning progressions from Basic to Intermediate to Advanced, so learners can
              follow a systematic path suited to their level.
            </p>
          </div>
          <div class="feature-card">
            <div class="feature-icon">🤖</div>
            <h3>An Lac Vien — AI Fleet</h3>
            <p>
              FastAPI + Qdrant-powered AI chatbot fleet for Buddhist Q&A, semantic search, and
              doctrine retrieval.
            </p>
          </div>
          <div class="feature-card">
            <div class="feature-icon">🇻🇳</div>
            <h3>Full Vietnamese Localization</h3>
            <p>All UI, content, and quizzes in Vietnamese for native accessibility.</p>
          </div>
          <div class="feature-card">
            <div class="feature-icon">📊</div>
            <h3>Progress Tracking</h3>
            <p>
              Users can mark completed lessons and monitor their advancement through each volume
              and learning pathway.
            </p>
          </div>
          <div class="feature-card">
            <div class="feature-icon">🔍</div>
            <h3>SEO & Structured Data</h3>
            <p>Schema.org markup, sitemap, robots.txt, breadcrumb navigation for discoverability.</p>
          </div>
          <div class="feature-card">
            <div class="feature-icon">🔎</div>
            <h3>Content Search</h3>
            <p>Search across all lessons and dharma texts to find relevant teachings quickly.</p>
          </div>
          <div class="feature-card">
            <div class="feature-icon">🔐</div>
            <h3>Keycloak Auth</h3>
            <p>Login for progress tracking, shared SSO with skill-wanderer.</p>
          </div>
          <div class="feature-card">
            <div class="feature-icon">📖</div>
            <h3>100% Open Content</h3>
            <p>All course data stored as TypeScript in the repo — fully transparent, nothing to hide.</p>
          </div>
          <div class="feature-card">
            <div class="feature-icon">📱</div>
            <h3>Multi-Device Responsive</h3>
            <p>
              Compatible with desktop, tablet, and mobile — reaching Vietnamese communities
              wherever they are.
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- Self-Hosted Section -->
    <section class="detail-section">
      <div class="detail-container">
        <h2>Self-Hosted on Home Kubernetes</h2>
        <p>
          The entire platform runs on a <strong>self-hosted Kubernetes cluster at home</strong>. No cloud VMs,
          no managed services — just bare-metal k8s running all workloads: Nuxt frontend, NestJS API, Keycloak,
          PostgreSQL, FastAPI AI fleet, and Qdrant.
        </p>
        <div class="highlight-box" style="margin-top: 30px;">
          <span class="highlight-number">~$0</span>
          <span class="highlight-label">total running cost — only cloud API keys for AI inference are paid</span>
        </div>

        <div class="hosting-grid">
          <div class="hosting-card">
            <h3>Home k8s Cluster</h3>
            <p>Nuxt, NestJS, Keycloak, PostgreSQL, Qdrant</p>
          </div>
          <div class="hosting-card">
            <h3>Cloud API Keys</h3>
            <p>AI inference — the only paid cost</p>
          </div>
          <div class="hosting-card">
            <h3>Domain & DNS</h3>
            <p>chanhdao.vn</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Shared Infrastructure Section -->
    <section class="detail-section darker">
      <div class="detail-container">
        <h2>Shared Infrastructure with Skill-Wanderer</h2>
        <p class="section-intro">
          ChanhDao.vn and skill-wanderer.com share core infrastructure on the same home k8s cluster.
        </p>
        <div class="infra-list">
          <div class="infra-item">
            <div class="infra-icon">🔑</div>
            <div class="infra-content">
              <h3>Keycloak Realm</h3>
              <p>Single Keycloak instance, separate realms per app. One deployment, reusable auth.</p>
            </div>
          </div>
          <div class="infra-item">
            <div class="infra-icon">🤖</div>
            <div class="infra-content">
              <h3>AI Fleet Architecture</h3>
              <p>Common FastAPI microservice patterns for AI capabilities.</p>
            </div>
          </div>
          <div class="infra-item">
            <div class="infra-icon">🚀</div>
            <div class="infra-content">
              <h3>Deployment Pipeline</h3>
              <p>Shared CI/CD and hosting setup.</p>
            </div>
          </div>
          <div class="infra-item">
            <div class="infra-icon">🏠</div>
            <div class="infra-content">
              <h3>Home k8s</h3>
              <p>Both projects run side-by-side on the same cluster, maximizing hardware utilization at zero cloud cost.</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Content Pipeline Section -->
    <section class="detail-section">
      <div class="detail-container">
        <h2>Content Pipeline</h2>
        <div class="pipeline">
          <div class="pipeline-step">
            <div class="pipeline-number">1</div>
            <div class="pipeline-content">
              <h3>NotebookLM (Google)</h3>
              <p>AI-generated lesson content in Vietnamese</p>
            </div>
          </div>
          <div class="pipeline-arrow">↓</div>
          <div class="pipeline-step">
            <div class="pipeline-number">2</div>
            <div class="pipeline-content">
              <h3>Structured TypeScript Data</h3>
              <p>Lesson metadata, full markdown content, quiz questions, multi-learn interactive sections</p>
            </div>
          </div>
          <div class="pipeline-arrow">↓</div>
          <div class="pipeline-step">
            <div class="pipeline-number">3</div>
            <div class="pipeline-content">
              <h3>Nuxt SSG</h3>
              <p>Static site generation deployed to chanhdao.vn</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Course Structure Section -->
    <section class="detail-section darker">
      <div class="detail-container">
        <h2>Course Structure</h2>
        <p class="section-intro">
          Phat Hoc Pho Thong (General Buddhist Studies) — a comprehensive curriculum across 3 volumes,
          based on the teachings of Venerable Thich Thien Hoa. Content spans Basic, Intermediate, and Advanced levels.
        </p>

        <div class="course-volumes">
          <div class="volume-card">
            <h3>Volume 1</h3>
            <span class="volume-meta">51 lessons</span>
            <div class="volume-sections">
              <div class="volume-section">
                <span class="section-name">Section 1: Nhon Thua Phat Giao</span>
                <span class="section-count">10 lessons + supplements</span>
              </div>
              <div class="volume-section">
                <span class="section-name">Section 2: Thien Thua Phat Giao</span>
                <span class="section-count">11 lessons</span>
              </div>
              <div class="volume-section">
                <span class="section-name">Section 3: Thinh Van Thua Phat Giao</span>
                <span class="section-count">14 lessons</span>
              </div>
              <div class="volume-section">
                <span class="section-name">Section 4: Duyen Giac va Bo Tat Thua</span>
                <span class="section-count">12 lessons</span>
              </div>
            </div>
          </div>

          <div class="volume-card">
            <h3>Volume 2</h3>
            <span class="volume-meta">41 lessons</span>
            <div class="volume-sections">
              <div class="volume-section">
                <span class="section-name">Section 5: History, Schools & Cosmology</span>
                <span class="section-count">10 lessons</span>
              </div>
              <div class="volume-section">
                <span class="section-name">Sections 6-7: Surangama Sutra</span>
                <span class="section-count">16 lessons</span>
              </div>
              <div class="volume-section">
                <span class="section-name">Section 8: Sutra of Perfect Enlightenment</span>
                <span class="section-count">12 lessons</span>
              </div>
            </div>
          </div>

          <div class="volume-card">
            <h3>Volume 3</h3>
            <span class="volume-meta">70 lessons</span>
            <div class="volume-sections">
              <div class="volume-section">
                <span class="section-name">Continued foundational Buddhist studies</span>
                <span class="section-count">70 lessons</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- AI Philosophy Section -->
    <section class="detail-section">
      <div class="detail-container">
        <h2>AI Philosophy</h2>
        <p class="section-intro">
          AI on ChanhDao.vn is a supportive tool — not a replacement for practice, teachers, or personal reflection.
        </p>
        <div class="philosophy-grid">
          <div class="philosophy-card">
            <h3>Guidance Without Replacement</h3>
            <p>"Holding the lamp, not replacing the path." AI assists exploration but never substitutes genuine practice.</p>
          </div>
          <div class="philosophy-card">
            <h3>Collaborative Learning</h3>
            <p>Responses encourage self-reflection rather than prescriptive answers — the learner walks the path themselves.</p>
          </div>
          <div class="philosophy-card">
            <h3>Content Transparency</h3>
            <p>
              All AI-generated content undergoes review, but the team openly acknowledges potential errors and
              encourages readers to verify from reliable sources.
            </p>
          </div>
          <div class="philosophy-card">
            <h3>Rapid & Responsive</h3>
            <p>AI enables faster content updates, clearer presentation, and continuous improvement based on user feedback.</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Founding Team Section -->
    <section class="detail-section darker">
      <div class="detail-container">
        <h2>Founding Team</h2>
        <div class="founders-grid">
          <div class="founder-card">
            <img src="/projects/chanhdao/nguyen-hong-quan.jpg" alt="Nguyen Hong Quan" class="founder-photo" />
            <h3>Nguyen Hong Quan</h3>
            <span class="founder-role">Technology Lead</span>
            <p>
              Motivated by personal Buddhist practice to remove barriers to learning. Also the founder of
              Skill-Wanderer — the social enterprise supporting this project.
            </p>
          </div>
          <div class="founder-card">
            <img src="/projects/chanhdao/dong-van-dung.jpg" alt="Dong Van Dung" class="founder-photo" />
            <h3>Dong Van Dung</h3>
            <span class="founder-role">Content Director</span>
            <p>
              Committed to helping others access authentic teachings. Oversees content quality, curation,
              and alignment with traditional Buddhist doctrine.
            </p>
          </div>
        </div>
        <div class="org-note">
          <strong>Operating Organization:</strong> Skill-Wanderer — a social enterprise in the making,
          reinvesting technology partnerships back into free education.
        </div>
      </div>
    </section>

    <!-- CTA Section -->
    <section class="cta-section">
      <div class="cta-container">
        <h2>Explore ChanhDao.vn</h2>
        <p>
          An open-source platform making Buddhist teachings accessible through modern technology.
          Visit the live site or explore the source code.
        </p>
        <div class="cta-buttons">
          <a href="https://chanhdao.vn" target="_blank" rel="noopener noreferrer" class="btn btn-primary">
            Visit chanhdao.vn
          </a>
          <NuxtLink to="/work-with-us/our-projects" class="btn btn-secondary">
            View All Projects
          </NuxtLink>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
useSEO({
  title: 'ChanhDao.vn — Digitalizing Buddhism for Vietnamese Learners | Skill-Wanderer',
  description:
    'A non-profit, open-source platform to digitalize Buddhism and make it accessible to Vietnamese communities worldwide through AI-powered content and interactive learning.',
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

.hero-logo {
  width: 160px;
  height: 160px;
  border-radius: 50%;
  object-fit: contain;
  margin-bottom: 24px;
  border: 3px solid rgba(255, 107, 53, 0.4);
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.4);
  background: var(--darker-bg);
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

/* ── Repo Grid ────────────────────────────────────── */
.repo-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
  gap: 20px;
}

.repo-grid--four {
  grid-template-columns: repeat(4, 1fr);
}

.repo-card {
  background: rgba(255, 255, 255, 0.04);
  border: 1px solid rgba(255, 107, 53, 0.15);
  border-radius: 16px;
  padding: 24px;
  text-decoration: none;
  color: inherit;
  transition: all 0.3s ease;
  display: block;
}

.repo-card:hover {
  border-color: rgba(255, 107, 53, 0.4);
  transform: translateY(-4px);
  background: rgba(255, 255, 255, 0.07);
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.2);
}

.repo-card h3 {
  color: var(--primary-orange);
  font-size: 1.1rem;
  font-weight: 700;
  margin-bottom: 6px;
  font-family: monospace;
}

.repo-stack {
  display: inline-block;
  background: rgba(255, 107, 53, 0.1);
  color: rgba(255, 255, 255, 0.7);
  padding: 3px 10px;
  border-radius: 50px;
  font-size: 0.75rem;
  font-weight: 600;
  margin-bottom: 10px;
}

.repo-card p {
  color: rgba(255, 255, 255, 0.72);
  font-size: 0.92rem;
  line-height: 1.5;
}

/* ── Features Grid ────────────────────────────────── */
.features-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(260px, 1fr));
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

/* ── Hosting Grid ─────────────────────────────────── */
.hosting-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
  gap: 16px;
  margin-top: 30px;
}

.hosting-card {
  background: rgba(255, 255, 255, 0.04);
  border: 1px solid rgba(255, 107, 53, 0.12);
  border-radius: 12px;
  padding: 20px;
  text-align: center;
}

.hosting-card h3 {
  color: white;
  font-size: 1rem;
  font-weight: 700;
  margin-bottom: 6px;
}

.hosting-card p {
  color: rgba(255, 255, 255, 0.65);
  font-size: 0.88rem;
  line-height: 1.5;
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
  border: 1px solid rgba(255, 107, 53, 0.2);
  border-radius: 16px;
  padding: 24px 32px;
  width: 100%;
  max-width: 600px;
  transition: all 0.3s ease;
}

.pipeline-step:hover {
  border-color: rgba(255, 107, 53, 0.45);
  background: rgba(255, 255, 255, 0.07);
}

.pipeline-number {
  width: 44px;
  height: 44px;
  border-radius: 50%;
  background: linear-gradient(135deg, var(--primary-orange), var(--deep-orange));
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 800;
  font-size: 1.2rem;
  flex-shrink: 0;
}

.pipeline-content h3 {
  color: white;
  font-size: 1.05rem;
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

/* ── Course Volumes ───────────────────────────────── */
.course-volumes {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(380px, 1fr));
  gap: 24px;
}

.volume-card {
  background: rgba(255, 255, 255, 0.04);
  border: 1px solid rgba(255, 107, 53, 0.2);
  border-radius: 16px;
  padding: 28px;
}

.volume-card h3 {
  color: var(--primary-orange);
  font-size: 1.3rem;
  font-weight: 700;
  margin-bottom: 6px;
}

.volume-meta {
  display: inline-block;
  color: rgba(255, 255, 255, 0.55);
  font-size: 0.85rem;
  font-weight: 600;
  margin-bottom: 18px;
}

.volume-sections {
  display: flex;
  flex-direction: column;
  gap: 12px;
}

.volume-section {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 12px 16px;
  background: rgba(255, 255, 255, 0.03);
  border-left: 3px solid rgba(255, 107, 53, 0.4);
  border-radius: 0 8px 8px 0;
  gap: 12px;
}

.section-name {
  color: rgba(255, 255, 255, 0.88);
  font-size: 0.92rem;
  line-height: 1.4;
}

.section-count {
  color: var(--primary-orange);
  font-size: 0.82rem;
  font-weight: 600;
  white-space: nowrap;
  flex-shrink: 0;
}

/* ── Philosophy Grid ──────────────────────────────── */
.philosophy-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
  gap: 20px;
}

.philosophy-card {
  background: rgba(255, 255, 255, 0.04);
  border: 1px solid rgba(255, 107, 53, 0.15);
  border-radius: 16px;
  padding: 28px;
  transition: all 0.3s ease;
}

.philosophy-card:hover {
  border-color: rgba(255, 107, 53, 0.4);
  background: rgba(255, 255, 255, 0.07);
  transform: translateY(-4px);
}

.philosophy-card h3 {
  color: white;
  font-size: 1.05rem;
  font-weight: 700;
  margin-bottom: 10px;
}

.philosophy-card p {
  color: rgba(255, 255, 255, 0.72);
  font-size: 0.92rem;
  line-height: 1.7;
}

/* ── Founders Grid ────────────────────────────────── */
.founders-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 24px;
  margin-bottom: 30px;
}

.founder-card {
  background: rgba(255, 255, 255, 0.04);
  border: 1px solid rgba(255, 107, 53, 0.2);
  border-radius: 16px;
  padding: 32px;
  text-align: center;
  transition: all 0.3s ease;
}

.founder-card:hover {
  border-color: rgba(255, 107, 53, 0.4);
  transform: translateY(-4px);
  background: rgba(255, 255, 255, 0.07);
}

.founder-photo {
  width: 96px;
  height: 96px;
  border-radius: 50%;
  object-fit: cover;
  border: 3px solid rgba(255, 107, 53, 0.4);
  margin-bottom: 16px;
  transition: all 0.3s ease;
}

.founder-card:hover .founder-photo {
  border-color: var(--primary-orange);
  box-shadow: 0 4px 20px rgba(255, 107, 53, 0.25);
}

.founder-card h3 {
  color: white;
  font-size: 1.2rem;
  font-weight: 700;
  margin-bottom: 4px;
}

.founder-role {
  display: block;
  color: var(--primary-orange);
  font-size: 0.88rem;
  font-weight: 600;
  margin-bottom: 14px;
}

.founder-card p {
  color: rgba(255, 255, 255, 0.75);
  font-size: 0.95rem;
  line-height: 1.7;
}

.org-note {
  background: rgba(255, 107, 53, 0.06);
  border: 1px solid rgba(255, 107, 53, 0.2);
  border-radius: 12px;
  padding: 20px 24px;
  color: rgba(255, 255, 255, 0.8);
  font-size: 0.95rem;
  line-height: 1.6;
}

.org-note strong {
  color: var(--primary-orange);
}

/* ── CTA Section ──────────────────────────────────── */
.cta-section {
  padding: 90px 20px;
  background: var(--dark-bg);
  text-align: center;
}

.cta-container {
  max-width: 700px;
  margin: 0 auto;
}

.cta-container h2 {
  font-size: clamp(1.8rem, 4vw, 2.2rem);
  color: var(--primary-orange);
  margin-bottom: 20px;
}

.cta-container > p {
  font-size: 1.1rem;
  color: rgba(255, 255, 255, 0.8);
  margin-bottom: 38px;
  line-height: 1.8;
}

.cta-buttons {
  display: flex;
  gap: 20px;
  justify-content: center;
  flex-wrap: wrap;
}

.btn {
  padding: 15px 35px;
  border: none;
  border-radius: 50px;
  font-size: 1rem;
  font-weight: bold;
  text-decoration: none;
  cursor: pointer;
  transition: all 0.3s ease;
  display: inline-block;
}

.btn-primary {
  background: linear-gradient(135deg, var(--primary-orange), var(--deep-orange));
  color: white;
  box-shadow: 0 4px 20px rgba(255, 107, 53, 0.3);
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

/* ── Responsive ───────────────────────────────────── */
@media (max-width: 768px) {
  .hero-meta {
    flex-direction: column;
    align-items: center;
  }

  .highlight-box {
    flex-direction: column;
    text-align: center;
  }

  .arch-grid--three,
  .arch-grid--two {
    grid-template-columns: 1fr;
  }

  .tech-row {
    grid-template-columns: 1fr;
    gap: 6px;
  }

  .tech-why {
    display: none;
  }

  .stats-grid,
  .features-grid,
  .repo-grid,
  .repo-grid--four,
  .hosting-grid,
  .course-volumes,
  .philosophy-grid,
  .founders-grid {
    grid-template-columns: 1fr;
  }

  .infra-item {
    flex-direction: column;
    text-align: center;
    align-items: center;
  }

  .pipeline-step {
    flex-direction: column;
    text-align: center;
  }

  .volume-section {
    flex-direction: column;
    align-items: flex-start;
    gap: 4px;
  }

  .cta-buttons {
    flex-direction: column;
    align-items: center;
  }

  .btn {
    max-width: 300px;
    width: 100%;
    text-align: center;
  }
}
</style>
