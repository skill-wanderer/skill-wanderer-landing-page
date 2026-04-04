<template>
  <div>
    <!-- Hero Section — 1 primary CTA + 1 secondary -->
    <section class="hero">
      <div class="hero-content">
        <h1>A Tech Guild for Social Good</h1>
        <p class="tagline">Learn by Building. Grow by Contributing. Sustain Through Craft.</p>
        <p class="hero-description">
          Skill-Wanderer is a tech guild working toward becoming a social enterprise—where apprentices,
          journeymen, and masters learn and work together on real projects. Every engagement funds free
          education. No ads, no hidden agendas—just craft, community, and purpose.
        </p>
        <div class="hero-cta">
          <NuxtLink to="/learning-path/learn-contribute-build-earn" class="btn btn-primary">
            Join the Guild
            <span>→</span>
          </NuxtLink>
          <a href="https://dojo.skill-wanderer.com/paths" target="_blank" rel="noopener noreferrer" class="btn btn-secondary">
            Explore Learning Paths
          </a>
        </div>
      </div>
      <svg class="wandering-path" viewBox="0 0 1200 200">
        <path class="path" d="M0,150 Q300,100 600,130 T1200,100" />
      </svg>
    </section>

    <!-- Audience Fork — clear split for learners vs clients -->
    <section class="audience-fork">
      <div class="fork-content">
        <h2>How Can We Help?</h2>
        <div class="fork-grid">
          <NuxtLink to="/learning-path/learn-contribute-build-earn" class="fork-card">
            <div class="fork-icon">
              <!-- Stacked layers / book icon -->
              <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M24 4L4 14l20 10 20-10L24 4z" stroke="currentColor" stroke-width="2.5" stroke-linejoin="round"/>
                <path d="M4 24l20 10 20-10" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M4 34l20 10 20-10" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>
            </div>
            <h3>I Want to Learn</h3>
            <p>Free learning paths, mentorship, and real-world projects. Progress from Apprentice to Master at your own pace.</p>
            <span class="fork-link">Start Learning <span>→</span></span>
          </NuxtLink>
          <NuxtLink to="/work-with-us" class="fork-card">
            <div class="fork-icon">
              <!-- Hammer & anvil icon -->
              <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect x="6" y="34" width="36" height="6" rx="2" stroke="currentColor" stroke-width="2.5"/>
                <path d="M14 34v-8a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v8" stroke="currentColor" stroke-width="2.5"/>
                <path d="M24 24v-6" stroke="currentColor" stroke-width="2.5" stroke-linecap="round"/>
                <path d="M16 12h16" stroke="currentColor" stroke-width="2.5" stroke-linecap="round"/>
                <path d="M18 8h12" stroke="currentColor" stroke-width="2.5" stroke-linecap="round"/>
              </svg>
            </div>
            <h3>I Need a Builder</h3>
            <p>Senior-led, community-powered delivery. Custom software, transparent pricing, and every engagement funds education.</p>
            <span class="fork-link">Work With Us <span>→</span></span>
          </NuxtLink>
        </div>
      </div>
    </section>

    <!-- Guild Model — alternating layout, SVG icons, 3 pillars only -->
    <section id="platform" class="guild-model">
      <div class="section-header">
        <h2>The Tech Guild Model</h2>
        <p>A social enterprise in the making—where education and real work are one and the same</p>
      </div>
      <div class="model-items">
        <div class="model-item">
          <div class="model-icon">
            <!-- Compass / guild hall -->
            <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
              <circle cx="24" cy="24" r="18" stroke="currentColor" stroke-width="2.5"/>
              <polygon points="24,10 28,22 24,20 20,22" fill="currentColor" opacity="0.6"/>
              <polygon points="24,38 20,26 24,28 28,26" fill="currentColor" opacity="0.3"/>
              <circle cx="24" cy="24" r="3" stroke="currentColor" stroke-width="2"/>
            </svg>
          </div>
          <div class="model-text">
            <h3>Guild-Based Learning</h3>
            <p>Progress from Apprentice to Journeyman to Master through structured mentorship, hands-on projects, and peer collaboration—just like the craft guilds of old.</p>
          </div>
        </div>
        <div class="model-item model-item--reverse">
          <div class="model-icon">
            <!-- Chisel & stone -->
            <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M8 40l12-12" stroke="currentColor" stroke-width="2.5" stroke-linecap="round"/>
              <path d="M17 31l-6 6" stroke="currentColor" stroke-width="4" stroke-linecap="round"/>
              <rect x="22" y="14" width="18" height="22" rx="3" stroke="currentColor" stroke-width="2.5"/>
              <path d="M28 20h8M28 26h6M28 32h4" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
            </svg>
          </div>
          <div class="model-text">
            <h3>Learn by Building</h3>
            <p>Guild members work on real projects for real clients. Every line of code shipped is a lesson learned—failures included. That's how craft is forged.</p>
          </div>
        </div>
        <div class="model-item">
          <div class="model-icon">
            <!-- Cycle arrows -->
            <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M14 8a16 16 0 0 1 22 4" stroke="currentColor" stroke-width="2.5" stroke-linecap="round"/>
              <path d="M38 14l-2-6 6-2" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/>
              <path d="M34 40a16 16 0 0 1-22-4" stroke="currentColor" stroke-width="2.5" stroke-linecap="round"/>
              <path d="M10 34l2 6-6 2" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
          </div>
          <div class="model-text">
            <h3>Work Funds Education</h3>
            <p>Revenue from guild engagements is reinvested into free education, mentorship, and community infrastructure. No ads, no donations needed—just purposeful work.</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Recent Guild Projects — visual proof of work -->
    <section class="projects-showcase">
      <div class="section-header">
        <h2>Recent Guild Projects</h2>
        <p>Real solutions built for real partners—every project funds free education</p>
      </div>
      <div class="projects-strip">
        <NuxtLink to="/work-with-us/projects/wm-smile-generation-uganda" class="project-thumb">
          <div class="project-image-wrap">
            <img src="/projects/wmsmile/children-learning.jpeg" alt="WM Smile Generation Uganda" loading="lazy" />
          </div>
          <div class="project-meta">
            <h4>WM Smile Generation</h4>
            <span class="project-tag">Non-Profit · Uganda</span>
          </div>
        </NuxtLink>
        <NuxtLink to="/work-with-us/projects/chanhdao-vn" class="project-thumb">
          <div class="project-image-wrap">
            <img src="/projects/chanhdao/preview.svg" alt="ChanhDao.vn" loading="lazy" />
          </div>
          <div class="project-meta">
            <h4>ChanhDao.vn</h4>
            <span class="project-tag">AI Platform · Vietnam</span>
          </div>
        </NuxtLink>
        <NuxtLink to="/work-with-us/projects/mindyminds" class="project-thumb">
          <div class="project-image-wrap">
            <img src="/projects/mindyminds/mindyminds-logo.jpg" alt="MindyMinds" loading="lazy" />
          </div>
          <div class="project-meta">
            <h4>MindyMinds</h4>
            <span class="project-tag">AI Platform · Start-up</span>
          </div>
        </NuxtLink>
        <NuxtLink to="/work-with-us/projects/mindyplay" class="project-thumb">
          <div class="project-image-wrap">
            <img src="/projects/mindyplay/mindyplay-logo.jpg" alt="MindyPlay" loading="lazy" />
          </div>
          <div class="project-meta">
            <h4>MindyPlay</h4>
            <span class="project-tag">Mobile Game · Start-up</span>
          </div>
        </NuxtLink>
      </div>
      <div class="projects-cta">
        <NuxtLink to="/work-with-us/our-projects" class="btn btn-outline">
          View All Projects <span>→</span>
        </NuxtLink>
      </div>
    </section>

    <!-- Guild Principles — SVG icons, kept concise -->
    <section id="values" class="values">
      <div class="values-content">
        <div class="section-header">
          <h2>Guild Principles</h2>
          <p>The values that guide our social enterprise mission</p>
        </div>
        <div class="values-grid">
          <div class="value-item" style="animation-delay: 0.1s;">
            <span class="value-icon">
              <svg viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M20 4L6 12v16l14 8 14-8V12L20 4z" stroke="currentColor" stroke-width="2"/><path d="M20 12v8l7-4" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>
            </span>
            <h3>Complete Integrity</h3>
            <p>No ads, no affiliate marketing, no commissions. Our only agenda is your growth and the guild's mission.</p>
          </div>
          <div class="value-item" style="animation-delay: 0.2s;">
            <span class="value-icon">
              <svg viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M10 14a10 10 0 0 1 14-3" stroke="currentColor" stroke-width="2" stroke-linecap="round"/><path d="M25 12l-1-4 4-1" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/><path d="M30 26a10 10 0 0 1-14 3" stroke="currentColor" stroke-width="2" stroke-linecap="round"/><path d="M15 28l1 4-4 1" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>
            </span>
            <h3>100% Reinvestment</h3>
            <p>All net revenue from guild engagements is reinvested into education, community, and social impact. Zero profit extraction.</p>
          </div>
          <div class="value-item" style="animation-delay: 0.3s;">
            <span class="value-icon">
              <svg viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="20" cy="20" r="14" stroke="currentColor" stroke-width="2"/><path d="M8 16h24M8 24h24" stroke="currentColor" stroke-width="2"/><ellipse cx="20" cy="20" rx="7" ry="14" stroke="currentColor" stroke-width="2"/></svg>
            </span>
            <h3>Open & Accessible</h3>
            <p>Free learning for everyone. Guild mentorship and support sustained through our social enterprise work—not tuition or donations.</p>
          </div>
          <div class="value-item" style="animation-delay: 0.4s;">
            <span class="value-icon">
              <svg viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M8 34V16l12-10 12 10v18H8z" stroke="currentColor" stroke-width="2" stroke-linejoin="round"/><path d="M16 34v-10h8v10" stroke="currentColor" stroke-width="2"/><path d="M4 16l16-12 16 12" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>
            </span>
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

    <!-- Manifesto — subtle pull-quote instead of heavy block -->
    <section class="manifesto-quote">
      <div class="manifesto-quote-content">
        <blockquote>
          "The best way to learn is to build, and the best way to teach is to work alongside those who are learning."
        </blockquote>
        <NuxtLink to="/manifesto" class="manifesto-link">Read the Guild Manifesto →</NuxtLink>
      </div>
    </section>
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
  margin-bottom: 20px;
  background: linear-gradient(135deg, var(--primary-orange), var(--accent-yellow));
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

