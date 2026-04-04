<template>
  <div class="manifesto-page">
    <!-- Hero Section -->
    <section class="hero">
      <div class="hero-content">
        <div class="manifesto-badge">Guild Document · 2026</div>
        <h1>The Guild Manifesto</h1>
        <p class="hero-tagline">Mastery. Transparency. Shared Prosperity.</p>
        <p class="hero-subtitle">Skill-Wanderer is not a software agency or an outsourcing firm. We are a High-Performance Tech Guild.</p>
      </div>
    </section>

    <!-- Intro Section -->
    <section class="intro">
      <div class="container">
        <p class="intro-text">
          We believe the traditional corporate model is obsolete—it suppresses the potential of creators and obscures value from partners. This Manifesto defines our commitment to a <span class="highlight">sovereign, meritocratic ecosystem</span> where mastery is the standard, contribution replaces tuition, and transparency is the law.
        </p>
      </div>
    </section>

    <!-- Section 1: Philosophy -->
    <section class="manifesto-section">
      <div class="container">
        <div class="section-label">01</div>
        <h2>A New Way to Learn</h2>
        <p class="section-subtitle">The Philosophy</p>
        <div class="philosophy-banner">
          <span>Learn.</span>
          <span>Contribute.</span>
          <span>Build.</span>
          <span>Earn.</span>
        </div>
        <p class="section-intro">
          Most platforms ask you to pay first, learn alone, and hope to get a job later. We do it differently. At Skill-Wanderer, you don't pay to learn — you earn your way by building.
        </p>
        <div class="principles-cards">
          <div class="principle-card">
            <div class="card-icon"><Ban :size="24" color="white" :stroke-width="2" /></div>
            <h3>Free to Start, Not Free to Stay Passive</h3>
            <p>We remove the financial barriers, but we demand commitment. The guild has no place for spectators.</p>
          </div>
          <div class="principle-card">
            <div class="card-icon"><RotateCw :size="24" color="white" :stroke-width="2" /></div>
            <h3>Contribution Replaces Tuition</h3>
            <p>Instead of charging fixed fees, we value your work, your mentorship, and your growth. What you give is what you earn.</p>
          </div>
          <div class="principle-card">
            <div class="card-icon"><Building2 :size="24" color="white" :stroke-width="2" /></div>
            <h3>Real Work Replaces Fake Projects</h3>
            <p>You won't build "todo apps." You will build production-level products for real partners, solving real problems.</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Section 2: Economic Engine -->
    <section class="manifesto-section economic-section">
      <div class="container">
        <div class="section-label">02</div>
        <h2>The Economic Engine</h2>
        <p class="section-subtitle">The 15/85 Split — 100% Financial Transparency</p>
        <p class="section-intro">
          For every project, the Net Profit is divided into two clear buckets. No hidden fees. No black boxes. Every guild member knows exactly where every coin goes.
        </p>

        <div class="split-visual">
          <div class="split-block tribute">
            <div class="split-percent">15%</div>
            <div class="split-label">Guild Tribute</div>
            <p>The lifeblood of our collective. Maintains our sovereign Kubernetes clusters, covers essential administrative costs, and <strong>directly backs our free education program</strong> so Rank 0 learners have a path to mastery at no financial cost.</p>
          </div>
          <div class="split-divider">+</div>
          <div class="split-block pool">
            <div class="split-percent">85%</div>
            <div class="split-label">Working Pool</div>
            <p>Distributed directly to the craftspeople who build the solution. Every line of code, every design decision, every quality check — rewarded transparently.</p>
          </div>
        </div>

        <h3 class="distribution-title">B. Project Role Matrix (Working Pool Distribution)</h3>
        <p class="distribution-note">For every project or sprint, the Master fixes the percentages within these ranges before work begins. The total must always equal 100% of the Working Pool.</p>
        <div class="distribution-table">
          <div class="dist-row header-row">
            <span>Role</span>
            <span>Range (%)</span>
            <span>Responsibility</span>
          </div>
          <div class="dist-row">
            <span class="role-name">The Closer <em>(Sales)</em></span>
            <span class="role-share">10% – 20%</span>
            <span>Lead gen, negotiation, and partner management.</span>
          </div>
          <div class="dist-row">
            <span class="role-name">The Architect</span>
            <span class="role-share">10% – 20%</span>
            <span>System logic, documentation, technical lead, and project management.</span>
          </div>
          <div class="dist-row highlight-row">
            <span class="role-name">The Engine <em>(Dev)</em></span>
            <span class="role-share">40% – 50%</span>
            <span>Core implementation and feature coding.</span>
          </div>
          <div class="dist-row devops-row">
            <span class="role-name">DevOps</span>
            <span class="role-share">00% – 10%</span>
            <span>Deployment, security hardening, and CI/CD.</span>
          </div>
          <div class="dist-row">
            <span class="role-name">The Shield <em>(QA)</em></span>
            <span class="role-share">10% – 20%</span>
            <span>Bug hunting, stress testing, and final audit.</span>
          </div>
        </div>
      </div>
    </section>

    <!-- Section 3: Guild Ranks -->
    <section class="manifesto-section ranks-section">
      <div class="container">
        <div class="section-label">03</div>
        <h2>The Path to Mastery</h2>
        <p class="section-subtitle">Guild Ranks — Progress determined solely by skill, consistency, and The Trials</p>
        <p class="section-intro">We do not have employees; we have Ranks.</p>
        <div class="ranks-list">
          <div class="rank-item rank-0">
            <div class="rank-badge">Rank 0</div>
            <div class="rank-content">
              <h3>Free Learner</h3>
              <p>The entry point. Curious minds learning the craft, funded by the Guild Tribute. <span class="highlight">No cost. No barrier. No pressure.</span> Just start.</p>
            </div>
          </div>
          <div class="rank-item rank-1">
            <div class="rank-badge">Rank 1</div>
            <div class="rank-content">
              <h3>Associate</h3>
              <p>Proven contributors earning project-based bounties. This is where you unlock mentorship through contribution.</p>
            </div>
          </div>
          <div class="rank-item rank-2">
            <div class="rank-badge">Rank 2</div>
            <div class="rank-content">
              <h3>Apprentice</h3>
              <p>Full-time members on an accelerated path with a base support stipend + project shares.</p>
            </div>
          </div>
          <div class="rank-item rank-3">
            <div class="rank-badge">Rank 3</div>
            <div class="rank-content">
              <h3>Journeyman</h3>
              <p>Independent professionals capable of both "closing" and "building." The guild's trusted pair of hands.</p>
            </div>
          </div>
          <div class="rank-item rank-4">
            <div class="rank-badge">Rank 4</div>
            <div class="rank-content">
              <h3>Craftsman</h3>
              <p>High-level masters of architecture and leadership. The backbone of every complex engagement.</p>
            </div>
          </div>
          <div class="rank-item rank-5">
            <div class="rank-badge">Rank 5</div>
            <div class="rank-content">
              <h3>Guild Master</h3>
              <p>Partners leading regional branches or specialized franchises. The sovereign heads of the guild's expansion.</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Section 4: The Sovereign Exchange -->
    <section class="manifesto-section sovereign-section">
      <div class="container">
        <div class="section-label">04</div>
        <h2>The Sovereign Exchange</h2>
        <p class="section-subtitle">The 20% Rule — Keeping the Guild Growing</p>
        <p class="section-intro">
          To maintain our 15% "Golden Ratio" and keep the Guild growing, all members participate in the Sovereign Exchange. This ensures that while we thrive on high-value partnerships, our internal platform and the Rank 0 education mission never stop evolving.
        </p>
        <p class="section-intro">Members choose their monthly path based on their project load:</p>

        <div class="exchange-paths">
          <div class="exchange-path path-builder">
            <div class="path-header">
              <div class="path-label-badge">A</div>
              <h3>The Builder Path</h3>
              <span class="path-tag">Time + 15%</span>
            </div>
            <p class="path-desc">This path is for members with available bandwidth to invest in the Guild's foundation.</p>
            <div class="path-details">
              <div class="path-detail">
                <span class="detail-label">The Contribution</span>
                <p>You dedicate 20% of your monthly capacity (approx. 1 day per week) to building the Skill-Wanderer platform, maintaining our sovereign infrastructure, or creating educational materials.</p>
              </div>
              <div class="path-detail">
                <span class="detail-label">The Focus</span>
                <p>The specific nature of this work is rank-based, evolving in complexity and responsibility as you ascend through the Guild.</p>
              </div>
              <div class="path-detail">
                <span class="detail-label">The Payout</span>
                <p>This path is supported by the Guild's stipend system, effectively funding your time to master new technologies while building our collective assets.</p>
              </div>
            </div>
          </div>

          <div class="exchange-path path-rainmaker">
            <div class="path-header">
              <div class="path-label-badge">B</div>
              <h3>The Rainmaker Path</h3>
              <span class="path-tag">0% Time + 20%</span>
            </div>
            <p class="path-desc">This path is for members fully utilized on high-impact commercial projects for our global partners.</p>
            <div class="path-details">
              <div class="path-detail">
                <span class="detail-label">The Contribution</span>
                <p>You dedicate 0% of your time to internal platform tasks, allowing you to focus entirely on delivery.</p>
              </div>
              <div class="path-detail">
                <span class="detail-label">The Tribute</span>
                <p>You "buy back" your time by contributing a 20% Guild Tribute (the standard 15% + a 5% "Sovereignty Surcharge") on your project shares.</p>
              </div>
              <div class="path-detail">
                <span class="detail-label">The Payout</span>
                <p>Your extra 5% contribution is used by the Treasury to fund "Internal Bounties," paying other Guild members to complete the platform and education tasks that sustain our ecosystem.</p>
              </div>
            </div>
          </div>
        </div>

        <div class="sovereign-why">
          <span class="why-icon"><Lightbulb :size="24" :stroke-width="2" /></span>
          <div>
            <h3>Why we do this</h3>
            <p>This "Work-or-Pay" model ensures the Skill-Wanderer ecosystem is anti-fragile. Whether we are in a season of heavy building or a season of high-profit delivery, our infrastructure remains sovereign and our mission to provide free education to the next generation remains funded.</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Section 5: Quality Shield -->
    <section class="manifesto-section quality-section">
      <div class="container">
        <div class="section-label">05</div>
        <h2>The Quality Shield</h2>
        <p class="section-subtitle">Stability Points — Protecting our partners and our reputation</p>
        <div class="quality-visual">
          <div class="stability-score">
            <div class="score-circle">
              <span class="score-label">Stability Score</span>
              <span class="score-range">0 — 100</span>
            </div>
          </div>
          <div class="quality-content">
            <div class="quality-item positive">
              <span class="quality-icon">↑</span>
              <div>
                <h3>High Performance</h3>
                <p>Leads to promotion and lucrative profit shares. Excellence is always rewarded within the guild.</p>
              </div>
            </div>
            <div class="quality-item negative">
              <span class="quality-icon">↓</span>
              <div>
                <h3>Backward Ranking</h3>
                <p>Failure to maintain standards or "ghosting" results in demotion. We believe in the right to fail, but we also hold the responsibility to maintain the Guild's standards.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Section 6: Disclaimer -->
    <section class="manifesto-section disclaimer-section">
      <div class="container">
        <div class="section-label">06</div>
        <h2>Disclaimer & Evolution</h2>
        <div class="disclaimer-content">
          <p>
            The Skill-Wanderer Tech Guild is a <span class="highlight">living organism</span>. Our percentages, stipends, and internal structures are subject to change at any time according to the "Guild Situation." This includes shifts in the global tech economy, infrastructure demands, and the collective needs of our members.
          </p>
          <p>
            This is not a limitation — it is a strength. A guild that cannot adapt cannot survive. What never changes are the three pillars of our covenant:
          </p>
          <div class="pillars">
            <div class="pillar">
              <span class="pillar-icon"><Swords :size="24" :stroke-width="2" /></span>
              <h3>Mastery</h3>
              <p>The standard is always excellence.</p>
            </div>
            <div class="pillar">
              <span class="pillar-icon"><Search :size="24" :stroke-width="2" /></span>
              <h3>Transparency</h3>
              <p>Every coin, every decision — visible.</p>
            </div>
            <div class="pillar">
              <span class="pillar-icon"><Handshake :size="24" :stroke-width="2" /></span>
              <h3>Shared Prosperity</h3>
              <p>Growth belongs to those who build it.</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- CTA Section -->
    <section class="cta">
      <h2>Ready to Forge Your Path?</h2>
      <p>The guild is open. The trials await. Start at Rank 0 — no cost, no barrier.</p>
      <div class="cta-buttons">
        <NuxtLink to="/learning-path/learn-contribute-build-earn" class="btn btn-primary">
          Discover the Philosophy
          <span>→</span>
        </NuxtLink>
        <NuxtLink to="/about" class="btn btn-secondary">
          Our Story
        </NuxtLink>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import { Ban, Building2, Handshake, Lightbulb, RotateCw, Search, Swords } from 'lucide-vue-next'
