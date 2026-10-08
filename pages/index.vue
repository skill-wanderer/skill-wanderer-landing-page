<template>
  <div>
    <!-- Hero: who it's for, what we offer, one direct CTA + one transitional CTA -->
    <section class="hero">
      <div class="hero-content">
        <p class="hero-eyebrow">For solo founders, freelancers, coaches, consultants, writers &amp; small businesses</p>
        <h1>See your idea working before you commit.</h1>
        <p class="hero-description">
          We build a free working prototype of your website or AI tool. If you like it, we launch it with
          no development fee and stay on as your tech partner. If not, you walk away and owe nothing.
        </p>
        <div class="hero-cta">
          <NuxtLink to="/contact" class="btn btn-primary">
            Tell Us About Your Idea
            <span>→</span>
          </NuxtLink>
          <NuxtLink to="/work-with-us/service-model" class="btn btn-secondary">
            See How It Works
            <span>→</span>
          </NuxtLink>
        </div>
        <ul class="hero-trust">
          <li>No development fee</li>
          <li>No lock-in</li>
          <li>Your project helps fund free education</li>
        </ul>
        <p class="hero-learner-link">
          Here to learn?
          <NuxtLink to="/learning-path/learn-contribute-build-earn">Start learning for free →</NuxtLink>
        </p>
        <ImageSlot name="home/hero" class="hero-image" priority />
      </div>
      <svg class="wandering-path" viewBox="0 0 1200 200">
        <path class="path" d="M0,150 Q300,100 600,130 T1200,100" />
      </svg>
    </section>

    <!-- Problem: name the client's pain -->
    <section class="problem">
      <div class="section-header">
        <h2>Sound familiar?</h2>
        <p>Good ideas shouldn't stay invisible just because the tech is hard.</p>
      </div>
      <div class="problem-grid">
        <div class="problem-card">
          <span class="problem-icon" aria-hidden="true">🤔</span>
          <h3>"Tech isn't my thing."</h3>
          <p>You know exactly what you want to say. Building the website or app to say it is another story.</p>
        </div>
        <div class="problem-card">
          <span class="problem-icon" aria-hidden="true">💡</span>
          <h3>"I have an idea, but where do I start?"</h3>
          <p>
            Maybe it's an AI practice assignment for your students, or a booking page for your clients.
            You can picture it, but you don't know what it takes.
          </p>
        </div>
        <div class="problem-card">
          <span class="problem-icon" aria-hidden="true">💸</span>
          <h3>"I can't risk thousands on a maybe."</h3>
          <p>Agencies want a big payment up front, before you even know if the idea works.</p>
        </div>
        <div class="problem-card">
          <span class="problem-icon" aria-hidden="true">🔒</span>
          <h3>"What if I get stuck?"</h3>
          <p>Stuck with a developer who disappears, a platform you can't leave, or an AI-built app nobody can fix.</p>
        </div>
      </div>
    </section>

    <!-- Guide: empathy + authority -->
    <section class="guide">
      <div class="guide-content">
        <img src="/skill-wanderer-avatar.jpg" alt="Quan Nguyen, founder of Skill-Wanderer" class="guide-avatar" loading="lazy" />
        <div class="guide-text">
          <p class="guide-eyebrow">Your guide</p>
          <h2>We know what it's like to start with an idea and a small budget.</h2>
          <p>
            Skill-Wanderer is led by Quan Nguyen, our founder and Guild Master. He started in business, not
            tech, as an import-export manager at Toyota Tsusho, so he speaks your language. Since then he has
            spent over a decade building software as a developer, solution architect and project manager
            across startups and enterprises, once leading 16 developers on 4 projects at the same time.
          </p>
          <p>
            He still teaches through Skill-Wanderer, which keeps his skills current. AI helps us move fast,
            but Quan designs your project and reviews every change, so it doesn't fall apart later.
          </p>
          <ul class="guide-points">
            <li>Plain-language advice, not just code</li>
            <li>Quan designs your project and reviews every change</li>
            <li>Guild learners may help, always under his review</li>
          </ul>
        </div>
      </div>
    </section>

    <TestimonialBlock :testimonials="clientTestimonials" section-title="What Clients Say" />

    <!-- Plan: the same 3 steps used everywhere -->
    <section class="plan">
      <div class="section-header">
        <h2>How it works</h2>
        <p>Three simple steps. You can stop after any of them.</p>
      </div>
      <ol class="plan-steps">
        <li class="plan-step">
          <ImageSlot name="plan/idea" group="planSteps" class="plan-image" />
          <span class="plan-number">1</span>
          <h3>Tell us your idea</h3>
          <p>Send a short message or email Quan. He reads it himself and replies with a time for one short call.</p>
        </li>
        <li class="plan-step">
          <ImageSlot name="plan/prototype" group="planSteps" class="plan-image" />
          <span class="plan-number">2</span>
          <h3>Get a free working prototype</h3>
          <p>If it's a good fit, we build a first version you can click through. React to something real. If it's not right, walk away and owe nothing.</p>
        </li>
        <li class="plan-step">
          <ImageSlot name="plan/launch" group="planSteps" class="plan-image" />
          <span class="plan-number">3</span>
          <h3>Launch and grow together</h3>
          <p>
            No development fee. A monthly fee covers hosting, maintenance, support and occasional changes, and
            we stay as your tech partner. Leave anytime and take your project with you.
          </p>
        </li>
      </ol>
      <p class="plan-proof">
        <NuxtLink to="/work-with-us/projects/matt-harr-speaker">Matt</NuxtLink>,
        <NuxtLink to="/work-with-us/projects/broad-strokes-studio">Jack</NuxtLink> and
        <NuxtLink to="/work-with-us/projects/the-meek-method">Aimee</NuxtLink>
        work with us on exactly this model.
      </p>
      <div class="plan-cta">
        <NuxtLink to="/work-with-us/service-model" class="btn btn-outline">
          Read the Full Details <span>→</span>
        </NuxtLink>
      </div>
    </section>

    <!-- Stakes: failure vs success -->
    <section class="stakes">
      <div class="stakes-grid">
        <div class="stakes-card stakes-card--without">
          <h3>Without the right partner</h3>
          <ul>
            <li>Your idea stays invisible, and nobody finds you</li>
            <li>You pay for features you didn't need</li>
            <li>A quickly AI-built app falls apart after launch</li>
            <li>You're locked in to one developer or platform</li>
          </ul>
        </div>
        <div class="stakes-card stakes-card--with">
          <h3>With Skill-Wanderer</h3>
          <ul>
            <li>Your name gets out there, with a site that explains what you do</li>
            <li>You learn what you really need before you spend</li>
            <li>A version that fits your budget is live and looked after</li>
            <li>A partner who stays as long as you want, with no lock-in</li>
            <li>And your project helps fund free education</li>
          </ul>
        </div>
      </div>
    </section>

    <!-- Client projects: proof of work -->
    <section class="projects-showcase">
      <div class="section-header">
        <h2>Recent Client Projects</h2>
        <p>Real work for real clients, from solo practices to start-ups.</p>
      </div>
      <div class="projects-strip">
        <NuxtLink to="/work-with-us/projects/matt-harr-speaker" class="project-thumb">
          <div class="project-image-wrap">
            <img src="/projects/mattharr/thumb.jpg" alt="Matt Harr Speaker" loading="lazy" />
            <span class="project-type-badge">No Development Fee</span>
          </div>
          <div class="project-meta">
            <h4>Matt Harr Speaker</h4>
            <p class="project-summary">35 years of school leadership turned into a positioned speaking brand.</p>
            <div class="project-stack-tags">
              <span>Astro</span>
              <span>Cloudflare</span>
            </div>
          </div>
        </NuxtLink>
        <NuxtLink to="/work-with-us/projects/broad-strokes-studio" class="project-thumb">
          <div class="project-image-wrap">
            <img src="/projects/broadstrokes/thumb.jpg" alt="Broad Strokes Studio" loading="lazy" />
            <span class="project-type-badge">No Development Fee</span>
          </div>
          <div class="project-meta">
            <h4>Broad Strokes Studio</h4>
            <p class="project-summary">A bespoke calligraphy commission funnel with published pricing and Stripe checkout.</p>
            <div class="project-stack-tags">
              <span>Astro</span>
              <span>Stripe</span>
            </div>
          </div>
        </NuxtLink>
        <NuxtLink to="/work-with-us/projects/the-meek-method" class="project-thumb">
          <div class="project-image-wrap">
            <img src="/projects/meekmethod/thumb.jpg" alt="The Meek Method" loading="lazy" />
            <span class="project-type-badge">No Development Fee</span>
          </div>
          <div class="project-meta">
            <h4>The Meek Method</h4>
            <p class="project-summary">Positioning and a full practice site for a decision coaching business.</p>
            <div class="project-stack-tags">
              <span>Astro</span>
              <span>Web3Forms</span>
            </div>
          </div>
        </NuxtLink>
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
        <NuxtLink to="/work-with-us/projects/mindyminds" class="project-thumb">
          <div class="project-image-wrap">
            <img src="/projects/mindyminds/thumb.jpg" alt="MindyMinds" loading="lazy" />
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
        <NuxtLink to="/work-with-us/projects/mindyplay" class="project-thumb">
          <div class="project-image-wrap">
            <img src="/projects/mindyplay/thumb.jpg" alt="MindyPlay" loading="lazy" />
            <span class="project-type-badge">Start-up</span>
          </div>
          <div class="project-meta">
            <h4>MindyPlay</h4>
            <p class="project-summary">A physical game concept turned into an interactive mobile game.</p>
            <div class="project-stack-tags">
              <span>Flutter</span>
              <span>Firebase</span>
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

    <!-- Mission: the success the client shares in -->
    <section class="mission-band">
      <div class="mission-band-content">
        <div class="mission-faces">
          <img src="/learners/Vincent-Onotu-Bello.jpeg" alt="Vincent Onotu Bello" loading="lazy" />
          <img src="/learners/khouja-nasreddine.jpeg" alt="Khouja Nasreddine" loading="lazy" />
          <img src="/learners/Alfredo-Salazar.jpeg" alt="Alfredo Salazar" loading="lazy" />
        </div>
        <h2>Your project funds free education</h2>
        <p>
          Client work helps fund free learning paths and mentorship for learners like Vincent in Nigeria,
          Khouja in Tunisia and Alfredo in Venezuela. Client work is our main funding, because it keeps us
          practical.
        </p>
        <ul class="principle-chips">
          <li>No ads or hidden agendas</li>
          <li>All net revenue reinvested</li>
          <li>Free learning for everyone</li>
        </ul>
        <div class="mission-links">
          <NuxtLink to="/learners" class="btn btn-outline">
            Meet Our Learners <span>→</span>
          </NuxtLink>
          <NuxtLink to="/principles" class="btn btn-outline">
            Our 12 Principles <span>→</span>
          </NuxtLink>
        </div>
      </div>
    </section>

    <!-- Second audience: learners -->
    <section class="learn-path">
      <div class="learn-card">
        <span class="learn-icon" aria-hidden="true">📚</span>
        <div class="learn-text">
          <h3>Want to learn a new skill instead?</h3>
          <p>
            Our learning paths and mentorship are free. Learn by building real projects and grow from
            apprentice to master, at your own pace.
          </p>
        </div>
        <NuxtLink to="/learning-path/learn-contribute-build-earn" class="btn btn-secondary">
          Start Learning <span>→</span>
        </NuxtLink>
      </div>
    </section>

    <!-- Final CTA -->
    <section class="final-cta">
      <h2>Tell Quan about your idea</h2>
      <p>
        Describe what you want to build or the problem you have. Quan reads every message himself and usually
        replies within 2 working days with a time for a short call. He takes one call a day, so he keeps time to build
        and teach.
      </p>
      <NuxtLink to="/contact" class="btn btn-primary">
        Tell Us About Your Idea <span>→</span>
      </NuxtLink>
      <p class="final-cta-email">
        Prefer email? Write to the Guild Master at
        <a href="mailto:quan.nguyen@skill-wanderer.com">quan.nguyen@skill-wanderer.com</a>
      </p>
    </section>
  </div>
