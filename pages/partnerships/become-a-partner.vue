<template>
  <div>
    <!-- Hero Section -->
    <section class="hero">
      <h1>Become a Technology Partner</h1>
      <p>
        Partner with us to ship meaningful technology, access global learning talent, and create real social impact—while
        directly funding free, practical education.
      </p>
      <span class="launch-badge">Your Success Funds Free Education</span>
    </section>

    <!-- Why Partner Section -->
    <section class="philosophy">
      <div class="philosophy-content">
        <h2>Why Partner With Us?</h2>
        <p class="philosophy-description">
          Whether you have a business problem to solve, need access to motivated talent, want to train your community, or
          aim to create measurable social impact—our partnership model connects your vision with a learner-first ecosystem.
          <strong style="color: var(--primary-orange);">
            Every partnership directly sustains our mission to provide free education globally.
          </strong>
        </p>

        <div class="karma-cycle">
          <div class="cycle-item">
            <div class="cycle-icon">💡</div>
            <h3>Solve Real Problems</h3>
            <p>Turn your needs into clear outcomes</p>
          </div>
          <span class="cycle-arrow">→</span>
          <div class="cycle-item">
            <div class="cycle-icon">🎓</div>
            <h3>Grow Talent</h3>
            <p>Build pathways and real experience</p>
          </div>
          <span class="cycle-arrow">→</span>
          <div class="cycle-item">
            <div class="cycle-icon">🌍</div>
            <h3>Fund Free Education</h3>
            <p>Reinvest into global learning access</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Opportunity Pillars -->
    <section class="services-preview">
      <div class="services-content">
        <div class="section-header">
          <h2>Partnership Opportunities</h2>
          <p>Four ways we can build a win-win-win together</p>
        </div>

        <div class="partner-features">
          <div class="feature-card">
            <div class="feature-icon">🚀</div>
            <h4>Realize Your Business Idea</h4>
            <p>
              Bring a concept to life with a partner who cares about outcomes—delivery that also creates learning
              opportunities.
            </p>
          </div>

          <div class="feature-card">
            <div class="feature-icon">🌐</div>
            <h4>Access Global Learning Talent</h4>
            <p>
              Collaborate with motivated learners worldwide who want real projects, real feedback, and real growth.
            </p>
          </div>

          <div class="feature-card">
            <div class="feature-icon">👥</div>
            <h4>Train Your Community</h4>
            <p>
              Upskill your team or community using practical pathways designed to turn curiosity into capability.
            </p>
          </div>

          <div class="feature-card">
            <div class="feature-icon">🌱</div>
            <h4>Make Social Impact</h4>
            <p>
              Build technology and programs that expand access to education—measurable impact, not marketing.
            </p>
          </div>
        </div>

        <div class="impact-statement">
          <div class="impact-icon">💫</div>
          <h3>The Partnership Impact Model</h3>
          <p>
            Every partnership is a win-win-win: <strong>you get real problems solved</strong>, <strong>learners gain
            real-world experience</strong>, and <strong>our non-profit mission stays funded</strong>—keeping education free
            and practical for those who need it most.
          </p>
        </div>
      </div>
    </section>

    <!-- Partnership Model -->
    <section class="partnership-model">
      <div class="model-content">
        <div class="section-header">
          <h2>How Our Partnership Model Works</h2>
        </div>

        <div class="model-intro">
          <p class="model-statement">We’re not a traditional outsourcing or staffing shop.</p>
          <p class="model-description">
            We collaborate through long-term models that may include outcome-based scopes, revenue sharing, or building
            dedicated teams from our learning community.
          </p>
        </div>

        <div class="model-details">
          <div class="model-card">
            <div class="model-icon">💫</div>
            <h4>Mission-Support Fee</h4>
            <p>
              When applicable, a modest monthly mission-support fee sustains the ecosystem—coordination, mentorship, and
              educational oversight.
            </p>
          </div>

          <div class="model-card">
            <div class="model-icon">🏗️</div>
            <h4>Infrastructure Costs</h4>
            <p>
              Product infrastructure costs—cloud, tooling, and operations—are borne by the partner, keeping spend focused
              on your delivery.
            </p>
          </div>

          <div class="model-card">
            <div class="model-icon">🎓</div>
            <h4>Learner Pathways</h4>
            <p>
              Learners are not treated as short-term resources. The goal is stable pathways and durable value for
              partners.
            </p>
          </div>
        </div>

        <div class="model-alignment">
          <h3>This structure aligns incentives:</h3>
          <div class="alignment-points">
            <div class="alignment-item">
              <span class="alignment-icon">🤝</span>
              <p><strong>Partners</strong> get committed collaboration without churn.</p>
            </div>
            <div class="alignment-item">
              <span class="alignment-icon">🚀</span>
              <p><strong>Learners</strong> gain real pathways, not just practice.</p>
            </div>
            <div class="alignment-item">
              <span class="alignment-icon">🌍</span>
              <p><strong>Skill-Wanderer</strong> sustains free education through real work.</p>
            </div>
          </div>
        </div>

        <div class="transparency-note">
          <p>
            Partnerships are listed for transparency about collaboration and learning opportunities, not as endorsements
            or paid promotion.
          </p>
        </div>
      </div>
    </section>

    <!-- CTA -->
    <section class="coming-soon-cta">
      <div class="cta-content">
        <h2>Ready to Partner With Us?</h2>
        <p>
          Let’s build something meaningful. Solve real problems while sustaining free education.
        </p>

        <div class="cta-buttons">
          <NuxtLink to="/contact" class="btn btn-primary">Become a Partner</NuxtLink>
          <NuxtLink to="/partnerships/our-partners" class="btn btn-secondary">View our Impact &amp; Partners</NuxtLink>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
