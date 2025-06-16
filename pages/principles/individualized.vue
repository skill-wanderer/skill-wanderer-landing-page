<template>
  <div>
    <!-- Navigation -->
    <TheNavigation />

    <!-- Hero Section -->
    <PrincipleHero 
      :number="3"
      title="Individualized"
      tagline="Your Path, Your Way"
    />    <!-- Story Section -->
    <PrincipleStory 
      :intro="storyIntro"
      :chapters="storyChapters"
    />

    <!-- Learning Styles Section -->
    <section class="learning-styles">
      <div class="styles-container">
        <div class="section-header">
          <h2>Many Paths, One Destination</h2>
          <p>Every learning style I've witnessed has led to mastery</p>
        </div>
        
        <div class="styles-grid">
          <div class="style-card breaker" style="animation-delay: 0.1s;">
            <div class="style-icon">💥</div>
            <h3>The Code Breaker</h3>
            <p>Learns by diving in, breaking things, and fixing them. Every error is a teacher, every bug a lesson.</p>
          </div>
          
          <div class="style-card watcher" style="animation-delay: 0.2s;">
            <div class="style-icon">👀</div>
            <h3>The Course Watcher</h3>
            <p>Needs the full picture before starting. Watches complete courses, building confidence through comprehensive understanding.</p>
          </div>
          
          <div class="style-card collaborator" style="animation-delay: 0.3s;">
            <div class="style-icon">👥</div>
            <h3>The Collaborator</h3>
            <p>Thrives in pair programming, absorbing knowledge through shared experiences and real-time feedback.</p>
          </div>
          
          <div class="style-card reader" style="animation-delay: 0.4s;">
            <div class="style-icon">📚</div>
            <h3>The Documentation Reader</h3>
            <p>Prefers written words to videos. Finds clarity in official docs and technical specifications.</p>
          </div>
          
          <div class="style-card planner" style="animation-delay: 0.5s;">
            <div class="style-icon">📋</div>
            <h3>The Meticulous Planner</h3>
            <p>Maps out every step before starting. Learns just what's needed for each phase of the journey.</p>
          </div>
          
          <div class="style-card teacher" style="animation-delay: 0.6s;">
            <div class="style-icon">🎯</div>
            <h3>The Teacher-Learner</h3>
            <p>Masters concepts by teaching them. Transforms learning into sharing, deepening understanding through explanation.</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Pace Comparison Section -->
    <section class="pace-section">
      <div class="pace-container">
        <div class="section-header">
          <h2>Speed is Not the Goal</h2>
          <p>Understanding is what matters</p>
        </div>
        
        <div class="pace-comparison">
          <div class="pace-card">
            <span class="pace-icon">🚀</span>
            <h3>The Rapid Learner</h3>
            <ul class="pace-benefits">
              <li>Absorbs new frameworks in days</li>
              <li>Quick to prototype and experiment</li>
              <li>Brings fresh energy to teams</li>
              <li>Excellent at rapid iteration</li>
            </ul>
          </div>
          
          <div class="pace-card">
            <span class="pace-icon">🗿</span>
            <h3>The Methodical Builder</h3>
            <ul class="pace-benefits">
              <li>Builds unshakeable foundations</li>
              <li>Becomes the team's firefighter</li>
              <li>Deep, comprehensive understanding</li>
              <li>Code that stands the test of time</li>
            </ul>
          </div>
        </div>
        
        <p class="pace-conclusion">
          Both paths lead to mastery. Both learners become invaluable.
        </p>
      </div>
    </section>

    <!-- Hero Journey Section -->
    <section class="hero-journey">
      <div class="section-header">
        <h2>You Are the Hero of Your Story</h2>
        <p>We're just the narrators providing the map</p>
      </div>
      
      <div class="journey-visual">
        <div class="journey-path"></div>
        <div class="journey-steps">
          <div class="journey-step" style="animation-delay: 0.1s;">
            <div class="step-icon">🗺️</div>
            <h4>We Provide the Map</h4>
            <p>All resources laid out</p>
          </div>
          
          <div class="journey-step active" style="animation-delay: 0.3s;">
            <div class="step-icon">🧭</div>
            <h4>You Choose the Path</h4>
            <p>Your way, your pace</p>
          </div>
          
          <div class="journey-step" style="animation-delay: 0.5s;">
            <div class="step-icon">🏆</div>
            <h4>You Reach Mastery</h4>
            <p>On your own terms</p>
          </div>
        </div>
      </div>
    </section>    <!-- Practice Section -->
    <PrinciplePractice 
      title="How We Honor Your Individuality"
      subtitle="Practical ways we support every learning journey"
      :examples="practiceExamples"
      background-color="var(--darker-bg)"
      list-icon="✓"
    />

    <!-- Quote Section -->
    <PrincipleQuote 
      quote="The people who improve the most are the ones who discover their own way of learning and stick to it. We're not here to write your story—we're here to provide all the chapters so you can arrange them however works best for you."
    />

    <!-- Navigation Section -->
    <PrincipleNavigation current-slug="individualized" />

    <!-- Footer -->
    <TheFooter />
  </div>