useSEO({
  title: 'Guild Manifesto | Skill-Wanderer',
  description: 'The Skill-Wanderer Guild Manifesto: Mastery, Transparency, Shared Prosperity. Learn about our meritocratic guild model, the 15/85 profit split, guild ranks, and our philosophy of earn-your-way learning.',
  keywords: ['skill-wanderer manifesto', 'tech guild', 'guild ranks', 'profit sharing', 'meritocracy', 'learn contribute build earn'],
  type: 'article',
  structuredData: [
    createBreadcrumbSchema([
      { name: 'Home', url: 'https://skill-wanderer.com/' },
      { name: 'About', url: 'https://skill-wanderer.com/about' },
      { name: 'Guild Manifesto', url: 'https://skill-wanderer.com/manifesto' }
    ])
  ]
})
</script>

<style scoped>
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

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

.container {
  max-width: 900px;
  margin: 0 auto;
  padding: 0 20px;
}

/* Hero */
.hero {
  padding: 140px 20px 80px;
  text-align: center;
  background: radial-gradient(circle at 50% 50%, rgba(255, 107, 53, 0.12) 0%, transparent 60%);
}

.manifesto-badge {
  display: inline-block;
  background: rgba(255, 107, 53, 0.15);
  border: 1px solid rgba(255, 107, 53, 0.3);
  color: var(--primary-orange);
  padding: 6px 18px;
  border-radius: 50px;
  font-size: 0.85rem;
  font-weight: 600;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  margin-bottom: 24px;
}