/* Buttons */
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

/* Audience Fork */
.audience-fork {
  padding: 80px 20px;
  background: var(--darker-bg);
}

.fork-content {
  max-width: 900px;
  margin: 0 auto;
  text-align: center;
}

.fork-content h2 {
  font-size: clamp(1.8rem, 4vw, 2.5rem);
  margin-bottom: 50px;
  color: var(--primary-orange);
}

.fork-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 30px;
}

.fork-card {
  background: var(--card-bg);
  border: 2px solid rgba(255, 107, 53, 0.15);
  border-radius: 24px;
  padding: 50px 36px;
  text-decoration: none;
  color: var(--light-text);
  transition: all 0.35s ease;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
}

.fork-card:hover {
  transform: translateY(-6px);
  border-color: var(--primary-orange);
  box-shadow: 0 12px 40px rgba(255, 107, 53, 0.15);
}

.fork-icon {
  width: 72px;
  height: 72px;
  background: linear-gradient(135deg, var(--primary-orange), var(--deep-orange));
  border-radius: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 24px;
}

.fork-icon svg {
  width: 36px;
  height: 36px;
  color: white;
}

.fork-card h3 {
  font-size: 1.6rem;
  color: white;
  margin-bottom: 14px;
}

.fork-card p {
  opacity: 0.8;
  font-size: 1rem;
  line-height: 1.7;
  margin-bottom: 24px;
  flex-grow: 1;
}

