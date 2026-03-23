<template>
  <div>
    <!-- Hero Section -->
    <section class="hero">
      <h1>Work With Us</h1>
      <p>
        We apply real-world technology expertise to solve real problems—and every challenge we tackle fuels free education.
        This is how we sustain our mission without ads, donations, or compromise.
      </p>
      <span class="launch-badge">Real Work. Real Learning. Real Impact.</span>
    </section>

    <!-- How It All Connects Section -->
    <section class="connection-section">
      <div class="content">
        <div class="section-header">
          <h2>How It All Connects</h2>
          <p>A self-sustaining cycle where expertise creates impact, and impact creates learning</p>
        </div>

        <div class="cycle-flow">
          <div class="cycle-step">
            <div class="cycle-icon">🤝</div>
            <h3>Technology Partnerships</h3>
            <p>We partner with businesses as their true technology team—sharing risks, sharing success.</p>
          </div>
          <div class="cycle-arrow">→</div>
          <div class="cycle-step">
            <div class="cycle-icon">🛠️</div>
            <h3>Real-World Delivery</h3>
            <p>Our community delivers real products, gaining hands-on experience with real stakes.</p>
          </div>
          <div class="cycle-arrow">→</div>
          <div class="cycle-step">
            <div class="cycle-icon">📚</div>
            <h3>Free Education</h3>
            <p>Revenue from partnerships funds free education—no ads, no donations, no compromise.</p>
          </div>
          <div class="cycle-arrow">→</div>
          <div class="cycle-step">
            <div class="cycle-icon">🌱</div>
            <h3>Community Growth</h3>
            <p>Learners grow into skilled practitioners, ready to contribute to the next partnership.</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Two Pillars Section -->
    <section class="pillars-section">
      <div class="content">
        <div class="section-header">
          <h2>Explore Work With Us</h2>
          <p>Two pillars that power our mission</p>
        </div>

        <div class="pillars-grid">
          <div class="pillar-card">
            <div class="pillar-icon">💡</div>
            <h3>Success Sharing Model</h3>
            <p>
              We don't do outsourcing. We become your true technology partner—sharing both the success and the risks with you.
              Lower upfront costs. Revenue when you win. Community-powered talent.
            </p>
            <ul class="pillar-highlights">
              <li>Lower upfront investment</li>
              <li>Revenue tied to your success</li>
              <li>Risks shared together</li>
              <li>Long-term, genuine partnership</li>
            </ul>
            <NuxtLink to="/expertise-impact/success-sharing-model" class="pillar-link">
              Learn How It Works <span>→</span>
            </NuxtLink>
          </div>

          <div class="pillar-card">
            <div class="pillar-icon">🚀</div>
            <h3>Become a Partner</h3>
            <p>
              We're not a staffing agency or outsourcing shop. We collaborate through long-term models that include
              outcome-based scopes, revenue sharing, and dedicated teams from our learning community.
            </p>
            <ul class="pillar-highlights">
              <li>True risk partnership</li>
              <li>Community-powered delivery</li>
              <li>Mission-support structure</li>
              <li>Learner growth pathways</li>
            </ul>
            <NuxtLink to="/expertise-impact/become-a-partner" class="pillar-link">
              Become a Partner <span>→</span>
            </NuxtLink>
          </div>
        </div>
      </div>
    </section>

    <!-- Why This Matters Section -->
    <section class="why-section">
      <div class="content">
        <div class="section-header">
          <h2>Why This Matters</h2>
          <p>This isn't just a business model—it's the engine of our educational mission</p>
        </div>

        <div class="why-grid">
          <div class="why-card">
            <div class="why-icon">🎓</div>
            <h3>Education Stays Free</h3>
            <p>
              Revenue from technology partnerships directly funds free education. No ads, no affiliate marketing, 
              no paywalls—just pure, passionate learning sustained by real work.
            </p>
          </div>

          <div class="why-card">
            <div class="why-icon">⚡</div>
            <h3>Content Stays Relevant</h3>
            <p>
              Because we work in the real world, our educational content reflects real challenges, real tools, 
              and real solutions. Theory grounded in practice.
            </p>
          </div>

          <div class="why-card">
            <div class="why-icon">🔄</div>
            <h3>Learners Get Real Experience</h3>
            <p>
              Our community members work on real projects with real stakes. This isn't a simulation—it's 
              genuine hands-on experience that builds real careers.
            </p>
          </div>

          <div class="why-card">
            <div class="why-icon">🛡️</div>
            <h3>Independence From Donations</h3>
            <p>
              We don't rely on charity to sustain our mission. We earn our way through skill and partnership, 
              ensuring long-term sustainability and complete mission integrity.
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- CTA Section -->
    <section class="cta-section">
      <div class="cta-content">
        <h2>Ready to Create Impact Together?</h2>
        <p>
          Whether you're a business looking for a true technology partner or someone curious about how 
          we sustain free education—we'd love to talk.
        </p>
        <div class="cta-buttons">
          <NuxtLink to="/expertise-impact/success-sharing-model" class="btn btn-primary">Explore the Model</NuxtLink>
          <NuxtLink to="/contact" class="btn btn-secondary">Start a Conversation</NuxtLink>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
useSEO({
  title: 'Work With Us | Skill-Wanderer',
  description:
    'Real-world technology expertise that fuels free education. Learn about our Success Sharing Model, partnership approach, and how every project creates learning opportunities.',
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

/* Why Section */
.why-section {
  padding: 80px 20px;
  background: var(--darker-bg);
}

.why-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
  gap: 30px;
}

.why-card {
  background: var(--card-bg);
  border-radius: 20px;
  padding: 35px;
  border: 1px solid rgba(255, 107, 53, 0.1);
  transition: all 0.3s ease;
}

.why-card:hover {
  transform: translateY(-5px);
  border-color: rgba(255, 107, 53, 0.3);
}

.why-icon {
  font-size: 2.5rem;
  margin-bottom: 15px;
  display: block;
}

.why-card h3 {
  color: var(--primary-orange);
  font-size: 1.3rem;
  margin-bottom: 15px;
}

.why-card p {
  opacity: 0.85;
  line-height: 1.7;
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

}
</style>
