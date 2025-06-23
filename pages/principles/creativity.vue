<template>
  <div>    <!-- Hero Section -->
    <PrincipleHero
      :number="5"
      title="Creativity & Learning Through Failure"
      tagline="Savor the Failure"
      breadcrumb-name="Creativity & Learning Through Failure"
    />

    <!-- Story Section -->
    <PrincipleStory
      :intro="storyIntro"
      :chapters="storyChapters"
    />

    <!-- Failure vs Success Comparison Section -->
    <section class="comparison-section">
      <div class="comparison-container">
        <div style="text-align: center; margin-bottom: 50px;">
          <h2 style="font-size: 2.5rem; color: var(--primary-orange);">The Two Faces of Experience</h2>
          <p style="font-size: 1.2rem; opacity: 0.9;">Understanding the hidden dangers and values</p>
        </div>
        
        <div class="comparison-grid">
          <div class="comparison-card failure" style="animation-delay: 0.1s;">
            <div class="comparison-header">
              <div class="comparison-icon">❌</div>
              <h3>Examined Failure</h3>
            </div>
            <ul class="comparison-points">
              <li>Deep understanding of WHY something doesn't work</li>
              <li>Memorable lessons that stick forever</li>
              <li>Builds resilience and problem-solving skills</li>
              <li>Creates innovation through experimentation</li>
              <li>Develops humility and continuous learning</li>
            </ul>
          </div>
          
          <div class="comparison-card success" style="animation-delay: 0.3s;">
            <div class="comparison-header">
              <div class="comparison-icon">✅</div>
              <h3>Unexamined Success</h3>
            </div>
            <ul class="comparison-points">
              <li>Might not understand WHY it worked</li>
              <li>Can't replicate in different contexts</li>
              <li>Breeds overconfidence and complacency</li>
              <li>Misses deeper insights and patterns</li>
              <li>Creates fragile knowledge that breaks under pressure</li>
            </ul>
          </div>
        </div>
      </div>
    </section>

    <!-- Wisdom Quote Section -->
    <section class="wisdom-section">
      <div class="wisdom-container">
        <div class="wisdom-quote">
          <p class="wisdom-text">
            It is normal to fail, as long as you know <strong>why</strong> you failed.
          </p>
          <p class="wisdom-subtext">
            But it is dangerous to be right, if you don't know <strong>why</strong> you were right.
          </p>
        </div>
      </div>
    </section>

    <!-- Growth Timeline Section -->
    <section class="growth-section">
      <div class="growth-container">
        <div style="text-align: center; margin-bottom: 50px;">
          <h2 style="font-size: 2.5rem; color: var(--primary-orange);">My Journey of Failures & Growth</h2>
          <p style="font-size: 1.2rem; opacity: 0.9;">Each failure taught me more than any success</p>
        </div>
        
        <div class="growth-timeline">
          <div class="growth-path">
            <div class="growth-line"></div>
            
            <div class="growth-point" style="animation-delay: 0.1s;">
              <div class="growth-marker">📦</div>
              <div class="growth-content">
                <h4>Shipment Crisis</h4>
                <p>Wrong containers, angry client, valuable lesson</p>
              </div>
            </div>
            
            <div class="growth-point" style="animation-delay: 0.2s;">
              <div class="growth-marker">🏭</div>
              <div class="growth-content">
                <h4>Factory Near-Disaster</h4>
                <p>Almost out of stock, learned supply chain deeply</p>
              </div>
            </div>
            
            <div class="growth-point" style="animation-delay: 0.3s;">
              <div class="growth-marker">💔</div>
              <div class="growth-content">
                <h4>First Startup Failure</h4>
                <p>Wrong market timing, understood customer needs</p>
              </div>
            </div>
            
            <div class="growth-point" style="animation-delay: 0.4s;">
              <div class="growth-marker">🐛</div>
              <div class="growth-content">
                <h4>Bad Architecture</h4>
                <p>System crashed, mastered scalability principles</p>
              </div>
            </div>
            
            <div class="growth-point" style="animation-delay: 0.5s;">
              <div class="growth-marker">👥</div>
              <div class="growth-content">
                <h4>Team Conflicts</h4>
                <p>Project failed, became better leader</p>
              </div>
            </div>
            
            <div class="growth-point" style="animation-delay: 0.6s;">
              <div class="growth-marker">🚀</div>
              <div class="growth-content">
                <h4>Building Skill-Wanderer</h4>
                <p>Every challenge becomes a lesson to share</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>    <!-- Practice Section -->
    <PrinciplePractice
      title="Fostering Creative Failure"
      subtitle="How we create a safe space for experimentation"
      :examples="practiceExamples"
      background-color="var(--darker-bg)"
      list-icon="🌱"
    />

    <!-- Quote Section -->
    <PrincipleQuote
      quote="We want our learners to 'savor the insights' from their mistakes, because that is where the deepest, most lasting learning happens. In failure, we find the seeds of future success—but only if we take the time to understand why we failed."
    />

    <!-- Navigation Section -->
    <PrincipleNavigation current-slug="creativity" />
  </div>
