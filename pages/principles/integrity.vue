<template>
  <div>    <!-- Navigation -->
    <TheNavigation />

    <!-- Hero Section -->
    <PrincipleHero 
      :number="2"
      title="Integrity and Impartiality"
      tagline="No Hidden Agendas"
      breadcrumb-name="Integrity and Impartiality"
    />    <!-- Story Section -->
    <PrincipleStory 
      :intro="storyIntro"
      :chapters="storyChapters"
    />

    <!-- Trust Breakdown Section -->
    <section class="trust-breakdown">
      <div class="trust-container">
        <h2 style="font-size: 2.5rem; color: var(--primary-orange); margin-bottom: 20px;">The Trust Equation</h2>
        <p style="font-size: 1.2rem; opacity: 0.9;">How financial incentives erode educational trust</p>
        
        <div class="trust-visual">
          <div class="trust-card" style="animation-delay: 0.1s;">
            <span class="trust-icon">👨‍👩‍👧‍👦</span>
            <h3>Family & Friends</h3>
            <p>Highest trust level because there's no financial motive—just genuine care for your success.</p>
            <div class="trust-meter">
              <div class="trust-level" style="width: 95%;"></div>
            </div>
          </div>
          
          <div class="trust-card" style="animation-delay: 0.2s;">
            <span class="trust-icon">🎓</span>
            <h3>Pure Educators</h3>
            <p>High trust when education is the only goal, with no hidden financial agenda.</p>
            <div class="trust-meter">
              <div class="trust-level" style="width: 85%;"></div>
            </div>
          </div>
          
          <div class="trust-card broken" style="animation-delay: 0.3s;">
            <span class="trust-icon">💰</span>
            <h3>Affiliate Marketers</h3>
            <p>Trust erodes when recommendations might be influenced by commission rates.</p>
            <div class="trust-meter">
              <div class="trust-level" style="width: 30%;"></div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- No-Go Zone Section -->
    <section class="no-go-zone">
      <div class="no-go-container">
        <div style="text-align: center; margin-bottom: 50px;">
          <h2 style="font-size: 2.5rem; color: var(--primary-orange);">What We'll Never Do</h2>
          <p style="font-size: 1.2rem; opacity: 0.9;">Our commitment to keeping education pure</p>
        </div>

        <div class="banned-items">
          <div class="banned-item" style="animation-delay: 0.1s;">
            <span class="banned-icon">🏷️</span>
            <h3>No Affiliate Links</h3>
            <p>Zero commissions from course platforms or tools</p>
          </div>
          
          <div class="banned-item" style="animation-delay: 0.2s;">
            <span class="banned-icon">📢</span>
            <h3>No Paid Promotions</h3>
            <p>Never accepting money to recommend resources</p>
          </div>
          
          <div class="banned-item" style="animation-delay: 0.3s;">
            <span class="banned-icon">🎁</span>
            <h3>No Kickbacks</h3>
            <p>Refusing all forms of referral rewards</p>
          </div>
          
          <div class="banned-item" style="animation-delay: 0.4s;">
            <span class="banned-icon">🤝</span>
            <h3>No Hidden Deals</h3>
            <p>Transparent about all our relationships</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Vision Section -->
    <section class="vision-section">
      <div class="vision-content">
        <h2 style="font-size: 2.5rem; color: var(--primary-orange); margin-bottom: 20px; text-align: center;">
          A Different Kind of Partnership
        </h2>
        
        <div class="future-vision">
          <h3>Future Vision: Scholarships, Not Sales</h3>
          <p>
            Now, to be clear, this principle is about avoiding <strong>revenue-based</strong> conflicts of interest. 
            It doesn't restrict us from seeking non-monetary support that aligns with our educational mission.
          </p>
          <p style="margin-top: 20px;">
            In the future, I have a vision to ask paid course providers for free access or subscriptions that we 
            can then pass on to our learners facing financial hardship. This would allow them a chance to use 
            premium third-party resources without cost. While this is a future plan and not yet a promise, it 
            shows our intent: <strong>any benefit we seek from others must flow directly to our learners, not 
            to our bottom line.</strong>
          </p>
        </div>
      </div>    </section>

    <!-- Quote Section -->
    <PrincipleQuote 
      quote="The moment people know you're getting paid for a recommendation, a seed of doubt is planted. We refuse to let that seed take root. Our guidance will never be for sale—this is the only way to ensure complete trust in our educational mission."
    />    <!-- Navigation Section -->
    <PrincipleNavigation current-slug="integrity" />

    <!-- Footer -->
    <TheFooter />
  </div>
