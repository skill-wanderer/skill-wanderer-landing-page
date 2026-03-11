<template>
  <div v-if="member">
    <!-- Hero Section with integrated profile -->
    <section class="hero">
      <div class="hero-content">
        <NuxtLink to="/team" class="back-link">← Back to Development Team</NuxtLink>
        
        <div class="profile-header">
          <div class="avatar-wrapper">
            <img
              :src="member.avatar"
              :alt="member.name"
              class="profile-photo"
              @error="onImageError"
            />
            <div class="badge-ribbon">{{ member.badge }}</div>
          </div>
          
          <div class="profile-headline">
            <h1>{{ member.name }}</h1>
            <p class="role-title">{{ member.role }}</p>
            <p class="tagline">{{ member.tagline }}</p>
            <div class="hero-meta">
              <span class="meta-tag">📍 {{ member.location }}</span>
              <span class="meta-tag">💼 {{ member.title }}</span>
              <a
                v-if="member.github"
                :href="member.github"
                target="_blank"
                rel="noopener noreferrer"
                class="meta-tag link-tag"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>
                GitHub
              </a>
              <a
                v-if="member.linkedin"
                :href="member.linkedin"
                target="_blank"
                rel="noopener noreferrer"
                class="meta-tag link-tag"
              >🔗 LinkedIn</a>
            </div>
          </div>
        </div>
      </div>
      <svg class="hero-wave" viewBox="0 0 1200 120" preserveAspectRatio="none">
        <path d="M0,60 C300,100 600,20 900,60 C1050,80 1150,50 1200,60 L1200,120 L0,120 Z" fill="var(--darker-bg)" />
      </svg>
    </section>

    <!-- Bio Section -->
    <section class="bio-section">
      <div class="bio-container">
        <div class="section-icon-header">
          <span class="icon-circle">📖</span>
          <h2>The Story</h2>
        </div>
        <p class="bio-text">{{ member.bio }}</p>
      </div>
    </section>

    <!-- Skills Section -->
    <section class="skills-section">
      <div class="skills-container">
        <div class="section-icon-header">
          <span class="icon-circle">🛠️</span>
          <h2>Skills & Expertise</h2>
        </div>
        <div class="skills-grid">
          <div v-for="(skill, index) in member.skills" :key="skill" class="skill-tag" :style="{ animationDelay: `${index * 0.1}s` }">
            {{ skill }}
          </div>
        </div>
      </div>
    </section>

    <!-- Contributions Section -->
    <section class="contributions-section">
      <div class="contributions-container">
        <div class="section-icon-header">
          <span class="icon-circle">🏗️</span>
          <h2>Key Contributions</h2>
        </div>
        <div class="contributions-timeline">
          <div v-for="(contribution, index) in member.contributions" :key="index" class="timeline-item">
            <div class="timeline-dot"></div>
            <div class="timeline-content">
              <p>{{ contribution }}</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- CTA Section -->
    <section class="cta-section">
      <div class="cta-container">
        <h2>Want to Join the Team?</h2>
        <p>
          Skill-Wanderer is open source and community-driven. Contribute to the project
          and help shape the future of free tech education.
        </p>
        <div class="cta-buttons">
          <a href="https://github.com/skill-wanderer" target="_blank" rel="noopener noreferrer" class="btn btn-primary">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>
            Visit GitHub Organization
          </a>
          <NuxtLink to="/contact" class="btn btn-secondary">
            Get in Touch
          </NuxtLink>
        </div>
      </div>
    </section>
  </div>

  <!-- 404 fallback -->
  <div v-else class="not-found">
    <section class="hero hero-minimal">
      <div class="hero-content">
        <h1>Team Member Not Found</h1>
        <p class="tagline">This team member doesn't exist yet.</p>
        <NuxtLink to="/team" class="btn btn-primary">← Back to Team</NuxtLink>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import { useSEO } from '~/composables/useSEO'
import { teamMembers } from '~/data/team'

const route = useRoute()
const slug = route.params.slug as string

const member = teamMembers.find((m) => m.slug === slug)

if (member) {
  useSEO({
    title: `${member.name} - ${member.role} | Skill-Wanderer`,
    description: `Meet ${member.name}, ${member.role} at Skill-Wanderer. ${member.tagline}`,
    keywords: [member.name, member.role, 'team', 'skill-wanderer'],
  })
} else {
  useSEO({
    title: 'Team Member Not Found - Skill-Wanderer',
    description: 'The requested team member was not found.',
  })
}

const onImageError = (e: Event) => {
  const img = e.target as HTMLImageElement
  img.src = '/placeholder-avatar.svg'
}
</script>