</template>

<script setup lang="ts">
import type { StoryChapter, StoryContent, PracticeExample } from '~/types'

// SEO and meta management
useSEO({
  title: 'Creativity & Learning Through Failure | Principle #5',
  description: 'Discover how failure becomes the greatest teacher when examined deeply. Learn why unexamined success can be more dangerous than examined failure.',
  keywords: ['learning through failure', 'creativity in education', 'skill-wanderer principle 5', 'failure as teacher', 'growth mindset'],
  type: 'article',
  structuredData: createArticleSchema(
    'Creativity & Learning Through Failure: Savor the Failure | Principle #5',
    'Discover how failure becomes the greatest teacher when examined deeply. Learn why unexamined success can be more dangerous than examined failure.',
    'https://skill-wanderer.com/principles/creativity'
  )
})

// Story content
const storyIntro = "I call our fifth principle <strong>Encouraging Creativity & Learning Through Failure</strong>, because I believe we fundamentally misunderstand the word \"failure.\" Many people see it as just that—an end, a verdict. But over time, I've learned its true, invaluable meaning."

const storyChapters: StoryChapter[] = [
  {
    icon: "🌅",
    title: "The Beginning of Understanding",
    content: [
      {
        type: "text",
        text: "This lesson started in my very first job as an import-export manager, working for the same \"Samurai boss\" I've mentioned. I made many mistakes. I caused shipment delays. I brought a factory to a near out-of-stock crisis. Yet, my boss was always gentle, because he knew I was trying my absolute best and that many of these challenges were simply beyond my abilities at the time. He understood that failure wasn't just possible; it was necessary for growth."
      },
      {
        type: "personal-story",
        text: "I still remember the sinking feeling in my stomach when I realized I'd ordered the wrong containers for a major shipment. The client was furious. The costs were significant. I was certain I'd be fired. Instead, my boss asked me one simple question: \"What did you learn?\" That question changed everything."
      }
    ]
  },
  {
    icon: "📋",
    title: "The Annual Review That Changed Everything",
    content: [
      {
        type: "text",
        text: "I'll never forget what he wrote on my annual review. The review was positive, and I was confused, so I asked him about it. He looked at me and said:"
      },
      {
        type: "annual-review",
        text: "It's true, you are the one who has caused many of the mistakes and failures in this company, perhaps the most.",
        additionalText: "He paused, then continued,",
        author: "However, you never make the same mistake twice. You always learn from it, and because of that, you grow exponentially. So, I hope you will keep making mistakes and failing in the future. I have great hope for you."
      },
      {
        type: "text",
        text: "His words changed my perspective forever. There's a Japanese saying that you learn more from failure than from success, and my life has proven this to be true."
      }
    ]
  },
  {
    icon: "🔍",
    title: "The Deeper Truth",
    content: [
      {
        type: "text",
        text: "I've had three failed start-ups, each painful in its own way, but each one caused me to grow in ways success never could have. In my tech career, I've experienced every kind of failure you can imagine: bad code, bad architecture, bad team dynamics."
      },
      {
        type: "text",
        text: "And here is the crucial lesson: When I experience a failure firsthand, I don't just know <em>that</em> something is wrong; I understand <em>why</em> it is wrong, on a level that nobody could ever just tell me in a classroom. I've seen many people who are so afraid to fail that their abilities stagnate."
      },
      {
        type: "text",
        text: "This leads to the core of this principle. I've always said this: <strong>It is normal to fail, as long as you know why you failed. But it is dangerous to be right, if you don't know why you were right.</strong>"
      },
      {
        type: "text",
        text: "Unexamined success can be a bigger trap than examined failure."
      },
      {
        type: "text",
        text: "That is why our organization will be a place that encourages creativity and experimentation, even when it carries the risk of failure. We will foster an environment where failure isn't a final judgment but a critical data point—the most powerful lesson on the path to mastery. We want our learners, our contributors, and our team to \"savor the insights\" from their mistakes, because that is where the deepest, most lasting learning happens."
      }
    ]
  }
]

// Practice examples
const practiceExamples: PracticeExample[] = [
  {
    title: "Failure Analysis Framework",
    items: [
      "Every mistake comes with a \"What did you learn?\" reflection",
      "Post-mortems focus on insights, not blame",
      "Failure stories shared as valuable teaching moments",
      "Document the WHY behind both failures and successes"
    ]
  },
  {
    title: "Safe Experimentation Zones",
    items: [
      "Sandbox environments where breaking things is encouraged",
      "Low-stakes projects for trying new approaches",
      "Mentorship that celebrates creative attempts",
      "Regular \"failure parties\" to share and learn together"
    ]
  },
  {
    title: "Growth Through Challenge",
    items: [
      "Challenges designed to push beyond comfort zones",
      "Multiple solution paths - no single \"right\" answer",
      "Rewards for innovative approaches, even if they fail",
      "Focus on the journey of discovery, not just the outcome"
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

  document.querySelectorAll('.comparison-card, .growth-point').forEach(item => {
    observer.observe(item)
  })
})
</script>

<style scoped>
/* Failure vs Success Comparison Section */
.comparison-section {
  padding: 80px 20px;
  background: var(--dark-bg);
}

.comparison-container {
  max-width: 1000px;
  margin: 0 auto;
}

.comparison-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 40px;
  margin-top: 50px;
}

