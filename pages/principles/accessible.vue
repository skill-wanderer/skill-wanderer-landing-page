<template>
  <div>
    <!-- Navigation -->
    <TheNavigation />

    <!-- Hero Section -->
    <section class="hero">
      <div class="breadcrumb">
        <NuxtLink to="/">Home</NuxtLink>
        <span>→</span>
        <NuxtLink to="/principles">Principles</NuxtLink>
        <span>→</span>
        <span>Accessible</span>
      </div>
      
      <div class="principle-header">
        <div class="principle-number-large">1</div>
        <div class="principle-title-section">
          <h1>Accessible</h1>
          <p class="principle-tagline-large">Free Knowledge for All</p>
        </div>
      </div>
    </section>

    <!-- Story Section -->
    <section class="story-section">
      <div class="story-content">
        <p class="story-intro">
          I call our first principle <strong>Accessible</strong>, and it comes from a very real and personal place.
        </p>

        <div class="story-chapter" style="animation-delay: 0.1s;">
          <h2><span class="chapter-icon">👥</span> The Leadership Challenge</h2>
          
          <p class="story-text">
            Over the years, I've had the privilege of leading many developers—more than 20 in total, and at one point, 
            I was managing a team of 16 simultaneously. I quickly learned that training a team with diverse skill levels 
            is a major challenge. It's inefficient to teach everyone 1-on-1, and putting junior and mid level developers 
            in the same class often helps no one. The best approach was always to point my team toward high-quality 
            external learning materials so they could learn at their own pace.
          </p>

          <p class="story-text">
            That's where I saw the problem.
          </p>
        </div>

        <div class="story-chapter" style="animation-delay: 0.3s;">
          <h2><span class="chapter-icon">💔</span> The Barrier I Witnessed</h2>
          
          <p class="story-text">
            The best courses, the ones that truly make a difference, often come with a cost—typically around $25-$50 USD 
            per month. While that might not seem like much, it was a huge barrier for my junior developers. For many, 
            that monthly fee was <strong>more than 10% of their entire salary</strong>. I watched as talented, driven 
            developers struggled to afford the very resources they needed to grow. They didn't know which courses were 
            worth the investment or simply lacked the funds to find out.
          </p>

          <div class="personal-story">
            I remember one junior developer on my team—brilliant mind, incredible work ethic. He would stay late, 
            debugging issues, always asking smart questions. But when I recommended a specific course that would 
            accelerate his learning, he quietly said, "Maybe next month." That's when I realized: he was choosing 
            between learning resources and basic necessities. That moment haunts me still.
          </div>

          <p class="story-text">
            And I can tell you from experience: <strong>nothing is more dangerous than being left behind in the tech industry.</strong>
          </p>
        </div>

        <div class="story-chapter" style="animation-delay: 0.5s;">
          <h2><span class="chapter-icon">☯️</span> The Karma of Knowledge</h2>
          
          <p class="story-text">
            I've been fortunate in my own career to have the resources to invest in my education. But I saw so many 
            others who weren't as lucky. I believe in a kind of karma—that good fortune should be shared. This is why 
            our organization is built on the promise of free access. We are committed to providing and curating 
            high-quality core educational content that is <strong>completely free</strong>, removing that initial 
            financial barrier for those who need it most.
          </p>

          <p class="story-text">
            At the same time, I know that many people who will come to our platform <em>can</em> afford to pay for 
            premium resources but simply don't know where to start. That's why our <strong>Accessible</strong> principle 
            also includes guiding learners to valuable, optional paid third-party resources. We serve both the person 
            who needs a free path to get started and the person who needs expert guidance on where to best invest in 
            their education.
          </p>

          <p class="story-text">
            Ultimately, this principle is about ensuring that no one gets left behind simply because they can't afford 
            the first step.
          </p>
        </div>
      </div>
    </section>

    <!-- Stats Section -->
    <section class="stats-section">
      <div class="stats-container">
        <h2 class="stats-title">The Reality We're Changing</h2>
        <div class="stats-grid">
          <div class="stat-card" style="animation-delay: 0.1s;">
            <div class="stat-number">20+</div>
            <div class="stat-label">Developers Led</div>
            <div class="stat-description">Each one taught me about the barriers they face</div>
          </div>
          <div class="stat-card" style="animation-delay: 0.2s;">
            <div class="stat-number">$25-50</div>
            <div class="stat-label">Monthly Course Cost</div>
            <div class="stat-description">The price of progress for many learners</div>
          </div>
          <div class="stat-card" style="animation-delay: 0.3s;">
            <div class="stat-number">>10%</div>
            <div class="stat-label">Of Junior Dev Salary</div>
            <div class="stat-description">What quality education often costs them</div>
          </div>
          <div class="stat-card" style="animation-delay: 0.4s;">
            <div class="stat-number">100%</div>
            <div class="stat-label">Free Core Content</div>
            <div class="stat-description">Our commitment to removing barriers</div>
          </div>
        </div>
      </div>
    </section>

    <!-- Impact Section -->
    <section class="impact-section">
      <div class="impact-header">
        <h2 class="impact-title">What Accessible Means in Practice</h2>
        <p class="impact-subtitle">Breaking down every barrier between learners and knowledge</p>
      </div>
      
      <div class="impact-grid">
        <div class="impact-card" style="animation-delay: 0.1s;">
          <span class="impact-icon">🎓</span>
          <h3>For the Struggling Junior</h3>
          <p>Complete learning paths without spending a penny. No credit cards, no trials, no hidden costs. Just pure learning.</p>
        </div>
        
        <div class="impact-card" style="animation-delay: 0.2s;">
          <span class="impact-icon">🧭</span>
          <h3>For the Confused Mid Level</h3>
          <p>Expert curation of both free and paid resources. Know exactly what's worth your investment before you spend.</p>
        </div>
          <div class="impact-card" style="animation-delay: 0.3s;">
          <span class="impact-icon">🌍</span>
          <h3>For the Global<br>Learner</h3>
          <p>No geographic restrictions. Whether you're in Silicon Valley or rural Vietnam, quality education is yours.</p>
        </div>
      </div>
    </section>

    <!-- Practice Section -->
    <section class="practice-section">
      <div class="practice-content">
        <div class="practice-header">
          <h2 class="practice-title">How We Live This Principle</h2>
          <p class="practice-subtitle">Concrete actions that make accessibility real</p>
        </div>

        <div class="practice-example">
          <h3>Free Core Content - Always</h3>
          <ul>
            <li>Every course we create or curate is completely free</li>
            <li>No paywalls, no "premium only" sections for essential knowledge</li>
            <li>Full access from day one - no email gates or forced registrations</li>
            <li>Content stays free forever - we never move it behind a paywall</li>
          </ul>
        </div>

        <div class="practice-example">
          <h3>Transparent Resource Guidance</h3>
          <ul>
            <li>Clear marking of which third-party resources are free vs paid</li>
            <li>Honest reviews without affiliate bias - we receive no commissions</li>
            <li>Multiple options provided - there's always a free alternative</li>
            <li>Guidance on when paid resources are truly worth the investment</li>
          </ul>
        </div>

        <div class="practice-example">
          <h3>Removing Hidden Barriers</h3>
          <ul>
            <li>Multiple learning formats to suit different styles and bandwidths</li>
            <li>Community support that's also free - no paid Discord channels</li>
            <li>Clear learning paths so you never feel lost or overwhelmed</li>
          </ul>
        </div>
      </div>
    </section>

    <!-- Quote Section -->
    <section class="quote-section">
      <div class="quote-content">
        <p class="principle-quote">
          "No one gets left behind simply because they can't afford the first step. 
          That junior developer who chooses between courses and necessities? 
          They deserve the same chance to grow as anyone else."
        </p>
        <p class="quote-author">- Quan Nguyen, Founder of Skill-Wanderer</p>
      </div>
    </section>

    <!-- Navigation Section -->
    <section class="principle-nav">
      <div class="nav-content">
        <NuxtLink to="/principles" class="nav-button all">
          <span class="nav-arrow">↑</span>
          <div>
            <div class="nav-title">All Principles</div>
          </div>
        </NuxtLink>
        
        <NuxtLink to="/principles/integrity" class="nav-button next">
          <div>
            <div class="nav-label">Next Principle</div>
            <div class="nav-title">Integrity & Impartiality</div>
          </div>
          <span class="nav-arrow">→</span>
        </NuxtLink>
      </div>
    </section>

    <!-- Footer -->
    <TheFooter />
  </div>
