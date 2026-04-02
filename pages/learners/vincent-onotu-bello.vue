<template>
  <div>
    <!-- Hero Section -->
    <section class="hero">
      <div class="hero-content">
        <NuxtLink to="/learners" class="back-link">
          ← Back to Our Learners
        </NuxtLink>
        <div class="featured-badge">
          <span>🪨 The Stoic</span>
        </div>
        <h1>Vincent Onotu Bello</h1>
        <p class="tagline">The Stoic</p>
        <div class="hero-meta">
          <span class="meta-tag">📍 Nigeria</span>
          <span class="meta-tag">💻 Software Development</span>
          <a href="https://www.linkedin.com/in/vinbello/" target="_blank" rel="noopener noreferrer" class="meta-tag meta-link">🔗 LinkedIn</a>
        </div>
      </div>
    </section>

    <!-- Profile Section -->
    <section class="profile-section">
      <div class="profile-container">
        <div class="profile-avatar">
          <img src="/learners/Vincent-Onotu-Bello.jpeg" alt="Vincent Onotu Bello" class="profile-photo" />
        </div>

        <div class="profile-intro">
          <h2>Quiet Strength in the Midst of Chaos</h2>
          <p>
            Some learners announce their struggles. Vincent <strong>endures them in silence</strong>.
            In a country where the internet drops without warning, where electricity vanishes for hours at a time,
            and where the cost of simply living doubles overnight — Vincent shows up. He doesn't complain.
            He doesn't make excuses. He logs in, he listens, he asks his questions, and he keeps moving forward.
            He earned the title of "The Stoic" not because he feels nothing, but because he
            <strong>refuses to let hardship define his output</strong>.
          </p>
        </div>
      </div>
    </section>

    <!-- Journey Section -->
    <section class="journey-section">
      <div class="journey-container">
        <h2>🪨 Forged Under Pressure</h2>
        <p class="section-intro">
          What makes Vincent extraordinary is not what he achieves despite his circumstances — it's how he carries
          himself through them. In a world that constantly tests his resolve, he remains steady, present, and
          committed. His journey is a masterclass in perseverance with dignity.
        </p>

        <div class="milestones-grid">
          <div class="milestone-card">
            <div class="milestone-icon">🔌</div>
            <h3>Powering Through Blackouts</h3>
            <p>
              Frequent electrical blackouts are a daily reality in Nigeria. Where others would log off and wait,
              Vincent <strong>plans around the outages</strong>, charging devices when he can, studying offline
              when he must, and always returning the moment the lights come back on.
            </p>
          </div>

          <div class="milestone-card">
            <div class="milestone-icon">📡</div>
            <h3>Sailing on Weak Signals</h3>
            <p>
              With internet connectivity that most would consider unusable, Vincent still makes it to
              <strong>daily stand-up meetings</strong>. His screen may freeze, his audio may cut — but his
              presence is constant. He finds a way, every single time.
            </p>
          </div>

          <div class="milestone-card">
            <div class="milestone-icon">👨‍👩‍👧‍👦</div>
            <h3>Provider and Learner</h3>
            <p>
              Vincent works a side job to <strong>keep his family fed</strong>. He carries the weight of
              real-world responsibility on his shoulders — and still finds the energy and discipline to
              invest in his growth as a developer. That balance is nothing short of heroic.
            </p>
          </div>

          <div class="milestone-card">
            <div class="milestone-icon">🤐</div>
            <h3>Never Complains</h3>
            <p>
              Perhaps the most remarkable trait of all: Vincent <strong>never complains</strong>. He doesn't
              broadcast his struggles or ask for sympathy. He simply does the work, asks thoughtful questions,
              and lets his consistency speak louder than any words ever could.
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- Current Chapter Section -->
    <section class="next-chapter-section">
      <div class="next-container">
        <h2>🌍 Holding Steady in a Turbulent World</h2>
        <p>
          As global conflicts between the US and Israel vs Iran drive oil prices upward, the ripple effects hit
          Nigeria hard — <strong>commodity prices have doubled</strong>, making everyday life even more
          challenging. The cost of food, fuel, and internet access continues to climb. For someone already
          navigating blackouts, weak connectivity, and family responsibilities, the pressure is immense.
          Yet Vincent remains unmoved. He is currently in development, building his skills one line of code
          at a time, proving that <strong>circumstances do not determine character</strong>.
        </p>

        <div class="learner-path-badge">
          <span class="path-icon">💻</span>
          <span class="path-text">Currently In: Software Development Path</span>
        </div>

        <blockquote class="featured-quote">
          "Vincent is the quiet force you never see coming. He doesn't have the luxury of stable power,
          fast internet, or a life free from financial worry — yet he shows up every day with the same
          calm determination. We all see what he's going through. And we all know — The Stoic will sail through this."
        </blockquote>
      </div>
    </section>

    <!-- CTA Section -->
    <section class="cta-section">
      <div class="cta-container">
        <h2>Inspired by Vincent's Journey?</h2>
        <p>
          Start your own learning adventure and join a community of passionate learners
          who support each other on the path to mastery.
        </p>
        <div class="cta-buttons">
          <a href="https://dojo.skill-wanderer.com/paths" target="_blank" rel="noopener noreferrer" class="btn btn-primary">
            Explore Learning Paths
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
  title: 'Vincent Onotu Bello - The Stoic | Skill-Wanderer',
  description: 'Meet Vincent Onotu Bello, a resilient software development learner from Nigeria. Despite power blackouts, weak internet, and rising costs, The Stoic never stops showing up.',
  keywords: ['Vincent Onotu Bello', 'The Stoic', 'software development', 'Nigeria', 'resilient learner', 'success story', 'skill-wanderer'],
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

.meta-link {
  text-decoration: none;
  transition: all 0.3s ease;
}

.meta-link:hover {
  background: rgba(255, 107, 53, 0.3);
  color: white;
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

.profile-avatar {
  position: sticky;
  top: 100px;
  display: flex;
  justify-content: center;
}

.profile-photo {
  width: 250px;
  height: 250px;
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
  grid-template-columns: repeat(2, 1fr);
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

.milestone-card strong {
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

  .profile-avatar {
    position: static;
  }

  .profile-photo {
    width: 200px;
    height: 200px;
  }

  .milestones-grid {
    grid-template-columns: 1fr !important;
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