.fork-link {
  color: var(--primary-orange);
  font-weight: 600;
  font-size: 1.05rem;
  display: inline-flex;
  align-items: center;
  gap: 6px;
  transition: gap 0.3s ease;
}

.fork-card:hover .fork-link {
  gap: 12px;
}

/* Section Header */
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

/* Guild Model — alternating layout */
.guild-model {
  padding: 100px 20px;
  background: var(--dark-bg);
}

.model-items {
  max-width: 1000px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  gap: 60px;
}

.model-item {
  display: flex;
  align-items: center;
  gap: 48px;
}

.model-item--reverse {
  flex-direction: row-reverse;
}

.model-icon {
  flex-shrink: 0;
  width: 100px;
  height: 100px;
  background: linear-gradient(135deg, rgba(255, 107, 53, 0.15), rgba(255, 107, 53, 0.05));
  border: 1px solid rgba(255, 107, 53, 0.2);
  border-radius: 24px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.model-icon svg {
  width: 52px;
  height: 52px;
  color: var(--primary-orange);
}

.model-text h3 {
  font-size: 1.5rem;
  color: white;
  margin-bottom: 12px;
}

.model-text p {
  opacity: 0.8;
  line-height: 1.8;
  font-size: 1.05rem;
}

/* Projects Showcase */
.projects-showcase {
  padding: 100px 20px;
  background: var(--darker-bg);
}

.projects-strip {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 24px;
  max-width: 1200px;
  margin: 0 auto;
}

.project-thumb {
  text-decoration: none;
  color: var(--light-text);
  border-radius: 16px;
  overflow: hidden;
  background: var(--card-bg);
  border: 1px solid rgba(255, 107, 53, 0.12);
  transition: all 0.3s ease;
}

.project-thumb:hover {
  transform: translateY(-5px);
  border-color: rgba(255, 107, 53, 0.4);
  box-shadow: 0 8px 30px rgba(0, 0, 0, 0.3);
}

.project-image-wrap {
  width: 100%;
  height: 160px;
  overflow: hidden;
  background: rgba(255, 255, 255, 0.03);
}

.project-image-wrap img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.3s ease;
}

