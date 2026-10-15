<template>
  <div>
    <!-- Hero -->
    <section class="hero">
      <span class="hero-eyebrow">How It Works</span>
      <h1>Try Your Idea Before You Commit</h1>
      <p>
        For accepted projects we build a free working prototype first. If you like it, we launch it with no
        development fee and look after it for a monthly fee. If not, you walk away and owe nothing.
      </p>
      <ul class="scope-chips">
        <li>Websites</li>
        <li>Web apps</li>
        <li>Mobile apps</li>
        <li>AI tools</li>
      </ul>
      <p class="hero-scope-note">
        Every project is handled A to Z: design, build, setup, and deployment are all part of the work, not
        extra line items.
      </p>
      <div class="hero-actions">
        <NuxtLink to="/contact" class="btn btn-primary">Tell Us About Your Idea</NuxtLink>
        <a href="#how-it-works" class="btn btn-secondary">See the 3 Steps</a>
      </div>
      <span class="launch-badge">Free Prototype · No Development Fee · No Lock-In</span>
      <p class="hero-plan-note">
        Only need a simple website? <a href="#plans">See the $8 a month Hosting-Only Plan</a>
      </p>
    </section>

    <!-- How It Works: the same 3 steps used across the site -->
    <section id="how-it-works" class="process-section">
      <div class="content">
        <div class="section-header">
          <h2>Three Simple Steps</h2>
          <p>You react to something real before you spend anything, and you can stop after any step.</p>
        </div>

        <div class="step-list">
          <article class="step-card">
            <div class="step-number">1</div>
            <div class="step-body">
              <h3>Tell Us Your Idea</h3>
              <p>
                Send a short message through the contact form, or email Quan directly. Your existing site,
                LinkedIn, and a few plain sentences about your idea are enough. There is no long discovery
                process.
              </p>
              <p class="step-note">
                Quan reads every message himself and replies with a time for one short call. He takes one call
                a day, so he keeps time to build and teach.
              </p>
            </div>
            <ImageSlot name="plan/idea" group="planSteps" class="step-image" />
          </article>

          <article class="step-card">
            <div class="step-number">2</div>
            <div class="step-body">
              <div class="step-head">
                <h3>Get a Free Working Prototype, Then Decide</h3>
                <span class="step-badge">Free</span>
              </div>
              <ul class="phase-list">
                <li>For accepted projects we build the first prototype at no cost, so both sides have something real to react to.</li>
                <li>We review it together: what works, what needs to change, the features and integrations you need, and the real size of the project.</li>
                <li>If the direction turns out to be materially off, we may build a second prototype. Otherwise we continue from the first.</li>
                <li>With the scope clear, we confirm the exact monthly price. There is no obligation to continue just because a prototype exists.</li>
              </ul>
            </div>
            <ImageSlot name="plan/prototype" group="planSteps" class="step-image" />
          </article>

          <article class="step-card">
            <div class="step-number">3</div>
            <div class="step-body">
              <h3>Launch and Grow Together</h3>
              <p>
                We complete the agreed scope, normally with up to <strong>2 structured revision rounds before
                launch</strong>. There is no development fee. After launch, a monthly fee covers hosting,
                maintenance, support and occasional changes, and we stay on as your tech partner for as long as
                it is useful to you.
              </p>
            </div>
            <ImageSlot name="plan/launch" group="planSteps" class="step-image" />
          </article>
        </div>

        <p class="steps-note">
          On the <a href="#plans">Hosting-Only Plan</a> the steps are the same, just smaller: one prototype, one
          revision round, then a flat $8 a month for hosting.
        </p>
      </div>
    </section>

    <!-- What You Pay: two plans, neither with a development fee -->
    <section id="plans" class="pay-section">
      <div class="content">
        <div class="section-header">
          <h2>What You Pay</h2>
          <p>Two plans. Neither has a development fee, so the only bill is the monthly fee.</p>
        </div>

        <div class="plan-grid">
          <article class="plan-card plan-card--lite">
            <span class="plan-badge">Most affordable</span>
            <h3>Hosting-Only Plan</h3>
            <p class="plan-for">For a small, simple website</p>
            <p class="plan-price">
              <span class="plan-amount">$8</span> USD a month, <span class="plan-price-extra">plus your own domain</span>
            </p>
            <p class="plan-price-note">The lowest-risk way to get a decent website online.</p>
            <ul class="plan-list">
              <li>No development fee</li>
              <li>1 free working prototype</li>
              <li>1 revision round before launch</li>
              <li>Hosting after launch, so your site stays online</li>
              <li class="plan-list-no">No maintenance, support or changes after launch</li>
            </ul>
            <p class="plan-payment">Paid monthly through PayPal. Leave anytime.</p>
            <NuxtLink to="/contact?topic=hosting-only" class="btn btn-primary">Ask About This Plan</NuxtLink>
          </article>

          <article class="plan-card">
            <h3>Care Plan</h3>
            <p class="plan-for">For websites, web apps, mobile apps and AI tools</p>
            <p class="plan-price"><span class="plan-amount plan-amount--text">Priced to your project</span></p>
            <p class="plan-price-note">
              Based on the scope, complexity and support you need, and confirmed after the prototype review,
              never before.
            </p>
            <ul class="plan-list">
              <li>No development fee</li>
              <li>A free working prototype, and a second one if the direction changes significantly</li>
              <li>Up to 2 structured revision rounds before launch</li>
              <li>Hosting, maintenance, support and occasional changes</li>
            </ul>
            <p class="plan-payment">Paid monthly or quarterly, depending on your situation.</p>
            <NuxtLink to="/contact" class="btn btn-secondary">Tell Us About Your Idea</NuxtLink>
          </article>
        </div>

        <div class="lite-story">
          <h3>Why only $8 a month?</h3>
          <p>
            AI now lets us build a simple website far faster than before, and the servers we already run for
            Skill-Wanderer have room to spare. Together, that lets us offer a decent website to people who could
            not afford one until now. Like all our client work, it also helps fund free education.
          </p>
        </div>

        <div class="care-box">
          <h3>What the monthly fee covers</h3>
          <ul class="care-list">
            <li>Hosting, so your site or app stays online <span class="care-tag care-tag--both">Both plans</span></li>
            <li>Maintenance, so it stays secure and up to date <span class="care-tag">Care Plan</span></li>
            <li>Support when something isn't working, or when you're not sure what you need next <span class="care-tag">Care Plan</span></li>
            <li>Occasional changes as your business grows <span class="care-tag">Care Plan</span></li>
            <li>Bigger changes or new features: we agree the scope and price with you first <span class="care-tag care-tag--both">Both plans</span></li>
          </ul>
          <p class="care-note">
            Your domain is not included on either plan. It is registered in your name and you pay for it yourself,
            so it always stays yours.
          </p>
        </div>
      </div>
    </section>

    <!-- No Vendor Lock-In -->
    <section class="lockin-section">
      <div class="content">
        <div class="section-header">
          <h2>You Can Always Leave</h2>
        </div>

        <ImageSlot name="service-model/ownership" class="lockin-image" />

        <div class="lockin-statement">
          <p>
            The goal is for clients to stay because the service is useful, not because leaving is
            technically impossible.
          </p>
        </div>

        <ul class="lockin-list">
          <li><strong>You own your domain.</strong> It's in your name, not ours.</li>
          <li><strong>You can see everything.</strong> You get access to the code and the configuration.</li>
          <li><strong>Read-only server access, where it applies.</strong> You can look at the server too, without the risk of breaking it.</li>
          <li><strong>Move anytime.</strong> Migrate the project yourself, or with another provider, whenever you wish.</li>
        </ul>

        <p class="lockin-note">
          Sensitive production systems may use read-only access rather than full administrative
          access. One incorrect production change can break the application or expose data, so that
          restriction is about safety, not lock-in.
        </p>
      </div>
    </section>

    <!-- Why We Work This Way -->
    <section class="why-section">
      <div class="content">
        <div class="section-header">
          <h2>Why We Work This Way</h2>
          <p>
            We would rather earn a small monthly fee by keeping your project healthy than send a big bill up
            front. That income also funds free education.
          </p>
        </div>

        <div class="why-grid">
          <div class="why-card">
            <span class="why-icon">💵</span>
            <h4>For You</h4>
            <p>The big upfront barrier disappears, and you see working software before you decide.</p>
          </div>
          <div class="why-card">
            <span class="why-icon">🎯</span>
            <h4>For Us</h4>
            <p>We are paid to keep things working, which keeps us invested long after launch.</p>
          </div>
          <div class="why-card">
            <span class="why-icon">⭐</span>
            <h4>For Learners</h4>
            <p>Client work funds free learning paths and mentorship, and real projects create real skills.</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Is It a Good Fit? -->
    <section id="good-fit" class="fit-section">
      <div class="content">
        <div class="section-header">
          <h2>Is It a Good Fit?</h2>
          <p>
            We don't accept every project. We would rather say so early than take on work we can't do well.
          </p>
        </div>

        <div class="fit-grid">
          <div class="fit-card fit-card--yes">
            <h3>A great fit if…</h3>
            <ul>
              <li>You're a solo founder, coach, consultant, freelancer, writer, or small business</li>
              <li>You can explain the problem you want to solve, even without technical words</li>
              <li>You're happy to start small and grow step by step</li>
              <li>You want a partner for the long run, not a one-off build</li>
            </ul>
          </div>
          <div class="fit-card fit-card--no">
            <h3>Probably not a fit if…</h3>
            <ul>
              <li>You need a large platform finished in a few weeks</li>
              <li>You want a fixed quote for a fixed spec before seeing anything</li>
              <li>The project raises legal, reputational, or serious ethical concerns</li>
              <li>The long-term maintenance or working relationship doesn't look sustainable</li>
            </ul>
          </div>
        </div>
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
              <NuxtLink v-if="faq.link" :to="faq.link.to" class="faq-link">{{ faq.link.label }}</NuxtLink>
            </div>
          </details>
        </div>
      </div>
    </section>

    <!-- CTA -->
    <section class="cta-section">
      <div class="content cta-content">
        <h2>Tell Us About Your Idea</h2>
        <p>
          Tell us briefly about your business and what you would like to build. Quan reads every message
          himself and replies with a time for a short call. If it looks like a good fit, the next step is the
          free prototype.
        </p>
        <p class="cta-note">Applying does not guarantee acceptance. Projects are taken on selectively.</p>
        <div class="cta-actions">
          <NuxtLink to="/contact" class="btn btn-primary">Tell Us About Your Idea</NuxtLink>
          <NuxtLink to="/work-with-us/our-projects" class="btn btn-secondary">See Client Projects</NuxtLink>
        </div>
        <p class="cta-email">
          Prefer email? Write to the Guild Master at
          <a href="mailto:quan.nguyen@skill-wanderer.com">quan.nguyen@skill-wanderer.com</a>
        </p>
      </div>
    </section>

    <!-- Fine print -->
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
  </div>
