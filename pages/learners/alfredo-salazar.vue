<template>
  <div>
    <!-- Hero Section -->
    <section class="hero">
      <div class="hero-content">
        <NuxtLink to="/learners" class="back-link">
          ← Back to Our Learners
        </NuxtLink>
        <div class="featured-badge">
          <span>🔥 The Firebrand</span>
        </div>
        <h1>Alfredo Salazar</h1>
        <p class="tagline">The Firebrand</p>
        <div class="hero-meta">
          <span class="meta-tag">🗺️ Venezuela</span>
          <span class="meta-tag">🕹️ Mobile Game Development</span>
          <a href="https://www.linkedin.com/in/alfredo-salazar-175712159/" target="_blank" rel="noopener noreferrer" class="meta-tag linkedin-tag">🌐 LinkedIn</a>
        </div>
      </div>
    </section>

    <!-- Profile Section -->
    <section class="profile-section">
      <div class="profile-container">
        <div class="profile-avatar">
          <img src="/learners/Alfredo-Salazar.jpeg" alt="Alfredo Salazar" class="profile-photo" />
        </div>

        <div class="profile-intro">
          <h2>A Voice That Commands Attention</h2>
          <p>
            The first thing you notice about Alfredo is his <strong>words</strong>. He speaks with conviction,
            with clarity, and with a natural charisma that pulls people in. From the very first conversation,
            it was clear that this learner wasn't going to sit quietly in the back row — he had things to say,
            ideas to share, and a fire that refused to be contained.
          </p>
        </div>
      </div>
    </section>

    <!-- Journey Section -->
    <section class="journey-section">
      <div class="journey-container">
        <h2>📖 The Self-Made Learner</h2>
        <p class="section-intro">
          What sets Alfredo apart is his fierce independence. He doesn't wait for instructions or hand-holding.
          He charts his own course, dives headfirst into challenges, and emerges on the other side with
          knowledge that was truly earned — not simply given.
        </p>

        <div class="milestones-grid">
          <div class="milestone-card">
            <div class="milestone-icon">💬</div>
            <h3>Master of Words</h3>
            <p>
              Alfredo has a rare gift — the ability to <strong>articulate complex ideas</strong> with remarkable
              clarity. Whether explaining a concept to peers, debating an approach, or presenting his work,
              his words carry weight and his arguments are always sharp and well-constructed.
            </p>
          </div>

          <div class="milestone-card">
            <div class="milestone-icon">🐦</div>
            <h3>Fiercely Independent</h3>
            <p>
              While many learners rely on guidance at every turn, Alfredo <strong>blazes his own trail</strong>.
              He researches, experiments, and problem-solves on his own terms. This independence isn't stubbornness —
              it's a deep-rooted desire to truly understand, not just follow.
            </p>
          </div>

          <div class="milestone-card">
            <div class="milestone-icon">🔥</div>
            <h3>Relentless Drive</h3>
            <p>
              The fire in Alfredo isn't just a spark — it's a <strong>sustained blaze</strong>. He brings
              intensity and passion to everything he tackles. When he commits to learning something, he doesn't
              stop until he's mastered it on his own terms.
            </p>
          </div>

          <div class="milestone-card">
            <div class="milestone-icon">💬</div>
            <h3>Never Short on Words</h3>
            <p>
              Alfredo is never one to stay silent. He <strong>always has something to contribute</strong>,
              whether it's a question that cuts to the heart of the matter, an insight that shifts the
              conversation, or a passionate argument that challenges the status quo.
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- Current Chapter Section -->
    <section class="next-chapter-section">
      <div class="next-container">
        <h2>⛰️ Proving Himself in the Real World</h2>
        <p>
          Alfredo graduated the <strong>Mobile Game Dev Path</strong> with the same fire and independence
          that defined his entire learning journey. Now, he is working with one of our partners to gain
          real-world experience — putting his skills to the test in a professional environment where his
          words, drive, and self-reliance truly shine.
        </p>

        <div class="learner-path-badge">
          <span class="path-icon">🎮</span>
          <span class="path-text">Completed: Mobile Game Dev Path</span>
        </div>

        <blockquote class="featured-quote">
          "Alfredo is the kind of learner who doesn't need you to light the way — he carries his own torch.
          His words inspire, his independence impresses, and his fire is contagious. The firebrand has a
          future as bright as the flame he carries."
        </blockquote>
      </div>
    </section>

    <!-- CTA Section -->
    <section class="cta-section">
      <div class="cta-container">
        <h2>Inspired by Alfredo's Journey?</h2>
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
// Icons replaced with emojis
import { useSEO } from '~/composables/useSEO'

useSEO({
  title: 'Alfredo Salazar - The Firebrand | Skill-Wanderer',
  description: 'Meet Alfredo Salazar, a fiercely independent mobile game development mentee with a gift for words. Discover the story of The Firebrand who blazes his own trail at Skill-Wanderer.',
  keywords: ['Alfredo Salazar', 'The Firebrand', 'mobile game development', 'independent learner', 'success story', 'skill-wanderer'],
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

.linkedin-tag {
  text-decoration: none;
  transition: all 0.3s ease;
  cursor: pointer;
}

.linkedin-tag:hover {
  background: rgba(10, 102, 194, 0.3);
  color: #fff;
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
