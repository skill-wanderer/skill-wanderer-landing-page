<template>
  <div>
    <!-- Hero Section -->
    <section class="hero">
      <h1>Pricing FAQ &amp; Terms</h1>
      <p>Regional pricing, payment options, trust assurance, and pricing notes</p>
      <NuxtLink to="/work-with-us/pricing" class="back-link">&larr; Back to Pricing</NuxtLink>
    </section>

    <!-- Regional Pricing Section -->
    <section class="regional-section">
      <div class="content">
        <div class="section-header">
          <h2>Regional &amp; Purchasing Power Pricing</h2>
          <p>Geography should not be a barrier to working with quality development partners</p>
        </div>

        <div class="regional-intro">
          <div class="regional-intro-icon"><Globe :size="32" :stroke-width="1.5" /></div>
          <p>
            Our standard rates are denominated in USD and reflect the cost of delivering professional-grade development.
            However, we recognize that these rates carry different weight depending on where you operate.
          </p>
        </div>

        <div class="regional-details-grid">
          <div class="regional-detail-card">
            <div class="regional-detail-icon"><Globe :size="24" color="white" :stroke-width="2" /></div>
            <h4>Emerging Market Adjustments</h4>
            <p>
              For clients and partners based in emerging markets — including Southeast Asia, South Asia, Sub-Saharan Africa,
              Latin America, and parts of Eastern Europe — we offer purchasing power adjustments on sprint and retainer packages.
              The adjustment level is based on publicly available PPP data and assessed during onboarding based on your team's
              location and operating context.
            </p>
          </div>
          <div class="regional-detail-card">
            <div class="regional-detail-icon"><BarChart3 :size="24" color="white" :stroke-width="2" /></div>
            <h4>Case-by-Case Assessment</h4>
            <p>
              For countries with significant internal economic variation — such as China, Brazil, or India — the adjustment is
              assessed on a case-by-case basis, reflecting the actual conditions of your team rather than a blanket country-level rate.
            </p>
          </div>
        </div>

        <div class="eligibility-card">
          <div class="eligibility-header">
            <span class="eligibility-icon">✓</span>
            <h4>Eligibility</h4>
          </div>
          <p>
            Regional pricing applies to teams and founders whose primary business operations are based in the eligible region.
            It is not available for companies headquartered in high-income countries outsourcing to lower-cost regions.
          </p>
          <p>
            This adjustment can be combined with other partnership models for further flexibility.
            Reach out to discuss how regional pricing applies to your situation.
          </p>
        </div>
      </div>
    </section>

    <!-- Payment & Trust Options Section -->
    <section class="trust-section">
      <div class="content">
        <div class="section-header">
          <h2>Payment &amp; Trust Options</h2>
          <p>Flexible payment arrangements designed to give you confidence at every stage</p>
        </div>

        <div class="trust-intro">
          <div class="trust-intro-icon"><Handshake :size="32" :stroke-width="1.5" /></div>
          <p>
            By default, all payments are handled directly between you and Skill-Wanderer. Our sprint payment
            structures — with upfront/delivery splits — are designed to build trust incrementally, especially
            for first-time partners.
          </p>
        </div>

        <div class="trust-option-block">
          <h3>Prefer Extra Assurance?</h3>
          <p>
            If you would like additional security on your payments, we fully support working through established
            third-party platforms. These services provide independent payment protection, dispute resolution,
            and verified contract management — giving you peace of mind throughout the engagement.
          </p>
        </div>

        <div class="trust-options-grid">
          <div class="trust-option-card">
            <div class="trust-option-icon"><Lock :size="24" color="white" :stroke-width="2" /></div>
            <h4>Escrow Service</h4>
            <p>
              Funds are held by a neutral third party and released only when agreed milestones are met.
              Ideal for sprint-based engagements where you want milestone-linked payment protection.
            </p>
          </div>
          <div class="trust-option-card">
            <div class="trust-option-icon"><Briefcase :size="24" color="white" :stroke-width="2" /></div>
            <h4>Upwork Direct Contract</h4>
            <p>
              Engage through Upwork's Direct Contract feature with built-in payment protection, hourly tracking,
              and dispute resolution — without going through the open marketplace.
            </p>
          </div>
          <div class="trust-option-card">
            <div class="trust-option-icon"><FileText :size="24" color="white" :stroke-width="2" /></div>
            <h4>Deel Contract</h4>
            <p>
              Use Deel for compliant international contracts with built-in invoicing, payment processing,
              and legal protection — especially useful for cross-border engagements.
            </p>
          </div>
        </div>

        <div class="info-banner trust-fee-banner">
          <span class="info-icon"><Lightbulb :size="24" color="white" :stroke-width="2" /></span>
          <div>
            <span>
              <strong>Third-party platforms charge their own service fees</strong> (typically a percentage of the contract value
              or a fixed transaction fee). If you choose to use one of these platforms, the associated platform fees will be
              added to the engagement cost. The guild does not mark up these fees — they are passed through at cost so you
              pay only what the platform charges. We are happy to help you evaluate which option fits your situation best.
            </span>
          </div>
        </div>

        <p class="section-note">
          Whether you pay directly, through escrow, or via a contract platform — the deliverables, timelines,
          and quality remain exactly the same. These options exist to meet you where you are most comfortable.
        </p>
      </div>
    </section>

    <!-- Pricing Notes Section -->
    <section class="notes-section">
      <div class="content">
        <div class="notes-header">
          <span class="notes-header-icon"><ClipboardList :size="24" :stroke-width="2" /></span>
          <h2>Pricing Notes</h2>
        </div>

        <div class="notes-block">
          <div class="notes-disclaimer">
            <span class="notes-disclaimer-icon"><AlertTriangle :size="20" :stroke-width="2" /></span>
            <div>
              All prices listed on this page are subject to change. Pricing is reviewed periodically and may be adjusted
              based on market conditions, team capacity, operational costs, and the evolving scope of our services.
              Any changes will be communicated to existing partners in advance and will not affect active engagements
              or signed agreements.
            </div>
          </div>
          <ul class="notes-list">
            <li>Sprint pricing reflects development capacity and complexity. Exact scope and cost are determined during sprint planning.</li>
            <li>Sprints are scheduled once the initial payment is confirmed.</li>
            <li>Retainer, Tech Partnership, and Maintenance terms are documented in a separate agreement before work begins.</li>
            <li>Regional pricing adjustments are verified during onboarding and reviewed annually.</li>
            <li>Maintenance and advisory hours are non-transferable between months.</li>
            <li>Third-party payment platform fees (Escrow, Upwork, Deel) are not included in listed prices and are added at cost if you choose to use them.</li>
          </ul>
        </div>
      </div>
    </section>

    <!-- CTA Section -->
    <section class="cta-section">
      <div class="cta-content">
        <h2>Have Questions?</h2>
        <p>
          If anything on this page is unclear or you'd like to discuss how these terms apply to your situation,
          reach out and we'll walk through it together.
        </p>
        <div class="cta-buttons">
          <NuxtLink to="/contact" class="btn btn-primary">Get in Touch</NuxtLink>
          <NuxtLink to="/work-with-us/pricing" class="btn btn-secondary">Back to Pricing</NuxtLink>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import { AlertTriangle, BarChart3, Briefcase, ClipboardList, FileText, Globe, Handshake, Lightbulb, Lock } from 'lucide-vue-next'
