<template>
  <div>
    <!-- Hero Section -->
    <section class="hero">
      <h1>Our Story</h1>
      <p>Free, practical education for everyone who keeps learning, funded by the real work we do for small businesses</p>
    </section>

    <!-- Story Section -->
    <section class="story">
      <div class="story-content">
        <div class="story-section" style="animation-delay: 0.1s;">
          <h2><span class="section-icon">🌅</span> The Beginning</h2>
          <ImageSlot name="about/beginning" class="story-image" />
          <p>
            My story didn't start in tech. It began in international trade at Toyota Tsusho Vietnam, where I learned 
            <span class="highlight">the most fundamental skill of all: how to learn rapidly and adapt</span>. When I 
            made the leap from Import-Export Manager to developer, many thought I was crazy. But that unconventional 
            journey taught me something profound about learning and growth.
          </p>
          <p>
            Through four startups, leading 50+ members, juggling multiple projects simultaneously, and yes, failing 
            spectacularly at times, I discovered that <span class="highlight">the gap between what we learn and what 
            we need to know keeps growing wider</span>. Every role I've wandered through, from Frontend to DevOps, 
            from Business Analyst to Solution Architect, added another piece to the puzzle.
          </p>
          <p>
            When I built the entire Skill-Wanderer platform on a self-hosted Kubernetes cluster using just an old 
            laptop and Orange Pi, I realized this resourcefulness, this ability to create from constraints, these 
            lessons from the wandering path were too valuable to keep to myself. I needed to build a guild.
          </p>
        </div>

        <div class="story-section" style="animation-delay: 0.3s;">
          <h2><span class="section-icon">💡</span> The Realization</h2>
          <ImageSlot name="about/realization" class="story-image" />
          <p>
            Having transitioned from business to tech myself, I understood firsthand how daunting the journey can be. 
            Traditional education often fails to capture the messy, non-linear reality of learning a new craft.
            <span class="highlight">We're taught to fear failure, when in reality, failure is where the deepest learning happens</span>. 
            What learners truly need is honest, unbiased guidance from someone who remembers the struggle, plus a community 
            that works alongside them, not just lectures at them.
          </p>
          <p>
            I looked at how the great craft guilds worked throughout history: masters teaching apprentices through real work, 
            not textbooks. Journeymen honing their skills by contributing to real projects. A cycle where work and learning 
            were inseparable, and where every member's growth strengthened the whole guild.
          </p>
          <p>
            I realized that <span class="highlight">Skill-Wanderer could be a modern guild</span>: a
            social enterprise in the making where learning happens through building, where revenue from real work funds free education, 
            and where the guild grows as its members grow. Not a traditional course platform, but a living, working community 
            of craftspeople at every level.
          </p>
          <p>
            I envisioned a guild that would be different, one that celebrates the wandering journey of learning, 
            embraces failures as stepping stones, and operates with complete transparency and integrity. 
            No ads, no affiliate commissions, no hidden agenda. Working toward becoming a social enterprise built on craft, 
            community, and purpose.
          </p>
        </div>

        <div class="story-section" style="animation-delay: 0.5s;">
          <h2><span class="section-icon">🚀</span> The Vision</h2>
          <ImageSlot name="about/vision" class="story-image" />
          <p>
            Skill-Wanderer is built on a profound truth: <span class="highlight">teaching is the best way to learn, 
            and building is the best way to teach</span>. The guild model unites education and professional work into 
            a single self-sustaining cycle. Masters mentor journeymen, journeymen guide apprentices, and together the 
            guild takes on real projects that fund free education for all.
          </p>
          <p>
            With a social enterprise mindset, we deeply believe that <span class="highlight">what we give to the world 
            comes back to us manifold</span>. By operating as a guild, where every engagement delivers value to
            clients while growing our community, we create a virtuous cycle. Today's apprentices become tomorrow's masters. 
            Every project shipped funds the next wave of free education.
          </p>
          <p>
            The beauty of the guild is that it's a living, breathing example of continuous learning. As we build 
            new features, take on client projects, or tackle complex architectural challenges, 
            <span class="highlight">every technical decision becomes a teachable moment</span>. When I chose Astro 
            over WordPress, when I implemented microservices, when I set up that self-hosted K8s cluster, these weren't just 
            technical choices, they were lessons forged in the guild's workshop.
          </p>
          <p>
            This symbiotic relationship, where real work drives learning and learning enriches work, is what makes 
            the guild model so powerful. Guild members don't just learn from static content; they learn from doing, 
            failing, succeeding, and building together. The guild grows as we grow, and we all grow together.
          </p>
        </div>
      </div>
    </section>

    <!-- Philosophy Section -->
    <section class="philosophy">
      <div class="section-header">
        <h2>Guild Philosophy</h2>
        <p>The core beliefs that guide our social enterprise mission</p>
      </div>
      <div class="philosophy-grid">
        <div class="philosophy-card">
          <span class="philosophy-icon">🏛️</span>
          <h3>Craft Through Practice</h3>
          <p>Like the guilds of old, we believe mastery comes through doing. Every real project is a lesson, every engagement is a classroom. Teaching and building are one and the same.</p>
        </div>
        <div class="philosophy-card">
          <span class="philosophy-icon">🌱</span>
          <h3>Growth Through Failure</h3>
          <p>We celebrate mistakes as learning opportunities. Every error resolved and every problem solved is a step towards mastery within the guild.</p>
        </div>
        <div class="philosophy-card">
          <span class="philosophy-icon">🔄</span>
          <h3>Work Funds Education</h3>
          <p>All revenue from guild engagements flows back into free education, mentorship, and community infrastructure. No profit extraction, ever.</p>
        </div>
        <div class="philosophy-card">
          <span class="philosophy-icon">🤝</span>
          <h3>Guild Over Competition</h3>
          <p>Learning is not a solo journey. The guild fosters collaboration, peer mentorship, and collective growth, with apprentices, journeymen, and masters building together.</p>
        </div>
      </div>
    </section>

    <!-- Mission Section -->
    <section id="mission" class="mission">
      <div class="mission-content">
        <h2>Our Mission</h2>
        <div class="mission-statement">
          "Our mission is to make quality education free and accessible
          through the guild model, where real-world work funds learning, and learning feeds back into work. 
          We operate with complete integrity, forgoing any benefit that could cause doubt in our cause, and 
          reinvest all resources into education, community, and lasting social impact. Every guild engagement 
          delivered becomes free education shared. Every challenge solved plants seeds of knowledge for 
          countless future craftspeople."
        </div>
        <p class="mission-description">
          This isn't just a business model. It's a social enterprise philosophy. By uniting education and 
          professional work within a guild structure, we create a self-sustaining ecosystem where craft revenue 
          directly funds free education, where mentorship is woven into every project, and where every member's 
          growth strengthens the whole. No ads, no tuition, no compromise, just purpose-driven craft.
        </p>
        <div class="impact-flow">
          <div class="impact-step">
            <span class="impact-step-number">1</span>
            <h3>Client projects</h3>
            <p>Websites and AI tools for clients, sustained by a monthly care fee.</p>
          </div>
          <div class="impact-step">
            <span class="impact-step-number">2</span>
            <h3>Free education</h3>
            <p>That revenue funds free learning paths and mentorship.</p>
          </div>
          <div class="impact-step">
            <span class="impact-step-number">3</span>
            <h3>Skilled craftspeople</h3>
            <p>Learners gain job-ready skills through real work, under senior review.</p>
          </div>
          <div class="impact-step">
            <span class="impact-step-number">4</span>
            <h3>Social impact</h3>
            <p>Skilled people create positive change in their communities.</p>
          </div>
        </div>
        <div class="commitment-stats">
          <div class="stat">
            <span class="stat-value">100%</span>
            <span class="stat-label">Net revenue reinvested</span>
          </div>
          <div class="stat">
            <span class="stat-value">0%</span>
            <span class="stat-label">Profit extraction</span>
          </div>
          <div class="stat">
            <span class="stat-value">0</span>
            <span class="stat-label">Ads or affiliate links</span>
          </div>
        </div>
        <p class="mission-funding">
          Client work is how the mission pays its way, and it's what makes it both sustainable and practical:
          client fees cover our running costs, and real projects keep what we teach grounded in real work. Right
          now it can't yet pay our contributors, so every donation really counts.
          <NuxtLink to="/help-the-mission">Here's how you can help.</NuxtLink>
        </p>
      </div>
    </section>

    <!-- Guide: why learners and clients can trust us -->
    <section class="guide">
      <div class="section-header">
        <h2>Why You Can Trust Us</h2>
        <p>
          Skill-Wanderer is led by Quan Nguyen, our founder and Guild Master. Here's what he brings, whether you're
          here to learn or to build.
        </p>
      </div>
      <div class="guide-grid">
        <div class="guide-card">
          <span class="guide-icon" aria-hidden="true">🤝</span>
          <h3>Started in business, not tech</h3>
          <p>Quan was an import-export manager at Toyota Tsusho Vietnam before he switched to tech, so he knows what it takes to start over, and he explains things in plain words.</p>
        </div>
        <div class="guide-card">
          <span class="guide-icon" aria-hidden="true">🛠️</span>
          <h3>Over a decade of building software</h3>
          <p>Developer, solution architect and project manager across startups and enterprises, once leading 16 developers on 4 projects at the same time.</p>
        </div>
        <div class="guide-card">
          <span class="guide-icon" aria-hidden="true">📚</span>
          <h3>Still learning, still teaching</h3>
          <p>He mentors learners and builds for clients side by side, so what he teaches comes from real work, and every project is built with today's tools.</p>
        </div>
        <div class="guide-card">
          <span class="guide-icon" aria-hidden="true">💬</span>
          <h3>Honest advice, never for sale</h3>
          <p>No affiliate links or paid promotions, so learners get unbiased guidance. Clients get the same honesty: "a trusted business adviser throughout the process," in the words of <NuxtLink to="/work-with-us/projects/matt-harr-speaker">Matt Harr</NuxtLink>.</p>
        </div>
      </div>
      <div class="guide-actions">
        <NuxtLink to="/learning-path" class="btn btn-primary">
          Start Learning for Free
          <span>→</span>
        </NuxtLink>
        <NuxtLink to="/contact" class="btn btn-secondary">
          Tell Us About Your Idea
        </NuxtLink>
      </div>
    </section>

    <!-- Open Platform Section -->
    <section class="open-platform">
      <div class="section-header">
        <h2>An Open Guild for All</h2>
        <p>Built on the foundations of open knowledge, open source, and community craft</p>
      </div>
      <div class="open-platform-content">
        <div class="open-platform-card">
          <span class="open-platform-icon">📖</span>
          <h3>Open Knowledge</h3>
          <p>
            We believe knowledge should be freely accessible to everyone. The guild is built as a community that
            <span class="highlight">serves craftspeople and is shaped by craftspeople</span>. Every piece of educational content
            we create is designed to be open, transparent, and community-driven, because learning thrives when barriers are removed.
          </p>
        </div>
        <div class="open-platform-card">
          <span class="open-platform-icon">🔓</span>
          <h3>Open Source at Heart</h3>
          <p>
            Open source isn't just a development model. It's a philosophy we live by. We embrace
            <span class="highlight">transparency, collaboration, and shared ownership</span> as core guild values.
            By building in the open, we invite the global community to learn from our journey, contribute ideas,
            and forge the future of the guild together.
          </p>
        </div>
        <div class="open-platform-card">
          <span class="open-platform-icon">🔧</span>
          <h3>Actively Forging</h3>
          <p>
            The guild is in <span class="highlight">active development</span> with an ambitious roadmap ahead.
            New learning paths in tech and beyond, guild tools, community features, and more are being forged every day. This is just the
            beginning. We're building something meaningful, one craft at a time, and we'd love for you to join the guild.
          </p>
        </div>
      </div>
      <div class="open-platform-banner">
        <p>
          🌱 <strong>The guild is growing!</strong> Skill-Wanderer is a living project that keeps growing, improving, and
          expanding every day. Stay tuned for new learning paths, guild engagements, and community initiatives.
        </p>
      </div>
    </section>

    <!-- Principles Section -->
    <section class="principles">
      <div class="section-header">
        <h2>Our 12 Principles</h2>
        <p>Twelve promises guide everything we do, for learners and clients alike</p>
      </div>
      <ol class="principle-chips">
        <li><NuxtLink to="/principles/accessible"><span>1</span>Accessible</NuxtLink></li>
        <li><NuxtLink to="/principles/integrity"><span>2</span>Integrity and Impartiality</NuxtLink></li>
        <li><NuxtLink to="/principles/individualized"><span>3</span>Individualized</NuxtLink></li>
        <li><NuxtLink to="/principles/engaging"><span>4</span>Engaging &amp; Rewarding</NuxtLink></li>
        <li><NuxtLink to="/principles/creativity"><span>5</span>Creativity Learning Through Failure</NuxtLink></li>
        <li><NuxtLink to="/principles/relevant"><span>6</span>Relevant &amp; Impactful</NuxtLink></li>
        <li><NuxtLink to="/principles/pathways"><span>7</span>Pathways for Guild Members</NuxtLink></li>
        <li><NuxtLink to="/principles/technology-partnership"><span>8</span>Guild Engagements Fueling Mission</NuxtLink></li>
        <li><NuxtLink to="/principles/respect-ip"><span>9</span>Respect IP</NuxtLink></li>
        <li><NuxtLink to="/principles/community"><span>10</span>Guild Community</NuxtLink></li>
        <li><NuxtLink to="/principles/social-enterprise"><span>11</span>Social Enterprise Model</NuxtLink></li>
        <li><NuxtLink to="/principles/mission-centric-reinvestment"><span>12</span>Mission-Centric Reinvestment</NuxtLink></li>
      </ol>
      <div class="principles-cta" style="animation-delay: 0.6s;">
        <NuxtLink to="/principles" class="btn btn-outline">
          Read All 12 Principles
          <span>→</span>
        </NuxtLink>
      </div>
    </section>    <!-- Team Section -->
    <section class="team">
      <div class="section-header">
        <h2>The Guild Master</h2>
      </div>
      <div class="founder-card">
        <img src="/skill-wanderer-avatar.jpg" alt="Quan Nguyen, founder of Skill-Wanderer" class="founder-avatar" />
        <h3 class="founder-name">Quan Nguyen</h3>
        <p class="founder-title">Founder & Guild Master · A One-Man Army in Web, AI, Mobile, DevOps, Solution Architecture & Project Management</p>
        <div class="founder-bio">
          <p>
            Hi, I'm Quan, living proof that the most unconventional paths often lead to the most valuable insights. 
            My journey began not in tech, but as an Import-Export Manager at Toyota Tsusho Vietnam, where I earned 
            the 1st prize MVP award in 2013. <span class="highlight">That experience taught me something crucial: 
            the ability to learn rapidly and adapt is more valuable than any single skill.</span>
          </p>
          <p>
            I pivoted to technology through sheer passion and determination, transitioning from international trade 
            to full-stack development. Through multiple startups, from HVCG to MABY to SiciX, I've worn every hat 
            imaginable: Frontend, Backend, DevOps, Solution Architecture, Technical PM, and Business Analysis. 
            At NGSC, I led 4 projects simultaneously with 16 developers, building teams from scratch.
          </p>
          <p>
            <span class="highlight">My "skill-wandering" approach isn't just about collecting titles. It's about 
            connecting dots across disciplines.</span> Every role taught me something valuable, every failure became 
            a lesson worth sharing. When I single-handedly built Skill-Wanderer on a self-hosted Kubernetes cluster 
            using an old laptop and Orange Pi, I wasn't just creating a platform. I was forging the first workshop 
            of what would become a guild: resourcefulness, continuous learning, and turning constraints into craft.
          </p>
          <p>
            <span class="highlight">Building Skill-Wanderer is itself an act of guild-building</span>. The platform 
            serves as the guild's workshop to explore cutting-edge technologies, from self-hosting Kubernetes on an 
            old laptop, to experimenting with microservices architecture, to implementing the latest frameworks. Every 
            technical challenge I solve, every new tool I master while building this guild, becomes knowledge I can 
            share authentically. I'm not just teaching technology; I'm actively living it, breaking it, fixing it, and 
            forging it alongside guild members.
          </p>
          <p>
            For me, learning is entertainment. Growing knowledge is my greatest reward. But I've discovered something 
            even more powerful: <span class="highlight">teaching is the ultimate path to mastery</span>. Every time I 
            prepare content for the guild, my own understanding deepens. Every question from a guild member pushes me 
            to explore new angles. This guild embodies my belief that by giving knowledge freely and building together, 
            we create a cycle of positive energy that elevates everyone.
          </p>
          <p>
            Skill-Wanderer isn't just a platform. It's a guild working toward social enterprise status. From that first
            MVP award at Toyota Tsusho to every line of code I've written, I've been blessed with opportunities to 
            learn and grow. Now, through the guild model, it's my turn to create those opportunities for others, where 
            every apprentice can become a master, every project funds free education, and every act of craft strengthens 
            the community.
          </p>
        </div>
      </div>
    </section>

    <!-- CTA Section -->
    <section class="cta">
      <h2>Where Would You Like to Start?</h2>
      <p>Come and learn with us, or bring us an idea and help fund the mission</p>
      <div class="cta-buttons">
        <NuxtLink to="/learning-path" class="btn btn-primary">
          Start Learning for Free
          <span>→</span>
        </NuxtLink>
        <NuxtLink to="/contact" class="btn btn-secondary">
          Start a Project
        </NuxtLink>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
