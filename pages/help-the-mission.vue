<template>
  <div class="help-page">
    <!-- Hero -->
    <section class="hero">
      <div class="hero-content">
        <h1>Help the Mission</h1>
        <p class="hero-subtitle">Three ways to keep free education going</p>
        <p class="byline">A note from Quan Nguyen, founder (our Guild Master)</p>
        <ImageSlot name="help-the-mission/hero" class="hero-image" priority />
      </div>
    </section>

    <!-- Letter -->
    <section class="letter-section">
      <div class="letter-card">
        <p>
          Free education doesn't mean it's free to run. Servers, tools and people's time all cost something.
        </p>
        <p>
          By luck, and maybe a small miracle, I met wonderful people who became our clients. Today their projects
          pay the running costs of the whole platform, and I'm proud of that. But that's all it covers. Most of our
          contributors aren't paid for their work on the platform, and there is little left for anything else.
        </p>
        <p>
          You may notice there's no donation button. That's on purpose. Paying for education with client work keeps
          us practical: real projects keep our skills sharp, so what we teach comes from real work, not theory.
          If we ever hit hard times, we'll ask for help openly. Donations are our fallback, not our plan.
        </p>
        <p class="letter-ask">So here's what I'm asking instead. Pick whichever fits you.</p>
      </div>
    </section>

    <!-- Ways to Help -->
    <section class="ways-section">
      <div class="ways-grid">
        <article class="way-card">
          <span class="way-number">1</span>
          <h2>Share What You Know</h2>
          <p>
            We need experts most of all, from any field, not only tech. You bring the knowledge, and our members
            turn it into lessons.
            We can't pay you yet, but you'll always be credited by name, and the lessons stay free and public,
            with no paywall, ever. We'll agree on the details together.
          </p>
          <div class="way-actions">
            <a :href="expertEmailLink" class="btn btn-primary">Email Quan</a>
            <NuxtLink to="/contact?tab=join" class="btn btn-outline">Use the Contact Form</NuxtLink>
          </div>
        </article>

        <article class="way-card">
          <span class="way-number">2</span>
          <h2>Bring Us a Project</h2>
          <p>
            Need a website, an app, an AI tool or some automation, but don't have a big budget? Neither do we,
            so let's try it together. We build a free working prototype first, launch with no development fee,
            then charge a fee for hosting, maintenance, support and occasional changes, paid monthly or quarterly.
            That fee keeps the mission running.
          </p>
          <div class="way-actions">
            <NuxtLink to="/contact" class="btn btn-primary">Tell Us About Your Idea</NuxtLink>
            <NuxtLink to="/work-with-us/service-model" class="btn btn-outline">See How It Works</NuxtLink>
          </div>
        </article>

        <article class="way-card">
          <span class="way-number">3</span>
          <h2>Spread the Word</h2>
          <p>
            If the mission speaks to you, tell people about it. Share our site, follow us on LinkedIn, or introduce
            us to someone who could help: an expert with knowledge to share, or a small business that needs a hand
            with tech.
          </p>
          <div class="way-actions">
            <a href="https://linkedin.com/company/skill-wanderer" target="_blank" rel="noopener noreferrer" class="btn btn-primary">Follow Us on LinkedIn</a>
            <a :href="introEmailLink" class="btn btn-outline">Introduce Someone</a>
          </div>
        </article>
      </div>

      <p class="closing">
        Thank you for reading this far. You can always reach me at
        <a :href="`mailto:${GUILD_MASTER_EMAIL}`">{{ GUILD_MASTER_EMAIL }}</a>.
        <span class="signature">Quan</span>
      </p>
    </section>
  </div>
</template>

<script setup lang="ts">
const GUILD_MASTER_EMAIL = 'quan.nguyen@skill-wanderer.com'
const expertEmailLink = `mailto:${GUILD_MASTER_EMAIL}?subject=${encodeURIComponent('Sharing my expertise with Skill-Wanderer')}`
const introEmailLink = `mailto:${GUILD_MASTER_EMAIL}?subject=${encodeURIComponent('An introduction for Skill-Wanderer')}`

