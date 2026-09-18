<template>
  <div>
    <!-- Hero -->
    <section class="hero">
      <span class="hero-eyebrow">Work With Us</span>
      <h1>No Development Fee</h1>
      <p>
        For the projects the guild accepts, we waive the separate upfront development fee. We build
        something real first, so there is a working prototype to review before either side commits.
      </p>
      <ul class="scope-chips">
        <li>Websites</li>
        <li>Web apps</li>
        <li>Mobile apps</li>
        <li>AI</li>
      </ul>
      <p class="hero-scope-note">
        Every project is handled A to Z. DevOps, deployment, and infrastructure are part of the
        work, not a separate line item.
      </p>
      <p class="hero-secondary">
        If we continue, you pay for the ongoing <strong>hosting and technical care</strong> that keeps
        the project running, maintained, and supported.
      </p>
      <div class="hero-actions">
        <NuxtLink to="/contact" class="btn btn-primary">See If Your Project Fits</NuxtLink>
        <a href="#how-it-works" class="btn btn-secondary">How It Works</a>
      </div>
      <span class="launch-badge">Selective · Prototype-First · No Lock-In</span>
    </section>

    <!-- Disclaimer -->
    <section class="disclaimer-section">
      <div class="content">
        <div class="disclaimer-banner">
          <span class="callout-icon">ℹ️</span>
          <p>
            Indicative information only, not an offer, a quote, or a contract. Exact scope, price,
            and terms are confirmed in writing in the service agreement.
          </p>
        </div>
      </div>
    </section>

    <!-- Selective Model -->
    <section class="selective-section">
      <div class="content">
        <div class="section-header">
          <h2>This Is a Selective Model</h2>
          <p>
            We do not accept every project. Some businesses apply directly; the Guild Master also
            reaches out personally through LinkedIn or email. An invitation starts a conversation, but
            it does not guarantee acceptance, and neither does applying.
          </p>
        </div>

        <h3 class="subsection-title">We may decline a project because of</h3>
        <ul class="factor-grid">
          <li>Technical fit</li>
          <li>Scope</li>
          <li>Long-term maintenance</li>
          <li>Operational fit</li>
          <li>Legal or reputational concerns</li>
          <li>Serious ethical concerns</li>
          <li>Whether the working relationship looks sustainable</li>
        </ul>

        <p class="selective-close">
          The goal is to work where the guild can genuinely help, and where the relationship makes
          sense for both sides.
        </p>
      </div>
    </section>

    <!-- How It Works -->
    <section id="how-it-works" class="process-section">
      <div class="content">
        <div class="section-header">
          <h2>How It Works</h2>
          <p>The prototype comes early and deliberately, because reacting to something real beats defining everything in the abstract.</p>
        </div>

        <div class="step-list">
          <article class="step-card">
            <div class="step-number">1</div>
            <div class="step-body">
              <h3>Light Initial Conversation</h3>
              <p>
                A short exchange is usually enough: LinkedIn or email, your existing site, and
                whatever you care to share. We do not require a long discovery process first.
              </p>
            </div>
          </article>

          <article class="step-card">
            <div class="step-number">2</div>
            <div class="step-body">
              <div class="step-head">
                <h3>First Prototype</h3>
                <span class="step-badge">Required</span>
              </div>
              <p>
                For accepted projects we build the first prototype at no cost. It gives both sides
                something real to react to.
              </p>
            </div>
          </article>

          <article class="step-card">
            <div class="step-number">3</div>
            <div class="step-body">
              <h3>We Meet and Determine the Real Scope</h3>
              <p>
                We review the prototype together: what works, what needs to change, the
                functionality and integrations required, and the actual size of the project.
              </p>
              <p class="step-note">
                If the direction turns out to be materially off, we may build a second prototype.
                Otherwise we continue from the first.
              </p>
            </div>
          </article>

          <article class="step-card">
            <div class="step-number">4</div>
            <div class="step-body">
              <h3>Decide and Confirm the Price</h3>
              <p>
                With the scope clear, both sides decide whether to continue and we confirm the exact
                recurring price. There is no obligation to proceed simply because a prototype exists.
              </p>
            </div>
          </article>

          <article class="step-card">
            <div class="step-number">5</div>
            <div class="step-body">
              <h3>Build, Revise, Launch</h3>
              <p>
                We complete the agreed scope, normally with up to <strong>2 structured revision
                rounds before launch</strong>. After that the project continues under ongoing
                hosting and technical care.
              </p>
            </div>
          </article>
        </div>
      </div>
    </section>

    <!-- What You Pay -->
    <section class="pay-section">
      <div class="content">
        <div class="section-header">
          <h2>What You Pay</h2>
          <p>Two parts, and only one of them is a bill.</p>
        </div>

        <div class="pay-grid">
          <div class="pay-card pay-card--free">
            <span class="pay-icon">✅</span>
            <h4>No Upfront Development Fee</h4>
            <p>
              Accepted projects pay no separate fee for the initial build, across every kind of work
              the guild takes on.
            </p>
          </div>
          <div class="pay-card">
            <span class="pay-icon">🔄</span>
            <h4>Ongoing Hosting &amp; Technical Care</h4>
            <p>
              A recurring service fee that keeps the project running, maintained, and supported
              after launch.
            </p>
          </div>
        </div>

        <p class="pay-close">
          The price depends on the scope, complexity, and support the project actually needs, and it
          is confirmed after the prototype review, never before.
        </p>
      </div>
    </section>

    <!-- No Vendor Lock-In -->
    <section class="lockin-section">
      <div class="content">
        <div class="section-header">
          <h2>No Vendor Lock-In</h2>
        </div>

        <div class="lockin-statement">
          <p>
            The goal is for clients to stay because the service is useful, not because leaving is
            technically impossible.
          </p>
        </div>

        <p class="lockin-copy">
          Where reasonably possible you can inspect the code and project materials. You may stop the
          service and migrate the project yourself, or hire another provider to do it.
        </p>

        <p class="lockin-note">
          Sensitive production systems may use read-only access rather than full administrative
          access. One incorrect production change can break the application or expose data, so that
          restriction is about safety, not lock-in.
        </p>
      </div>
    </section>

    <!-- FAQ -->
    <section class="faq-section">
      <div class="content">
        <div class="section-header">
          <h2>Frequently Asked Questions</h2>
        </div>
        <div class="faq-list">
          <details v-for="(faq, index) in faqs" :key="index" class="faq-item">
            <summary>{{ faq.question }}</summary>
            <div class="faq-answer">
              <p>{{ faq.answer }}</p>
            </div>
          </details>
        </div>
      </div>
    </section>

    <!-- CTA -->
    <section class="cta-section">
      <div class="content cta-content">
        <h2>See If Your Project Fits</h2>
        <p>
          Tell us briefly about your business and what you would like to build. If it looks like a
          good fit, the next step is the first prototype.
        </p>
        <p class="cta-note">Applying does not guarantee acceptance. Projects are taken on selectively.</p>
        <div class="cta-actions">
          <NuxtLink to="/contact" class="btn btn-primary">Start a Conversation</NuxtLink>
          <NuxtLink to="/work-with-us/success-sharing-model" class="btn btn-secondary">How We Deliver</NuxtLink>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
