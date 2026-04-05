<template>
  <div class="pricing-faq-page">
    <section class="hero">
      <div class="content hero-content">
        <p class="eyebrow">Supporting details for both segments</p>
        <h1>Pricing FAQ &amp; Terms</h1>
        <p class="hero-copy">
          Regional pricing guidance, payment protection options, and baseline pricing notes — the supporting detail that keeps the main pricing page focused on decisions.
        </p>
        <div class="hero-actions">
          <NuxtLink to="/work-with-us/pricing" class="btn btn-primary">Back to Pricing</NuxtLink>
          <NuxtLink to="/contact" class="btn btn-secondary">Ask a Specific Question</NuxtLink>
        </div>
      </div>
    </section>

    <section class="faq-section">
      <div class="content">
        <div class="section-header section-header--left">
          <h2>What lives here now</h2>
          <p>Use this page when you want the supporting terms and guardrails, not when you are simply choosing a package.</p>
        </div>

        <div class="overview-grid">
          <article class="overview-card">
            <h3>Regional Pricing</h3>
            <p>Purchasing-power adjustments for eligible regions and how eligibility is assessed.</p>
          </article>
          <article class="overview-card">
            <h3>Payment Protection</h3>
            <p>Direct payments, escrow-style options, and third-party contract platforms.</p>
          </article>
          <article class="overview-card">
            <h3>Pricing Notes</h3>
            <p>What listed prices mean, when terms are documented, and where fees may be added.</p>
          </article>
        </div>

        <article id="regional" class="faq-card">
          <div class="faq-card-header">
            <p class="faq-kicker">Regional pricing</p>
            <h3>Regional &amp; Purchasing Power Pricing</h3>
          </div>
          <p class="faq-copy">
            Standard rates are denominated in USD and reflect the cost of delivering professional-grade development. For eligible regions, we can apply purchasing-power adjustments so geography is not an automatic barrier.
          </p>

          <details class="faq-details" open>
            <summary>Who qualifies?</summary>
            <div class="faq-details-body">
              <p>
                Regional pricing is intended for founders and teams whose primary business operations are based in eligible regions, including parts of Southeast Asia, South Asia, Sub-Saharan Africa, Latin America, and Eastern Europe.
              </p>
              <p>
                It is not designed for companies headquartered in high-income countries that simply outsource to lower-cost regions.
              </p>
            </div>
          </details>

          <details class="faq-details">
            <summary>How is the adjustment assessed?</summary>
            <div class="faq-details-body">
              <p>
                We use publicly available purchasing-power and operating-context data as a starting point, then assess the team context during onboarding.
              </p>
              <p>
                Countries with wide internal economic variation are reviewed case by case rather than through a blanket country-level adjustment.
              </p>
            </div>
          </details>
        </article>

        <article id="payment" class="faq-card">
          <div class="faq-card-header">
            <p class="faq-kicker">Payment protection</p>
            <h3>Payment &amp; Trust Options</h3>
          </div>
          <p class="faq-copy">
            By default, engagements are handled directly between you and Skill-Wanderer using the package payment splits shown on the pricing page. If you prefer added protection, we can support third-party payment rails.
          </p>

          <div class="option-grid">
            <div class="option-card">
              <h4>Direct Payment</h4>
              <p>Best when you are comfortable with the staged payment flow and want the lowest-friction engagement setup.</p>
            </div>
            <div class="option-card">
              <h4>Escrow Service</h4>
              <p>Useful for milestone-based protection when you want a neutral third party holding funds until agreed checkpoints are met.</p>
            </div>
            <div class="option-card">
              <h4>Contract Platforms</h4>
              <p>Upwork Direct Contract or Deel can add invoicing, payment processing, and dispute handling for cross-border work.</p>
            </div>
          </div>

          <details class="faq-details" open>
            <summary>Who pays platform fees?</summary>
            <div class="faq-details-body">
              <p>
                Third-party platforms charge their own service fees. Those fees are added at cost if you choose to use them. The guild does not mark them up.
              </p>
            </div>
          </details>

          <details class="faq-details">
            <summary>Does the delivery model change?</summary>
            <div class="faq-details-body">
              <p>
                No. Deliverables, quality bar, and delivery expectations stay the same whether payment is handled directly or through a platform.
              </p>
            </div>
          </details>
        </article>

        <article id="notes" class="faq-card">
          <div class="faq-card-header">
            <p class="faq-kicker">General terms</p>
            <h3>Pricing Notes</h3>
          </div>

          <ul class="notes-list">
            <li>Listed prices are starting ranges, not a guarantee of final scope.</li>
            <li>Individual and organization pricing reflects different levels of capacity, oversight, and complexity.</li>
            <li>Sprint pricing is confirmed during planning; the cycle begins once the initial payment is received.</li>
            <li>Engineering pod and enterprise terms are documented in a separate agreement before work begins.</li>
            <li>Regional pricing adjustments are verified during onboarding and reviewed periodically.</li>
            <li>Platform fees from escrow or contract tools are not included in listed prices.</li>
          </ul>

          <details class="faq-details" open>
            <summary>Can pricing change over time?</summary>
            <div class="faq-details-body">
              <p>
                Yes. Pricing is reviewed periodically based on capacity, market conditions, and the operating reality of the guild. Existing signed engagements are not retroactively changed.
              </p>
            </div>
          </details>
        </article>
      </div>
    </section>

    <section class="cta-section">
      <div class="content cta-card">
        <div>
          <p class="faq-kicker">Need a custom answer?</p>
          <h2>Bring the edge case to us directly.</h2>
          <p>
            If your financing, geography, or contracting setup does not fit neatly into the standard options, we can talk through the tradeoffs and document a workable arrangement.
          </p>
        </div>
        <NuxtLink to="/contact" class="btn btn-primary">Contact the Guild</NuxtLink>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
