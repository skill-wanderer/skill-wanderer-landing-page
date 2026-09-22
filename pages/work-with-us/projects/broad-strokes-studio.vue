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
        <img src="/projects/broadstrokes/hero.jpg" alt="Broad Strokes Studio" class="hero-logo" />
        <h1>Broad Strokes Studio</h1>
        <p class="tagline">Bespoke Calligraphy Studio, Tucson, Arizona</p>
        <div class="hero-meta">
          <span class="meta-tag">Role: Designer, Developer &amp; Commerce Setup</span>
          <span class="meta-tag">Artisan Studio &amp; Commissions</span>
          <a href="https://broadstrokesstudio.com" target="_blank" rel="noopener noreferrer" class="meta-tag link-tag">broadstrokesstudio.com →</a>
        </div>
        <div class="fee-banner">
          <span class="fee-banner-label">No Development Fee</span>
          <p>Two months of design and development, delivered at zero development cost to the client.</p>
        </div>
      </div>
    </section>

    <!-- Overview Section -->
    <section class="detail-section darker">
      <div class="detail-container">
        <h2>Overview</h2>
        <p>
          Jack Passananti is a writer, calligrapher, and illuminator who hand-letters on archival paper: scripture,
          literary passages, family trees, wedding vows. Work like that sells on craft and trust, and neither
          survives a generic template. Over two months we built Broad Strokes a website that carries the same care
          as the pieces it sells, with a commission process, a priced catalogue, and checkout that lets a client
          commit without a back-and-forth email thread.
        </p>
      </div>
    </section>

    <!-- The Challenge Section -->
    <section class="detail-section">
      <div class="detail-container">
        <h2>The Challenge</h2>
        <p>
          Bespoke work is hard to sell online. Buyers cannot touch the paper, cannot feel the weight of the gilding,
          and have no reference point for what a hand-lettered 16x20 should cost. Most calligraphy sites solve this
          by hiding prices behind a contact form, which loses the buyer. The brief was to make the value legible:
          show the real work, explain the process honestly, and publish the prices so a serious client can self-qualify
          before the first conversation.
        </p>
      </div>
    </section>

    <!-- Real Photography Section -->
    <section class="detail-section darker">
      <div class="detail-container">
        <h2>A Constraint That Defined the Site: No AI Imagery</h2>
        <img src="/projects/broadstrokes/process.jpg" alt="Hand-lettered calligraphy in progress" class="inline-visual" />
        <p>
          Jack was firm from the first consultation: every piece shown on the site has to be a photograph of real
          work, not a generated image. For a studio whose entire promise is that a human hand made this, that is not
          a preference, it is the product. It meant the build waited on photography, and it meant designing layouts
          around the pieces that actually existed rather than filling grids with stock. The constraint made the site
          slower to finish and considerably more honest.
        </p>
      </div>
    </section>

    <!-- What I Built Section -->
    <section class="detail-section">
      <div class="detail-container">
        <h2>What I Built</h2>
        <p class="section-intro">
          A seven-page studio site with a full commission funnel, from first look to paid deposit.
        </p>

        <div class="features-grid">
          <div class="feature-card">
            <div class="feature-icon">🖋️</div>
            <h3>Landing Page</h3>
            <p>
              A single promise, words of enduring beauty created to be cherished for generations, carried by one
              full-bleed photograph of the studio desk rather than a wall of copy.
            </p>
          </div>

          <div class="feature-card">
            <div class="feature-icon">📜</div>
            <h3>Commissions Page</h3>
            <p>
              Three clear categories: custom artwork, family heritage pieces, and special occasions, each with the
              kind of text the studio letters and the sizes available.
            </p>
          </div>

          <div class="feature-card">
            <div class="feature-icon">💰</div>
            <h3>Published Pricing</h3>
            <p>
              Eight priced options across four formats, framed and unframed, from an 8x10 at $225 to a 16x20 framed
              at $1,148. No quote request required to find out what a piece costs.
            </p>
          </div>

          <div class="feature-card">
            <div class="feature-icon">🖼️</div>
            <h3>Gallery</h3>
            <p>
              Photographed pieces, shot as real artefacts on real paper, giving buyers the texture and scale
              reference a product description cannot.
            </p>
          </div>

          <div class="feature-card">
            <div class="feature-icon">🧭</div>
            <h3>Process Page</h3>
            <p>
              The three phases spelled out: private consultation on intent and text, a composition study approved
              before lettering begins, then final artwork with optional gilding, diapering, rubrication, and framing.
            </p>
          </div>

          <div class="feature-card">
            <div class="feature-icon">📅</div>
            <h3>Consultation Booking</h3>
            <p>
              A 30-minute private consultation bookable directly through Cal.com, because a short call is the
              cleanest way to scope custom work.
            </p>
          </div>

          <div class="feature-card">
            <div class="feature-icon">✉️</div>
            <h3>Inquiry Page</h3>
            <p>
              For clients who want to describe a piece in writing before committing to a call.
            </p>
          </div>

          <div class="feature-card">
            <div class="feature-icon">💳</div>
            <h3>Stripe Checkout</h3>
            <p>
              Eight Stripe payment links, one per size and framing option, each tagged with a client reference so
              Jack knows exactly which piece was purchased without reconciling anything by hand.
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
              Static generation, chosen so the large photographs of the work load fast and the pages stay crisp on
              a phone screen, which is where most people first see a piece.
            </p>
          </div>
          <div class="tech-card">
            <h3>Stripe Payment Links</h3>
            <span class="tech-label">Commerce</span>
            <p>
              Full checkout without running a store. No cart, no inventory system, no platform fee stacked on top of
              Stripe's own, and nothing for Jack to administer between commissions.
            </p>
          </div>
          <div class="tech-card">
            <h3>Cal.com</h3>
            <span class="tech-label">Scheduling</span>
            <p>
              Consultation booking that writes straight to Jack's calendar, removing the scheduling email thread
              entirely.
            </p>
          </div>
          <div class="tech-card">
            <h3>Cloudflare</h3>
            <span class="tech-label">Hosting (Free Tier)</span>
            <p>
              Edge-delivered and free to run, so the studio's only fixed costs are the domain and Stripe's
              transaction fee.
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
            Quan is phenomenal to work with; he designed a website for my calligraphy business and worked with me for
            two full months to make sure it was exactly how I hoped it'd be. Everything from personal preferences
            (i.e. not using AI, but taking actual photos of the work) to pricing structure was convenient and clearly
            laid out in both our consultations and contract. Quan went above and beyond expectations and would not
            accept any bonus/tip for his patience and effort.
          </blockquote>
          <div class="testimonial-author">
            <img src="/projects/broadstrokes/jack-avatar.jpg" alt="Jack Passananti" class="testimonial-avatar" loading="lazy" />
            <div class="testimonial-meta">
              <p class="testimonial-name">Jack Passananti</p>
              <p class="testimonial-role">Writer · Calligrapher · Illuminator, Broad Strokes Studio</p>
              <p class="testimonial-source">Shared on LinkedIn, 4 August 2026</p>
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
          Two months, end to end, from the first consultation to the first sale:
        </p>
        <div class="role-list">
          <div class="role-item">Ran consultations to understand the craft, the buyer, and what Jack would and would not compromise on.</div>
          <div class="role-item">Worked out the pricing structure with him and laid it out clearly in both the site and the contract.</div>
          <div class="role-item">Designed the visual identity and page architecture around real photographs of real work.</div>
          <div class="role-item">Developed and deployed the full seven-page site.</div>
          <div class="role-item">Set up Stripe payment links per size and framing option, with client reference tagging.</div>
          <div class="role-item">Integrated Cal.com consultation booking into the commission funnel.</div>
          <div class="role-item">Iterated until it matched what Jack had in his head, not what was fastest to ship.</div>
        </div>
      </div>
    </section>

    <!-- Why No Fee Section -->
    <section class="detail-section">
      <div class="detail-container">
        <h2>Why There Was No Development Fee</h2>
        <blockquote class="featured-quote">
          Jack tried to pay me a bonus at the end and I turned it down. A one-person studio putting months into
          hand-lettered work should be spending its money on paper, gilding, and photography, not on me. The guild
          takes fees from the clients who can carry them, which is precisely what frees us to build for the artisans
          who cannot. Two months of work, no invoice, and the site earns its keep every time a commission comes in.
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
            The studio is open for commissions and taking payment through the site. Because checkout runs on Stripe
            payment links and booking runs on Cal.com, Jack can add a size, change a price, or close his calendar
            without touching code. When the catalogue grows past what payment links handle comfortably, the Astro
            build is ready to take a proper storefront.
          </p>
        </div>
      </div>
    </section>

    <!-- CTA Section -->
    <section class="cta-section">
      <div class="cta-container">
        <h2>Selling Craft That Deserves Better Than a Template?</h2>
        <p>
          We build sites for makers, studios, and independent professionals whose work is the product. Tell us what
          you make and we will tell you how we would sell it.
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
  title: 'Broad Strokes Studio: Project Detail | Skill-Wanderer',
  description:
    'How Skill-Wanderer designed and built the bespoke calligraphy commission site for Broad Strokes Studio, with published pricing, Stripe checkout, and Cal.com booking, at no development fee.',
  image: '/projects/broadstrokes/card.jpg',
  keywords: ['calligraphy studio website', 'artisan ecommerce website', 'Stripe payment links', 'Astro website case study', 'pro bono web development'],
  structuredData: createBreadcrumbSchema([
    { name: 'Home', url: 'https://skill-wanderer.com/' },
    { name: 'Work With Us', url: 'https://skill-wanderer.com/work-with-us' },
    { name: 'Our Projects', url: 'https://skill-wanderer.com/work-with-us/our-projects' },
    { name: 'Broad Strokes Studio', url: 'https://skill-wanderer.com/work-with-us/projects/broad-strokes-studio' },
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
  width: 100%;
  max-width: 460px;
  aspect-ratio: 3 / 1;
  object-fit: cover;
  border-radius: 16px;
  margin: 0 auto 26px;
  border: 1px solid rgba(255, 107, 53, 0.3);
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

.inline-visual {
  width: 100%;
  aspect-ratio: 3 / 2;
  object-fit: cover;
  border-radius: 20px;
  margin-bottom: 30px;
  border: 1px solid rgba(255, 107, 53, 0.2);
  box-shadow: 0 12px 40px rgba(0, 0, 0, 0.4);
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
