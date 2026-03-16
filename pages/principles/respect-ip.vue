<template>
  <div>    <!-- Hero Section -->
    <PrincipleHero 
      :number="9"
      title="Respect IP"
      tagline="Honoring Intellectual Property in the Age of AI"
    />

    <!-- Story Section -->
    <PrincipleStory 
      :intro="storyIntro"
      :chapters="storyChapters"
    />

    <!-- AI Era Visual Section -->
    <section class="ai-era-section">
      <div class="ai-era-container">
        <div style="text-align: center; margin-bottom: 50px;">
          <h2 style="font-size: 2.5rem; color: var(--primary-orange);">Content Creation in the AI Era</h2>
          <p style="font-size: 1.2rem; opacity: 0.9;">AI enables us to generate learning materials from our own curriculum — with IP respect as our foundation</p>
        </div>
        
        <div class="ai-flow-visual">
          <div class="flow-node curriculum">
            <div class="flow-icon">📋</div>
            <h3>Our Curriculum</h3>
            <p>Skill-Wanderer's own intellectual property and structured learning pathways</p>
          </div>
          
          <div class="flow-arrow-container">
            <svg class="flow-arrow-svg" viewBox="0 0 80 40" fill="none" xmlns="http://www.w3.org/2000/svg">
              <defs>
                <linearGradient id="arrowGrad1" x1="4" y1="20" x2="68" y2="20" gradientUnits="userSpaceOnUse">
                  <stop offset="0%" stop-color="#FF6B35"/>
                  <stop offset="100%" stop-color="#FFC107"/>
                </linearGradient>
              </defs>
              <line x1="4" y1="20" x2="62" y2="20" stroke="url(#arrowGrad1)" stroke-width="2.5" stroke-linecap="round"/>
              <polyline points="54,11 68,20 54,29" fill="none" stroke="url(#arrowGrad1)" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
            <div class="flow-arrow-label">AI Generation</div>
          </div>
          
          <div class="flow-node content">
            <div class="flow-icon">📚</div>
            <h3>Learning Materials</h3>
            <p>High-quality content generated from our own IP, with full attribution where due</p>
          </div>
          
          <div class="flow-arrow-container">
            <svg class="flow-arrow-svg" viewBox="0 0 80 40" fill="none" xmlns="http://www.w3.org/2000/svg">
              <defs>
                <linearGradient id="arrowGrad2" x1="4" y1="20" x2="68" y2="20" gradientUnits="userSpaceOnUse">
                  <stop offset="0%" stop-color="#FF6B35"/>
                  <stop offset="100%" stop-color="#4CAF50"/>
                </linearGradient>
              </defs>
              <line x1="4" y1="20" x2="62" y2="20" stroke="url(#arrowGrad2)" stroke-width="2.5" stroke-linecap="round"/>
              <polyline points="54,11 68,20 54,29" fill="none" stroke="url(#arrowGrad2)" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
            <div class="flow-arrow-label">Delivered to</div>
          </div>
          
          <div class="flow-node learners">
            <div class="flow-icon">🎓</div>
            <h3>Learners</h3>
            <p>Free, accessible education built on a foundation of integrity and respect</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Dual Strategy Section -->
    <section class="strategy-section">
      <div class="strategy-container">
        <div style="text-align: center; margin-bottom: 50px;">
          <h2 style="font-size: 2.5rem; color: var(--primary-orange);">Our IP Commitment</h2>
          <p style="font-size: 1.2rem; opacity: 0.9;">Generate from what we own; attribute everything we borrow</p>
        </div>
        
        <div class="strategy-grid">
          <div class="strategy-card ai-gen" style="animation-delay: 0.1s;">
            <div class="strategy-header">
              <div class="strategy-icon">🤖</div>
              <h3>AI-Generated from Our Own Curriculum</h3>
            </div>
            
            <div class="strategy-description">
              <p>With modern AI capabilities, we can generate learning materials directly from Skill-Wanderer's own curriculum — dramatically accelerating content production while staying within clear IP boundaries.</p>
            </div>
            
            <ul class="strategy-list">
              <li>Generate practice problems, summaries, and explanations from our own curricula</li>
              <li>Expand learning paths rapidly without relying on third-party material</li>
              <li>Maintain full ownership and control over generated content</li>
              <li>Ensure AI-generated content is reviewed for accuracy and quality</li>
              <li>Use AI responsibly as a tool, not a replacement for human expertise</li>
              <li>Stay current with AI best practices for ethical content generation</li>
            </ul>
          </div>
          
          <div class="strategy-card attribution" style="animation-delay: 0.3s;">
            <div class="strategy-header">
              <div class="strategy-icon">🏷️</div>
              <h3>Respect, Attribute & Honor Third-Party IP</h3>
            </div>
            
            <div class="strategy-description">
              <p>When we reference, recommend, or build upon third-party work, proper attribution is non-negotiable. We lead by example in the IP respect we expect from our learners.</p>
            </div>
            
            <ul class="strategy-list">
              <li>Always attribute original creators and sources clearly</li>
              <li>Never reproduce third-party content without explicit permission</li>
              <li>Link to original sources rather than mirroring protected material</li>
              <li>Respect licensing terms for all referenced resources</li>
              <li>Teach learners about IP respect as part of professional development</li>
              <li>Model the attribution practices we want our community to follow</li>
            </ul>
          </div>
        </div>
      </div>
    </section>

    <!-- Practice Section -->
    <PrinciplePractice 
      title="Respect IP in Action"
      subtitle="How we honor intellectual property and leverage AI responsibly"
      :examples="practiceExamples"
      background-color="var(--dark-bg)"
      list-icon="🛡️"
    />

    <!-- Quote Section -->
    <PrincipleQuote 
      quote="With AI now capable of generating rich learning materials from our own curriculum, we no longer need to rely on curation as heavily as before. But this power comes with responsibility: we must be crystal clear about IP boundaries, attribute all sources honestly, and model the respect for intellectual property we want our learners to carry into their own careers."
      author="Quan Nguyen, Founder of Skill-Wanderer"
    />

    <!-- Navigation Section -->
    <PrincipleNavigation current-slug="respect-ip" />
  </div>
