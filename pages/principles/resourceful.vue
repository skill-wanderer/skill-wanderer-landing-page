<template>
  <div>    <!-- Hero Section -->
    <PrincipleHero 
      :number="9"
      title="Resourceful Curation & Original Creation"
      tagline="Best of All Worlds"
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
          <h2 style="font-size: 2.5rem; color: var(--primary-orange);">Navigating the Information Jungle</h2>
          <p style="font-size: 1.2rem; opacity: 0.9;">Too many resources, too little guidance</p>
        </div>
        
        <div class="jungle-visual">
          <div class="jungle-label">
            <h3>The Learning Landscape</h3>
            <p>Hundreds of courses, thousands of tutorials, millions of possibilities</p>
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
          <h2 style="font-size: 2.5rem; color: var(--primary-orange);">Our Dual Strategy</h2>
          <p style="font-size: 1.2rem; opacity: 0.9;">Best of both worlds: curation and creation</p>
        </div>
        
        <div class="strategy-grid">
          <div class="strategy-card curation" style="animation-delay: 0.1s;">
            <div class="strategy-header">
              <div class="strategy-icon">🔍</div>
              <h3>Resourceful Curation</h3>
            </div>
            
            <div class="strategy-description">
              <p>Our primary approach: finding and organizing the best existing resources into clear learning pathways.</p>
            </div>
            
            <ul class="strategy-list">
              <li>Discover the highest-quality free and paid resources</li>
              <li>Test and verify every recommendation personally</li>
              <li>Create learning pathways that connect resources logically</li>
              <li>Provide context and guidance for each resource</li>
              <li>Continuously update as better resources emerge</li>
              <li>Maintain strict integrity - no affiliate commissions</li>
            </ul>
          </div>
          
          <div class="strategy-card creation" style="animation-delay: 0.3s;">
            <div class="strategy-header">
              <div class="strategy-icon">🎨</div>
              <h3>Strategic Creation</h3>
            </div>
            
            <div class="strategy-description">
              <p>When curation isn't enough: creating original content to fill critical gaps, especially for free learning paths.</p>
            </div>
            
            <ul class="strategy-list">
              <li>Identify gaps where no quality free resource exists</li>
              <li>Create our own video tutorials and courses</li>
              <li>Develop hands-on projects and exercises</li>
              <li>Write comprehensive guides and documentation</li>
              <li>Build interactive learning tools and platforms</li>
              <li>Ensure all created content remains free forever</li>
            </ul>
          </div>
        </div>
      </div>
    </section>    <!-- Practice Section -->
    <PrinciplePractice 
      title="The Strategy in Action"
      subtitle="How we implement curation and creation"
      :examples="practiceExamples"
      background-color="var(--dark-bg)"
      list-icon="🎯"
    />

    <!-- Quote Section -->
    <PrincipleQuote 
      quote="We don't need to reinvent every wheel, but we will never let a missing wheel stop someone from reaching their destination. Our job is to be the trusted guide who knows both where the best paths already exist and how to build new ones when needed."
      author="Quan Nguyen, Founder of Skill-Wanderer"
    />

    <!-- Navigation Section -->
    <PrincipleNavigation current-slug="resourceful" />  </div>
</template>

<script setup lang="ts">
import type { StoryChapter, PracticeExample } from '~/types'

// Meta tags for SEO
useHead({
  title: 'Resourceful Curation & Original Creation: Best of All Worlds | Principle #9 - Skill-Wanderer',
  meta: [
    { name: 'description', content: 'Discover how Skill-Wanderer combines expert curation of existing resources with strategic original content creation to provide the best learning experience.' }
  ]
})

// Story content data
const storyIntro = 'I call our ninth principle <strong>Resourceful Curation & Original Creation</strong>, and it is born from my own journey as a learner.'

