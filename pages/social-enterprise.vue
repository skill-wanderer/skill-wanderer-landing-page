<template>
  <div class="se-page">
    <!-- Hero -->
    <section class="hero">
      <div class="hero-content">
        <p class="eyebrow">Our Social Enterprise</p>
        <h1>From Charity to Social Enterprise</h1>
        <p class="hero-subtitle">
          How Skill-Wanderer learned to help people with limited resources in a way that keeps itself going
        </p>
        <ImageSlot name="social-enterprise/hero" class="hero-image" priority />
      </div>
    </section>

    <!-- Who it's for -->
    <section class="intro-section">
      <div class="narrow">
        <p class="lead">
          Skill-Wanderer exists for people with more drive than resources: self-learners who can't afford formal
          education or paid coaches, and small businesses that can't afford a big tech budget. Many are both. How we
          help them has changed, and this is the story of why.
        </p>
      </div>
    </section>

    <!-- The story, in three chapters -->
    <section class="story-section">
      <div class="narrow">
        <article class="chapter">
          <p class="chapter-label">Chapter 1</p>
          <h2><span aria-hidden="true">🕯️</span> Where we started: giving it all away</h2>
          <ImageSlot name="social-enterprise/charity" class="chapter-image" />
          <p>
            Skill-Wanderer began with a charity mindset. Make everything free, give guidance to anyone who asks, and
            hope goodwill keeps it going. We even built the whole platform on an old laptop and an Orange Pi.
          </p>
          <p>
            The intentions were good. But the model depended on things nobody could control: spare time, goodwill,
            and whether someone would step in to cover the costs.
          </p>
        </article>

        <article class="chapter">
          <p class="chapter-label">Chapter 2</p>
          <h2><span aria-hidden="true">⚖️</span> What we learned: good intentions aren't enough</h2>
          <p>
            Quality costs something. Human mentors, real projects, servers and tools all take real resources. When
            help depends on donations, grants or a sponsor's budget, it can stop at any moment, for reasons that have
            nothing to do with the people it serves.
          </p>
          <p>
            A purely charitable model left us two choices, and neither was good: let the quality slip, or watch the
            help run out.
          </p>
          <p class="pull-quote">
            If a mission depends on factors beyond its control, the people it serves pay the price when those factors
            change.
          </p>
        </article>

        <article class="chapter">
          <p class="chapter-label">Chapter 3</p>
          <h2><span aria-hidden="true">🌱</span> The shift: entrepreneurship for a social mission</h2>
          <ImageSlot name="social-enterprise/enterprise" class="chapter-image" />
          <p>
            So we chose social entrepreneurship: using entrepreneurship to solve social problems, with the help of
            today's technology, especially AI.
          </p>
          <p>
            AI changed what a small team can do. Websites and tools that once needed an agency budget can now be
            built quickly and well, and the servers we already run for the platform have room to spare. That lets us
            price our work for small budgets and still earn enough to keep the mission going.
          </p>
          <p>
            Instead of asking for help, we earn our way, by solving a real problem for people who are short on
            resources too. Serving them is part of the mission, not just a way to pay for it.
          </p>
        </article>
      </div>
    </section>

    <!-- Two problems, one engine -->
    <section class="problems-section">
      <div class="container">
        <div class="section-header">
          <h2>Two Problems, One Engine</h2>
          <p>We serve two kinds of people with limited resources, and our work for one keeps the help for the other going.</p>
        </div>

        <div class="problem-pair">
          <article class="problem-card">
            <p class="problem-label">For clients with small budgets</p>
            <h3>Big ideas, small budgets</h3>
            <p>
              Solo founders, freelancers, coaches, writers, small businesses and non-profits often can't afford
              agency prices, or risk a big payment up front on an idea that might not work.
            </p>
            <p class="problem-answer">
              <strong>Our answer:</strong> a free working prototype first and no development fee, then a monthly
              plan. The Care Plan is priced to your project, and the Hosting-Only Plan for simple websites is $8 a
              month, plus your own domain.
            </p>
            <NuxtLink to="/work-with-us" class="btn btn-primary">See How We Help</NuxtLink>
          </article>

          <article class="problem-card">
            <p class="problem-label">For self-learners</p>
            <h3>Learning that costs too much</h3>
            <p>
              Degrees and paid coaches cost more than most people can spend, much of what they teach is theory, and the
              AI era changes faster than anyone can keep up.
            </p>
            <p class="problem-answer">
              <strong>Our answer:</strong> free courses, honest guidance and real project experience, starting with
              <NuxtLink to="/learning-path/learning-in-the-ai-era">Learning in the AI Era</NuxtLink>. No tuition,
              ever. We only ask for your effort.
            </p>
            <NuxtLink to="/learning-path" class="btn btn-primary">Start Learning for Free</NuxtLink>
          </article>
        </div>

        <ol class="engine-loop" aria-label="How the two sides keep each other going">
          <li><span>A small business gets the tech it needs, at a price it can carry</span></li>
          <li><span>Its fees fund free education</span></li>
          <li><span>Learners grow into contributors</span></li>
          <li><span>Contributors help build the next project, under senior review</span></li>
        </ol>
        <p class="engine-note">
          <span aria-hidden="true">↻</span> Every client project helps twice: a real need gets built, and the next
          learner learns for free.
        </p>
      </div>
    </section>

    <!-- Charity mindset vs social enterprise, side by side -->
    <section class="compare-section">
      <div class="container">
        <div class="section-header">
          <h2>Why It Lasts Longer</h2>
          <p>The same goal, run on two very different engines.</p>
        </div>

        <table class="compare-table">
          <thead>
            <tr>
              <th scope="col"><span class="visually-hidden">Question</span></th>
              <th scope="col">How we started: a charity mindset</th>
              <th scope="col">How we work now: a social enterprise</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row">Where the money comes from</th>
              <td data-label="Charity mindset">Donations, grants and sponsors</td>
              <td data-label="Social enterprise">Fair fees for real work that clients value</td>
            </tr>
            <tr>
              <th scope="row">What it depends on</th>
              <td data-label="Charity mindset">Goodwill, and decisions made outside our control</td>
              <td data-label="Social enterprise">How well we serve our clients, which is up to us</td>
            </tr>
            <tr>
              <th scope="row">Who it helps</th>
              <td data-label="Charity mindset">Learners, for as long as the money lasts</td>
              <td data-label="Social enterprise">Clients with small budgets and learners, both at once</td>
            </tr>
            <tr>
              <th scope="row">When funding dries up</th>
              <td data-label="Charity mindset">The help stops too</td>
              <td data-label="Social enterprise">As long as we serve clients well, the help keeps going</td>
            </tr>
            <tr>
              <th scope="row">What keeps it practical</th>
              <td data-label="Charity mindset">Nothing ties it to real work</td>
              <td data-label="Social enterprise">What we teach comes from projects we really build</td>
            </tr>
          </tbody>
        </table>
      </div>
    </section>

    <!-- Honest about where we are -->
    <section class="honest-section">
      <div class="narrow">
        <div class="honest-card">
          <h2>Honest About Where We Are</h2>
          <p>
            Today, client work covers the running costs of the whole platform, but not yet the people who give their
            time to it, so the mission is still struggling. We still don't accept donations, and that's by design:
            the mission should stand on real work, not on luck or goodwill.
          </p>
          <p>
            That's why the first phase of our roadmap is serving enough clients with small budgets to make free
            education sustainable. We're a social enterprise in the making, and we'd rather grow steadily on work we
            control than quickly on money that could vanish.
          </p>
          <div class="honest-links">
            <NuxtLink to="/roadmap">See the three phases →</NuxtLink>
            <NuxtLink to="/help-the-mission">Ways to help the mission →</NuxtLink>
          </div>
        </div>
      </div>
    </section>

    <!-- The rules we hold ourselves to -->
    <section class="promises-section">
      <div class="container">
        <div class="section-header">
          <h2>What We Promise</h2>
          <p>A social enterprise is only as good as the rules it keeps. These are ours.</p>
        </div>

        <ul class="promise-grid">
          <li class="promise-card">
            <span class="promise-icon" aria-hidden="true">♻️</span>
            <h3>All net revenue reinvested</h3>
            <p>What we earn goes back into free education, mentorship and the community. No profit extraction, ever.</p>
          </li>
          <li class="promise-card">
            <span class="promise-icon" aria-hidden="true">🏷️</span>
            <h3>Prices built for small budgets</h3>
            <p>A free prototype first, no development fee, and monthly plans a small business can carry.</p>
          </li>
          <li class="promise-card">
            <span class="promise-icon" aria-hidden="true">📚</span>
            <h3>Learning stays free</h3>
            <p>No tuition, ever. Mentorship and income are based on contribution, which keeps things fair for everyone.</p>
          </li>
          <li class="promise-card">
            <span class="promise-icon" aria-hidden="true">🙅</span>
            <h3>No donations, by design</h3>
            <p>We earn our way through real work, so the mission never rises or falls with anyone's goodwill.</p>
          </li>
          <li class="promise-card">
            <span class="promise-icon" aria-hidden="true">💬</span>
            <h3>Honest advice, never for sale</h3>
            <p>No ads, affiliate links or paid promotions, for learners and clients alike.</p>
          </li>
          <li class="promise-card">
            <span class="promise-icon" aria-hidden="true">🤖</span>
            <h3>AI with a person in charge</h3>
            <p>AI helps us move fast and keep prices low, but a person designs every project and reviews every change.</p>
          </li>
        </ul>

        <p class="promises-link">
          <NuxtLink to="/principles">Read our 12 principles →</NuxtLink>
        </p>
      </div>
    </section>

    <!-- One door for each hero -->
    <section class="final-section">
      <div class="container">
        <h2>Be Part of It</h2>
        <p class="final-lead">Come to learn, come to build, or both. Either way, you're part of the same mission.</p>
        <div class="final-doors">
          <div class="final-door">
            <h3>Have an idea on a small budget?</h3>
            <p>
              Tell us what you want to build. We start with a free working prototype, and your project helps fund
              free education.
            </p>
            <NuxtLink to="/contact" class="btn btn-primary">Tell Us About Your Idea <span>→</span></NuxtLink>
          </div>
          <div class="final-door">
            <h3>Here to learn?</h3>
            <p>
              Start with Learning in the AI Era, or ask us where to begin. Guidance is free. We only ask for your
              effort.
            </p>
            <NuxtLink to="/learning-path" class="btn btn-primary">Start Learning for Free <span>→</span></NuxtLink>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
