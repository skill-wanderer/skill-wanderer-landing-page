<template>
  <div class="pricing-page">

    <!-- SECTION 1 — Mission-Driven Pricing Philosophy -->
    <section class="hero">
      <div class="content hero-content">
        <p class="eyebrow">How pricing works at the guild</p>
        <h1>Pricing</h1>
        <p class="hero-copy">
          Pricing exists so the guild can sustain itself. Every engagement funds senior-led delivery
          and reinvests directly into free education. There are no investors, no ad revenue, and no
          hidden margins. What you pay is what it costs to do the work well — and to keep the
          learning ecosystem running alongside it.
        </p>
        <div class="hero-actions">
          <a href="#choose-path" class="btn btn-primary">Find Your Path</a>
          <NuxtLink to="/contact" class="btn btn-secondary">Contact the Guild</NuxtLink>
        </div>
      </div>
    </section>

    <!-- Pricing Disclaimer -->
    <section class="pricing-disclaimer">
      <div class="content">
        <div class="disclaimer-banner">
          <span class="disclaimer-icon">ℹ️</span>
          <p>
            All prices shown are indicative and subject to change based on project scope,
            complexity, and specific requirements. Final pricing is confirmed during the
            discovery and scoping phase of each engagement.
          </p>
        </div>
      </div>
    </section>

    <!-- SECTION 2 — Choose Your Path -->
    <section id="choose-path" class="path-section">
      <div class="content">
        <div class="section-header section-header--center">
          <h2>Choose Your Path</h2>
          <p>
            The guild works with individuals and organizations differently.
            Pick the path that matches how you work, and everything else follows.
          </p>
        </div>

        <div class="path-tabs">
          <button
            class="path-tab"
            :class="{ 'path-tab--active': activeTab === 'individual' }"
            @click="activeTab = 'individual'"
          >
            👤
            <span class="path-tab-label">I'm an Individual</span>
            <span class="path-tab-desc">Coaches, consultants, teachers, solo founders</span>
          </button>

          <button
            class="path-tab"
            :class="{ 'path-tab--active': activeTab === 'organization' }"
            @click="activeTab = 'organization'"
          >
            🏢
            <span class="path-tab-label">I'm an Organization</span>
            <span class="path-tab-desc">Agencies, startups, institutions</span>
          </button>
        </div>
      </div>
    </section>

    <!-- ═══════════════════════════════════════════════ -->
    <!-- SEGMENT 1 — INDIVIDUAL CLIENTS                 -->
    <!-- ═══════════════════════════════════════════════ -->
    <section v-show="activeTab === 'individual'" id="individual" class="segment-section segment-individual">
      <div class="content">
        <div class="segment-label">
          👤
          <span>For Individuals</span>
        </div>
        <div class="section-header section-header--left">
          <h2>Quick Build</h2>
          <p>
            A custom-coded site delivered by the guild. No templates, no CMS overhead.
            You get a clear online presence that communicates your offer, captures leads,
            and works on every device.
          </p>
        </div>

        <div class="package-grid">
          <article class="package-card package-card--individual">
            <div class="package-top">
              <p class="package-kicker">Entry point</p>
              <h3>Foundation</h3>
              <p class="package-copy">
                A clean, professional site that communicates who you are and what you offer.
                Multi-page layout, responsive design, fast loading, and launch support included.
              </p>
            </div>
            <div class="package-price">
              <span class="price-amount">$1,500 – $2,200</span>
              <span class="price-note">~2 week build after discovery & mock-up sign-off</span>
            </div>
            <ul class="package-outcomes">
              <li>Clear messaging and visual identity</li>
              <li>Mobile-optimized, fast performance</li>
              <li>Lead capture or booking integration</li>
              <li>3 months of content care included</li>
            </ul>
          </article>

          <article class="package-card package-card--individual">
            <div class="package-top">
              <p class="package-kicker">Full launch</p>
              <h3>Growth</h3>
              <p class="package-copy">
                Everything in Foundation plus deeper integrations — onboarding flows,
                email automation, analytics, and multi-step lead funnels.
              </p>
            </div>
            <div class="package-price">
              <span class="price-amount">$2,200 – $3,500</span>
              <span class="price-note">~3 week build after discovery & mock-up sign-off</span>
            </div>
            <ul class="package-outcomes">
              <li>Advanced lead capture and intake forms</li>
              <li>Email and booking automation</li>
              <li>Analytics and conversion tracking</li>
              <li>3 months of content care included</li>
            </ul>
          </article>
        </div>

        <!-- Light Sprint Work -->
        <div class="subsection">
          <div class="section-header section-header--left">
            <h2>Light Sprint Work</h2>
            <p>
              Small, focused improvements for systems that already exist.
              Each sprint is a two-week cycle with a clear scope and deliverable.
              No long-term commitment required.
            </p>
          </div>

          <div class="sprint-grid">
            <article class="sprint-card">
              <div class="sprint-header">
                <h4>Trust Sprint</h4>
                <span class="sprint-price">from $1,500</span>
              </div>
              <p>
                A first engagement to validate the working relationship.
                Small scope, senior-led review, low risk.
              </p>
            </article>

            <article class="sprint-card">
              <div class="sprint-header">
                <h4>Starter Sprint</h4>
                <span class="sprint-price">from $2,000</span>
              </div>
              <p>
                A defined feature or improvement in an existing system.
                Clear deliverable, two-week turnaround.
              </p>
            </article>

            <article class="sprint-card">
              <div class="sprint-header">
                <h4>Builder Sprint</h4>
                <span class="sprint-price">from $3,000</span>
              </div>
              <p>
                Larger capability work — new sections, integrations,
                or system-level improvements.
              </p>
            </article>
          </div>

          <div class="helper-banner">
            <span class="helper-icon">🧭</span>
            <p>
              Not sure which one fits?
              <NuxtLink to="/admiral-orion" class="inline-link">Ask Admiral Orion</NuxtLink>
              for a recommendation, or
              <NuxtLink to="/contact" class="inline-link">reach out directly</NuxtLink>
              and we'll scope it together.
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- ═══════════════════════════════════════════════ -->
    <!-- SEGMENT 2 — ORGANIZATIONS                      -->
    <!-- ═══════════════════════════════════════════════ -->
    <section v-show="activeTab === 'organization'" id="organization" class="segment-section segment-org">
      <div class="content">
        <div class="segment-label">
          🏢
          <span>For Organizations</span>
        </div>
        <div class="section-header section-header--left">
          <h2>Senior-Led Delivery System</h2>
          <p>
            You're not hiring a freelancer. You're plugging into a delivery system.
            Every engagement is architected by the Guild Master, executed in parallel
            by guild artisans, and delivered in predictable two-week cycles.
          </p>
        </div>

        <!-- Sprint Model -->
        <article class="org-card">
          <div class="org-card-header">
            <div>
              <p class="package-kicker">Sprint capacity</p>
              <h3>Senior-Led Sprint Cycle</h3>
            </div>
            <div class="price-pill">from $5,000 / 2-week cycle</div>
          </div>
          <p class="org-copy">
            A two-week development cycle with senior architectural oversight,
            parallel artisan execution, and structured review. Scope is confirmed
            during sprint planning. Cost is predictable. Risk is contained.
          </p>
          <div class="org-grid">
            <div class="org-detail">
              🛡️
              <div>
                <strong>Senior oversight</strong>
                <span>Guild Master leads architecture and code review</span>
              </div>
            </div>
            <div class="org-detail">
              📚
              <div>
                <strong>Parallel execution</strong>
                <span>Multiple artisans working in coordinated tracks</span>
              </div>
            </div>
            <div class="org-detail">
              ✅
              <div>
                <strong>Risk mitigation</strong>
                <span>Scope locked per cycle, reviewed before next</span>
              </div>
            </div>
            <div class="org-detail">
              🧮
              <div>
                <strong>Predictable cost</strong>
                <span>Sprint band confirmed before commitment</span>
              </div>
            </div>
          </div>
        </article>

        <!-- Retainer Model -->
        <article class="org-card">
          <div class="org-card-header">
            <div>
              <p class="package-kicker">Ongoing capacity</p>
              <h3>Dedicated Engineering Pod</h3>
            </div>
            <div class="price-pill">from $15,000 / month</div>
          </div>
          <p class="org-copy">
            A monthly allocation of guild capacity reserved for your product.
            No hiring overhead, no ramp-up time. Consistent team, consistent delivery,
            with the option to scale up or down as your roadmap evolves.
          </p>
          <div class="org-grid">
            <div class="org-detail">
              👥
              <div>
                <strong>Scalable capacity</strong>
                <span>Adjust team size as priorities shift</span>
              </div>
            </div>
            <div class="org-detail">
              💼
              <div>
                <strong>No hiring overhead</strong>
                <span>Skip recruiting, onboarding, and HR complexity</span>
              </div>
            </div>
            <div class="org-detail">
              🔄
              <div>
                <strong>Consistent delivery</strong>
                <span>Same team, same standards, sprint after sprint</span>
              </div>
            </div>
            <div class="org-detail">
              🤝
              <div>
                <strong>Long-term collaboration</strong>
                <span>Strategic partnership, not transactional billing</span>
              </div>
            </div>
          </div>
        </article>

        <!-- Enterprise Projects -->
        <article class="org-card">
          <div class="org-card-header">
            <div>
              <p class="package-kicker">Custom systems</p>
              <h3>Enterprise Projects</h3>
            </div>
            <div class="price-pill">from $30,000</div>
          </div>
          <p class="org-copy">
            Purpose-built platforms, AI integrations, cloud infrastructure, and complex
            multi-system architectures. Scoped as a multi-sprint engagement with
            dedicated senior oversight from discovery through launch.
          </p>
          <div class="org-grid">
            <div class="org-detail">
              🧠
              <div>
                <strong>AI &amp; automation</strong>
                <span>Custom models, pipelines, intelligent workflows</span>
              </div>
            </div>
            <div class="org-detail">
              ☁️
              <div>
                <strong>Cloud architecture</strong>
                <span>Kubernetes, serverless, multi-region deployments</span>
              </div>
            </div>
            <div class="org-detail">
              🌐
              <div>
                <strong>Platform engineering</strong>
                <span>SaaS, marketplaces, multi-tenant systems</span>
              </div>
            </div>
            <div class="org-detail">
              ✅
              <div>
                <strong>Full lifecycle</strong>
                <span>Discovery, build, launch, and knowledge transfer</span>
              </div>
            </div>
          </div>
        </article>

        <!-- For Agencies & Partners -->
        <div class="agency-subsection">
          <div class="section-header section-header--left">
            <h2>For Agencies &amp; Partners</h2>
            <p>
              If you need reliable, full-cycle development for your own clients, the guild operates
              as a white-label engineering partner.
            </p>
          </div>

          <div class="agency-grid">
            <div class="agency-card">
              <h4>White-label delivery</h4>
              <p>We build under your brand. Your client never sees the guild unless you want them to.</p>
            </div>
            <div class="agency-card">
              <h4>Margin-friendly pricing</h4>
              <p>Our rates are structured so you can resell with healthy margins built in.</p>
            </div>
            <div class="agency-card">
              <h4>Reliable development partner</h4>
              <p>Full-cycle delivery — design, build, and launch. Consistent sprint capacity you can plan around.</p>
            </div>
            <div class="agency-card">
              <h4>Mission advantage</h4>
              <p>Every project through the guild funds free education — a genuine CSR story for your proposals.</p>
            </div>
          </div>

          <div class="agency-cta">
            <p>
              Interested in a partnership conversation?
              <NuxtLink to="/work-with-us/become-a-partner" class="inline-link">Learn about guild partnerships</NuxtLink>
              or
              <NuxtLink to="/contact" class="inline-link">reach out directly</NuxtLink>.
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- SECTION — How Work Happens -->
    <section class="how-section">
      <div class="content">
        <div class="section-header section-header--center">
          <h2>How Work Happens</h2>
          <p>
            Every engagement — individual or organization — follows the same rhythm.
          </p>
        </div>

        <div class="rhythm-grid">
          <div class="rhythm-card">
            <div class="rhythm-number">01</div>
            <h4>Two-to-three-week work blocks</h4>
            <p>Work is scoped, planned, and delivered in focused two-to-three-week blocks. Each cycle ends with a review.</p>
          </div>
          <div class="rhythm-card">
            <div class="rhythm-number">02</div>
            <h4>Parallel execution</h4>
            <p>Guild artisans work in coordinated tracks under senior oversight, so more gets done within each cycle.</p>
          </div>
          <div class="rhythm-card">
            <div class="rhythm-number">03</div>
            <h4>Scope evolves with you</h4>
            <p>Priorities can shift between cycles. You're never locked into a rigid spec — just a clear rhythm.</p>
          </div>
          <div class="rhythm-card">
            <div class="rhythm-number">04</div>
            <h4>Progress over deliverables</h4>
            <p>The focus is on measurable forward movement, not checkbox compliance against an outdated plan.</p>
          </div>
        </div>
      </div>
    </section>

    <!-- SECTION — Ongoing Support -->
    <section class="continuity-section">
      <div class="content continuity-content">
        <h2>After Launch, We Stay With Your System</h2>
        <p>
          Software doesn't stop evolving the day it ships. Once delivery wraps,
          many clients continue working with the guild — not as a maintenance
          contract, but as an ongoing collaboration. Small improvements,
          performance checks, adjustments as your context changes.
        </p>
        <ul class="continuity-list">
          <li>Incremental improvements and refinements</li>
          <li>Dependency updates and performance monitoring</li>
          <li>Adjustments as your audience or goals evolve</li>
          <li>Flexible scope — scaled to what you actually need</li>
        </ul>
        <p class="continuity-note">
          Ongoing support typically starts from <strong>$300/month</strong> and
          is tailored to each system. It's usually discussed after the initial
          delivery, once you've seen how things run.
        </p>
      </div>
    </section>

    <!-- SECTION — CTA -->
    <section class="cta-section">
      <div class="content cta-content">
        <h2>Ready to plug in?</h2>
        <p>
          Talk to Admiral Orion for a guided recommendation, or contact us directly
          to scope your starting point. No pressure, no pitch deck — just a clear conversation
          about what you need and how the guild can help.
        </p>
        <div class="cta-actions">
          <NuxtLink to="/admiral-orion" class="btn btn-primary">Talk to Admiral Orion</NuxtLink>
          <NuxtLink to="/contact" class="btn btn-secondary">Contact Directly</NuxtLink>
        </div>
      </div>
    </section>

  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