useSEO({
  title: 'Pricing FAQ & Terms | Skill-Wanderer',
  description:
    'Regional pricing, payment and trust options, and pricing notes for Skill-Wanderer guild engagements.',
  image: '/cropped-skill-wanderer-logo-768x256.webp',
  keywords: ['pricing terms', 'regional pricing', 'payment options', 'escrow', 'purchasing power pricing'],
  structuredData: createBreadcrumbSchema([
    { name: 'Home', url: 'https://skill-wanderer.com/' },
    { name: 'Work With Us', url: 'https://skill-wanderer.com/work-with-us' },
    { name: 'Pricing', url: 'https://skill-wanderer.com/work-with-us/pricing' },
    { name: 'Pricing FAQ & Terms', url: 'https://skill-wanderer.com/work-with-us/pricing-terms' },
  ]),
})
</script>

<style scoped>
/* Hero */
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
  background: radial-gradient(circle at 30% 50%, rgba(255, 107, 53, 0.1) 0%, transparent 50%);
}

.hero h1 {
  font-size: 3.5rem;
  color: white;
  margin-bottom: 20px;
  position: relative;
  z-index: 1;
}

.hero p {
  font-size: 1.3rem;
  color: var(--light-text);
  opacity: 0.9;
  margin-bottom: 30px;
  position: relative;
  z-index: 1;
  max-width: 900px;
  margin-left: auto;
  margin-right: auto;
}