</template>

<style scoped>
/* Hero Section */
.hero {
  max-width: 1000px;
  margin: 0 auto;
  padding: 80px 20px 80px;
  text-align: center;
  background: radial-gradient(circle at 50% 50%, rgba(255, 107, 53, 0.15) 0%, transparent 50%);
}

.breadcrumb {
  display: flex;
  align-items: center;
  gap: 10px;
  font-size: 0.95rem;
  opacity: 0.7;
  animation: fadeInUp 0.6s ease-out;
  justify-content: center;
}

.breadcrumb a {
  color: rgb(224, 224, 224);
  text-decoration: none;
  transition: color 0.3s ease;
}

.breadcrumb a:hover {
  color: #FF6B35;
}

.principle-header {
  display: flex;
  align-items: center;
  gap: 30px;
  margin-bottom: 30px;
  animation: fadeInUp 0.6s ease-out 0.1s both;
  justify-content: center;
}

.principle-number-large {
  width: 100px;
  height: 100px;
  background: linear-gradient(135deg, #FF6B35, #E85D25);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 3rem;
  font-weight: bold;
  color: white;
  flex-shrink: 0;
  box-shadow: 0 10px 30px rgba(255, 107, 53, 0.3);
}

.principle-title-section h1 {
  font-size: clamp(2.5rem, 5vw, 3.5rem);
  background: linear-gradient(135deg, #FF6B35, #FFD93D);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  margin-bottom: 10px;
}

.principle-tagline-large {
  font-size: 1.5rem;
  color: #FF6B35;
  opacity: 0.9;
}

/* Restrict main content width and center */
.story-section, .stats-section, .impact-section, .practice-section, .quote-section {
  padding: 80px 20px;
}

.story-content, .stats-container, .impact-header, .impact-grid, .practice-content, .quote-content {
  max-width: 800px;
  margin: 0 auto;
  width: 100%;
  box-sizing: border-box;
}

/* For grid layouts, ensure they don't stretch too wide */
.stats-grid, .impact-grid {
  max-width: 1000px;
  margin: 0 auto;
}

/* Story Section */
.story-section {
  padding: 80px 20px;
  background: #0f0f0f;
}

.story-content {
  max-width: 800px;
  margin: 0 auto;
}

.story-intro {
  font-size: 1.4rem;
  line-height: 1.8;
  margin-bottom: 50px;
  opacity: 0.9;
  animation: fadeInUp 0.6s ease-out 0.3s both;
  text-align: center;
}

.story-chapter {
  margin-bottom: 60px;
  opacity: 0;
  animation: fadeInUp 0.6s ease-out forwards;
}

.story-chapter h2 {
  font-size: 2rem;
  color: #FF6B35;
  margin-bottom: 20px;
  display: flex;
  align-items: center;
  gap: 15px;
}

.chapter-icon {
  font-size: 1.5rem;
}

.story-text {
  font-size: 1.1rem;
  line-height: 1.9;
  opacity: 0.9;
  margin-bottom: 20px;
}

.story-text strong {
  color: #FF6B35;
  font-weight: 600;
}

.personal-story {
  background: rgba(255, 107, 53, 0.05);
  padding: 30px;
  border-radius: 15px;
  border-left: 4px solid #FF6B35;
  font-style: italic;
  margin: 30px 0;
  position: relative;
}

.personal-story::before {
  content: '"';
  position: absolute;
  top: 10px;
  left: 15px;
  font-size: 3rem;
  opacity: 0.3;
  color: #FF6B35;
}

/* Stats Section */
.stats-section {
  padding: 80px 20px;
  background: #1a1a1a;
}

.stats-container {
  max-width: 1000px;
  margin: 0 auto;
  text-align: center;
}

.stats-title {
  font-size: 2.5rem;
  color: #FF6B35;
  margin-bottom: 20px;
}

.stats-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 40px;
  margin-top: 50px;
}

.stat-card {
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(255, 107, 53, 0.2);
  border-radius: 20px;
  padding: 40px;
  transition: all 0.3s ease;
  opacity: 0;
  animation: fadeInUp 0.6s ease-out forwards;
}

.stat-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3);
}

