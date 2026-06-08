<template>
  <div>
    <!-- Hero Section -->
    <section class="hero">
      <h1>Engage the Guild</h1>
      <p>
        A tech guild for organizations that need senior-led delivery, practical collaboration,
        and systems they can fully own. Explore what we build, who we work with,
        and how a guild partnership works in practice.
      </p>
      <span class="launch-badge">Real Craft. Real Learning. Real Impact.</span>
    </section>

    <!-- How It All Connects Section -->
    <section class="connection-section">
      <div class="content">
        <div class="section-header">
          <h2>How the Guild Works</h2>
          <p>A simple path from first conversation to long-term collaboration</p>
        </div>

        <div class="cycle-flow">
          <div class="cycle-step">
            <div class="cycle-icon">🤝</div>
            <h3>Discovery &amp; Scoping</h3>
            <p>We start by understanding the problem, the constraints, and the right first step for the work ahead.</p>
          </div>
          <div class="cycle-arrow">→</div>
          <div class="cycle-step">
            <div class="cycle-icon">🔧</div>
            <h3>Guild Delivery</h3>
            <p>Senior-led sprint delivery keeps progress visible while guild members work in coordinated tracks.</p>
          </div>
          <div class="cycle-arrow">→</div>
          <div class="cycle-step">
            <div class="cycle-icon">📚</div>
            <h3>Knowledge Transfer</h3>
            <p>Documentation, walkthroughs, and shared context are built into the work from the start.</p>
          </div>
          <div class="cycle-arrow">→</div>
          <div class="cycle-step">
            <div class="cycle-icon">🌱</div>
            <h3>Long-Term Fit</h3>
            <p>Continue with the guild while it adds value, or take full ownership when your team is ready.</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Explore the Guild Section -->
    <section class="pillars-section">
      <div class="content">
        <div class="section-header">
          <h2>Explore the Guild</h2>
          <p>Everything you need to know about working with us</p>
        </div>

        <div class="pillars-grid pillars-grid--six">
          <div class="pillar-card">
            <div class="pillar-icon">💻</div>
            <h3>What We Build</h3>
            <p>
              Custom web platforms, internal tools, and digital products—built from scratch with modern frameworks.
              No WordPress, no templates, no lock-in.
            </p>
            <NuxtLink to="/work-with-us/what-we-build" class="pillar-link">
              See What We Build <span>→</span>
            </NuxtLink>
          </div>

          <div class="pillar-card">
            <div class="pillar-icon">🎯</div>
            <h3>Who We Work With</h3>
            <p>
              Non-profits, early-stage startups, and mission-driven organizations that value long-term thinking,
              open technology, and practical learning.
            </p>
            <NuxtLink to="/work-with-us/who-we-work-with" class="pillar-link">
              Is This For You? <span>→</span>
            </NuxtLink>
          </div>

          <div class="pillar-card">
            <div class="pillar-icon">📁</div>
            <h3>Our Projects</h3>
            <p>
              From non-profits to startups to our own guild infrastructure—these projects show how
              the guild designs, ships, and supports real systems.
            </p>
            <NuxtLink to="/work-with-us/our-projects" class="pillar-link">
              View Our Work <span>→</span>
            </NuxtLink>
          </div>

          <div class="pillar-card">
            <div class="pillar-icon">🧭</div>
            <h3>Project Scoping</h3>
            <p>
              Tell us what you are building and we will recommend the right engagement model,
              timeline, and first step.
            </p>
            <NuxtLink to="/contact" class="pillar-link">
              Start the Conversation <span>→</span>
            </NuxtLink>
          </div>

          <div class="pillar-card">
            <div class="pillar-icon">💡</div>
            <h3>Our Delivery Model</h3>
            <p>
              A senior-led system you plug into — not outsourcing. Senior architectural oversight,
              parallel sprint execution, and full knowledge transfer at every milestone.
            </p>
            <NuxtLink to="/work-with-us/success-sharing-model" class="pillar-link">
              Learn How It Works <span>→</span>
            </NuxtLink>
          </div>

          <div class="pillar-card">
            <div class="pillar-icon">🚀</div>
            <h3>Become a Guild Partner</h3>
            <p>
              Ready to engage? Start with a sprint, scale into a steady rhythm,
              and keep full ownership at every stage.
            </p>
            <NuxtLink to="/work-with-us/become-a-partner" class="pillar-link">
              Become a Partner <span>→</span>
            </NuxtLink>
          </div>
        </div>
      </div>
    </section>

    <!-- Proof of Work — Project Showcase Strip -->
    <section class="proof-of-work-section">
      <div class="content">
        <div class="section-header">
          <h2>Guild Projects in Motion</h2>
          <p>Real client work across active development, maintenance, and shipped delivery.</p>
        </div>
        <div class="proof-strip">
          <NuxtLink to="/work-with-us/projects/wm-smile-generation-uganda" class="proof-card">
            <div class="proof-image">
              <img src="/projects/wmsmile/children-learning.jpeg" alt="WM Smile Generation Uganda" loading="lazy" />
              <span class="proof-badge">Non-Profit</span>
            </div>
            <div class="proof-meta">
              <h4>WM Smile Generation</h4>
              <p>Full website for a Ugandan non-profit supporting healthcare and education.</p>
              <div class="proof-tags">
                <span>Nuxt 3</span>
                <span>Kubernetes</span>
              </div>
            </div>
          </NuxtLink>
          <NuxtLink to="/work-with-us/projects/chanhdao-vn" class="proof-card">
            <div class="proof-image">
              <img src="/projects/chanhdao/preview.svg" alt="ChanhDao.vn" loading="lazy" />
              <span class="proof-badge">Non-Profit</span>
            </div>
            <div class="proof-meta">
              <h4>ChanhDao.vn</h4>
              <p>162 Buddhist lessons with AI Q&A on a self-hosted Kubernetes cluster.</p>
              <div class="proof-tags">
                <span>AI</span>
                <span>Python</span>
              </div>
            </div>
          </NuxtLink>
          <NuxtLink to="/work-with-us/projects/mindyminds" class="proof-card">
            <div class="proof-image">
              <img src="/projects/mindyminds/mindyminds-logo.jpg" alt="MindyMinds" loading="lazy" />
              <span class="proof-badge">Start-up</span>
            </div>
            <div class="proof-meta">
              <h4>MindyMinds</h4>
              <p>Multi-tenant AI chatbot platform delivered in under 3 months.</p>
              <div class="proof-tags">
                <span>Next.js</span>
                <span>OpenAI</span>
              </div>
            </div>
          </NuxtLink>
          <NuxtLink to="/work-with-us/projects/mindyplay" class="proof-card">
            <div class="proof-image">
              <img src="/projects/mindyplay/mindyplay-logo.jpg" alt="MindyPlay" loading="lazy" />
              <span class="proof-badge">Start-up</span>
            </div>
            <div class="proof-meta">
              <h4>MindyPlay</h4>
              <p>Board game concept turned into an interactive Flutter mobile experience.</p>
              <div class="proof-tags">
                <span>Flutter</span>
                <span>Firebase</span>
              </div>
            </div>
          </NuxtLink>
        </div>
        <div class="proof-cta">
          <NuxtLink to="/work-with-us/our-projects" class="btn btn-outline">
            View All Projects <span>→</span>
          </NuxtLink>
        </div>
      </div>
    </section>

    <!-- How We Work Section -->
    <section class="how-we-work-section">
      <div class="content">
        <div class="section-header">
          <h2>How We Work</h2>
          <p>Our collaboration model for building sustainable systems</p>
        </div>

        <!-- Intro + Guild callout -->
        <div class="intro-callout">
          <p>
            Our collaboration model is built around discovery, focused sprint delivery,
            and steady ownership transfer. We work in short cycles, keep scope visible,
            and build systems that remain stable, maintainable, and easy to evolve over time.
          </p>
          <div class="lockin-banner">
            <span class="lockin-icon">🔓</span>
            <div>
              <strong>Zero Vendor Lock-In. By Design.</strong>
              <span>
                As a tech guild, our mission is education—not dependency. If you can take over
                the work and run it yourself, that means we did our job well. We build with open standards,
                clear documentation, and full knowledge transfer so you are never locked into working with us.
                Your success without us is our greatest measure of success.
              </span>
            </div>
          </div>
        </div>

        <!-- Journey Steps -->
        <div class="journey-label">The Path</div>
        <div class="journey-flow">
          <div class="journey-step">
            <div class="step-number">01</div>
            <div class="step-body">
              <h4>Discovery &amp; Scoping</h4>
              <p>We begin with a short discovery phase to understand your goals, constraints, and the right first step.</p>
            </div>
          </div>
          <div class="journey-connector">↓</div>
          <div class="journey-step">
            <div class="step-number">02</div>
            <div class="step-body">
              <h4>Start with a Sprint</h4>
              <p>Most new collaborations begin with a focused sprint so both sides can establish the working rhythm through real delivery.</p>
            </div>
          </div>
          <div class="journey-connector">↓</div>
          <div class="journey-step">
            <div class="step-number">03</div>
            <div class="step-body">
              <h4>Sprint Delivery</h4>
              <p>Work moves in structured cycles with planning, implementation, review, and room to adjust priorities between iterations.</p>
            </div>
          </div>
          <div class="journey-connector">↓</div>
          <div class="journey-step">
            <div class="step-number">04</div>
            <div class="step-body">
              <h4>Knowledge Transfer</h4>
              <p>Documentation, walkthroughs, and architecture decisions are shared as the work evolves, not left until the end.</p>
            </div>
          </div>
          <div class="journey-connector">↓</div>
          <div class="journey-step">
            <div class="step-number">05</div>
            <div class="step-body">
              <h4>Ownership &amp; Independence</h4>
              <p>You receive the context needed to operate, extend, and fully own the system without dependency on the guild.</p>
            </div>
          </div>
          <div class="journey-connector">↓</div>
          <div class="journey-step">
            <div class="step-number">06</div>
            <div class="step-body">
              <h4>Continue or Transition</h4>
              <p>Stay in an ongoing rhythm while the guild adds value, or transition fully to your own team when the time is right.</p>
            </div>
          </div>
        </div>

      </div>
    </section>

    <!-- CTA Section -->
    <section class="cta-section">
      <div class="cta-content">
        <h2>Ready to Engage the Guild?</h2>
        <p>
          Whether you're looking for a true technology partner or want to explore
          whether the guild is the right fit for your project, we'd love to talk.
        </p>
        <div class="cta-buttons">
          <NuxtLink to="/work-with-us/become-a-partner" class="btn btn-primary">Become a Partner</NuxtLink>
          <NuxtLink to="/work-with-us/our-projects" class="btn btn-secondary">See Our Projects</NuxtLink>
          <NuxtLink to="/contact" class="btn btn-secondary">Start a Conversation</NuxtLink>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