// Icons replaced with emojis
import { onMounted } from 'vue'

// SEO and meta management
useSEO({
  title: 'About Skill-Wanderer | The Story Behind the Mission',
  description: 'Meet Quan Nguyen and the Skill-Wanderer guild: free, practical education for self-learners, funded by our tech partner work for small businesses.',
  keywords: ['about skill-wanderer', 'quan nguyen', 'free education mission', 'learning guild', 'free mentorship', 'tech partner for small business', 'skill wanderer story'],
  type: 'article',
  structuredData: [
    createArticleSchema(
      'About Skill-Wanderer | The Story Behind the Mission',
      'Meet Quan Nguyen and the Skill-Wanderer guild: free, practical education for self-learners, funded by our tech partner work for small businesses.',
      'https://skill-wanderer.com/about'
    ),
    createBreadcrumbSchema([
      { name: 'Home', url: 'https://skill-wanderer.com/' },
      { name: 'About', url: 'https://skill-wanderer.com/about' }
    ])
  ]
})

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

  document.querySelectorAll('.story-section').forEach(item => {
    observer.observe(item)
  })

  // Cleanup
  return () => {
    window.removeEventListener('scroll', handleScroll)
    observer.disconnect()
  }
})
</script>

<style scoped>
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
  padding: 140px 20px 80px;
  text-align: center;
  background: radial-gradient(circle at 50% 50%, rgba(255, 107, 53, 0.1) 0%, transparent 50%);
}

