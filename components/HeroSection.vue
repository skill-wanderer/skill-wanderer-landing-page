<template>
  <section class="hero">
    <div class="hero-content">
      <h1>Learn Tech, Savor the Journey</h1>
      <p class="tagline">Free, Practical Education That Celebrates Learning Through Failure</p>
      <p class="hero-description">
        Quality education shapes brighter futures. Skill-Wanderer integrates real-world insights
        into practical tech learning paths, creating an honest educational platform with no ads,
        no affiliate bias—just pure, passionate learning.
      </p>
      <div class="hero-cta">
        <NuxtLink to="/learners" class="btn btn-primary">
          Meet Our Learners
          <span>→</span>
        </NuxtLink>
        <a href="https://dojo.skill-wanderer.com/paths" target="_blank" rel="noopener noreferrer" class="btn btn-secondary">
          View Learning Path
        </a>
        <NuxtLink to="/principles" class="btn btn-secondary">
          Our Principles
        </NuxtLink>
      </div>
    </div>
    <svg class="wandering-path" viewBox="0 0 1200 200">
      <path class="path" d="M0,150 Q300,100 600,130 T1200,100" />
    </svg>
  </section>
</template>

<style scoped>
.hero {
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  padding: 100px 20px 60px;
  background: radial-gradient(circle at 20% 50%, rgba(255, 107, 53, 0.1) 0%, transparent 50%),
              radial-gradient(circle at 80% 50%, rgba(255, 217, 61, 0.05) 0%, transparent 50%);
}

.hero-content {
  max-width: 1200px;
  text-align: center;
  z-index: 2;
}

.hero h1 {
  font-size: clamp(2.5rem, 8vw, 5rem);
  font-weight: 800;
  margin-bottom: 20px;
  background: linear-gradient(135deg, var(--primary-orange), var(--accent-yellow));
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  animation: fadeInUp 0.8s ease-out;
}

.hero .tagline {
  font-size: clamp(1.2rem, 3vw, 1.8rem);
  color: var(--light-text);
  margin-bottom: 30px;
  opacity: 0.9;
  animation: fadeInUp 0.8s ease-out 0.2s both;
}

.hero-description {
  font-size: 1.1rem;
  max-width: 800px;
  margin: 0 auto 40px;
  opacity: 0.8;
  animation: fadeInUp 0.8s ease-out 0.4s both;
}

.hero-cta {
  display: flex;
  gap: 20px;
  justify-content: center;
  flex-wrap: wrap;
  animation: fadeInUp 0.8s ease-out 0.6s both;
}

.wandering-path {
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 200px;
  opacity: 0.3;
  pointer-events: none;
}

.path {
  stroke: var(--primary-orange);
  stroke-width: 2;
  fill: none;
  stroke-dasharray: 1000;
  stroke-dashoffset: 1000;
  animation: drawPath 3s ease-out forwards;
}

@keyframes drawPath {
  to {
    stroke-dashoffset: 0;
  }
}

@media (max-width: 768px) {
  .hero-cta {
    flex-direction: column;
    align-items: center;
  }
}
</style>