.hero h1 {
  font-size: clamp(2.5rem, 6vw, 4rem);
  font-weight: 800;
  color: var(--primary-orange);
  margin-bottom: 16px;
  line-height: 1.1;
}

.hero-tagline {
  font-size: clamp(1.1rem, 2.5vw, 1.5rem);
  font-weight: 600;
  color: var(--accent-yellow);
  letter-spacing: 0.06em;
  margin-bottom: 20px;
}

.hero-subtitle {
  font-size: 1.1rem;
  opacity: 0.8;
  max-width: 600px;
  margin: 0 auto;
  line-height: 1.7;
}

/* Intro */
.intro {
  padding: 60px 20px;
  background: rgba(255, 107, 53, 0.04);
  border-top: 1px solid rgba(255, 107, 53, 0.1);
  border-bottom: 1px solid rgba(255, 107, 53, 0.1);
}

.intro-text {
  font-size: 1.15rem;
  line-height: 1.8;
  opacity: 0.9;
  text-align: center;
}

.highlight {
  color: var(--primary-orange);
  font-weight: 600;
}

/* Manifesto Sections */
.manifesto-section {
  padding: 90px 20px;
  border-bottom: 1px solid rgba(255, 255, 255, 0.05);
}

.section-label {
  font-size: 5rem;
  font-weight: 900;
  color: rgba(255, 107, 53, 0.08);
  line-height: 1;
  margin-bottom: -20px;
  font-variant-numeric: tabular-nums;
}

