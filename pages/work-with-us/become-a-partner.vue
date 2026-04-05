<template>
  <div>
    <!-- Hero Section -->
    <section class="hero">
      <h1>Become a Guild Partner</h1>
      <p>
        We work with organizations that need reliable, senior-led engineering capacity.
        Not outsourcing. Not staff augmentation. A delivery system you plug into —
        with predictable cadence, transparent pricing, and architectural oversight built in.
      </p>
      <NuxtLink to="/work-with-us/delivery-model" class="launch-badge-link">How Our Delivery Model Works</NuxtLink>
    </section>

    <!-- Why Partner -->
    <section class="philosophy">
      <div class="philosophy-content">
        <h2>What Makes a Guild Partnership Different</h2>
        <p class="philosophy-description">
          A guild partnership is not a vendor contract. It is a long-term delivery relationship
          where the same senior architect leads your work, the same artisans build your system,
          and the same sprint rhythm keeps progress visible.
          <strong style="color: var(--primary-orange);">
            You get a system, not a person. And the system is designed to scale with you.
          </strong>
        </p>

        <div class="karma-cycle">
          <div class="cycle-item">
            <div class="cycle-icon"><Shield :size="24" :stroke-width="2" /></div>
            <h3>Senior-Led Delivery</h3>
            <p>Every engagement architected and reviewed by the Guild Master</p>
          </div>
          <span class="cycle-arrow">→</span>
          <div class="cycle-item">
            <div class="cycle-icon"><Layers :size="24" :stroke-width="2" /></div>
            <h3>Scalable Capacity</h3>
            <p>From single sprints to dedicated engineering pods</p>
          </div>
          <span class="cycle-arrow">→</span>
          <div class="cycle-item">
            <div class="cycle-icon"><Landmark :size="24" :stroke-width="2" /></div>
            <h3>Mission-Backed</h3>
            <p>Your work funds free education — a genuine impact story</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Partnership Advantages -->
    <section class="services-preview">
      <div class="services-content">
        <div class="section-header">
          <h2>The Partnership Advantage</h2>
          <p>Why teams choose the guild over traditional outsourcing or agency models</p>
        </div>

        <div class="partner-features">
          <div class="feature-card">
            <div class="feature-icon"><Shield :size="24" color="white" :stroke-width="2" /></div>
            <h4>Architectural Oversight</h4>
            <p>
              The Guild Master leads architecture, reviews code, and maintains quality
              standards across every sprint. You're never relying on unsupervised work.
            </p>
          </div>

          <div class="feature-card">
            <div class="feature-icon"><Calculator :size="24" color="white" :stroke-width="2" /></div>
            <h4>Predictable Pricing</h4>
            <p>
              Sprint bands are confirmed before work begins. Retainer capacity is fixed monthly.
              No surprise invoices, no scope-creep billing.
            </p>
          </div>

          <div class="feature-card">
            <div class="feature-icon"><Users :size="24" color="white" :stroke-width="2" /></div>
            <h4>No Hiring Overhead</h4>
            <p>
              Skip recruiting, onboarding, and HR complexity. The guild provides
              ready-to-deploy engineering capacity under a single relationship.
            </p>
          </div>

          <div class="feature-card">
            <div class="feature-icon"><Unlock :size="24" color="white" :stroke-width="2" /></div>
            <h4>Full Ownership, Zero Lock-In</h4>
            <p>
              All code belongs to you. Open standards, clear documentation, and knowledge
              transfer at every milestone. Walk away whenever you want.
            </p>
          </div>
        </div>

        <div class="impact-statement">
          <div class="impact-icon"><Landmark :size="28" :stroke-width="1.8" /></div>
          <h3>The Mission Advantage</h3>
          <p>
            Every engagement through the guild funds free education and trains the next generation
            of developers. This is not a marketing angle — it's the economic model.
            <strong>Your sprint dollars sustain the learning ecosystem.</strong>
          </p>
        </div>
      </div>
    </section>

    <!-- How Partnership Works -->
    <section class="partnership-model">
      <div class="model-content">
        <div class="section-header">
          <h2>How a Guild Partnership Works</h2>
        </div>

        <div class="model-intro">
          <p class="model-statement">Start with a sprint. Scale into a pod. Stay as long as we're useful.</p>
          <p class="model-description">
            Most partnerships begin with a single sprint cycle to validate the working relationship.
            From there, teams scale into retainer capacity or dedicated engineering pods
            based on roadmap needs.
          </p>
        </div>

        <div class="model-details">
          <div class="model-card">
            <div class="model-icon"><Compass :size="24" color="white" :stroke-width="2" /></div>
            <h4>Start with a Sprint</h4>
            <p>
              A two-week cycle to validate the working relationship. Real deliverables,
              senior oversight, and a clear picture of how the guild operates.
            </p>
          </div>

          <div class="model-card">
            <div class="model-icon"><RefreshCw :size="24" color="white" :stroke-width="2" /></div>
            <h4>Scale into Cadence</h4>
            <p>
              Move to ongoing sprint cycles or a monthly engineering pod.
              The same team, the same standards, predictable cost and capacity.
            </p>
          </div>

          <div class="model-card">
            <div class="model-icon"><FileCheck :size="24" color="white" :stroke-width="2" /></div>
            <h4>Full Knowledge Transfer</h4>
            <p>
              Documentation, walkthroughs, and handover support built into every engagement.
              Your team can take ownership at any point.
            </p>
          </div>
        </div>

        <div class="model-alignment">
          <h3>Why This Works</h3>
          <div class="alignment-points">
            <div class="alignment-item">
              <span class="alignment-icon"><Calculator :size="24" :stroke-width="2" /></span>
              <p><strong>For You:</strong> Predictable cost, senior oversight, and delivery you can plan around.</p>
            </div>
            <div class="alignment-item">
              <span class="alignment-icon"><Shield :size="24" :stroke-width="2" /></span>
              <p><strong>For the Guild:</strong> Stable engagements fund the mission and develop guild artisans.</p>
            </div>
            <div class="alignment-item">
              <span class="alignment-icon"><GraduationCap :size="24" :stroke-width="2" /></span>
              <p><strong>For Learners:</strong> Real projects under senior oversight create real skills.</p>
            </div>
          </div>
        </div>

        <div class="transparency-note">
          <p>
            Partnerships are listed for transparency about collaboration and learning opportunities,
            not as endorsements or paid promotion.
          </p>
        </div>
      </div>
    </section>

    <!-- CTA -->
    <section class="coming-soon-cta">
      <div class="cta-content">
        <h2>Ready to Start?</h2>
        <p>
          Review the pricing structure, or reach out directly to scope a starting point.
          No pitch deck required — just a clear conversation about what you need.
        </p>

        <div class="cta-buttons">
          <NuxtLink to="/work-with-us/pricing" class="btn btn-primary">View Pricing</NuxtLink>
          <NuxtLink to="/contact" class="btn btn-secondary">Start a Conversation</NuxtLink>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import { Calculator, Compass, FileCheck, GraduationCap, Landmark, Layers, RefreshCw, Shield, Unlock, Users } from 'lucide-vue-next'

useSEO({
  title: 'Become a Guild Partner | Skill-Wanderer',
  description:
    'Senior-led engineering partnerships with predictable sprint delivery, scalable capacity, and mission-backed sustainability. Not outsourcing — a system you plug into.',
  image: '/cropped-skill-wanderer-logo-768x256.webp',
  keywords: ['technology partner', 'guild partnership', 'engineering pod', 'sprint delivery', 'senior-led development', 'software development partner'],
  structuredData: createBreadcrumbSchema([
    { name: 'Home', url: 'https://skill-wanderer.com/' },
    { name: 'Work With Us', url: 'https://skill-wanderer.com/work-with-us' },
    { name: 'Become a Partner', url: 'https://skill-wanderer.com/work-with-us/become-a-partner' },
  ]),
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
  line-height: 1.8;
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
  line-height: 1.8;
  max-width: 900px;
  margin-left: auto;
  margin-right: auto;
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
  line-height: 1.75;
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
  line-height: 1.75;
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
