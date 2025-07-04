<template>
  <div>
    <!-- Hero Section -->
    <section class="hero">
      <div class="hero-content">
        <h1>Learn Tech, Savor the Journey</h1>
        <p class="tagline">Free, Practical Education That Celebrates Learning Through Failure</p>
        <p class="hero-description">
          Quality education shapes brighter futures. Skill-Wanderer integrates real-world insights 
          into practical tech learning paths, creating an honest educational platform with no ads, 
          no affiliate bias—just pure, passionate learning.
        </p>        <div class="hero-cta">
          <NuxtLink to="/explore" class="btn btn-primary">
            Explore Learning Paths
            <span>→</span>
          </NuxtLink>
          <NuxtLink to="/principles" class="btn btn-secondary">
            Our Principles
          </NuxtLink>
        </div>
      </div>
      <svg class="wandering-path" viewBox="0 0 1200 200">
        <path class="path" d="M0,150 Q300,100 600,130 T1200,100" />
      </svg>
    </section>

    <!-- Platform Features Section -->
    <section id="platform" class="features">
      <div class="section-header">
        <h2>The Skill-Wanderer Platform</h2>
        <p>A revolutionary approach to tech education, currently in development</p>
      </div>
      <div class="features-grid">
        <div class="feature-card">
          <div class="feature-icon">🎯</div>
          <h3>Curated Learning Paths</h3>
          <p>Expert-selected resources and AI-assisted content, organized into clear pathways from beginner to advanced, always with practical application in mind.</p>
        </div>
        <div class="feature-card">
          <div class="feature-icon">💡</div>
          <h3>Learn Through Failure</h3>
          <p>We celebrate mistakes as learning opportunities. Every challenge, every "oops" moment is a valuable lesson on your journey to mastery.</p>
        </div>
        <div class="feature-card">
          <div class="feature-icon">🌟</div>
          <h3>Real-World Integration</h3>
          <p>Content directly informed by active technology services experience, ensuring what you learn is immediately applicable in the real world.</p>
        </div>
        <div class="feature-card">
          <div class="feature-icon">🎓</div>
          <h3>100% Free Core Content</h3>
          <p>All course content created or curated by us is completely free. Quality education should be accessible to everyone, everywhere.</p>
        </div>
        <div class="feature-card">
          <div class="feature-icon">🤝</div>
          <h3>Community-Driven</h3>
          <p>Join a supportive community of learners where questions are welcomed, achievements are celebrated, and everyone grows together.</p>
        </div>
        <div class="feature-card">
          <div class="feature-icon">🚀</div>
          <h3>Future Pathways</h3>
          <p>Long-term vision includes pathways for learners to join our team or launch their own ventures, fostering a cycle of growth and opportunity.</p>
        </div>
      </div>
    </section>

    <!-- Values Section -->
    <section id="values" class="values">
      <div class="values-content">
        <div class="section-header">
          <h2>Our Guiding Principles</h2>
          <p>The foundation of everything we build and teach</p>
        </div>
        <div class="values-grid">
          <div class="value-item" style="animation-delay: 0.1s;">
            <span class="value-icon">🛡️</span>
            <h3>Complete Integrity</h3>
            <p>No ads, no affiliate marketing, no commissions. Our recommendations are purely for your benefit.</p>
          </div>
          <div class="value-item" style="animation-delay: 0.2s;">
            <span class="value-icon">♻️</span>
            <h3>Mission-Centric Reinvestment</h3>
            <p>All net revenue is reinvested into the platform, community, and global educational impact.</p>
          </div>
          <div class="value-item" style="animation-delay: 0.3s;">
            <span class="value-icon">🌍</span>
            <h3>Accessible Education</h3>
            <p>Free core content with equitable access provisions for premium services when available.</p>
          </div>          <div class="value-item" style="animation-delay: 0.4s;">
            <span class="value-icon">🎨</span>
            <h3>Creative Learning</h3>
            <p>Encouraging experimentation, celebrating failures, and finding joy in the learning process.</p>
          </div>
        </div>
        <div class="principles-cta" style="animation-delay: 0.6s;">
          <NuxtLink to="/principles" class="btn btn-outline">
            View All 12 Principles
            <span>→</span>
          </NuxtLink>
        </div>
      </div>
    </section>

    <!-- Journey Section -->
    <section class="journey">
      <div class="journey-content">
        <h2>The Wandering Saga</h2>
        <p class="journey-quote">
          Every expert was once a beginner who refused to give up. Every failure was a lesson that led to success.
        </p>
        <p class="journey-description">
          Skill-Wanderer is born from a simple belief: the best teachers are those who remember what it's like to struggle, 
          to fail, and to finally breakthrough. This platform captures that journey—the wandering path of continuous learning—and 
          transforms it into accessible education for all. Whether you're taking your first steps in tech or seeking to master 
          advanced concepts, you'll find a home here.
        </p>
        <p class="journey-description">
          As we build this platform, we're learning too. Every line of code, every curated resource, every moment of creation 
          is both a lesson for us and a future lesson we'll share with you. This is education built by learners, for learners.
        </p>
      </div>
    </section>

    <!-- Coming Soon Section -->
    <section class="coming-soon">
      <div class="section-header">
        <h2>Platform Launching Soon</h2>
        <p>Join us on this journey to make quality tech education accessible to everyone</p>
      </div>
      <!-- <div class="countdown">
        <div class="countdown-item">
          <span class="countdown-number">Q4</span>
          <span class="countdown-label">2025</span>
        </div>
      </div> -->
      <p style="margin-top: 40px; opacity: 0.8;">
        Currently in active development. Initial courses will focus on practical web development, 
        cloud concepts, and modern API design.
      </p>
      <div class="hero-cta" style="margin-top: 30px;">
        <a href="https://dojo.skill-wanderer.com" target="_blank" rel="noopener noreferrer" class="btn btn-secondary">
          Preview Future LMS
        </a>
      </div>
    </section>

    <!-- Tech Services Brief Section -->
    <section class="tech-services">
      <div class="tech-services-content">
        <h3>Also Offering Technology Services</h3>
        <p>
          Alongside building Skill-Wanderer, I provide technology services. 
          Every real-world challenge solved becomes a lesson shared on the platform.
        </p>
        <NuxtLink to="/services" class="btn btn-secondary">Learn More</NuxtLink>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
