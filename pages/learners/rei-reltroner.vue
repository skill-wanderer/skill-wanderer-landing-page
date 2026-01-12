<template>
  <div>
    <!-- Hero Section -->
    <section class="hero">
      <div class="hero-content">
        <NuxtLink to="/learners" class="back-link">
          ← Back to Our Learners
        </NuxtLink>
        <div class="featured-badge">
          <span>⭐ First Learner</span>
        </div>
        <h1>Rei Reltroner</h1>
        <p class="real-name">(Raidan Malik Sandra)</p>
        <p class="tagline">Sailing Through the Storm</p>
        <div class="hero-meta">
          <span class="meta-tag">📍 Indonesia</span>
          <span class="meta-tag">💼 Software Developer & Founder</span>
        </div>
      </div>
    </section>

    <!-- Profile Section -->
    <section class="profile-section">
      <div class="profile-container">
        <div class="profile-image">
          <img src="/learners/Rei-Reltroner.jpeg" alt="Rei Reltroner" class="profile-photo" />
        </div>
        
        <div class="profile-intro">
          <h2>The First Wanderer</h2>
          <p>
            Rei holds a special place in our community as the <strong>very first learner and mentee</strong> 
            to get in touch with Skill-Wanderer. As a true "student of life," Rei's journey has been 
            defined by profound resilience. Navigating the complexities of ADHD and the mental "roller coasters" 
            that life can present, Rei has shown what it means to truly sail through adversity.
          </p>
        </div>
      </div>
    </section>

    <!-- Journey Section -->
    <section class="journey-section">
      <div class="journey-container">
        <h2>🌟 A Personal & Professional Transformation</h2>
        <p class="section-intro">
          Since beginning his mentorship journey, Rei has experienced a shift that goes far beyond 
          technical skills. He has worked hard to improve his mental well-being and reclaim his confidence.
        </p>

        <div class="milestones-grid">
          <div class="milestone-card">
            <div class="milestone-icon">👥</div>
            <h3>Socially Active</h3>
            <p>
              He has been going out more and meeting with more people, showing incredible personal growth 
              and breaking through social barriers that once held him back.
            </p>
          </div>
          
          <div class="milestone-card">
            <div class="milestone-icon">🚀</div>
            <h3>Launching a Freelancing Career</h3>
            <p>
              Marking a significant milestone, Rei has officially launched his freelancing career 
              and secured his first project—a testament to his dedication and growing skills.
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- Ongoing Work Section -->
    <section class="ongoing-section">
      <div class="ongoing-container">
        <h2>🏗️ Building the Future</h2>
        <p class="section-intro">
          Even before connecting with Skill-Wanderer, Rei was already hard at work building his vision. 
          Through our mentorship, we've been providing guidance and advice as he continues to develop:
        </p>

        <div class="projects-grid">
          <a href="https://www.reltroner.com/" target="_blank" class="project-card">
            <div class="project-header">
              <span class="project-icon">🎨</span>
              <h3>Creative Studio</h3>
            </div>
            <p>
              Rei is developing his own Creative Studio, combining his technical skills with creative vision 
              to build something uniquely his own.
            </p>
            <div class="project-footer">
              <span class="project-status">In Development</span>
              <span class="project-link">Visit Site →</span>
            </div>
          </a>
          
          <a href="https://hrm.reltroner.com/" target="_blank" rel="noopener noreferrer" class="project-card">
            <div class="project-header">
              <span class="project-icon">📊</span>
              <h3>Custom HRM System</h3>
            </div>
            <p>
              Building a Human Resource Management system from the ground up, showcasing his ability 
              to tackle complex enterprise-level projects.
            </p>
            <div class="project-footer">
              <span class="project-status">In Development</span>
              <span class="project-link">Visit Site →</span>
            </div>
          </a>
        </div>
      </div>
    </section>

    <!-- Next Chapter Section -->
    <section class="next-chapter-section">
      <div class="next-container">
        <h2>📚 The Next Chapter: Quality & Excellence</h2>
        <p>
          Rei continues to sharpen his technical edge through career mentorship, focusing on mastering 
          the <strong>Tester/QA path</strong>. His commitment to constant learning and his courage to face 
          personal challenges head-on make him the perfect embodiment of a Skill-Wanderer.
        </p>

        <div class="learner-path-badge">
          <span class="path-icon">🔍</span>
          <span class="path-text">Currently pursuing: QA / Tester Path</span>
        </div>

        <blockquote class="featured-quote">
          "Rei's story reminds us that growth isn't just about technical skills—it's about the courage 
          to keep moving forward, even when the sea is rough."
        </blockquote>
      </div>
    </section>

    <!-- CTA Section -->
    <section class="cta-section">
      <div class="cta-container">
        <h2>Inspired by Rei's Journey?</h2>
        <p>
          Start your own learning adventure and join a community of passionate learners 
          who support each other on the path to mastery.
        </p>
        <div class="cta-buttons">
          <a href="/learning-path/qa-tester" class="btn btn-primary">
            Explore QA / Tester Path
          </a>
          <a href="/contact" class="btn btn-secondary">
            Get in Touch
          </a>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import { useSEO } from '~/composables/useSEO'