.manifesto-section h2 {
  font-size: clamp(1.8rem, 4vw, 2.8rem);
  font-weight: 800;
  color: var(--primary-orange);
  margin-bottom: 8px;
}

.section-subtitle {
  font-size: 1rem;
  opacity: 0.6;
  font-style: italic;
  margin-bottom: 30px;
}

.section-intro {
  font-size: 1.1rem;
  line-height: 1.8;
  opacity: 0.85;
  margin-bottom: 40px;
}

/* Philosophy Banner */
.philosophy-banner {
  display: flex;
  gap: 12px;
  flex-wrap: wrap;
  margin-bottom: 30px;
}

.philosophy-banner span {
  background: rgba(255, 107, 53, 0.12);
  border: 1px solid rgba(255, 107, 53, 0.25);
  color: var(--primary-orange);
  padding: 10px 22px;
  border-radius: 50px;
  font-size: 1.1rem;
  font-weight: 700;
}

/* Principle Cards */
.principles-cards {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
  gap: 24px;
}

.principle-card {
  background: var(--card-bg);
  border: 1px solid rgba(255, 255, 255, 0.07);
  border-radius: 16px;
  padding: 30px 24px;
  transition: border-color 0.3s ease, background 0.3s ease;
}

.principle-card:hover {
  border-color: rgba(255, 107, 53, 0.3);
  background: var(--card-hover);
}

