<template>
  <div>
    <!-- Hero Section -->
    <section class="hero">
      <div class="hero-content">
        <NuxtLink to="/work-with-us/our-projects" class="back-link">
          ← Back to Our Projects
        </NuxtLink>
        <div class="status-badge">
          <span>Completed</span>
        </div>
        <img src="/projects/wmsmile/og-image.jpeg" alt="WM Smile Generation Uganda Logo" class="hero-logo" />
        <h1>WM Smile Generation Uganda</h1>
        <p class="tagline">Official Website</p>
        <div class="hero-meta">
          <span class="meta-tag">Role: Website Administrator & Lead Developer</span>
          <span class="meta-tag">Non-Profit Organization Website</span>
          <a href="https://wmsmilegeneration.org" target="_blank" rel="noopener noreferrer" class="meta-tag link-tag">wmsmilegeneration.org →</a>
        </div>
      </div>
    </section>

    <!-- Overview Section -->
    <section class="detail-section darker">
      <div class="detail-container">
        <h2>Overview</h2>
        <p>
          WM Smile Generation Uganda Limited is a non-profit organization dedicated to transforming the lives
          of children and youth across Uganda through quality education, environmental conservation, and refugee
          child protection. I led the full design and development of their official web presence — turning their
          mission into a digital platform that communicates impact, attracts donors, and connects the organization
          with global partners.
        </p>
      </div>
    </section>

    <!-- The Challenge Section -->
    <section class="detail-section">
      <div class="detail-container">
        <h2>The Challenge</h2>
        <p>
          The organization had a powerful story but no digital home. Joseph Bumpenje, a Ugandan educator who grew
          up in extreme hardship, founded WM Smile Generation to ensure no child faces the same barriers he did.
          The team — spread across Uganda, South Africa, Italy, Nigeria, and Vietnam — needed a professional,
          trustworthy online presence that could serve multiple goals at once: tell the founder's story, showcase
          the mission's three core pillars, enable donations, and attract partnership opportunities from an
          international audience.
        </p>
      </div>
    </section>

    <!-- Timeline Section -->
    <section class="detail-section darker">
      <div class="detail-container">
        <h2>Timeline</h2>
        <div class="highlight-box">
          <span class="highlight-number">3 days</span>
          <span class="highlight-label">from kickoff to launch</span>
        </div>
        <p>
          The organization needed a professional web presence quickly to support ongoing partnership conversations
          and fundraising efforts. By leveraging Astro's streamlined development workflow and keeping the scope
          focused on what mattered most — clear storytelling, strong calls-to-action, and a trustworthy design —
          I was able to go from first commit to live site in a single long weekend.
        </p>
      </div>
    </section>

    <!-- What I Built Section -->
    <section class="detail-section">
      <div class="detail-container">
        <h2>What I Built</h2>
        <p class="section-intro">
          A clean, purpose-driven website that puts the mission front and center while making it easy for visitors
          to take action.
        </p>

        <div class="features-grid">
          <div class="feature-card">
            <div class="feature-icon">🏠</div>
            <h3>Landing Page</h3>
            <p>
              Clear value proposition, mission pillars (Education, Nature Awareness, Refugee Support), and prominent
              calls-to-action for donations and partnerships.
            </p>
          </div>

          <div class="feature-card">
            <div class="feature-icon">📖</div>
            <h3>About Page</h3>
            <p>
              The founder's personal story, organizational vision and mission, guiding principles, and a full team
              section with bios and photos for all seven team members.
            </p>
          </div>

          <div class="feature-card">
            <div class="feature-icon">🎯</div>
            <h3>Our Mission Page</h3>
            <p>
              Deeper context on each of the three focus areas: education, nature awareness, and refugee support.
            </p>
          </div>

          <div class="feature-card">
            <div class="feature-icon">🤝</div>
            <h3>Partnership Page</h3>
            <p>
              Designed to attract and onboard organizational partners with clear pathways to collaboration.
            </p>
          </div>

          <div class="feature-card">
            <div class="feature-icon">🏅</div>
            <h3>Our Partners Page</h3>
            <p>
              Showcasing existing partnerships to build credibility and trust with potential supporters.
            </p>
          </div>

          <div class="feature-card">
            <div class="feature-icon">💛</div>
            <h3>Donation Page</h3>
            <p>
              A clear, accessible path for supporters to contribute directly to the mission.
            </p>
          </div>

          <div class="feature-card">
            <div class="feature-icon">✉️</div>
            <h3>Contact Page</h3>
            <p>
              For general inquiries and engagement from around the world.
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- Design Priorities Section -->
    <section class="detail-section darker">
      <div class="detail-container">
        <h2>Design Priorities</h2>
        <div class="priorities-list">
          <div class="priority-item">
            <div class="priority-icon">🎨</div>
            <div class="priority-content">
              <h3>Professional Visual Identity</h3>
              <p>Appropriate for an NGO seeking international donors and partners.</p>
            </div>
          </div>
          <div class="priority-item">
            <div class="priority-icon">📱</div>
            <div class="priority-content">
              <h3>Mobile-Responsive Layout</h3>
              <p>Accommodating visitors from regions with mobile-first internet usage.</p>
            </div>
          </div>
          <div class="priority-item">
            <div class="priority-icon">📐</div>
            <div class="priority-content">
              <h3>Clear Information Hierarchy</h3>
              <p>Visitors can understand who the organization is, what they do, and how to help within seconds.</p>
            </div>
          </div>
          <div class="priority-item">
            <div class="priority-icon">❤️</div>
            <div class="priority-content">
              <h3>Human-Centered Storytelling</h3>
              <p>Warm imagery and storytelling that reflects the reality on the ground.</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Tech Stack Section -->
    <section class="detail-section">
      <div class="detail-container">
        <h2>Tech Stack & Hosting</h2>
        <div class="tech-grid">
          <div class="tech-card">
            <h3>Astro</h3>
            <span class="tech-label">Framework</span>
            <p>
              Chosen for its fast static site generation, minimal JavaScript overhead, and excellent performance
              on low-bandwidth connections — which matters for an audience that includes visitors from East Africa.
            </p>
          </div>
          <div class="tech-card">
            <h3>Vercel</h3>
            <span class="tech-label">Hosting (Free Tier)</span>
            <p>
              Keeping operational costs at zero for a non-profit that needs every dollar directed toward its mission.
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- My Role Section -->
    <section class="detail-section darker">
      <div class="detail-container">
        <h2>My Role</h2>
        <p class="section-intro">
          As Website Administrator, I owned the project end-to-end:
        </p>
        <div class="role-list">
          <div class="role-item">Gathered requirements from the founder and Director of Operations.</div>
          <div class="role-item">Designed the site architecture and page structure.</div>
          <div class="role-item">Developed and deployed the full website.</div>
          <div class="role-item">Coordinated with the content team (Kayla Pillay, Davide Celentano) to integrate copy and media.</div>
          <div class="role-item">Ongoing maintenance and updates as the organization grows.</div>
        </div>
      </div>
    </section>

    <!-- Project Status Section -->
    <section class="detail-section">
      <div class="detail-container">
        <h2>Project Status</h2>
        <div class="status-box">
          <span class="status-indicator">Completed</span>
          <p>
            The website is live and stable. There is no active development planned at this time. The site was
            built to be low-maintenance by design — static generation means no server-side dependencies to manage,
            and free hosting on Vercel eliminates recurring infrastructure costs. If the organization's needs grow,
            the Astro architecture makes it straightforward to extend.
          </p>
        </div>
      </div>
    </section>

    <!-- Why This Project Matters Section -->
    <section class="detail-section darker">
      <div class="detail-container">
        <h2>Why This Project Matters to Me</h2>
        <blockquote class="featured-quote">
          This is not just a portfolio piece — it's personal. I believe deeply that technology should serve people
          who need it most, not just those who can pay for it. WM Smile Generation's mission — giving vulnerable
          children access to education and a healthier environment — aligns directly with why I founded
          Skill-Wanderer. Working alongside this international team of volunteers reinforced something I carry
          into everything I build: the best technology is the kind that amplifies human compassion.
        </blockquote>
      </div>
    </section>

    <!-- Team Section -->
    <section class="detail-section">
      <div class="detail-container">
        <h2>Team</h2>
        <div class="team-grid">
          <div class="team-card">
            <div class="team-role-icon">👤</div>
            <h3>Joseph Bumpenje</h3>
            <span class="team-role">CEO & Founder</span>
            <span class="team-location">Kampala, Uganda</span>
          </div>
          <div class="team-card">
            <div class="team-role-icon">👤</div>
            <h3>Ornella Gigante</h3>
            <span class="team-role">Director of Operations / Founder of MindyCore</span>
          </div>
          <div class="team-card">
            <div class="team-role-icon">👤</div>
            <h3>Quan Nguyen</h3>
            <span class="team-role">Website Administrator / Founder of Skill-Wanderer</span>
          </div>
          <div class="team-card">
            <div class="team-role-icon">👤</div>
            <h3>Kayla Pillay</h3>
            <span class="team-role">Content Specialist</span>
            <span class="team-location">South Africa</span>
          </div>
          <div class="team-card">
            <div class="team-role-icon">👤</div>
            <h3>Precious Pabalelo Matlala</h3>
            <span class="team-role">Donations & Fundraising Lead</span>
            <span class="team-location">South Africa</span>
          </div>
          <div class="team-card">
            <div class="team-role-icon">👤</div>
            <h3>Muhammad Hanif Danladi</h3>
            <span class="team-role">Coach & Content Creator</span>
            <span class="team-location">Nigeria</span>
          </div>
          <div class="team-card">
            <div class="team-role-icon">👤</div>
            <h3>Davide Celentano</h3>
            <span class="team-role">Agro-Environmental Content Specialist</span>
            <span class="team-location">Italy</span>
          </div>
        </div>
      </div>
    </section>

    <!-- CTA Section -->
    <section class="cta-section">
      <div class="cta-container">
        <h2>Have a Mission That Needs a Digital Home?</h2>
        <p>
          We build technology for organizations that make the world better. If you have a non-profit,
          community project, or social enterprise that needs a web presence, let's talk.
        </p>
        <div class="cta-buttons">
          <NuxtLink to="/work-with-us/become-a-partner" class="btn btn-primary">
            Become a Partner
          </NuxtLink>
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
  title: 'WM Smile Generation Uganda — Project Detail | Skill-Wanderer',
  description:
    'How Skill-Wanderer designed and built the official website for WM Smile Generation Uganda — a non-profit transforming lives through education, environmental conservation, and refugee child protection.',
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
  background: linear-gradient(135deg, #28a745, #218838);
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
  object-fit: cover;
  margin-bottom: 24px;
  border: 3px solid rgba(255, 107, 53, 0.4);
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.4);
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

