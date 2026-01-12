<template>
  <div>
    <!-- Hero Section -->
    <section class="hero">
      <h1>Our Technology Partners</h1>
      <p>
        We don't do outsourcing—we do true partnership. Through our Success Sharing Model, we share risks and rewards
        with our partners, requiring less upfront cost while our community delivers real work.
      </p>
      <NuxtLink to="/partnerships/success-sharing-model" class="launch-badge-link">Success Sharing Model</NuxtLink>
    </section>

    <!-- Featured Partner: MindyCore (preserved detail) -->
    <section class="partner-section">
      <div class="content">
        <div class="partner-spotlight mindycore-theme">
          <div class="partner-header">
            <div class="section-header">
              <h2 class="mindycore-header">Featured Partner Success Story</h2>
              <p class="mindycore-text">See how partnerships create meaningful impact</p>
            </div>
          </div>

          <div class="partner-logo-section">
            <div class="partner-logo">
              <img src="/cropped-mindycore-logo.webp" alt="MindyCore Logo" class="mindycore-logo" />
            </div>
            <div class="partner-tagline">
              <h3 class="mindycore-tagline">Ignite Your Curiosity. Feel the Connection. Empower Your Unique Growth.</h3>
            </div>
          </div>

          <div class="partner-description">
            <p class="mindycore-text">
              MindyCore passionately unlocks human potential through compassionate technology and creativity. They
              design digital solutions that inspire, educate, and empower—serving schools, families, lifelong learners,
              and notably, NGOs dedicated to social good.
            </p>
          </div>

          <div class="partner-achievements">
            <div class="achievement-card mindycore-card">
              <div class="achievement-icon">🧠</div>
              <h4 class="mindycore-card-title">MindyMinds</h4>
              <p class="mindycore-text">
                AI-powered personalized chatbots designed for your unique mind. 100 free beta spots available!
              </p>
            </div>

            <div class="achievement-card mindycore-card">
              <div class="achievement-icon">🎮</div>
              <h4 class="mindycore-card-title">MindyPlay</h4>
              <p class="mindycore-text">
                Bespoke pedagogical games that make learning a joy—crafted to celebrate your uniqueness.
              </p>
            </div>

            <div class="achievement-card mindycore-card">
              <div class="achievement-icon">💜</div>
              <h4 class="mindycore-card-title">Social Impact &amp; Career Development</h4>
              <p class="mindycore-text">
                Supporting WM Smile Generation Uganda with education for children. Offering
                <strong class="mindycore-highlight">completely free volunteer training</strong> to help aspiring tech
                professionals become job-ready through real-world projects, mentorship, and a potential path to
                MindyCore employment.
              </p>
            </div>
          </div>

          <div class="partner-cta">
            <a href="https://mindycore.com/about/" target="_blank" rel="noopener noreferrer" class="btn btn-mindycore-primary">
              Learn About MindyCore
            </a>
            <NuxtLink to="/mindycore/free-tech-training" class="btn btn-mindycore-secondary">
              MindyCore Tech Training Program
            </NuxtLink>
          </div>
        </div>
      </div>
    </section>

    <!-- CTA -->
    <section class="cta">
      <div class="cta-content">
        <h2>Ready for a Real Partnership?</h2>
        <p>
          Lower upfront costs. Shared success. Community-powered talent. Let's build something meaningful together.
        </p>
        <div class="cta-buttons">
          <NuxtLink to="/partnerships/success-sharing-model" class="btn btn-primary">Learn About Success Sharing</NuxtLink>
          <NuxtLink to="/partnerships/become-a-partner" class="btn btn-secondary">Become a Partner</NuxtLink>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