// Single source of truth: the same array renders the FAQ and generates the FAQPage
// JSON-LD, so the structured data can never drift from the visible answers.
const faqs = [
  {
    question: 'Is it completely free?',
    answer:
      'No. For accepted projects there is no separate upfront development fee, but ongoing hosting and technical care is a paid service.',
  },
  {
    question: 'Does everyone qualify?',
    answer:
      'No. Projects are accepted selectively. Applying, or receiving a direct LinkedIn or email invitation, does not guarantee acceptance.',
  },
  {
    question: 'Is the prototype optional?',
    answer:
      'No. The first prototype is a required part of the process for accepted projects. A second prototype is optional, and only used when the direction changes significantly.',
  },
  {
    question: 'When is the exact price decided?',
    answer:
      'After the first prototype is reviewed and we discuss the real project scope. It is never quoted before there is something real to look at.',
  },
  {
    question: 'Can I move the project elsewhere later?',
    answer:
      'Yes. The guild does not support vendor lock-in. You may move the project yourself or hire another provider to migrate it.',
  },
]

useSEO({
  title: 'Our Service Model | Skill-Wanderer',
  description:
    'For accepted projects the guild waives the upfront development fee: web, mobile and AI, delivered A to Z with DevOps included. A free first prototype, then ongoing technical care.',
  image: '/cropped-skill-wanderer-logo-768x256.webp',
  keywords: [
    'no development fee',
    'free prototype',
    'web mobile ai end to end development',
    'no vendor lock-in',
    'selective development',
    'guild service model',
  ],
  structuredData: [
    createBreadcrumbSchema([
      { name: 'Home', url: 'https://skill-wanderer.com/' },
      { name: 'Work With Us', url: 'https://skill-wanderer.com/work-with-us' },
      { name: 'Service Model', url: 'https://skill-wanderer.com/work-with-us/service-model' },
    ]),
    createFAQSchema(faqs),
  ],
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
    radial-gradient(circle at 20% 50%, rgba(255, 107, 53, 0.12) 0%, transparent 50%),
    radial-gradient(circle at 80% 20%, rgba(255, 107, 53, 0.06) 0%, transparent 40%);
}

.hero-eyebrow {
  display: inline-block;
  font-size: 0.9rem;
  font-weight: 600;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  color: var(--primary-orange);
  opacity: 0.85;
  margin-bottom: 16px;
  position: relative;
  z-index: 1;
}

.hero h1 {
  font-size: 3.5rem;
  color: white;
  margin-bottom: 24px;
  position: relative;
  z-index: 1;
}

.hero p {
  font-size: 1.25rem;
  color: var(--light-text);
  opacity: 0.9;
  max-width: 760px;
  margin: 0 auto 24px;
  line-height: 1.8;
  position: relative;
  z-index: 1;
}

.hero-secondary {
  font-size: 1.1rem !important;
  max-width: 680px !important;
  margin-bottom: 32px !important;
}

.hero-secondary strong {
  color: var(--primary-orange);
}

.scope-chips {
  list-style: none;
  padding: 0;
  margin: 0 auto 32px;
  max-width: 720px;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 10px;
  position: relative;
  z-index: 1;
}

.scope-chips li {
  background: rgba(255, 107, 53, 0.1);
  border: 1px solid rgba(255, 107, 53, 0.3);
  border-radius: 50px;
  padding: 8px 18px;
  font-size: 0.92rem;
  color: var(--light-text);
}

.hero-scope-note {
  font-size: 1rem !important;
  opacity: 0.72;
  max-width: 640px !important;
  margin-bottom: 28px !important;
}

.hero-actions {
  display: flex;
  gap: 16px;
  justify-content: center;
  flex-wrap: wrap;
  margin-bottom: 32px;
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
  margin-bottom: 48px;
}

.section-header h2 {
  font-size: 2.5rem;
  color: var(--primary-orange);
  margin-bottom: 16px;
}

.section-header p {
  font-size: 1.15rem;
  opacity: 0.82;
  max-width: 720px;
  margin: 0 auto;
  line-height: 1.75;
}

.subsection-title {
  font-size: 1.2rem;
  color: white;
  text-align: center;
  margin: 0 0 22px;
}

.btn {
  padding: 15px 30px;
  border-radius: 50px;
  font-weight: bold;
  text-decoration: none;
  transition: all 0.3s ease;
  display: inline-block;
  font-size: 1rem;
}

.btn-primary {
  background: linear-gradient(135deg, var(--primary-orange), var(--deep-orange));
  color: white;
}

.btn-secondary {
  background: transparent;
  color: var(--primary-orange);
  border: 2px solid var(--primary-orange);
}

.btn:hover {
  transform: translateY(-2px);
}

.callout-icon {
  font-size: 1.5rem;
  flex-shrink: 0;
  line-height: 1;
}

.factor-grid {
  list-style: none;
  padding: 0;
  margin: 0 auto;
  max-width: 900px;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 12px;
}

.factor-grid li {
  background: var(--card-bg);
  border: 1px solid rgba(255, 107, 53, 0.15);
  border-radius: 50px;
  padding: 12px 22px;
  font-size: 0.95rem;
}

/* ── Disclaimer ───────────────────────────────────── */
.disclaimer-section {
  padding: 40px 20px 0;
  background: var(--darker-bg);
}

.disclaimer-banner {
  display: flex;
  align-items: flex-start;
  gap: 16px;
  background: rgba(255, 217, 61, 0.07);
  border: 1px solid rgba(255, 217, 61, 0.28);
  border-radius: 16px;
  padding: 20px 24px;
  max-width: 860px;
  margin: 0 auto;
}

.disclaimer-banner p {
  font-size: 0.95rem;
  line-height: 1.7;
  opacity: 0.88;
  margin: 0;
}

/* ── Selective ────────────────────────────────────── */
.selective-section {
  padding: 80px 20px;
  background: var(--darker-bg);
}

.selective-close {
  text-align: center;
  max-width: 700px;
  margin: 36px auto 0;
  font-size: 1.05rem;
  line-height: 1.75;
  opacity: 0.85;
}

/* ── Process ──────────────────────────────────────── */
.process-section {
  padding: 90px 20px;
  background: var(--dark-bg);
}

.step-list {
  display: flex;
  flex-direction: column;
  gap: 18px;
  max-width: 860px;
  margin: 0 auto;
}

.step-card {
  display: flex;
  gap: 24px;
  background: var(--card-bg);
  border: 1px solid rgba(255, 107, 53, 0.15);
  border-radius: 18px;
  padding: 26px 28px;
  transition: all 0.3s ease;
}

.step-card:hover {
  border-color: rgba(255, 107, 53, 0.35);
  background: var(--card-hover);
}

.step-number {
  flex-shrink: 0;
  width: 42px;
  height: 42px;
  border-radius: 50%;
  background: linear-gradient(135deg, var(--primary-orange), var(--deep-orange));
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: bold;
  font-size: 1.05rem;
}

.step-head {
  display: flex;
  align-items: center;
  gap: 12px;
  flex-wrap: wrap;
  margin-bottom: 10px;
}

.step-body h3 {
  color: white;
  font-size: 1.25rem;
  margin: 0 0 10px;
}

.step-head h3 {
  margin: 0;
}

.step-badge {
  font-size: 0.72rem;
  font-weight: 700;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  padding: 5px 12px;
  border-radius: 50px;
  background: rgba(255, 107, 53, 0.18);
  color: var(--primary-orange);
  border: 1px solid rgba(255, 107, 53, 0.4);
}

.step-body p {
  line-height: 1.75;
  opacity: 0.85;
  margin: 0;
}

.step-note {
  font-size: 0.95rem;
  color: var(--primary-orange);
  opacity: 0.9 !important;
  margin-top: 12px !important;
}

/* ── What You Pay ─────────────────────────────────── */
.pay-section {
  padding: 90px 20px;
  background: var(--darker-bg);
}

.pay-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 22px;
  max-width: 860px;
  margin: 0 auto;
}

