<template>
  <div class="philosophy-page">
    <section class="hero">
      <div class="hero-content">
        <p class="eyebrow">Learning Path Philosophy</p>
        <h1>Learn. Contribute. Build. Earn.</h1>
        <p class="hero-description">
          A new way to learn tech: start for free, prove commitment through contribution,
          build on real work, and grow into meaningful opportunities.
        </p>

        <div class="hero-actions">
          <NuxtLink to="/learning-path" class="btn btn-primary">← Back to Topic Hub</NuxtLink>
          <a href="https://dojo.skill-wanderer.com/paths" class="btn btn-secondary" target="_blank" rel="noopener noreferrer">
            Explore Dojo Paths
          </a>
        </div>
      </div>
    </section>

    <section class="core-model">
      <div class="section-header">
        <h2>A System That Grows With You</h2>
        <p>Beginners become contributors. Contributors become professionals. Professionals become leaders.</p>
      </div>

      <div class="model-grid">
        <article class="model-card">
          <span class="step-badge">01</span>
          <h3>Learn for Free</h3>
          <p>Start with structured learning paths, beginner-friendly courses, and community learning groups. No cost. No barrier. No pressure.</p>
        </article>

        <article class="model-card">
          <span class="step-badge">02</span>
          <h3>Contribute to Unlock Mentorship</h3>
          <p>Instead of fixed tuition, show commitment by contributing financially, building platform features, or strengthening the community.</p>
        </article>

        <article class="model-card">
          <span class="step-badge">03</span>
          <h3>Build on Real Projects</h3>
          <p>Work with real teams, production-level products, and partner-facing outcomes so learning turns into practical experience.</p>
        </article>

        <article class="model-card">
          <span class="step-badge">04</span>
          <h3>Earn Through Growth</h3>
          <p>Top contributors can progress into revenue sharing, paid roles, mentorship, project leadership, and founder pathways.</p>
        </article>
      </div>
    </section>

    <section class="difference-section">
      <div class="section-header narrow">
        <h2>Why This Is Different</h2>
        <p>Most learning systems stop at content delivery. This one expects motion.</p>
      </div>

      <div class="difference-grid">
        <div class="difference-card caution">
          <h3>What Most Platforms Ask You To Do</h3>
          <ul>
            <li>Pay first</li>
            <li>Learn alone</li>
            <li>Hope a certificate becomes a job later</li>
          </ul>
        </div>

        <div class="difference-card promise">
          <h3>What Skill-Wanderer Asks Instead</h3>
          <ul>
            <li>Start free, but do not stay passive</li>
            <li>Replace tuition with contribution and accountability</li>
            <li>Replace fake projects with real work and real stakes</li>
          </ul>
        </div>
      </div>
    </section>

    <section class="audience-section">
      <div class="audience-card">
        <h2>Built for People Who Want More</h2>
        <p>This path is for people who are serious about learning tech, want real experience rather than theory alone, are willing to contribute instead of only consuming, and want a route that can extend beyond courses.</p>
        <div class="audience-actions">
          <NuxtLink to="/principles/pathways" class="btn btn-outline">See Learner Pathways</NuxtLink>
          <NuxtLink to="/principles/social-enterprise" class="btn btn-outline">See the Social Model</NuxtLink>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
useSEO({
  title: 'Learn. Contribute. Build. Earn. | Skill-Wanderer Learning Path',
  description: 'Explore Skill-Wanderer\'s education model: learn for free, contribute to unlock mentorship, build on real projects, and grow into earning opportunities.',
  keywords: ['learn contribute build earn', 'skill-wanderer', 'learning path philosophy', 'education model', 'real project learning']
})
</script>