useSEO({
  title: 'Rei Reltroner - Our First Learner | Skill-Wanderer',
  description: 'Meet Rei Reltroner, the first learner at Skill-Wanderer. Discover his journey of resilience, personal growth, and his pursuit of the QA/Tester path.',
  keywords: ['Rei Reltroner', 'first learner', 'success story', 'QA tester', 'learning journey', 'skill-wanderer'],
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
}

/* Hero Section */
.hero {
  background: radial-gradient(circle at 30% 20%, rgba(255, 107, 53, 0.15) 0%, transparent 50%),
              radial-gradient(circle at 70% 80%, rgba(255, 217, 61, 0.1) 0%, transparent 50%),
              linear-gradient(135deg, var(--dark-bg) 0%, var(--darker-bg) 100%);
  padding: 120px 20px 80px;
  text-align: center;
}

.hero-content {
  max-width: 900px;
  margin: 0 auto;
}

.back-link {
  display: inline-block;
  color: var(--primary-orange);
  text-decoration: none;
  font-size: 1rem;
  margin-bottom: 30px;
  transition: all 0.3s ease;
}

.back-link:hover {
  color: var(--accent-yellow);
  transform: translateX(-5px);
}

.featured-badge {
  margin-bottom: 20px;
}

.featured-badge span {
  background: linear-gradient(135deg, var(--primary-orange), var(--accent-yellow));
  color: #000;
  padding: 10px 25px;
  border-radius: 30px;
  font-weight: 700;
  font-size: 1rem;
  display: inline-block;
}

.hero h1 {
  font-size: clamp(2.5rem, 6vw, 4rem);
  font-weight: 800;
  margin-bottom: 5px;
  background: linear-gradient(135deg, var(--primary-orange), var(--accent-yellow));
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  line-height: 1.2;
}

.real-name {
  font-size: 1.3rem;
  color: rgba(255, 255, 255, 0.7);
  margin-bottom: 15px;
}

.tagline {
  font-size: clamp(1.2rem, 3vw, 1.6rem);
  color: var(--accent-yellow);
  margin-bottom: 25px;
  font-style: italic;
}

.hero-meta {
  display: flex;
  gap: 15px;
  justify-content: center;
  flex-wrap: wrap;
}

.meta-tag {
  background: rgba(255, 107, 53, 0.15);
  color: rgba(255, 255, 255, 0.9);
  padding: 10px 20px;
  border-radius: 25px;
  font-size: 1rem;
}

/* Profile Section */
.profile-section {
  padding: 80px 20px;
  background: var(--darker-bg);
}

.profile-container {
  max-width: 1000px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 300px 1fr;
  gap: 50px;
  align-items: start;
}

.profile-image {
  position: sticky;
  top: 100px;
}

.profile-photo {
  width: 100%;
  aspect-ratio: 1;
  border-radius: 20px;
  object-fit: cover;
  border: 3px solid rgba(255, 107, 53, 0.4);
  box-shadow: 0 10px 40px rgba(0, 0, 0, 0.3);
  transition: all 0.3s ease;
}

.profile-photo:hover {
  border-color: var(--primary-orange);
  box-shadow: 0 15px 50px rgba(255, 107, 53, 0.2);
}

.profile-intro h2 {
  color: var(--primary-orange);
  font-size: 2rem;
  margin-bottom: 25px;
}

.profile-intro p {
  font-size: 1.2rem;
  line-height: 1.9;
  color: rgba(255, 255, 255, 0.9);
}

.profile-intro strong {
  color: var(--primary-orange);
}

/* Journey Section */
.journey-section {
  padding: 80px 20px;
  background: var(--dark-bg);
}

.journey-container {
  max-width: 1000px;
  margin: 0 auto;
}

.journey-container h2 {
  color: var(--primary-orange);
  font-size: clamp(1.8rem, 4vw, 2.2rem);
  margin-bottom: 20px;
  text-align: center;
}

.section-intro {
  font-size: 1.15rem;
  line-height: 1.8;
  color: rgba(255, 255, 255, 0.85);
  text-align: center;
  max-width: 800px;
  margin: 0 auto 50px;
}

.milestones-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 30px;
}

.milestone-card {
  background: var(--card-bg);
  border: 1px solid rgba(255, 107, 53, 0.2);
  border-radius: 20px;
  padding: 35px;
  text-align: center;
  transition: all 0.3s ease;
}

.milestone-card:hover {
  transform: translateY(-5px);
  border-color: var(--primary-orange);
  background: var(--card-hover);
}

.milestone-icon {
  font-size: 3rem;
  margin-bottom: 20px;
}