const PAGE_TITLE = 'From Charity to Social Enterprise | Skill-Wanderer'
const PAGE_DESCRIPTION = 'How Skill-Wanderer went from a charity mindset to social entrepreneurship: affordable tech for small budgets that keeps education free, without donations.'

useSEO({
  title: PAGE_TITLE,
  description: PAGE_DESCRIPTION,
  keywords: [
    'social enterprise',
    'social entrepreneurship',
    'charity vs social enterprise',
    'affordable website for small business',
    'free education',
    'sustainable mission',
    'skill-wanderer'
  ],
  type: 'article',
  structuredData: [
    createArticleSchema(PAGE_TITLE, PAGE_DESCRIPTION, 'https://skill-wanderer.com/social-enterprise'),
    createBreadcrumbSchema([
      { name: 'Home', url: 'https://skill-wanderer.com/' },
      { name: 'Our Social Enterprise', url: 'https://skill-wanderer.com/social-enterprise' }
    ])
  ]
})
</script>

<style scoped>
.se-page {
  background:
    radial-gradient(circle at 12% 8%, rgba(255, 107, 53, 0.12) 0, transparent 42%),
    radial-gradient(circle at 88% 60%, rgba(255, 217, 61, 0.05) 0, transparent 46%),
    var(--dark-bg);
}