<style scoped>
.philosophy-page {
  min-height: 100vh;
  background:
    radial-gradient(circle at 10% 12%, rgba(255, 107, 53, 0.16) 0, transparent 44%),
    radial-gradient(circle at 88% 86%, rgba(255, 217, 61, 0.09) 0, transparent 48%),
    linear-gradient(160deg, #111 0%, #1b1816 44%, #0d0d0d 100%);
  color: #f4f4f4;
}

.hero {
  padding: 130px 24px 74px;
}

.hero-content {
  max-width: 920px;
  margin: 0 auto;
  text-align: center;
}

.eyebrow {
  margin: 0;
  text-transform: uppercase;
  letter-spacing: 0.2em;
  color: #ffc793;
  font-size: 0.78rem;
}

h1 {
  margin: 16px 0 16px;
  font-size: clamp(2.2rem, 6vw, 4.5rem);
  line-height: 1.08;
  background: linear-gradient(135deg, #ff6b35, #ffd93d);
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
}

.hero-description {
  margin: 0 auto;
  max-width: 760px;
  font-size: clamp(1rem, 1.8vw, 1.18rem);
  line-height: 1.8;
  color: rgba(243, 243, 243, 0.9);
}

.hero-actions,
.audience-actions {
  margin-top: 28px;
  display: flex;
  justify-content: center;
  gap: 14px;
  flex-wrap: wrap;
}

.section-header {
  text-align: center;
  margin: 0 auto 34px;
  max-width: 860px;
}

.section-header h2 {
  margin: 0;
  font-size: clamp(2rem, 4vw, 3rem);
  background: linear-gradient(135deg, #ff6b35, #ffd93d);
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
}

.section-header p {
  margin: 12px 0 0;
  line-height: 1.7;
  color: rgba(243, 243, 243, 0.82);
}

.narrow {
  max-width: 720px;
}

.core-model,
.difference-section,
.audience-section {
  padding: 0 24px 84px;
}

.model-grid {
  max-width: 1200px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 24px;
}

.model-card,
.difference-card,
.audience-card {
  background: rgba(255, 255, 255, 0.04);
  border: 1px solid rgba(255, 107, 53, 0.18);
  border-radius: 22px;
  padding: 30px 26px;
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.18);
}

.step-badge {
  display: inline-flex;
  width: 50px;
  height: 50px;
  align-items: center;
  justify-content: center;
  border-radius: 999px;
  background: rgba(255, 107, 53, 0.15);
  color: #ffd93d;
  font-weight: 800;
  letter-spacing: 0.08em;
  margin-bottom: 18px;
}

.model-card h3,
.difference-card h3,
.audience-card h2 {
  margin: 0 0 14px;
  color: #ff8757;
}

.model-card p,
.audience-card p,
.difference-card li {
  margin: 0;
  line-height: 1.8;
  color: rgba(243, 243, 243, 0.88);
}

.difference-grid {
  max-width: 1000px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 24px;
}

.difference-card ul {
  margin: 0;
  padding-left: 20px;
}

.difference-card li + li {
  margin-top: 10px;
}

.caution {
  background: linear-gradient(180deg, rgba(255, 255, 255, 0.04), rgba(255, 107, 53, 0.05));
}

.promise {
  background: linear-gradient(180deg, rgba(255, 107, 53, 0.12), rgba(255, 217, 61, 0.05));
}

.audience-card {
  max-width: 900px;
  margin: 0 auto;
  text-align: center;
}

.btn {
  padding: 10px 18px;
  border-radius: 999px;
  font-weight: 600;
  text-decoration: none;
  border: 1px solid transparent;
  transition: transform 0.2s ease, opacity 0.2s ease, border-color 0.2s ease;
}

.btn:hover {
  transform: translateY(-2px);
  opacity: 0.96;
}

.btn-primary {
  background: linear-gradient(135deg, #ff6b35, #ff8848);
  color: #fff;
}

.btn-secondary,
.btn-outline {
  border-color: rgba(255, 199, 147, 0.55);
  color: #ffd9b4;
}

@media (max-width: 768px) {
  .hero {
    padding: 118px 20px 60px;
  }

  .core-model,
  .difference-section,
  .audience-section {
    padding: 0 20px 72px;
  }

  .model-card,
  .difference-card,
  .audience-card {
    padding: 24px 20px;
  }
}
</style>