// SEO and meta management
useSEO({
  title: 'Skill-Wanderer - Free Tech Education for Everyone',
  description: 'Free, practical tech education that celebrates learning through failure. Quality education shapes brighter futures with no ads or affiliate bias.',
  keywords: ['tech education', 'programming courses', 'free coding bootcamp', 'web development', 'skill development', 'learning platform'],
  type: 'website',
  structuredData: createOrganizationSchema()
})

// Client-side JavaScript for interactions
onMounted(() => {
  // Navbar scroll effect
  const handleScroll = () => {
    const navbar = document.getElementById('navbar')
    if (navbar) {
      if (window.scrollY > 50) {
        navbar.classList.add('scrolled')
      } else {
        navbar.classList.remove('scrolled')
      }
    }
  }

  window.addEventListener('scroll', handleScroll)
  // Smooth scrolling for anchor links
  document.querySelectorAll('a[href^="#"]').forEach((anchor: Element) => {
    anchor.addEventListener('click', function (e: Event) {
      e.preventDefault()
      const element = e.currentTarget as HTMLAnchorElement
      const href = element.getAttribute('href')
      if (href) {
        const target = document.querySelector(href)
        if (target) {
          target.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
          })
        }
      }
    })
  })

  // Intersection Observer for animations
  const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
  }

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        (entry.target as HTMLElement).style.opacity = '1'
      }
    })
  }, observerOptions)

  document.querySelectorAll('.value-item').forEach(item => {
    observer.observe(item)
  })

  // Cleanup
  onUnmounted(() => {
    window.removeEventListener('scroll', handleScroll)
  })
})
</script>

