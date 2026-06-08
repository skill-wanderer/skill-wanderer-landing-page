<template>
  <div>
    <!-- Hero Section -->
    <section class="hero">
      <div class="hero-content">
        <NuxtLink to="/learners" class="back-link">
          ← Back to Our Learners
        </NuxtLink>
        <div class="featured-badge">
          <span>⚔️ The Vanguard</span>
        </div>
        <h1>Thanh Nguyen</h1>
        <p class="tagline">The Vanguard</p>
        <div class="hero-meta">
          <span class="meta-tag">🗺️ Vietnam</span>
          <span class="meta-tag">🛡️ Guild Associate</span>
        </div>
      </div>
    </section>

    <!-- Profile Section -->
    <section class="profile-section">
      <div class="profile-container">
        <div class="profile-avatar">
          <img src="/learners/Thanh-Nguyen.jpeg" alt="Thanh Nguyen" class="profile-photo" />
        </div>

        <div class="profile-intro">
          <h2>A Meeting Written by Fate</h2>
          <p>
            I met Thanh while scrolling to find the next mentee for our guild associate program — and it
            felt like <strong>fate</strong>. Her LinkedIn profile simply popped up on my screen, and her
            profile and her posts were exactly what I was looking for: <strong>eager to learn and
            passionate</strong>. That is all I want from a mentee and a guild member — no more, no less.
          </p>
        </div>
      </div>
    </section>

    <!-- Journey Section -->
    <section class="journey-section">
      <div class="journey-container">
        <h2>📖 An Honest Beginning</h2>
        <p class="section-intro">
          We had a quick talk and I was honest with her. Our guild is still in its early days, so there
          will be a rocky road ahead. I could not guarantee a stable income for her — nor any income at
          all — but I could guarantee one thing: <strong>she would learn a lot with me</strong>. She
          accepted right away.
        </p>

        <div class="milestones-grid">
          <div class="milestone-card">
            <div class="milestone-icon">🔥</div>
            <h3>Eager and Passionate</h3>
            <p>
              From the very first conversation, Thanh's <strong>eagerness to learn</strong> was
              unmistakable. She doesn't wait to be told what's interesting — she goes looking for it,
              and she brings that same hunger to every task the guild puts in front of her.
            </p>
          </div>

          <div class="milestone-card">
            <div class="milestone-icon">📝</div>
            <h3>Nothing Lost in Transfer</h3>
            <p>
              Thanh is <strong>quick to jot down</strong> the knowledge the guild master shares with
              her during her work. None of that knowledge transfer has been lost — and honestly, as the
              guild master, I am very impressed.
            </p>
          </div>

          <div class="milestone-card">
            <div class="milestone-icon">⚔️</div>
            <h3>The Guild's Vanguard</h3>
            <p>
              As the guild's workload grows and the guild master must split his attention across many
              fronts, Thanh has become the <strong>vanguard</strong> on most of our recent work —
              moving first, holding the line, and clearing the path for the rest of the guild.
            </p>
          </div>

          <div class="milestone-card">
            <div class="milestone-icon">💎</div>
            <h3>Quickly Indispensable</h3>
            <p>
              In just <strong>one month</strong> of working together, Thanh has quickly become
              indispensable to the guild. The kind of teammate you didn't know you needed — until
              you can't imagine the guild without her.
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- Current Chapter Section -->
    <section class="next-chapter-section">
      <div class="next-container">
        <h2>🛡️ Why This Guild Exists</h2>
        <p>
          The AI era hasn't done passionate learners like Thanh any justice. Companies today ask for
          intern positions with at least <strong>two years of experience</strong>, and a fresh
          graduate's chance to ever earn those two years grows thinner by the day. AI is rising — sure
          — but it still needs humans to control it, and it needs <strong>experienced</strong> humans
          to do it well. That is exactly why our guild was born: to give people the experience they
          deserve.
        </p>

        <div class="learner-path-badge">
          <span class="path-icon">⚔️</span>
          <span class="path-text">Active: Guild Vanguard</span>
        </div>

        <blockquote class="featured-quote">
          "Thanh is the kind of mentee every guild master hopes to find — eager, passionate, and
          trustworthy with the work. In a single month she went from a stranger on my LinkedIn feed
          to the vanguard of the guild. The future she deserves is the one we are building together."
        </blockquote>
      </div>
    </section>

    <!-- CTA Section -->
    <section class="cta-section">
      <div class="cta-container">
        <h2>Inspired by Thanh's Journey?</h2>
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
  title: 'Thanh Nguyen - The Vanguard | Skill-Wanderer',
  description: 'Meet Thanh Nguyen, a passionate mentee and guild associate who became the Vanguard of the Skill-Wanderer guild in just one month. Discover her story.',
  keywords: ['Thanh Nguyen', 'The Vanguard', 'guild associate', 'mentee', 'success story', 'skill-wanderer'],
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

.section-intro strong {
  color: var(--accent-yellow);
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
