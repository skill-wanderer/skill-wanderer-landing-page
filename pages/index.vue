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
            Start Learning
            <span>→</span>
          </NuxtLink>
          <NuxtLink to="/work-with-us" class="btn btn-secondary">
            Work With Us
            <span>→</span>
          </NuxtLink>
        </div>
      </div>
      <svg class="wandering-path" viewBox="0 0 1200 200">
        <path class="path" d="M0,150 Q300,100 600,130 T1200,100" />
      </svg>
    </section>

    <!-- How Can We Help? — two-path CTA -->
    <section class="help-paths">
      <div class="help-paths-content">
        <h2>How Can We Help?</h2>
        <div class="help-cards">
          <NuxtLink to="/learning-path/learn-contribute-build-earn" class="help-card">
            <div class="help-card-icon">
              <Layers :size="32" color="var(--primary-orange)" :stroke-width="1.5" />
            </div>
            <h3>I Want to Learn</h3>
            <p>Free learning paths, mentorship, and real-world projects. Progress from Apprentice to Master at your own pace.</p>
            <span class="help-card-cta">Start Learning <span>→</span></span>
          </NuxtLink>
          <NuxtLink to="/work-with-us" class="help-card">
            <div class="help-card-icon">
              <Building2 :size="32" color="var(--primary-orange)" :stroke-width="1.5" />
            </div>
            <h3>I Need a Builder</h3>
            <p>Senior-led, community-powered delivery. Custom software, transparent pricing, and every engagement funds education.</p>
            <span class="help-card-cta">Work With Us <span>→</span></span>
          </NuxtLink>
        </div>
      </div>
    </section>

    <!-- Why a Guild? + The Tech Guild Model — merged narrative + visual features -->
    <section id="platform" class="guild-narrative">
      <div class="narrative-content">
        <div class="narrative-header">
          <h2>Why a Guild?</h2>
          <p class="narrative-lead">A social enterprise in the making—where education and real work are one and the same</p>
        </div>
        <div class="narrative-body">
          <p>
            Centuries ago, guilds were communities where apprentices, journeymen, and masters worked side by side—
            learning not from lectures but from doing. The master didn't just teach; they built alongside you.
            Skill-Wanderer brings that model to technology.
          </p>
        </div>

        <div class="guild-model-features">
          <div class="guild-feature">
            <div class="guild-feature-icon">
              <Compass :size="28" color="var(--primary-orange)" :stroke-width="1.5" />
            </div>
            <div class="guild-feature-text">
              <h3>Guild-Based Learning</h3>
              <p>Progress from Apprentice to Journeyman to Master through structured mentorship, hands-on projects, and peer collaboration—just like the craft guilds of old.</p>
            </div>
          </div>
          <div class="guild-feature guild-feature--reverse">
            <div class="guild-feature-text">
              <h3>Learn by Building</h3>
              <p>Guild members work on real projects for real clients. Every line of code shipped is a lesson learned—failures included. That's how craft is forged.</p>
            </div>
            <div class="guild-feature-icon">
              <FileCode :size="28" color="var(--primary-orange)" :stroke-width="1.5" />
            </div>
          </div>
          <div class="guild-feature">
            <div class="guild-feature-icon">
              <RefreshCw :size="28" color="var(--primary-orange)" :stroke-width="1.5" />
            </div>
            <div class="guild-feature-text">
              <h3>Work Funds Education</h3>
              <p>Revenue from guild engagements is reinvested into free education, mentorship, and community infrastructure. No ads, no donations needed—just purposeful work.</p>
            </div>
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
            <span class="project-type-badge">Non-Profit</span>
          </div>
          <div class="project-meta">
            <h4>WM Smile Generation</h4>
            <p class="project-summary">Website for a Ugandan non-profit supporting healthcare and education communities.</p>
            <div class="project-stack-tags">
              <span>Nuxt 3</span>
              <span>Kubernetes</span>
            </div>
          </div>
        </NuxtLink>
        <NuxtLink to="/work-with-us/projects/chanhdao-vn" class="project-thumb">
          <div class="project-image-wrap">
            <img src="/projects/chanhdao/preview.svg" alt="ChanhDao.vn" loading="lazy" />
            <span class="project-type-badge">Non-Profit</span>
          </div>
          <div class="project-meta">
            <h4>ChanhDao.vn</h4>
            <p class="project-summary">162 Buddhist lessons with AI-powered Q&A on a self-hosted cluster.</p>
            <div class="project-stack-tags">
              <span>Python</span>
              <span>OpenAI</span>
            </div>
          </div>
        </NuxtLink>
        <NuxtLink to="/work-with-us/projects/mindyminds" class="project-thumb">
          <div class="project-image-wrap">
            <img src="/projects/mindyminds/mindyminds-logo.jpg" alt="MindyMinds" loading="lazy" />
            <span class="project-type-badge">Start-up</span>
          </div>
          <div class="project-meta">
            <h4>MindyMinds</h4>
            <p class="project-summary">Multi-tenant AI chatbot platform delivered concept-to-production in 3 months.</p>
            <div class="project-stack-tags">
              <span>Next.js</span>
              <span>Docker</span>
            </div>
          </div>
        </NuxtLink>

      </div>
      <div class="projects-cta">
        <NuxtLink to="/work-with-us/our-projects" class="btn btn-outline">
          View All Projects <span>→</span>
        </NuxtLink>
      </div>
    </section>

    <!-- Guild Voices — testimonial block for visual rhythm -->
    <section class="testimonials">
      <div class="testimonials-content">
        <div class="section-header">
          <h2>Guild Voices</h2>
          <p>Stories from the apprentices, journeymen, and mentors who walk the path</p>
        </div>
        <div class="testimonials-grid">
          <div class="testimonial-card">
            <blockquote>"Nothing stops The Warrior. Khouja doesn't wait for the storm to pass—he charges straight through it. His resilience and self-reliance make him one of the most impressive learners we've ever had."</blockquote>
            <div class="testimonial-author">
              <img src="/learners/khouja-nasreddine.jpeg" alt="Khouja Nasreddine" loading="lazy" />
              <div>
                <strong>Khouja Nasreddine</strong>
                <span>Mobile Game Dev Path · Tunisia</span>
              </div>
            </div>
          </div>
          <div class="testimonial-card">
            <blockquote>"Alfredo carries his own torch. His words inspire, his independence impresses, and his fire is contagious. The firebrand has a future as bright as the flame he carries."</blockquote>
            <div class="testimonial-author">
              <img src="/learners/Alfredo-Salazar.jpeg" alt="Alfredo Salazar" loading="lazy" />
              <div>
                <strong>Alfredo Salazar</strong>
                <span>Mobile Game Dev Path · Venezuela</span>
              </div>
            </div>
          </div>
          <div class="testimonial-card">
            <blockquote>"Vincent doesn't have the luxury of stable power or fast internet—yet he shows up every day with the same calm determination. The Stoic will sail through this."</blockquote>
            <div class="testimonial-author">
              <img src="/learners/Vincent-Onotu-Bello.jpeg" alt="Vincent Onotu Bello" loading="lazy" />
              <div>
                <strong>Vincent Onotu Bello</strong>
                <span>Software Dev Path · Nigeria</span>
              </div>
            </div>
          </div>
        </div>
        <div class="testimonials-cta">
          <NuxtLink to="/learners" class="btn btn-outline">
            Meet Our Learners <span>→</span>
          </NuxtLink>
        </div>
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
import { Layers, Building2, Compass, FileCode, RefreshCw } from 'lucide-vue-next'

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

