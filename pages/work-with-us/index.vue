<template>
  <div>
    <!-- Hero Section -->
    <section class="hero">
      <span class="hero-eyebrow">Work With Us</span>
      <h1>A Tech Partner for Big Ideas on Small Budgets</h1>
      <p>
        We help solo founders, freelancers, coaches, consultants, writers and small businesses get their idea
        online: websites, AI tools, booking and payments. You see a free working prototype first, and there is
        no development fee.
      </p>
      <div class="hero-actions">
        <NuxtLink to="/contact" class="btn btn-primary">Tell Us About Your Idea</NuxtLink>
        <NuxtLink to="/work-with-us/service-model" class="btn btn-secondary">See How It Works</NuxtLink>
      </div>
      <span class="launch-badge">Free Prototype · No Development Fee · No Lock-In</span>
      <ImageSlot name="work-with-us/hero" class="hero-image" priority />
    </section>

    <!-- Who We Help -->
    <section id="who-its-for" class="audience-section">
      <div class="content">
        <div class="section-header">
          <h2>Who We Help</h2>
          <p>People who are starting out, have a clear idea, and don't want to gamble a big budget on tech.</p>
        </div>

        <div class="audience-grid">
          <div class="audience-card">
            <div class="audience-icon" aria-hidden="true">🚀</div>
            <h3>Solo Founders &amp; Entrepreneurs</h3>
            <p>You're starting something and need it online without hiring a whole team.</p>
          </div>
          <div class="audience-card">
            <div class="audience-icon" aria-hidden="true">💼</div>
            <h3>Freelancers &amp; Consultants</h3>
            <p>You need clients to understand what you do, and how to work with you.</p>
          </div>
          <div class="audience-card">
            <div class="audience-icon" aria-hidden="true">🎓</div>
            <h3>Coaches &amp; Teachers</h3>
            <p>You want a practice site, a booking page, or an AI practice tool for your students.</p>
          </div>
          <div class="audience-card">
            <div class="audience-icon" aria-hidden="true">✍️</div>
            <h3>Writers &amp; Creators</h3>
            <p>You want a home for your work that people can find, read, and buy from.</p>
          </div>
          <div class="audience-card">
            <div class="audience-icon" aria-hidden="true">🏪</div>
            <h3>Small Businesses Starting Out</h3>
            <p>You need a professional presence and simple tools, without the big agency bill.</p>
          </div>
        </div>

        <p class="audience-note">
          We also work with non-profits and start-ups. See our
          <NuxtLink to="/work-with-us/our-projects">client projects</NuxtLink>, or check
          <NuxtLink to="/work-with-us/service-model#good-fit">whether your project is a good fit</NuxtLink>.
        </p>
      </div>
    </section>

    <!-- What We Can Build -->
    <section id="what-we-build" class="build-section">
      <div class="content">
        <div class="section-header">
          <h2>What We Can Build for You</h2>
          <p>Every project is custom-built, handled from start to finish, and explained in plain language.</p>
        </div>

        <div class="build-grid">
          <div class="build-card">
            <div class="build-icon" aria-hidden="true">🌍</div>
            <h3>A Website That Explains What You Do</h3>
            <p>A clear, fast site that turns visitors into enquiries, with a message we help you sharpen first.</p>
            <p class="build-example">
              Example:
              <NuxtLink to="/work-with-us/projects/matt-harr-speaker">Matt Harr Speaker</NuxtLink>,
              <NuxtLink to="/work-with-us/projects/the-meek-method">The Meek Method</NuxtLink>
            </p>
          </div>
          <div class="build-card">
            <div class="build-icon" aria-hidden="true">🛒</div>
            <h3>Selling &amp; Booking</h3>
            <p>
              Published prices, Stripe checkout, booking calendars and intake forms, so clients can buy or book
              without emailing back and forth.
            </p>
            <p class="build-example">
              Example: <NuxtLink to="/work-with-us/projects/broad-strokes-studio">Broad Strokes Studio</NuxtLink>
            </p>
          </div>
          <div class="build-card build-card--featured">
            <div class="build-icon" aria-hidden="true">🤖</div>
            <h3>AI Tools for Your Students or Clients</h3>
            <p>
              AI practice assignments, questions and answers over your own lessons, or an assistant that answers
              from your own material.
            </p>
            <p class="build-example">
              Example: <NuxtLink to="/work-with-us/projects/mindyminds">MindyMinds</NuxtLink>, AI chatbots tailored to each business
            </p>
          </div>
          <div class="build-card">
            <div class="build-icon" aria-hidden="true">⚡</div>
            <h3>Small Automations</h3>
            <p>Lead notifications, reports, data checks and other repetitive tasks, done for you automatically.</p>
            <p class="build-example">
              Example: <NuxtLink to="/work-with-us/projects/recruitment-validator">Recruitment Validator</NuxtLink>, days of checking down to minutes
            </p>
          </div>
          <div class="build-card">
            <div class="build-icon" aria-hidden="true">📱</div>
            <h3>Apps &amp; Bigger Platforms, When You're Ready</h3>
            <p>Mobile apps, multi-user platforms and AI products. Start small, and grow into them.</p>
            <p class="build-example">
              Example:
              <NuxtLink to="/work-with-us/projects/mindyminds">MindyMinds</NuxtLink>,
              <NuxtLink to="/work-with-us/projects/mindyplay">MindyPlay</NuxtLink>
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- Advice, not only code -->
    <section class="advice-section">
      <div class="content">
        <div class="advice-block">
          <div class="advice-text">
            <h2>Not Only Tech: Honest Advice Too</h2>
            <p>
              Many clients need more than code. We help you find the message your site should carry, shape your
              offer, and decide what to build first, and what not to build at all.
            </p>
            <NuxtLink to="/work-with-us/projects/matt-harr-speaker" class="advice-link">Read Matt's story →</NuxtLink>
          </div>
          <figure class="advice-quote">
            <blockquote>
              "He has been a trusted business adviser throughout the process, offering honest feedback and
              practical guidance on how to position myself, present my services, reach potential clients, and grow
              my speaking business."
            </blockquote>
            <figcaption>
              <img src="/projects/mattharr/matt-harr-avatar.jpg" alt="Matt Harr" loading="lazy" />
              <span><strong>Matt Harr</strong> · Speaker on school culture and leadership</span>
            </figcaption>
          </figure>
        </div>
      </div>
    </section>

    <!-- The plan, in short -->
    <section class="plan-section">
      <div class="content">
        <div class="section-header">
          <h2>How It Works</h2>
          <p>Three simple steps. You can stop after any of them.</p>
        </div>
        <ol class="plan-steps">
          <li class="plan-step">
            <ImageSlot name="plan/idea" group="planSteps" class="plan-image" />
            <span class="plan-number">1</span>
            <h3>Tell us your idea</h3>
            <p>Send a short message or email Quan. He replies with a time for one short call.</p>
          </li>
          <li class="plan-step">
            <ImageSlot name="plan/prototype" group="planSteps" class="plan-image" />
            <span class="plan-number">2</span>
            <h3>Get a free working prototype</h3>
            <p>If it's a good fit, we build one for free. React to something real, or walk away and owe nothing.</p>
          </li>
          <li class="plan-step">
            <ImageSlot name="plan/launch" group="planSteps" class="plan-image" />
            <span class="plan-number">3</span>
            <h3>Launch and grow together</h3>
            <p>No development fee. A monthly fee covers hosting, maintenance, support and occasional changes. Leave anytime.</p>
          </li>
        </ol>
        <div class="plan-cta">
          <NuxtLink to="/work-with-us/service-model" class="btn-outline">
            Read the Full Details <span>→</span>
          </NuxtLink>
        </div>
      </div>
    </section>

    <!-- Proof of Work -->
    <section class="proof-of-work-section">
      <div class="content">
        <div class="section-header">
          <h2>Recent Client Projects</h2>
          <p>Real work for real clients.</p>
        </div>
        <div class="proof-strip">
          <NuxtLink to="/work-with-us/projects/matt-harr-speaker" class="proof-card">
            <div class="proof-image">
              <img src="/projects/mattharr/thumb.jpg" alt="Matt Harr Speaker" loading="lazy" />
              <span class="proof-badge">No Development Fee</span>
            </div>
            <div class="proof-meta">
              <h4>Matt Harr Speaker</h4>
              <p>35 years of school leadership turned into a positioned speaking brand.</p>
              <div class="proof-tags">
                <span>Astro</span>
                <span>Cloudflare</span>
              </div>
            </div>
          </NuxtLink>
          <NuxtLink to="/work-with-us/projects/broad-strokes-studio" class="proof-card">
            <div class="proof-image">
              <img src="/projects/broadstrokes/thumb.jpg" alt="Broad Strokes Studio" loading="lazy" />
              <span class="proof-badge">No Development Fee</span>
            </div>
            <div class="proof-meta">
              <h4>Broad Strokes Studio</h4>
              <p>A calligraphy commission site with published pricing and Stripe checkout.</p>
              <div class="proof-tags">
                <span>Astro</span>
                <span>Stripe</span>
              </div>
            </div>
          </NuxtLink>
          <NuxtLink to="/work-with-us/projects/the-meek-method" class="proof-card">
            <div class="proof-image">
              <img src="/projects/meekmethod/thumb.jpg" alt="The Meek Method" loading="lazy" />
              <span class="proof-badge">No Development Fee</span>
            </div>
            <div class="proof-meta">
              <h4>The Meek Method</h4>
              <p>Positioning and a full practice site for a decision coaching business.</p>
              <div class="proof-tags">
                <span>Astro</span>
                <span>Web3Forms</span>
              </div>
            </div>
          </NuxtLink>
          <NuxtLink to="/work-with-us/projects/mindyminds" class="proof-card">
            <div class="proof-image">
              <img src="/projects/mindyminds/thumb.jpg" alt="MindyMinds" loading="lazy" />
              <span class="proof-badge">Start-up</span>
            </div>
            <div class="proof-meta">
              <h4>MindyMinds</h4>
              <p>One platform running many custom AI chatbots, built in under 3 months.</p>
              <div class="proof-tags">
                <span>Next.js</span>
                <span>Docker</span>
              </div>
            </div>
          </NuxtLink>
          <NuxtLink to="/work-with-us/projects/mindyplay" class="proof-card">
            <div class="proof-image">
              <img src="/projects/mindyplay/thumb.jpg" alt="MindyPlay" loading="lazy" />
              <span class="proof-badge">Start-up</span>
            </div>
            <div class="proof-meta">
              <h4>MindyPlay</h4>
              <p>A physical game concept turned into an interactive mobile game.</p>
              <div class="proof-tags">
                <span>Flutter</span>
                <span>Firebase</span>
              </div>
            </div>
          </NuxtLink>
        </div>
        <div class="proof-cta">
          <NuxtLink to="/work-with-us/our-projects" class="btn-outline">
            View All Projects <span>→</span>
          </NuxtLink>
        </div>
      </div>
    </section>

    <!-- CTA Section -->
    <section class="cta-section">
      <div class="cta-content">
        <h2>Ready to Talk About Your Idea?</h2>
        <p>
          Tell us what you want to build. Quan reads every message himself and replies with a time for a short
          call. Your project helps fund free education.
        </p>
        <div class="cta-buttons">
          <NuxtLink to="/contact" class="btn btn-primary">Tell Us About Your Idea</NuxtLink>
          <NuxtLink to="/work-with-us/our-projects" class="btn btn-secondary">See Client Projects</NuxtLink>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
