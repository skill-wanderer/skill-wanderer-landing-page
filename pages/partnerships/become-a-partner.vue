<template>
  <div>
    <!-- Hero Section -->
    <section class="hero">
      <h1>Become a Technology Partner</h1>
      <p>
        We're not outsourcing—we're your technology partner. We share both the success and the risks with you,
        requiring less upfront cost while our community of learners helps bring your vision to life.
      </p>
      <NuxtLink to="/partnerships/success-sharing-model" class="launch-badge-link">Shared Success. Shared Risk. Real Partnership.</NuxtLink>
    </section>

    <!-- Why Partner Section -->
    <section class="philosophy">
      <div class="philosophy-content">
        <h2>Why We're Different From Outsourcing</h2>
        <p class="philosophy-description">
          Traditional outsourcing asks you to pay upfront for work without shared accountability. We do it differently—
          we become your true technology partner. We invest alongside you, share in your success, and take on the risks together.
          <strong style="color: var(--primary-orange);">
            Lower upfront costs. Revenue sharing when you succeed. Genuine partnership.
          </strong>
        </p>

        <div class="karma-cycle">
          <div class="cycle-item">
            <div class="cycle-icon">🤝</div>
            <h3>Shared Risk</h3>
            <p>We invest in your success together</p>
          </div>
          <span class="cycle-arrow">→</span>
          <div class="cycle-item">
            <div class="cycle-icon">💰</div>
            <h3>Lower Upfront Costs</h3>
            <p>Pay less now, share success later</p>
          </div>
          <span class="cycle-arrow">→</span>
          <div class="cycle-item">
            <div class="cycle-icon">🌱</div>
            <h3>Mutual Growth</h3>
            <p>Your success funds free education</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Partnership Benefits -->
    <section class="services-preview">
      <div class="services-content">
        <div class="section-header">
          <h2>The Partnership Advantage</h2>
          <p>Why shared success beats traditional outsourcing</p>
        </div>

        <div class="partner-features">
          <div class="feature-card">
            <div class="feature-icon">💸</div>
            <h4>Reduced Upfront Investment</h4>
            <p>
              Unlike traditional outsourcing, we don't ask for large upfront payments. Start building with minimal
              initial cost while we share the journey with you.
            </p>
          </div>

          <div class="feature-card">
            <div class="feature-icon">📈</div>
            <h4>Success Sharing Model</h4>
            <p>
              We earn when you succeed. Our revenue comes from sharing in your success, aligning our incentives
              with your business outcomes.
            </p>
          </div>

          <div class="feature-card">
            <div class="feature-icon">🌐</div>
            <h4>Community-Powered Talent</h4>
            <p>
              Work gets done by motivated learners from our global community—people eager to prove themselves
              on real projects with real stakes.
            </p>
          </div>

          <div class="feature-card">
            <div class="feature-icon">⚖️</div>
            <h4>True Risk Partnership</h4>
            <p>
              We share both success and setbacks. When you face challenges, we're right there with you—because
              that's what real partners do.
            </p>
          </div>
        </div>

        <div class="impact-statement">
          <div class="impact-icon">💫</div>
          <h3>The True Partnership Difference</h3>
          <p>
            This isn't outsourcing with a different name. We invest our time, expertise, and community alongside your vision.
            <strong>You pay less upfront</strong>, <strong>we share in your success</strong>, and <strong>our learners gain
            real-world experience</strong>—creating a model where everyone wins when you win.
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
          <h3>Why This Works Better Than Outsourcing:</h3>
          <div class="alignment-points">
            <div class="alignment-item">
              <span class="alignment-icon">💸</span>
              <p><strong>For You:</strong> Lower risk with reduced upfront costs—we succeed together or not at all.</p>
            </div>
            <div class="alignment-item">
              <span class="alignment-icon">🎯</span>
              <p><strong>For Us:</strong> We're motivated by your success, not just billing hours.</p>
            </div>
            <div class="alignment-item">
              <span class="alignment-icon">🌟</span>
              <p><strong>For Learners:</strong> Real projects with real stakes create real skills.</p>
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
        <h2>Ready for a Real Partnership?</h2>
        <p>
          Forget the outsourcing playbook. Let's build together—with shared risk, shared success, and a community
          ready to help you win.
        </p>

        <div class="cta-buttons">
          <NuxtLink to="/contact" class="btn btn-primary">Start the Conversation</NuxtLink>
          <NuxtLink to="/partnerships/success-sharing-model" class="btn btn-secondary">Learn About Success Sharing</NuxtLink>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
useSEO({
  title: 'Become a Technology Partner | Skill-Wanderer',
  description:
    'Not outsourcing—true partnership. We share success and risks with you, require less upfront cost, and deliver through our global community of learners.',
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

.launch-badge-link {
  background: linear-gradient(135deg, var(--primary-orange), var(--deep-orange));
  color: white;
  padding: 12px 30px;
  border-radius: 50px;
  font-weight: bold;
  font-size: 1.1rem;
  display: inline-block;
  position: relative;
  z-index: 1;
  text-decoration: none;
  transition: all 0.3s ease;
}

.launch-badge-link:hover {
  background: linear-gradient(135deg, var(--deep-orange), var(--primary-orange));
  transform: translateY(-2px);
  box-shadow: 0 10px 30px rgba(255, 107, 53, 0.4);
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
