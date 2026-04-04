<template>
  <div>
    <!-- Hero Section -->
    <section class="hero">
      <span class="hero-eyebrow">Work With Us</span>
      <h1>Who We Work With</h1>
      <p>
        We collaborate with organizations and builders who want to create meaningful digital systems
        and grow them over time. Our guild is best suited for those who value long-term thinking,
        open technology, and practical learning.
      </p>
      <span class="launch-badge">Is This for You?</span>
    </section>

    <!-- Audience Cards Section -->
    <section class="audience-section">
      <div class="content">
        <div class="section-header">
          <h2>Our Partners & Collaborators</h2>
          <p>
            We work across a range of contexts — from mission-driven non-profits to early-stage startups
            and independent builders. Here is where we tend to provide the most value.
          </p>
        </div>

        <div class="audience-grid">
          <div class="audience-card">
            <div class="audience-icon"><GraduationCap :size="24" :stroke-width="2" /></div>
            <h3>Education & Non-Profit Organizations</h3>
            <p>
              We support organizations building learning systems, community tools, and educational initiatives.
              Our guild approach aligns closely with mission-driven work that prioritizes accessibility, sustainability,
              and real-world impact.
            </p>
          </div>

          <div class="audience-card">
            <div class="audience-icon"><Rocket :size="24" :stroke-width="2" /></div>
            <h3>Startups</h3>
            <p>
              We work with early-stage teams developing new digital products. Through iterative
              development sprints and flexible collaboration models, we help startups validate ideas and evolve
              their systems over time.
            </p>
          </div>

          <div class="audience-card">
            <div class="audience-icon"><Building2 :size="24" :stroke-width="2" /></div>
            <h3>Organizations Building Digital Infrastructure</h3>
            <p>
              We collaborate with teams that need to build internal systems, automation tools, or scalable
              digital infrastructure. Our focus is on creating stable and maintainable systems that support
              long-term growth.
            </p>
          </div>

          <div class="audience-card">
            <div class="audience-icon"><Briefcase :size="24" :stroke-width="2" /></div>
            <h3>Small Businesses & Independent Professionals</h3>
            <p>
              We support freelancers, consultants, and small businesses looking to establish or improve their
              digital presence. This may include websites, automation tools, or lightweight applications that
              enhance operations.
            </p>
          </div>

          <div class="audience-card audience-card--highlight">
            <div class="audience-icon"><Sprout :size="24" :stroke-width="2" /></div>
            <h3>Builders & Guild Apprentices</h3>
            <p>
              For individuals exploring ideas or learning to build systems, we encourage starting with our
              free mentorship and educational resources. Our guild is designed to support independent
              learning and practical experimentation.
            </p>
            <NuxtLink to="/learning-path" class="audience-link">Explore Free Resources →</NuxtLink>
          </div>
        </div>
      </div>
    </section>

    <!-- How It Maps Section -->
    <section class="mapping-section">
      <div class="content">
        <div class="section-header">
          <h2>How We Can Help</h2>
          <p>Depending on where you are in your journey, our support looks different.</p>
        </div>

        <div class="mapping-grid">
          <div class="mapping-card">
            <div class="mapping-label">Apprentices</div>
            <div class="mapping-arrow">→</div>
            <div class="mapping-value">Free mentorship & educational resources</div>
          </div>
          <div class="mapping-card">
            <div class="mapping-label">Builders</div>
            <div class="mapping-arrow">→</div>
            <div class="mapping-value">Guild tools & community collaboration</div>
          </div>
          <div class="mapping-card">
            <div class="mapping-label">Organizations</div>
            <div class="mapping-arrow">→</div>
            <div class="mapping-value">Guild partnership & development sprints</div>
          </div>
        </div>
      </div>
    </section>

    <!-- Callout Section -->
    <section class="callout-section">
      <div class="content">
        <div class="audience-callout">
          <span class="callout-icon"><MessageCircle :size="24" :stroke-width="2" /></span>
          <div class="callout-body">
            <h3>Not sure if your project fits?</h3>
            <p>
              We are always open to discussing ideas and exploring potential collaborations.
              Feel free to reach out — no commitment required.
            </p>
          </div>
          <NuxtLink to="/contact" class="callout-link">Get in Touch</NuxtLink>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import { Briefcase, Building2, GraduationCap, MessageCircle, Rocket, Sprout } from 'lucide-vue-next'