.stat-number {
  font-size: 3rem;
  font-weight: bold;
  color: #FF6B35;
  line-height: 1;
  margin-bottom: 10px;
}

.stat-label {
  font-size: 1.1rem;
  opacity: 0.8;
  margin-bottom: 15px;
}

.stat-description {
  font-size: 0.95rem;
  opacity: 0.7;
  line-height: 1.6;
}

/* Impact Section */
.impact-section {
  padding: 80px 20px;
  background: #0f0f0f;
}

.impact-header {
  text-align: center;
  margin-bottom: 50px;
}

.impact-title {
  font-size: 2.5rem;
  color: #FF6B35;
}

.impact-subtitle {
  font-size: 1.2rem;
  opacity: 0.9;
}

.impact-grid {
  max-width: 1000px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 40px;
}

.impact-card {
  text-align: center;
  padding: 30px;
  background: rgba(255, 255, 255, 0.05);
  border-radius: 15px;
  border: 1px solid rgba(255, 107, 53, 0.2);
  transition: all 0.3s ease;
  opacity: 0;
  animation: fadeInUp 0.6s ease-out forwards;
}

.impact-card:hover {
  transform: translateY(-5px);
  border-color: rgba(255, 107, 53, 0.4);
}

.impact-icon {
  font-size: 3rem;
  margin-bottom: 20px;
  display: block;
}