<style scoped>
/* CSS Variables */
:root {
  --primary-orange: #FF6B35;
  --deep-orange: #E85D25;
  --dark-bg: #1a1a1a;
  --darker-bg: #0f0f0f;
  --light-text: #e0e0e0;
  --accent-yellow: #FFD93D;
  --card-bg: rgba(255, 255, 255, 0.05);
  --card-hover: rgba(255, 255, 255, 0.08);
}

/* Reset and Base Styles */
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, sans-serif;
  background-color: var(--dark-bg);
  color: var(--light-text);
  line-height: 1.6;
  overflow-x: hidden;
}

/* Hero Section */
.hero {
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  padding: 100px 20px 60px;
  background: radial-gradient(circle at 20% 50%, rgba(255, 107, 53, 0.1) 0%, transparent 50%),
              radial-gradient(circle at 80% 50%, rgba(255, 217, 61, 0.05) 0%, transparent 50%);
}

.hero-content {
  max-width: 1200px;
  text-align: center;
  z-index: 2;
}

.hero h1 {
  font-size: clamp(2.5rem, 8vw, 5rem);
  font-weight: 800;
  margin-bottom: 20px;  background: linear-gradient(135deg, var(--primary-orange), var(--accent-yellow));
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  animation: fadeInUp 0.8s ease-out;
}

.hero .tagline {
  font-size: clamp(1.2rem, 3vw, 1.8rem);
  color: var(--light-text);
  margin-bottom: 30px;
  opacity: 0.9;
  animation: fadeInUp 0.8s ease-out 0.2s both;
}

.hero-description {
  font-size: 1.1rem;
  max-width: 800px;
  margin: 0 auto 40px;
  opacity: 0.8;
  animation: fadeInUp 0.8s ease-out 0.4s both;
}

.hero-cta {
  display: flex;
  gap: 20px;
  justify-content: center;
  flex-wrap: wrap;
  animation: fadeInUp 0.8s ease-out 0.6s both;
}

.btn {
  padding: 15px 30px;
  border: none;
  border-radius: 50px;
  font-size: 1.1rem;
  font-weight: 600;
  text-decoration: none;
  cursor: pointer;
  transition: all 0.3s ease;
  display: inline-flex;
  align-items: center;
  gap: 10px;
}

.btn-primary {
  background: linear-gradient(135deg, var(--primary-orange), var(--deep-orange));
  color: white;
  box-shadow: 0 4px 20px rgba(255, 107, 53, 0.3);
}

.btn-primary:hover {
  transform: translateY(-2px);
  box-shadow: 0 6px 30px rgba(255, 107, 53, 0.4);
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

.btn-outline {
  background: transparent;
  color: var(--primary-orange);
  border: 2px solid rgba(255, 107, 53, 0.3);
}

.btn-outline:hover {
  background: rgba(255, 107, 53, 0.1);
  border-color: var(--primary-orange);
  transform: translateY(-2px);
}

/* Principles CTA */
.principles-cta {
  text-align: center;
  margin-top: 60px;
  opacity: 0;
  animation: fadeInUp 0.6s ease-out forwards;
}

/* Wandering Path Animation */
.wandering-path {
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 200px;
  opacity: 0.3;
  pointer-events: none;
}

.path {
  stroke: var(--primary-orange);
  stroke-width: 2;
  fill: none;
  stroke-dasharray: 1000;
  stroke-dashoffset: 1000;
  animation: drawPath 3s ease-out forwards;
}

@keyframes drawPath {
  to {
    stroke-dashoffset: 0;
  }
}

/* Platform Features Section */
.features {
  padding: 100px 20px;
  background: var(--darker-bg);
}

.section-header {
  text-align: center;
  max-width: 800px;
  margin: 0 auto 60px;
}

.section-header h2 {
  font-size: clamp(2rem, 5vw, 3rem);
  margin-bottom: 20px;
  color: var(--primary-orange);
}

.features-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 30px;
  max-width: 1200px;
  margin: 0 auto;
}