.hero h1 {
  font-size: clamp(2.5rem, 6vw, 4rem);
  font-weight: 800;
  margin-bottom: 20px;
  background: linear-gradient(135deg, var(--primary-orange), var(--accent-yellow));
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  animation: fadeInUp 0.8s ease-out;
}

.hero p {
  font-size: 1.3rem;
  max-width: 600px;
  margin: 0 auto;
  opacity: 0.9;
  animation: fadeInUp 0.8s ease-out 0.2s both;
}

/* Story Section */
.story {
  padding: 80px 20px;
  background: var(--darker-bg);
}

.story-content {
  max-width: 800px;
  margin: 0 auto;
}

.story-section {
  margin-bottom: 60px;
  opacity: 0;
  animation: fadeInUp 0.6s ease-out forwards;
}

.story-section h2 {
  font-size: 2rem;
  color: var(--primary-orange);
  margin-bottom: 20px;
  display: flex;
  align-items: center;
  gap: 15px;
}

.section-icon {
  font-size: 1.5rem;
}

.story-image {
  margin-bottom: 28px;
}

.story-section p {
  font-size: 1.1rem;
  line-height: 1.8;
  opacity: 0.9;
  margin-bottom: 20px;
}

.highlight {
  color: var(--primary-orange);
  font-weight: 600;
}

