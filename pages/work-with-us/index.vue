<template>
  <div>
    <!-- Hero Section -->
    <section class="hero">
      <h1>Engage the Guild</h1>
      <p>
        A tech guild that applies real-world craft to solve real problems—and every challenge we tackle funds free education.
        This is how our social enterprise model sustains its mission without ads, donations, or compromise.
      </p>
      <span class="launch-badge">Real Craft. Real Learning. Real Impact.</span>
    </section>

    <!-- How It All Connects Section -->
    <section class="connection-section">
      <div class="content">
        <div class="section-header">
          <h2>How the Guild Works</h2>
          <p>A self-sustaining cycle where craft creates impact, and impact creates learning</p>
        </div>

        <div class="cycle-flow">
          <div class="cycle-step">
            <div class="cycle-icon">🤝</div>
            <h3>Guild Partnerships</h3>
            <p>We partner with organizations as their tech guild—providing senior-led sprint delivery through a scalable, transparent model.</p>
          </div>
          <div class="cycle-arrow">→</div>
          <div class="cycle-step">
            <div class="cycle-icon">🔧</div>
            <h3>Guild Delivery</h3>
            <p>Our guild members deliver real products, gaining hands-on experience—apprentices, journeymen, and masters working together.</p>
          </div>
          <div class="cycle-arrow">→</div>
          <div class="cycle-step">
            <div class="cycle-icon">📚</div>
            <h3>Free Education</h3>
            <p>Revenue from guild work funds free education—no ads, no donations, no compromise.</p>
          </div>
          <div class="cycle-arrow">→</div>
          <div class="cycle-step">
            <div class="cycle-icon">🌱</div>
            <h3>Guild Growth</h3>
            <p>Apprentices grow into skilled craftspeople, ready to take on the next guild engagement.</p>
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
              From non-profits to startups to our own guild infrastructure—every project we take on creates real impact
              and fuels free education.
            </p>
            <NuxtLink to="/work-with-us/our-projects" class="pillar-link">
              View Our Work <span>→</span>
            </NuxtLink>
          </div>

          <div class="pillar-card">
            <div class="pillar-icon">💰</div>
            <h3>Pricing</h3>
            <p>
              Two segments — Individuals and Organizations — with clear starting anchors.
              From quick builds at $1,500 to dedicated engineering pods at $15,000/month.
            </p>
            <NuxtLink to="/work-with-us/pricing" class="pillar-link">
              View Pricing <span>→</span>
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
              Ready to engage? Start with a single sprint, scale into a dedicated pod,
              and stay as long as we're useful. Predictable pricing, zero lock-in.
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

        <!-- Intro + Revenue callout -->
        <div class="intro-callout">
          <p>
            Our collaboration model is designed to support both learning and sustainable development.
            While knowledge and exploration are supported through free mentorship and educational resources,
            professional development work is delivered through structured development sprints.
            We focus on building systems that are stable, maintainable, and capable of evolving over time.
          </p>
          <div class="funding-banner">
            <span class="funding-icon">🎓</span>
            <div>
              <strong>Revenue funds free education.</strong>
              <span> Every sprint you fund goes directly toward keeping Skill-Wanderer's education free and accessible to all learners—no ads, no paywalls, no compromise.</span>
            </div>
          </div>
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
              <h4>Discovery</h4>
              <p>Projects typically begin with a short discovery phase to understand the problem, goals, and technical direction. This phase focuses on high-level understanding and feasibility rather than detailed system design. For those still exploring ideas, we encourage starting with our free mentorship resources.</p>
            </div>
          </div>
          <div class="journey-connector">↓</div>
          <div class="journey-step">
            <div class="step-number">02</div>
            <div class="step-body">
              <h4>Trust Sprint</h4>
              <p>New collaborations often begin with a Trust Sprint — a two-week development cycle designed to establish a productive working relationship. This allows both sides to evaluate communication, workflow, and technical direction through real implementation rather than extended planning.</p>
            </div>
          </div>
          <div class="journey-connector">↓</div>
          <div class="journey-step">
            <div class="step-number">03</div>
            <div class="step-body">
              <h4>Development Sprints</h4>
              <p>All development work is delivered through two-week sprints. Each sprint includes planning, implementation, and a review session. Larger systems are developed across multiple sprints, allowing the product to evolve gradually while maintaining stability.</p>
            </div>
          </div>
          <div class="journey-connector">↓</div>
          <div class="journey-step">
            <div class="step-number">04</div>
            <div class="step-body">
              <h4>Maintaining System Health</h4>
              <p>As systems evolve, occasional sprints may focus on improving stability, performance, and maintainability. These improvements may not always introduce visible features, but they ensure the system remains reliable and easier to evolve over time.</p>
            </div>
          </div>
          <div class="journey-connector">↓</div>
          <div class="journey-step">
            <div class="step-number">05</div>
            <div class="step-body">
              <h4>Client Independence</h4>
              <p>We take pride in building systems you can fully own and operate without us. After each sprint milestone, you receive everything—code, documentation, and knowledge transfer. If you can take over and run it yourself, it means we succeeded as educators. We actively ensure there is no vendor lock-in at any stage.</p>
            </div>
          </div>
          <div class="journey-connector">↓</div>
          <div class="journey-step">
            <div class="step-number">06</div>
            <div class="step-body">
              <h4>Long-Term Collaboration</h4>
              <p>We design systems with long-term stability in mind. Through iterative development sprints, platforms can grow gradually while remaining maintainable and reliable. We continue working with partners as long as we provide meaningful value, while always supporting their ability to take ownership.</p>
            </div>
          </div>
        </div>

        <!-- Operational Details — FAQ Accordion -->
        <div class="faq-section">
          <h3 class="faq-heading">Operational Details</h3>

          <details v-for="item in operationalFAQ" :key="item.q" class="faq-item">
            <summary class="faq-question">
              <span class="faq-icon">{{ item.icon }}</span>
              <span>{{ item.q }}</span>
              <span class="faq-chevron">▸</span>
            </summary>
            <div class="faq-answer" v-html="item.a" />
          </details>
        </div>
      </div>
    </section>

    <!-- CTA Section -->
    <section class="cta-section">
      <div class="cta-content">
        <h2>Ready to Engage the Guild?</h2>
        <p>
          Whether you're looking for a true technology partner or curious about how 
          our guild sustains free education—we'd love to talk.
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
// Icons replaced with emojis
const operationalFAQ = [
  {
    icon: '⚡',
    q: 'Communication & Workflow',
    a: 'Each sprint begins with a short planning phase where scope and expectations are aligned. During the sprint, the guild provides progress updates, and each cycle concludes with a review and demonstration of completed work.'
  },
  {
    icon: '🐛',
    q: 'Bug Fixes & Change Requests',
    a: 'If implemented functionality does not behave as agreed, it is considered a bug and will be corrected as part of the development process. Requests that modify or extend agreed functionality are change requests, scheduled in a future sprint.'
  },
  {
    icon: '🌱',
    q: 'Startup Collaboration',
    a: 'For early-stage startups, the guild offers sprint-based engagement at accessible price points — starting from $1,500 for a Quick Build Foundation. Scope and cadence are tailored to your stage and budget.'
  },
  {
    icon: '💳',
    q: 'Payment Structure',
    a: '<strong>Trust Sprint:</strong> 30% before sprint begins + 70% after sprint review.<br/><strong>Standard Sprints:</strong> 50% before sprint begins + 50% after sprint completion.<br/>Each sprint is scheduled once the initial payment is confirmed.'
  },
  {
    icon: '📜',
    q: 'Code Ownership & Open Source',
    a: 'All custom code belongs to the client once milestone payment is completed. Reusable components from the Skill-Wanderer ecosystem are released as open-source under the <strong>Apache 2.0 license</strong>.'
  },
  {
    icon: '🔓',
    q: 'No Vendor Lock-In',
    a: 'We use open standards, well-documented architectures, and industry-standard tools so you are never locked into working with us. After each milestone, you receive full code, documentation, and knowledge transfer.'
  }
]

useSEO({
  title: 'Engage the Guild | Skill-Wanderer',
  description:
    'A tech guild delivering real-world technology projects. Every guild engagement funds free education. Learn about our social enterprise model and partnership approach.',
  image: '/cropped-skill-wanderer-logo-768x256.webp',
  keywords: ['tech guild', 'software development partner', 'social enterprise technology', 'guild engagement', 'custom software', 'hire developers', 'technology partnership'],
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

.funding-banner {
  display: flex;
  align-items: flex-start;
  gap: 16px;
  background: linear-gradient(135deg, rgba(255, 107, 53, 0.12), rgba(255, 107, 53, 0.05));
  border: 1px solid rgba(255, 107, 53, 0.35);
  border-radius: 14px;
  padding: 22px 28px;
  text-align: left;
}

.funding-icon {
  font-size: 1.8rem;
  flex-shrink: 0;
  margin-top: 2px;
}

.funding-banner strong {
  color: var(--primary-orange);
  font-size: 1rem;
}

.funding-banner span {
  font-size: 0.95rem;
  opacity: 0.85;
  line-height: 1.6;
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

  .funding-banner,
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
