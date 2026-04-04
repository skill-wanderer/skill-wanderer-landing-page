<template>
  <div>
    <!-- Hero Section -->
    <section class="hero">
      <h1>The Story of the Guild</h1>
      <p>How a tech guild was forged from passion, principles, and a social enterprise vision</p>
    </section>

    <!-- Story Section -->
    <section class="story">
      <div class="story-content">
        <div class="story-section" style="animation-delay: 0.1s;">
          <h2><span class="section-icon"><Sunrise :size="24" :stroke-width="2" /></span> The Beginning</h2>
          <p>
            My story didn't start in tech—it began in international trade at Toyota Tsusho Vietnam, where I learned 
            <span class="highlight">the most fundamental skill of all: how to learn rapidly and adapt</span>. When I 
            made the leap from Import-Export Manager to developer, many thought I was crazy. But that unconventional 
            journey taught me something profound about learning and growth.
          </p>
          <p>
            Through four startups, leading 50+ members, juggling multiple projects simultaneously, and yes, failing 
            spectacularly at times, I discovered that <span class="highlight">the gap between what we learn and what 
            we need to know keeps growing wider</span>. Every role I've wandered through—from Frontend to DevOps, 
            from Business Analyst to Solution Architect—added another piece to the puzzle.
          </p>
          <p>
            When I built the entire Skill-Wanderer platform on a self-hosted Kubernetes cluster using just an old 
            laptop and Orange Pi, I realized this resourcefulness, this ability to create from constraints, these 
            lessons from the wandering path—they were too valuable to keep to myself. I needed to build a guild.
          </p>
        </div>

        <div class="story-section" style="animation-delay: 0.3s;">
          <h2><span class="section-icon"><Lightbulb :size="24" :stroke-width="2" /></span> The Realization</h2>
          <p>
            Having transitioned from business to tech myself, I understood firsthand how daunting the journey can be. 
            Traditional education often fails to capture the messy, non-linear reality of learning technology. 
            <span class="highlight">We're taught to fear failure, when in reality, failure is where the deepest learning happens</span>. 
            What learners truly need is honest, unbiased guidance from someone who remembers the struggle—and a community 
            that works alongside them, not just lectures at them.
          </p>
          <p>
            I looked at how the great craft guilds worked throughout history—masters teaching apprentices through real work, 
            not textbooks. Journeymen honing their skills by contributing to real projects. A cycle where work and learning 
            were inseparable, and where every member's growth strengthened the whole guild.
          </p>
          <p>
            I realized that <span class="highlight">Skill-Wanderer could be a modern tech guild</span>—a 
            social enterprise in the making where learning happens through building, where revenue from real work funds free education, 
            and where the guild grows as its members grow. Not a traditional course platform, but a living, working community 
            of craftspeople at every level.
          </p>
          <p>
            I envisioned a guild that would be different—one that celebrates the wandering journey of learning, 
            embraces failures as stepping stones, and operates with complete transparency and integrity. 
            No ads, no affiliate commissions, no hidden agenda. Working toward becoming a social enterprise built on craft, 
            community, and purpose.
          </p>
        </div>

        <div class="story-section" style="animation-delay: 0.5s;">
          <h2><span class="section-icon"><Rocket :size="24" :stroke-width="2" /></span> The Vision</h2>
          <p>
            Skill-Wanderer is built on a profound truth: <span class="highlight">teaching is the best way to learn, 
            and building is the best way to teach</span>. The guild model unites education and professional work into 
            a single self-sustaining cycle. Masters mentor journeymen, journeymen guide apprentices, and together the 
            guild takes on real projects that fund free education for all.
          </p>
          <p>
            With a social enterprise mindset, we deeply believe that <span class="highlight">what we give to the world 
            comes back to us manifold</span>. By operating as a tech guild—where every engagement delivers value to 
            clients while growing our community—we create a virtuous cycle. Today's apprentices become tomorrow's masters. 
            Every project shipped funds the next wave of free education.
          </p>
          <p>
            The beauty of the guild is that it's a living, breathing example of continuous learning. As we build 
            new features, take on client projects, or tackle complex architectural challenges, 
            <span class="highlight">every technical decision becomes a teachable moment</span>. When I chose Astro 
            over WordPress, when I implemented microservices, when I set up that self-hosted K8s cluster—these weren't just 
            technical choices, they were lessons forged in the guild's workshop.
          </p>
          <p>
            This symbiotic relationship—where real work drives learning, and learning enriches work—is what makes 
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
          <span class="philosophy-icon"><Landmark :size="48" :stroke-width="1.5" /></span>
          <h3>Craft Through Practice</h3>
          <p>Like the guilds of old, we believe mastery comes through doing. Every real project is a lesson, every engagement is a classroom. Teaching and building are one and the same.</p>
        </div>
        <div class="philosophy-card">
          <span class="philosophy-icon"><Sprout :size="48" :stroke-width="1.5" /></span>
          <h3>Growth Through Failure</h3>
          <p>We celebrate mistakes as learning opportunities. Every bug fixed, every error resolved is a step towards mastery within the guild.</p>
        </div>
        <div class="philosophy-card">
          <span class="philosophy-icon"><RefreshCw :size="48" :stroke-width="1.5" /></span>
          <h3>Work Funds Education</h3>
          <p>All revenue from guild engagements flows back into free education, mentorship, and community infrastructure. No profit extraction, ever.</p>
        </div>
        <div class="philosophy-card">
          <span class="philosophy-icon"><Handshake :size="48" :stroke-width="1.5" /></span>
          <h3>Guild Over Competition</h3>
          <p>Learning is not a solo journey. The guild fosters collaboration, peer mentorship, and collective growth—apprentices, journeymen, and masters building together.</p>
        </div>
      </div>
    </section>

    <!-- Mission Section -->
    <section class="mission">
      <div class="mission-content">
        <h2>Our Mission</h2>
        <div class="mission-statement">
          "Our mission is to make quality tech education free and accessible 
          through the guild model—where real-world work funds learning, and learning feeds back into work. 
          We operate with complete integrity, forgoing any benefit that could cause doubt in our cause, and 
          reinvest all resources into education, community, and lasting social impact. Every guild engagement 
          delivered becomes free education shared. Every challenge solved plants seeds of knowledge for 
          countless future craftspeople."
        </div>
        <p class="mission-description">
          This isn't just a business model—it's a social enterprise philosophy. By uniting education and 
          professional work within a guild structure, we create a self-sustaining ecosystem where craft revenue 
          directly funds free education, where mentorship is woven into every project, and where every member's 
          growth strengthens the whole. No ads, no tuition, no compromise—just purpose-driven craft.
        </p>
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
          <span class="open-platform-icon"><BookOpen :size="48" :stroke-width="1.5" /></span>
          <h3>Open Knowledge</h3>
          <p>
            We believe knowledge should be freely accessible to everyone. The guild is built as a community that
            <span class="highlight">serves craftspeople and is shaped by craftspeople</span>. Every piece of educational content
            we create is designed to be open, transparent, and community-driven—because learning thrives when barriers are removed.
          </p>
        </div>
        <div class="open-platform-card">
          <span class="open-platform-icon"><Unlock :size="48" :stroke-width="1.5" /></span>
          <h3>Open Source at Heart</h3>
          <p>
            Open source isn't just a development model—it's a philosophy we live by. We embrace
            <span class="highlight">transparency, collaboration, and shared ownership</span> as core guild values.
            By building in the open, we invite the global community to learn from our journey, contribute ideas,
            and forge the future of the guild together.
          </p>
        </div>
        <div class="open-platform-card">
          <span class="open-platform-icon"><Wrench :size="48" :stroke-width="1.5" /></span>
          <h3>Actively Forging</h3>
          <p>
            The guild is in <span class="highlight">active development</span> with an ambitious roadmap ahead.
            New learning paths, guild tools, community features, and more are being forged every day. This is just the
            beginning—we're building something meaningful, one craft at a time, and we'd love for you to join the guild.
          </p>
        </div>
      </div>
      <div class="open-platform-banner">
        <p>
          🚧 <strong>The guild is growing!</strong> Skill-Wanderer is a living project—growing, improving, and
          expanding every day. Stay tuned for new learning paths, guild engagements, and community initiatives.
        </p>
      </div>
    </section>

    <!-- Principles Section -->
    <section class="principles">
      <div class="section-header">
        <h2>Guild Principles</h2>
        <p>The non-negotiable standards our guild holds itself to</p>
      </div>
      <div class="principles-list">
        <div class="principle-item" style="animation-delay: 0.1s;">
          <span class="principle-number">1</span>
          <div class="principle-content">
            <h3>Accessible Education</h3>
            <p>Free access to all course content created or curated by us, ensuring quality education reaches everyone regardless of their financial situation.</p>
          </div>
        </div>
        <div class="principle-item" style="animation-delay: 0.2s;">
          <span class="principle-number">2</span>
          <div class="principle-content">
            <h3>Complete Integrity</h3>
            <p>No paid advertisements, no affiliate marketing, no commissions from third-party resources. Our recommendations are purely for learner benefit.</p>
          </div>
        </div>
        <div class="principle-item" style="animation-delay: 0.3s;">
          <span class="principle-number">3</span>
          <div class="principle-content">
            <h3>Mission-Centric Reinvestment</h3>
            <p>All net revenue is reinvested into the guild, community, and global educational impact. No dividends, just continuous improvement.</p>
          </div>
        </div>
        <div class="principle-item" style="animation-delay: 0.4s;">
          <span class="principle-number">4</span>
          <div class="principle-content">
            <h3>Craft Through Practice</h3>
            <p>We encourage creativity, experimentation, and learning through real guild work. The craft matters as much as the result.</p>
          </div>
        </div>
        <div class="principle-item" style="animation-delay: 0.5s;">
          <span class="principle-number">5</span>
          <div class="principle-content">
            <h3>Guild Pathways</h3>
            <p>Long-term commitment to creating pathways for guild members to grow from apprentice to journeyman to master, or launch their own ventures.</p>
          </div>
        </div>
        <div class="principles-cta" style="animation-delay: 0.6s;">
          <NuxtLink to="/principles" class="btn btn-outline">
            View All 12 Principles
            <span>→</span>
          </NuxtLink>
        </div>
      </div>
    </section>    <!-- Team Section -->
    <section class="team">
      <div class="section-header">
        <h2>The Guild Master</h2>
      </div>
      <div class="founder-card">
        <img src="/skill-wanderer-avatar.jpg" alt="Quan Nguyen - Founder" class="founder-avatar" />
        <h3 class="founder-name">Quan Nguyen</h3>
        <p class="founder-title">Founder & Guild Master — A One-Man Army in Web, AI, Mobile, DevOps, Solution Architecture & Project Management</p>
        <div class="founder-bio">
          <p>
            Hi, I'm Quan—living proof that the most unconventional paths often lead to the most valuable insights. 
            My journey began not in tech, but as an Import-Export Manager at Toyota Tsusho Vietnam, where I earned 
            the 1st prize MVP award in 2013. <span class="highlight">That experience taught me something crucial: 
            the ability to learn rapidly and adapt is more valuable than any single skill.</span>
          </p>
          <p>
            I pivoted to technology through sheer passion and determination, transitioning from international trade 
            to full-stack development. Through multiple startups—from HVCG to MABY to SiciX—I've worn every hat 
            imaginable: Frontend, Backend, DevOps, Solution Architecture, Technical PM, and Business Analysis. 
            At NGSC, I led 4 projects simultaneously with 16 developers, building teams from scratch.
          </p>
          <p>
            <span class="highlight">My "skill-wandering" approach isn't just about collecting titles—it's about 
            connecting dots across disciplines.</span> Every role taught me something valuable, every failure became 
            a lesson worth sharing. When I single-handedly built Skill-Wanderer on a self-hosted Kubernetes cluster 
            using an old laptop and Orange Pi, I wasn't just creating a platform—I was forging the first workshop 
            of what would become a guild: resourcefulness, continuous learning, and turning constraints into craft.
          </p>
          <p>
            <span class="highlight">Building Skill-Wanderer is itself an act of guild-building</span>. The platform 
            serves as the guild's workshop to explore cutting-edge technologies—from self-hosting Kubernetes on an 
            old laptop, to experimenting with microservices architecture, to implementing the latest frameworks. Every 
            technical challenge I solve, every new tool I master while building this guild, becomes knowledge I can 
            share authentically. I'm not just teaching technology; I'm actively living it, breaking it, fixing it, and 
            forging it alongside guild members.
          </p>
          <p>
            For me, learning is entertainment. Growing knowledge is my greatest reward. But I've discovered something 
            even more powerful: <span class="highlight">teaching is the ultimate path to mastery</span>. Every time I 
            prepare content for the guild, my own understanding deepens. Every question from a guild member pushes me 
            to explore new angles. This guild embodies my belief—that by giving knowledge freely and building together, 
            we create a cycle of positive energy that elevates everyone.
          </p>
          <p>
            Skill-Wanderer isn't just a platform—it's a tech guild working toward social enterprise status. From that first 
            MVP award at Toyota Tsusho to every line of code I've written, I've been blessed with opportunities to 
            learn and grow. Now, through the guild model, it's my turn to create those opportunities for others—where 
            every apprentice can become a master, every project funds free education, and every act of craft strengthens 
            the community.
          </p>
        </div>
      </div>
    </section>

    <!-- CTA Section -->
    <section class="cta">
      <h2>Join the Guild</h2>
      <p>Be part of a tech guild that values craft, community, and purpose</p>
      <NuxtLink to="/" class="btn btn-primary">
        Explore Skill-Wanderer
        <span>→</span>
      </NuxtLink>
    </section>
  </div>