/* Philosophy Section */
.philosophy {
  padding: 80px 20px;
  background: linear-gradient(135deg, rgba(255, 107, 53, 0.05) 0%, transparent 50%);
}

.section-header {
  text-align: center;
  max-width: 800px;
  margin: 0 auto 60px;
}

.section-header h2 {
  font-size: 2.5rem;
  color: var(--primary-orange);
  margin-bottom: 20px;
}

.section-header p {
  font-size: 1.1rem;
  opacity: 0.9;
}

.philosophy-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 40px;
  max-width: 1200px;
  margin: 60px auto 0;
}

@media (min-width: 1024px) {
  .philosophy-grid {
    grid-template-columns: repeat(2, 1fr);
    max-width: 900px; /* Adjust max-width for a 2x2 layout if needed */
  }
}

.philosophy-card {
  background: var(--card-bg);
  border: 1px solid rgba(255, 107, 53, 0.2);
  border-radius: 20px;
  padding: 40px;
  text-align: center;
  transition: all 0.3s ease;
}

.philosophy-card:hover {
  transform: translateY(-5px);
  background: var(--card-hover);
}

.philosophy-icon {
  font-size: 3rem;
  margin-bottom: 20px;
  display: block;
}

.philosophy-card h3 {
  color: var(--primary-orange);
  margin-bottom: 15px;
  font-size: 1.4rem;
}

