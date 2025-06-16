<template>
  <div>    <!-- Navigation -->
    <TheNavigation />

    <!-- Hero Section -->
    <PrincipleHero 
      :number="1"
      title="Accessible"
      tagline="Free Knowledge for All"
    />    <!-- Story Section -->
    <PrincipleStory 
      :intro="storyIntro"
      :chapters="storyChapters"
    />

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
          <h3>For the Global Learner</h3>
          <p>No geographic restrictions. Whether you're in Silicon Valley or rural Vietnam, quality education is yours.</p>
        </div>
      </div>
    </section>    <!-- Practice Section -->
    <PrinciplePractice 
      title="How We Live This Principle"
      subtitle="Concrete actions that make accessibility real"
      :examples="practiceExamples"
      background-color="var(--dark-bg)"
      list-icon="✓"
    />

    <!-- Quote Section -->
    <PrincipleQuote 
      quote="No one gets left behind simply because they can't afford the first step. That junior developer who chooses between courses and necessities? They deserve the same chance to grow as anyone else."
    />    <!-- Navigation Section -->
    <PrincipleNavigation current-slug="accessible" />

    <!-- Footer -->
    <TheFooter />  </div>
</template>

<script setup lang="ts">
// Meta tags for SEO
useHead({
  title: 'Accessible: Free Knowledge for All | Principle #1 - Skill-Wanderer',
  meta: [
    { name: 'description', content: 'Discover how Skill-Wanderer ensures free access to quality education by removing financial barriers and providing transparent guidance for all learners.' }
  ]
})

// Story content data
const storyIntro = 'I call our first principle <strong>Accessible</strong>, and it comes from a very real and personal place.'

const storyChapters = [
  {
    icon: '👥',
    title: 'The Leadership Challenge',
    content: [
      {
        type: 'text' as const,
        text: 'Over the years, I\'ve had the privilege of leading many developers—more than 20 in total, and at one point, I was managing a team of 16 simultaneously. I quickly learned that training a team with diverse skill levels is a major challenge. It\'s inefficient to teach everyone 1-on-1, and putting junior and mid level developers in the same class often helps no one. The best approach was always to point my team toward high-quality external learning materials so they could learn at their own pace.'
      },
      {
        type: 'text' as const,
        text: 'That\'s where I saw the problem.'
      }
    ]
  },
  {
    icon: '💔',
    title: 'The Barrier I Witnessed',
    content: [
      {
        type: 'text' as const,
        text: 'The best courses, the ones that truly make a difference, often come with a cost—typically around $25-$50 USD per month. While that might not seem like much, it was a huge barrier for my junior developers. For many, that monthly fee was <strong>more than 10% of their entire salary</strong>. I watched as talented, driven developers struggled to afford the very resources they needed to grow. They didn\'t know which courses were worth the investment or simply lacked the funds to find out.'
      },
      {
        type: 'personal-story' as const,
        text: 'I remember one junior developer on my team—brilliant mind, incredible work ethic. He would stay late, debugging issues, always asking smart questions. But when I recommended a specific course that would accelerate his learning, he quietly said, "Maybe next month." That\'s when I realized: he was choosing between learning resources and basic necessities. That moment haunts me still.'
      },
      {
        type: 'text' as const,
        text: 'And I can tell you from experience: <strong>nothing is more dangerous than being left behind in the tech industry.</strong>'
      }
    ]
  },
  {
    icon: '☯️',
    title: 'The Karma of Knowledge',
    content: [
      {
        type: 'text' as const,
        text: 'I\'ve been fortunate in my own career to have the resources to invest in my education. But I saw so many others who weren\'t as lucky. I believe in a kind of karma—that good fortune should be shared. This is why our organization is built on the promise of free access. We are committed to providing and curating high-quality core educational content that is <strong>completely free</strong>, removing that initial financial barrier for those who need it most.'
      },
      {
        type: 'text' as const,
        text: 'At the same time, I know that many people who will come to our platform <em>can</em> afford to pay for premium resources but simply don\'t know where to start. That\'s why our <strong>Accessible</strong> principle also includes guiding learners to valuable, optional paid third-party resources. We serve both the person who needs a free path to get started and the person who needs expert guidance on where to best invest in their education.'
      },
      {
        type: 'text' as const,
        text: 'Ultimately, this principle is about ensuring that no one gets left behind simply because they can\'t afford the first step.'
      }
    ]
  }
]

// Practice examples data
const practiceExamples = [
  {
    title: 'Free Core Content - Always',
    items: [
      'Every course we create or curate is completely free',
      'No paywalls, no "premium only" sections for essential knowledge',
      'Full access from day one - no email gates or forced registrations',
      'Content stays free forever - we never move it behind a paywall'
    ]
  },
  {
    title: 'Transparent Resource Guidance',
    items: [
      'Clear marking of which third-party resources are free vs paid',
      'Honest reviews without affiliate bias - we receive no commissions',
      'Multiple options provided - there\'s always a free alternative',
      'Guidance on when paid resources are truly worth the investment'
    ]
  },
  {
    title: 'Removing Hidden Barriers',
    items: [
      'Multiple learning formats to suit different styles and bandwidths',
      'Community support that\'s also free - no paid Discord channels',
      'Clear learning paths so you never feel lost or overwhelmed'
    ]
  }
]
</script>

<style scoped>
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

.impact-card h3 {
  height: 3.9rem;
}

@media (max-width: 768px) {
  .principle-header {
    flex-direction: column;
    text-align: center;
  }

  .stats-grid {
    grid-template-columns: 1fr;
  }

  .practice-example {
    padding: 25px 20px;
  }
}
</style>