</template>

<script setup lang="ts">
import { onMounted } from 'vue'

// Meta tags for SEO
useHead({
  title: 'Integrity and Impartiality: No Hidden Agendas | Principle #2 - Skill-Wanderer',
  meta: [
    { name: 'description', content: 'Discover how Skill-Wanderer maintains complete integrity by refusing all affiliate commissions, sponsored content, and hidden financial incentives that could compromise our educational recommendations.' }
  ]
})

// Story content data
const storyIntro = 'I call our second principle <strong>Integrity and Impartiality</strong>, and it comes from a deep understanding of marketing and trust.'

const storyChapters = [
  {
    icon: '📚',
    title: 'The Marketing Education',
    content: [
      {
        type: 'text' as const,
        text: 'My background is in commerce and marketing, and through my studies and experience, I\'ve seen both the good and the bad. I have a particular skepticism for business models where personal financial gain can conflict with genuine recommendations.'
      },
      {
        type: 'text' as const,
        text: 'Word-of-mouth is arguably the most powerful marketing tool because it\'s built on trust. You\'ll always believe a recommendation from your family or a close friend more than an ad on TV, right?'
      },
      {
        type: 'text' as const,
        text: 'But I\'ve seen how quickly that trust can be broken when money is on the table.'
      }
    ]
  },
  {
    icon: '💔',
    title: 'When Trust Breaks',
    content: [
      {
        type: 'text' as const,
        text: 'I\'ve seen relatives trick each other into buying bad insurance policies. I\'ve seen friends mislead friends into buying fake products. Here in Vietnam, we\'ve all seen stories of famous people promoting defective or "too-good-to-be-true" products to their fans, sometimes with serious legal consequences.'
      },
      {
        type: 'personal-story' as const,
        text: 'I remember watching a famous Vietnamese influencer I once admired promote a "miracle" health product. Thousands of fans bought it based on trust alone. Later, when the product was found to be harmful, I saw the comments—people felt betrayed, not just financially, but emotionally. That trust, once broken, could never be fully restored. It made me realize: when you mix trust with hidden financial incentives, you\'re playing with fire.'
      },
      {
        type: 'text' as const,
        text: 'This creates a fundamental problem. Even if a recommendation is genuine, the moment people know you\'re getting paid for it, <strong>a seed of doubt is planted</strong>. As a skeptical person myself, I know that feeling well. That very doubt is what I want to eliminate entirely from our organization.'
      }
    ]
  },
  {
    icon: '🛡️',
    title: 'The Hard Line',
    content: [
      {
        type: 'text' as const,
        text: 'That is why this principle is a hard line in the sand. <strong>Our recommendations will be our own, based solely on what we believe is best for the learner.</strong> We will not accept any form of revenue—no commissions, no referral fees, no kickbacks—from any third-party resources we guide our learners to. Our opinions and our guidance cannot and will not be for sale. This is the only way to ensure our cause is free from any doubt.'
      },
      {
        type: 'text' as const,
        text: 'Ultimately, our integrity is the foundation of the trust our community places in us. This principle is our commitment to protecting that trust above all else.'
      }
    ]
  }
]

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
    })  }, observerOptions)

  document.querySelectorAll('.trust-card, .banned-item').forEach(item => {
    observer.observe(item)
  })

  // Cleanup
  return () => {
    window.removeEventListener('scroll', handleScroll)
  }
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
  --success-green: #4CAF50;
  --trust-blue: #2196F3;
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