.section-intro {
  font-size: 1.15rem;
  line-height: 1.8;
  color: rgba(255, 255, 255, 0.85);
  margin-bottom: 40px;
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
  margin-bottom: 30px;
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

/* ── Features Grid ────────────────────────────────── */
.features-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  gap: 24px;
}

.feature-card {
  background: rgba(255, 255, 255, 0.04);
  border: 1px solid rgba(255, 107, 53, 0.15);
  border-radius: 16px;
  padding: 28px;
  transition: all 0.3s ease;
}

.feature-card:hover {
  transform: translateY(-4px);
  border-color: rgba(255, 107, 53, 0.4);
  background: rgba(255, 255, 255, 0.07);
}

.feature-icon {
  font-size: 2rem;
  margin-bottom: 14px;
}

.feature-card h3 {
  color: white;
  font-size: 1.15rem;
  font-weight: 700;
  margin-bottom: 10px;
}

.feature-card p {
  color: rgba(255, 255, 255, 0.75);
  font-size: 0.95rem;
  line-height: 1.7;
}

/* ── Priorities List ──────────────────────────────── */
.priorities-list {
  display: flex;
  flex-direction: column;
  gap: 20px;
}

.priority-item {
  display: flex;
  align-items: flex-start;
  gap: 20px;
  background: rgba(255, 255, 255, 0.04);
  border: 1px solid rgba(255, 107, 53, 0.12);
  border-radius: 16px;
  padding: 24px;
  transition: all 0.3s ease;
}