useSEO({
  title: 'Websites & AI Tools for Small Businesses | Skill-Wanderer',
  description:
    'Websites, AI tools, booking and automation for solo founders, coaches, consultants, freelancers, writers and small businesses. Free prototype first.',
  image: '/cropped-skill-wanderer-logo-768x256.webp',
  keywords: [
    'website for small business',
    'website for coaches',
    'website for consultants',
    'AI tools for teachers',
    'booking and payments website',
    'tech partner',
    'free prototype',
    'no development fee',
  ],
  structuredData: [
    createOrganizationSchema(),
    createBreadcrumbSchema([
      { name: 'Home', url: 'https://skill-wanderer.com/' },
      { name: 'Work With Us', url: 'https://skill-wanderer.com/work-with-us' },
    ]),
  ],
})
</script>

<style scoped>
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
  line-height: 1.2;
  color: white;
  max-width: 900px;
  margin: 0 auto 20px;
  position: relative;
  z-index: 1;
}

.hero p {
  font-size: 1.25rem;
  line-height: 1.75;
  color: var(--light-text);
  opacity: 0.9;
  margin: 0 auto 32px;
  position: relative;
  z-index: 1;
  max-width: 820px;
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

.hero-image {
  position: relative;
  z-index: 1;
  max-width: 960px;
  margin: 48px auto 0;
}

/* Section Styles */
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
  line-height: 1.7;
  opacity: 0.85;
  max-width: 760px;
  margin: 0 auto;
}