.pay-card {
  background: var(--card-bg);
  border: 1px solid rgba(255, 107, 53, 0.15);
  border-radius: 18px;
  padding: 30px;
  transition: all 0.3s ease;
}

.pay-card--free {
  border-color: rgba(76, 175, 80, 0.35);
}

.pay-card:hover {
  background: var(--card-hover);
}

.pay-icon {
  font-size: 1.7rem;
  display: block;
  margin-bottom: 12px;
}

.pay-card h4 {
  color: white;
  font-size: 1.15rem;
  margin-bottom: 10px;
}

.pay-card p {
  margin: 0;
  opacity: 0.82;
  line-height: 1.7;
  font-size: 0.97rem;
}

.pay-close {
  text-align: center;
  max-width: 720px;
  margin: 36px auto 0;
  font-size: 1.05rem;
  line-height: 1.75;
  color: var(--primary-orange);
  opacity: 0.9;
}

/* ── Lock-In ──────────────────────────────────────── */
.lockin-section {
  padding: 90px 20px;
  background: var(--dark-bg);
}

.lockin-statement {
  max-width: 760px;
  margin: 0 auto 32px;
  text-align: center;
  background: rgba(76, 175, 80, 0.07);
  border: 1px solid rgba(76, 175, 80, 0.3);
  border-radius: 18px;
  padding: 26px 30px;
}