</template>

<script setup lang="ts">
// Single source of truth: the same array renders the FAQ and generates the FAQPage
// JSON-LD, so the structured data can never drift from the visible answers.
const faqs = [
  {
    question: 'Is it completely free?',
    answer:
      'No. For accepted projects there is no development fee and the first prototype is free, but the monthly fee is a paid service. On the Care Plan it covers hosting, maintenance, support and occasional changes, billed monthly or quarterly. On the Hosting-Only Plan it covers hosting only, at $8 a month.',
  },
  {
    question: "What's the catch?",
    answer:
      'There is no hidden one. Instead of a big upfront bill, we earn a monthly fee by keeping your project running and supported. That income also funds free education, so we are motivated to keep you happy for the long run.',
  },
  {
    question: 'How can a website cost only $8 a month?',
    answer:
      'AI now lets us build a simple website far faster than before, and the servers we already run for Skill-Wanderer have room to spare. The Hosting-Only Plan also keeps everything small: one prototype, one revision round, and hosting only after launch. That keeps the price low enough for people who could not afford a decent website until now.',
  },
  {
    question: "I'm not technical. Will I understand what's going on?",
    answer:
      'Yes. We explain everything in plain language, and you react to a working prototype instead of reading technical documents. Our clients include a speaker, a calligrapher, and a coach, not engineers.',
  },
  {
    question: 'Who builds my project?',
    answer:
      'Quan Nguyen, our founder, designs your project, builds the critical parts and reviews every change. Guild learners may help, always under his review.',
  },
  {
    question: 'Do you just vibe-code it with AI?',
    answer:
      'No. AI helps us move faster, but Quan designs the architecture and reviews every change, so the project stays maintainable instead of falling apart after launch.',
  },
  {
    question: 'Does everyone qualify?',
    answer:
      'No. Projects are accepted selectively. Applying, or receiving a direct LinkedIn or email invitation, does not guarantee acceptance.',
  },
  {
    question: 'Is the prototype optional?',
    answer:
      'No. The first prototype is a required part of the process for accepted projects. On the Care Plan, a second prototype is optional, and only used when the direction changes significantly. The Hosting-Only Plan includes one prototype.',
  },
  {
    question: 'When is the exact price decided?',
    answer:
      'On the Care Plan, after the first prototype is reviewed and we discuss the real project scope. It is never quoted before there is something real to look at. The Hosting-Only Plan has one flat price: $8 a month, plus your own domain.',
  },
  {
    question: 'How often do I pay?',
    answer:
      'On the Care Plan, monthly or quarterly, depending on your situation. We agree this with you when we confirm the price. The Hosting-Only Plan is paid monthly through PayPal.',
  },
  {
    question: 'What counts as a simple website on the Hosting-Only Plan?',
    answer:
      'A small site with a limited scope, such as a few pages that explain who you are, what you offer and how to reach you. If you need more, such as online payments, booking, user accounts or AI tools, the Care Plan is the right fit. We confirm which plan suits your project on the call.',
  },
  {
    question: 'What if my Hosting-Only site needs changes later?',
    answer:
      'Changes after launch are not part of the Hosting-Only Plan, so your site stays as it was launched. If you need changes later, we agree the scope and price with you first, or we can talk about moving your site to the Care Plan.',
  },
  {
    question: 'Can I stop or move the project elsewhere later?',
    answer:
      'Yes, anytime. You own your domain, you can see the code and configuration, and where it applies you get read-only access to the server. You can move the project yourself, or hire another provider to migrate it.',
  },
  {
    question: 'Do you take donations?',
    answer:
      'Yes. Client work is our main funding because it keeps us practical and up to date, but it covers our running costs, not our contributors, so any donation really helps make the mission sustainable. You can donate from our Help the Mission page.',
    link: { to: '/help-the-mission', label: 'Go to Help the Mission' },
  },
]