</template>

<script setup lang="ts">
import { BookOpen, Handshake, Landmark, Lightbulb, RefreshCw, Rocket, Sprout, Sunrise, Unlock, Wrench } from 'lucide-vue-next'
import { onMounted } from 'vue'

// SEO and meta management
useSEO({
  title: 'About Skill-Wanderer | The Story Behind the Mission',
  description: 'Learn about the journey behind Skill-Wanderer, our philosophy of teaching to master, and our mission to democratize quality tech education with integrity.',
  keywords: ['about skill-wanderer', 'quan nguyen', 'tech education mission', 'learning philosophy', 'skill wanderer story'],
  type: 'article',
  structuredData: [
    createArticleSchema(
      'About Skill-Wanderer | The Story Behind the Mission',
      'Learn about the journey behind Skill-Wanderer, our philosophy of teaching to master, and our mission to democratize quality tech education with integrity.',
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

  document.querySelectorAll('.story-section, .principle-item').forEach(item => {
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

.principles-list {
  max-width: 900px;
  margin: 40px auto 0;
}

.principle-item {
  background: var(--card-bg);
  border-radius: 15px;
  padding: 30px;
  margin-bottom: 20px;
  border: 1px solid rgba(255, 107, 53, 0.1);
  transition: all 0.3s ease;
  opacity: 0;
  animation: fadeInUp 0.6s ease-out forwards;
}

.principle-item:hover {
  border-color: rgba(255, 107, 53, 0.3);
  transform: translateX(10px);
}

.principle-number {
  width: 40px;
  height: 40px;
  background: linear-gradient(135deg, var(--primary-orange), var(--deep-orange));
  border-radius: 50%;
  color: white;
  font-weight: bold;
  line-height: 40px;
  text-align: center;
  margin-right: 20px;
  float: left;
}

.principle-content h3 {
  color: white;
  margin-bottom: 10px;
}

.principle-content p {
  opacity: 0.8;
  margin-left: 60px;
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

  .principle-content p {
    margin-left: 0;
    margin-top: 10px;
  }

  .founder-card {
    padding: 40px 20px;
  }

  .nav-links {
    display: none;
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