useSEO({
  title: 'Who We Work With | Skill-Wanderer',
  description:
    'We collaborate with education organizations, startups, businesses, and independent builders. Find out if the Skill-Wanderer guild is the right partner for you.',
  image: '/cropped-skill-wanderer-logo-768x256.webp',
  keywords: ['education technology partner', 'startup software partner', 'non-profit web development', 'small business technology', 'guild collaboration'],
  structuredData: createBreadcrumbSchema([
    { name: 'Home', url: 'https://skill-wanderer.com/' },
    { name: 'Work With Us', url: 'https://skill-wanderer.com/work-with-us' },
    { name: 'Who We Work With', url: 'https://skill-wanderer.com/work-with-us/who-we-work-with' },
  ]),
})
</script>

<style scoped>
/* ── Hero ─────────────────────────────────────────── */
.hero {
  background: linear-gradient(135deg, var(--dark-bg) 0%, var(--darker-bg) 100%);
  padding: 150px 20px 80px;
  text-align: center;
  position: relative;
  overflow: hidden;
}

.hero::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background:
    radial-gradient(circle at 20% 50%, rgba(255, 107, 53, 0.12) 0%, transparent 50%),
    radial-gradient(circle at 80% 20%, rgba(255, 107, 53, 0.06) 0%, transparent 40%);
}

.hero-eyebrow {
  display: inline-block;
  font-size: 0.9rem;
  font-weight: 600;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  color: var(--primary-orange);
  opacity: 0.85;
  margin-bottom: 16px;
  position: relative;
  z-index: 1;
}

.hero h1 {
  font-size: 3.5rem;
  color: white;
  margin-bottom: 24px;
  position: relative;
  z-index: 1;
}

.hero p {
  font-size: 1.25rem;
  color: var(--light-text);
  opacity: 0.9;
  max-width: 720px;
  margin: 0 auto 32px;
  line-height: 1.8;
  position: relative;
  z-index: 1;
}

.launch-badge {
  background: linear-gradient(135deg, var(--primary-orange), var(--deep-orange));
  color: white;
  padding: 12px 30px;
  border-radius: 50px;
  font-weight: bold;
  font-size: 1rem;
  display: inline-block;
  position: relative;
  z-index: 1;
}

/* ── Shared ────────────────────────────────────────── */
.content {
  max-width: 1200px;
  margin: 0 auto;
}

.section-header {
  text-align: center;
  margin-bottom: 55px;
}

.section-header h2 {
  font-size: 2.5rem;
  color: var(--primary-orange);
  margin-bottom: 16px;
}

.section-header p {
  font-size: 1.15rem;
  opacity: 0.82;
  max-width: 680px;
  margin: 0 auto;
  line-height: 1.75;
}

/* ── Audience Section ──────────────────────────────── */
.audience-section {
  padding: 90px 20px;
  background: var(--darker-bg);
}

.audience-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 24px;
}

.audience-card {
  background: var(--card-bg);
  border: 1px solid rgba(255, 107, 53, 0.15);
  border-radius: 20px;
  padding: 32px 28px;
  transition: all 0.3s ease;
  display: flex;
  flex-direction: column;
}

.audience-card:hover {
  border-color: rgba(255, 107, 53, 0.4);
  transform: translateY(-5px);
  background: var(--card-hover);
  box-shadow: 0 12px 32px rgba(0, 0, 0, 0.2);
}