.feature-card {
  background: var(--card-bg);
  border: 1px solid rgba(255, 107, 53, 0.2);
  border-radius: 20px;
  padding: 40px;
  transition: all 0.3s ease;
  position: relative;
  overflow: hidden;
}

.feature-card::before {
  content: '';
  position: absolute;
  top: -2px;
  left: -2px;
  right: -2px;
  bottom: -2px;
  background: linear-gradient(135deg, var(--primary-orange), transparent);
  border-radius: 20px;
  opacity: 0;
  transition: opacity 0.3s ease;
  z-index: -1;
}

.feature-card:hover {
  transform: translateY(-5px);
  background: var(--card-hover);
}

.feature-card:hover::before {
  opacity: 0.3;
}

.feature-icon {
  width: 60px;
  height: 60px;
  background: linear-gradient(135deg, var(--primary-orange), var(--deep-orange));
  border-radius: 15px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 20px;
  font-size: 24px;
}

.feature-card h3 {
  font-size: 1.5rem;
  margin-bottom: 15px;
  color: white;
}

.feature-card p {
  opacity: 0.8;
}

/* Values Section */
.values {
  padding: 100px 20px;
  background: linear-gradient(135deg, rgba(255, 107, 53, 0.05) 0%, transparent 50%);
}

.values-content {
  max-width: 1200px;
  margin: 0 auto;
}

.values-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 40px;
  margin-top: 60px;
}

.value-item {
  text-align: center;
  opacity: 0;
  animation: fadeInUp 0.6s ease-out forwards;
}

.value-icon {
  font-size: 3rem;
  margin-bottom: 20px;
  display: block;
}

.value-item h3 {
  color: var(--primary-orange);
  margin-bottom: 10px;
  font-size: 1.3rem;
  white-space: nowrap;
}

.value-item p {
  opacity: 0.8;
  font-size: 0.95rem;
}

/* Journey Section */
.journey {
  padding: 100px 20px;
  background: var(--darker-bg);
}

.journey-content {
  max-width: 900px;
  margin: 0 auto;
  text-align: center;
}

.journey-quote {
  font-size: 1.8rem;
  font-style: italic;
  margin-bottom: 40px;
  color: var(--primary-orange);
  position: relative;
  padding: 0 40px;
}

.journey-quote::before,
.journey-quote::after {
  content: '"';
  position: absolute;
  font-size: 3rem;
  opacity: 0.3;
}

.journey-quote::before {
  left: 0;
  top: -10px;
}

.journey-quote::after {
  right: 0;
  bottom: -30px;
}

.journey-description {
  font-size: 1.1rem;
  opacity: 0.9;
  margin-bottom: 40px;
  line-height: 1.8;
}

/* Coming Soon Section */
.coming-soon {
  padding: 100px 20px;
  background: var(--dark-bg);
  text-align: center;
}

.countdown {
  display: flex;
  justify-content: center;
  gap: 40px;
  margin-top: 40px;
  flex-wrap: wrap;
}

.countdown-item {
  text-align: center;
}

.countdown-number {
  font-size: 3rem;
  font-weight: bold;
  color: var(--primary-orange);
  display: block;
  line-height: 1;
}

.countdown-label {
  font-size: 0.9rem;
  opacity: 0.7;
  margin-top: 10px;
}

/* Tech Services Section */
.tech-services {
  padding: 60px 20px;
  background: rgba(255, 107, 53, 0.05);
  text-align: center;
}

.tech-services-content {
  max-width: 600px;
  margin: 0 auto;
}

.tech-services h3 {
  font-size: 1.8rem;
  color: var(--primary-orange);
  margin-bottom: 20px;
}

.tech-services p {
  opacity: 0.9;
  margin-bottom: 30px;
}

/* Animations */
@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

/* Responsive */
@media (max-width: 768px) {
  .features-grid,
  .values-grid {
    grid-template-columns: 1fr;
  }

  .hero-cta {
    flex-direction: column;
    align-items: center;
  }

  .btn {
    width: 100%;
    max-width: 300px;
    justify-content: center;
  }

  .countdown {
    gap: 20px;
  }
}
</style>