useSEO({
  title: 'Free Prototype, No Development Fee | Skill-Wanderer',
  description:
    'Try your idea before you commit: free prototype, no development fee, then $8 a month hosting for a simple website, or a full care plan. No lock-in.',
  image: '/cropped-skill-wanderer-logo-768x256.webp',
  keywords: [
    'no development fee',
    'free prototype',
    'website for small business',
    'affordable website for small business',
    'low-cost website hosting',
    'monthly website maintenance',
    'no vendor lock-in',
    'tech partner for coaches',
  ],
  structuredData: [
    createBreadcrumbSchema([
      { name: 'Home', url: 'https://skill-wanderer.com/' },
      { name: 'Work With Us', url: 'https://skill-wanderer.com/work-with-us' },
      { name: 'How It Works', url: 'https://skill-wanderer.com/work-with-us/service-model' },
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

.hero .hero-plan-note {
  font-size: 1rem;
  opacity: 0.85;
  margin: 24px auto 0;
}

.hero-plan-note a,
.steps-note a {
  font-weight: 600;
  text-decoration: none;
}

.hero-plan-note a:hover,
.steps-note a:hover {
  text-decoration: underline;
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

/* ── Process ──────────────────────────────────────── */
.process-section {
  padding: 90px 20px;
  background: var(--darker-bg);
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

.step-body {
  flex: 1;
  min-width: 0;
}

.step-card .step-image {
  flex: 0 0 220px;
  align-self: center;
  border-radius: 12px;
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

.step-badge,
.plan-badge {
  font-size: 0.72rem;
  font-weight: 700;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  padding: 5px 12px;
  border-radius: 50px;
  background: rgba(76, 175, 80, 0.15);
  color: #4ade80;
  border: 1px solid rgba(76, 175, 80, 0.4);
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

.phase-list {
  list-style: none;
  padding: 0;
  margin: 0;
  display: grid;
  gap: 10px;
}

.phase-list li {
  position: relative;
  padding-left: 22px;
  line-height: 1.7;
  opacity: 0.85;
}

.phase-list li::before {
  content: '→';
  position: absolute;
  left: 0;
  color: var(--primary-orange);
}

.steps-note {
  text-align: center;
  max-width: 720px;
  margin: 32px auto 0;
  line-height: 1.75;
  opacity: 0.8;
}

/* ── What You Pay ─────────────────────────────────── */
.pay-section {
  padding: 90px 20px;
  background: var(--dark-bg);
}

.plan-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 22px;
  max-width: 860px;
  margin: 0 auto;
}

.plan-card {
  display: flex;
  flex-direction: column;
  background: var(--card-bg);
  border: 1px solid rgba(255, 107, 53, 0.15);
  border-radius: 18px;
  padding: 30px;
  transition: all 0.3s ease;
}

.plan-card--lite {
  border-color: rgba(76, 175, 80, 0.35);
}

.plan-card:hover {
  background: var(--card-hover);
}

.plan-badge {
  align-self: flex-start;
  margin-bottom: 14px;
}

.plan-card h3 {
  color: white;
  font-size: 1.3rem;
  margin: 0 0 6px;
}

.plan-for {
  margin: 0;
  font-size: 0.97rem;
  opacity: 0.75;
}

.plan-price {
  margin: 20px 0 6px;
  opacity: 0.85;
}

.plan-amount {
  font-size: 2.6rem;
  font-weight: 800;
  line-height: 1;
  color: var(--primary-orange);
  margin-right: 6px;
}

.plan-amount--text {
  font-size: 1.6rem;
  margin-right: 0;
}

/* Wraps as one unit on phones instead of leaving "domain" alone on a line */
.plan-price-extra {
  white-space: nowrap;
}

.plan-price-note {
  margin: 0 0 20px;
  font-size: 0.95rem;
  line-height: 1.65;
  opacity: 0.75;
}

.plan-list {
  list-style: none;
  padding: 0;
  margin: 0 0 20px;
  display: grid;
  gap: 10px;
}

.plan-list li {
  position: relative;
  padding-left: 28px;
  line-height: 1.6;
  opacity: 0.88;
}

.plan-list li::before {
  content: '✓';
  position: absolute;
  left: 0;
  color: var(--success-green);
  font-weight: 700;
}

.plan-list .plan-list-no::before {
  content: '✕';
  color: rgba(255, 255, 255, 0.5);
}

/* Auto top margin pins the payment line and button to the bottom, so both cards line up */
.plan-payment {
  margin: auto 0 18px;
  font-size: 0.95rem;
  color: var(--primary-orange);
  opacity: 0.9;
}

.plan-card .btn {
  text-align: center;
}

/* border-box keeps these boxes the same width as the plan grid above */
.lite-story {
  box-sizing: border-box;
  max-width: 860px;
  margin: 36px auto 0;
  text-align: center;
  background: rgba(76, 175, 80, 0.07);
  border: 1px solid rgba(76, 175, 80, 0.3);
  border-radius: 18px;
  padding: 26px 30px;
}

.lite-story h3 {
  color: white;
  font-size: 1.15rem;
  margin-bottom: 10px;
}

.lite-story p {
  margin: 0;
  line-height: 1.75;
  opacity: 0.88;
}

.care-box {
  box-sizing: border-box;
  max-width: 860px;
  margin: 40px auto 0;
  background: rgba(255, 107, 53, 0.05);
  border: 1px solid rgba(255, 107, 53, 0.15);
  border-left: 4px solid var(--primary-orange);
  border-radius: 0 18px 18px 0;
  padding: 28px 32px;
}

.care-box h3 {
  color: white;
  font-size: 1.2rem;
  margin-bottom: 16px;
}

.care-list {
  list-style: none;
  padding: 0;
  margin: 0;
  display: grid;
  gap: 10px;
}

.care-list li {
  position: relative;
  padding-left: 28px;
  line-height: 1.65;
  opacity: 0.88;
}

.care-list li::before {
  content: '✓';
  position: absolute;
  left: 0;
  color: var(--success-green);
  font-weight: 700;
}

.care-tag {
  display: inline-block;
  margin-left: 8px;
  padding: 2px 10px;
  border-radius: 50px;
  border: 1px solid rgba(255, 107, 53, 0.35);
  color: var(--primary-orange);
  font-size: 0.7rem;
  font-weight: 700;
  letter-spacing: 0.06em;
  text-transform: uppercase;
  white-space: nowrap;
  vertical-align: middle;
}

.care-tag--both {
  border-color: rgba(76, 175, 80, 0.4);
  color: #4ade80;
}

.care-note {
  margin: 18px 0 0;
  font-size: 0.97rem;
  line-height: 1.65;
  color: var(--primary-orange);
  opacity: 0.9;
}

/* ── Lock-In ──────────────────────────────────────── */
.lockin-section {
  padding: 90px 20px;
  background: var(--darker-bg);
}

.lockin-image {
  max-width: 760px;
  margin: 0 auto 32px;
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

.lockin-list {
  list-style: none;
  padding: 0;
  margin: 0 auto;
  max-width: 760px;
  display: grid;
  gap: 14px;
}

.lockin-list li {
  position: relative;
  padding-left: 30px;
  font-size: 1.02rem;
  line-height: 1.7;
  opacity: 0.9;
}

.lockin-list li::before {
  content: '✓';
  position: absolute;
  left: 0;
  color: var(--success-green);
  font-weight: 700;
}

.lockin-list strong {
  color: white;
}

.lockin-note {
  text-align: center;
  max-width: 740px;
  margin: 24px auto 0;
  font-size: 0.95rem;
  line-height: 1.75;
  opacity: 0.65;
}

/* ── Why ──────────────────────────────────────────── */
.why-section {
  padding: 90px 20px;
  background: var(--dark-bg);
}

.why-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 22px;
  max-width: 1000px;
  margin: 0 auto;
}

.why-card {
  background: rgba(255, 107, 53, 0.05);
  border-radius: 16px;
  padding: 28px;
  text-align: center;
  transition: all 0.3s ease;
}

.why-card:hover {
  transform: translateY(-4px);
  background: rgba(255, 107, 53, 0.1);
}

.why-icon {
  font-size: 2.2rem;
  display: block;
  margin-bottom: 14px;
}

.why-card h4 {
  color: var(--primary-orange);
  font-size: 1.1rem;
  margin-bottom: 10px;
}

.why-card p {
  opacity: 0.85;
  line-height: 1.7;
  font-size: 0.95rem;
}

/* ── Fit ──────────────────────────────────────────── */
.fit-section {
  padding: 90px 20px;
  background: var(--darker-bg);
}

.fit-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 22px;
  max-width: 1000px;
  margin: 0 auto;
}

.fit-card {
  background: var(--card-bg);
  border-radius: 18px;
  padding: 30px;
}

.fit-card--yes {
  border: 1px solid rgba(76, 175, 80, 0.35);
}

.fit-card--no {
  border: 1px solid rgba(255, 255, 255, 0.1);
}

.fit-card h3 {
  color: white;
  font-size: 1.2rem;
  margin-bottom: 16px;
}

.fit-card ul {
  list-style: none;
  padding: 0;
  margin: 0;
  display: grid;
  gap: 10px;
}

.fit-card li {
  position: relative;
  padding-left: 28px;
  line-height: 1.65;
  opacity: 0.88;
}

.fit-card--yes li::before {
  content: '✓';
  position: absolute;
  left: 0;
  color: #4ade80;
  font-weight: 700;
}

.fit-card--no li::before {
  content: '✕';
  position: absolute;
  left: 0;
  color: rgba(255, 255, 255, 0.5);
  font-weight: 700;
}

/* ── FAQ ──────────────────────────────────────────── */
.faq-section {
  padding: 90px 20px;
  background: var(--dark-bg);
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

.faq-link {
  display: inline-block;
  margin-top: 12px;
  font-weight: 600;
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

.cta-content .cta-email {
  margin-top: 28px;
  font-size: 1rem;
  opacity: 0.8;
}

.cta-email a {
  color: var(--primary-orange);
  font-weight: 600;
  text-decoration: none;
}

.cta-email a:hover {
  text-decoration: underline;
}

/* ── Fine print ───────────────────────────────────── */
.disclaimer-section {
  padding: 0 20px 60px;
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

/* ── Responsive ───────────────────────────────────── */
@media (max-width: 768px) {
  .hero {
    padding: 130px 16px 70px;
  }

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

  .plan-grid,
  .why-grid,
  .fit-grid {
    grid-template-columns: 1fr;
  }

  .plan-card,
  .lite-story {
    padding: 24px 22px;
  }

  .step-card {
    flex-direction: column;
    gap: 16px;
    padding: 24px;
  }

  .step-card .step-image {
    flex: none;
    align-self: stretch;
  }

  .care-box {
    padding: 24px 22px;
  }
}

@media (max-width: 480px) {
  .hero {
    padding: 120px 16px 50px;
  }

  .hero h1 {
    font-size: 2.1rem;
  }

  .launch-badge {
    font-size: 0.85rem;
    padding: 10px 18px;
    max-width: 100%;
    text-align: center;
    line-height: 1.4;
    border-radius: 24px;
  }

  .hero-actions .btn,
  .cta-actions .btn {
    width: 100%;
    max-width: 320px;
    text-align: center;
  }
}
</style>