/* Mission Section */
.mission {
  padding: 80px 20px;
  background: var(--darker-bg);
}

.mission-content {
  max-width: 900px;
  margin: 0 auto;
  text-align: center;
}

.mission-content h2 {
  font-size: 2.5rem;
  color: var(--primary-orange);
  margin-bottom: 20px;
}

.mission-statement {
  font-size: 1.8rem;
  font-style: italic;
  color: var(--primary-orange);
  margin: 40px 0;
  padding: 40px;
  border-left: 4px solid var(--primary-orange);
  text-align: left;
  background: rgba(255, 107, 53, 0.05);
  border-radius: 10px;
}

.mission-description {
  font-size: 1.1rem;
  line-height: 1.8;
  opacity: 0.9;
}

/* Open Platform Section */
.open-platform {
  padding: 80px 20px;
  background: linear-gradient(180deg, rgba(255, 107, 53, 0.03) 0%, transparent 100%);
}

.open-platform-content {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 30px;
  max-width: 1200px;
  margin: 0 auto 40px;
}

.open-platform-card {
  background: var(--card-bg);
  border-radius: 15px;
  padding: 40px 30px;
  border: 1px solid rgba(255, 107, 53, 0.1);
  transition: all 0.3s ease;
}

.open-platform-card:hover {
  background: var(--card-hover);
  border-color: rgba(255, 107, 53, 0.3);
  transform: translateY(-5px);
}