useSEO({
  title: 'Pricing FAQ & Terms | Skill-Wanderer',
  description:
    'Regional pricing guidance, payment protection options, and pricing notes for Skill-Wanderer engagements.',
  image: '/cropped-skill-wanderer-logo-768x256.webp',
  keywords: ['pricing faq', 'regional pricing', 'payment options', 'pricing notes', 'software development terms'],
  structuredData: createBreadcrumbSchema([
    { name: 'Home', url: 'https://skill-wanderer.com/' },
    { name: 'Work With Us', url: 'https://skill-wanderer.com/work-with-us' },
    { name: 'Pricing FAQ & Terms', url: 'https://skill-wanderer.com/work-with-us/pricing-faq' },
  ]),
})
</script>

<style scoped>
.pricing-faq-page {
  background: var(--dark-bg);
}

.hero {
  background:
    radial-gradient(circle at top left, rgba(255, 107, 53, 0.18), transparent 35%),
    linear-gradient(135deg, var(--darker-bg) 0%, var(--dark-bg) 100%);
  padding: 150px 20px 88px;
}

.content {
  max-width: 1080px;
  margin: 0 auto;
  padding: 0 20px;
}

.hero-content {
  max-width: 820px;
  text-align: center;
}

.eyebrow,
.faq-kicker {
  margin: 0 0 14px;
  color: var(--primary-orange);
  font-size: 0.82rem;
  font-weight: 800;
  letter-spacing: 0.08em;
  text-transform: uppercase;
}

.hero h1,
.cta-card h2 {
  margin: 0 0 16px;
  color: white;
}

.hero h1 {
  font-size: clamp(2.9rem, 7vw, 4.5rem);
  line-height: 0.95;
}

.hero-copy,
.faq-copy,
.overview-card p,
.option-card p,
.cta-card p,
.faq-details-body p,
.notes-list li {
  color: rgba(255, 255, 255, 0.78);
  line-height: 1.75;
}

.hero-actions {
  display: flex;
  justify-content: center;
  gap: 14px;
  flex-wrap: wrap;
  margin-top: 30px;
}

.btn {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  min-height: 48px;
  padding: 0 22px;
  border-radius: 999px;
  font-weight: 700;
  text-decoration: none;
  transition: transform 0.25s ease, border-color 0.25s ease;
}

.btn:hover {
  transform: translateY(-2px);
}

.btn-primary {
  background: linear-gradient(135deg, var(--primary-orange), var(--deep-orange));
  color: white;
}

.btn-secondary {
  border: 1px solid rgba(255, 255, 255, 0.18);
  background: rgba(255, 255, 255, 0.04);
  color: white;
}

.faq-section,
.cta-section {
  padding: 80px 20px;
}

.faq-section {
  background: var(--darker-bg);
}

.cta-section {
  background: var(--dark-bg);
}

.section-header {
  margin-bottom: 30px;
}

.section-header--left {
  text-align: left;
}

.section-header h2 {
  margin: 0 0 12px;
  color: white;
  font-size: clamp(2rem, 4vw, 2.8rem);
}

.section-header p {
  margin: 0;
  max-width: 740px;
  color: rgba(255, 255, 255, 0.78);
  line-height: 1.7;
}

.overview-grid,
.option-grid {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 16px;
}

.overview-card,
.option-card,
.faq-card,
.cta-card {
  border-radius: 22px;
  border: 1px solid rgba(255, 107, 53, 0.16);
  background:
    linear-gradient(180deg, rgba(255, 255, 255, 0.03), rgba(255, 255, 255, 0.015)),
    var(--card-bg);
}

.overview-card,
.option-card {
  padding: 22px;
}

.overview-card h3,
.faq-card h3 {
  margin: 0 0 10px;
  color: white;
}

.option-card h4 {
  margin: 0 0 10px;
  color: white;
}

.faq-card {
  margin-top: 22px;
  padding: 28px;
  scroll-margin-top: 110px;
}

.faq-card-header {
  margin-bottom: 10px;
}

.faq-details {
  margin-top: 16px;
  border-top: 1px solid rgba(255, 255, 255, 0.08);
  padding-top: 16px;
}

.faq-details summary {
  list-style: none;
  cursor: pointer;
  color: white;
  font-weight: 700;
}

.faq-details summary::-webkit-details-marker {
  display: none;
}

.faq-details summary::after {
  content: ' +';
  color: var(--primary-orange);
}

.faq-details[open] summary::after {
  content: ' -';
}

.faq-details-body {
  margin-top: 12px;
}

.faq-details-body p {
  margin: 0;
}

.faq-details-body p + p {
  margin-top: 10px;
}

.notes-list {
  margin: 0;
  padding-left: 20px;
}

.notes-list li + li {
  margin-top: 8px;
}

.cta-card {
  display: flex;
  justify-content: space-between;
  gap: 24px;
  align-items: center;
  padding: 28px;
}

@media (max-width: 920px) {
  .overview-grid,
  .option-grid {
    grid-template-columns: 1fr;
  }

  .cta-card {
    flex-direction: column;
    align-items: flex-start;
  }
}

@media (max-width: 640px) {
  .hero {
    padding-top: 132px;
    padding-bottom: 72px;
  }

  .content {
    padding: 0 16px;
  }

  .faq-card,
  .cta-card,
  .overview-card,
  .option-card {
    padding: 22px;
  }
}
</style>