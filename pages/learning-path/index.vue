<template>
  <div>
    <!-- Hero Section -->
    <section class="hero">
      <h1>Learning Paths</h1>
      <p>
        Choose your journey and master the skills that will define your career.
        Each path is carefully designed to take you from fundamentals to professional mastery.
      </p>
      <svg class="wandering-path" viewBox="0 0 1200 150">
        <path class="path" d="M0,100 Q300,50 600,80 T1200,60" />
      </svg>
    </section>

    <!-- Learning Paths Section -->
    <section class="paths">
      <div class="paths-container">
        <div class="paths-grid">
          <!-- Software Development Roles & Career Path -->
          <a href="/learning-path/software-development-career" class="path-card path-planned" style="animation-delay: 0.05s;">
            <div class="path-header">
              <div class="path-icon">🧭</div>
              <div class="path-title">
                <h3>Software Development Roles & Career</h3>
                <p class="path-tagline">Navigate Your Tech Career Journey</p>
              </div>
            </div>
            <p class="path-description">
              Understand the tech industry landscape, explore different roles, career progressions, 
              and find the path that aligns with your goals and passions.
            </p>
            <div class="path-meta">
              <span class="meta-item">📋 Planned</span>
              <span class="meta-item">🔜 Coming Soon</span>
            </div>
            <span class="path-arrow">Learn more →</span>
          </a>

          <!-- Front-End Development Path -->
          <a href="/learning-path/front-end-development" class="path-card" style="animation-delay: 0.1s;">
            <div class="path-header">
              <div class="path-icon">🌐</div>
              <div class="path-title">
                <h3>Front-End Development</h3>
                <p class="path-tagline">Build Beautiful Web Experiences</p>
              </div>
            </div>
            <p class="path-description">
              Master front-end development from Git to modern frameworks. Learn HTML, CSS, JavaScript, 
              and build stunning, responsive web applications.
            </p>
            <div class="path-meta">
              <span class="meta-item">🎯 5 Comprehensive Courses</span>
              <span class="meta-item">🚀 Start Your Journey Today</span>
            </div>
            <span class="path-arrow">Explore this path →</span>
          </a>

          <!-- Back-End Development Path -->
          <a href="/learning-path/back-end-development" class="path-card" style="animation-delay: 0.15s;">
            <div class="path-header">
              <div class="path-icon">🖥️</div>
              <div class="path-title">
                <h3>Back-End Development</h3>
                <p class="path-tagline">Build Powerful Server-Side Applications</p>
              </div>
            </div>
            <p class="path-description">
              Master server-side programming, databases, APIs, and cloud infrastructure. Start with Git 
              and progress to building production-ready back-end systems.
            </p>
            <div class="path-meta">
              <span class="meta-item">🎯 6 Comprehensive Courses</span>
              <span class="meta-item">🔜 Coming Soon</span>
            </div>
            <span class="path-arrow">Explore this path →</span>
          </a>

          <!-- Mobile & Game Development Path -->
          <a href="/learning-path/mobile-development" class="path-card" style="animation-delay: 0.2s;">
            <div class="path-header">
              <div class="path-icon">🎮</div>
              <div class="path-title">
                <h3>Mobile & Game Development</h3>
                <p class="path-tagline">Create Games That Play Everywhere</p>
              </div>
            </div>
            <p class="path-description">
              Master game development with Dart, Flutter, and Flame. Build beautiful 2D games 
              that run on mobile, desktop, and web platforms.
            </p>
            <div class="path-meta">
              <span class="meta-item">🎯 5 Comprehensive Courses</span>
              <span class="meta-item">💎 In Development</span>
            </div>
            <span class="path-arrow">Explore this path →</span>
          </a>

          <!-- DevOps Path -->
          <a href="/learning-path/devops" class="path-card path-planned" style="animation-delay: 0.25s;">
            <div class="path-header">
              <div class="path-icon">🔄</div>
              <div class="path-title">
                <h3>DevOps</h3>
                <p class="path-tagline">Bridge Development and Operations</p>
              </div>
            </div>
            <p class="path-description">
              Master CI/CD pipelines, containerization, Kubernetes, infrastructure as code, and cloud-native 
              technologies for modern DevOps workflows.
            </p>
            <div class="path-meta">
              <span class="meta-item">📋 Planned</span>
              <span class="meta-item">🔜 Coming Soon</span>
            </div>
            <span class="path-arrow">Learn more →</span>
          </a>

          <!-- QA/Tester Path -->
          <a href="/learning-path/qa-tester" class="path-card" style="animation-delay: 0.3s;">
            <div class="path-header">
              <div class="path-icon">🔍</div>
              <div class="path-title">
                <h3>QA / Tester</h3>
                <p class="path-tagline">Ensure Quality at Every Step</p>
              </div>
            </div>
            <p class="path-description">
              Master testing methodologies from fundamentals to quality engineering. Learn black box testing, 
              grey box testing, exploratory testing, and product thinking.
            </p>
            <div class="path-meta">
              <span class="meta-item">🎯 5 Comprehensive Courses</span>
              <span class="meta-item">💎 In Development</span>
            </div>
            <span class="path-arrow">Explore this path →</span>
          </a>

          <!-- Project Management Path -->
          <a href="/learning-path/project-management" class="path-card" style="animation-delay: 0.35s;">
            <div class="path-header">
              <div class="path-icon">📊</div>
              <div class="path-title">
                <h3>Project Management</h3>
                <p class="path-tagline">Lead Teams to Success</p>
              </div>
            </div>
            <p class="path-description">
              Master PM foundations, Agile methodologies, real-world execution, and the PM mindset. 
              Learn to lead projects and scale to program management.
            </p>
            <div class="path-meta">
              <span class="meta-item">🎯 6 Comprehensive Courses</span>
              <span class="meta-item">🔜 Coming Soon</span>
            </div>
            <span class="path-arrow">Explore this path →</span>
          </a>

          <!-- Business Analyst Path -->
          <a href="/learning-path/business-analyst" class="path-card path-planned" style="animation-delay: 0.4s;">
            <div class="path-header">
              <div class="path-icon">📝</div>
              <div class="path-title">
                <h3>Business Analyst</h3>
                <p class="path-tagline">Bridge Business and Technology</p>
              </div>
            </div>
            <p class="path-description">
              Master requirements engineering, process modeling, data analysis, and stakeholder communication 
              to drive successful technology initiatives.
            </p>
            <div class="path-meta">
              <span class="meta-item">📋 Planned</span>
              <span class="meta-item">🔜 Coming Soon</span>
            </div>
            <span class="path-arrow">Learn more →</span>
          </a>

          <!-- Start-Up Foundation Path -->
          <a href="/learning-path/start-up-foundation" class="path-card path-planned" style="animation-delay: 0.45s;">
            <div class="path-header">
              <div class="path-icon">🚀</div>
              <div class="path-title">
                <h3>Start-Up Foundation</h3>
                <p class="path-tagline">Turn Ideas Into Reality</p>
              </div>
            </div>
            <p class="path-description">
              Master the essential skills to launch your own tech startup. Learn business models, MVP 
              development, fundraising, and growth strategies.
            </p>
            <div class="path-meta">
              <span class="meta-item">📋 Planned</span>
              <span class="meta-item">🔜 Coming Soon</span>
            </div>
            <span class="path-arrow">Learn more →</span>
          </a>

          <!-- Advanced Software Development Skills Path -->
          <a href="/learning-path/advanced-software-development" class="path-card path-planned" style="animation-delay: 0.48s;">
            <div class="path-header">
              <div class="path-icon">🎓</div>
              <div class="path-title">
                <h3>Advanced Software Development Skills</h3>
                <p class="path-tagline">Master the Core Foundations of Expert Engineering</p>
              </div>
            </div>
            <p class="path-description">
              Master data structures, algorithms, mathematics, computer internals, system design, 
              security fundamentals, and DevSecOps practices.
            </p>
            <div class="path-meta">
              <span class="meta-item">📋 Planned</span>
              <span class="meta-item">🔜 Coming Soon</span>
            </div>
            <span class="path-arrow">Learn more →</span>
          </a>

          <!-- Software Architecture Path -->
          <a href="/learning-path/software-architecture" class="path-card path-planned" style="animation-delay: 0.5s;">
            <div class="path-header">
              <div class="path-icon">🏛️</div>
              <div class="path-title">
                <h3>Software Architecture & Design Patterns</h3>
                <p class="path-tagline">Build Systems That Scale</p>
              </div>
            </div>
            <p class="path-description">
              Master the art of designing robust, scalable, and maintainable software systems. Learn 
              architectural patterns, design principles, and best practices.
            </p>
            <div class="path-meta">
              <span class="meta-item">📋 Planned</span>
              <span class="meta-item">🔜 Coming Soon</span>
            </div>
            <span class="path-arrow">Learn more →</span>
          </a>
        </div>
      </div>
    </section>

    <!-- Why Choose Section -->
    <section class="why-choose">
      <div class="why-choose-content">
        <h2>Why Choose Our Learning Paths?</h2>
        <p class="section-description">
          Our learning paths are designed with real-world application in mind, combining theoretical 
          foundations with practical, hands-on projects.
        </p>
        
        <div class="features-grid">
          <div class="feature-card">
            <div class="feature-icon">📚</div>
            <h4>Comprehensive Curriculum</h4>
            <p>Each path covers everything from fundamentals to advanced concepts, ensuring no gaps in your knowledge.</p>
          </div>
          
          <div class="feature-card">
            <div class="feature-icon">🛠️</div>
            <h4>Practical Projects</h4>
            <p>Apply what you learn through real-world projects that build your portfolio and demonstrate your skills.</p>
          </div>
          
          <div class="feature-card">
            <div class="feature-icon">🎓</div>
            <h4>Industry-Aligned</h4>
            <p>Our curriculum is designed with input from industry professionals to ensure relevance and employability.</p>
          </div>
          
          <div class="feature-card">
            <div class="feature-icon">🤝</div>
            <h4>Community Support</h4>
            <p>Join a community of learners and mentors who support each other throughout the learning journey.</p>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import { useSEO } from '~/composables/useSEO'

