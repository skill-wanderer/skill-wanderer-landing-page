<template>
  <div>
    <!-- Hero Section -->
    <section class="hero">
      <div class="hero-content">
        <div class="orion-visual">
            <img 
              src="/orion.webp" 
              alt="Admiral Orion"
              class="orion-image"
            />
        </div>
        <h1>Meet Admiral Orion</h1>
        <p class="tagline">Your AI-Powered Guide to the Skill-Wanderer Universe</p>
        <p class="hero-description">
          Admiral Orion is our fleet commander — an intelligent chatbot that helps you navigate
          learning paths, understand our principles, and discover everything Skill-Wanderer has to offer.
          Ask anything, anytime.
        </p>
        <div class="hero-cta">
          <button class="btn btn-primary" @click="openChat">
            Start a Conversation
            <span>→</span>
          </button>
        </div>
      </div>
    </section>

    <!-- What Can Admiral Orion Do -->
    <section class="features">
      <div class="section-header">
        <h2>What Can Admiral Orion Do?</h2>
        <p>Your personal guide across the Skill-Wanderer ecosystem</p>
      </div>
      <div class="features-grid">
        <div class="feature-card">
          <div class="feature-icon">🧭</div>
          <h3>Navigate Learning Paths</h3>
          <p>Ask about available courses, recommended learning sequences, and how to get started on your tech journey — from beginner to advanced.</p>
        </div>
        <div class="feature-card">
          <div class="feature-icon">📜</div>
          <h3>Explain Our Principles</h3>
          <p>Curious about our 12 guiding principles? Admiral Orion can break them down and explain how they shape everything we build.</p>
        </div>
        <div class="feature-card">
          <div class="feature-icon">🔍</div>
          <h3>Search Across the Platform</h3>
          <p>Admiral Orion searches across skill-wanderer.com, the Dojo, and the Blog to find the most relevant answers for your questions.</p>
        </div>
        <div class="feature-card">
          <div class="feature-icon">🤝</div>
          <h3>Partnership &amp; Impact Info</h3>
          <p>Learn about our social enterprise model, success sharing, and how to become a technology partner — all through a simple conversation.</p>
        </div>
        <div class="feature-card">
          <div class="feature-icon">🚀</div>
          <h3>Platform Guidance</h3>
          <p>Not sure where to start? Admiral Orion provides mission briefings tailored to your interests and experience level.</p>
        </div>
        <div class="feature-card">
          <div class="feature-icon">🛡️</div>
          <h3>Privacy-First Design</h3>
          <p>No personal data is stored beyond your current session. Conversations expire automatically and are never shared with third parties.</p>
        </div>
      </div>
    </section>

    <!-- How It Works -->
    <section class="how-it-works">
      <div class="section-header">
        <h2>How It Works</h2>
        <p>Getting answers is as simple as asking a question</p>
      </div>
      <div class="steps-grid">
        <div class="step-card">
          <div class="step-number">1</div>
          <h3>Open the Command Console</h3>
          <p>Click the shield icon in the bottom-right corner of any page to summon Admiral Orion.</p>
        </div>
        <div class="step-card">
          <div class="step-number">2</div>
          <h3>State Your Inquiry</h3>
          <p>Type your question or pick from suggested topics like Mission Briefing, The 12 Directives, or Navigation Routes.</p>
        </div>
        <div class="step-card">
          <div class="step-number">3</div>
          <h3>Get Sourced Answers</h3>
          <p>Admiral Orion responds with accurate information and links to source pages so you can explore further.</p>
        </div>
      </div>
    </section>

    <!-- Try It Section -->
    <section class="try-it">
      <div class="try-it-content">
        <h2>Ready to Start Exploring?</h2>
        <p>Admiral Orion is available on every page. Click the shield in the bottom-right corner, or try it right now.</p>
        <div class="try-it-suggestions">
          <button class="suggestion-chip" @click="askQuestion('What is Skill-Wanderer?')">What is Skill-Wanderer?</button>
          <button class="suggestion-chip" @click="askQuestion('What are the 12 principles?')">What are the 12 principles?</button>
          <button class="suggestion-chip" @click="askQuestion('How do learning paths work?')">How do learning paths work?</button>
          <button class="suggestion-chip" @click="askQuestion('How can I become a partner?')">How can I become a partner?</button>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