.card-icon {
  font-size: 2rem;
  margin-bottom: 16px;
}

.principle-card h3 {
  font-size: 1.05rem;
  font-weight: 700;
  margin-bottom: 10px;
  color: var(--accent-yellow);
}

.principle-card p {
  font-size: 0.95rem;
  line-height: 1.7;
  opacity: 0.8;
}

/* Economic Section */
.economic-section {
  background: rgba(255, 107, 53, 0.02);
}

.split-visual {
  display: flex;
  align-items: stretch;
  gap: 20px;
  margin-bottom: 60px;
}

.split-block {
  flex: 1;
  border-radius: 16px;
  padding: 36px 28px;
}

.split-block.tribute {
  background: rgba(255, 217, 61, 0.07);
  border: 1px solid rgba(255, 217, 61, 0.2);
}

.split-block.pool {
  background: rgba(255, 107, 53, 0.07);
  border: 1px solid rgba(255, 107, 53, 0.25);
}

.split-percent {
  font-size: 3.5rem;
  font-weight: 900;
  line-height: 1;
  margin-bottom: 6px;
}

.tribute .split-percent { color: var(--accent-yellow); }
.pool .split-percent { color: var(--primary-orange); }

.split-label {
  font-size: 1rem;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.08em;
  margin-bottom: 16px;
  opacity: 0.7;
}

.split-block p {
  font-size: 0.95rem;
  line-height: 1.7;
  opacity: 0.8;
}

.split-divider {
  display: flex;
  align-items: center;
  font-size: 2rem;
  font-weight: 300;
  opacity: 0.3;
  flex-shrink: 0;
}