.priority-item:hover {
  border-color: rgba(255, 107, 53, 0.35);
  background: rgba(255, 255, 255, 0.06);
}

.priority-icon {
  font-size: 1.8rem;
  flex-shrink: 0;
  margin-top: 2px;
}

.priority-content h3 {
  color: white;
  font-size: 1.1rem;
  font-weight: 700;
  margin-bottom: 6px;
}

.priority-content p {
  color: rgba(255, 255, 255, 0.75);
  font-size: 0.95rem;
  line-height: 1.6;
}

/* ── Tech Grid ────────────────────────────────────── */
.tech-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 24px;
}

.tech-card {
  background: rgba(255, 255, 255, 0.04);
  border: 1px solid rgba(255, 107, 53, 0.15);
  border-radius: 16px;
  padding: 32px;
  transition: all 0.3s ease;
}

.tech-card:hover {
  border-color: rgba(255, 107, 53, 0.4);
  background: rgba(255, 255, 255, 0.07);
}

.tech-card h3 {
  color: white;
  font-size: 1.4rem;
  font-weight: 700;
  margin-bottom: 6px;
}

.tech-label {
  display: inline-block;
  background: rgba(255, 107, 53, 0.12);
  color: var(--primary-orange);
  padding: 4px 14px;
  border-radius: 50px;
  font-size: 0.78rem;
  font-weight: 600;
  margin-bottom: 14px;
}

