<template>
  <div>
    <!-- Hero Section -->
    <section class="hero" style="background: linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7))">
      <div class="hero-content">
        <h1>Navigate Your Learning Journey</h1>
        <p>Discover the path to becoming a versatile professional through continuous learning and skill exploration. Join the wanderer's journey across the tech landscape.</p>
        <a href="#platforms" class="scroll-down">↓</a>
      </div>
    </section>
    
    <!-- Platforms Section -->
    <section class="platforms section" id="platforms">
      <div class="container">
        <div class="section-title">
          <h2>Explore Our Platforms</h2>
          <p>Choose your path or experience them all. Each platform offers a unique approach to learning and skill development.</p>
        </div>
        
        <div class="platforms-grid">
          <!-- Blog Platform -->
          <div class="platform-card">
            <div class="platform-img" style="background-color: var(--dark-gray)">
              <div class="platform-overlay">
                <div class="platform-icon">📝</div>
              </div>
            </div>
            <div class="platform-content">
              <h3>The Blog</h3>
              <p>Join me on my learning journey! Read articles sharing insights from my explorations across various tech domains, and get the latest updates on the development of the skill-wanderer platform.</p>
              <a href="https://blog.skill-wanderer.com" class="platform-link">Visit the Blog</a>
            </div>
          </div>
          
          <!-- Dojo Platform -->
          <div class="platform-card">
            <div class="platform-img" style="background-color: var(--dark-gray)">
              <div class="platform-overlay">
                <div class="platform-icon">🥋</div>
              </div>
            </div>
            <div class="platform-content">
              <h3>The Dojo</h3>
              <p>While the Dojo is live, it's currently a blank canvas. The vision is to build a mission-driven e-learning platform (LMS) offering high-quality, curated learning paths from diverse sources, making skill development accessible to all.</p>
              <a href="https://dojo.skill-wanderer.com" class="platform-link">Visit the Dojo</a>
            </div>
          </div>
          
          <!-- Hub Platform (Coming Soon) -->
          <div class="platform-card">
            <div class="platform-img" style="background-color: var(--dark-gray)">
              <div class="platform-overlay">
                <div class="platform-icon">🌐</div>
              </div>
              <div class="coming-soon-badge">Coming Soon</div>
            </div>
            <div class="platform-content">
              <h3>The Hub</h3>
              <p>Connect with a vibrant community of learners. Share your journey, exchange insights, collaborate on projects, find mentors or mentees, and grow together in a supportive environment for skill development.</p>
              <span class="platform-link disabled">Coming Soon</span>
            </div>
          </div>
        </div>
      </div>
    </section>
    
    <!-- Journey Section -->
    <section class="journey section">
      <div class="container">
        <div class="journey-content">
          <div class="journey-text">
            <h2>My Learning Journey</h2>
            <p>I've worn many hats throughout my career, constantly expanding my skills across domains. From front-end development to back-end engineering, from DevOps to solution architecture, I've wandered the tech landscape gathering knowledge.</p>
            <p>Even outside of technology, as a former Import-Export Manager, I learned to rapidly adapt to complex systems—proving that continuous learning is the key to versatility.</p>
            <p>Now, I'm sharing the insights and skills I've gathered along my journey to help you navigate your own path of growth and discovery.</p>
          </div>
          <div class="journey-image">
            <img src="/cropped-skill-wanderer-logo-768x256.webp" alt="Learning Journey" class="responsive-logo">
          </div>
        </div>
      </div>
    </section>
    

  </div>
  <footer class="footer-section">
    <div class="footer-content">
      <span>
        Need a reference? Check out the source for this landing page on
        <a href="https://github.com/skill-wanderer/skill-wanderer-landing-page" target="_blank" rel="noopener" class="footer-link">GitHub</a>.
      </span>
      <br />
      <span>
        Connect with me on
        <a href="https://www.linkedin.com/in/quan-nguyen-jimmy-youhei" target="_blank" rel="noopener" class="footer-link" aria-label="LinkedIn">
          <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" style="vertical-align: text-bottom; margin-right: 4px;"><path fill="currentColor" d="M19 0h-14c-2.76 0-5 2.24-5 5v14c0 2.76 2.24 5 5 5h14c2.76 0 5-2.24 5-5v-14c0-2.76-2.24-5-5-5zm-11 19h-3v-10h3v10zm-1.5-11.27c-.97 0-1.75-.79-1.75-1.76s.78-1.76 1.75-1.76 1.75.79 1.75 1.76-.78 1.76-1.75 1.76zm15.5 11.27h-3v-5.6c0-1.34-.03-3.07-1.87-3.07-1.87 0-2.16 1.46-2.16 2.97v5.7h-3v-10h2.89v1.36h.04c.4-.75 1.38-1.54 2.84-1.54 3.04 0 3.6 2 3.6 4.59v5.59z"/></svg>
          LinkedIn
        </a>
      </span>
    </div>
  </footer>
