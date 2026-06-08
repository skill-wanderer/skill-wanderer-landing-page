<template>
  <div>
    <!-- Hero Section -->
    <section class="hero">
      <div class="hero-content">
        <h1>Guild Members</h1>
        <p class="tagline">The Craftspeople Behind Skill-Wanderer</p>
        <p class="hero-description">
          A guild is only as strong as the people in it. Ours is intentionally small—a tight-knit crew of
          craftspeople who build, ship, and mentor together across borders. Every member carries real
          responsibility on real projects from day one.
        </p>
        <div class="hero-cta">
          <a href="https://github.com/skill-wanderer" target="_blank" rel="noopener noreferrer" class="btn btn-primary">
            Visit Us on GitHub
            <span>→</span>
          </a>
        </div>
      </div>
    </section>

    <!-- Guild Philosophy Intro -->
    <section class="guild-philosophy">
      <div class="philosophy-container">
        <h2>Small by Design</h2>
        <p>
          We don't scale the team—we scale the craft. Three members isn't a limitation; it's a deliberate
          choice. In a small guild, everyone builds, everyone ships, and everyone mentors. There are no
          passengers. Each person's work is visible, meaningful, and directly tied to the guild's mission.
          As the guild grows, it will grow one craftsperson at a time—each one chosen for their commitment
          to the work, not to fill a seat.
        </p>
      </div>
    </section>

    <!-- Team Grid Section -->
    <section class="team-grid-section">
      <div class="team-container">
        <h2 class="section-title">Active Guild Members</h2>

        <div class="team-grid">
          <NuxtLink
            v-for="member in teamMembers"
            :key="member.slug"
            :to="`/team/${member.slug}`"
            class="team-card"
          >
            <div class="member-badge">{{ member.badge }}</div>
            <div class="member-avatar">
              <img
                :src="member.avatar"
                :alt="member.name"
                class="avatar-image"
                @error="onImageError"
              />
            </div>
            <div class="member-info">
              <h3>{{ member.name }}</h3>
              <p class="member-role">{{ member.role }}</p>
              <p class="member-tagline">{{ member.tagline }}</p>
              <div class="member-meta">
                <span>📍 {{ member.location }}</span>
                <span>💼 {{ member.title }}</span>
              </div>
            </div>
            <div class="view-profile">
              View Profile →
            </div>
          </NuxtLink>
        </div>

        <div class="join-team-notice">
          <p>
            🌍 We're always looking for passionate contributors! Skill-Wanderer is open source and community-driven.
          </p>
          <a href="https://github.com/skill-wanderer" target="_blank" rel="noopener noreferrer" class="btn btn-secondary btn-small">
            Contribute on GitHub →
          </a>
        </div>
      </div>
    </section>

    <!-- Open Source Section -->
    <section class="open-source-section">
      <div class="open-source-container">
        <h2>Built in the Open</h2>
        <p>
          Skill-Wanderer is proudly open source. Every line of code, every design decision, and every learning
          resource is built transparently. We believe in the power of community collaboration to create
          something greater than any individual could alone.
        </p>
        <div class="cta-buttons">
          <a href="https://github.com/skill-wanderer" target="_blank" rel="noopener noreferrer" class="btn btn-primary">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
            </svg>
            GitHub Organization
          </a>
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
import { teamMembers } from '~/data/team'

useSEO({
  title: 'Guild Members - Skill-Wanderer',
  description: 'Meet the guild members behind Skill-Wanderer. A small, intentional team of craftspeople building free, practical tech education.',
  keywords: ['guild members', 'team', 'developers', 'open source', 'skill-wanderer', 'Quan Nguyen'],
})

const onImageError = (e: Event) => {
  const img = e.target as HTMLImageElement
  img.src = '/placeholder-avatar.svg'
}
</script>

<style scoped>
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
  margin: 0 auto 30px;
}

.hero-cta {
  display: flex;
  gap: 15px;
  justify-content: center;
  flex-wrap: wrap;
}

/* Team Grid Section */
.team-grid-section {
  padding: 80px 20px;
  background: var(--darker-bg);
}

