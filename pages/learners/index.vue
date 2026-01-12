<template>
  <div>
    <!-- Hero Section -->
    <section class="hero">
      <div class="hero-content">
        <h1>Our Learners</h1>
        <p class="tagline">Meet the Wanderers on Their Journey</p>
        <p class="hero-description">
          Every learner has a unique story. Here we celebrate the amazing individuals who have 
          chosen to grow with Skill-Wanderer, embracing challenges and transforming their lives and careers.
        </p>
      </div>
    </section>

    <!-- Featured Learners Grid -->
    <section class="learners-grid-section">
      <div class="learners-container">
        <h2 class="section-title">Featured Learners</h2>
        
        <div class="learners-grid">
          <!-- Rei Reltroner Card -->
          <NuxtLink to="/learners/rei-reltroner" class="learner-card featured">
            <div class="first-badge">⭐ First Learner</div>
            <div class="learner-avatar">
              <img src="/learners/Rei-Reltroner.jpeg" alt="Rei Reltroner" class="avatar-image" />
            </div>
            <div class="learner-info">
              <h3>Rei Reltroner</h3>
              <p class="learner-realname">(Raidan Malik Sandra)</p>
              <p class="learner-tagline">Sailing Through the Storm</p>
              <div class="learner-meta">
                <span>📍 Indonesia</span>
                <span>💼 Software Developer & Founder</span>
              </div>
              <div class="learner-path">
                <span class="path-badge">🔍 QA / Tester Path</span>
              </div>
            </div>
            <div class="view-story">
              View Full Story →
            </div>
          </NuxtLink>

          <!-- Placeholder Cards -->
          <div class="learner-card placeholder">
            <div class="learner-avatar">
              <div class="avatar-placeholder">
                <span>👨‍💻</span>
              </div>
            </div>
            <div class="learner-info">
              <h3>Your Story</h3>
              <p class="learner-tagline">Could Be Next</p>
              <p class="placeholder-text">Join our community and start your journey</p>
            </div>
          </div>

          <div class="learner-card placeholder">
            <div class="learner-avatar">
              <div class="avatar-placeholder">
                <span>👩‍💻</span>
              </div>
            </div>
            <div class="learner-info">
              <h3>Coming Soon</h3>
              <p class="learner-tagline">More Wanderers</p>
              <p class="placeholder-text">We're growing our community every day</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Join the Community Section -->
    <section class="join-community">
      <div class="join-container">
        <h2>Become Part of Our Learning Community</h2>
        <p>
          Start your learning journey today and join a community of passionate learners 
          who support each other on the path to mastery. Your story could be featured here.
        </p>
        <div class="cta-buttons">
          <NuxtLink to="/learning-path" class="btn btn-primary">
            Explore Learning Paths
          </NuxtLink>
          <NuxtLink to="/contact" class="btn btn-secondary">
            Get in Touch
          </NuxtLink>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import { useSEO } from '~/composables/useSEO'