</template>

<script setup lang="ts">
import type { Platform } from '~/types'

// Platform data with TypeScript interface
const platforms: Platform[] = [
  {
    title: 'The Blog',
    description: 'Join me on my learning journey! Read articles sharing insights from my explorations across various tech domains, and get the latest updates on the development of the skill-wanderer platform.',
    link: 'https://blog.skill-wanderer.com',
    icon: '📝'
  },
  {
    title: 'The Dojo',
    description: 'Master your skills through hands-on practice and challenges. Coming soon with interactive coding environments and skill assessments.',
    link: '#',
    icon: '🥋',
    isComingSoon: true
  },
  {
    title: 'The Hub',
    description: 'Connect with other skill wanderers, share your journey, and discover new learning paths. The central community platform.',
    link: '#',
    icon: '🌐',
    isComingSoon: true
  }
]

// SEO and meta management
useHead({
  title: 'Skill Wanderer - Navigate Your Learning Journey',
  meta: [
    { name: 'description', content: 'Discover the path to becoming a versatile professional through continuous learning and skill exploration. Join the wanderer\'s journey across the tech landscape.' },
    { property: 'og:title', content: 'Skill Wanderer - Navigate Your Learning Journey' },
    { property: 'og:description', content: 'Discover the path to becoming a versatile professional through continuous learning and skill exploration.' },
    { name: 'twitter:card', content: 'summary_large_image' }
  ]
})
</script>

<style scoped>
/* Any additional page-specific styles can go here */
.platform-link.disabled {
  cursor: not-allowed;
  opacity: 0.7;
  background-color: var(--dark-gray);
  color: #fff;
  pointer-events: none;
}

.responsive-logo {
  max-width: 100%;
  height: auto;
  border-radius: 10px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3);
  transition: all 0.3s ease;
}

/* Small to medium screens (tablets) */
@media (min-width: 481px) and (max-width: 1200px) {
  .responsive-logo {
    width: 85%;
    max-width: 350px;
    max-height: 160px;
    margin: 0 auto;
    display: block;
    object-fit: contain;
  }
  .journey-image {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0 10px;
    width: 100%;
    overflow: hidden;
  }
  .journey-content {
    gap: 20px;
    padding: 0 10px;
  }
}

/* Mobile screens */
@media (max-width: 480px) {
  .responsive-logo {
    width: 90%;
    margin: 0 auto;
    display: block;
  }
  
  .journey-image {
    padding: 0 15px;
  }
}

.footer-section {
  background: #18181b;
  color: #fff;
  text-align: center;
  padding: 18px 0 10px 0;
  font-size: 1rem;
  margin-top: 40px;
}
.footer-link {
  color: #38bdf8;
  text-decoration: underline;
  transition: color 0.2s;
}
.footer-link:hover {
  color: #0ea5e9;
}
.footer-content {
  max-width: 900px;
  margin: 0 auto;
  padding: 0 16px;
}
</style>