useSEO({
  title: 'Our Technology Partners | Skill-Wanderer',
  description:
    'See our Success Sharing Model in action. We partner differently—shared risks, lower upfront costs, and community talent delivering real results.',
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
  background: radial-gradient(circle at 70% 40%, rgba(255, 107, 53, 0.1) 0%, transparent 55%);
}

.hero h1 {
  font-size: 3.5rem;
  color: white;
  margin-bottom: 20px;
  position: relative;
  z-index: 1;
}

.hero p {
  font-size: 1.2rem;
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

.partner-section {
  padding: 80px 20px;
  background: var(--dark-bg);
}

.content {
  max-width: 1100px;
  margin: 0 auto;
}

.section-header {
  text-align: center;
  margin-bottom: 50px;
}

.section-header h2 {
  font-size: 2.5rem;
  color: var(--primary-orange);
  margin-bottom: 16px;
}

.section-header p {
  font-size: 1.1rem;
  opacity: 0.85;
}

/* Partner Spotlight Styles */
.partner-spotlight {
  background: var(--card-bg);
  border-radius: 20px;
  padding: 50px;
  border: 2px solid rgba(255, 107, 53, 0.2);
}

/* MindyCore Theme Colors (preserved) */
.partner-spotlight.mindycore-theme {
  background: #1e3a8a;
  border: 2px solid #fbbf24;
}

.mindycore-header {
  color: #fbbf24 !important;
  font-size: 2rem;
  margin-bottom: 15px;
}

.mindycore-text {
  color: white !important;
  opacity: 0.95;
}

.mindycore-tagline {
  color: #fbbf24 !important;
}

.mindycore-card {
  background: rgba(30, 58, 138, 0.6) !important;
  border: 1px solid rgba(251, 191, 36, 0.3) !important;
}

.mindycore-card:hover {
  background: rgba(30, 58, 138, 0.8) !important;
  border-color: rgba(251, 191, 36, 0.5) !important;
}

.mindycore-card-title {
  color: #fbbf24 !important;
}

.mindycore-highlight {
  color: #fbbf24 !important;
}

.partner-header {
  text-align: center;
  margin-bottom: 40px;
}

.partner-logo-section {
  text-align: center;
  margin-bottom: 40px;
  padding-bottom: 30px;
  border-bottom: 2px solid rgba(251, 191, 36, 0.3);
}

.partner-logo {
  margin-bottom: 20px;
}

.mindycore-logo {
  max-width: 300px;
  height: auto;
  display: block;
  margin: 0 auto;
}

.partner-tagline h3 {
  font-size: 1.5rem;
  font-weight: 500;
  line-height: 1.4;
}

.partner-description {
  text-align: center;
  margin-bottom: 50px;
}

.partner-description p {
  font-size: 1.1rem;
  line-height: 1.8;
  opacity: 0.95;
  max-width: 900px;
  margin: 0 auto;
}

.partner-achievements {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 30px;
  margin-bottom: 40px;
}

.achievement-card {
  border-radius: 15px;
  padding: 30px;
  text-align: center;
  transition: all 0.3s ease;
}

.achievement-icon {
  font-size: 2.5rem;
  margin-bottom: 15px;
  display: block;
}

.achievement-card h4 {
  margin-bottom: 12px;
  font-size: 1.2rem;
}

.achievement-card p {
  opacity: 0.9;
  line-height: 1.6;
  font-size: 0.95rem;
}

.partner-cta {
  display: flex;
  gap: 20px;
  justify-content: center;
  flex-wrap: wrap;
}

.cta {
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
  justify-content: center;
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

/* MindyCore Theme Buttons (preserved) */
.btn-mindycore-primary {
  background: #fbbf24;
  color: #1e3a8a;
}

.btn-mindycore-primary:hover {
  background: #f59e0b;
  color: #1e3a8a;
  transform: translateY(-2px);
  box-shadow: 0 10px 30px rgba(251, 191, 36, 0.4);
}

.btn-mindycore-secondary {
  background: transparent;
  color: #fbbf24;
  border: 2px solid #fbbf24;
}

.btn-mindycore-secondary:hover {
  background: #fbbf24;
  color: #1e3a8a;
  transform: translateY(-2px);
}

@media (max-width: 768px) {
  .hero h1 {
    font-size: 2.6rem;
  }

  .hero p {
    font-size: 1.05rem;
  }

  .partner-spotlight {
    padding: 30px;
  }
}
</style>