.open-platform-icon {
  font-size: 2.5rem;
  display: block;
  margin-bottom: 20px;
}

.open-platform-card h3 {
  font-size: 1.4rem;
  color: var(--primary-orange);
  margin-bottom: 15px;
}

.open-platform-card p {
  font-size: 1.05rem;
  line-height: 1.8;
  opacity: 0.9;
}

.open-platform-banner {
  max-width: 900px;
  margin: 0 auto;
  padding: 25px 35px;
  background: rgba(255, 107, 53, 0.08);
  border: 1px dashed rgba(255, 107, 53, 0.4);
  border-radius: 12px;
  text-align: center;
}

.open-platform-banner p {
  font-size: 1.1rem;
  line-height: 1.7;
  opacity: 0.95;
}

/* Principles Section */
.principles {
  padding: 80px 20px;
  background: var(--dark-bg);
}

.principle-chips {
  list-style: none;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 12px;
  max-width: 1000px;
  margin: 0 auto;
}

.principle-chips a {
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 14px 16px;
  background: var(--card-bg);
  border: 1px solid rgba(255, 107, 53, 0.12);
  border-radius: 12px;
  color: var(--light-text);
  text-decoration: none;
  font-weight: 600;
  transition: all 0.3s ease;
}

.principle-chips a:hover {
  border-color: rgba(255, 107, 53, 0.4);
  color: var(--primary-orange);
  transform: translateY(-2px);
}

.principle-chips span {
  flex-shrink: 0;
  width: 30px;
  height: 30px;
  border-radius: 50%;
  background: linear-gradient(135deg, var(--primary-orange), var(--deep-orange));
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 0.85rem;
}

/* Guide Section */
.guide {
  padding: 80px 20px;
  background: var(--dark-bg);
}

.guide-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
  gap: 24px;
  max-width: 1100px;
  margin: 0 auto;
}

.guide-card {
  background: var(--card-bg);
  border: 1px solid rgba(255, 107, 53, 0.15);
  border-radius: 18px;
  padding: 28px 24px;
}

.guide-icon {
  font-size: 2rem;
  display: block;
  margin-bottom: 12px;
}

.guide-card h3 {
  color: white;
  font-size: 1.15rem;
  margin-bottom: 10px;
}

.guide-card p {
  opacity: 0.85;
  line-height: 1.7;
  font-size: 0.97rem;
}

.guide-card a {
  color: var(--primary-orange);
  font-weight: 600;
  text-decoration: none;
}

.guide-card a:hover {
  text-decoration: underline;
}

.guide-actions,
.cta-buttons {
  display: flex;
  gap: 16px;
  justify-content: center;
  flex-wrap: wrap;
}

.guide-actions {
  margin-top: 40px;
}

/* Mission impact model */
.mission {
  scroll-margin-top: 90px;
}