.project-thumb:hover .project-image-wrap img {
  transform: scale(1.05);
}

.project-image-wrap--logo {
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 24px;
}

.project-image-wrap--logo img {
  width: 80px;
  height: 80px;
  object-fit: contain;
}

.project-meta {
  padding: 16px 18px;
}

.project-meta h4 {
  font-size: 1.1rem;
  color: white;
  margin-bottom: 4px;
}

.project-tag {
  font-size: 0.85rem;
  opacity: 0.6;
}

.projects-cta {
  text-align: center;
  margin-top: 40px;
}

/* Values / Principles */
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
  display: flex;
  align-items: center;
  justify-content: center;
  width: 56px;
  height: 56px;
  margin: 0 auto 20px;
}

.value-icon svg {
  width: 48px;
  height: 48px;
  color: var(--primary-orange);
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

.principles-cta {
  text-align: center;
  margin-top: 60px;
  opacity: 0;
  animation: fadeInUp 0.6s ease-out forwards;
}

/* Manifesto Pull Quote */
.manifesto-quote {
  padding: 80px 20px;
  background: var(--darker-bg);
  border-top: 1px solid rgba(255, 107, 53, 0.1);
  border-bottom: 1px solid rgba(255, 107, 53, 0.1);
}

.manifesto-quote-content {
  max-width: 800px;
  margin: 0 auto;
  text-align: center;
}

.manifesto-quote blockquote {
  font-size: clamp(1.3rem, 3vw, 1.7rem);
  font-style: italic;
  color: var(--light-text);
  opacity: 0.9;
  line-height: 1.8;
  margin-bottom: 28px;
  position: relative;
}

.manifesto-quote blockquote::before {
  content: '';
  display: block;
  width: 40px;
  height: 3px;
  background: var(--primary-orange);
  margin: 0 auto 28px;
  border-radius: 2px;
}

.manifesto-link {
  color: var(--primary-orange);
  font-weight: 600;
  font-size: 1rem;
  text-decoration: none;
  transition: opacity 0.3s ease;
}

.manifesto-link:hover {
  opacity: 0.8;
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
  .fork-grid {
    grid-template-columns: 1fr;
  }

  .model-item,
  .model-item--reverse {
    flex-direction: column;
    text-align: center;
  }

  .projects-strip {
    grid-template-columns: 1fr 1fr;
  }

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
}

@media (max-width: 480px) {
  .projects-strip {
    grid-template-columns: 1fr;
  }
}
</style>