.lockin-statement p {
  margin: 0;
  font-size: 1.15rem;
  line-height: 1.7;
  color: white;
}

.lockin-copy {
  text-align: center;
  max-width: 740px;
  margin: 0 auto;
  font-size: 1.05rem;
  line-height: 1.8;
  opacity: 0.85;
}

.lockin-note {
  text-align: center;
  max-width: 740px;
  margin: 24px auto 0;
  font-size: 0.95rem;
  line-height: 1.75;
  opacity: 0.65;
}

/* ── FAQ ──────────────────────────────────────────── */
.faq-section {
  padding: 90px 20px;
  background: var(--darker-bg);
}

.faq-list {
  max-width: 840px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  gap: 14px;
}

.faq-item {
  background: var(--card-bg);
  border: 1px solid rgba(255, 107, 53, 0.15);
  border-radius: 14px;
  overflow: hidden;
}

.faq-item summary {
  padding: 20px 26px;
  cursor: pointer;
  font-weight: 600;
  color: white;
  font-size: 1.05rem;
  list-style: none;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 16px;
}

.faq-item summary::-webkit-details-marker {
  display: none;
}

.faq-item summary::after {
  content: '+';
  color: var(--primary-orange);
  font-size: 1.5rem;
  line-height: 1;
  flex-shrink: 0;
}

