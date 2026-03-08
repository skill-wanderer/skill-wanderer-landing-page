<template>
  <div>    <!-- Hero Section -->
    <PrincipleHero 
      :number="9"
      title="Resourceful & Flexible Learning"
      tagline="Point Learners to What Exists, Create What's Missing"
    />

    <!-- Story Section -->
    <PrincipleStory 
      :intro="storyIntro"
      :chapters="storyChapters"
    />

    <!-- Jungle Visual Section -->
    <section class="jungle-section">
      <div class="jungle-container">
        <div style="text-align: center; margin-bottom: 50px;">
          <h2 style="font-size: 2.5rem; color: var(--primary-orange);">Navigating the World of Learning Resources</h2>
          <p style="font-size: 1.2rem; opacity: 0.9;">So much great material already exists — we point you to the best of it and create only what's missing</p>
        </div>
        
        <div class="jungle-visual">
          <div class="jungle-label">
            <h3>The Learning Landscape</h3>
            <p>A wealth of publicly available materials waiting to be put to good use</p>
          </div>
          
          <div class="jungle-trees">
            <div class="tree">📚</div>
            <div class="tree">🎥</div>
            <div class="tree">💻</div>
            <div class="tree">📖</div>
            <div class="tree">🎓</div>
            <div class="tree">⚡</div>
            <div class="tree">🔧</div>
            <div class="tree">🌟</div>
            <div class="tree">📱</div>
            <div class="tree">🎯</div>
          </div>
          
          <div class="path-through"></div>
          <div class="guide-figure">🧭</div>
        </div>
      </div>
    </section>

    <!-- Dual Strategy Section -->
    <section class="strategy-section">
      <div class="strategy-container">
        <div style="text-align: center; margin-bottom: 50px;">
          <h2 style="font-size: 2.5rem; color: var(--primary-orange);">Our Flexible Approach</h2>
          <p style="font-size: 1.2rem; opacity: 0.9;">Point learners to what's already great, create only what's truly needed</p>
        </div>
        
        <div class="strategy-grid">
          <div class="strategy-card curation" style="animation-delay: 0.1s;">
            <div class="strategy-header">
              <div class="strategy-icon">🔍</div>
              <h3>Point Learners to Great Resources</h3>
            </div>
            
            <div class="strategy-description">
              <p>Our primary approach: pointing learners to the best publicly available learning materials and guiding them through a clear path.</p>
            </div>
            
            <ul class="strategy-list">
              <li>Point learners to the best free and publicly available resources</li>
              <li>Test and verify every recommendation to ensure quality</li>
              <li>Build clear learning pathways that connect existing materials</li>
              <li>Guide learners through each step so they stay on track</li>
              <li>Continuously update as better resources emerge</li>
              <li>Maintain strict integrity — no affiliate commissions</li>
            </ul>
          </div>
          
          <div class="strategy-card creation" style="animation-delay: 0.3s;">
            <div class="strategy-header">
              <div class="strategy-icon">🎨</div>
              <h3>Create When the Situation Demands</h3>
            </div>
            
            <div class="strategy-description">
              <p>We only create new learning content when no suitable publicly available material exists — ensuring every effort goes where it matters most.</p>
            </div>
            
            <ul class="strategy-list">
              <li>Identify genuine gaps where no quality resource exists</li>
              <li>Create targeted tutorials and guides to fill those gaps</li>
              <li>Develop hands-on projects and exercises when needed</li>
              <li>Write clear documentation for under-served topics</li>
              <li>Focus creation effort on maximum learner impact</li>
              <li>Ensure all created content remains free and accessible</li>
            </ul>
          </div>
        </div>
      </div>
    </section>    <!-- Practice Section -->
    <PrinciplePractice 
      title="The Flexible Approach in Action"
      subtitle="How we point learners to existing resources and create when needed"
      :examples="practiceExamples"
      background-color="var(--dark-bg)"
      list-icon="🎯"
    />

    <!-- Quote Section -->
    <PrincipleQuote 
      quote="We believe in being flexible and resourceful — pointing our learners to the wealth of publicly available learning material to help them as much as we can, and only creating new content when the situation truly demands it. That's how we stay efficient and focused on what matters: our learners' growth."
      author="Quan Nguyen, Founder of Skill-Wanderer"
    />

    <!-- Navigation Section -->
    <PrincipleNavigation current-slug="resourceful" />  </div>