/* Guild Narrative */
.guild-narrative {
  padding: 100px 20px;
  background: var(--darker-bg);
}

.narrative-content {
  max-width: 800px;
  margin: 0 auto;
}

.narrative-header {
  text-align: center;
  margin-bottom: 48px;
}

.narrative-header h2 {
  font-size: clamp(2rem, 5vw, 3rem);
  color: var(--primary-orange);
  margin-bottom: 16px;
}

.narrative-lead {
  font-size: clamp(1.1rem, 2.5vw, 1.35rem);
  color: var(--light-text);
  opacity: 0.9;
  line-height: 1.7;
}

.narrative-body p {
  font-size: 1.1rem;
  line-height: 1.9;
  opacity: 0.8;
  margin-bottom: 24px;
  text-align: center;
}

/* Guild Model Features — alternating icon + text */
.guild-model-features {
  display: flex;
  flex-direction: column;
  gap: 48px;
  margin-top: 56px;
}

.guild-feature {
  display: flex;
  align-items: center;
  gap: 40px;
}

.guild-feature--reverse {
  flex-direction: row-reverse;
}

.guild-feature-icon {
  flex-shrink: 0;
  width: 72px;
  height: 72px;
  border-radius: 50%;
  background: rgba(255, 107, 53, 0.1);
  border: 1px solid rgba(255, 107, 53, 0.25);
  display: flex;
  align-items: center;
  justify-content: center;
}

.guild-feature-text h3 {
  font-size: 1.3rem;
  color: white;
  font-weight: 700;
  margin-bottom: 8px;
}

.guild-feature-text p {
  font-size: 1rem;
  line-height: 1.7;
  opacity: 0.75;
}

/* How Can We Help? */
.help-paths {
  padding: 100px 20px;
  background: var(--dark-bg);
}