// Icons replaced with emojis

throw createError({ statusCode: 404, statusMessage: 'Page Not Found' })

const activeTab = ref<'individual' | 'organization'>('individual')

useSEO({
  title: 'Pricing | Skill-Wanderer',
  description:
    'Senior-led sprint delivery for individuals and organizations. Clear starting prices, two-week cycles, and mission-driven sustainability.',
  image: '/cropped-skill-wanderer-logo-768x256.webp',
  keywords: [
    'software development pricing',
    'sprint delivery',
    'senior-led development',
    'guild pricing',
    'engineering pod',
    'enterprise software',
  ],
  structuredData: createBreadcrumbSchema([
    { name: 'Home', url: 'https://skill-wanderer.com/' },
    { name: 'Work With Us', url: 'https://skill-wanderer.com/work-with-us' },
    { name: 'Pricing', url: 'https://skill-wanderer.com/work-with-us/pricing' },
  ]),
})
</script>

<style scoped>
/* ── Base ──────────────────────────────────────────── */
.pricing-page {
  background: var(--dark-bg);
}

.content {
  max-width: 1120px;
  margin: 0 auto;
  padding: 0 20px;
}

/* ── Hero ──────────────────────────────────────────── */
.hero {
  background:
    radial-gradient(circle at top left, rgba(255, 107, 53, 0.18), transparent 35%),
    linear-gradient(135deg, var(--darker-bg) 0%, var(--dark-bg) 100%);
  padding: 150px 20px 90px;
}