/* Trust Breakdown Section */
.trust-breakdown {
  padding: 80px 20px;
  background: var(--dark-bg);
}

.trust-container {
  max-width: 1000px;
  margin: 0 auto;
  text-align: center;
}

.trust-visual {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 40px;
  margin-top: 50px;
}

.trust-card {
  background: var(--card-bg);
  border: 1px solid rgba(255, 107, 53, 0.2);
  border-radius: 20px;
  padding: 40px;
  transition: all 0.3s ease;
  opacity: 0;
  animation: fadeInUp 0.6s ease-out forwards;
  position: relative;
  overflow: hidden;
}

.trust-card.broken {
  border-color: rgba(244, 67, 54, 0.3);
}

.trust-card.broken::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: linear-gradient(135deg, rgba(244, 67, 54, 0.05) 0%, transparent 50%);
}

.trust-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3);
}

.trust-icon {
  font-size: 3rem;
  margin-bottom: 20px;
  display: block;
}

.trust-card h3 {
  color: white;
  margin-bottom: 15px;
  font-size: 1.3rem;
}

.trust-card p {
  opacity: 0.8;
  font-size: 0.95rem;
  line-height: 1.7;
}

.trust-meter {
  margin-top: 20px;
  height: 8px;
  background: rgba(255, 255, 255, 0.1);
  border-radius: 4px;
  overflow: hidden;
}

.trust-level {
  height: 100%;
  background: linear-gradient(90deg, var(--primary-orange), var(--accent-yellow));
  transition: width 0.6s ease;
}

.trust-card.broken .trust-level {
  background: linear-gradient(90deg, #f44336, #ff6b6b);
  width: 30% !important;
}

/* No-Go Zone Section */
.no-go-zone {
  padding: 80px 20px;
  background: var(--darker-bg);
}

.no-go-container {
  max-width: 900px;
  margin: 0 auto;
}

.banned-items {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 30px;
  margin-top: 50px;
}

.banned-item {
  text-align: center;
  padding: 30px;
  background: rgba(244, 67, 54, 0.05);
  border: 2px solid rgba(244, 67, 54, 0.2);
  border-radius: 15px;
  position: relative;
  opacity: 0;
  animation: fadeInUp 0.6s ease-out forwards;
}

.banned-item::before {
  content: '✕';
  position: absolute;
  top: -15px;
  right: -15px;
  width: 40px;
  height: 40px;
  background: #f44336;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-size: 1.5rem;
  font-weight: bold;
}

.banned-icon {
  font-size: 2.5rem;
  margin-bottom: 15px;
  display: block;
  opacity: 0.5;
}

.banned-item h3 {
  color: #ff6b6b;
  margin-bottom: 10px;
  font-size: 1.1rem;
}

.banned-item p {
  opacity: 0.7;
  font-size: 0.9rem;
}

/* Vision Section */
.vision-section {
  padding: 80px 20px;
  background: var(--dark-bg);
}

.vision-content {
  max-width: 900px;
  margin: 0 auto;
}

.future-vision {
  background: linear-gradient(135deg, rgba(33, 150, 243, 0.05) 0%, rgba(255, 107, 53, 0.05) 100%);
  border: 1px solid rgba(33, 150, 243, 0.2);
  border-radius: 20px;
  padding: 40px;
  margin-top: 40px;
  position: relative;
  overflow: hidden;
}

.future-vision::before {
  content: '🌟';
  position: absolute;
  top: 20px;
  right: 20px;
  font-size: 3rem;
  opacity: 0.1;
}

.future-vision h3 {
  color: var(--trust-blue);
  margin-bottom: 20px;
  font-size: 1.5rem;
}

.future-vision p {
  font-size: 1.1rem;
  line-height: 1.8;
  opacity: 0.9;
}

.banned-item h3 {
    height: 3.9rem;
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
  .trust-visual {
    grid-template-columns: 1fr;
  }

  .banned-items {
    grid-template-columns: 1fr;
  }

  .future-vision {
    padding: 25px 20px;
  }
}
</style>