</template>

<script setup lang="ts">
import { onMounted } from 'vue'

// Meta tags for SEO
useHead({
  title: 'Individualized: Your Path, Your Way | Principle #3 - Skill-Wanderer',
  meta: [
    { name: 'description', content: 'Discover how Skill-Wanderer honors every learner\'s unique style and pace, providing multiple resources for every concept so you can choose your own path to mastery.' }
  ]
})

// Story content data
const storyIntro = 'I call our third principle <strong>Individualized</strong>, and it comes directly from the most important lesson I\'ve learned in my entire career leading developers.'

const storyChapters = [
  {
    icon: '🌟',
    title: 'Every Learner is Unique',
    content: [
      {
        type: 'text' as const,
        text: 'Just like in my story for our first principle, my experience comes from guiding many developers, all with different starting points. But the differences ran much deeper than just their initial skill level; I quickly realized that each person has a unique and deeply personal way of learning effectively.'
      },
      {
        type: 'text' as const,
        text: 'I\'ve seen it all. I\'ve worked with the developer who needs to <strong>code first</strong> and break things, learning by fixing his own mistakes. I\'ve known another who needs to <strong>watch an entire video course</strong> from beginning to end before he gathers the confidence to write a single line of code. I\'ve seen a young woman who learns best by <strong>pair programming with a senior mentor</strong>, absorbing knowledge through collaboration. I\'ve known another who <strong>prefers reading documentation</strong> to watching any video, and another who meticulously <strong>plans every step</strong>, then browses the internet to learn just what he needs for that single step.'
      },
      {
        type: 'personal-story' as const,
        text: 'One of the most memorable cases was a junior developer with less than a year of experience. His unique way of truly mastering a concept was to learn it and then teach it back to me. And yes, I was not ashamed at all to learn from him; his ability was undeniable. It proved to me that the path to skill has little to do with years of experience and everything to do with finding YOUR way.'
      }
    ]
  },
  {
    icon: '⏱️',
    title: 'The Myth of Speed',
    content: [
      {
        type: 'text' as const,
        text: '<strong>This same principle applies to the pace of learning.</strong> I\'ve worked with developers who learn incredibly quickly, absorbing new frameworks in days. But I\'ve also had the privilege of leading a developer who many might have called "slow."'
      },
      {
        type: 'text' as const,
        text: 'Every step he took was deliberate, careful, and concrete. He built his knowledge like a solid stone foundation, not a house of cards. And time after time, when a "quick" developer\'s rapidly built code would break under pressure, it was this "slow," methodical developer who became our <strong>firefighter</strong>, calmly stepping in to fix the problem with his deep and solid understanding.'
      },
      {
        type: 'text' as const,
        text: 'This individuality extends beyond <em>how</em> people learn to <em>when</em> they learn. I knew a developer whose most productive learning hours were in the dead of night, when he felt most focused and the world was quiet.'
      }
    ]
  },
  {
    icon: '📖',
    title: 'The Learner\'s Story',
    content: [
      {
        type: 'text' as const,
        text: 'My experience taught me a simple truth: everyone is different, and nobody can or should be forced to learn in the exact same way as someone else. Time and time again, I have found that <strong>the people who improve the most are the ones who discover their own way of learning and stick to it.</strong> As a leader, I have no quarrel with how my team learns, as long as they <em>are</em> learning and improving.'
      },
      {
        type: 'text' as const,
        text: 'This is the heart of our <strong>Individualized</strong> principle. We are not here to dictate a single, rigid path. That\'s not our story to write.'
      },
      {
        type: 'text' as const,
        text: 'It is <strong>the learner\'s story</strong>.'
      },
      {
        type: 'text' as const,
        text: 'Our role is to be the narrator—the guide who lays out all the resources: the video courses, the readings, the hands-on projects, the collaborative opportunities. But it is the learner, the hero of their own story, who <strong>must be the one to choose their own path</strong> and their own pace.'
      }
    ]
  }
]

// Practice examples data
const practiceExamples = [
  {
    title: 'Multiple Resources for Every Concept',
    items: [
      'Video courses for visual learners who need to see concepts in action',
      'Written tutorials and documentation for those who learn by reading',
      'Hands-on projects for learners who need to build to understand',
      'Community forums for collaborative learners who thrive on discussion'
    ]
  },
  {
    title: 'Flexible Learning Paths',
    items: [
      'No enforced order - jump to what interests you most',
      'Self-paced progress - take your time or speed through',
      'Optional depth - choose how deep you want to go on each topic',
      'Multiple entry points - start where you feel comfortable'
    ]
  },
  {
    title: 'Celebrating Every Journey',
    items: [
      'No comparison or competition - your progress is your own',
      'Recognition for different types of achievements',
      'Stories from learners with diverse paths to success',
      'Encouragement to find and trust your unique learning style'
    ]
  }
]