.hero-content {
  max-width: 820px;
  text-align: center;
}

.eyebrow {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 9px 16px;
  border-radius: 999px;
  border: 1px solid rgba(255, 107, 53, 0.24);
  background: rgba(255, 107, 53, 0.08);
  color: var(--primary-orange);
  font-size: 0.84rem;
  font-weight: 700;
  letter-spacing: 0.08em;
  text-transform: uppercase;
}

.hero h1 {
  margin: 22px 0 18px;
  font-size: clamp(3rem, 7vw, 4.75rem);
  line-height: 0.95;
  color: white;
}

.hero-copy {
  max-width: 720px;
  margin: 0 auto;
  font-size: 1.15rem;
  line-height: 1.8;
  color: rgba(255, 255, 255, 0.82);
}

.hero-actions,
.cta-actions {
  display: flex;
  justify-content: center;
  gap: 14px;
  flex-wrap: wrap;
  margin-top: 32px;
}

/* ── Pricing Disclaimer ────────────────────────────── */
.pricing-disclaimer {
  padding: 0 20px;
}

.disclaimer-banner {
  max-width: 860px;
  margin: -30px auto 0;
  display: flex;
  align-items: flex-start;
  gap: 12px;
  padding: 16px 22px;
  border-radius: 10px;
  border: 1px solid rgba(255, 107, 53, 0.2);
  background: rgba(255, 107, 53, 0.06);
}