useSEO({
  title: 'Learning Paths - Skill-Wanderer',
  description: 'Choose your learning journey: Web Development, Mobile Development, or QA/Tester. Comprehensive paths from fundamentals to professional mastery.',
})
</script>

<style scoped>
/* Hero Section */
.hero {
  background: linear-gradient(135deg, #1a1a1a 0%, #2d2d2d 100%);
  padding: 120px 20px 80px;
  text-align: center;
  position: relative;
  overflow: hidden;
}

.hero h1 {
  font-size: 3.5rem;
  font-weight: 700;
  color: #ff6b35;
  margin-bottom: 20px;
  font-family: 'Playfair Display', serif;
  font-style: italic;
}

.hero p {
  font-size: 1.25rem;
  color: rgba(255, 255, 255, 0.9);
  max-width: 700px;
  margin: 0 auto 30px;
  line-height: 1.8;
}

.wandering-path {
  width: 100%;
  height: 60px;
  margin-top: 40px;
  opacity: 0.3;
}

.path {
  fill: none;
  stroke: #ff6b35;
  stroke-width: 2;
  stroke-dasharray: 1200;
  stroke-dashoffset: 1200;
  animation: drawPath 3s ease forwards;
}

@keyframes drawPath {
  to {
    stroke-dashoffset: 0;
  }
}

/* Paths Section */
.paths {
  background: #1a1a1a;
  padding: 80px 20px;
}

.paths-container {
  max-width: 1200px;
  margin: 0 auto;
}

.paths-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  gap: 30px;
}