useSEO({
  title: 'Engage the Guild | Skill-Wanderer',
  description:
    'A tech guild for senior-led technology projects, clear collaboration, and long-term ownership. Explore what we build, who we work with, and how the guild works.',
  image: '/cropped-skill-wanderer-logo-768x256.webp',
  keywords: ['tech guild', 'software development partner', 'senior-led delivery', 'guild engagement', 'custom software', 'technology partnership', 'long-term ownership'],
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

.launch-badge {
  background: linear-gradient(135deg, var(--primary-orange), var(--deep-orange));
  color: white;
  padding: 12px 30px;
  border-radius: 50px;
  font-weight: bold;
  font-size: 1.1rem;
  display: inline-block;
  position: relative;
  z-index: 1;
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
  opacity: 0.85;
}

/* Proof of Work Strip */
.proof-of-work-section {
  padding: 80px 20px;
  background: linear-gradient(135deg, rgba(255, 107, 53, 0.04) 0%, transparent 60%);
  border-top: 1px solid rgba(255, 107, 53, 0.08);
  border-bottom: 1px solid rgba(255, 107, 53, 0.08);
}

.proof-strip {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 24px;
  max-width: 1200px;
  margin: 0 auto;
}

.proof-card {
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
  right: 10px;
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

/* Cycle Flow Section */
.connection-section {
  padding: 80px 20px;
  background: var(--darker-bg);
}

.cycle-flow {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 20px;
  flex-wrap: wrap;
}

.cycle-step {
  flex: 1;
  min-width: 200px;
  max-width: 250px;
  text-align: center;
  background: var(--card-bg);
  border-radius: 20px;
  padding: 30px 20px;
  border: 1px solid rgba(255, 107, 53, 0.15);
  transition: all 0.3s ease;
}

.cycle-step:hover {
  transform: translateY(-5px);
  border-color: rgba(255, 107, 53, 0.4);
}

.cycle-icon {
  font-size: 2.5rem;
  margin-bottom: 15px;
}

.cycle-step h3 {
  color: var(--primary-orange);
  font-size: 1.1rem;
  margin-bottom: 10px;
}

.cycle-step p {
  opacity: 0.85;
  font-size: 0.95rem;
  line-height: 1.6;
}

.cycle-arrow {
  font-size: 2rem;
  color: var(--primary-orange);
  opacity: 0.5;
  flex-shrink: 0;
}

/* Pillars Section */
.pillars-section {
  padding: 80px 20px;
  background: var(--dark-bg);
}

.pillars-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
  gap: 30px;
}

.pillars-grid--six {
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
}

.pillar-card {
  background: var(--card-bg);
  border-radius: 20px;
  padding: 40px 35px;
  border: 2px solid rgba(255, 107, 53, 0.15);
  transition: all 0.3s ease;
  display: flex;
  flex-direction: column;
}

.pillar-card:hover {
  transform: translateY(-5px);
  border-color: rgba(255, 107, 53, 0.4);
}

.pillar-icon {
  font-size: 3rem;
  margin-bottom: 20px;
}

.pillar-card h3 {
  color: var(--primary-orange);
  font-size: 1.5rem;
  margin-bottom: 15px;
}

.pillar-card p {
  opacity: 0.85;
  line-height: 1.7;
  margin-bottom: 20px;
}

.pillar-highlights {
  list-style: none;
  padding: 0;
  margin: 0 0 25px 0;
  flex-grow: 1;
}

.pillar-highlights li {
  padding: 8px 0;
  padding-left: 25px;
  position: relative;
  opacity: 0.9;
  font-size: 0.95rem;
}

.pillar-highlights li::before {
  content: '✓';
  position: absolute;
  left: 0;
  color: var(--primary-orange);
  font-weight: bold;
}

.pillar-link {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  color: var(--primary-orange);
  font-weight: bold;
  text-decoration: none;
  font-size: 1.05rem;
  transition: all 0.3s ease;
}

.pillar-link:hover {
  gap: 14px;
}

.pillar-link span {
  transition: transform 0.3s ease;
}

.pillar-link:hover span {
  transform: translateX(4px);
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

/* How We Work Section */
.how-we-work-section {
  padding: 80px 20px;
  background: var(--dark-bg);
}

.intro-callout {
  max-width: 800px;
  margin: 0 auto 60px;
  text-align: center;
}

.intro-callout > p {
  font-size: 1.1rem;
  line-height: 1.8;
  opacity: 0.85;
  margin-bottom: 28px;
}

.lockin-banner {
  display: flex;
  align-items: flex-start;
  gap: 16px;
  background: linear-gradient(135deg, rgba(76, 175, 80, 0.12), rgba(76, 175, 80, 0.05));
  border: 1px solid rgba(76, 175, 80, 0.35);
  border-radius: 14px;
  padding: 22px 28px;
  text-align: left;
  margin-top: 16px;
}

.lockin-icon {
  font-size: 1.8rem;
  flex-shrink: 0;
  margin-top: 2px;
}

.lockin-banner strong {
  color: #4caf50;
  font-size: 1rem;
}

.lockin-banner span {
  font-size: 0.95rem;
  opacity: 0.85;
  line-height: 1.6;
}

/* Journey */
.journey-label {
  text-align: center;
  font-size: 0.8rem;
  font-weight: 700;
  letter-spacing: 2px;
  text-transform: uppercase;
  color: var(--primary-orange);
  margin-bottom: 32px;
  opacity: 0.7;
}

.journey-flow {
  max-width: 720px;
  margin: 0 auto 64px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0;
}

.journey-step {
  display: flex;
  align-items: flex-start;
  gap: 24px;
  background: var(--card-bg);
  border: 1px solid rgba(255, 107, 53, 0.15);
  border-radius: 14px;
  padding: 28px 32px;
  width: 100%;
  transition: all 0.3s ease;
}

.journey-step:hover {
  border-color: rgba(255, 107, 53, 0.4);
  transform: translateX(4px);
}

.step-number {
  font-size: 1.4rem;
  font-weight: 800;
  color: var(--primary-orange);
  opacity: 0.4;
  min-width: 36px;
  line-height: 1;
  padding-top: 3px;
}

.step-body h4 {
  color: white;
  font-size: 1.1rem;
  font-weight: 700;
  margin-bottom: 8px;
}

.step-body p {
  opacity: 0.8;
  font-size: 0.95rem;
  line-height: 1.65;
  margin: 0;
}

.journey-connector {
  font-size: 1.4rem;
  color: var(--primary-orange);
  opacity: 0.3;
  padding: 8px 0;
}

/* Working Together — FAQ Accordion */
.faq-section {
  max-width: 800px;
  margin: 0 auto;
}

.faq-heading {
  text-align: center;
  color: var(--primary-orange);
  font-size: 1.6rem;
  margin-bottom: 28px;
}

.faq-item {
  background: var(--card-bg);
  border: 1px solid rgba(255, 107, 53, 0.12);
  border-radius: 12px;
  margin-bottom: 12px;
  transition: border-color 0.3s ease;
}

.faq-item[open] {
  border-color: rgba(255, 107, 53, 0.35);
}

.faq-question {
  display: flex;
  align-items: center;
  gap: 14px;
  padding: 20px 24px;
  cursor: pointer;
  font-weight: 700;
  font-size: 1.02rem;
  color: white;
  list-style: none;
  user-select: none;
}

.faq-question::-webkit-details-marker {
  display: none;
}

.faq-icon {
  font-size: 1.4rem;
  flex-shrink: 0;
}

.faq-chevron {
  margin-left: auto;
  color: var(--primary-orange);
  font-size: 1.1rem;
  transition: transform 0.2s ease;
}

.faq-item[open] .faq-chevron {
  transform: rotate(90deg);
}

.faq-answer {
  padding: 0 24px 20px 52px;
  opacity: 0.82;
  font-size: 0.94rem;
  line-height: 1.7;
}

.faq-answer :deep(strong) {
  color: var(--primary-orange);
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

  .cycle-flow {
    flex-direction: column;
  }

  .cycle-arrow {
    transform: rotate(90deg);
  }

  .pillars-grid {
    grid-template-columns: 1fr;
  }

  .proof-strip {
    grid-template-columns: 1fr 1fr;
  }

  .lockin-banner {
    flex-direction: column;
    align-items: center;
    text-align: center;
  }

  .journey-step {
    flex-direction: column;
    gap: 12px;
  }
}
</style>
