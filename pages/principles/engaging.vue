<template>
  <div>    <!-- Hero Section -->
    <PrincipleHero
      :number="4"
      title="Engaging & Rewarding"
      tagline="Learning Should Spark Joy"
      breadcrumb-name="Engaging & Rewarding"
    />

    <!-- Story Section -->
    <PrincipleStory
      :intro="storyIntro"
      :chapters="storyChapters"
    />

    <!-- Journey Visual Section -->
    <section class="journey-visual">
      <div class="journey-container">
        <div style="text-align: center; margin-bottom: 50px;">
          <h2 style="font-size: 2.5rem; color: var(--primary-orange);">The Learning Journey</h2>
          <p style="font-size: 1.2rem; opacity: 0.9;">Every struggle has its reward</p>
        </div>
        
        <div class="journey-horizontal">
          <div class="journey-track">
            <div class="journey-progress-line"></div>
            
            <div class="journey-stop" style="animation-delay: 0.1s;">
              <div class="stop-marker struggle">
                <span class="stop-icon">😫</span>
              </div>
              <div class="stop-content">
                <h3>The First Struggle</h3>
                <p>Head on the table, exhausted from a simple loop. This is where most people quit.</p>
              </div>
            </div>
            
            <div class="journey-stop" style="animation-delay: 0.3s;">
              <div class="stop-marker breakthrough">
                <span class="stop-icon">💡</span>
              </div>
              <div class="stop-content">
                <h3>The Breakthrough</h3>
                <p>Something clicks. The loop works! That wonderful feeling of progress fuels the next challenge.</p>
              </div>
            </div>
            
            <div class="journey-stop" style="animation-delay: 0.5s;">
              <div class="stop-marker euphoria">
                <span class="stop-icon">🎉</span>
              </div>
              <div class="stop-content">
                <h3>The Euphoria</h3>
                <p>First complete project working. Pure joy. This is what makes all the struggle worthwhile.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Flame Section -->
    <section class="flame-section">
      <div class="flame-container">
        <h2 style="font-size: 2.5rem; color: var(--primary-orange); margin-bottom: 20px;">The Flame of Passion</h2>
        
        <div class="flame-visual">
          <div class="flame"></div>
        </div>
        
        <div class="flame-text">
          <p>
            Every learner starts with a flame of passion. It might be curiosity, ambition, or necessity. 
            But that flame is fragile. Without fuel—without those moments of success and recognition—it dies.
          </p>
          <p style="margin-top: 20px;">
            <strong>Our job is to be the keepers of that flame.</strong>
          </p>
        </div>
      </div>
    </section>

    <!-- Celebration Section -->
    <section class="celebration-section">
      <div style="text-align: center; margin-bottom: 50px;">
        <h2 style="font-size: 2.5rem; color: var(--primary-orange);">How We Celebrate Your Journey</h2>
        <p style="font-size: 1.2rem; opacity: 0.9;">Every victory matters, no matter how small</p>
      </div>
      
      <div class="celebration-grid">
        <div class="celebration-card" style="animation-delay: 0.1s;">
          <span class="celebration-icon">🏆</span>
          <h3>Milestone Recognition</h3>
          <p>Every breakthrough is celebrated—from your first working function to your first deployed app.</p>
        </div>
        
        <div class="celebration-card" style="animation-delay: 0.2s;">
          <span class="celebration-icon">📖</span>
          <h3>Success Stories</h3>
          <p>Your journey becomes inspiration for others. We share learner victories to light the path ahead.</p>
        </div>
        
        <div class="celebration-card" style="animation-delay: 0.3s;">
          <span class="celebration-icon">💬</span>
          <h3>Community Cheering</h3>
          <p>A supportive community that understands the struggle and celebrates every win together.</p>
        </div>
        
        <div class="celebration-card" style="animation-delay: 0.4s;">
          <span class="celebration-icon">🎯</span>
          <h3>Progress Tracking</h3>
          <p>Visual progress that shows how far you've come, reminding you that every step counts.</p>
        </div>
        
        <div class="celebration-card" style="animation-delay: 0.5s;">
          <span class="celebration-icon">🌟</span>
          <h3>Struggle Recognition</h3>
          <p>We honor the struggle itself. Every bug fixed, every concept grasped is a victory worth noting.</p>
        </div>
        
        <div class="celebration-card" style="animation-delay: 0.6s;">
          <span class="celebration-icon">🔥</span>
          <h3>Passion Projects</h3>
          <p>Showcase your creations. Your projects inspire others and prove what's possible.</p>
        </div>
      </div>
    </section>    <!-- Practice Section -->
    <PrinciplePractice
      title="Keeping the Flame Alive"
      subtitle="Practical ways we make learning engaging and rewarding"
      :examples="practiceExamples"
      background-color="var(--darker-bg)"
      list-icon="🔥"
    />

    <!-- Quote Section -->
    <PrincipleQuote
      quote="The flame of passion is what allows you to learn anything, but that flame needs fuel. Every small victory, every breakthrough moment, every 'aha!' - these are the fuel that keeps learners going when the journey gets tough. We must celebrate them all."
    />

    <!-- Navigation Section -->
    <PrincipleNavigation current-slug="engaging" />
  </div>