.back-link {
  color: var(--primary-orange);
  font-weight: 700;
  text-decoration: none;
  font-size: 1rem;
  position: relative;
  z-index: 1;
  transition: opacity 0.3s ease;
}

.back-link:hover {
  opacity: 0.8;
  text-decoration: underline;
}

/* Shared */
.content {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
}

.section-header {
  text-align: center;
  margin-bottom: 50px;
}

.section-header h2 {
  font-size: 2.5rem;
  color: var(--primary-orange);
  margin-bottom: 15px;
}

.section-header p {
  font-size: 1.2rem;
  opacity: 0.85;
}

.section-note {
  text-align: center;
  font-size: 0.95rem;
  opacity: 0.65;
  line-height: 1.6;
  max-width: 700px;
  margin: 0 auto;
}

/* Info Banner */
.info-banner {
  display: flex;
  align-items: flex-start;
  gap: 16px;
  background: linear-gradient(135deg, rgba(255, 107, 53, 0.08), rgba(255, 107, 53, 0.03));
  border: 1px solid rgba(255, 107, 53, 0.2);
  border-radius: 14px;
  padding: 22px 28px;
  text-align: left;
}

.info-icon {
  font-size: 1.8rem;
  flex-shrink: 0;
  margin-top: 2px;
}

.info-banner span {
  font-size: 0.95rem;
  opacity: 0.85;
  line-height: 1.6;
}

.info-banner strong {
  color: var(--primary-orange);
}

/* Regional Section */
.regional-section {
  padding: 80px 20px;
  background: var(--darker-bg);
}

.regional-intro {
  max-width: 800px;
  margin: 0 auto 40px;
  text-align: center;
}

.regional-intro-icon {
  font-size: 3rem;
  margin-bottom: 20px;
}

.regional-intro p {
  font-size: 1.1rem;
  line-height: 1.8;
  opacity: 0.85;
}

.regional-details-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 24px;
  margin-bottom: 40px;
}

.regional-detail-card {
  background: var(--card-bg);
  border: 1px solid rgba(255, 107, 53, 0.12);
  border-radius: 16px;
  padding: 32px 28px;
  transition: all 0.3s ease;
}

.regional-detail-card:hover {
  border-color: rgba(255, 107, 53, 0.35);
  transform: translateY(-4px);
}

.regional-detail-icon {
  font-size: 2rem;
  margin-bottom: 14px;
}

.regional-detail-card h4 {
  color: var(--primary-orange);
  font-size: 1.1rem;
  font-weight: 700;
  margin-bottom: 12px;
}

.regional-detail-card p {
  opacity: 0.8;
  font-size: 0.92rem;
  line-height: 1.7;
  margin: 0;
}

.eligibility-card {
  max-width: 800px;
  margin: 0 auto;
  background: linear-gradient(135deg, rgba(76, 175, 80, 0.08), rgba(76, 175, 80, 0.02));
  border: 1px solid rgba(76, 175, 80, 0.2);
  border-radius: 16px;
  padding: 30px 32px;
}

.eligibility-header {
  display: flex;
  align-items: center;
  gap: 12px;
  margin-bottom: 16px;
}

.eligibility-icon {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 32px;
  height: 32px;
  background: rgba(76, 175, 80, 0.15);
  border-radius: 50%;
  color: #4caf50;
  font-weight: 800;
  font-size: 0.9rem;
  flex-shrink: 0;
}

.eligibility-card h4 {
  color: #4caf50;
  font-size: 1.2rem;
  margin: 0;
}

.eligibility-card p {
  opacity: 0.85;
  line-height: 1.7;
  font-size: 0.95rem;
  margin-bottom: 10px;
}

.eligibility-card p:last-child {
  margin-bottom: 0;
}

/* Trust Section */
.trust-section {
  padding: 80px 20px;
  background: var(--dark-bg);
}

.trust-intro {
  max-width: 800px;
  margin: 0 auto 40px;
  text-align: center;
}

.trust-intro-icon {
  font-size: 3rem;
  margin-bottom: 20px;
}