.comparison-card {
  background: var(--card-bg);
  border-radius: 20px;
  padding: 40px;
  position: relative;
  transition: all 0.3s ease;
  opacity: 0;
  animation: fadeInUp 0.6s ease-out forwards;
}

.comparison-card.failure {
  border: 2px solid rgba(244, 67, 54, 0.3);
}

.comparison-card.success {
  border: 2px solid rgba(76, 175, 80, 0.3);
}

.comparison-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3);
}

.comparison-header {
  display: flex;
  align-items: center;
  gap: 20px;
  margin-bottom: 30px;
}

.comparison-icon {
  width: 60px;
  height: 60px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 28px;
}

.comparison-card.failure .comparison-icon {
  background: rgba(244, 67, 54, 0.1);
  border: 2px solid var(--failure-red);
}

.comparison-card.success .comparison-icon {
  background: rgba(76, 175, 80, 0.1);
  border: 2px solid var(--success-green);
}

.comparison-card h3 {
  font-size: 1.5rem;
  color: white;
}

.comparison-points {
  list-style: none;
  padding: 0;
}

.comparison-points li {
  padding: 12px 0;
  padding-left: 30px;
  position: relative;
  opacity: 0.9;
  line-height: 1.7;
}

.comparison-points li::before {
  position: absolute;
  left: 0;
  font-size: 1.2rem;
}

.comparison-card.failure .comparison-points li::before {
  content: '✓';
  color: var(--failure-red);
}

.comparison-card.success .comparison-points li::before {
  content: '⚠️';
  color: var(--accent-yellow);
}

/* Wisdom Quote Section */
.wisdom-section {
  padding: 80px 20px;
  background: var(--darker-bg);
  text-align: center;
}

.wisdom-container {
  max-width: 900px;
  margin: 0 auto;
}

.wisdom-quote {
  background: linear-gradient(135deg, rgba(255, 107, 53, 0.1) 0%, rgba(156, 39, 176, 0.05) 100%);
  padding: 60px;
  border-radius: 30px;
  border: 1px solid rgba(255, 107, 53, 0.2);
  position: relative;
  margin-bottom: 40px;
}

.wisdom-quote::before,
.wisdom-quote::after {
  content: '"';
  position: absolute;
  font-size: 6rem;
  opacity: 0.1;
  color: var(--primary-orange);
}

.wisdom-quote::before {
  top: 20px;
  left: 30px;
}

.wisdom-quote::after {
  bottom: 20px;
  right: 30px;
  transform: rotate(180deg);
}

.wisdom-text {
  font-size: 1.8rem;
  line-height: 1.8;
  color: var(--primary-orange);
  font-weight: 500;
  margin-bottom: 30px;
}

.wisdom-subtext {
  font-size: 1.3rem;
  opacity: 0.9;
  color: var(--light-text);
}

/* Growth Visual Section */
.growth-section {
  padding: 80px 20px;
  background: var(--dark-bg);
}

.growth-container {
  max-width: 1200px;
  margin: 0 auto;
}

.growth-timeline {
  position: relative;
  margin-top: 60px;
}

.growth-path {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  position: relative;
}

.growth-line {
  position: absolute;
  top: 40px;
  left: 0;
  right: 0;
  height: 2px;
  background: rgba(255, 107, 53, 0.2);
  z-index: 0;
}

.growth-point {
  flex: 1;
  text-align: center;
  position: relative;
  z-index: 1;
  opacity: 0;
  animation: fadeInUp 0.6s ease-out forwards;
}

.growth-marker {
  width: 80px;
  height: 80px;
  margin: 0 auto 20px;
  background: var(--card-bg);
  border: 3px solid var(--primary-orange);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 32px;
  position: relative;
  transition: all 0.3s ease;
}

.growth-point:nth-child(odd) .growth-marker {
  background: rgba(244, 67, 54, 0.1);
  border-color: var(--failure-red);
}

.growth-point:nth-child(even) .growth-marker {
  background: rgba(76, 175, 80, 0.1);
  border-color: var(--success-green);
}

.growth-point:hover .growth-marker {
  transform: scale(1.1);
  box-shadow: 0 5px 20px rgba(255, 107, 53, 0.3);
}

.growth-content h4 {
  color: white;
  margin-bottom: 10px;
  font-size: 1.2rem;
}

.growth-content p {
  opacity: 0.8;
  font-size: 0.95rem;
  max-width: 200px;
  margin: 0 auto;
}

/* Responsive */
@media (max-width: 768px) {
  .comparison-grid {
    grid-template-columns: 1fr;
  }

  .growth-path {
    flex-direction: column;
    gap: 40px;
  }

  .growth-line {
    display: none;
  }

  .wisdom-quote {
    padding: 40px 20px;
  }
  .wisdom-text {
    font-size: 1.4rem;
  }
}
</style>
