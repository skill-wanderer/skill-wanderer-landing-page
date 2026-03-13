<template>
  <section id="platform" class="features">
    <div class="section-header">
      <h2>The Skill-Wanderer Platform</h2>
      <p>A revolutionary approach to tech education, currently in development</p>
    </div>
    <div class="features-grid">
      <div class="feature-card">
        <div class="feature-icon">🎯</div>
        <h3>Curated Learning Paths</h3>
        <p>Expert-selected resources and AI-assisted content, organized into clear pathways from beginner to advanced, always with practical application in mind.</p>
      </div>
      <div class="feature-card">
        <div class="feature-icon">💡</div>
        <h3>Learn Through Failure</h3>
        <p>We celebrate mistakes as learning opportunities. Every challenge, every "oops" moment is a valuable lesson on your journey to mastery.</p>
      </div>
      <div class="feature-card">
        <div class="feature-icon">🌟</div>
        <h3>Real-World Integration</h3>
        <p>Content directly informed by active real-world expertise and impact work, ensuring what you learn is immediately applicable in the real world.</p>
      </div>
      <div class="feature-card">
        <div class="feature-icon">🎓</div>
        <h3>100% Free Learning Content</h3>
        <p>All course content and learning materials are completely free. Human mentors and support are sustained through our social enterprise model with Social Impact Tokens.</p>
      </div>
      <div class="feature-card">
        <div class="feature-icon">🤝</div>
        <h3>Community-Driven</h3>
        <p>Join a supportive community of learners where questions are welcomed, achievements are celebrated, and everyone grows together.</p>
      </div>
      <div class="feature-card">
        <div class="feature-icon">🚀</div>
        <h3>Future Pathways</h3>
        <p>Long-term vision includes pathways for learners to join our team or launch their own ventures, fostering a cycle of growth and opportunity.</p>
      </div>
    </div>
  </section>
</template>

<style scoped>
.features {
  padding: 100px 20px;
  background: var(--darker-bg);
}

.features-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 30px;
  max-width: 1200px;
  margin: 0 auto;
}

.feature-card {
  background: var(--card-bg);
  border: 1px solid rgba(255, 107, 53, 0.2);
  border-radius: 20px;
  padding: 40px;
  transition: all 0.3s ease;
  position: relative;
  overflow: hidden;
}

.feature-card::before {
  content: '';
  position: absolute;
  top: -2px;
  left: -2px;
  right: -2px;
  bottom: -2px;
  background: linear-gradient(135deg, var(--primary-orange), transparent);
  border-radius: 20px;
  opacity: 0;
  transition: opacity 0.3s ease;
  z-index: -1;
}

.feature-card:hover {
  transform: translateY(-5px);
  background: var(--card-hover);
}

.feature-card:hover::before {
  opacity: 0.3;
}

.feature-icon {
  width: 60px;
  height: 60px;
  background: linear-gradient(135deg, var(--primary-orange), var(--deep-orange));
  border-radius: 15px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 20px;
  font-size: 24px;
}

.feature-card h3 {
  font-size: 1.5rem;
  margin-bottom: 15px;
  color: white;
}

.feature-card p {
  opacity: 0.8;
}

@media (max-width: 768px) {
  .features-grid {
    grid-template-columns: 1fr;
  }
}
</style>
