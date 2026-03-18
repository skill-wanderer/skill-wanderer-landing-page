<template>
  <div>
    <!-- Hero Section -->
    <section class="hero">
      <div class="hero-content">
        <h1>A Tech Guild for Social Good</h1>
        <p class="tagline">Learn by Building. Grow by Contributing. Sustain Through Craft.</p>
        <p class="hero-description">
          Skill-Wanderer is a tech guild working toward becoming a social enterprise—where apprentices, 
          journeymen, and masters learn and work together on real projects. Every engagement funds free 
          education. No ads, no hidden agendas—just craft, community, and purpose.
        </p>        <div class="hero-cta">
          <NuxtLink to="/learning-path/learn-contribute-build-earn" class="btn btn-primary">
            Join the Guild
            <span>→</span>
          </NuxtLink>
          <a href="https://dojo.skill-wanderer.com/paths" target="_blank" rel="noopener noreferrer" class="btn btn-secondary">
            Explore Learning Paths
          </a>
          <NuxtLink to="/principles" class="btn btn-secondary">
            Our Principles
          </NuxtLink>
        </div>
        <div class="hero-cta-secondary">
          <NuxtLink to="/manifesto" class="btn btn-ghost">
            📜 See the Guild Manifesto
          </NuxtLink>
          <NuxtLink to="/work-with-us" class="btn btn-ghost">
            🤝 Engage with the Guild
          </NuxtLink>
        </div>
      </div>
      <svg class="wandering-path" viewBox="0 0 1200 200">
        <path class="path" d="M0,150 Q300,100 600,130 T1200,100" />
      </svg>
    </section>

    <!-- Guild Model Section -->
    <section id="platform" class="features">
      <div class="section-header">
        <h2>The Tech Guild Model</h2>
        <p>A social enterprise in the making—where education and real work are one and the same</p>
      </div>
      <div class="features-grid">
        <div class="feature-card">
          <div class="feature-icon">🏛️</div>
          <h3>Guild-Based Learning</h3>
          <p>Progress from Apprentice to Journeyman to Master through structured mentorship, hands-on projects, and peer collaboration—just like the craft guilds of old.</p>
        </div>
        <div class="feature-card">
          <div class="feature-icon">🛠️</div>
          <h3>Learn by Building</h3>
          <p>Guild members work on real projects for real clients. Every line of code shipped is a lesson learned—failures included. That's how craft is forged.</p>
        </div>
        <div class="feature-card">
          <div class="feature-icon">♻️</div>
          <h3>Work Funds Education</h3>
          <p>Revenue from guild engagements is reinvested into free education, mentorship, and community infrastructure. No ads, no donations needed—just purposeful work.</p>
        </div>
        <div class="feature-card">
          <div class="feature-icon">🎓</div>
          <h3>100% Free Learning</h3>
          <p>All learning content is completely free. Human mentors and guild support are sustained through our social enterprise model and real-world engagements.</p>
        </div>
        <div class="feature-card">
          <div class="feature-icon">🤝</div>
          <h3>Community of Craftspeople</h3>
          <p>A guild where questions are welcomed, craft is respected, and everyone grows together—from first-time coders to seasoned architects.</p>
        </div>
        <div class="feature-card">
          <div class="feature-icon">🚀</div>
          <h3>Pathways to Purpose</h3>
          <p>Guild members can grow into mentors, project leads, or launch their own ventures. The guild is a launchpad, not a ceiling.</p>
        </div>
      </div>
    </section>

    <!-- Values Section -->
    <section id="values" class="values">
      <div class="values-content">
        <div class="section-header">
          <h2>Guild Principles</h2>
          <p>The values that guide our social enterprise mission</p>
        </div>
        <div class="values-grid">
          <div class="value-item" style="animation-delay: 0.1s;">
            <span class="value-icon">🛡️</span>
            <h3>Complete Integrity</h3>
            <p>No ads, no affiliate marketing, no commissions. Our only agenda is your growth and the guild's mission.</p>
          </div>
          <div class="value-item" style="animation-delay: 0.2s;">
            <span class="value-icon">♻️</span>
            <h3>100% Reinvestment</h3>
            <p>All net revenue from guild engagements is reinvested into education, community, and social impact. Zero profit extraction.</p>
          </div>
          <div class="value-item" style="animation-delay: 0.3s;">
            <span class="value-icon">🌍</span>
            <h3>Open & Accessible</h3>
            <p>Free learning for everyone. Guild mentorship and support sustained through our social enterprise work—not tuition or donations.</p>
          </div>          <div class="value-item" style="animation-delay: 0.4s;">
            <span class="value-icon">🏛️</span>
            <h3>Craft Over Credentials</h3>
            <p>We value what you can build over what certificates you hold. Real skill is forged through practice, mentorship, and real-world craft.</p>
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
        <h2>Why a Guild?</h2>
        <p class="journey-quote">
          In the old craft guilds, masters taught apprentices by working alongside them—not in classrooms, 
          but in workshops, building real things. We believe tech education should work the same way.
        </p>
        <p class="journey-description">
          Skill-Wanderer is a tech guild built on a simple truth: the best way to learn 
          is to build, and the best way to teach is to work alongside those who are learning. Our guild model 
          unites education and professional work into a single, self-sustaining cycle—where every project 
          delivered funds free learning for the next generation of craftspeople.
        </p>
        <p class="journey-description">
          Whether you're writing your first line of code or architecting enterprise systems, the guild has 
          a place for you. We grow together, we build together, and every contribution—big or small—strengthens 
          the whole community.
        </p>
      </div>
    </section>


    <!-- Guild Services Section -->
    <section class="guild-services">
      <div class="guild-services-content">
        <div class="section-header">
          <h2>What the Guild Builds</h2>
          <p>Senior-led, community-powered delivery—every engagement funds free education</p>
        </div>
        <div class="services-grid">
          <div class="service-card">
            <div class="service-icon">🖥️</div>
            <h3>Custom Software</h3>
            <p>Web platforms, internal tools, and digital products—built from scratch with modern frameworks. No templates, no lock-in.</p>
            <NuxtLink to="/work-with-us/what-we-build" class="service-link">See What We Build <span>→</span></NuxtLink>
          </div>
          <div class="service-card">
            <div class="service-icon">🤝</div>
            <h3>True Partnership</h3>
            <p>We're not an outsourcing firm. We share risks and success through long-term collaboration models including equity and revenue sharing.</p>
            <NuxtLink to="/work-with-us/success-sharing-model" class="service-link">Explore the Model <span>→</span></NuxtLink>
          </div>
          <div class="service-card">
            <div class="service-icon">🎯</div>
            <h3>Who We Work With</h3>
            <p>Non-profits, early-stage startups, and mission-driven organizations that value long-term thinking and open technology.</p>
            <NuxtLink to="/work-with-us/who-we-work-with" class="service-link">Is This For You? <span>→</span></NuxtLink>
          </div>
          <div class="service-card">
            <div class="service-icon">💰</div>
            <h3>Transparent Pricing</h3>
            <p>Sprint-based packages with no hidden fees. Trust sprints, standard sprints, and partnership models—pick what fits your stage.</p>
            <NuxtLink to="/work-with-us/pricing" class="service-link">View Pricing <span>→</span></NuxtLink>
          </div>
        </div>
        <div class="services-cta">
          <NuxtLink to="/work-with-us" class="btn btn-primary">
            Engage the Guild
            <span>→</span>
          </NuxtLink>
          <NuxtLink to="/work-with-us/our-projects" class="btn btn-secondary">
            See Our Projects
          </NuxtLink>
        </div>
      </div>
    </section>

    <!-- Guild Manifesto Section -->
    <section class="manifesto-teaser">
      <div class="manifesto-teaser-content">
        <div class="manifesto-badge-label">Guild Document · 2026</div>
        <h2>The Guild Manifesto</h2>
        <p class="manifesto-tagline">Mastery. Transparency. Shared Prosperity.</p>
        <p class="manifesto-description">
          We believe the traditional corporate model is obsolete. The Guild Manifesto defines our commitment to a
          sovereign, meritocratic ecosystem—where contribution replaces tuition, real work replaces fake projects,
          and every member knows exactly where every coin goes.
        </p>
        <div class="manifesto-pillars">
          <div class="manifesto-pillar">
            <span class="pillar-icon">🚫</span>
            <h4>No Spectators</h4>
            <p>Free to start, but we demand commitment. The guild has no place for passive learners.</p>
          </div>
          <div class="manifesto-pillar">
            <span class="pillar-icon">💰</span>
            <h4>15 / 85 Split</h4>
            <p>85% of net profit goes directly to the craftspeople who build. Full financial transparency, always.</p>
          </div>
          <div class="manifesto-pillar">
            <span class="pillar-icon">🏗️</span>
            <h4>Real Work Only</h4>
            <p>Production-level projects for real partners. Not todo apps—real solutions to real problems.</p>
          </div>
        </div>
        <NuxtLink to="/manifesto" class="btn btn-primary">
          Read the Manifesto
          <span>→</span>
        </NuxtLink>
      </div>
    </section>

    <!-- Work With Us Brief Section -->
    <section class="tech-services">
      <div class="tech-services-content">
        <h3>Engage the Guild</h3>
        <p>
          Partner with our tech guild for real-world projects. Senior-led, community-powered delivery—and every engagement 
          directly funds free education. Not outsourcing. A social enterprise building with purpose.
        </p>
        <NuxtLink to="/work-with-us" class="btn btn-secondary">Work With the Guild</NuxtLink>
      </div>
    </section>
    <HeroSection />
    <FeaturesSection />
    <ValuesSection />
    <JourneySection />
    <ExpertiseBriefSection />
  </div>