<style scoped>
/* ============ HERO ============ */
.hero {
  position: relative;
  background: radial-gradient(ellipse at 20% 50%, rgba(255, 107, 53, 0.2) 0%, transparent 60%),
              radial-gradient(ellipse at 80% 20%, rgba(255, 217, 61, 0.12) 0%, transparent 50%),
              linear-gradient(160deg, #1e1408 0%, var(--darker-bg) 40%, #0d0d12 100%);
  padding: 110px 20px 100px;
  overflow: hidden;
}

.hero::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23FF6B35' fill-opacity='0.03'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
  pointer-events: none;
}

.hero-content {
  max-width: 900px;
  margin: 0 auto;
  position: relative;
  z-index: 1;
}

.hero-wave {
  position: absolute;
  bottom: -1px;
  left: 0;
  width: 100%;
  height: 60px;
}

.back-link {
  display: inline-block;
  color: rgba(255, 255, 255, 0.6);
  text-decoration: none;
  font-size: 0.95rem;
  margin-bottom: 40px;
  padding: 8px 16px;
  border-radius: 8px;
  transition: all 0.3s ease;
  background: rgba(255, 255, 255, 0.05);
}

.back-link:hover {
  color: var(--primary-orange);
  background: rgba(255, 107, 53, 0.1);
}

/* Profile Header */
.profile-header {
  display: flex;
  align-items: center;
  gap: 50px;
}

.avatar-wrapper {
  position: relative;
  flex-shrink: 0;
}

.profile-photo {
  width: 180px;
  height: 180px;
  border-radius: 50%;
  object-fit: cover;
  border: 4px solid rgba(255, 107, 53, 0.4);
  box-shadow: 0 0 0 8px rgba(255, 107, 53, 0.08),
              0 20px 60px rgba(0, 0, 0, 0.5);
  transition: all 0.4s ease;
}

.profile-photo:hover {
  border-color: var(--primary-orange);
  box-shadow: 0 0 0 8px rgba(255, 107, 53, 0.15),
              0 20px 60px rgba(0, 0, 0, 0.5),
              0 0 40px rgba(255, 107, 53, 0.15);
}

.badge-ribbon {
  position: absolute;
  bottom: -8px;
  left: 50%;
  transform: translateX(-50%);
  background: linear-gradient(135deg, var(--primary-orange), var(--accent-yellow));
  color: #000;
  padding: 6px 20px;
  border-radius: 20px;
  font-weight: 700;
  font-size: 0.8rem;
  white-space: nowrap;
  box-shadow: 0 4px 15px rgba(255, 107, 53, 0.4);
}

.profile-headline {
  text-align: left;
}