</template>

<script setup lang="ts">
// Verbatim excerpts from the LinkedIn recommendations shown in full on /work-with-us/our-projects.
const clientTestimonials = [
  {
    quote:
      'What sets Quan apart, however, is that his help went far beyond designing a website. He has been a trusted business adviser throughout the process, offering honest feedback and practical guidance on how to position myself, present my services, reach potential clients, and grow my speaking business.',
    name: 'Matt Harr',
    role: 'Speaker on school culture and leadership',
    avatar: '/projects/mattharr/matt-harr-avatar.jpg',
  },
  {
    quote:
      "Quan is phenomenal to work with; he designed a website for my calligraphy business and worked with me for two full months to make sure it was exactly how I hoped it'd be. Everything from personal preferences (i.e. not using AI, but taking actual photos of the work) to pricing structure was convenient and clearly laid out in both our consultations and contract.",
    name: 'Jack Passananti',
    role: 'Writer · Calligrapher · Illuminator',
    avatar: '/projects/broadstrokes/jack-avatar.jpg',
  },
]

// SEO and meta management
useSEO({
  title: 'Skill-Wanderer | Tech Partner for Small Businesses',
  description: 'A tech partner for solo founders, coaches, consultants, freelancers, writers and small businesses. Free working prototype first, no development fee, no lock-in.',
  keywords: [
    'tech partner for small business',
    'website for coaches',
    'website for consultants',
    'free prototype',
    'no development fee',
    'no vendor lock-in',
    'AI tools for educators',
    'free education',
  ],
  type: 'website',
  structuredData: [
    createOrganizationSchema(),
    createFAQSchema([
      {
        question: 'What does Skill-Wanderer do?',
        answer: 'Skill-Wanderer is a tech partner for solo founders, freelancers, coaches, consultants, writers and small businesses. We build websites and AI tools, starting with a free working prototype. If you continue, there is no development fee; you pay a monthly or quarterly fee for hosting, maintenance, support and occasional changes.'
      },
      {
        question: 'Do I pay anything before I see my project?',
        answer: 'No. For accepted projects the first working prototype is free, and there is no obligation to continue. The monthly price is confirmed only after you have reviewed the prototype.'
      },
      {
        question: 'Can I leave later?',
        answer: 'Yes, anytime. We do not believe in vendor lock-in: you own your domain, you can see the code and configuration, and you can move the project yourself or with another provider.'
      },
      {
        question: 'Who builds my project?',
        answer: 'Quan Nguyen, our founder, designs the project, builds the critical parts and reviews every change. Guild learners may help, always under his review.'
      },
      {
        question: 'Is the learning really free?',
        answer: 'Yes, all Skill-Wanderer learning content is completely free. Mentorship and guild support are funded mainly by our client work, and never by ads.'
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
  padding: 140px 20px 80px;
  background: radial-gradient(circle at 20% 50%, rgba(255, 107, 53, 0.1) 0%, transparent 50%),
              radial-gradient(circle at 80% 50%, rgba(255, 217, 61, 0.05) 0%, transparent 50%);
}

.hero-content {
  max-width: 960px;
  text-align: center;
  z-index: 2;
}

.hero-eyebrow {
  display: inline-block;
  font-size: 0.95rem;
  font-weight: 600;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  color: var(--primary-orange);
  margin-bottom: 20px;
  animation: fadeInUp 0.8s ease-out;
}

.hero h1 {
  font-size: clamp(2.3rem, 6vw, 4.2rem);
  font-weight: 800;
  line-height: 1.15;
  margin-bottom: 24px;
  background: linear-gradient(135deg, var(--primary-orange), var(--accent-yellow));
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  animation: fadeInUp 0.8s ease-out;
}

.hero-description {
  font-size: clamp(1.05rem, 2.2vw, 1.25rem);
  line-height: 1.75;
  max-width: 760px;
  margin: 0 auto 40px;
  opacity: 0.85;
  animation: fadeInUp 0.8s ease-out 0.2s both;
}

.hero-cta {
  display: flex;
  gap: 20px;
  justify-content: center;
  flex-wrap: wrap;
  animation: fadeInUp 0.8s ease-out 0.4s both;
}

.hero-trust {
  list-style: none;
  padding: 0;
  margin: 32px 0 0;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 10px 28px;
  font-size: 0.95rem;
  opacity: 0.85;
  animation: fadeInUp 0.8s ease-out 0.6s both;
}

.hero-trust li::before {
  content: '✓';
  color: var(--success-green);
  font-weight: 700;
  margin-right: 8px;
}

.hero-learner-link {
  margin-top: 24px;
  font-size: 0.95rem;
  opacity: 0.75;
  animation: fadeInUp 0.8s ease-out 0.6s both;
}

.hero-learner-link a {
  color: var(--primary-orange);
  font-weight: 600;
  text-decoration: none;
}

.hero-learner-link a:hover {
  text-decoration: underline;
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

.hero-image {
  max-width: 880px;
  margin: 48px auto 0;
  animation: fadeInUp 0.8s ease-out 0.7s both;
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
  box-sizing: border-box;
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

.section-header p {
  font-size: 1.15rem;
  line-height: 1.7;
  opacity: 0.85;
}

/* Problem */
.problem {
  padding: 100px 20px;
  background: var(--darker-bg);
}

.problem-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 24px;
  max-width: 1000px;
  margin: 0 auto;
}

.problem-card {
  background: var(--card-bg);
  border: 1px solid rgba(255, 107, 53, 0.12);
  border-radius: 20px;
  padding: 32px;
  transition: all 0.3s ease;
}

.problem-card:hover {
  border-color: rgba(255, 107, 53, 0.35);
  background: var(--card-hover);
}

.problem-icon {
  display: block;
  font-size: 2rem;
  margin-bottom: 14px;
}

.problem-card h3 {
  color: white;
  font-size: 1.25rem;
  margin-bottom: 10px;
}

.problem-card p {
  opacity: 0.8;
  line-height: 1.7;
}

/* Guide */
.guide {
  padding: 100px 20px;
  background: var(--dark-bg);
}

.guide-content {
  max-width: 1000px;
  margin: 0 auto;
  display: flex;
  gap: 48px;
  align-items: flex-start;
}

.guide-avatar {
  width: 180px;
  height: 180px;
  border-radius: 50%;
  object-fit: cover;
  border: 3px solid rgba(255, 107, 53, 0.4);
  flex-shrink: 0;
}

.guide-eyebrow {
  font-size: 0.9rem;
  font-weight: 600;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: var(--primary-orange);
  margin-bottom: 12px;
}

.guide-text h2 {
  font-size: clamp(1.7rem, 4vw, 2.4rem);
  line-height: 1.25;
  color: white;
  margin-bottom: 20px;
}

.guide-text p {
  font-size: 1.05rem;
  line-height: 1.8;
  opacity: 0.85;
  margin-bottom: 16px;
}

.guide-points {
  list-style: none;
  padding: 0;
  margin: 24px 0 0;
  display: grid;
  gap: 10px;
}

.guide-points li {
  position: relative;
  padding-left: 28px;
  line-height: 1.6;
}

.guide-points li::before {
  content: '✓';
  position: absolute;
  left: 0;
  color: var(--success-green);
  font-weight: 700;
}

/* Plan */
.plan {
  padding: 100px 20px;
  background: var(--dark-bg);
}

.plan-steps {
  list-style: none;
  padding: 0;
  margin: 0 auto;
  max-width: 1100px;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 24px;
}

.plan-step {
  background: var(--card-bg);
  border: 1px solid rgba(255, 107, 53, 0.15);
  border-radius: 20px;
  padding: 36px 28px;
  transition: all 0.3s ease;
}

.plan-step:hover {
  border-color: rgba(255, 107, 53, 0.4);
  transform: translateY(-4px);
}

.plan-step .plan-image {
  margin-bottom: 22px;
  border-radius: 14px;
}

.plan-number {
  width: 44px;
  height: 44px;
  border-radius: 50%;
  background: linear-gradient(135deg, var(--primary-orange), var(--deep-orange));
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 700;
  font-size: 1.1rem;
  margin-bottom: 18px;
}

.plan-step h3 {
  color: white;
  font-size: 1.25rem;
  margin-bottom: 10px;
}

.plan-step p {
  opacity: 0.82;
  line-height: 1.7;
}

.plan-proof {
  text-align: center;
  max-width: 700px;
  margin: 40px auto 0;
  font-size: 1.05rem;
  opacity: 0.9;
}

.plan-proof a {
  color: var(--primary-orange);
  font-weight: 600;
  text-decoration: none;
}

.plan-proof a:hover {
  text-decoration: underline;
}

.plan-cta {
  text-align: center;
  margin-top: 28px;
}

/* Stakes */
.stakes {
  padding: 100px 20px;
  background: var(--darker-bg);
}

.stakes-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 24px;
  max-width: 1000px;
  margin: 0 auto;
}

.stakes-card {
  background: var(--card-bg);
  border-radius: 20px;
  padding: 36px;
}

.stakes-card--without {
  border: 1px solid rgba(244, 67, 54, 0.3);
}

.stakes-card--with {
  border: 1px solid rgba(76, 175, 80, 0.35);
  background: rgba(76, 175, 80, 0.05);
}

.stakes-card h3 {
  color: white;
  font-size: 1.3rem;
  margin-bottom: 18px;
}

.stakes-card ul {
  list-style: none;
  padding: 0;
  margin: 0;
  display: grid;
  gap: 12px;
}

.stakes-card li {
  position: relative;
  padding-left: 30px;
  line-height: 1.6;
  opacity: 0.88;
}

.stakes-card--without li::before {
  content: '✕';
  position: absolute;
  left: 0;
  color: #f87171;
  font-weight: 700;
}

.stakes-card--with li::before {
  content: '✓';
  position: absolute;
  left: 0;
  color: #4ade80;
  font-weight: 700;
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

/* Anchored left to match the project cards, and because several thumbnail
   crops put their subject on the right. */
.project-type-badge {
  position: absolute;
  top: 10px;
  left: 10px;
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

/* Mission band */
.mission-band {
  padding: 100px 20px;
  background: linear-gradient(135deg, rgba(255, 107, 53, 0.08) 0%, var(--darker-bg) 60%);
  border-top: 1px solid rgba(255, 107, 53, 0.1);
  border-bottom: 1px solid rgba(255, 107, 53, 0.1);
}

.mission-band-content {
  max-width: 820px;
  margin: 0 auto;
  text-align: center;
}

.mission-faces {
  display: flex;
  justify-content: center;
  margin-bottom: 24px;
}

.mission-faces img {
  width: 64px;
  height: 64px;
  border-radius: 50%;
  object-fit: cover;
  border: 3px solid var(--darker-bg);
  margin-left: -12px;
}

.mission-faces img:first-child {
  margin-left: 0;
}

.mission-band h2 {
  font-size: clamp(2rem, 5vw, 2.8rem);
  color: var(--primary-orange);
  margin-bottom: 18px;
}

.mission-band p {
  font-size: 1.1rem;
  line-height: 1.8;
  opacity: 0.88;
  margin-bottom: 28px;
}

.principle-chips {
  list-style: none;
  padding: 0;
  margin: 0 0 32px;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 10px;
}

.principle-chips li {
  background: rgba(255, 107, 53, 0.08);
  border: 1px solid rgba(255, 107, 53, 0.25);
  border-radius: 50px;
  padding: 8px 16px;
  font-size: 0.9rem;
}

.mission-links {
  display: flex;
  gap: 16px;
  justify-content: center;
  flex-wrap: wrap;
}

/* Learner path */
.learn-path {
  padding: 80px 20px;
  background: var(--dark-bg);
}

.learn-card {
  max-width: 1000px;
  margin: 0 auto;
  display: flex;
  align-items: center;
  gap: 28px;
  background: var(--card-bg);
  border: 1px solid rgba(255, 107, 53, 0.15);
  border-radius: 20px;
  padding: 36px 40px;
}

.learn-icon {
  font-size: 2.5rem;
  flex-shrink: 0;
}

.learn-text h3 {
  color: white;
  font-size: 1.35rem;
  margin-bottom: 8px;
}

.learn-text p {
  opacity: 0.8;
  line-height: 1.7;
}

.learn-card .btn {
  flex-shrink: 0;
  margin-left: auto;
}

/* Final CTA */
.final-cta {
  padding: 100px 20px;
  background: var(--darker-bg);
  text-align: center;
}

.final-cta h2 {
  font-size: clamp(2rem, 5vw, 3rem);
  color: var(--primary-orange);
  margin-bottom: 18px;
}

.final-cta p {
  max-width: 680px;
  margin: 0 auto 32px;
  font-size: 1.1rem;
  line-height: 1.8;
  opacity: 0.88;
}

.final-cta .final-cta-email {
  margin: 28px auto 0;
  font-size: 1rem;
  opacity: 0.8;
}

.final-cta-email a {
  color: var(--primary-orange);
  font-weight: 600;
  text-decoration: none;
}

.final-cta-email a:hover {
  text-decoration: underline;
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
@media (max-width: 900px) {
  .plan-steps {
    grid-template-columns: 1fr;
    max-width: 600px;
  }
}

@media (max-width: 768px) {
  .hero {
    padding: 120px 16px 60px;
  }

  .hero-eyebrow {
    font-size: 0.8rem;
    letter-spacing: 0.05em;
  }

  .problem-grid,
  .stakes-grid {
    grid-template-columns: 1fr;
  }

  .guide-content {
    flex-direction: column;
    align-items: center;
    gap: 28px;
  }

  .guide-avatar {
    width: 140px;
    height: 140px;
  }

  .guide-text {
    text-align: center;
  }

  .guide-points {
    text-align: left;
    max-width: 420px;
    margin-left: auto;
    margin-right: auto;
  }

  .projects-strip {
    grid-template-columns: 1fr 1fr;
  }

  .learn-card {
    flex-direction: column;
    text-align: center;
    padding: 32px 24px;
  }

  .learn-card .btn {
    margin-left: 0;
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

  .problem-card,
  .stakes-card {
    padding: 28px 22px;
  }
}
</style>