</template>

<script setup lang="ts">
import type { StoryChapter, StoryContent, PracticeExample } from '~/types'

// SEO and meta management
useSEO({
  title: 'Engaging & Rewarding: Learning Should Spark Joy | Principle #4',
  description: 'Discover how celebrating small victories and recognizing struggle keeps the flame of passion alive in learning. Every breakthrough deserves recognition.',
  keywords: ['engaging learning', 'rewarding education', 'skill-wanderer principle 4', 'learning motivation', 'celebrate success'],
  type: 'article',
  structuredData: createArticleSchema(
    'Engaging & Rewarding: Learning Should Spark Joy | Principle #4',
    'Discover how celebrating small victories and recognizing struggle keeps the flame of passion alive in learning. Every breakthrough deserves recognition.',
    'https://skill-wanderer.com/principles/engaging'
  )
})

// Story content
const storyIntro = "I call our fourth principle <strong>Engaging & Rewarding</strong>, and to explain it, I have to tell you about my own journey into technology."

const storyChapters: StoryChapter[] = [
  {
    icon: "🚀",
    title: "From Import-Export to Code",
    content: [
      {
        type: "text",
        text: "Before I was a developer, I was an import-export manager. I will never forget the day I decided to learn how to code. HTML and CSS were manageable, but my first JavaScript <code>for</code> loop? That was a different story."
      },
      {
        type: "text", 
        text: "For any experienced developer reading this, a simple loop seems trivial. But for someone just starting, it can feel like an impossible mountain. I remember that first week vividly. I felt like I was mixing my code with my frustration, my head on the table in defeat. Each attempt to write a simple loop took so much mental energy that I'd have to lie down, completely exhausted, and the loop would <em>still</em> be wrong."
      },
      {
        type: "personal-story",
        text: "I can still picture myself at that tiny desk, staring at the screen at 2 AM, wondering if I'd made a terrible mistake leaving my stable career. The for loop mocked me. Every semicolon felt like a mountain, every bracket a puzzle I couldn't solve. I genuinely thought I might not be smart enough for this."
      },
      {
        type: "text",
        text: "Then, the next week, it was still hard, but something clicked. Somehow, a loop worked. And that feeling… it was wonderful. Later, when I built my first complete, fully-working webpage with HTML, CSS, and JavaScript, the feeling was pure euphoria."
      }
    ]
  },
  {
    icon: "⚔️",
    title: "The Samurai's Wisdom",
    content: [
      {
        type: "text",
        text: "I am a firm believer in \"no pain, no gain.\" Learning is <em>supposed</em> to be hard. But I know with absolute certainty that without those moments—the wonderful feeling of a working loop, the euphoria of a finished page—I would have given up a long time ago."
      },      {
        type: "text",
        text: "This experience is why I empathize so deeply with every learner. The journey is difficult, and it's my job to help them manage that stress. It reminds me of my old import-export boss when I was first learning that job and felt hopeless. He was a true character, like a modern-day samurai, and he encouraged me with a Japanese mindset:"
      },
      {
        type: "quote",
        text: "If everyone can do it, I can do it. If no one can do it, I will be the first.",
        author: "My Samurai Boss"
      },
      {
        type: "text",
        text: "He taught me that overcoming the most difficult challenges is what makes a hero, because so few people can do what you can then do. His encouragement made me feel ready for any battle. I eventually became one of the best on his team, winning awards, because I learned to embrace the struggle, fueled by the reward of mastery."
      }
    ]
  },
  {
    icon: "🔥",
    title: "The Flame That Must Not Die",
    content: [
      {
        type: "text",
        text: "This all taught me one thing: <strong>the flame of passion is what allows you to learn anything, but that flame needs fuel.</strong>"
      },
      {
        type: "text",
        text: "The struggle of learning is the engagement. The feeling of success is the reward. The reward is the fuel."
      },
      {
        type: "text",
        text: "This is why our <strong>Engaging & Rewarding</strong> principle is so crucial. When our learners make it through a difficult challenge, that achievement <em>must</em> be recognized. Their story needs to be told, their success needs to be seen, their accomplishment needs to be felt. Because until a skill is fully mastered, the flame of passion must not die. Our organization will be the place that celebrates those small, wonderful victories that make the entire difficult journey worthwhile."
      }
    ]
  }
]

