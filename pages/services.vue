<template>
  <div>
    <!-- Hero Section -->
    <section class="hero">
      <h1>Technology Services</h1>
      <p>Real-world Technology solutions that fuel free education. Every project solved becomes knowledge shared.</p>
      <span class="launch-badge">Launching October 2025</span>
    </section>

    <!-- Philosophy Section -->
    <section class="philosophy">
      <div class="philosophy-content">
        <h2>The Karma Cycle</h2>
        <p class="philosophy-description">
          Technology services aren't just about solving problems—they're about creating a sustainable model 
          where client success directly enables free education for learners worldwide.
        </p>
        
        <div class="karma-cycle">
          <div class="cycle-item">
            <div class="cycle-icon">💼</div>
            <h3>Client Projects</h3>
            <p>Real challenges, real solutions</p>
          </div>
          <span class="cycle-arrow">→</span>
          <div class="cycle-item">
            <div class="cycle-icon">💡</div>
            <h3>Revenue & Learning</h3>
            <p>Funding education & gaining insights</p>
          </div>
          <span class="cycle-arrow">→</span>
          <div class="cycle-item">
            <div class="cycle-icon">📚</div>
            <h3>Free Education</h3>
            <p>Knowledge shared with the world</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Services Preview Section -->
    <section class="services-preview">
      <div class="services-content">
        <div class="section-header">
          <h2>What's Coming</h2>
          <p>Comprehensive technology services designed to solve real challenges</p>
        </div>
        
        <div class="services-grid">
          <div class="service-card">
            <div class="service-icon">🏗️</div>
            <h3>Full-Stack Development</h3>
            <p>From concept to deployment, I build scalable applications that grow with your business needs.</p>
            <!-- <div class="service-tech">
              <span class="tech-tag">Vue.js</span>
              <span class="tech-tag">Nuxt.js</span>
              <span class="tech-tag">Node.js</span>
              <span class="tech-tag">Firebase</span>
            </div> -->
          </div>
          
          <div class="service-card">
            <div class="service-icon">⚙️</div>
            <h3>DevOps & Infrastructure</h3>
            <p>Optimize your infrastructure, automate deployments, and ensure reliability. From simple hosting to complex Kubernetes orchestration.</p>
            <!-- <div class="service-tech">
              <span class="tech-tag">AWS</span>
              <span class="tech-tag">Kubernetes</span>
              <span class="tech-tag">CI/CD</span>
              <span class="tech-tag">Docker</span>
            </div> -->
          </div>
          
          <div class="service-card">
            <div class="service-icon">📊</div>
            <h3>Technical Leadership</h3>
            <p>Guide your team through complex projects. From sprint planning to architecture reviews, I bring order to chaos.</p>
            <!-- <div class="service-tech">
              <span class="tech-tag">Agile</span>
              <span class="tech-tag">Team Building</span>
              <span class="tech-tag">Mentorship</span>
            </div> -->
          </div>
        </div>
      </div>
    </section>

    <!-- Experience Section -->
    <section class="experience">
      <div class="experience-content">
        <div class="section-header">
          <h2>The Journey So Far</h2>
          <p>From Import-Export Manager to Tech Leader—every step adds value</p>
        </div>
        
        <div class="journey-stats">
          <div class="stat-card">
            <div class="stat-number">4</div>
            <div class="stat-label">Startups Built</div>
          </div>
          <div class="stat-card">
            <div class="stat-number">20+</div>
            <div class="stat-label">Developers Led</div>
          </div>
          <div class="stat-card">
            <div class="stat-number">7+</div>
            <div class="stat-label">Years Experience</div>
          </div>
          <div class="stat-card">
            <div class="stat-number">∞</div>
            <div class="stat-label">Lessons Learned</div>
          </div>
        </div>
      </div>
    </section>

    <!-- Coming Soon CTA -->
    <section class="coming-soon-cta">
      <div class="cta-content">
        <h2>Coming Very Soon</h2>
        <p>Services launch in August 2025. Want to be first to know when we're ready?</p>
        <div class="cta-buttons">
          <NuxtLink to="/contact" class="btn btn-primary">
            Get Early Access
          </NuxtLink>
          <NuxtLink to="/about" class="btn btn-secondary">
            Learn More About Me
          </NuxtLink>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
// SEO Configuration
useSEO({
  title: 'Technology Services | Skill-Wanderer',
  description: 'Professional technology consulting services launching August 2025. Full-stack development, DevOps, and technical leadership that funds free education.',
  image: '/cropped-skill-wanderer-logo-768x256.webp'
})

// Animation on scroll
onMounted(() => {
  const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
  }

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible')
      }
    })
  }, observerOptions)

  // Observe all animated elements
  document.querySelectorAll('.cycle-item, .service-card, .stat-card').forEach(el => {
    observer.observe(el)
  })
})
</script>