const storyChapters: StoryChapter[] = [
  {
    icon: '🌐',
    title: 'My Learning Journey',
    content: [
      {
        type: 'text',
        text: 'From the very beginning of my transition into coding up until now, nearly all of my learning has come from online resources. I\'ve experienced it all: content from my old online university, courses from famous MOOC platforms, affordable off-the-shelf courses from various marketplaces, and countless books. I supplemented this with mentorship when I could, but at times, I\'ve been entirely self-taught, navigating a new stack of technologies on my own.'
      },
      {
        type: 'personal-story',
        text: 'I remember spending entire weekends just searching for the right React course. There were hundreds of options - some outdated, some too advanced, some missing crucial concepts. I\'d start three different courses before finding one that actually clicked. The abundance of choice was both a blessing and a curse.'
      },
      {
        type: 'text',
        text: 'This journey taught me two fundamental truths. First, there is an incredible wealth of high-quality learning material already available on the internet. Second, my biggest challenge was never a lack of resources, but the exact opposite: there were <strong>too many choices</strong>. It was a jungle of information, and finding the right path was the hardest part.'
      }
    ]
  },
  {
    icon: '🤔',
    title: 'The Core Question',
    content: [
      {
        type: 'text',
        text: 'This brings me to a core question that shapes this principle: Why should we spend our time and energy creating a brand new course that might quickly become outdated, when excellent, continuously updated materials are readily available?'
      },
      {
        type: 'text',
        text: 'Our organization is mission-driven. Our goal is the <strong>result</strong>—the impact we have on learners. Therefore, it makes perfect sense to prioritize reusing the best materials that already exist. This is the "Resourceful Curation" part of our principle. Our primary value isn\'t in recreating every wheel. It\'s in being the expert guide—the <strong>narrative voice that creates a clear, trustworthy path</strong> through the jungle of online resources. We will curate the best materials into comprehensive learning pathways and offer optional mentorship when the material gets tough.'
      },      {
        type: 'integrity-notice',
        text: '<strong>For any learner who might feel doubt about our recommendations for third-party resources, we want to be perfectly clear:</strong> our entire curation process is strictly governed by Principle #2 (Integrity and Impartiality). We will never accept any form of revenue, commission, or referral fee for guiding you to any resource. Our only motivation is finding the absolute best material for <strong>your</strong> learning journey.',
        additionalText: '🛡️ Our Integrity Promise'
      }
    ]
  },
  {
    icon: '🎨',
    title: 'When We Create',
    content: [
      {
        type: 'text',
        text: 'However, there is one critical problem with relying only on curation: sometimes, a high-quality <strong>free</strong> resource for a specific, necessary topic simply doesn\'t exist.'
      },
      {
        type: 'text',
        text: 'This is where "Original Creation" comes in.'
      },
      {
        type: 'text',
        text: 'To fulfill our first and most important principle—<strong>Accessible</strong>—we must ensure there is always a free path for core learning. When we cannot find a suitable free third-party resource, <strong>that is when we will step in to create our own original content, including our own video teachings.</strong>'
      },
      {
        type: 'text',
        text: 'This dual strategy is practical and mission-focused. It allows us to be efficient and resourceful by leveraging the best of what\'s out there, while ensuring we never compromise on our promise of providing free, accessible, and high-quality education for all.'
      }
    ]
  }
]

// Practice examples data
const practiceExamples: PracticeExample[] = [
  {
    title: 'Curation Process',
    items: [
      'Evaluate content quality, teaching style, and learning outcomes',
      'Create detailed pathway maps showing progression and connections',
      'Provide honest, unbiased reviews and recommendations',
      'Always prioritize free resources when quality is comparable'
    ]
  },
  {
    title: 'Creation Triggers',
    items: [
      'No suitable free alternative exists for essential concepts',
      'Existing resources have significant gaps or outdated information',
      'Complex topics need simplified, beginner-friendly explanations',
      'Industry-specific knowledge requires practical, real-world context'
    ]
  },
  {
    title: 'Quality Assurance',
    items: [
      'Regular reviews to ensure resources remain current and accessible',
      'Learner feedback incorporated into pathway improvements',
      'Created content follows the same standards as curated materials',
      'Transparent marking of when content is our own vs third-party'
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