</template>

<script setup lang="ts">
import type { StoryChapter, PracticeExample } from '~/types'

// SEO and meta management
useSEO({
  title: 'Respect IP | Principle #9',
  description: 'Discover how Skill-Wanderer honors intellectual property in the AI era — generating content from our own curriculum while attributing every source with integrity.',
  keywords: ['respect IP', 'intellectual property', 'AI content generation', 'attribution', 'skill-wanderer principle 9', 'educational ethics'],
  type: 'article',
  structuredData: [
    createArticleSchema(
      'Respect IP: Honoring Intellectual Property in the Age of AI | Principle #9',
      'Discover how Skill-Wanderer honors intellectual property in the AI era — generating content from our own curriculum while attributing every source with integrity.',
      'https://skill-wanderer.com/principles/respect-ip'
    ),
    createBreadcrumbSchema([
      { name: 'Home', url: 'https://skill-wanderer.com/' },
      { name: 'Principles', url: 'https://skill-wanderer.com/principles' },
      { name: 'Respect IP', url: 'https://skill-wanderer.com/principles/respect-ip' }
    ])
  ]
})

// Story content data
const storyIntro = 'I call our ninth principle <strong>Respect IP</strong>, and it marks an important evolution in how Skill-Wanderer thinks about content creation. As AI capabilities have advanced dramatically, we can now generate high-quality learning materials directly from our own curriculum — making traditional curation less central to our workflow than it once was. But this shift brings new responsibility: we must be explicit about intellectual property boundaries and set the standard for attribution that we want our learners to carry into their careers.'