.impact-flow {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 16px;
  margin: 48px 0 36px;
  text-align: left;
}

.impact-step {
  background: var(--card-bg);
  border: 1px solid rgba(255, 107, 53, 0.15);
  border-radius: 16px;
  padding: 22px 20px;
}

.impact-step-number {
  width: 32px;
  height: 32px;
  border-radius: 50%;
  background: linear-gradient(135deg, var(--primary-orange), var(--deep-orange));
  color: white;
  font-weight: 700;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 12px;
}

.impact-step h3 {
  color: white;
  font-size: 1.05rem;
  margin-bottom: 8px;
}

.impact-step p {
  opacity: 0.8;
  font-size: 0.92rem;
  line-height: 1.6;
}

.commitment-stats {
  display: flex;
  justify-content: center;
  gap: 48px;
  flex-wrap: wrap;
  margin-bottom: 28px;
}

.stat {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.stat-value {
  font-size: 2.4rem;
  font-weight: 800;
  color: var(--primary-orange);
  line-height: 1.1;
}

.stat-label {
  font-size: 0.9rem;
  opacity: 0.75;
  margin-top: 6px;
}

.mission-funding {
  font-size: 1.05rem;
  line-height: 1.8;
  opacity: 0.85;
  max-width: 720px;
  margin: 0 auto;
}

/* Team Section */
.team {
  padding: 80px 20px;
  background: var(--darker-bg);
}

.founder-card {
  max-width: 800px;
  margin: 40px auto;
  background: var(--card-bg);
  border-radius: 20px;
  padding: 60px;
  text-align: center;
  border: 1px solid rgba(255, 107, 53, 0.2);
}

.founder-avatar {
  width: 150px;
  height: 150px;
  border-radius: 50%;
  margin: 0 auto 30px;
  display: block;
  object-fit: cover;
  border: 4px solid var(--primary-orange);
}

.founder-name {
  font-size: 2rem;
  color: var(--primary-orange);
  margin-bottom: 10px;
}

.founder-title {
  font-size: 1.2rem;
  opacity: 0.8;
  margin-bottom: 30px;
}

.founder-bio {
  line-height: 1.8;
  opacity: 0.9;
  text-align: left;
}

.founder-bio p {
  margin-bottom: 20px;
}

/* CTA Section */
.cta {
  padding: 100px 20px;
  background: linear-gradient(135deg, rgba(255, 107, 53, 0.1) 0%, rgba(255, 217, 61, 0.05) 100%);
  text-align: center;
}

.cta h2 {
  font-size: 2.5rem;
  color: var(--primary-orange);
  margin-bottom: 20px;
}

.cta p {
  font-size: 1.2rem;
  margin-bottom: 40px;
  opacity: 0.9;
}

.btn {
  padding: 15px 30px;
  border: 2px solid transparent;
  border-radius: 50px;
  font-size: 1.1rem;
  font-weight: 600;
  text-decoration: none;
  cursor: pointer;
  transition: all 0.3s ease;
  display: inline-flex;
  align-items: center;
  gap: 10px;
  min-height: 50px;
}

.btn-primary {
  background: var(--primary-orange);
  color: white;
  box-shadow: 0 4px 20px rgba(255, 107, 53, 0.3);
}

.btn-primary:hover {
  transform: translateY(-2px);
  box-shadow: 0 6px 30px rgba(255, 107, 53, 0.4);
  background: var(--deep-orange);
}

.btn-secondary {
  background: transparent;
  color: var(--primary-orange);
  border-color: var(--primary-orange);
  box-shadow: none;
}

.btn-secondary:hover {
  transform: translateY(-2px);
  background: rgba(255, 107, 53, 0.1);
  border-color: var(--deep-orange);
  color: var(--deep-orange);
  box-shadow: 0 4px 20px rgba(255, 107, 53, 0.2);
}

.btn-outline {
  background: transparent;
  color: var(--primary-orange);
  border: 2px solid rgba(255, 107, 53, 0.3);
  box-shadow: none;
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
  .philosophy-grid {
    grid-template-columns: 1fr;
  }

  .impact-flow {
    grid-template-columns: 1fr;
  }

  .founder-card {
    padding: 40px 20px;
  }

  .mission-statement {
    font-size: 1.4rem;
    padding: 20px;
  }

  .btn {
    width: 100%;
    max-width: 300px;
    justify-content: center;
  }
}
</style>