</template>

<script setup lang="ts">
// SEO and meta management
useSEO({
  title: 'Skill-Wanderer - Tech Guild for Education & Social Good',
  description: 'A tech guild working toward social enterprise. Learn by building real projects, grow through mentorship, and sustain free education through craft.',
  keywords: ['tech guild', 'social enterprise', 'free tech education', 'guild model', 'learn by building', 'apprenticeship', 'craft community'],
  type: 'website',
  structuredData: [
    createOrganizationSchema(),
    createFAQSchema([
      {
        question: 'Is Skill-Wanderer really free?',
        answer: 'Yes, all Skill-Wanderer learning content is completely free. Mentorship and guild support are sustained through our social enterprise model—real-world guild engagements fund education.'
      },
      {
        question: 'What makes Skill-Wanderer different from other learning platforms?',
        answer: 'Skill-Wanderer is a tech guild working toward social enterprise. We combine education and real work—guild members learn by building real projects, and every engagement funds free education. No ads, no affiliate marketing.'
      },
      {
        question: 'Who is behind Skill-Wanderer?',
        answer: 'Skill-Wanderer was founded by Quan Nguyen as a tech guild with a social enterprise vision. It is built by guild members—apprentices, journeymen, and masters working and learning together.'
      },
      {
        question: 'How does Skill-Wanderer sustain itself financially?',
        answer: 'Skill-Wanderer sustains itself through guild engagements—real technology projects delivered by our community. All net revenue is reinvested into education and the guild as we work toward formal social enterprise status.'
      }
    ])
  ]
})