</template>

<script setup lang="ts">
import type { StoryChapter, PracticeExample } from '~/types'

// SEO and meta management
useSEO({
  title: 'Resourceful & Flexible Learning | Principle #9',
  description: 'Discover how Skill-Wanderer points learners to publicly available learning materials and creates new content only when the situation demands.',
  keywords: ['resourceful learning', 'flexible curation', 'skill-wanderer principle 9', 'learning resources', 'educational content'],
  type: 'article',
  structuredData: [
    createArticleSchema(
      'Resourceful & Flexible Learning: Point Learners to What Exists, Create What\'s Missing | Principle #9',
      'Discover how Skill-Wanderer points learners to publicly available learning materials and creates new content only when the situation demands.',
      'https://skill-wanderer.com/principles/resourceful'
    ),
    createBreadcrumbSchema([
      { name: 'Home', url: 'https://skill-wanderer.com/' },
      { name: 'Principles', url: 'https://skill-wanderer.com/principles' },
      { name: 'Resourceful', url: 'https://skill-wanderer.com/principles/resourceful' }
    ])
  ]
})

// Story content data
const storyIntro = 'I call our ninth principle <strong>Resourceful & Flexible Learning</strong>, and it reflects a practical truth I discovered on my own journey as a learner: there is already so much great learning material out there — we should point learners to it and only create new content when the situation demands.'

const storyChapters: StoryChapter[] = [
  {
    icon: '🌐',
    title: 'A World of Learning Already Exists',
    content: [
      {
        type: 'text',
        text: 'From the very beginning of my transition into coding, nearly all of my learning came from publicly available resources — online courses, open tutorials, community guides, and books. There is an incredible wealth of high-quality learning material already out there, freely accessible to anyone willing to look.'
      },
      {
        type: 'personal-story',
        text: 'I remember spending weekends just searching for the right React course. There were hundreds of options. The challenge was never a lack of resources — it was finding the right ones and putting them together into a coherent learning path.'
      },
      {
        type: 'text',
        text: 'This experience taught me something fundamental: we don\'t need to reinvent the wheel. There is already so much great material available. What learners truly need is <strong>someone to point them to the right resources</strong> and connect those resources into a clear, structured path.'
      }
    ]
  },
  {
    icon: '🤔',
    title: 'Flexibility Is Our Strength',
    content: [
      {
        type: 'text',
        text: 'This principle is about being <strong>flexible</strong> in how we create and use learning material. We point learners to publicly available material to help them as much as we can, and we only create new learning content when the situation demands it.'
      },
      {
        type: 'text',
        text: 'Our organization is mission-driven. Our goal is the <strong>result</strong> — the impact we have on learners. Being resourceful means we point learners to the best available resources and guide them through a clear, structured path. We are the <strong>trusted guide who connects them with the right material</strong> rather than recreating what already exists.'
      },      {
        type: 'integrity-notice',
        text: '<strong>For any learner who might feel doubt about our recommendations for third-party resources, we want to be perfectly clear:</strong> our entire curation process is strictly governed by Principle #2 (Integrity and Impartiality). We will never accept any form of revenue, commission, or referral fee for guiding you to any resource. Our only motivation is finding the absolute best material for <strong>your</strong> learning journey.',
        additionalText: '🛡️ Our Integrity Promise'
      }
    ]
  },
  {
    icon: '🎨',
    title: 'Creating Only When the Situation Demands',
    content: [
      {
        type: 'text',
        text: 'However, sometimes a suitable publicly available resource for a critical topic simply doesn\'t exist. That is the only time we step in to create new learning content.'
      },
      {
        type: 'text',
        text: 'We only create new material <strong>when the situation demands it</strong> — when there is a genuine gap that no existing resource can fill. This keeps us focused and efficient.'
      },
      {
        type: 'text',
        text: 'To fulfill our first and most important principle — <strong>Accessible</strong> — we must ensure there is always a free path for core learning. When we cannot find a suitable free resource, <strong>that is when we create our own content.</strong>'
      },
      {
        type: 'text',
        text: 'This flexible approach is practical and mission-focused. We point learners to the best of what\'s already available, and when we can\'t find what they need, we create it ourselves — ensuring we never leave a gap that could hold a learner back.'
      }
    ]
  }
]