.disclaimer-icon {
  flex-shrink: 0;
  font-size: 1.15rem;
  line-height: 1.6;
}

.disclaimer-banner p {
  margin: 0;
  font-size: 0.88rem;
  line-height: 1.6;
  color: rgba(255, 255, 255, 0.72);
}

/* ── Buttons ───────────────────────────────────────── */
.btn {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  min-height: 48px;
  padding: 0 22px;
  border-radius: 999px;
  font-weight: 700;
  text-decoration: none;
  transition: transform 0.25s ease, border-color 0.25s ease, background 0.25s ease;
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

/* ── Choose Your Path — Tabs ───────────────────────── */
.path-section {
  padding: 80px 20px;
  background: var(--darker-bg);
}

.path-tabs {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 0;
  border-radius: 20px;
  overflow: hidden;
  border: 1px solid rgba(255, 107, 53, 0.16);
}

.path-tab {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
  padding: 28px 24px;
  border: none;
  background: var(--card-bg);
  color: rgba(255, 255, 255, 0.55);
  cursor: pointer;
  transition: background 0.25s ease, color 0.25s ease;
  font-family: inherit;
  text-align: center;
}

.path-tab:first-child {
  border-right: 1px solid rgba(255, 107, 53, 0.16);
}

.path-tab:hover {
  background: rgba(255, 107, 53, 0.06);
  color: rgba(255, 255, 255, 0.8);
}

.path-tab--active {
  background: rgba(255, 107, 53, 0.1);
  color: var(--primary-orange);
  box-shadow: inset 0 -3px 0 var(--primary-orange);
}

.path-tab--active:hover {
  background: rgba(255, 107, 53, 0.12);
  color: var(--primary-orange);
}

.path-tab-label {
  font-size: 1.25rem;
  font-weight: 700;
  color: inherit;
}

.path-tab--active .path-tab-label {
  color: white;
}

.path-tab-desc {
  font-size: 0.88rem;
  color: rgba(255, 255, 255, 0.5);
  line-height: 1.5;
}

/* ── Section headers ───────────────────────────────── */
.section-header {
  margin-bottom: 34px;
}

.section-header--center {
  text-align: center;
}

.section-header--left {
  text-align: left;
}

.section-header h2 {
  margin: 0 0 12px;
  font-size: clamp(2rem, 4vw, 3rem);
  color: white;
}

.section-header p {
  max-width: 760px;
  margin: 0;
  font-size: 1.05rem;
  line-height: 1.75;
  color: rgba(255, 255, 255, 0.78);
}

/* ── Segment sections ──────────────────────────────── */
.segment-section {
  padding: 80px 20px;
  scroll-margin-top: 90px;
}

.segment-individual {
  background: var(--dark-bg);
}

.segment-org {
  background: var(--darker-bg);
}

.segment-label {
  display: inline-flex;
  align-items: center;
  gap: 10px;
  margin-bottom: 22px;
  padding: 8px 16px;
  border-radius: 999px;
  border: 1px solid rgba(255, 107, 53, 0.22);
  background: rgba(255, 107, 53, 0.08);
  color: var(--primary-orange);
  font-size: 0.82rem;
  font-weight: 800;
  letter-spacing: 0.08em;
  text-transform: uppercase;
}

/* ── Individual package cards ──────────────────────── */
.package-grid {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 22px;
}

.package-card {
  display: flex;
  flex-direction: column;
  padding: 28px;
  border-radius: 24px;
  border: 1px solid rgba(255, 107, 53, 0.16);
  background:
    linear-gradient(180deg, rgba(255, 255, 255, 0.03), rgba(255, 255, 255, 0.015)),
    var(--card-bg);
}

.package-kicker {
  margin: 0 0 10px;
  color: var(--primary-orange);
  font-size: 0.8rem;
  font-weight: 800;
  letter-spacing: 0.08em;
  text-transform: uppercase;
}

.package-top {
  flex: 1;
}

.package-top h3 {
  margin: 0 0 10px;
  font-size: clamp(1.5rem, 3vw, 2rem);
  color: white;
}

.package-copy {
  margin: 0;
  color: rgba(255, 255, 255, 0.72);
  line-height: 1.7;
}

.package-price {
  margin: 20px 0;
  padding: 16px;
  border-radius: 16px;
  background: rgba(255, 107, 53, 0.06);
  border: 1px solid rgba(255, 107, 53, 0.14);
}

.price-amount {
  display: block;
  font-size: 1.4rem;
  font-weight: 800;
  color: var(--primary-orange);
}

.price-note {
  display: block;
  margin-top: 6px;
  font-size: 0.88rem;
  color: rgba(255, 255, 255, 0.6);
}

.package-outcomes {
  margin: 0;
  padding: 0;
  list-style: none;
}

.package-outcomes li {
  position: relative;
  padding-left: 20px;
  color: rgba(255, 255, 255, 0.82);
  line-height: 1.7;
}

.package-outcomes li + li {
  margin-top: 8px;
}

.package-outcomes li::before {
  content: '→';
  position: absolute;
  left: 0;
  color: var(--primary-orange);
  font-weight: 700;
}

/* ── Subsection (Light Sprint Work) ────────────────── */
.subsection {
  margin-top: 56px;
}

.sprint-grid {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 18px;
}

.sprint-card {
  padding: 24px;
  border-radius: 20px;
  border: 1px solid rgba(255, 107, 53, 0.14);
  background: rgba(255, 255, 255, 0.03);
}

.sprint-header {
  display: flex;
  justify-content: space-between;
  align-items: baseline;
  gap: 12px;
  margin-bottom: 12px;
}

.sprint-header h4 {
  margin: 0;
  color: white;
  font-size: 1.1rem;
}

.sprint-price {
  flex-shrink: 0;
  color: var(--primary-orange);
  font-weight: 800;
  font-size: 0.95rem;
}

.sprint-card p {
  margin: 0;
  color: rgba(255, 255, 255, 0.72);
  line-height: 1.65;
}

/* ── Helper banner ─────────────────────────────────── */
.helper-banner {
  display: grid;
  grid-template-columns: auto 1fr;
  gap: 14px;
  align-items: start;
  margin-top: 26px;
  padding: 22px 24px;
  border-radius: 18px;
  border: 1px solid rgba(100, 181, 246, 0.2);
  background: linear-gradient(135deg, rgba(100, 181, 246, 0.08), rgba(100, 181, 246, 0.02));
}

.helper-icon {
  color: #9ec9ff;
}

.helper-banner p {
  margin: 0;
  color: rgba(255, 255, 255, 0.84);
  line-height: 1.7;
}

.inline-link {
  color: white;
  font-weight: 700;
  text-decoration: none;
}

.inline-link:hover {
  text-decoration: underline;
}

/* ── Organization cards ────────────────────────────── */
.org-card {
  margin-top: 22px;
  padding: 28px;
  border-radius: 24px;
  border: 1px solid rgba(255, 107, 53, 0.16);
  background:
    linear-gradient(180deg, rgba(255, 255, 255, 0.03), rgba(255, 255, 255, 0.015)),
    var(--card-bg);
  scroll-margin-top: 110px;
}

.org-card:first-of-type {
  margin-top: 0;
}

.org-card-header {
  display: flex;
  justify-content: space-between;
  align-items: start;
  gap: 20px;
}

.org-card-header h3 {
  margin: 0;
  font-size: clamp(1.5rem, 3vw, 2rem);
  color: white;
}

.price-pill {
  flex-shrink: 0;
  padding: 12px 16px;
  border-radius: 999px;
  border: 1px solid rgba(255, 107, 53, 0.18);
  background: rgba(255, 107, 53, 0.08);
  color: var(--primary-orange);
  font-weight: 800;
  white-space: nowrap;
}

.org-copy {
  margin: 16px 0 0;
  max-width: 800px;
  color: rgba(255, 255, 255, 0.76);
  line-height: 1.75;
}

.org-grid {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 14px;
  margin-top: 22px;
}

.org-detail {
  display: flex;
  gap: 14px;
  align-items: start;
  padding: 18px;
  border-radius: 16px;
  background: rgba(255, 255, 255, 0.035);
  border: 1px solid rgba(255, 255, 255, 0.06);
  color: var(--primary-orange);
}

.org-detail div {
  display: flex;
  flex-direction: column;
  gap: 4px;
}

.org-detail strong {
  color: white;
  font-size: 0.95rem;
}

.org-detail span {
  color: rgba(255, 255, 255, 0.65);
  font-size: 0.88rem;
  line-height: 1.5;
}

/* ── How Work Happens ──────────────────────────────── */
.how-section {
  padding: 80px 20px;
  background: var(--dark-bg);
}

.rhythm-grid {
  display: grid;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  gap: 18px;
}

.rhythm-card {
  padding: 24px;
  border-radius: 20px;
  border: 1px solid rgba(255, 107, 53, 0.14);
  background: rgba(255, 255, 255, 0.03);
}

.rhythm-number {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 36px;
  height: 36px;
  margin-bottom: 14px;
  border-radius: 10px;
  background: rgba(255, 107, 53, 0.12);
  color: var(--primary-orange);
  font-weight: 800;
  font-size: 0.85rem;
}

.rhythm-card h4 {
  margin: 0 0 10px;
  color: white;
  font-size: 1.05rem;
}

.rhythm-card p {
  margin: 0;
  color: rgba(255, 255, 255, 0.72);
  line-height: 1.65;
}

/* ── For Agencies (inside org segment) ─────────────── */
.agency-subsection {
  margin-top: 44px;
  padding-top: 44px;
  border-top: 1px solid rgba(255, 107, 53, 0.12);
}

.agency-grid {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 18px;
}

.agency-card {
  padding: 24px;
  border-radius: 20px;
  border: 1px solid rgba(255, 107, 53, 0.14);
  background: rgba(255, 255, 255, 0.03);
}

.agency-card h4 {
  margin: 0 0 10px;
  color: var(--primary-orange);
  font-size: 1rem;
}

.agency-card p {
  margin: 0;
  color: rgba(255, 255, 255, 0.72);
  line-height: 1.65;
}

.agency-cta {
  margin-top: 22px;
  padding: 22px 24px;
  border-radius: 18px;
  border: 1px solid rgba(255, 255, 255, 0.08);
  background: rgba(255, 255, 255, 0.02);
}

.agency-cta p {
  margin: 0;
  color: rgba(255, 255, 255, 0.78);
  line-height: 1.7;
}

/* ── Ongoing Support (Continuity) ───────────────────── */
.continuity-section {
  padding: 72px 20px;
  background: var(--darker-bg);
  border-top: 1px solid rgba(255, 107, 53, 0.1);
}

.continuity-content {
  max-width: 720px;
}

.continuity-content h2 {
  margin: 0 0 16px;
  font-size: clamp(1.6rem, 3.5vw, 2.25rem);
  color: white;
}

.continuity-content > p {
  margin: 0;
  color: rgba(255, 255, 255, 0.78);
  line-height: 1.8;
  font-size: 1.05rem;
}

.continuity-list {
  margin: 22px 0;
  padding: 0;
  list-style: none;
}

.continuity-list li {
  position: relative;
  padding-left: 20px;
  color: rgba(255, 255, 255, 0.78);
  line-height: 1.75;
}

.continuity-list li + li {
  margin-top: 6px;
}

.continuity-list li::before {
  content: '→';
  position: absolute;
  left: 0;
  color: var(--primary-orange);
  font-weight: 700;
}

.continuity-note {
  margin-top: 18px;
  padding: 18px 20px;
  border-radius: 14px;
  border: 1px solid rgba(255, 255, 255, 0.08);
  background: rgba(255, 255, 255, 0.025);
  color: rgba(255, 255, 255, 0.68);
  font-size: 0.95rem;
  line-height: 1.7;
}

.continuity-note strong {
  color: var(--primary-orange);
  font-weight: 800;
}

/* ── CTA ───────────────────────────────────────────── */
.cta-section {
  padding: 80px 20px;
  background:
    radial-gradient(circle at bottom right, rgba(255, 107, 53, 0.15), transparent 32%),
    var(--dark-bg);
}

.cta-content {
  text-align: center;
  max-width: 680px;
}

.cta-content h2 {
  margin: 0 0 14px;
  font-size: clamp(2rem, 4vw, 3rem);
  color: white;
}

.cta-content p {
  margin: 0;
  color: rgba(255, 255, 255, 0.78);
  line-height: 1.75;
  font-size: 1.08rem;
}

/* ── Utilities ─────────────────────────────────────── */
.sr-only {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border: 0;
}

/* ── Responsive ────────────────────────────────────── */
@media (max-width: 960px) {
  .path-tabs,
  .package-grid,
  .org-grid,
  .agency-grid {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }

  .sprint-grid,
  .rhythm-grid {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }

  .org-card-header {
    flex-direction: column;
  }

  .price-pill {
    white-space: normal;
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

  .path-tabs,
  .package-grid,
  .sprint-grid,
  .rhythm-grid,
  .org-grid,
  .agency-grid {
    grid-template-columns: 1fr;
  }

  .path-tabs {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }

  .path-tab:first-child {
    border-right: 1px solid rgba(255, 107, 53, 0.16);
  }

  .path-tab {
    padding: 20px 12px;
  }

  .path-tab-label {
    font-size: 1rem;
  }

  .package-card,
  .org-card {
    padding: 22px;
  }

  .helper-banner {
    grid-template-columns: 1fr;
  }
}
</style>