useSEO({
  title: 'Become a Technology Partner | Skill-Wanderer',
  description:
    'Partner with Skill-Wanderer to solve real problems, access global learning talent, train communities, and create social impact—while funding free education.',
  image: '/cropped-skill-wanderer-logo-768x256.webp'
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
  max-width: 980px;
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

.philosophy {
  padding: 80px 20px;
  background: var(--darker-bg);
}

.philosophy-content {
  max-width: 1100px;
  margin: 0 auto;
  text-align: center;
}

.philosophy h2 {
  font-size: 2.5rem;
  color: var(--primary-orange);
  margin-bottom: 25px;
}

.philosophy-description {
  font-size: 1.1rem;
  opacity: 0.9;
  margin-bottom: 40px;
}

.karma-cycle {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 40px;
  margin: 50px 0;
  flex-wrap: wrap;
}

.cycle-item {
  text-align: center;
  flex: 1;
  min-width: 200px;
}

.cycle-icon {
  width: 80px;
  height: 80px;
  background: linear-gradient(135deg, var(--primary-orange), var(--deep-orange));
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto 20px;
  font-size: 36px;
}

.cycle-arrow {
  font-size: 2rem;
  color: var(--primary-orange);
  opacity: 0.5;
}

.cycle-item h3 {
  color: white;
  margin-bottom: 10px;
  font-size: 1.2rem;
}

.cycle-item p {
  opacity: 0.8;
  font-size: 0.95rem;
}

.services-preview {
  padding: 80px 20px;
  background: var(--dark-bg);
}

.services-content {
  max-width: 1200px;
  margin: 0 auto;
}

.section-header {
  text-align: center;
  margin-bottom: 60px;
}

.section-header h2 {
  font-size: 2.5rem;
  color: var(--primary-orange);
  margin-bottom: 20px;
}

.section-header p {
  font-size: 1.2rem;
  opacity: 0.8;
}

.partner-features {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
  gap: 25px;
}

.feature-card {
  background: var(--darker-bg);
  border-radius: 15px;
  padding: 30px;
  text-align: center;
  border: 1px solid rgba(255, 107, 53, 0.1);
  transition: all 0.3s ease;
}

.feature-card:hover {
  background: var(--card-hover);
  transform: translateY(-5px);
  border-color: rgba(255, 107, 53, 0.3);
}

.feature-icon {
  font-size: 2.5rem;
  margin-bottom: 15px;
  display: block;
}

.feature-card h4 {
  color: var(--primary-orange);
  margin-bottom: 12px;
  font-size: 1.2rem;
}

.feature-card p {
  opacity: 0.85;
  line-height: 1.6;
  font-size: 0.95rem;
}

.impact-statement {
  margin-top: 50px;
  background: rgba(255, 107, 53, 0.08);
  border: 1px solid rgba(255, 107, 53, 0.2);
  border-radius: 20px;
  padding: 35px;
  text-align: center;
}

.impact-icon {
  font-size: 2.5rem;
  margin-bottom: 15px;
}

.impact-statement h3 {
  color: white;
  font-size: 1.8rem;
  margin-bottom: 15px;
}

.impact-statement p {
  opacity: 0.9;
  font-size: 1.05rem;
  line-height: 1.7;
}

.partnership-model {
  padding: 80px 20px;
  background: var(--darker-bg);
}

.model-content {
  max-width: 1000px;
  margin: 0 auto;
}

.model-intro {
  text-align: center;
  margin-bottom: 50px;
}

.model-statement {
  font-size: 1.2rem;
  color: var(--light-text);
  margin-bottom: 15px;
  font-weight: 500;
}

.model-description {
  font-size: 1.1rem;
  opacity: 0.9;
  max-width: 900px;
  margin: 0 auto;
}

.model-details {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
  gap: 25px;
  margin-bottom: 45px;
}

.model-card {
  background: var(--card-bg);
  border-radius: 15px;
  padding: 28px;
  border: 1px solid rgba(255, 107, 53, 0.15);
  transition: all 0.3s ease;
}

.model-card:hover {
  background: var(--card-hover);
  transform: translateY(-5px);
  border-color: rgba(255, 107, 53, 0.3);
}

.model-icon {
  font-size: 2.2rem;
  margin-bottom: 12px;
}

.model-card h4 {
  color: var(--primary-orange);
  margin-bottom: 12px;
  font-size: 1.2rem;
}

.model-card p {
  opacity: 0.85;
  line-height: 1.6;
}

.model-alignment h3 {
  color: white;
  font-size: 1.5rem;
  margin-bottom: 18px;
  text-align: center;
}

.alignment-points {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
  gap: 15px;
}

.alignment-item {
  display: flex;
  gap: 12px;
  padding: 16px;
  background: rgba(255, 255, 255, 0.04);
  border: 1px solid rgba(255, 107, 53, 0.12);
  border-radius: 12px;
}

.alignment-icon {
  font-size: 1.4rem;
  line-height: 1.2;
}

.transparency-note {
  margin-top: 35px;
  padding: 18px;
  background: rgba(0, 0, 0, 0.2);
  border-radius: 12px;
  border: 1px solid rgba(255, 107, 53, 0.12);
}

.transparency-note p {
  margin: 0;
  opacity: 0.85;
}

.coming-soon-cta {
  padding: 80px 20px;
  background: var(--dark-bg);
  text-align: center;
}

.cta-content {
  max-width: 900px;
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

@media (max-width: 768px) {
  .hero h1 {
    font-size: 2.6rem;
  }

  .hero p {
    font-size: 1.1rem;
  }

  .karma-cycle {
    gap: 18px;
  }

  .cycle-arrow {
    display: none;
  }
}
</style>