.impact-card h3 {
  color: #FF6B35;
  margin-bottom: 15px;
  font-size: 1.3rem;
}

.impact-card p {
  opacity: 0.8;
  font-size: 0.95rem;
  line-height: 1.7;
}

/* Practice Section */
.practice-section {
  padding: 80px 20px;
  background: #1a1a1a;
}

.practice-content {
  max-width: 900px;
  margin: 0 auto;
}

.practice-header {
  text-align: center;
  margin-bottom: 50px;
}

.practice-title {
  font-size: 2.5rem;
  color: #FF6B35;
}

.practice-subtitle {
  font-size: 1.2rem;
  opacity: 0.9;
}

.practice-example {
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(255, 107, 53, 0.2);
  border-radius: 20px;
  padding: 40px;
  margin-bottom: 30px;
  transition: all 0.3s ease;
}

.practice-example:hover {
  transform: translateY(-3px);
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3);
}

.practice-example h3 {
  color: white;
  margin-bottom: 20px;
  font-size: 1.4rem;
}

.practice-example ul {
  list-style: none;
  padding: 0;
}

.practice-example li {
  padding: 12px 0;
  padding-left: 35px;
  position: relative;
  opacity: 0.9;
  line-height: 1.7;
}

.practice-example li::before {
  content: '✓';
  position: absolute;
  left: 0;
  color: #FF6B35;
  font-weight: bold;
  font-size: 1.2rem;
}

/* Quote Section */
.quote-section {
  padding: 80px 20px;
  background: linear-gradient(135deg, rgba(255, 107, 53, 0.1) 0%, rgba(255, 217, 61, 0.05) 100%);
  text-align: center;
}

.quote-content {
  max-width: 800px;
  margin: 0 auto;
}

.principle-quote {
  font-size: 1.8rem;
  font-style: italic;
  color: #FF6B35;
  line-height: 1.8;
  margin-bottom: 30px;
}

.quote-author {
  font-size: 1.1rem;
  opacity: 0.8;
}

/* Navigation Section */
.principle-nav {
  padding: 60px 20px;
  background: #0f0f0f;
  border-top: 1px solid rgba(255, 107, 53, 0.2);
}

.nav-content {
  max-width: 1000px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 30px;
}

.nav-button {
  flex: 1;
  padding: 20px 30px;
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(255, 107, 53, 0.2);
  border-radius: 15px;
  text-decoration: none;
  color: rgb(224, 224, 224);
  transition: all 0.3s ease;
  display: flex;
  align-items: center;
  gap: 15px;
}

.nav-button:hover {
  background: rgba(255, 255, 255, 0.08);
  transform: translateY(-3px);
  border-color: rgba(255, 107, 53, 0.4);
}

.nav-button.all {
  justify-content: center;
  max-width: 200px;
}

.nav-arrow {
  font-size: 1.5rem;
  color: #FF6B35;
}

.nav-label {
  font-size: 0.9rem;
  opacity: 0.7;
}

.nav-title {
  font-size: 1.1rem;
  font-weight: 600;
  color: white;
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
@media (max-width: 1023px) {
  /* Hide line break on screens smaller than 1024px */
  .impact-card h3 br {
    display: none;
  }
}

@media (max-width: 768px) {
  .principle-header {
    flex-direction: column;
    text-align: center;
  }

  .nav-content {
    flex-direction: column;
  }

  .nav-button {
    width: 100%;
  }

  .stats-grid {
    grid-template-columns: 1fr;
  }

  .practice-example {
    padding: 25px 20px;
  }
}
</style>