useSEO({
  title: 'Help the Mission | Skill-Wanderer',
  description: 'No donation button, by design. Three ways to help free education: share your expertise, bring us a project, or spread the word.',
  keywords: ['help the mission', 'support free education', 'share your expertise', 'skill-wanderer', 'tech partner for small business'],
  structuredData: [
    createBreadcrumbSchema([
      { name: 'Home', url: 'https://skill-wanderer.com/' },
      { name: 'Help the Mission', url: 'https://skill-wanderer.com/help-the-mission' }
    ])
  ]
})
</script>

<style scoped>
.help-page {
  background:
    radial-gradient(circle at 12% 10%, rgba(255, 107, 53, 0.14) 0, transparent 44%),
    radial-gradient(circle at 88% 88%, rgba(255, 217, 61, 0.08) 0, transparent 48%),
    var(--dark-bg);
}

/* Hero */
.hero {
  padding: 130px 20px 48px;
}

.hero-content {
  max-width: 800px;
  margin: 0 auto;
  text-align: center;
}

.hero h1 {
  margin: 0 0 12px;
  font-size: clamp(2.5rem, 6vw, 4.5rem);
  line-height: 1.1;
  background: linear-gradient(135deg, var(--primary-orange), var(--accent-yellow));
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
}

.hero-subtitle {
  margin: 0 0 16px;
  font-size: clamp(1.1rem, 2.2vw, 1.4rem);
  font-weight: 600;
  color: #ffd9b4;
}

.byline {
  margin: 0;
  font-size: 0.95rem;
  opacity: 0.75;
}

.hero-image {
  margin-top: 36px;
}

/* Letter */
.letter-section {
  padding: 0 20px 60px;
}

.letter-card {
  max-width: 760px;
  margin: 0 auto;
  padding: 40px;
  background: var(--card-bg);
  border: 1px solid rgba(255, 107, 53, 0.2);
  border-radius: 16px;
}

.letter-card p {
  margin: 0 0 20px;
  font-size: 1.1rem;
  line-height: 1.8;
}

.letter-card p:last-child {
  margin-bottom: 0;
}

.letter-ask {
  font-weight: 600;
  color: var(--primary-orange);
}

/* Ways to help */
.ways-section {
  padding: 0 20px 80px;
}

.ways-grid {
  max-width: 1200px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 30px;
}

.way-card {
  display: flex;
  flex-direction: column;
  padding: 32px 28px;
  background: var(--card-bg);
  border: 1px solid rgba(255, 107, 53, 0.2);
  border-radius: 16px;
  transition: transform 0.3s ease, border-color 0.3s ease, background 0.3s ease;
}

.way-card:hover {
  transform: translateY(-5px);
  border-color: rgba(255, 107, 53, 0.4);
  background: var(--card-hover);
}

.way-number {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 44px;
  height: 44px;
  margin-bottom: 18px;
  border-radius: 50%;
  background: rgba(255, 107, 53, 0.15);
  color: var(--accent-yellow);
  font-weight: 800;
}

.way-card h2 {
  margin: 0 0 12px;
  font-size: 1.4rem;
  color: var(--primary-orange);
}

.way-card p {
  margin: 0 0 24px;
  line-height: 1.8;
  opacity: 0.9;
}

/* Buttons sit at the bottom so the three cards line up. */
.way-actions {
  margin-top: auto;
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
}

.way-actions .btn {
  padding: 12px 22px;
  font-size: 1rem;
}

.closing {
  max-width: 760px;
  margin: 50px auto 0;
  text-align: center;
  font-size: 1.05rem;
  line-height: 1.8;
  opacity: 0.85;
}

.signature {
  display: block;
  margin-top: 8px;
  font-style: italic;
  font-weight: 600;
  color: var(--primary-orange);
}

/* Responsive */
@media (max-width: 768px) {
  .hero {
    padding: 110px 20px 40px;
  }

  .letter-card,
  .way-card {
    padding: 28px 22px;
  }

  .way-actions {
    flex-direction: column;
  }
}
</style>
