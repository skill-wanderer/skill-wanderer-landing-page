<template>
  <div>
    <!-- Hero Section -->
    <section class="hero">
      <div class="hero-content">
        <NuxtLink to="/work-with-us/our-projects" class="back-link">
          ← Back to Our Projects
        </NuxtLink>
        <div class="status-badge">
          <span>Live</span>
        </div>
        <img src="/projects/meekmethod/hero.jpg" alt="The Meek Method" class="hero-logo" />
        <h1>The Meek Method</h1>
        <p class="tagline">Decision Coaching Practice, Aimee Meek</p>
        <div class="hero-meta">
          <span class="meta-tag">Role: Designer, Developer &amp; Positioning Adviser</span>
          <span class="meta-tag">Coaching Practice &amp; Newsletter</span>
          <a href="https://themeekmethodcoaching.com" target="_blank" rel="noopener noreferrer" class="meta-tag link-tag">themeekmethodcoaching.com →</a>
        </div>
        <div class="fee-banner">
          <span class="fee-banner-label">No Development Fee</span>
          <p>Designed, built, and launched at zero development cost to the client.</p>
        </div>
      </div>
    </section>

    <!-- Overview Section -->
    <section class="detail-section darker">
      <div class="detail-container">
        <h2>Overview</h2>
        <p>
          Aimee Meek is an ICF-trained coach and NLP practitioner who spent twelve years as a Special Operations
          spouse, then went through divorce, sobriety, single parenthood, a career change, and several relocations.
          Out of that she built a practice around something most coaching ignores: not making the decision, but
          living with it once the pressure starts. We built the site that makes that distinction legible in about
          ten seconds, and turns it into three ways to work with her.
        </p>
      </div>
    </section>

    <!-- The Challenge Section -->
    <section class="detail-section">
      <div class="detail-container">
        <h2>The Challenge</h2>
        <p>
          The coaching market is saturated with people promising clarity. Aimee's offer is the opposite and much
          harder to explain: you already made the right call, and the discomfort you feel is not evidence that you
          did not. That is a sharp, unusual position, and a generic coaching site would have flattened it into the
          same soft language everyone else uses. The build had to protect the specificity, because the specificity
          is what makes someone recognise themselves and book.
        </p>
      </div>
    </section>

    <!-- Positioning Section -->
    <section class="detail-section darker">
      <div class="detail-container">
        <h2>Naming the Thing Nobody Names</h2>
        <div class="highlight-box">
          <span class="highlight-number">Movement</span>
          <span class="highlight-label">without collapse, the part after the choice</span>
        </div>
        <p>
          The whole site turns on one line from Aimee: discomfort can be real without proving the decision was
          wrong. Everything else, the framework page, the service tiers, the newsletter called The Decision You Keep
          Circling, is an expansion of that sentence. Getting the positioning right was most of the work. The build
          followed from it.
        </p>
      </div>
    </section>

    <!-- What I Built Section -->
    <section class="detail-section">
      <div class="detail-container">
        <h2>What I Built</h2>
        <p class="section-intro">
          A practice site with a tiered entry path, from a free group session to private coaching.
        </p>

        <div class="features-grid">
          <div class="feature-card">
            <div class="feature-icon">🪨</div>
            <h3>The Meek Method Page</h3>
            <p>
              The framework explained on its own terms: judgment stays central, pressure is separated from facts,
              practical next steps emerge, and support continues afterwards.
            </p>
          </div>

          <div class="feature-card">
            <div class="feature-icon">⏱️</div>
            <h3>Decision Stabilization Intensive</h3>
            <p>
              The flagship offer, a 90-minute private session on one decision, with its own dedicated page so it can
              be linked and sold directly.
            </p>
          </div>

          <div class="feature-card">
            <div class="feature-icon">🧪</div>
            <h3>Decision Pressure Lab</h3>
            <p>
              A free monthly small-group session that works as the top of the funnel, letting people experience the
              method before paying for it.
            </p>
          </div>

          <div class="feature-card">
            <div class="feature-icon">🤝</div>
            <h3>Private Coaching</h3>
            <p>
              The ongoing tier, for recurring patterns that show up across decisions rather than in a single one.
            </p>
          </div>

          <div class="feature-card">
            <div class="feature-icon">📬</div>
            <h3>Newsletter Capture</h3>
            <p>
              The Decision You Keep Circling, with a cover and a dedicated signup page, so visitors who are not ready
              to book still enter the practice.
            </p>
          </div>

          <div class="feature-card">
            <div class="feature-icon">📖</div>
            <h3>About Page</h3>
            <p>
              Lived experience and professional training side by side, because in this market credibility comes from
              both and neither alone.
            </p>
          </div>

          <div class="feature-card">
            <div class="feature-icon">✉️</div>
            <h3>Contact Page</h3>
            <p>
              A direct enquiry route for people whose situation does not fit neatly into one of the three offers.
            </p>
          </div>

          <div class="feature-card">
            <div class="feature-icon">♿</div>
            <h3>Policy Pages</h3>
            <p>
              Accessibility statement, privacy, cookies, and terms, appropriate for a practice handling sensitive
              personal context.
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- Tech Stack Section -->
    <section class="detail-section darker">
      <div class="detail-container">
        <h2>Tech Stack &amp; Hosting</h2>
        <div class="tech-grid">
          <div class="tech-card">
            <h3>Astro</h3>
            <span class="tech-label">Framework</span>
            <p>
              Static generation with a self-hosted variable font and preloaded assets, so the site feels calm and
              instant, which matters for a practice whose whole promise is steadiness.
            </p>
          </div>
          <div class="tech-card">
            <h3>Cloudflare</h3>
            <span class="tech-label">Hosting (Free Tier)</span>
            <p>
              Edge-delivered at zero recurring cost, so a solo practice is not paying a hosting bill before its
              first client.
            </p>
          </div>
          <div class="tech-card">
            <h3>Web3Forms</h3>
            <span class="tech-label">Enquiry &amp; Signup</span>
            <p>
              Contact and newsletter submissions delivered without a backend, a database, or a monthly form
              subscription.
            </p>
          </div>
          <div class="tech-card">
            <h3>Structured SEO &amp; llms.txt</h3>
            <span class="tech-label">Discoverability</span>
            <p>
              Canonical URLs, Open Graph cards, author markup, and an llms.txt file, so the practice is legible to
              search engines and to the AI assistants people increasingly ask for recommendations.
            </p>
          </div>
        </div>
      </div>
    </section>

    <!--
      Client testimonial goes here once Aimee provides one.
      Copy the "Client Testimonial Section" block and its .testimonial-* styles
      from broad-strokes-studio.vue, then flip the .darker class on the sections
      below it to keep the light/dark alternation intact.
      Avatar: a real 320x320 headshot of Aimee, supplied by her along with the quote.
      Do not substitute a generated image for a named person's testimonial photo;
      if no photo is available, use the initial-letter fallback that
      components/TestimonialBlock.vue renders when `avatar` is omitted.
    -->

    <!-- My Role Section -->
    <section class="detail-section">
      <div class="detail-container">
        <h2>My Role</h2>
        <p class="section-intro">
          Positioning first, then the build:
        </p>
        <div class="role-list">
          <div class="role-item">Worked with Aimee to sharpen a hard-to-explain method into language a stranger recognises immediately.</div>
          <div class="role-item">Structured the offer ladder, from the free Decision Pressure Lab up to private coaching.</div>
          <div class="role-item">Designed the visual identity and a page architecture that stays calm rather than sales-heavy.</div>
          <div class="role-item">Developed and deployed the full site, including the twelve pages and the newsletter funnel.</div>
          <div class="role-item">Set up enquiry handling, SEO, accessibility, and the policy pages a coaching practice needs.</div>
        </div>
      </div>
    </section>

    <!-- Why No Fee Section -->
    <section class="detail-section darker">
      <div class="detail-container">
        <h2>Why There Was No Development Fee</h2>
        <blockquote class="featured-quote">
          A practice like this is one person betting on an idea before anyone has paid them for it. Charging a
          development fee at that moment takes money out of exactly the phase where it has the most work to do. The
          guild is funded by clients who can carry the cost, and that funding is what lets us build for people at
          the start of something. No invoice, and the site was live before the first client was.
        </blockquote>
      </div>
    </section>

    <!-- Project Status Section -->
    <section class="detail-section">
      <div class="detail-container">
        <h2>Project Status</h2>
        <div class="status-box">
          <span class="status-indicator">Live</span>
          <p>
            The site is live and taking enquiries and newsletter signups. Static generation and free-tier hosting
            keep the running cost at the domain name alone. When the practice is ready for paid scheduling or a
            client portal, the architecture takes it without a rebuild.
          </p>
        </div>
      </div>
    </section>

    <!-- CTA Section -->
    <section class="cta-section">
      <div class="cta-container">
        <h2>Starting Something and Need It to Land Properly?</h2>
        <p>
          We help independent professionals find the sentence their whole business rests on, and then build the site
          that carries it. Tell us what you are starting.
        </p>
        <div class="cta-buttons">
          <NuxtLink to="/contact" class="btn btn-primary">
            Start a Conversation
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
  title: 'The Meek Method: Project Detail | Skill-Wanderer',
  description:
    'How Skill-Wanderer designed and built the coaching practice website for Aimee Meek, including positioning, a tiered offer ladder, and a newsletter funnel, at no development fee.',
  image: '/projects/meekmethod/card.jpg',
  keywords: ['coaching website design', 'coach brand positioning', 'solo practice website', 'Astro website case study', 'pro bono web development'],
  structuredData: createBreadcrumbSchema([
    { name: 'Home', url: 'https://skill-wanderer.com/' },
    { name: 'Work With Us', url: 'https://skill-wanderer.com/work-with-us' },
    { name: 'Our Projects', url: 'https://skill-wanderer.com/work-with-us/our-projects' },
    { name: 'The Meek Method', url: 'https://skill-wanderer.com/work-with-us/projects/the-meek-method' },
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
  margin: 0 auto 24px;
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

/* ── Fee Banner ───────────────────────────────────── */
.fee-banner {
  margin: 32px auto 0;
  max-width: 560px;
  background: rgba(34, 197, 94, 0.08);
  border: 1px solid rgba(34, 197, 94, 0.35);
  border-radius: 16px;
  padding: 20px 26px;
}

.fee-banner-label {
  display: inline-block;
  background: linear-gradient(135deg, #22c55e, #16a34a);
  color: white;
  padding: 5px 18px;
  border-radius: 50px;
  font-size: 0.78rem;
  font-weight: 700;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  margin-bottom: 12px;
}

.fee-banner p {
  color: rgba(255, 255, 255, 0.82);
  font-size: 1rem;
  line-height: 1.7;
  margin: 0;
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
  .tech-grid {
    grid-template-columns: 1fr;
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