.trust-intro p {
  font-size: 1.1rem;
  line-height: 1.8;
  opacity: 0.85;
}

.trust-option-block {
  max-width: 800px;
  margin: 0 auto 40px;
  text-align: center;
}

.trust-option-block h3 {
  color: var(--primary-orange);
  font-size: 1.5rem;
  margin-bottom: 14px;
}

.trust-option-block p {
  opacity: 0.85;
  line-height: 1.7;
  font-size: 1rem;
}

.trust-options-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 24px;
  margin-bottom: 40px;
}

.trust-option-card {
  background: var(--card-bg);
  border: 1px solid rgba(255, 107, 53, 0.12);
  border-radius: 16px;
  padding: 32px 28px;
  text-align: center;
  transition: all 0.3s ease;
}

.trust-option-card:hover {
  border-color: rgba(255, 107, 53, 0.35);
  transform: translateY(-4px);
}

.trust-option-icon {
  font-size: 2.2rem;
  margin-bottom: 14px;
}

.trust-option-card h4 {
  color: var(--primary-orange);
  font-size: 1.1rem;
  font-weight: 700;
  margin-bottom: 12px;
}

.trust-option-card p {
  opacity: 0.8;
  font-size: 0.92rem;
  line-height: 1.7;
  margin: 0;
}

.trust-fee-banner {
  margin-bottom: 30px;
}

/* Notes Section */
.notes-section {
  padding: 60px 20px;
  background: var(--darker-bg);
}

.notes-header {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 14px;
  margin-bottom: 40px;
}

.notes-header-icon {
  font-size: 2rem;
}

.notes-header h2 {
  font-size: 2.5rem;
  color: var(--primary-orange);
  margin: 0;
}

.notes-block {
  max-width: 800px;
  margin: 0 auto;
}

.notes-disclaimer {
  display: flex;
  align-items: flex-start;
  gap: 16px;
  background: rgba(255, 193, 7, 0.06);
  border: 1px solid rgba(255, 193, 7, 0.15);
  border-radius: 14px;
  padding: 22px 28px;
  font-size: 0.95rem;
  opacity: 0.85;
  line-height: 1.7;
  margin-bottom: 28px;
}

.notes-disclaimer-icon {
  font-size: 1.5rem;
  flex-shrink: 0;
  margin-top: 2px;
}

.notes-list {
  list-style: none;
  padding: 0;
}

.notes-list li {
  padding: 10px 0;
  padding-left: 25px;
  position: relative;
  opacity: 0.75;
  font-size: 0.95rem;
  line-height: 1.6;
  border-bottom: 1px solid rgba(255, 255, 255, 0.04);
}

.notes-list li:last-child {
  border-bottom: none;
}

.notes-list li::before {
  content: '\2022';
  position: absolute;
  left: 0;
  color: var(--primary-orange);
  font-weight: bold;
  font-size: 1.2rem;
  line-height: 1.4;
}

/* CTA Section */
.cta-section {
  padding: 80px 20px;
  background: var(--dark-bg);
  text-align: center;
}

.cta-content {
  max-width: 800px;
  margin: 0 auto;
}

.cta-content h2 {
  color: white;
  font-size: 2.5rem;
  margin-bottom: 20px;
}

.cta-content p {
  font-size: 1.1rem;
  opacity: 0.85;
  margin-bottom: 30px;
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
  display: inline-block;
  font-size: 1rem;
}

.btn-primary {
  background: linear-gradient(135deg, var(--primary-orange), var(--deep-orange));
  color: white;
}

.btn-primary:hover {
  background: linear-gradient(135deg, var(--deep-orange), var(--primary-orange));
  transform: translateY(-2px);
  box-shadow: 0 10px 30px rgba(255, 107, 53, 0.3);
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

/* Responsive */
@media (max-width: 768px) {
  .hero h1 {
    font-size: 2.5rem;
  }

  .hero p {
    font-size: 1.1rem;
  }

  .section-header h2 {
    font-size: 2rem;
  }

  .regional-details-grid,
  .trust-options-grid {
    grid-template-columns: 1fr;
  }

  .info-banner,
  .notes-disclaimer {
    flex-direction: column;
    align-items: center;
    text-align: center;
  }

  .notes-header h2 {
    font-size: 2rem;
  }
}
</style>