// Client-side JavaScript for interactions
onMounted(() => {
  // Intersection Observer for animations
  const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
  }
  
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        (entry.target as HTMLElement).style.opacity = '1'
      }
    })  }, observerOptions)

  // Observe animated elements
  document.querySelectorAll('.style-card, .journey-step').forEach(item => {
    observer.observe(item)
  })
})
</script>

<style scoped>
/* Learning Styles Section */
.learning-styles {
  padding: 80px 20px;
  background: var(--dark-bg);
}

.styles-container {
  max-width: 1200px;
  margin: 0 auto;
}

.section-header {
  text-align: center;
  margin-bottom: 50px;
}

.section-header h2 {
  font-size: 2.5rem;
  color: var(--primary-orange);
  margin-bottom: 10px;
}

.section-header p {
  font-size: 1.2rem;
  opacity: 0.9;
}

.styles-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 30px;
  margin-top: 50px;
}

.style-card {
  background: var(--card-bg);
  border: 1px solid rgba(255, 107, 53, 0.2);
  border-radius: 20px;
  padding: 40px;
  text-align: center;
  transition: all 0.3s ease;
  opacity: 0;
  animation: fadeInUp 0.6s ease-out forwards;
  position: relative;
  overflow: hidden;
}

.style-card::before {
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

.style-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3);
}

.style-card:hover::before {
  opacity: 0.3;
}

.style-icon {
  font-size: 3rem;
  margin-bottom: 20px;
  display: block;
}

.style-card h3 {
  color: white;
  margin-bottom: 15px;
  font-size: 1.3rem;
}

.style-card p {
  opacity: 0.8;
  line-height: 1.6;
}

/* Pace Section */
.pace-section {
  padding: 80px 20px;
  background: var(--darker-bg);
}

.pace-container {
  max-width: 1000px;
  margin: 0 auto;
}

.pace-comparison {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
  gap: 40px;
  margin-top: 50px;
}

.pace-card {
  background: var(--card-bg);
  border: 1px solid rgba(255, 107, 53, 0.2);
  border-radius: 20px;
  padding: 40px;
  text-align: center;
  transition: all 0.3s ease;
}

.pace-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3);
  border-color: rgba(255, 107, 53, 0.4);
}

.pace-icon {
  font-size: 4rem;
  margin-bottom: 20px;
  display: block;
}

.pace-card h3 {
  color: white;
  margin-bottom: 25px;
  font-size: 1.4rem;
}

.pace-benefits {
  list-style: none;
  padding: 0;
  text-align: left;
}

.pace-benefits li {
  padding: 10px 0;
  padding-left: 30px;
  position: relative;
  opacity: 0.9;
}

.pace-benefits li::before {
  content: '✓';
  position: absolute;
  left: 0;
  color: var(--success-green);
  font-weight: bold;
  font-size: 1.2rem;
}

.pace-conclusion {
  text-align: center;
  margin-top: 40px;
  font-size: 1.1rem;
  opacity: 0.9;
  font-style: italic;
}

/* Hero Journey Section */
.hero-journey {
  padding: 80px 20px;
  background: var(--dark-bg);
}

.journey-visual {
  max-width: 900px;
  margin: 50px auto;
  position: relative;
  padding: 60px 0;
}

.journey-path {
  position: absolute;
  top: 50%;
  left: 0;
  right: 0;
  height: 4px;
  background: linear-gradient(90deg, var(--primary-orange), var(--accent-yellow));
  transform: translateY(-50%);
  opacity: 0.3;
}

.journey-steps {
  display: flex;
  justify-content: space-between;
  position: relative;
  z-index: 1;
}

.journey-step {
  text-align: center;
  flex: 1;
  opacity: 0;
  animation: fadeInUp 0.6s ease-out forwards;
}

.step-icon {
  width: 80px;
  height: 80px;
  background: var(--card-bg);
  border: 3px solid var(--primary-orange);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto 20px;
  font-size: 36px;
  position: relative;
  z-index: 2;
}

.journey-step.active .step-icon {
  background: linear-gradient(135deg, var(--primary-orange), var(--deep-orange));
  box-shadow: 0 5px 20px rgba(255, 107, 53, 0.4);
}

.journey-step h4 {
  color: white;
  margin-bottom: 10px;
  font-size: 1.1rem;
}

.journey-step p {
  opacity: 0.7;
  font-size: 0.9rem;
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
  .styles-grid {
    grid-template-columns: 1fr;
  }

  .pace-comparison {
    grid-template-columns: 1fr;
  }

  .journey-steps {
    flex-direction: column;
    gap: 40px;
  }

  .journey-path {
    width: 4px;
    height: 100%;
    left: 50%;
    top: 0;
    transform: translateX(-50%);
  }
}
</style>