.faq-item[open] summary::after {
  content: '−';
}

.faq-item[open] summary {
  border-bottom: 1px solid rgba(255, 107, 53, 0.15);
}

.faq-answer {
  padding: 18px 26px 22px;
}

.faq-answer p {
  margin: 0;
  line-height: 1.8;
  opacity: 0.85;
}

/* ── CTA ──────────────────────────────────────────── */
.cta-section {
  padding: 90px 20px;
  background: linear-gradient(135deg, var(--dark-bg) 0%, var(--darker-bg) 100%);
  text-align: center;
}

.cta-content h2 {
  font-size: 2.5rem;
  color: var(--primary-orange);
  margin-bottom: 18px;
}

.cta-content p {
  font-size: 1.15rem;
  max-width: 660px;
  margin: 0 auto 16px;
  line-height: 1.8;
  opacity: 0.88;
}

.cta-note {
  font-size: 0.95rem !important;
  opacity: 0.7 !important;
  margin-bottom: 32px !important;
}

.cta-actions {
  display: flex;
  gap: 16px;
  justify-content: center;
  flex-wrap: wrap;
}

/* ── Responsive ───────────────────────────────────── */
@media (max-width: 768px) {
  .hero h1 {
    font-size: 2.4rem;
  }

  .hero p {
    font-size: 1.1rem;
  }

  .section-header h2,
  .cta-content h2 {
    font-size: 2rem;
  }

  .pay-grid {
    grid-template-columns: 1fr;
  }

  .step-card {
    flex-direction: column;
    gap: 16px;
    padding: 24px;
  }
}
</style>