// 🔷 Define handler outside (important for cleanup)
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

const handleAnchorClick = (e: Event) => {
  const targetElement = e.target as HTMLElement | null
  if (!targetElement) return

  const anchor = targetElement.closest('a[href^="#"]') as HTMLAnchorElement | null
  if (!anchor) return

  const href = anchor.getAttribute('href')
  if (!href) return

  const target = document.querySelector(href)
  if (target) {
    e.preventDefault()
    target.scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    })
  }
}

// 🔷 Mount
onMounted(() => {
  window.addEventListener('scroll', handleScroll)
  document.addEventListener('click', handleAnchorClick)
})

// 🔷 Cleanup (TOP LEVEL ✅)
onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
  document.removeEventListener('click', handleAnchorClick)
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

.hero-cta-secondary {
  display: flex;
  gap: 16px;
  justify-content: center;
  flex-wrap: wrap;
  margin-top: 16px;
  animation: fadeInUp 0.8s ease-out 0.8s both;
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

.btn-ghost {
  background: transparent;
  color: rgba(224, 224, 224, 0.7);
  border: 1px solid rgba(255, 255, 255, 0.1);
  font-size: 0.95rem;
  padding: 10px 22px;
}

.btn-ghost:hover {
  background: rgba(255, 107, 53, 0.08);
  border-color: rgba(255, 107, 53, 0.35);
  color: var(--primary-orange);
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

/* Guild Services Section */
.guild-services {
  padding: 100px 20px;
  background: var(--darker-bg);
}

.guild-services-content {
  max-width: 1200px;
  margin: 0 auto;
}

.services-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
  gap: 28px;
  margin-top: 60px;
  margin-bottom: 50px;
}

.service-card {
  background: var(--card-bg);
  border: 1px solid rgba(255, 107, 53, 0.15);
  border-radius: 20px;
  padding: 36px 30px;
  display: flex;
  flex-direction: column;
  transition: all 0.3s ease;
}

.service-card:hover {
  transform: translateY(-5px);
  border-color: rgba(255, 107, 53, 0.4);
}

.service-icon {
  font-size: 2.5rem;
  margin-bottom: 18px;
}

.service-card h3 {
  font-size: 1.3rem;
  color: white;
  margin-bottom: 12px;
}

.service-card p {
  opacity: 0.8;
  font-size: 0.95rem;
  line-height: 1.7;
  flex-grow: 1;
  margin-bottom: 20px;
}

.service-link {
  display: inline-flex;
  align-items: center;
  gap: 6px;
  color: var(--primary-orange);
  font-weight: 600;
  font-size: 0.95rem;
  text-decoration: none;
  transition: gap 0.3s ease;
}

.service-link:hover {
  gap: 12px;
}

.services-cta {
  display: flex;
  gap: 20px;
  justify-content: center;
  flex-wrap: wrap;
}

/* Guild Manifesto Teaser Section */
.manifesto-teaser {
  padding: 100px 20px;
  background: var(--dark-bg);
  text-align: center;
}

.manifesto-teaser-content {
  max-width: 900px;
  margin: 0 auto;
}

.manifesto-badge-label {
  display: inline-block;
  font-size: 0.8rem;
  font-weight: 600;
  letter-spacing: 0.15em;
  text-transform: uppercase;
  color: var(--primary-orange);
  border: 1px solid rgba(255, 107, 53, 0.3);
  border-radius: 50px;
  padding: 6px 18px;
  margin-bottom: 20px;
}

.manifesto-teaser h2 {
  font-size: clamp(2rem, 5vw, 3rem);
  font-weight: 800;
  color: white;
  margin-bottom: 12px;
}

.manifesto-tagline {
  font-size: 1.2rem;
  color: var(--primary-orange);
  font-style: italic;
  margin-bottom: 24px;
  opacity: 0.9;
}

.manifesto-description {
  font-size: 1.05rem;
  opacity: 0.8;
  line-height: 1.8;
  margin-bottom: 50px;
}

.manifesto-pillars {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
  gap: 30px;
  margin-bottom: 50px;
  text-align: left;
}

.manifesto-pillar {
  background: var(--card-bg);
  border: 1px solid rgba(255, 107, 53, 0.15);
  border-radius: 16px;
  padding: 28px;
  transition: all 0.3s ease;
}

.manifesto-pillar:hover {
  border-color: rgba(255, 107, 53, 0.4);
  transform: translateY(-4px);
}

.pillar-icon {
  font-size: 2rem;
  display: block;
  margin-bottom: 14px;
}

.manifesto-pillar h4 {
  font-size: 1.1rem;
  color: white;
  margin-bottom: 8px;
}

.manifesto-pillar p {
  font-size: 0.9rem;
  opacity: 0.75;
  line-height: 1.6;
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