const storyChapters: StoryChapter[] = [
  {
    icon: '🤖',
    title: 'The AI Shift: From Curation to Curriculum-Driven Creation',
    content: [
      {
        type: 'text',
        text: 'When I founded Skill-Wanderer, curation was the backbone of our content strategy. We scoured the internet for the best free resources, organized them into structured learning paths, and helped learners navigate the sea of content out there. It worked — and Principle #9 was born from that work.'
      },
      {
        type: 'personal-story',
        text: 'But something significant changed. AI tools became capable enough that we could take our own structured curriculum — the learning outcomes, the skill frameworks, the pedagogical sequences we had painstakingly designed — and use them as source material to generate rich, tailored learning content. Suddenly, the bottleneck was no longer finding content; it was ensuring everything we generated or referenced was grounded in clear IP respect.'
      },
      {
        type: 'text',
        text: 'This shift doesn\'t mean we stop pointing learners to great third-party resources. It means <strong>we no longer need curation as our primary content strategy</strong>. With AI generating from our own curriculum, we can produce practice exercises, explanations, and guided paths faster than ever — while keeping IP boundaries crystal clear.'
      }
    ]
  },
  {
    icon: '⚖️',
    title: 'Why IP Respect Is Non-Negotiable',
    content: [
      {
        type: 'text',
        text: 'In a world where AI can produce content at scale, the risk of accidentally blurring IP lines grows. It becomes easier than ever to inadvertently reproduce work that belongs to someone else, to generate content that is derivative without attribution, or to use materials in ways their creators never intended.'
      },
      {
        type: 'text',
        text: 'We explicitly reinforce intellectual property principles because we want Skill-Wanderer to model the professional standards our learners will need in their careers. <strong>The developers, engineers, and technologists we train will encounter IP questions constantly</strong> — from open-source licensing to corporate code ownership. We want them to have watched us model respect for IP from day one.'
      },
      {
        type: 'integrity-notice',
        text: '<strong>Our IP Respect commitment is inseparable from Principle #2 (Integrity and Impartiality).</strong> We will never use third-party content without proper attribution. We will never train AI models on material we do not own. We will never claim AI-generated content derived from our curriculum as wholly original without acknowledging the underlying sources.',
        additionalText: '🛡️ Our IP Promise'
      }
    ]
  },
  {
    icon: '🌱',
    title: 'Setting the Standard for Our Learners',
    content: [
      {
        type: 'text',
        text: 'Every learner who completes a Skill-Wanderer path should leave with a clear understanding of intellectual property norms. This is not just an ethical position — it is a practical career skill. Companies care deeply about IP compliance, open-source obligations, and proper attribution.'
      },
      {
        type: 'text',
        text: 'By making "Respect IP" an explicit, named principle, we signal to our community that this is not an afterthought. <strong>It is foundational to how we operate and how we expect our graduates to conduct themselves professionally.</strong>'
      },
      {
        type: 'text',
        text: 'The evolution from "Resourceful Curation" to "Respect IP" reflects the maturity of our platform. We have the tools, the curriculum, and the AI capabilities to produce excellent content from our own materials. What we must guard with equal care is the integrity of IP — ours and everyone else\'s.'
      }
    ]
  }
]

// Practice examples data
const practiceExamples: PracticeExample[] = [
  {
    title: 'AI-Powered Curriculum Generation',
    items: [
      'Generate practice problems and exercises from Skill-Wanderer\'s own curriculum',
      'Use AI to expand explanations and examples from our own structured content',
      'Review all AI-generated material for accuracy, quality, and IP compliance before publishing',
      'Maintain clear ownership records for all AI-generated content derived from our curriculum'
    ]
  },
  {
    title: 'Attribution & Third-Party Respect',
    items: [
      'Always credit original creators when referencing or linking to external resources',
      'Link to original sources rather than reproducing protected content',
      'Respect licensing terms for all open-source, Creative Commons, and proprietary materials',
      'Document the provenance of all content used in our learning paths'
    ]
  },
  {
    title: 'Teaching IP Respect to Learners',
    items: [
      'Include IP awareness as part of professional development in our curriculum',
      'Demonstrate proper attribution practices in all our own content and guides',
      'Discuss open-source licensing and code ownership in relevant learning paths',
      'Model the IP standards we expect our learner community to uphold in their careers'
    ]
  }
]
</script>

