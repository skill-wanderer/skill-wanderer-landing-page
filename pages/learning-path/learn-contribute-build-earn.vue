<template>
  <div class="philosophy-page">
    <!-- Hero -->
    <section class="hero">
      <div class="hero-content">
        <p class="eyebrow">Our Education Philosophy</p>
        <h1>Learn. Contribute. Build. Earn.</h1>
        <p class="hero-subtitle">A New Way to Learn Tech</p>
        <p class="hero-description">
          Most platforms ask you to pay first, learn alone, and hope to get a job later.
          We do it differently. At Skill-Wanderer, you don't pay to learn — you earn your way by building.
        </p>
        <div class="hero-actions">
          <NuxtLink to="/learning-path" class="btn btn-primary">← Back to Topic Hub</NuxtLink>
          <a href="https://dojo.skill-wanderer.com/paths" class="btn btn-secondary" target="_blank" rel="noopener noreferrer">
            Explore Dojo Paths
          </a>
        </div>
      </div>
    </section>

    <!-- Journey Steps -->
    <section class="journey-section">
      <div class="section-header">
        <h2>Your Journey Through the Guild</h2>
      </div>

      <div class="journey-grid">
        <article class="journey-card">
          <span class="step-badge">01</span>
          <h3>Start for Free</h3>
          <p>Begin your journey with structured learning paths, beginner-friendly courses, and community learning groups.</p>
          <p class="card-emphasis">No cost. No barrier. No pressure. Just start.</p>
        </article>

        <article class="journey-card">
          <span class="step-badge">02</span>
          <h3>Unlock Mentorship Through Contribution</h3>
          <p class="card-subheader">Mentorship is earned through effort, not bought with tuition.</p>
          <p>Real growth requires commitment. Instead of charging fixed tuition, we let you choose how to contribute — and every option is a chance to grow:</p>
          <ul class="contribution-list">
            <li class="contribution-preferred"><span class="list-icon">🔧</span> <strong>Learn by building</strong> real features for the guild</li>
            <li class="contribution-preferred"><span class="list-icon">🤝</span> <strong>Learn by teaching</strong> — help and grow the community</li>
            <li class="contribution-secondary"><span class="list-icon">💰</span> Support financially <span class="optional-tag">(optional)</span></li>
          </ul>
          <p class="card-emphasis"><strong class="zero-tuition">Zero tuition.</strong> Just show up and contribute.</p>
        </article>

        <article class="journey-card">
          <span class="step-badge">03</span>
          <h3>Work on Real Projects</h3>
          <p>When you're ready, you move beyond learning.</p>
          <ul class="contribution-list">
            <li>Join real development teams</li>
            <li>Build production-level products</li>
            <li>Work with partners and clients</li>
            <li>Earn through revenue sharing or paid roles</li>
          </ul>
          <p class="card-emphasis">This is where learning becomes earning.</p>
        </article>

        <article class="journey-card">
          <span class="step-badge">04</span>
          <h3>Grow Into a Builder — or a Founder</h3>
          <p>Top members don't just get jobs. They:</p>
          <ul class="contribution-list">
            <li>Become mentors</li>
            <li>Lead projects</li>
            <li>Launch startups</li>
            <li>Partner with us</li>
          </ul>
          <p class="card-emphasis">From apprentice → journeyman → master</p>
        </article>
      </div>
    </section>

    <!-- System That Grows -->
    <section class="system-section">
      <div class="section-header">
        <h2>A System That Grows With You</h2>
        <p>Skill-Wanderer is not just a course. It's a guild system where every stage leads to the next.</p>
      </div>

      <div class="progression-track">
        <div class="progression-step">
          <span class="progression-dot" />
          <span>Apprentices become contributors</span>
        </div>
        <div class="progression-step">
          <span class="progression-dot" />
          <span>Contributors become journeymen</span>
        </div>
        <div class="progression-step">
          <span class="progression-dot" />
          <span>Journeymen become masters</span>
        </div>
        <div class="progression-step">
          <span class="progression-dot" />
          <span>And masters help the next generation rise</span>
        </div>
      </div>
    </section>

    <!-- Why It Works -->
    <section class="why-section">
      <div class="section-header narrow">
        <h2>Why Skill-Wanderer Works</h2>
      </div>

      <div class="why-grid">
        <div class="why-card">
          <span class="why-icon">⚖️</span>
          <p>Free to start, but not free to stay passive</p>
        </div>
        <div class="why-card">
          <span class="why-icon">🔄</span>
          <p>Contribution replaces tuition</p>
        </div>
        <div class="why-card">
          <span class="why-icon">🔧</span>
          <p>Real work replaces fake projects</p>
        </div>
        <div class="why-card">
          <span class="why-icon">📈</span>
          <p>Growth is earned, not given</p>
        </div>
      </div>
    </section>

    <!-- Built For -->
    <section class="audience-section">
      <div class="audience-card">
        <h2>Built for People Who Want More</h2>
        <p class="audience-intro">This is for you if:</p>
        <ul class="audience-list">
          <li>You're serious about learning tech</li>
          <li>You want real experience, not just theory</li>
          <li>You're willing to contribute, not just consume</li>
          <li>You want a path beyond courses</li>
        </ul>
      </div>
    </section>

    <section class="tiers-section">
      <div class="tiers-card">
        <div class="section-header narrow">
          <h2>Tier 1 and Tier 2 Learners</h2>
          <p>
            If you are a learner in Tier 1 or Tier 2 and you want to understand where you fit,
            contact us. We will talk with you and help you choose the right next step.
          </p>
        </div>
        <div class="tiers-actions">
          <NuxtLink to="/contact" class="btn btn-primary">Contact Us</NuxtLink>
          <NuxtLink to="/learners" class="btn btn-outline">Meet Our Learners</NuxtLink>
        </div>
      </div>
    </section>

    <!-- CTA -->
    <section class="cta-section">
      <div class="cta-card">
        <h2>Join the Guild</h2>
        <p>Don't just learn skills. Build with them.</p>
        <div class="cta-actions">
          <NuxtLink to="/learning-path" class="btn btn-primary">Start Your Journey Today</NuxtLink>
          <NuxtLink to="/principles/pathways" class="btn btn-outline">See Learner Pathways</NuxtLink>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