<style scoped>
/* Hero Section */
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
}

.launch-badge {
  background: linear-gradient(135deg, var(--primary-orange), var(--deep-orange));
  color: white;
  padding: 12px 30px;
  border-radius: 50px;
  font-weight: bold;
  font-size: 1.1rem;
  display: inline-block;
  animation: pulse 2s ease-in-out infinite;
  position: relative;
  z-index: 1;
}

@keyframes pulse {
  0%, 100% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.05);
  }
}

/* Philosophy Section */
.philosophy {
  padding: 80px 20px;
  background: var(--darker-bg);
}

.philosophy-content {
  max-width: 900px;
  margin: 0 auto;
  text-align: center;
}

.philosophy-content h2 {
  font-size: 2.5rem;
  color: var(--primary-orange);
  margin-bottom: 30px;
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
  opacity: 0;
  transform: translateY(20px);
  transition: all 0.6s ease-out;
}

.cycle-item.visible {
  opacity: 1;
  transform: translateY(0);
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
  font-size: 0.9rem;
}

/* Services Preview Section */
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

.services-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  gap: 30px;
  margin-top: 40px;
}

.service-card {
  background: var(--card-bg);
  border-radius: 15px;
  padding: 40px 30px;
  text-align: center;
  border: 1px solid rgba(255, 107, 53, 0.1);
  transition: all 0.3s ease;
  opacity: 0;
  transform: translateY(20px);
}

.service-card.visible {
  opacity: 1;
  transform: translateY(0);
}

.service-card:hover {
  background: var(--card-hover);
  transform: translateY(-5px);
  border-color: rgba(255, 107, 53, 0.3);
}

.service-icon {
  font-size: 3rem;
  margin-bottom: 20px;
  display: block;
}

.service-card h3 {
  color: var(--primary-orange);
  margin-bottom: 15px;
  font-size: 1.3rem;
}

.service-card p {
  opacity: 0.9;
  margin-bottom: 20px;
  line-height: 1.6;
}

.service-tech {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 8px;
}

.tech-tag {
  background: rgba(255, 107, 53, 0.1);
  color: var(--primary-orange);
  padding: 6px 12px;
  border-radius: 20px;
  font-size: 0.8rem;
  border: 1px solid rgba(255, 107, 53, 0.2);
}

/* Experience Section */
.experience {
  padding: 80px 20px;
  background: var(--darker-bg);
}

.experience-content {
  max-width: 1000px;
  margin: 0 auto;
  text-align: center;
}

.journey-stats {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 30px;
  margin-top: 50px;
}

.stat-card {
  background: var(--card-bg);
  border-radius: 15px;
  padding: 30px 20px;
  text-align: center;
  border: 1px solid rgba(255, 107, 53, 0.1);
  transition: all 0.3s ease;
  opacity: 0;
  transform: translateY(20px);
}

.stat-card.visible {
  opacity: 1;
  transform: translateY(0);
}

.stat-card:hover {
  background: var(--card-hover);
  transform: translateY(-5px);
}

.stat-number {
  font-size: 3rem;
  font-weight: bold;
  color: var(--primary-orange);
  line-height: 1;
  margin-bottom: 10px;
}

.stat-label {
  font-size: 1rem;
  opacity: 0.8;
}

/* Coming Soon CTA */
.coming-soon-cta {
  padding: 80px 20px;
  background: linear-gradient(135deg, var(--dark-bg) 0%, var(--darker-bg) 100%);
  text-align: center;
}

.cta-content {
  max-width: 800px;
  margin: 0 auto;
}

.cta-content h2 {
  font-size: 2.5rem;
  color: var(--primary-orange);
  margin-bottom: 20px;
}

.cta-content p {
  font-size: 1.2rem;
  opacity: 0.9;
  margin-bottom: 40px;
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

/* Responsive Design */
@media (max-width: 768px) {
  .hero h1 {
    font-size: 2.5rem;
  }
  
  .hero p {
    font-size: 1.1rem;
  }
  
  .karma-cycle {
    flex-direction: column;
    gap: 20px;
  }
  
  .cycle-arrow {
    transform: rotate(90deg);
  }
  
  .services-grid {
    grid-template-columns: 1fr;
  }
  
  .journey-stats {
    grid-template-columns: repeat(2, 1fr);
  }
  
  .cta-buttons {
    flex-direction: column;
    align-items: center;
  }
  
  .section-header h2 {
    font-size: 2rem;
  }
}

@media (max-width: 480px) {
  .journey-stats {
    grid-template-columns: 1fr;
  }
  
  .hero {
    padding: 120px 15px 60px;
  }
}
</style>