<style scoped>
/* AI Era Visual Section */
.ai-era-section {
  padding: 80px 20px;
  background: var(--dark-bg);
  position: relative;
  overflow: hidden;
}

.ai-era-container {
  max-width: 1200px;
  margin: 0 auto;
}

.ai-flow-visual {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0;
  margin-top: 60px;
  flex-wrap: wrap;
  gap: 20px;
}

.flow-node {
  background: rgba(255, 255, 255, 0.05);
  border-radius: 20px;
  padding: 30px;
  text-align: center;
  flex: 1;
  min-width: 200px;
  max-width: 280px;
  border: 1px solid rgba(255, 107, 53, 0.2);
  transition: all 0.3s ease;
}

.flow-node:hover {
  transform: translateY(-5px);
  border-color: rgba(255, 107, 53, 0.5);
  box-shadow: 0 10px 30px rgba(255, 107, 53, 0.15);
}

.flow-node.curriculum {
  border-top: 4px solid #2196F3;
}

.flow-node.content {
  border-top: 4px solid #FF6B35;
}

.flow-node.learners {
  border-top: 4px solid #4CAF50;
}

.flow-icon {
  font-size: 48px;
  margin-bottom: 15px;
}

.flow-node h3 {
  color: white;
  font-size: 1.2rem;
  margin-bottom: 10px;
}

.flow-node p {
  opacity: 0.8;
  font-size: 0.95rem;
  line-height: 1.6;
}

.flow-arrow-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
  color: var(--primary-orange);
  min-width: 80px;
}

.flow-arrow-svg {
  width: 80px;
  height: 40px;
  flex-shrink: 0;
}

.flow-arrow-label {
  font-size: 0.8rem;
  opacity: 0.7;
  white-space: nowrap;
}

/* Dual Strategy Section */
.strategy-section {
  padding: 80px 20px;
  background: #0f0f0f;
}

.strategy-container {
  max-width: 1200px;
  margin: 0 auto;
}

.strategy-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 60px;
  margin-top: 60px;
  align-items: stretch;
}

.strategy-card {
  background: rgba(255, 255, 255, 0.05);
  border-radius: 20px;
  padding: 40px;
  position: relative;
  overflow: hidden;
  transition: all 0.3s ease;
  opacity: 0;
  animation: fadeInUp 0.6s ease-out forwards;
}

.strategy-card::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 5px;
}

.strategy-card.ai-gen::before {
  background: linear-gradient(90deg, #9C27B0, #FF6B35);
}

.strategy-card.attribution::before {
  background: linear-gradient(90deg, #2196F3, #4CAF50);
}

.strategy-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3);
}

.strategy-header {
  display: flex;
  align-items: center;
  gap: 20px;
  margin-bottom: 30px;
}

.strategy-icon {
  width: 60px;
  height: 60px;
  border-radius: 15px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 28px;
}

.strategy-card.ai-gen .strategy-icon {
  background: rgba(156, 39, 176, 0.1);
  border: 2px solid #9C27B0;
}

.strategy-card.attribution .strategy-icon {
  background: rgba(33, 150, 243, 0.1);
  border: 2px solid #2196F3;
}

.strategy-card h3 {
  font-size: 1.5rem;
  color: white;
}

.strategy-description {
  margin-bottom: 25px;
}

.strategy-description p {
  opacity: 0.8;
  line-height: 1.7;
}

.strategy-list {
  list-style: none;
  padding: 0;
}

.strategy-list li {
  padding: 10px 0;
  padding-left: 30px;
  position: relative;
  opacity: 0.9;
}

.strategy-list li::before {
  content: '✓';
  position: absolute;
  left: 0;
  color: #FF6B35;
  font-weight: bold;
  font-size: 1.2rem;
}

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
  .strategy-grid {
    grid-template-columns: 1fr;
    gap: 30px;
  }

  .ai-flow-visual {
    flex-direction: column;
    align-items: center;
  }

  .flow-arrow-container {
    transform: rotate(90deg);
  }

  .flow-node {
    max-width: 100%;
    width: 100%;
  }
}
</style>