.distribution-title {
  font-size: 1.3rem;
  font-weight: 700;
  color: var(--accent-yellow);
  margin-bottom: 16px;
  margin-top: 48px;
}

.distribution-note {
  font-size: 0.95rem;
  opacity: 0.7;
  margin-bottom: 16px;
  font-style: italic;
}

.distribution-table {
  border-radius: 12px;
  overflow: hidden;
  border: 1px solid rgba(255, 255, 255, 0.08);
}

.dist-row {
  display: grid;
  grid-template-columns: 200px 80px 1fr;
  gap: 16px;
  padding: 14px 20px;
  align-items: center;
  font-size: 0.95rem;
  border-bottom: 1px solid rgba(255, 255, 255, 0.05);
}

.dist-row:last-child {
  border-bottom: none;
}

.header-row {
  background: rgba(255, 107, 53, 0.1);
  font-weight: 700;
  font-size: 0.85rem;
  text-transform: uppercase;
  letter-spacing: 0.06em;
  opacity: 0.7;
}

.highlight-row {
  background: rgba(255, 107, 53, 0.06);
}

.devops-row {
  background: rgba(255, 217, 61, 0.04);
}

.role-name {
  font-weight: 600;
}

.role-name em {
  font-style: normal;
  opacity: 0.6;
  font-size: 0.85rem;
  font-weight: 400;
}

.role-share {
  font-weight: 800;
  font-size: 1.1rem;
  color: var(--primary-orange);
  white-space: nowrap;
}

.devops-why {
  display: flex;
  gap: 16px;
  align-items: flex-start;
  margin-top: 20px;
  padding: 20px 24px;
  background: rgba(255, 217, 61, 0.06);
  border: 1px solid rgba(255, 217, 61, 0.15);
  border-radius: 12px;
}

.why-icon {
  font-size: 1.4rem;
  flex-shrink: 0;
  margin-top: 2px;
}

.devops-why p {
  font-size: 0.95rem;
  line-height: 1.7;
  opacity: 0.85;
}

/* Ranks Section */
.ranks-section {
  background: rgba(0, 0, 0, 0.2);
}

.ranks-list {
  display: flex;
  flex-direction: column;
  gap: 16px;
}

.rank-item {
  display: flex;
  align-items: flex-start;
  gap: 24px;
  padding: 24px 28px;
  border-radius: 14px;
  border: 1px solid rgba(255, 255, 255, 0.07);
  background: var(--card-bg);
  transition: border-color 0.3s ease;
}

.rank-item:hover {
  border-color: rgba(255, 107, 53, 0.25);
}

.rank-badge {
  background: rgba(255, 107, 53, 0.12);
  color: var(--primary-orange);
  border: 1px solid rgba(255, 107, 53, 0.25);
  padding: 6px 14px;
  border-radius: 50px;
  font-size: 0.8rem;
  font-weight: 700;
  white-space: nowrap;
  flex-shrink: 0;
  letter-spacing: 0.04em;
}

.rank-5 .rank-badge {
  background: rgba(255, 217, 61, 0.12);
  color: var(--accent-yellow);
  border-color: rgba(255, 217, 61, 0.3);
}

.rank-content h3 {
  font-size: 1.05rem;
  font-weight: 700;
  margin-bottom: 6px;
  color: var(--light-text);
}

.rank-content p {
  font-size: 0.95rem;
  line-height: 1.6;
  opacity: 0.75;
}

/* Quality Section */
.quality-visual {
  display: flex;
  gap: 40px;
  align-items: center;
}

.stability-score {
  flex-shrink: 0;
}

.score-circle {
  width: 160px;
  height: 160px;
  border-radius: 50%;
  border: 3px solid var(--primary-orange);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: rgba(255, 107, 53, 0.06);
  text-align: center;
  padding: 16px;
}

.score-label {
  font-size: 0.75rem;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.06em;
  opacity: 0.7;
  margin-bottom: 6px;
}

