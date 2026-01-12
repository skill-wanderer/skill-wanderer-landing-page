<template>
  <div>
    <!-- Hero Section -->
    <section class="hero">
      <div class="hero-content">
        <h1>Business Analyst Path</h1>
        <p class="tagline">Bridge Business and Technology</p>
        <p class="hero-description">
          Master the skills to translate business needs into technical solutions. Learn requirements gathering, 
          data analysis, process modeling, and stakeholder communication.
        </p>
        <div class="path-meta">
          <span class="meta-item">📋 Planned</span>
          <span class="meta-item">🔜 Coming Soon</span>
          <span class="meta-item">📝 Curriculum Subject to Change</span>
        </div>
      </div>
    </section>

    <!-- Coming Soon Section -->
    <section class="coming-soon">
      <div class="coming-soon-content">
        <div class="coming-soon-icon">📋</div>
        <h2>Path Planned</h2>
        <p class="coming-soon-description">
          We're planning a comprehensive business analysis curriculum that will equip you with 
          the skills to drive successful technology initiatives. This path is in the planning 
          phase and development will begin soon.
        </p>
        
        <div class="planned-topics">
          <h3>Planned Topics Include:</h3>
          <div class="topics-grid">
            <div class="topic-card">
              <div class="topic-icon">📝</div>
              <h4>Requirements Engineering</h4>
              <p>Elicitation, documentation, and validation of business requirements</p>
            </div>
            
            <div class="topic-card">
              <div class="topic-icon">🔄</div>
              <h4>Process Modeling</h4>
              <p>BPMN, flowcharts, and business process optimization</p>
            </div>
            
            <div class="topic-card">
              <div class="topic-icon">📊</div>
              <h4>Data Analysis</h4>
              <p>Excel, SQL basics, and data visualization for insights</p>
            </div>
            
            <div class="topic-card">
              <div class="topic-icon">👥</div>
              <h4>Stakeholder Management</h4>
              <p>Communication, facilitation, and managing expectations</p>
            </div>
            
            <div class="topic-card">
              <div class="topic-icon">📋</div>
              <h4>User Stories & Acceptance</h4>
              <p>Writing user stories, acceptance criteria, and definition of done</p>
            </div>
            
            <div class="topic-card">
              <div class="topic-icon">🛠️</div>
              <h4>BA Tools</h4>
              <p>Confluence, Miro, Lucidchart, and documentation best practices</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Stay Updated Section -->
    <section class="stay-updated">
      <div class="stay-updated-content">
        <h2>Be the First to Know</h2>
        <p>
          Join our community to get notified when the Business Analyst path launches. 
          You'll receive updates on course development and early access opportunities.
        </p>
        <div class="cta-buttons">
          <a href="/contact" class="btn btn-primary">
            Get Notified
          </a>
          <a href="/learning-path/front-end-development" class="btn btn-secondary">
            Explore Front-End Development Path
          </a>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import { useSEO } from '~/composables/useSEO'

useSEO({
  title: 'Business Analyst Path - Planned | Skill-Wanderer',
  description: 'Business Analyst learning path coming soon. Learn requirements engineering, process modeling, data analysis, and stakeholder management.',
  keywords: ['business analyst', 'requirements engineering', 'process modeling', 'data analysis', 'stakeholder management', 'skill-wanderer'],
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
  max-width: 1000px;
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
}

.hero-description {
  font-size: 1.1rem;
  line-height: 1.8;
  margin-bottom: 40px;
  opacity: 0.8;
}

.path-meta {
  display: flex;
  justify-content: center;
  gap: 30px;
  flex-wrap: wrap;
  margin-top: 40px;
}

.meta-item {
  background: var(--card-bg);
  padding: 10px 20px;
  border-radius: 25px;
  border: 1px solid rgba(255, 107, 53, 0.3);
  font-size: 0.9rem;
}

/* Coming Soon Section */
.coming-soon {
  padding: 80px 20px;
  background: var(--darker-bg);
}

.coming-soon-content {
  max-width: 1200px;
  margin: 0 auto;
  text-align: center;
}

.coming-soon-icon {
  font-size: 4rem;
  margin-bottom: 30px;
}

.coming-soon-content h2 {
  font-size: clamp(2rem, 4vw, 3rem);
  color: var(--primary-orange);
  margin-bottom: 20px;
}

.coming-soon-description {
  font-size: 1.2rem;
  opacity: 0.9;
  max-width: 800px;
  margin: 0 auto 60px;
  line-height: 1.8;
}

/* Planned Topics */
.planned-topics {
  margin-top: 60px;
}

.planned-topics h3 {
  font-size: 1.8rem;
  color: var(--primary-orange);
  margin-bottom: 40px;
}

.topics-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 30px;
}

.topic-card {
  background: var(--card-bg);
  border: 1px solid rgba(255, 107, 53, 0.2);
  border-radius: 16px;
  padding: 30px;
  text-align: center;
  transition: all 0.3s ease;
}

.topic-card:hover {
  transform: translateY(-5px);
  border-color: var(--primary-orange);
  background: var(--card-hover);
}

.topic-icon {
  font-size: 2.5rem;
  margin-bottom: 15px;
}

.topic-card h4 {
  color: var(--primary-orange);
  font-size: 1.2rem;
  margin-bottom: 10px;
}

.topic-card p {
  color: rgba(255, 255, 255, 0.7);
  font-size: 0.95rem;
  line-height: 1.6;
}

/* Stay Updated Section */
.stay-updated {
  padding: 80px 20px;
  background: linear-gradient(135deg, rgba(255, 107, 53, 0.1) 0%, transparent 100%);
  text-align: center;
}

.stay-updated-content {
  max-width: 800px;
  margin: 0 auto;
}

.stay-updated h2 {
  font-size: clamp(2rem, 4vw, 3rem);
  color: var(--primary-orange);
  margin-bottom: 20px;
}

.stay-updated p {
  font-size: 1.2rem;
  margin-bottom: 40px;
  opacity: 0.9;
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
  .path-meta {
    flex-direction: column;
    align-items: center;
  }
  
  .topics-grid {
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