.path-card {
  background: rgba(255, 255, 255, 0.02);
  border: 1px solid rgba(255, 107, 53, 0.2);
  border-radius: 16px;
  padding: 30px;
  text-decoration: none;
  transition: all 0.3s ease;
  display: flex;
  flex-direction: column;
  animation: fadeInUp 0.6s ease forwards;
  opacity: 0;
}

.path-card:hover {
  transform: translateY(-8px);
  border-color: #ff6b35;
  box-shadow: 0 20px 40px rgba(255, 107, 53, 0.15);
  background: rgba(255, 107, 53, 0.05);
}

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

.path-header {
  display: flex;
  align-items: flex-start;
  gap: 15px;
  margin-bottom: 20px;
}

.path-icon {
  font-size: 2.5rem;
  background: rgba(255, 107, 53, 0.1);
  padding: 15px;
  border-radius: 12px;
}

.path-title h3 {
  color: #ff6b35;
  font-size: 1.5rem;
  margin: 0;
  font-weight: 600;
}

.path-tagline {
  color: rgba(255, 255, 255, 0.7);
  font-size: 0.95rem;
  margin: 5px 0 0;
  font-style: italic;
}

.path-description {
  color: rgba(255, 255, 255, 0.8);
  line-height: 1.7;
  margin-bottom: 20px;
  flex-grow: 1;
}