.audience-card--highlight {
  border-color: rgba(255, 107, 53, 0.25);
  background: rgba(255, 107, 53, 0.04);
}

.audience-icon {
  font-size: 2.4rem;
  margin-bottom: 16px;
  display: block;
}

.audience-card h3 {
  color: var(--primary-orange);
  font-size: 1.1rem;
  font-weight: 700;
  margin-bottom: 12px;
}

.audience-card p {
  opacity: 0.82;
  font-size: 0.95rem;
  line-height: 1.7;
  flex: 1;
  margin: 0;
}

.audience-link {
  display: inline-block;
  margin-top: 18px;
  color: var(--primary-orange);
  font-weight: 700;
  font-size: 0.92rem;
  text-decoration: none;
  transition: letter-spacing 0.2s ease;
}

.audience-link:hover {
  letter-spacing: 0.02em;
}

/* ── Mapping Section ───────────────────────────────── */
.mapping-section {
  padding: 90px 20px;
  background: var(--dark-bg);
}

.mapping-grid {
  display: flex;
  flex-direction: column;
  gap: 16px;
  max-width: 760px;
  margin: 0 auto;
}

.mapping-card {
  display: flex;
  align-items: center;
  gap: 20px;
  background: var(--card-bg);
  border: 1px solid rgba(255, 107, 53, 0.15);
  border-radius: 14px;
  padding: 22px 32px;
  transition: all 0.3s ease;
}

.mapping-card:hover {
  border-color: rgba(255, 107, 53, 0.4);
  transform: translateX(6px);
}

.mapping-label {
  font-size: 1rem;
  font-weight: 700;
  color: white;
  min-width: 140px;
}

.mapping-arrow {
  font-size: 1.4rem;
  color: var(--primary-orange);
  opacity: 0.5;
  flex-shrink: 0;
}

.mapping-value {
  opacity: 0.82;
  font-size: 0.97rem;
  line-height: 1.5;
}

/* ── Callout Section ───────────────────────────────── */
.callout-section {
  padding: 90px 20px;
  background: var(--darker-bg);
}

.audience-callout {
  display: flex;
  align-items: center;
  gap: 24px;
  background: rgba(255, 107, 53, 0.06);
  border: 1px solid rgba(255, 107, 53, 0.2);
  border-radius: 20px;
  padding: 40px 48px;
  flex-wrap: wrap;
  max-width: 900px;
  margin: 0 auto;
}

.callout-icon {
  font-size: 2.4rem;
  flex-shrink: 0;
}

.callout-body {
  flex: 1;
  min-width: 220px;
}

.callout-body h3 {
  color: white;
  font-size: 1.3rem;
  margin-bottom: 8px;
}

.callout-body p {
  opacity: 0.82;
  font-size: 1rem;
  line-height: 1.7;
  margin: 0;
}

.callout-link {
  background: linear-gradient(135deg, var(--primary-orange), var(--deep-orange));
  color: white;
  padding: 14px 32px;
  border-radius: 50px;
  font-weight: bold;
  font-size: 1rem;
  text-decoration: none;
  white-space: nowrap;
  transition: all 0.3s ease;
  flex-shrink: 0;
}

.callout-link:hover {
  transform: translateY(-2px);
  box-shadow: 0 10px 28px rgba(255, 107, 53, 0.35);
}

/* ── Responsive ────────────────────────────────────── */
@media (max-width: 1024px) {
  .audience-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (max-width: 768px) {
  .hero h1 {
    font-size: 2.4rem;
  }

  .hero p {
    font-size: 1.1rem;
  }

  .section-header h2 {
    font-size: 2rem;
  }

  .audience-grid {
    grid-template-columns: 1fr;
  }

  .mapping-card {
    flex-direction: column;
    align-items: flex-start;
    gap: 8px;
    text-align: left;
  }

  .audience-callout {
    flex-direction: column;
    text-align: center;
    padding: 30px 24px;
  }

  .callout-body {
    text-align: center;
  }
}
</style>