// Icons replaced with emojis

useSEO({
  title: 'Admiral Orion — AI Chatbot | Skill-Wanderer',
  description: 'Meet Admiral Orion, the AI-powered chatbot that helps you navigate learning paths, understand our principles, and explore the Skill-Wanderer platform.',
  keywords: ['chatbot', 'AI assistant', 'Admiral Orion', 'learning guide', 'Skill-Wanderer'],
})

const { sendMessage } = usePathfinder()

function openChat() {
  // Dispatch a custom event that PathfinderChat can listen for
  if (import.meta.client) {
    window.dispatchEvent(new CustomEvent('open-admiral-orion'))
  }
}

function askQuestion(question: string) {
  if (import.meta.client) {
    window.dispatchEvent(new CustomEvent('open-admiral-orion', { detail: { question } }))
  }
}
</script>

<style scoped>
/* Hero Section */
.hero {
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  padding: 100px 20px 60px;
  background: radial-gradient(circle at 20% 50%, rgba(255, 107, 53, 0.1) 0%, transparent 50%),
              radial-gradient(circle at 80% 50%, rgba(255, 217, 61, 0.05) 0%, transparent 50%);
}

.hero-content {
  max-width: 1200px;
  text-align: center;
  z-index: 2;
}

.hero h1 {
  font-size: clamp(2.5rem, 8vw, 5rem);
  font-weight: 800;
  margin-bottom: 20px;
  background: linear-gradient(135deg, var(--primary-orange), var(--accent-yellow));
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  animation: fadeInUp 0.8s ease-out;
}

.hero .tagline {
  font-size: clamp(1.2rem, 3vw, 1.8rem);
  color: var(--light-text);
  margin-bottom: 30px;
  opacity: 0.9;
  animation: fadeInUp 0.8s ease-out 0.2s both;
}

.hero-description {
  font-size: 1.1rem;
  max-width: 800px;
  margin: 0 auto 40px;
  opacity: 0.8;
  animation: fadeInUp 0.8s ease-out 0.4s both;
}

.hero-cta {
  display: flex;
  gap: 20px;
  justify-content: center;
  flex-wrap: wrap;
  animation: fadeInUp 0.8s ease-out 0.6s both;
}

.admiral-badge {
  display: flex;
  justify-content: center;
  margin-bottom: 1.5rem;
  animation: float 3s ease-in-out infinite;
}

.admiral-avatar-img {
  display: block;
  margin: 0 auto;
  width: 200px;
  height: 200px;
  border-radius: 50%;
  object-fit: cover;
  object-position: 75% 15%;
  border: 3px solid rgba(255, 107, 53, 0.4);
  box-shadow: 0 0 30px rgba(255, 107, 53, 0.3), 0 0 60px rgba(255, 107, 53, 0.1);
}

@keyframes float {
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-10px); }
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

/* Features Section */
.features {
  padding: 100px 20px;
  background: var(--darker-bg);
}

.section-header {
  text-align: center;
  max-width: 800px;
  margin: 0 auto 60px;
}

.section-header h2 {
  font-size: clamp(2rem, 5vw, 3rem);
  margin-bottom: 20px;
  color: var(--primary-orange);
}

.features-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 30px;
  max-width: 1200px;
  margin: 0 auto;
}

.feature-card {
  background: var(--card-bg);
  border: 1px solid rgba(255, 107, 53, 0.2);
  border-radius: 20px;
  padding: 40px;
  transition: all 0.3s ease;
  position: relative;
  overflow: hidden;
}

.feature-card::before {
  content: '';
  position: absolute;
  top: -2px;
  left: -2px;
  right: -2px;
  bottom: -2px;
  background: linear-gradient(135deg, var(--primary-orange), transparent);
  border-radius: 20px;
  opacity: 0;
  transition: opacity 0.3s ease;
  z-index: -1;
}