useSEO({
  title: 'Our Learners - Skill-Wanderer',
  description: 'Meet the learners who are growing with Skill-Wanderer. Discover their stories, progress, and achievements on their learning journeys.',
  keywords: ['learners', 'students', 'success stories', 'learning community', 'Rei Reltroner', 'skill-wanderer'],
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

.hero h1 {
  font-size: clamp(2.5rem, 6vw, 4rem);
  font-weight: 800;
  margin-bottom: 20px;
  background: linear-gradient(135deg, var(--primary-orange), var(--accent-yellow));
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  line-height: 1.2;
}

.tagline {
  font-size: clamp(1.2rem, 3vw, 1.6rem);
  color: var(--light-text);
  margin-bottom: 30px;
  opacity: 0.9;
  font-style: italic;
}

.hero-description {
  font-size: 1.1rem;
  line-height: 1.8;
  opacity: 0.8;
  max-width: 700px;
  margin: 0 auto;
}

/* Learners Grid Section */
.learners-grid-section {
  padding: 80px 20px;
  background: var(--darker-bg);
}

.learners-container {
  max-width: 1200px;
  margin: 0 auto;
}

.section-title {
  font-size: clamp(2rem, 4vw, 2.5rem);
  color: var(--primary-orange);
  text-align: center;
  margin-bottom: 50px;
}

.learners-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
  gap: 30px;
}

.learner-card {
  background: var(--card-bg);
  border: 1px solid rgba(255, 107, 53, 0.2);
  border-radius: 20px;
  padding: 35px;
  text-decoration: none;
  color: inherit;
  transition: all 0.3s ease;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
}

.learner-card.featured {
  border-color: rgba(255, 107, 53, 0.4);
  background: linear-gradient(135deg, rgba(255, 107, 53, 0.08), rgba(255, 217, 61, 0.03));
}

.learner-card.featured:hover {
  transform: translateY(-8px);
  border-color: var(--primary-orange);
  box-shadow: 0 15px 40px rgba(255, 107, 53, 0.2);
}

.learner-card.placeholder {
  border-style: dashed;
  opacity: 0.7;
}

.learner-card.placeholder:hover {
  opacity: 0.85;
  border-color: var(--primary-orange);
}

.first-badge {
  position: absolute;
  top: -12px;
  left: 50%;
  transform: translateX(-50%);
  background: linear-gradient(135deg, var(--primary-orange), var(--accent-yellow));
  color: #000;
  padding: 8px 20px;
  border-radius: 20px;
  font-weight: 700;
  font-size: 0.85rem;
  white-space: nowrap;
}

.learner-avatar {
  margin-bottom: 25px;
  margin-top: 15px;
}

.avatar-image {
  width: 120px;
  height: 120px;
  border: 3px solid rgba(255, 107, 53, 0.3);
  border-radius: 50%;
  object-fit: cover;
  transition: all 0.3s ease;
}

.learner-card.featured:hover .avatar-image {
  border-color: var(--primary-orange);
  transform: scale(1.05);
  box-shadow: 0 8px 25px rgba(255, 107, 53, 0.3);
}

.avatar-placeholder {
  width: 120px;
  height: 120px;
  background: linear-gradient(135deg, rgba(255, 107, 53, 0.15), rgba(255, 217, 61, 0.08));
  border: 3px solid rgba(255, 107, 53, 0.3);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 3.5rem;
  transition: all 0.3s ease;
}

.learner-card.featured:hover .avatar-placeholder {
  border-color: var(--primary-orange);
  transform: scale(1.05);
}

.learner-info h3 {
  color: var(--primary-orange);
  font-size: 1.5rem;
  margin-bottom: 5px;
}

.learner-realname {
  color: rgba(255, 255, 255, 0.6);
  font-size: 0.95rem;
  margin-bottom: 10px;
}

.learner-tagline {
  color: var(--accent-yellow);
  font-size: 1.1rem;
  font-style: italic;
  margin-bottom: 15px;
}

.learner-meta {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  justify-content: center;
  margin-bottom: 20px;
}

.learner-meta span {
  background: rgba(255, 107, 53, 0.12);
  color: rgba(255, 255, 255, 0.85);
  padding: 6px 14px;
  border-radius: 15px;
  font-size: 0.85rem;
}

.learner-path {
  margin-bottom: 20px;
}

.path-badge {
  background: rgba(255, 107, 53, 0.15);
  border: 1px solid rgba(255, 107, 53, 0.25);
  color: var(--primary-orange);
  padding: 10px 20px;
  border-radius: 25px;
  font-size: 0.9rem;
  font-weight: 600;
}

.view-story {
  color: var(--primary-orange);
  font-weight: 600;
  font-size: 1rem;
  margin-top: auto;
  padding-top: 15px;
  border-top: 1px solid rgba(255, 107, 53, 0.15);
  width: 100%;
  transition: all 0.3s ease;
}

.learner-card.featured:hover .view-story {
  color: var(--accent-yellow);
}

.placeholder-text {
  color: rgba(255, 255, 255, 0.5);
  font-size: 0.95rem;
  margin-top: 10px;
}

/* Join Community Section */
.join-community {
  padding: 80px 20px;
  background: linear-gradient(135deg, rgba(255, 107, 53, 0.1) 0%, transparent 100%);
  text-align: center;
}

.join-container {
  max-width: 800px;
  margin: 0 auto;
}

.join-container h2 {
  font-size: clamp(2rem, 4vw, 2.5rem);
  color: var(--primary-orange);
  margin-bottom: 20px;
}

.join-container p {
  font-size: 1.2rem;
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

/* Responsive Design */
@media (max-width: 768px) {
  .learners-grid {
    grid-template-columns: 1fr;
  }
  
  .learner-meta {
    flex-direction: column;
    gap: 8px;
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
