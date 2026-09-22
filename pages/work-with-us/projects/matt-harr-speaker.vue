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
        <img src="/projects/mattharr/hero.jpg" alt="Matt Harr Speaker" class="hero-visual" />
        <h1>Matt Harr Speaker</h1>
        <p class="tagline">Professional Speaking Website</p>
        <div class="hero-meta">
          <span class="meta-tag">Role: Designer, Developer &amp; Business Adviser</span>
          <span class="meta-tag">Personal Brand &amp; Speaking Business</span>
          <a href="https://mattharrspeaker.com" target="_blank" rel="noopener noreferrer" class="meta-tag link-tag">mattharrspeaker.com →</a>
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
          Matt Harr spent 35 years inside schools as a teacher, coach, and mentor. He is a 1989 San Francisco
          Giants draft pick, a five-time State Coach of the Year with over 400 career wins, and the author of
          <em>Back When Consequences Weren't Optional</em>. What he did not have was a professional home online
          where superintendents, principals, and athletic directors could understand his message and book him
          to speak. I designed and built that home, and stayed on as a sounding board while he shaped the
          speaking business around it.
        </p>
      </div>
    </section>

    <!-- The Challenge Section -->
    <section class="detail-section">
      <div class="detail-container">
        <h2>The Challenge</h2>
        <p>
          Matt arrived with three decades of stories, not a brand. The raw material was extraordinary, but it was
          scattered across anecdotes, a book manuscript, and a lifetime of coaching notes. The work was to find the
          through-line, turn it into a positioning a school district would recognise in seconds, and then build a
          site around it that answers the questions a decision-maker actually asks: what does he speak about, how
          long is it, who has he worked with, and how do I get him on my calendar?
        </p>
      </div>
    </section>

    <!-- Positioning Section -->
    <section class="detail-section darker">
      <div class="detail-container">
        <h2>Finding the Message</h2>
        <div class="highlight-box">
          <span class="highlight-number">3 pillars</span>
          <span class="highlight-label">alignment, accountability, relationships</span>
        </div>
        <p>
          Everything on the site resolves to one promise: helping schools build cultures where accountability is
          expected, relationships are strong, and leadership develops naturally. That sentence did not exist when
          we started. It came out of the consulting conversations, and once we had it, every page, headline, and
          call-to-action had somewhere to point.
        </p>
      </div>
    </section>

    <!-- What I Built Section -->
    <section class="detail-section">
      <div class="detail-container">
        <h2>What I Built</h2>
        <p class="section-intro">
          A nine-page speaking site built to turn an interested school leader into a booking enquiry.
        </p>

        <div class="features-grid">
          <div class="feature-card">
            <div class="feature-icon">🎤</div>
            <h3>Speaking Page</h3>
            <p>
              Five clearly scoped offerings, from 45 to 75 minute culture keynotes to multi-day educator leadership
              workshops, student assemblies, and coach and athletic director clinics, each with its own format and
              audience.
            </p>
          </div>

          <div class="feature-card">
            <div class="feature-icon">📋</div>
            <h3>Programs Page</h3>
            <p>
              The detail a superintendent needs before committing budget: what the session covers, who it is for,
              and what a school walks away with.
            </p>
          </div>

          <div class="feature-card">
            <div class="feature-icon">📖</div>
            <h3>About Page</h3>
            <p>
              The credential stack told as a story rather than a résumé, with the coaching record and the classroom
              years doing the persuading.
            </p>
          </div>

          <div class="feature-card">
            <div class="feature-icon">💬</div>
            <h3>Testimonials Page</h3>
            <p>
              Named endorsements with photographs from the superintendents and athletic directors who have already
              brought Matt into their buildings.
            </p>
          </div>

          <div class="feature-card">
            <div class="feature-icon">✍️</div>
            <h3>Writing Archive</h3>
            <p>
              Over twenty long-form essays with an RSS feed, giving Matt a publishing habit that keeps the site
              earning search traffic between bookings.
            </p>
          </div>

          <div class="feature-card">
            <div class="feature-icon">📚</div>
            <h3>Book Page</h3>
            <p>
              A dedicated page for <em>Back When Consequences Weren't Optional</em>, linked straight through to Amazon.
            </p>
          </div>

          <div class="feature-card">
            <div class="feature-icon">📨</div>
            <h3>Speaking Request Form</h3>
            <p>
              A qualified enquiry form capturing event type, date, location, and organisation, so Matt receives a
              scopeable request rather than a blank message.
            </p>
          </div>

          <div class="feature-card">
            <div class="feature-icon">♿</div>
            <h3>Policy Pages</h3>
            <p>
              Accessibility statement, privacy policy, and cookie policy, because a site selling to public school
              districts needs to hold up to procurement.
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
              Static generation with almost no JavaScript shipped to the browser. Pages load instantly on a school
              district network, which is exactly where this site gets opened.
            </p>
          </div>
          <div class="tech-card">
            <h3>Cloudflare</h3>
            <span class="tech-label">Hosting (Free Tier)</span>
            <p>
              Global edge delivery at zero recurring cost, so the only thing Matt pays for is his domain name.
            </p>
          </div>
          <div class="tech-card">
            <h3>Web3Forms</h3>
            <span class="tech-label">Enquiry Handling</span>
            <p>
              Speaking requests are delivered straight to Matt's inbox with no backend to maintain and no monthly
              form-service subscription.
            </p>
          </div>
          <div class="tech-card">
            <h3>Structured SEO &amp; RSS</h3>
            <span class="tech-label">Discoverability</span>
            <p>
              Canonical URLs, Open Graph cards, and an RSS feed on the writing archive, so every new essay compounds
              into search visibility.
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- Client Testimonial Section -->
    <section class="detail-section">
      <div class="detail-container">
        <h2>What the Client Said</h2>
        <div class="testimonial-card">
          <div class="testimonial-quote-mark">"</div>
          <blockquote class="testimonial-text">
            Quan did an outstanding job building my professional speaking website. He took my ideas, stories, and
            experience and turned them into a polished website that clearly represents who I am and the message I
            want to share.
            <br /><br />
            What sets Quan apart, however, is that his help went far beyond designing a website. He has been a
            trusted business adviser throughout the process, offering honest feedback and practical guidance on how
            to position myself, present my services, reach potential clients, and grow my speaking business. He
            understands both the creative and business sides of building a professional brand.
            <br /><br />
            Quan is knowledgeable, dependable, patient, and genuinely invested in the success of the people he works
            with. I highly recommend him to anyone looking for an excellent website and a trusted partner who will
            help them think strategically about their business.
          </blockquote>
          <div class="testimonial-author">
            <img src="/projects/mattharr/matt-harr-avatar.jpg" alt="Matt Harr" class="testimonial-avatar" loading="lazy" />
            <div class="testimonial-meta">
              <p class="testimonial-name">Matt Harr</p>
              <p class="testimonial-role">Speaker on school culture and leadership · Author of Back When Consequences Weren't Optional</p>
              <p class="testimonial-source">Shared on LinkedIn, 29 August 2026</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- My Role Section -->
    <section class="detail-section darker">
      <div class="detail-container">
        <h2>My Role</h2>
        <p class="section-intro">
          This engagement was half build, half business advice:
        </p>
        <div class="role-list">
          <div class="role-item">Ran the positioning conversations that turned 35 years of stories into a single speaking promise.</div>
          <div class="role-item">Designed the visual identity, page architecture, and information hierarchy.</div>
          <div class="role-item">Developed and deployed the full site, from static build to domain and hosting setup.</div>
          <div class="role-item">Advised on service packaging, pricing posture, and how to present offerings to school districts.</div>
          <div class="role-item">Set up the writing archive and RSS feed so Matt could keep publishing without me.</div>
          <div class="role-item">Stayed available as a business sounding board as the speaking practice grew.</div>
        </div>
      </div>
    </section>

    <!-- Why No Fee Section -->
    <section class="detail-section">
      <div class="detail-container">
        <h2>Why There Was No Development Fee</h2>
        <blockquote class="featured-quote">
          Matt spent 35 years making sure the kids in his classrooms and on his teams had someone in their corner.
          Helping him reach more schools was not something I wanted to put an invoice on. The guild is funded by the
          work that can afford us, and that is exactly what lets us take on work like this for free. Matt paid for
          his own domain. Everything else was on the house.
        </blockquote>
      </div>
    </section>

    <!-- Project Status Section -->
    <section class="detail-section darker">
      <div class="detail-container">
        <h2>Project Status</h2>
        <div class="status-box">
          <span class="status-indicator">Live</span>
          <p>
            The site is live and Matt publishes to it independently. Static generation means there is no server to
            patch and no database to back up, and free-tier hosting keeps the running cost at zero. The architecture
            leaves room to add a booking calendar or a paid course if the speaking business calls for it.
          </p>
        </div>
      </div>
    </section>

    <!-- CTA Section -->
    <section class="cta-section">
      <div class="cta-container">
        <h2>Building Something You Need to Be Taken Seriously For?</h2>
        <p>
          Whether you are launching a speaking practice, a studio, or a product, we build the site and think through
          the business with you. Tell us what you are working on.
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
  title: 'Matt Harr Speaker: Project Detail | Skill-Wanderer',
  description:
    'How Skill-Wanderer designed, built, and launched the professional speaking website for Matt Harr, a school culture and leadership speaker, at no development fee.',
  image: '/projects/mattharr/hero.jpg',
  keywords: ['speaker website design', 'professional speaking website', 'personal brand website', 'Astro website case study', 'pro bono web development'],
  structuredData: createBreadcrumbSchema([
    { name: 'Home', url: 'https://skill-wanderer.com/' },
    { name: 'Work With Us', url: 'https://skill-wanderer.com/work-with-us' },
    { name: 'Our Projects', url: 'https://skill-wanderer.com/work-with-us/our-projects' },
    { name: 'Matt Harr Speaker', url: 'https://skill-wanderer.com/work-with-us/projects/matt-harr-speaker' },
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

.hero-visual {
  width: 100%;
  max-width: 620px;
  aspect-ratio: 16 / 9;
  object-fit: cover;
  border-radius: 20px;
  margin: 0 auto 28px;
  border: 1px solid rgba(255, 107, 53, 0.35);
  box-shadow: 0 16px 48px rgba(0, 0, 0, 0.45);
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

/* ── Client Testimonial ───────────────────────────── */
.testimonial-card {
  position: relative;
  background: var(--card-bg);
  border: 1px solid rgba(255, 107, 53, 0.18);
  border-radius: 20px;
  padding: 40px;
}

.testimonial-quote-mark {
  font-size: 4rem;
  font-weight: 700;
  line-height: 1;
  background: linear-gradient(135deg, var(--primary-orange), #FFD93D);
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
  margin-bottom: 10px;
}

.testimonial-text {
  font-size: 1.08rem;
  line-height: 1.85;
  color: rgba(255, 255, 255, 0.88);
  margin: 0 0 30px;
  font-style: italic;
}

.testimonial-author {
  display: flex;
  align-items: center;
  gap: 16px;
}

.testimonial-avatar {
  width: 64px;
  height: 64px;
  border-radius: 50%;
  object-fit: cover;
  border: 2px solid rgba(255, 107, 53, 0.4);
  flex-shrink: 0;
}

.testimonial-name {
  font-weight: 700;
  color: white;
  font-size: 1.05rem;
}

.testimonial-role {
  font-size: 0.9rem;
  color: var(--primary-orange);
  margin-top: 3px;
}

.testimonial-source {
  font-size: 0.82rem;
  color: rgba(255, 255, 255, 0.45);
  margin-top: 3px;
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

  .testimonial-card {
    padding: 28px 24px;
  }

  .testimonial-author {
    flex-direction: column;
    text-align: center;
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