.feature-card:hover {
  transform: translateY(-5px);
  background: var(--card-hover);
}

.feature-card:hover::before {
  opacity: 0.3;
}

.feature-icon {
  width: 60px;
  height: 60px;
  background: linear-gradient(135deg, var(--primary-orange), var(--deep-orange));
  border-radius: 15px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 20px;
  font-size: 24px;
}

.feature-card h3 {
  font-size: 1.5rem;
  margin-bottom: 15px;
  color: white;
}

.feature-card p {
  opacity: 0.8;
}

/* How It Works */
.how-it-works {
  padding: 100px 20px;
}

.steps-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 2rem;
  max-width: 1200px;
  margin: 3rem auto 0;
}

.step-card {
  background: var(--card-bg);
  border: 1px solid rgba(255, 255, 255, 0.06);
  border-radius: 12px;
  padding: 2rem;
  text-align: center;
  transition: transform 0.3s, border-color 0.3s;
}

.step-card:hover {
  transform: translateY(-4px);
  border-color: var(--primary-orange);
}

.step-number {
  width: 48px;
  height: 48px;
  border-radius: 50%;
  background: linear-gradient(135deg, var(--primary-orange), var(--deep-orange));
  color: white;
  font-size: 1.25rem;
  font-weight: 700;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto 1rem;
}

.step-card h3 {
  font-size: 1.1rem;
  margin-bottom: 0.75rem;
  color: white;
}

.step-card p {
  font-size: 0.95rem;
  opacity: 0.7;
  line-height: 1.6;
}

/* Try It Section */
.try-it {
  padding: 100px 20px;
  text-align: center;
  background: linear-gradient(180deg, transparent, rgba(255, 107, 53, 0.05));
}

.try-it-content {
  max-width: 700px;
  margin: 0 auto;
}

.try-it h2 {
  font-size: 2rem;
  color: white;
  margin-bottom: 1rem;
}

.try-it p {
  font-size: 1.05rem;
  opacity: 0.7;
  margin-bottom: 2rem;
  line-height: 1.7;
}

.try-it-suggestions {
  display: flex;
  flex-wrap: wrap;
  gap: 0.75rem;
  justify-content: center;
}

.suggestion-chip {
  padding: 0.6rem 1.2rem;
  border-radius: 20px;
  border: 1px solid rgba(255, 107, 53, 0.3);
  background: rgba(255, 107, 53, 0.08);
  color: var(--primary-orange);
  font-size: 0.9rem;
  cursor: pointer;
  transition: all 0.25s;
}

.suggestion-chip:hover {
  background: rgba(255, 107, 53, 0.18);
  border-color: var(--primary-orange);
  transform: translateY(-2px);
}

.orion-visual {
  display: flex;
  justify-content: center;
  margin-bottom: 20px;
  animation: fadeInUp 0.8s ease-out 0.1s both;
}

.orion-image {
  width: 900px;
  height: 600px;
  object-fit: cover;

  /* Ubah jadi persegi rounded (bukan lingkaran) */
  border-radius: 16px;

  /* Frame feel (lebih "panel AI") */
  border: 1px solid rgba(255, 107, 53, 0.4);

  /* Glow subtle */
  box-shadow: 
    0 10px 30px rgba(0, 0, 0, 0.4),
    0 0 20px rgba(255, 107, 53, 0.2);

  transition: all 0.3s ease;
}

/* Animations */
@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

/* Responsive */
@media (max-width: 768px) {
  .features-grid {
    grid-template-columns: 1fr;
  }

  .steps-grid {
    grid-template-columns: 1fr;
  }

  .hero-cta {
    flex-direction: column;
    align-items: center;
  }

  .btn {
    width: 100%;
    max-width: 300px;
    justify-content: center;
  }

  .try-it h2 {
    font-size: 1.5rem;
  }
}
</style>