/* Who We Help */
.audience-section {
  padding: 90px 0;
  background: var(--darker-bg);
}

.audience-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(210px, 1fr));
  gap: 22px;
}

.audience-card {
  background: var(--card-bg);
  border: 1px solid rgba(255, 107, 53, 0.15);
  border-radius: 18px;
  padding: 28px 24px;
  transition: all 0.3s ease;
}

.audience-card:hover {
  transform: translateY(-4px);
  border-color: rgba(255, 107, 53, 0.4);
}

.audience-icon {
  font-size: 2.2rem;
  margin-bottom: 14px;
}

.audience-card h3 {
  color: white;
  font-size: 1.1rem;
  margin-bottom: 10px;
}

.audience-card p {
  opacity: 0.8;
  line-height: 1.65;
  font-size: 0.95rem;
}

.audience-note {
  text-align: center;
  margin: 36px auto 0;
  max-width: 760px;
  opacity: 0.85;
  line-height: 1.7;
}

.audience-note a {
  color: var(--primary-orange);
  font-weight: 600;
  text-decoration: none;
}

.audience-note a:hover {
  text-decoration: underline;
}

/* What We Build */
.build-section {
  padding: 90px 0;
  background: var(--dark-bg);
}

.build-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 24px;
}

.build-card {
  background: var(--card-bg);
  border: 1px solid rgba(255, 107, 53, 0.15);
  border-radius: 20px;
  padding: 32px 28px;
  display: flex;
  flex-direction: column;
  transition: all 0.3s ease;
}