.path-meta {
  display: flex;
  flex-wrap: wrap;
  gap: 15px;
  margin-bottom: 20px;
}

.meta-item {
  background: rgba(255, 107, 53, 0.1);
  color: rgba(255, 255, 255, 0.9);
  padding: 8px 16px;
  border-radius: 20px;
  font-size: 0.9rem;
}

.path-arrow {
  color: #ff6b35;
  font-weight: 500;
  display: flex;
  align-items: center;
  gap: 8px;
  transition: gap 0.3s ease;
}

.path-card:hover .path-arrow {
  gap: 15px;
}

/* Why Choose Section */
.why-choose {
  background: linear-gradient(135deg, #2d2d2d 0%, #1a1a1a 100%);
  padding: 80px 20px;
}

.why-choose-content {
  max-width: 1200px;
  margin: 0 auto;
  text-align: center;
}

.why-choose h2 {
  font-size: 2.5rem;
  color: #ff6b35;
  margin-bottom: 20px;
  font-family: 'Playfair Display', serif;
}

.section-description {
  color: rgba(255, 255, 255, 0.8);
  font-size: 1.15rem;
  max-width: 700px;
  margin: 0 auto 50px;
  line-height: 1.8;
}

.features-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 30px;
}

.feature-card {
  background: rgba(255, 255, 255, 0.02);
  border: 1px solid rgba(255, 107, 53, 0.15);
  border-radius: 12px;
  padding: 30px;
  text-align: center;
  transition: all 0.3s ease;
}

.feature-card:hover {
  border-color: rgba(255, 107, 53, 0.4);
  background: rgba(255, 107, 53, 0.05);
}

.feature-icon {
  font-size: 2.5rem;
  margin-bottom: 15px;
}

.feature-card h4 {
  color: #ff6b35;
  font-size: 1.2rem;
  margin-bottom: 12px;
}

.feature-card p {
  color: rgba(255, 255, 255, 0.7);
  line-height: 1.6;
  font-size: 0.95rem;
}

/* Responsive Design */
@media (max-width: 768px) {
  .hero h1 {
    font-size: 2.5rem;
  }
  
  .hero p {
    font-size: 1.1rem;
  }
  
  .paths-grid {
    grid-template-columns: 1fr;
  }
  
  .why-choose h2 {
    font-size: 2rem;
  }
  
  .features-grid {
    grid-template-columns: 1fr;
  }
}
</style>