.container {
  max-width: 1100px;
  margin: 0 auto;
}

.narrow {
  max-width: 800px;
  margin: 0 auto;
}

.section-header {
  text-align: center;
  max-width: 760px;
  margin: 0 auto 48px;
}

.section-header h2 {
  font-size: clamp(2rem, 4.5vw, 2.8rem);
  color: var(--primary-orange);
  margin-bottom: 14px;
}

.section-header p {
  font-size: 1.1rem;
  line-height: 1.7;
  opacity: 0.85;
}

/* Hero */
.hero {
  padding: 140px 20px 40px;
}

.hero-content {
  max-width: 960px;
  margin: 0 auto;
  text-align: center;
}

.eyebrow {
  margin: 0 0 16px;
  font-size: 0.9rem;
  font-weight: 600;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: var(--primary-orange);
}

.hero h1 {
  margin: 0 0 18px;
  font-size: clamp(2.4rem, 6vw, 4.2rem);
  font-weight: 800;
  line-height: 1.12;
  text-wrap: balance;
  background: linear-gradient(135deg, var(--primary-orange), var(--accent-yellow));
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

.hero-subtitle {
  max-width: 680px;
  margin: 0 auto;
  font-size: clamp(1.1rem, 2.2vw, 1.35rem);
  line-height: 1.6;
  color: #ffd9b4;
}

.hero-image {
  max-width: 900px;
  margin: 44px auto 0;
}

/* Intro */
.intro-section {
  padding: 30px 20px 50px;
}

.lead {
  margin: 0;
  font-size: clamp(1.1rem, 2vw, 1.3rem);
  line-height: 1.8;
  text-align: center;
  opacity: 0.92;
}

/* Story */
.story-section {
  padding: 70px 20px;
  background: var(--darker-bg);
}

.chapter + .chapter {
  margin-top: 64px;
}

.chapter-label {
  margin: 0 0 8px;
  font-size: 0.8rem;
  font-weight: 700;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  color: var(--accent-yellow);
}

.chapter h2 {
  margin: 0 0 22px;
  font-size: clamp(1.6rem, 3.5vw, 2rem);
  line-height: 1.3;
  color: var(--primary-orange);
}

.chapter-image {
  margin-bottom: 26px;
}

.chapter p:not(.chapter-label) {
  margin: 0 0 18px;
  font-size: 1.1rem;
  line-height: 1.8;
  opacity: 0.9;
}

.chapter .pull-quote {
  margin: 28px 0 0;
  padding: 22px 26px;
  border-left: 4px solid var(--primary-orange);
  border-radius: 0 12px 12px 0;
  background: rgba(255, 107, 53, 0.07);
  font-size: 1.25rem;
  font-style: italic;
  line-height: 1.6;
  color: #ffd9b4;
  opacity: 1;
}

/* Two problems, one engine */
.problems-section {
  padding: 90px 20px;
}

.problem-pair {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 24px;
  margin-bottom: 48px;
}

.problem-card {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 32px 30px;
  background: var(--card-bg);
  border: 1px solid rgba(255, 107, 53, 0.2);
  border-radius: 20px;
}

.problem-label {
  margin: 0 0 10px;
  font-size: 0.8rem;
  font-weight: 700;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  color: var(--accent-yellow);
}

.problem-card h3 {
  margin: 0 0 12px;
  font-size: 1.4rem;
  color: white;
}

.problem-card p:not(.problem-label) {
  margin: 0 0 16px;
  line-height: 1.75;
  opacity: 0.85;
}

.problem-card .problem-answer {
  flex-grow: 1;
  padding: 16px 18px;
  border-radius: 12px;
  background: rgba(76, 175, 80, 0.07);
  border: 1px solid rgba(76, 175, 80, 0.25);
  opacity: 0.95;
}

.problem-answer strong {
  color: #81c784;
}

.problem-answer a {
  color: var(--primary-orange);
  font-weight: 600;
}

.problem-card .btn {
  margin-top: 8px;
  font-size: 1rem;
  padding: 12px 22px;
}

/* The loop: four steps with an arrow in each gap, then a line that closes the circle */
.engine-loop {
  list-style: none;
  padding: 0;
  margin: 0 0 18px;
  display: grid;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  gap: 32px;
}

.engine-loop li {
  position: relative;
  display: flex;
}

.engine-loop span {
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 14px 16px;
  border-radius: 14px;
  background: rgba(255, 217, 61, 0.08);
  border: 1px solid rgba(255, 217, 61, 0.3);
  font-size: 0.95rem;
  font-weight: 600;
  line-height: 1.4;
  text-align: center;
}

.engine-loop li:not(:last-child)::after {
  content: '→';
  position: absolute;
  top: 50%;
  left: calc(100% + 16px);
  transform: translate(-50%, -50%);
  color: var(--primary-orange);
  font-weight: 700;
}

.engine-note {
  margin: 0 auto;
  max-width: 680px;
  text-align: center;
  font-size: 0.98rem;
  line-height: 1.7;
  color: var(--accent-yellow);
}

/* Comparison */
.compare-section {
  padding: 90px 20px;
  background: var(--darker-bg);
}

.compare-table {
  width: 100%;
  border-collapse: separate;
  border-spacing: 0;
  background: var(--card-bg);
  border: 1px solid rgba(255, 107, 53, 0.2);
  border-radius: 20px;
  overflow: hidden;
}

.compare-table th,
.compare-table td {
  padding: 18px 22px;
  text-align: left;
  vertical-align: top;
  line-height: 1.6;
  border-bottom: 1px solid rgba(255, 255, 255, 0.06);
}

.compare-table tbody tr:last-child th,
.compare-table tbody tr:last-child td {
  border-bottom: 0;
}

.compare-table thead th {
  font-size: 0.85rem;
  font-weight: 700;
  letter-spacing: 0.06em;
  text-transform: uppercase;
  background: rgba(255, 255, 255, 0.03);
}

.compare-table thead th:nth-child(2) {
  color: #f87171;
}

.compare-table thead th:nth-child(3) {
  color: #4ade80;
}

.compare-table tbody th {
  width: 26%;
  color: white;
  font-weight: 700;
}

.compare-table td {
  opacity: 0.88;
}

.compare-table td:last-child {
  background: rgba(76, 175, 80, 0.05);
  opacity: 1;
}

.visually-hidden {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border: 0;
}

/* Honest note */
.honest-section {
  padding: 90px 20px;
}

.honest-card {
  padding: 40px;
  border: 1px solid rgba(255, 217, 61, 0.25);
  border-left: 4px solid var(--accent-yellow);
  border-radius: 0 20px 20px 0;
  background: rgba(255, 217, 61, 0.04);
}

.honest-card h2 {
  margin: 0 0 18px;
  font-size: clamp(1.6rem, 3.5vw, 2.1rem);
  color: var(--primary-orange);
}

.honest-card p {
  margin: 0 0 18px;
  font-size: 1.08rem;
  line-height: 1.8;
  opacity: 0.9;
}

.honest-links {
  display: flex;
  flex-wrap: wrap;
  gap: 12px 28px;
  margin-top: 8px;
}

.honest-links a,
.promises-link a {
  color: var(--primary-orange);
  font-weight: 600;
  text-decoration: none;
}

.honest-links a:hover,
.promises-link a:hover {
  text-decoration: underline;
}

/* Promises */
.promises-section {
  padding: 90px 20px;
  background: var(--darker-bg);
}

.promise-grid {
  list-style: none;
  padding: 0;
  margin: 0;
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 22px;
}

.promise-card {
  padding: 28px 24px;
  background: var(--card-bg);
  border: 1px solid rgba(255, 107, 53, 0.15);
  border-radius: 18px;
  transition: all 0.3s ease;
}

.promise-card:hover {
  border-color: rgba(255, 107, 53, 0.4);
  transform: translateY(-4px);
}

.promise-icon {
  display: block;
  font-size: 2rem;
  margin-bottom: 12px;
}

.promise-card h3 {
  margin: 0 0 8px;
  font-size: 1.15rem;
  color: white;
}

.promise-card p {
  margin: 0;
  line-height: 1.7;
  opacity: 0.82;
}

.promises-link {
  margin: 36px 0 0;
  text-align: center;
}

/* Final doors */
.final-section {
  padding: 90px 20px 100px;
  text-align: center;
}

.final-section h2 {
  font-size: clamp(2rem, 5vw, 2.8rem);
  color: var(--primary-orange);
  margin-bottom: 14px;
}

.final-lead {
  max-width: 640px;
  margin: 0 auto 40px;
  font-size: 1.1rem;
  line-height: 1.8;
  opacity: 0.88;
}

.final-doors {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 24px;
  max-width: 1000px;
  margin: 0 auto;
  text-align: left;
}

.final-door {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 34px 30px;
  background: var(--card-bg);
  border: 1px solid rgba(255, 107, 53, 0.2);
  border-radius: 20px;
}

.final-door h3 {
  margin: 0 0 12px;
  font-size: 1.35rem;
  color: white;
}

.final-door p {
  flex-grow: 1;
  margin: 0 0 24px;
  line-height: 1.8;
  opacity: 0.85;
}

.final-door .btn {
  font-size: 1rem;
  padding: 13px 24px;
}

/* Responsive */
@media (max-width: 900px) {
  .promise-grid {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
}

@media (max-width: 768px) {
  .hero {
    padding: 120px 16px 32px;
  }

  .intro-section {
    padding: 24px 16px 40px;
  }

  .story-section,
  .problems-section,
  .compare-section,
  .honest-section,
  .promises-section {
    padding: 70px 16px;
  }

  .final-section {
    padding: 70px 16px 80px;
  }

  .problem-pair,
  .final-doors,
  .promise-grid {
    grid-template-columns: minmax(0, 1fr);
  }

  .engine-loop {
    grid-template-columns: minmax(0, 1fr);
    max-width: 380px;
    margin-left: auto;
    margin-right: auto;
  }

  .engine-loop li:not(:last-child)::after {
    content: '↓';
    top: calc(100% + 16px);
    left: 50%;
  }

  .honest-card {
    padding: 28px 22px;
  }

  /* The table turns into one card per question, each answer labelled. */
  .compare-table thead {
    position: absolute;
    width: 1px;
    height: 1px;
    overflow: hidden;
    clip: rect(0, 0, 0, 0);
  }

  /* Border-box, so the cells' padding stays inside the card instead of spilling past the screen edge. */
  .compare-table,
  .compare-table tbody,
  .compare-table tr,
  .compare-table th,
  .compare-table td {
    display: block;
    box-sizing: border-box;
    width: 100%;
  }

  .compare-table tbody tr {
    border-bottom: 1px solid rgba(255, 107, 53, 0.15);
  }

  .compare-table tbody tr:last-child {
    border-bottom: 0;
  }

  .compare-table tbody th {
    width: 100%;
    padding: 18px 18px 8px;
    border-bottom: 0;
  }

  .compare-table td {
    padding: 8px 18px;
    border-bottom: 0;
  }

  .compare-table td:last-child {
    padding-bottom: 18px;
  }

  .compare-table td::before {
    content: attr(data-label);
    display: block;
    margin-bottom: 2px;
    font-size: 0.75rem;
    font-weight: 700;
    letter-spacing: 0.06em;
    text-transform: uppercase;
  }

  .compare-table td:nth-of-type(1)::before {
    color: #f87171;
  }

  .compare-table td:nth-of-type(2)::before {
    color: #4ade80;
  }

  .problem-card .btn,
  .final-door .btn {
    width: 100%;
    justify-content: center;
  }
}

@media (max-width: 480px) {
  .problem-card,
  .final-door {
    padding: 26px 20px;
  }
}
</style>