.help-paths-content {
  max-width: 900px;
  margin: 0 auto;
}

.help-paths-content h2 {
  text-align: center;
  font-size: clamp(2rem, 5vw, 3rem);
  margin-bottom: 50px;
  background: linear-gradient(135deg, var(--primary-orange), var(--accent-yellow));
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

.help-cards {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 30px;
}

.help-card {
  background: var(--card-bg);
  border: 1px solid rgba(255, 107, 53, 0.15);
  border-radius: 20px;
  padding: 48px 36px;
  text-align: center;
  text-decoration: none;
  color: var(--light-text);
  transition: all 0.3s ease;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.help-card:hover {
  transform: translateY(-5px);
  border-color: rgba(255, 107, 53, 0.5);
  box-shadow: 0 8px 40px rgba(0, 0, 0, 0.3);
}

.help-card-icon {
  width: 72px;
  height: 72px;
  border-radius: 16px;
  background: rgba(255, 107, 53, 0.1);
  border: 1px solid rgba(255, 107, 53, 0.25);
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 28px;
}

.help-card h3 {
  font-size: 1.5rem;
  color: white;
  font-weight: 700;
  margin-bottom: 16px;
}

.help-card p {
  font-size: 1rem;
  line-height: 1.7;
  opacity: 0.75;
  margin-bottom: 24px;
  flex-grow: 1;
}

.help-card-cta {
  color: var(--primary-orange);
  font-weight: 600;
  font-size: 1rem;
  display: inline-flex;
  align-items: center;
  gap: 8px;
  transition: gap 0.3s ease;
}

.help-card:hover .help-card-cta {
  gap: 14px;
}

.narrative-highlight {
  font-size: 1.2rem !important;
  font-weight: 600;
  color: var(--primary-orange) !important;
  opacity: 1 !important;
  border-left: 3px solid var(--primary-orange);
  padding-left: 20px;
  margin-top: 32px !important;
}

/* Guild Model — removed, replaced by narrative */

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

/* Projects Showcase */
.projects-showcase {
  padding: 100px 20px;
  background: var(--dark-bg);
}

.projects-strip {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
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
  position: relative;
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

.project-type-badge {
  position: absolute;
  top: 10px;
  right: 10px;
  background: rgba(0, 0, 0, 0.65);
  color: rgba(255, 255, 255, 0.85);
  font-size: 0.7rem;
  font-weight: 600;
  padding: 4px 10px;
  border-radius: 50px;
  letter-spacing: 0.04em;
}

.project-meta {
  padding: 16px 18px;
}

.project-meta h4 {
  font-size: 1.1rem;
  color: white;
  margin-bottom: 6px;
}

.project-summary {
  font-size: 0.85rem;
  opacity: 0.6;
  line-height: 1.5;
  margin-bottom: 10px;
}

.project-stack-tags {
  display: flex;
  gap: 6px;
}

.project-stack-tags span {
  font-size: 0.7rem;
  padding: 3px 10px;
  border-radius: 50px;
  background: rgba(255, 107, 53, 0.08);
  border: 1px solid rgba(255, 107, 53, 0.2);
  color: var(--primary-orange);
  font-weight: 600;
}

.projects-cta {
  text-align: center;
  margin-top: 40px;
}

/* Testimonials */
.testimonials {
  padding: 100px 20px;
  background: var(--darker-bg);
}

.testimonials-content {
  max-width: 1200px;
  margin: 0 auto;
}

.testimonials-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 30px;
}

.testimonial-card {
  background: var(--card-bg);
  border: 1px solid rgba(255, 107, 53, 0.1);
  border-radius: 20px;
  padding: 36px 30px;
  display: flex;
  flex-direction: column;
  gap: 24px;
}

.testimonial-card blockquote {
  font-size: 1rem;
  line-height: 1.8;
  color: var(--light-text);
  opacity: 0.9;
  font-style: italic;
  margin: 0;
  flex-grow: 1;
}

.testimonial-author {
  display: flex;
  align-items: center;
  gap: 14px;
}

.testimonial-author img {
  width: 48px;
  height: 48px;
  border-radius: 50%;
  object-fit: cover;
  border: 2px solid rgba(255, 107, 53, 0.3);
}

.testimonial-author strong {
  display: block;
  color: white;
  font-size: 0.95rem;
}

.testimonial-author span {
  font-size: 0.8rem;
  opacity: 0.6;
}

.testimonials-cta {
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
  .help-cards {
    grid-template-columns: 1fr;
  }

  .guild-feature,
  .guild-feature--reverse {
    flex-direction: column;
    text-align: center;
  }

  .projects-strip {
    grid-template-columns: 1fr 1fr;
  }

  .testimonials-grid {
    grid-template-columns: 1fr;
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