// Practice examples
const practiceExamples: PracticeExample[] = [
  {
    title: "Gamified Challenges",
    items: [
      "Break complex topics into conquerable challenges",
      "Clear objectives that feel achievable, not overwhelming",
      "Immediate feedback that shows progress",
      "Optional harder challenges for those ready to level up"
    ]
  },
  {
    title: "The Victory Log",
    items: [
      "Personal journal of every breakthrough moment",
      "Reminder of past victories when facing new challenges",
      "Share victories with the community for encouragement",
      "Look back and see how \"impossible\" became \"easy\""
    ]
  },
  {
    title: "Struggle Support System",
    items: [
      "Normalize the struggle - everyone goes through it",
      "Mentors who remember their own difficult beginnings",
      "Break points - knowing when to rest and recharge",
      "Alternative approaches when one way isn't working"
    ]
  }
]

// Intersection observer for animations
onMounted(() => {
  const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
  }
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        (entry.target as HTMLElement).style.opacity = '1'
      }
    })
  }, observerOptions)

  document.querySelectorAll('.journey-stop, .celebration-card').forEach(item => {
    observer.observe(item)
  })
})
</script>

<style scoped>
/* Journey Visual Section */
.journey-visual {
  padding: 80px 20px;
  background: var(--dark-bg);
}

.journey-container {
  max-width: 1200px;
  margin: 0 auto;
}

.journey-horizontal {
  margin-top: 80px;
  padding: 0 40px;
}

.journey-track {
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
}

.journey-progress-line {
  position: absolute;
  top: 40px;
  left: 80px;
  right: 80px;
  height: 4px;
  background: linear-gradient(90deg, rgba(255, 107, 107, 0.3) 0%, rgba(76, 175, 80, 0.3) 50%, rgba(255, 217, 61, 0.3) 100%);
  z-index: 0;
}

.journey-progress-line::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(90deg, #ff6b6b 0%, var(--success-green) 50%, var(--accent-yellow) 100%);
  transform: scaleX(0);
  transform-origin: left;
  animation: progressFill 3s ease-out forwards;
  animation-delay: 0.5s;
}

@keyframes progressFill {
  to {
    transform: scaleX(1);
  }
}

.journey-stop {
  flex: 1;
  text-align: center;
  position: relative;
  z-index: 1;
  opacity: 0;
  animation: fadeInUp 0.6s ease-out forwards;
}

.stop-marker {
  width: 80px;
  height: 80px;
  margin: 0 auto 30px;
  background: var(--card-bg);
  border: 4px solid var(--primary-orange);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  transition: all 0.3s ease;
}

.stop-marker::before {
  content: '';
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 100%;
  height: 100%;
  border-radius: 50%;
  background: radial-gradient(circle, rgba(255, 255, 255, 0.1) 0%, transparent 70%);
  opacity: 0;
  transition: all 0.3s ease;
}

.journey-stop:hover .stop-marker::before {
  opacity: 1;
  width: 120%;
  height: 120%;
}

.stop-marker.struggle {
  border-color: #ff6b6b;
  background: rgba(255, 107, 107, 0.1);
}

