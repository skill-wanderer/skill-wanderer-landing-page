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
              <p>Dive into articles, tutorials, and insights from my journey across various tech disciplines. From front-end to DevOps, from solution architecture to business analysis.</p>
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
              <p>Master skills through structured learning paths and hands-on projects. Our e-learning platform focuses on practical applications across multiple technology domains.</p>
              <a href="https://dojo.skill-wanderer.com" class="platform-link">Enter the Dojo</a>
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
              <p>Join a community of fellow wanderers. Share your experiences, collaborate on projects, and connect with others on similar learning journeys.</p>
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
            <p>Even outside of technology, as an Import-Export Manager, I learned to rapidly adapt to complex systems—proving that continuous learning is the key to versatility.</p>
            <p>Now, I'm sharing the insights and skills I've gathered along my journey to help you navigate your own path of growth and discovery.</p>
          </div>
          <div class="journey-image">
            <img src="/cropped-skill-wanderer-logo-768x256.webp" alt="Learning Journey">
          </div>
        </div>
      </div>
    </section>
    

  </div>
</template>

<style scoped>
/* Any additional page-specific styles can go here */
.platform-link.disabled {
  cursor: not-allowed;
  opacity: 0.7;
  background-color: var(--dark-gray);
  color: #fff;
  pointer-events: none;
}
</style>