.tech-card p {
  color: rgba(255, 255, 255, 0.78);
  font-size: 0.98rem;
  line-height: 1.7;
}

/* ── Role List ────────────────────────────────────── */
.role-list {
  display: flex;
  flex-direction: column;
  gap: 12px;
}

.role-item {
  display: flex;
  align-items: center;
  gap: 14px;
  padding: 16px 20px;
  background: rgba(255, 255, 255, 0.04);
  border-left: 3px solid var(--primary-orange);
  border-radius: 0 12px 12px 0;
  color: rgba(255, 255, 255, 0.88);
  font-size: 1.02rem;
  line-height: 1.6;
}

/* ── Status Box ───────────────────────────────────── */
.status-box {
  background: rgba(40, 167, 69, 0.08);
  border: 1px solid rgba(40, 167, 69, 0.3);
  border-radius: 16px;
  padding: 32px;
}

.status-indicator {
  display: inline-block;
  background: linear-gradient(135deg, #28a745, #218838);
  color: white;
  padding: 6px 20px;
  border-radius: 50px;
  font-weight: 700;
  font-size: 0.9rem;
  margin-bottom: 16px;
}

.status-box p {
  color: rgba(255, 255, 255, 0.85);
  font-size: 1.05rem;
  line-height: 1.8;
}

/* ── Featured Quote ───────────────────────────────── */
.featured-quote {
  background: linear-gradient(135deg, rgba(255, 107, 53, 0.1), rgba(255, 217, 61, 0.05));
  border-left: 4px solid var(--primary-orange);
  padding: 35px;
  margin: 0;
  border-radius: 0 20px 20px 0;
  font-style: italic;
  font-size: 1.2rem;
  line-height: 1.9;
  color: rgba(255, 255, 255, 0.95);
}

/* ── Team Grid ────────────────────────────────────── */
.team-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(260px, 1fr));
  gap: 20px;
}

.team-card {
  background: rgba(255, 255, 255, 0.04);
  border: 1px solid rgba(255, 107, 53, 0.15);
  border-radius: 16px;
  padding: 24px;
  text-align: center;
  transition: all 0.3s ease;
}

.team-card:hover {
  border-color: rgba(255, 107, 53, 0.4);
  transform: translateY(-4px);
  background: rgba(255, 255, 255, 0.07);
}

.team-role-icon {
  font-size: 2rem;
  margin-bottom: 12px;
}

.team-card h3 {
  color: white;
  font-size: 1.1rem;
  font-weight: 700;
  margin-bottom: 6px;
}

.team-role {
  display: block;
  color: var(--primary-orange);
  font-size: 0.88rem;
  font-weight: 600;
  margin-bottom: 4px;
}

.team-location {
  display: block;
  color: rgba(255, 255, 255, 0.5);
  font-size: 0.82rem;
}

/* ── CTA Section ──────────────────────────────────── */
.cta-section {
  padding: 90px 20px;
  background: var(--darker-bg);
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

  .features-grid,
  .tech-grid,
  .team-grid {
    grid-template-columns: 1fr;
  }

  .priority-item {
    flex-direction: column;
    text-align: center;
    align-items: center;
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