/* Guild Philosophy */
.guild-philosophy {
  padding: 60px 20px;
  background: var(--dark-bg);
  border-bottom: 1px solid rgba(255, 107, 53, 0.08);
}

.philosophy-container {
  max-width: 760px;
  margin: 0 auto;
  text-align: center;
}

.philosophy-container h2 {
  font-size: clamp(1.6rem, 3vw, 2rem);
  color: var(--primary-orange);
  margin-bottom: 20px;
}

.philosophy-container p {
  font-size: 1.1rem;
  line-height: 1.9;
  opacity: 0.8;
  color: var(--light-text);
}

.team-container {
  max-width: 1200px;
  margin: 0 auto;
}

.section-title {
  font-size: clamp(2rem, 4vw, 2.5rem);
  color: var(--primary-orange);
  text-align: center;
  margin-bottom: 50px;
}

.team-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
  gap: 30px;
  max-width: 1000px;
  margin: 0 auto;
}

/* Team Card */
.team-card {
  background: linear-gradient(135deg, rgba(255, 107, 53, 0.08), rgba(255, 217, 61, 0.03));
  border: 1px solid rgba(255, 107, 53, 0.4);
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

.team-card:hover {
  transform: translateY(-8px);
  border-color: var(--primary-orange);
  box-shadow: 0 15px 40px rgba(255, 107, 53, 0.2);
}

.member-badge {
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

.member-avatar {
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

.team-card:hover .avatar-image {
  border-color: var(--primary-orange);
  transform: scale(1.05);
  box-shadow: 0 8px 25px rgba(255, 107, 53, 0.3);
}

.member-info h3 {
  color: var(--primary-orange);
  font-size: 1.5rem;
  margin-bottom: 5px;
}

.member-role {
  color: var(--accent-yellow);
  font-size: 1.1rem;
  font-weight: 600;
  margin-bottom: 8px;
}

.member-tagline {
  color: rgba(255, 255, 255, 0.7);
  font-size: 0.95rem;
  font-style: italic;
  margin-bottom: 15px;
}

.member-meta {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  justify-content: center;
  margin-bottom: 20px;
}

.member-meta span {
  background: rgba(255, 107, 53, 0.12);
  color: rgba(255, 255, 255, 0.85);
  padding: 6px 14px;
  border-radius: 15px;
  font-size: 0.85rem;
}

.view-profile {
  color: var(--primary-orange);
  font-weight: 600;
  font-size: 1rem;
  margin-top: auto;
  padding-top: 15px;
  border-top: 1px solid rgba(255, 107, 53, 0.15);
  width: 100%;
  transition: all 0.3s ease;
}

.team-card:hover .view-profile {
  color: var(--accent-yellow);
}

/* Join Team Notice */
.join-team-notice {
  max-width: 900px;
  margin: 40px auto 0;
  text-align: center;
  background: linear-gradient(135deg, rgba(255, 107, 53, 0.08), rgba(255, 217, 61, 0.04));
  border: 1px dashed rgba(255, 107, 53, 0.3);
  border-radius: 15px;
  padding: 25px 30px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
}

.join-team-notice p {
  font-size: 1.1rem;
  color: rgba(255, 255, 255, 0.8);
  line-height: 1.7;
  margin: 0;
}

/* Open Source Section */
.open-source-section {
  padding: 80px 20px;
  background: linear-gradient(135deg, rgba(255, 107, 53, 0.1) 0%, transparent 100%);
  text-align: center;
}

.open-source-container {
  max-width: 800px;
  margin: 0 auto;
}

.open-source-container h2 {
  font-size: clamp(2rem, 4vw, 2.5rem);
  color: var(--primary-orange);
  margin-bottom: 20px;
}

.open-source-container p {
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

/* Buttons */
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

.btn-small {
  padding: 10px 24px;
  font-size: 0.95rem;
}

/* Responsive */
@media (max-width: 768px) {
  .team-grid {
    grid-template-columns: 1fr;
  }

  .member-meta {
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