.milestone-card h3 {
  color: var(--primary-orange);
  font-size: 1.3rem;
  margin-bottom: 15px;
}

.milestone-card p {
  color: rgba(255, 255, 255, 0.8);
  font-size: 1.05rem;
  line-height: 1.7;
}

/* Ongoing Section */
.ongoing-section {
  padding: 80px 20px;
  background: linear-gradient(135deg, rgba(255, 107, 53, 0.05) 0%, transparent 100%);
}

.ongoing-container {
  max-width: 1000px;
  margin: 0 auto;
}

.ongoing-container h2 {
  color: var(--primary-orange);
  font-size: clamp(1.8rem, 4vw, 2.2rem);
  margin-bottom: 20px;
  text-align: center;
}

.projects-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 30px;
}

.project-card {
  background: var(--card-bg);
  border: 1px solid rgba(255, 107, 53, 0.2);
  border-radius: 20px;
  padding: 35px;
  transition: all 0.3s ease;
  text-decoration: none;
  color: inherit;
  display: flex;
  flex-direction: column;
  cursor: pointer;
}

.project-card:hover {
  transform: translateY(-5px);
  border-color: var(--primary-orange);
  box-shadow: 0 10px 30px rgba(255, 107, 53, 0.15);
}

.project-header {
  display: flex;
  align-items: center;
  gap: 15px;
  margin-bottom: 20px;
}

.project-icon {
  font-size: 2.5rem;
}

.project-card h3 {
  color: var(--primary-orange);
  font-size: 1.3rem;
}

.project-card p {
  color: rgba(255, 255, 255, 0.8);
  font-size: 1.05rem;
  line-height: 1.7;
  margin-bottom: 20px;
}

.project-footer {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: auto;
}

.project-status {
  display: inline-block;
  background: rgba(255, 217, 61, 0.15);
  color: var(--accent-yellow);
  padding: 8px 18px;
  border-radius: 20px;
  font-size: 0.9rem;
  font-weight: 600;
}

.project-link {
  color: var(--primary-orange);
  font-weight: 600;
  font-size: 0.95rem;
  transition: all 0.3s ease;
}

.project-card:hover .project-link {
  color: var(--accent-yellow);
}

/* Next Chapter Section */
.next-chapter-section {
  padding: 80px 20px;
  background: var(--darker-bg);
}

.next-container {
  max-width: 800px;
  margin: 0 auto;
  text-align: center;
}

.next-container h2 {
  color: var(--primary-orange);
  font-size: clamp(1.8rem, 4vw, 2.2rem);
  margin-bottom: 25px;
}

.next-container > p {
  font-size: 1.2rem;
  line-height: 1.8;
  color: rgba(255, 255, 255, 0.9);
  margin-bottom: 35px;
}

.next-container strong {
  color: var(--accent-yellow);
}

.learner-path-badge {
  display: inline-flex;
  align-items: center;
  gap: 12px;
  background: rgba(255, 107, 53, 0.15);
  border: 1px solid rgba(255, 107, 53, 0.3);
  padding: 18px 30px;
  border-radius: 35px;
  margin-bottom: 40px;
}

.path-icon {
  font-size: 1.8rem;
}

.path-text {
  font-size: 1.1rem;
  font-weight: 600;
  color: var(--primary-orange);
}

.featured-quote {
  background: linear-gradient(135deg, rgba(255, 107, 53, 0.1), rgba(255, 217, 61, 0.05));
  border-left: 4px solid var(--primary-orange);
  padding: 35px;
  margin: 0;
  border-radius: 0 20px 20px 0;
  font-style: italic;
  font-size: 1.25rem;
  line-height: 1.8;
  color: rgba(255, 255, 255, 0.95);
  text-align: left;
}

/* CTA Section */
.cta-section {
  padding: 80px 20px;
  background: var(--dark-bg);
  text-align: center;
}

.cta-container {
  max-width: 700px;
  margin: 0 auto;
}

.cta-container h2 {
  font-size: clamp(1.8rem, 4vw, 2.2rem);
  color: var(--primary-orange);
  margin-bottom: 20px;
}

.cta-container > p {
  font-size: 1.15rem;
  color: rgba(255, 255, 255, 0.8);
  margin-bottom: 40px;
  line-height: 1.8;
}

.cta-buttons {
  display: flex;
  gap: 20px;
  justify-content: center;
  flex-wrap: wrap;
}

.btn {
  padding: 16px 32px;
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

/* Responsive Design */
@media (max-width: 768px) {
  .profile-container {
    grid-template-columns: 1fr;
    text-align: center;
  }
  
  .profile-image {
    position: static;
    max-width: 250px;
    margin: 0 auto;
  }
  
  .milestones-grid,
  .projects-grid {
    grid-template-columns: 1fr;
  }
  
  .cta-buttons {
    flex-direction: column;
    align-items: center;
  }
  
  .btn {
    max-width: 300px;
    width: 100%;
    justify-content: center;
  }
}
</style>