.profile-headline h1 {
  font-size: clamp(2.2rem, 5vw, 3.5rem);
  font-weight: 800;
  margin-bottom: 8px;
  background: linear-gradient(135deg, #fff, rgba(255, 255, 255, 0.85));
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  line-height: 1.15;
}

.role-title {
  font-size: 1.25rem;
  color: var(--primary-orange);
  font-weight: 600;
  margin-bottom: 6px;
}

.tagline {
  font-size: 1.1rem;
  color: rgba(255, 255, 255, 0.6);
  margin-bottom: 20px;
  font-style: italic;
}

.hero-meta {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
}

.meta-tag {
  background: rgba(255, 255, 255, 0.07);
  backdrop-filter: blur(4px);
  color: rgba(255, 255, 255, 0.8);
  padding: 7px 16px;
  border-radius: 20px;
  font-size: 0.85rem;
  text-decoration: none;
  border: 1px solid rgba(255, 255, 255, 0.08);
  transition: all 0.3s ease;
  display: inline-flex;
  align-items: center;
  gap: 6px;
}

.link-tag:hover {
  background: rgba(255, 107, 53, 0.15);
  border-color: rgba(255, 107, 53, 0.3);
  color: var(--primary-orange);
}

/* ============ SECTION SHARED ============ */
.section-icon-header {
  display: flex;
  align-items: center;
  gap: 15px;
  margin-bottom: 30px;
}

.icon-circle {
  font-size: 1.6rem;
  width: 50px;
  height: 50px;
  background: linear-gradient(135deg, rgba(255, 107, 53, 0.15), rgba(255, 217, 61, 0.08));
  border: 1px solid rgba(255, 107, 53, 0.2);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
}

.section-icon-header h2 {
  font-size: clamp(1.6rem, 3.5vw, 2rem);
  color: var(--primary-orange);
  margin: 0;
}

/* ============ BIO ============ */
.bio-section {
  padding: 70px 20px;
  background: var(--darker-bg);
}

.bio-container {
  max-width: 800px;
  margin: 0 auto;
}

.bio-text {
  font-size: 1.15rem;
  line-height: 2;
  color: rgba(255, 255, 255, 0.82);
  padding: 30px 35px;
  background: rgba(255, 255, 255, 0.02);
  border-left: 3px solid var(--primary-orange);
  border-radius: 0 12px 12px 0;
}

/* ============ SKILLS ============ */
.skills-section {
  padding: 70px 20px;
  background: var(--dark-bg);
}

.skills-container {
  max-width: 800px;
  margin: 0 auto;
}

.skills-grid {
  display: flex;
  flex-wrap: wrap;
  gap: 14px;
}

.skill-tag {
  background: linear-gradient(135deg, rgba(255, 107, 53, 0.12), rgba(255, 217, 61, 0.06));
  border: 1px solid rgba(255, 107, 53, 0.25);
  color: rgba(255, 255, 255, 0.9);
  padding: 12px 24px;
  border-radius: 30px;
  font-size: 0.95rem;
  font-weight: 500;
  transition: all 0.3s ease;
  animation: fadeInUp 0.5s ease both;
}

.skill-tag:hover {
  border-color: var(--primary-orange);
  background: rgba(255, 107, 53, 0.18);
  transform: translateY(-3px);
  box-shadow: 0 6px 20px rgba(255, 107, 53, 0.15);
}

@keyframes fadeInUp {
  from { opacity: 0; transform: translateY(10px); }
  to { opacity: 1; transform: translateY(0); }
}

/* ============ CONTRIBUTIONS (Timeline) ============ */
.contributions-section {
  padding: 70px 20px;
  background: var(--darker-bg);
}

.contributions-container {
  max-width: 800px;
  margin: 0 auto;
}

.contributions-timeline {
  position: relative;
  padding-left: 30px;
}

.contributions-timeline::before {
  content: '';
  position: absolute;
  left: 7px;
  top: 0;
  bottom: 0;
  width: 2px;
  background: linear-gradient(to bottom, var(--primary-orange), rgba(255, 107, 53, 0.1));
}

.timeline-item {
  position: relative;
  margin-bottom: 25px;
}

.timeline-item:last-child {
  margin-bottom: 0;
}

.timeline-dot {
  position: absolute;
  left: -26px;
  top: 18px;
  width: 12px;
  height: 12px;
  border-radius: 50%;
  background: var(--primary-orange);
  box-shadow: 0 0 0 4px rgba(255, 107, 53, 0.2);
}

.timeline-content {
  background: rgba(255, 255, 255, 0.03);
  border: 1px solid rgba(255, 107, 53, 0.12);
  border-radius: 12px;
  padding: 18px 24px;
  transition: all 0.3s ease;
}

.timeline-content:hover {
  border-color: rgba(255, 107, 53, 0.35);
  background: rgba(255, 107, 53, 0.04);
}

.timeline-content p {
  font-size: 1.05rem;
  color: rgba(255, 255, 255, 0.85);
  line-height: 1.7;
  margin: 0;
}

/* ============ CTA ============ */
.cta-section {
  padding: 80px 20px;
  background: linear-gradient(135deg, rgba(255, 107, 53, 0.08) 0%, transparent 100%);
  text-align: center;
}

.cta-container {
  max-width: 700px;
  margin: 0 auto;
}

.cta-container h2 {
  font-size: clamp(1.8rem, 4vw, 2.3rem);
  color: var(--primary-orange);
  margin-bottom: 15px;
}

.cta-container > p {
  font-size: 1.15rem;
  color: rgba(255, 255, 255, 0.7);
  margin-bottom: 35px;
  line-height: 1.8;
}

.cta-buttons {
  display: flex;
  gap: 16px;
  justify-content: center;
  flex-wrap: wrap;
}

/* ============ BUTTONS ============ */
.btn {
  padding: 14px 28px;
  border: none;
  border-radius: 50px;
  font-size: 1rem;
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
  box-shadow: 0 8px 30px rgba(255, 107, 53, 0.4);
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

/* ============ NOT FOUND ============ */
.hero-minimal {
  min-height: 60vh;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
}

/* ============ RESPONSIVE ============ */
@media (max-width: 768px) {
  .hero {
    padding: 100px 20px 80px;
  }

  .profile-header {
    flex-direction: column;
    text-align: center;
    gap: 30px;
  }

  .profile-headline {
    text-align: center;
  }

  .hero-meta {
    justify-content: center;
  }

  .profile-photo {
    width: 140px;
    height: 140px;
  }

  .bio-text {
    padding: 20px;
    font-size: 1.05rem;
  }

  .skills-grid {
    justify-content: center;
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