// Icons replaced with emojis

useSEO({
  title: 'Learn. Contribute. Build. Earn. | Skill-Wanderer Education Philosophy',
  description: 'Skill-Wanderer\'s education philosophy: start for free, contribute to unlock mentorship, build on real projects, earn through growth. A tech guild built for builders.',
  keywords: [
    'learn contribute build earn',
    'skill-wanderer',
    'education philosophy',
    'tech guild',
    'real project learning',
    'free to learn',
    'contribution model'
  ]
})
</script>

<style scoped>
.philosophy-page {
  min-height: 100vh;
  background:
    radial-gradient(circle at 10% 12%, rgba(255, 107, 53, 0.16) 0, transparent 44%),
    radial-gradient(circle at 88% 86%, rgba(255, 217, 61, 0.09) 0, transparent 48%),
    linear-gradient(160deg, #111 0%, #1b1816 44%, #0d0d0d 100%);
  color: #f4f4f4;
}

/* Hero */
.hero {
  padding: 130px 24px 74px;
}

.hero-content {
  max-width: 920px;
  margin: 0 auto;
  text-align: center;
}

.eyebrow {
  margin: 0;
  text-transform: uppercase;
  letter-spacing: 0.2em;
  color: #ffc793;
  font-size: 0.78rem;
}

h1 {
  margin: 16px 0 12px;
  font-size: clamp(2.2rem, 6vw, 4.5rem);
  line-height: 1.08;
  background: linear-gradient(135deg, #ff6b35, #ffd93d);
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
}

.hero-subtitle {
  margin: 0 0 18px;
  font-size: clamp(1.1rem, 2.2vw, 1.5rem);
  color: #ffd9b4;
  font-weight: 600;
}

.hero-description {
  margin: 0 auto;
  max-width: 760px;
  font-size: clamp(1rem, 1.8vw, 1.18rem);
  line-height: 1.8;
  color: rgba(243, 243, 243, 0.9);
}

.hero-actions,
.cta-actions {
  margin-top: 28px;
  display: flex;
  justify-content: center;
  gap: 14px;
  flex-wrap: wrap;
}

/* Shared section styles */
.section-header {
  text-align: center;
  margin: 0 auto 34px;
  max-width: 860px;
}

.section-header h2 {
  margin: 0;
  font-size: clamp(2rem, 4vw, 3rem);
  background: linear-gradient(135deg, #ff6b35, #ffd93d);
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
}

.section-header p {
  margin: 12px 0 0;
  line-height: 1.7;
  color: rgba(243, 243, 243, 0.82);
}

.narrow {
  max-width: 720px;
}

/* Journey section */
.journey-section,
.system-section,
.why-section,
.audience-section,
.tiers-section,
.cta-section {
  padding: 0 24px 84px;
}

.journey-grid {
  max-width: 1200px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
  gap: 24px;
}

.journey-card {
  background: rgba(255, 255, 255, 0.04);
  border: 1px solid rgba(255, 107, 53, 0.18);
  border-radius: 22px;
  padding: 30px 26px;
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.18);
}

.step-badge {
  display: inline-flex;
  width: 50px;
  height: 50px;
  align-items: center;
  justify-content: center;
  border-radius: 999px;
  background: rgba(255, 107, 53, 0.15);
  color: #ffd93d;
  font-weight: 800;
  letter-spacing: 0.08em;
  margin-bottom: 18px;
}

.journey-card h3 {
  margin: 0 0 14px;
  color: #ff8757;
}

.journey-card p {
  margin: 0;
  line-height: 1.8;
  color: rgba(243, 243, 243, 0.88);
}

.card-emphasis {
  margin-top: 14px !important;
  font-weight: 600;
  color: #ffd9b4 !important;
  font-style: italic;
}

.card-subheader {
  margin: 0 0 10px !important;
  font-size: 0.97rem;
  font-weight: 700;
  font-style: italic;
  color: #ffd93d !important;
  line-height: 1.5;
}

.zero-tuition {
  font-style: normal;
  color: #ff8757;
  background: rgba(255, 107, 53, 0.12);
  padding: 1px 6px;
  border-radius: 4px;
}

.contribution-list {
  margin: 12px 0 0;
  padding-left: 4px;
  list-style: none;
}

.contribution-list li {
  line-height: 1.9;
  color: rgba(243, 243, 243, 0.88);
}

.list-icon {
  margin-right: 8px;
}

.contribution-preferred {
  color: rgba(243, 243, 243, 0.95) !important;
  font-weight: 600;
}

.contribution-secondary {
  color: rgba(243, 243, 243, 0.42) !important;
  font-size: 0.9em;
  margin-top: 6px;
}

.optional-tag {
  font-style: italic;
  font-weight: 400;
}

/* System / progression section */
.progression-track {
  max-width: 700px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  gap: 0;
  position: relative;
  padding-left: 28px;
}

.progression-track::before {
  content: '';
  position: absolute;
  left: 9px;
  top: 8px;
  bottom: 8px;
  width: 2px;
  background: linear-gradient(180deg, #ff6b35, #ffd93d);
  border-radius: 2px;
}

.progression-step {
  display: flex;
  align-items: center;
  gap: 16px;
  padding: 16px 0;
  font-size: 1.12rem;
  color: rgba(243, 243, 243, 0.9);
  line-height: 1.6;
}

.progression-dot {
  position: absolute;
  left: 2px;
  width: 16px;
  height: 16px;
  border-radius: 50%;
  background: #ff6b35;
  border: 3px solid #1b1816;
  flex-shrink: 0;
}

/* Why section */
.why-grid {
  max-width: 1000px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
  gap: 20px;
}

.why-card {
  background: linear-gradient(180deg, rgba(255, 107, 53, 0.08), rgba(255, 217, 61, 0.04));
  border: 1px solid rgba(255, 107, 53, 0.18);
  border-radius: 18px;
  padding: 28px 22px;
  text-align: center;
}

.why-icon {
  display: block;
  font-size: 2rem;
  margin-bottom: 12px;
}

.why-card p {
  margin: 0;
  line-height: 1.7;
  color: rgba(243, 243, 243, 0.9);
  font-weight: 500;
}

/* Audience section */
.audience-card {
  max-width: 900px;
  margin: 0 auto;
  text-align: center;
  background: rgba(255, 255, 255, 0.04);
  border: 1px solid rgba(255, 107, 53, 0.18);
  border-radius: 22px;
  padding: 40px 30px;
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.18);
}

.audience-card h2 {
  margin: 0 0 14px;
  color: #ff8757;
}

.audience-intro {
  margin: 0 0 16px;
  color: rgba(243, 243, 243, 0.82);
  font-size: 1.05rem;
}

.audience-list {
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
}

.audience-list li {
  color: rgba(243, 243, 243, 0.9);
  line-height: 1.7;
  font-size: 1.05rem;
}

.audience-list li::before {
  content: '✓ ';
  color: #ffd93d;
  font-weight: 700;
}

/* Tier contact section */
.tiers-card {
  max-width: 900px;
  margin: 0 auto;
  text-align: center;
  background: linear-gradient(180deg, rgba(255, 107, 53, 0.08), rgba(255, 217, 61, 0.05));
  border: 1px solid rgba(255, 107, 53, 0.22);
  border-radius: 22px;
  padding: 42px 30px;
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.18);
}

.tiers-actions {
  margin-top: 26px;
  display: flex;
  justify-content: center;
  gap: 14px;
  flex-wrap: wrap;
}

/* CTA section */
.cta-card {
  max-width: 900px;
  margin: 0 auto;
  text-align: center;
  background: linear-gradient(135deg, rgba(255, 107, 53, 0.14), rgba(255, 217, 61, 0.06));
  border: 1px solid rgba(255, 107, 53, 0.28);
  border-radius: 22px;
  padding: 50px 30px;
}

.cta-card h2 {
  margin: 0 0 12px;
  font-size: clamp(2rem, 4vw, 3rem);
  background: linear-gradient(135deg, #ff6b35, #ffd93d);
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
}

.cta-card p {
  margin: 0;
  font-size: 1.15rem;
  color: rgba(243, 243, 243, 0.88);
}

/* Buttons */
.btn {
  padding: 10px 18px;
  border-radius: 999px;
  font-weight: 600;
  text-decoration: none;
  border: 1px solid transparent;
  transition: transform 0.2s ease, opacity 0.2s ease, border-color 0.2s ease;
}

.btn:hover {
  transform: translateY(-2px);
  opacity: 0.96;
}

.btn-primary {
  background: linear-gradient(135deg, #ff6b35, #ff8848);
  color: #fff;
}

.btn-secondary,
.btn-outline {
  border-color: rgba(255, 199, 147, 0.55);
  color: #ffd9b4;
}

/* Responsive */
@media (max-width: 768px) {
  .hero {
    padding: 118px 20px 60px;
  }

  .journey-section,
  .system-section,
  .why-section,
  .audience-section,
  .tiers-section,
  .cta-section {
    padding: 0 20px 72px;
  }

  .journey-card,
  .audience-card,
  .tiers-card,
  .cta-card {
    padding: 24px 20px;
  }
}
</style>