.build-card:hover {
  transform: translateY(-5px);
  border-color: rgba(255, 107, 53, 0.4);
}

.build-card--featured {
  border-color: rgba(255, 107, 53, 0.35);
  background: linear-gradient(135deg, rgba(255, 107, 53, 0.08), rgba(255, 217, 61, 0.03));
}

.build-icon {
  font-size: 2.4rem;
  margin-bottom: 16px;
}

.build-card h3 {
  color: var(--primary-orange);
  font-size: 1.25rem;
  margin-bottom: 12px;
}

.build-card p {
  opacity: 0.85;
  line-height: 1.7;
}

.build-card .build-example {
  margin-top: auto;
  padding-top: 18px;
  font-size: 0.9rem;
  opacity: 0.75;
}

.build-example a {
  color: var(--primary-orange);
  font-weight: 600;
  text-decoration: none;
}

.build-example a:hover {
  text-decoration: underline;
}

/* Advice */
.advice-section {
  padding: 90px 0;
  background: var(--darker-bg);
}

.advice-block {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 40px;
  align-items: center;
  background: rgba(255, 107, 53, 0.05);
  border: 1px solid rgba(255, 107, 53, 0.15);
  border-left: 4px solid var(--primary-orange);
  border-radius: 0 20px 20px 0;
  padding: 44px;
}

.advice-text h2 {
  font-size: 2rem;
  color: var(--primary-orange);
  margin-bottom: 16px;
}

.advice-text p {
  font-size: 1.1rem;
  line-height: 1.8;
  opacity: 0.88;
  margin-bottom: 20px;
}

.advice-link {
  color: var(--primary-orange);
  font-weight: 600;
  text-decoration: none;
}

.advice-link:hover {
  text-decoration: underline;
}

.advice-quote {
  margin: 0;
}

.advice-quote blockquote {
  font-size: 1.05rem;
  line-height: 1.8;
  font-style: italic;
  opacity: 0.9;
  margin: 0 0 20px;
}

.advice-quote figcaption {
  display: flex;
  align-items: center;
  gap: 12px;
  font-size: 0.9rem;
}

.advice-quote figcaption img {
  width: 44px;
  height: 44px;
  border-radius: 50%;
  object-fit: cover;
  border: 2px solid rgba(255, 107, 53, 0.3);
}

.advice-quote strong {
  color: white;
}

/* Plan */
.plan-section {
  padding: 90px 0;
  background: var(--dark-bg);
}

.plan-steps {
  list-style: none;
  padding: 0;
  margin: 0 auto;
  max-width: 1100px;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 24px;
}

.plan-step {
  background: var(--card-bg);
  border: 1px solid rgba(255, 107, 53, 0.15);
  border-radius: 20px;
  padding: 32px 26px;
}

.plan-step .plan-image {
  margin-bottom: 20px;
  border-radius: 14px;
}

.plan-number {
  width: 44px;
  height: 44px;
  border-radius: 50%;
  background: linear-gradient(135deg, var(--primary-orange), var(--deep-orange));
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 700;
  font-size: 1.1rem;
  margin-bottom: 16px;
}