.score-range {
  font-size: 1.4rem;
  font-weight: 900;
  color: var(--primary-orange);
}

.quality-content {
  display: flex;
  flex-direction: column;
  gap: 24px;
  flex: 1;
}

.quality-item {
  display: flex;
  gap: 20px;
  align-items: flex-start;
  padding: 20px 24px;
  border-radius: 12px;
}

.quality-item.positive {
  background: rgba(100, 200, 100, 0.06);
  border: 1px solid rgba(100, 200, 100, 0.15);
}

.quality-item.negative {
  background: rgba(200, 80, 80, 0.06);
  border: 1px solid rgba(200, 80, 80, 0.15);
}

.quality-icon {
  font-size: 1.5rem;
  font-weight: 900;
  flex-shrink: 0;
}

.positive .quality-icon { color: #64c864; }
.negative .quality-icon { color: #c85050; }

.quality-item h3 {
  font-size: 1rem;
  font-weight: 700;
  margin-bottom: 6px;
}

.quality-item p {
  font-size: 0.9rem;
  line-height: 1.6;
  opacity: 0.75;
}

/* Disclaimer Section */
.disclaimer-content p {
  font-size: 1.05rem;
  line-height: 1.8;
  opacity: 0.85;
  margin-bottom: 24px;
}

.pillars {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
  margin-top: 40px;
}

.pillar {
  text-align: center;
  padding: 32px 20px;
  background: var(--card-bg);
  border: 1px solid rgba(255, 107, 53, 0.15);
  border-radius: 16px;
  transition: border-color 0.3s ease;
}

.pillar:hover {
  border-color: rgba(255, 107, 53, 0.35);
}

.pillar-icon {
  font-size: 2.2rem;
  display: block;
  margin-bottom: 14px;
}

.pillar h3 {
  font-size: 1.1rem;
  font-weight: 700;
  color: var(--primary-orange);
  margin-bottom: 8px;
}

.pillar p {
  font-size: 0.9rem;
  opacity: 0.7;
  line-height: 1.5;
}

/* CTA */
.cta {
  padding: 100px 20px;
  text-align: center;
  background: linear-gradient(135deg, rgba(255, 107, 53, 0.08) 0%, rgba(255, 217, 61, 0.04) 100%);
}

.cta h2 {
  font-size: 2.5rem;
  color: var(--primary-orange);
  margin-bottom: 16px;
}

.cta p {
  font-size: 1.1rem;
  opacity: 0.8;
  margin-bottom: 40px;
}

.cta-buttons {
  display: flex;
  gap: 16px;
  justify-content: center;
  flex-wrap: wrap;
}

.btn {
  padding: 15px 30px;
  border: 2px solid transparent;
  border-radius: 50px;
  font-size: 1.05rem;
  font-weight: 600;
  text-decoration: none;
  cursor: pointer;
  transition: all 0.3s ease;
  display: inline-flex;
  align-items: center;
  gap: 10px;
}

.btn-primary {
  background: var(--primary-orange);
  color: white;
  box-shadow: 0 4px 20px rgba(255, 107, 53, 0.3);
}

.btn-primary:hover {
  transform: translateY(-2px);
  box-shadow: 0 6px 30px rgba(255, 107, 53, 0.4);
  background: var(--deep-orange);
}

.btn-secondary {
  background: transparent;
  color: var(--primary-orange);
  border-color: var(--primary-orange);
}

.btn-secondary:hover {
  transform: translateY(-2px);
  background: rgba(255, 107, 53, 0.1);
}

/* Sovereign Exchange Section */
.sovereign-section {
  background: rgba(255, 217, 61, 0.02);
}

.exchange-paths {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 24px;
  margin-bottom: 40px;
}

.exchange-path {
  border-radius: 16px;
  padding: 32px 28px;
  border: 1px solid rgba(255, 255, 255, 0.08);
  background: var(--card-bg);
}

.path-builder {
  border-color: rgba(255, 107, 53, 0.2);
  background: rgba(255, 107, 53, 0.04);
}

.path-rainmaker {
  border-color: rgba(255, 217, 61, 0.2);
  background: rgba(255, 217, 61, 0.04);
}

.path-header {
  display: flex;
  align-items: center;
  gap: 14px;
  margin-bottom: 14px;
  flex-wrap: wrap;
}

.path-label-badge {
  width: 36px;
  height: 36px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1rem;
  font-weight: 900;
  flex-shrink: 0;
}

.path-builder .path-label-badge {
  background: rgba(255, 107, 53, 0.15);
  color: var(--primary-orange);
  border: 1px solid rgba(255, 107, 53, 0.3);
}

.path-rainmaker .path-label-badge {
  background: rgba(255, 217, 61, 0.15);
  color: var(--accent-yellow);
  border: 1px solid rgba(255, 217, 61, 0.3);
}

.path-header h3 {
  font-size: 1.1rem;
  font-weight: 700;
  flex: 1;
}

.path-builder .path-header h3 { color: var(--primary-orange); }
.path-rainmaker .path-header h3 { color: var(--accent-yellow); }

.path-tag {
  font-size: 0.75rem;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.06em;
  padding: 4px 12px;
  border-radius: 50px;
}

.path-builder .path-tag {
  background: rgba(255, 107, 53, 0.12);
  color: var(--primary-orange);
  border: 1px solid rgba(255, 107, 53, 0.25);
}

.path-rainmaker .path-tag {
  background: rgba(255, 217, 61, 0.12);
  color: var(--accent-yellow);
  border: 1px solid rgba(255, 217, 61, 0.25);
}

.path-desc {
  font-size: 0.95rem;
  line-height: 1.6;
  opacity: 0.75;
  margin-bottom: 24px;
  font-style: italic;
}

.path-details {
  display: flex;
  flex-direction: column;
  gap: 16px;
}

.path-detail {
  padding: 14px 18px;
  background: rgba(255, 255, 255, 0.03);
  border-radius: 10px;
  border-left: 3px solid rgba(255, 107, 53, 0.3);
}

.path-rainmaker .path-detail {
  border-left-color: rgba(255, 217, 61, 0.3);
}

.detail-label {
  display: block;
  font-size: 0.78rem;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.07em;
  opacity: 0.55;
  margin-bottom: 6px;
}

.path-detail p {
  font-size: 0.9rem;
  line-height: 1.65;
  opacity: 0.85;
}

.sovereign-why {
  display: flex;
  gap: 16px;
  align-items: flex-start;
  padding: 24px 28px;
  background: rgba(255, 107, 53, 0.06);
  border: 1px solid rgba(255, 107, 53, 0.15);
  border-radius: 12px;
}

.sovereign-why .why-icon {
  font-size: 1.4rem;
  flex-shrink: 0;
  margin-top: 2px;
}

.sovereign-why h3 {
  font-size: 1rem;
  font-weight: 700;
  color: var(--primary-orange);
  margin-bottom: 8px;
}

.sovereign-why p {
  font-size: 0.95rem;
  line-height: 1.7;
  opacity: 0.85;
}

/* Responsive */
@media (max-width: 768px) {
  .split-visual {
    flex-direction: column;
  }

  .split-divider {
    justify-content: center;
  }

  .dist-row {
    grid-template-columns: 1fr;
    gap: 4px;
  }

  .header-row {
    display: none;
  }

  .role-share {
    font-size: 1.5rem;
  }

  .quality-visual {
    flex-direction: column;
  }

  .score-circle {
    width: 130px;
    height: 130px;
  }

  .pillars {
    grid-template-columns: 1fr;
  }

  .rank-item {
    flex-direction: column;
    gap: 12px;
  }

  .philosophy-banner {
    gap: 8px;
  }
}
</style>