.stop-marker.breakthrough {
  border-color: var(--success-green);
  background: rgba(76, 175, 80, 0.1);
}

.stop-marker.euphoria {
  border-color: var(--accent-yellow);
  background: rgba(255, 217, 61, 0.1);
  animation: pulse 2s ease-in-out infinite;
}

@keyframes pulse {
  0%, 100% {
    box-shadow: 0 0 0 0 rgba(255, 217, 61, 0.4);
  }
  50% {
    box-shadow: 0 0 0 20px rgba(255, 217, 61, 0);
  }
}

.stop-icon {
  font-size: 36px;
  display: block;
}

.stop-content {
  max-width: 300px;
  margin: 0 auto;
}

.stop-content h3 {
  color: white;
  margin-bottom: 10px;
  font-size: 1.3rem;
}

.stop-content p {
  opacity: 0.8;
  line-height: 1.6;
  font-size: 0.95rem;
}

/* Flame Section */
.flame-section {
  padding: 80px 20px;
  background: var(--darker-bg);
  text-align: center;
}

.flame-container {
  max-width: 800px;
  margin: 0 auto;
}

.flame-visual {
  width: 200px;
  height: 200px;
  margin: 40px auto;
  position: relative;
  animation: flicker 3s ease-in-out infinite;
}

.flame {
  position: absolute;
  bottom: 0;
  left: 50%;
  transform: translateX(-50%);
  width: 100px;
  height: 150px;
  background: radial-gradient(ellipse at bottom, var(--flame-yellow) 0%, var(--flame-orange) 40%, var(--flame-red) 100%);
  border-radius: 50% 50% 50% 50% / 60% 60% 40% 40%;
  filter: blur(2px);
  animation: flame-dance 2s ease-in-out infinite;
}

@keyframes flame-dance {
  0%, 100% { transform: translateX(-50%) scale(1) rotate(-2deg); }
  50% { transform: translateX(-50%) scale(1.1) rotate(2deg); }
}

@keyframes flicker {
  0%, 100% { opacity: 1; }
  50% { opacity: 0.9; }
}

.flame-text p {
  font-size: 1.2rem;
  opacity: 0.9;
  line-height: 1.8;
}

/* Celebration Section */
.celebration-section {
  padding: 80px 20px;
  background: var(--dark-bg);
}

.celebration-grid {
  max-width: 1200px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  gap: 30px;
  margin-top: 50px;
}

.celebration-card {
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

.celebration-card::before {
  content: '';
  position: absolute;
  top: -50%;
  left: -50%;
  width: 200%;
  height: 200%;
  background: radial-gradient(circle, rgba(255, 217, 61, 0.1) 0%, transparent 70%);
  opacity: 0;
  transition: opacity 0.3s ease;
}

.celebration-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3);
}

.celebration-card:hover::before {
  opacity: 1;
}

.celebration-icon {
  font-size: 3rem;
  margin-bottom: 20px;
  display: block;
}

.celebration-card h3 {
  color: white;
  margin-bottom: 15px;
  font-size: 1.3rem;
}

.celebration-card p {
  opacity: 0.8;
  font-size: 0.95rem;
  line-height: 1.7;
}

/* Story-specific styles */

/* Responsive */
@media (max-width: 768px) {
  .journey-horizontal {
    padding: 0 20px;
  }

  .journey-track {
    flex-direction: column;
    gap: 60px;
  }

  .journey-progress-line {
    top: 40px;
    left: 50%;
    right: auto;
    width: 4px;
    height: calc(100% - 80px);
    transform: translateX(-50%);
    background: linear-gradient(180deg, rgba(255, 107, 107, 0.3) 0%, rgba(76, 175, 80, 0.3) 50%, rgba(255, 217, 61, 0.3) 100%);
  }

  .journey-progress-line::before {
    background: linear-gradient(180deg, #ff6b6b 0%, var(--success-green) 50%, var(--accent-yellow) 100%);
    transform: scaleY(0);
    animation: progressFillVertical 3s ease-out forwards;
    animation-delay: 0.5s;
  }

  @keyframes progressFillVertical {
    to {
      transform: scaleY(1);
    }
  }
  .celebration-grid {
    grid-template-columns: 1fr;
  }
}
</style>