.plan-step h3 {
  color: white;
  font-size: 1.2rem;
  margin-bottom: 10px;
}

.plan-step p {
  opacity: 0.82;
  line-height: 1.7;
}

.plan-cta {
  text-align: center;
  margin-top: 36px;
}

/* Proof of Work Strip */
.proof-of-work-section {
  padding: 80px 0;
  background: linear-gradient(135deg, rgba(255, 107, 53, 0.04) 0%, transparent 60%);
  border-top: 1px solid rgba(255, 107, 53, 0.08);
  border-bottom: 1px solid rgba(255, 107, 53, 0.08);
}

/* Flex rather than grid so a short last row sits centred instead of hanging left. */
.proof-strip {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 24px;
  max-width: 1200px;
  margin: 0 auto;
}

.proof-card {
  /* Border inside the basis, or three cards plus gaps overflow the row and wrap. */
  box-sizing: border-box;
  flex: 0 1 calc(33.333% - 16px);
  text-decoration: none;
  color: inherit;
  border-radius: 16px;
  overflow: hidden;
  background: var(--card-bg);
  border: 1px solid rgba(255, 107, 53, 0.12);
  transition: all 0.3s ease;
}

.proof-card:hover {
  transform: translateY(-5px);
  border-color: rgba(255, 107, 53, 0.4);
  box-shadow: 0 10px 32px rgba(0, 0, 0, 0.3);
}

.proof-image {
  width: 100%;
  height: 160px;
  overflow: hidden;
  position: relative;
  background: rgba(255, 255, 255, 0.03);
}

.proof-image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.4s ease;
}

.proof-card:hover .proof-image img {
  transform: scale(1.06);
}

.proof-badge {
  position: absolute;
  top: 10px;
  left: 10px;
  background: rgba(0, 0, 0, 0.65);
  color: rgba(255, 255, 255, 0.85);
  font-size: 0.7rem;
  font-weight: 600;
  padding: 4px 10px;
  border-radius: 50px;
  letter-spacing: 0.04em;
}

.proof-meta {
  padding: 16px 18px;
}

.proof-meta h4 {
  font-size: 1.05rem;
  color: white;
  margin-bottom: 6px;
}

.proof-meta p {
  font-size: 0.85rem;
  opacity: 0.65;
  line-height: 1.5;
  margin-bottom: 10px;
}

.proof-tags {
  display: flex;
  gap: 6px;
}

.proof-tags span {
  font-size: 0.7rem;
  padding: 3px 10px;
  border-radius: 50px;
  background: rgba(255, 107, 53, 0.08);
  border: 1px solid rgba(255, 107, 53, 0.2);
  color: var(--primary-orange);
  font-weight: 600;
}

.proof-cta {
  text-align: center;
  margin-top: 36px;
}

.btn-outline {
  background: transparent;
  color: var(--primary-orange);
  border: 2px solid rgba(255, 107, 53, 0.3);
  padding: 12px 28px;
  border-radius: 50px;
  font-weight: 600;
  text-decoration: none;
  font-size: 1rem;
  display: inline-flex;
  align-items: center;
  gap: 8px;
  transition: all 0.3s ease;
}

.btn-outline:hover {
  border-color: var(--primary-orange);
  background: rgba(255, 107, 53, 0.1);
  transform: translateY(-2px);
}

/* CTA Section */
.cta-section {
  padding: 80px 20px;
  background: var(--darker-bg);
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
  line-height: 1.75;
  opacity: 0.85;
  margin-bottom: 35px;
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
@media (max-width: 1024px) {
  .proof-card {
    flex-basis: calc(50% - 12px);
  }
}

@media (max-width: 900px) {
  .plan-steps {
    grid-template-columns: 1fr;
    max-width: 600px;
  }

  .advice-block {
    grid-template-columns: 1fr;
    gap: 28px;
    padding: 32px 24px;
  }
}

@media (max-width: 768px) {
  .hero {
    padding: 130px 16px 70px;
  }

  .hero h1 {
    font-size: 2.3rem;
  }

  .hero p {
    font-size: 1.1rem;
  }

  .section-header h2,
  .cta-content h2 {
    font-size: 2rem;
  }

  .content {
    padding: 0 16px;
  }

  .build-grid {
    grid-template-columns: 1fr;
  }
}

@media (max-width: 480px) {
  .proof-card {
    flex-basis: 100%;
  }
}
</style>