// Practice examples data
const practiceExamples: PracticeExample[] = [
  {
    title: 'Pointing Learners to Great Resources',
    items: [
      'Point learners to publicly available content that is high-quality and relevant',
      'Organize the best resources into clear, structured learning pathways',
      'Provide honest, unbiased guidance — no affiliate commissions',
      'Prioritize free, publicly available resources whenever possible'
    ]
  },
  {
    title: 'Creating When Needed',
    items: [
      'No suitable publicly available resource exists for a critical topic',
      'Existing materials have significant gaps or outdated information',
      'Complex topics need simplified, beginner-friendly explanations',
      'The situation demands original content to keep learning accessible'
    ]
  },
  {
    title: 'Staying Flexible & Focused',
    items: [
      'Regularly reassess resources to keep pathways current',
      'Incorporate learner feedback to improve recommendations',
      'Balance curation and creation based on actual learner needs',
      'Always ask: does this already exist before creating something new?'
    ]
  }
]
</script>

<style scoped>
/* Jungle Visual Section */
.jungle-section {
  padding: 80px 20px;
  background: var(--dark-bg);
  position: relative;
  overflow: hidden;
}

.jungle-container {
  max-width: 1200px;
  margin: 0 auto;
}

.jungle-visual {
  position: relative;
  height: 500px;
  margin-top: 60px;
}

.jungle-trees {
  position: absolute;
  bottom: 0;
  width: 100%;
  height: 300px;
  background: linear-gradient(180deg, transparent 0%, rgba(0, 128, 0, 0.1) 100%);
  display: flex;
  justify-content: space-around;
  align-items: flex-end;
}

.tree {
  width: 80px;
  height: 200px;
  background: rgba(255, 255, 255, 0.05);
  border-radius: 20px;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 24px;
  opacity: 0.8;
  transition: all 0.3s ease;
}

.tree:hover {
  transform: scale(1.1);
  opacity: 1;
}

.path-through {
  position: absolute;
  bottom: 50px;
  left: 10%;
  right: 10%;
  height: 4px;
  background: linear-gradient(90deg, #FFC107, #FF6B35);
  z-index: 10;
  box-shadow: 0 0 20px rgba(255, 193, 7, 0.5);
}

.guide-figure {
  position: absolute;
  bottom: 100px;
  left: 50%;
  transform: translateX(-50%);
  width: 100px;
  height: 100px;
  background: linear-gradient(135deg, #FFC107, #FF6B35);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 48px;
  z-index: 20;
  box-shadow: 0 10px 30px rgba(255, 193, 7, 0.4);
  animation: float 3s ease-in-out infinite;
}

@keyframes float {
  0%, 100% { transform: translateX(-50%) translateY(0); }
  50% { transform: translateX(-50%) translateY(-10px); }
}

.jungle-label {
  position: absolute;
  top: 20px;
  left: 50%;
  transform: translateX(-50%);
  text-align: center;
}

.jungle-label h3 {
  color: white;
  font-size: 1.8rem;
  margin-bottom: 10px;
}

.jungle-label p {
  opacity: 0.8;
  font-size: 1.1rem;
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

.strategy-card.curation::before {
  background: linear-gradient(90deg, #2196F3, #FF6B35);
}

.strategy-card.creation::before {
  background: linear-gradient(90deg, #9C27B0, #FF6B35);
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

.strategy-card.curation .strategy-icon {
  background: rgba(33, 150, 243, 0.1);
  border: 2px solid #2196F3;
}

.strategy-card.creation .strategy-icon {
  background: rgba(156, 39, 176, 0.1);
  border: 2px solid #9C27B0;
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
  .jungle-visual {
    height: 400px;
  }

  .jungle-trees {
    height: 200px;
  }

  .tree {
    width: 60px;
    height: 150px;
    font-size: 18px;
  }

  .guide-figure {
    width: 80px;
    height: 80px;
    font-size: 36px;
  }

  .strategy-grid {
    grid-template-columns: 1fr;
    gap: 40px;
  }
}
</style>
