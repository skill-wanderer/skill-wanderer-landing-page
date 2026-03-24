<template>
  <div>
    <!-- Hero Section -->
    <PrincipleHero
      :number="11"
      title="Social Enterprise Model for Quality Education"
      tagline="3 Ways to Contribute to the Mission"
      breadcrumb-name="Social Enterprise Model"
    />

    <!-- Story Section -->
    <PrincipleStory
      :intro="storyIntro"
      :chapters="storyChapters"
    />

    <!-- Cycle Visual Section -->
    <section class="cycle-section">
      <div class="cycle-container">
        <div style="text-align: center; margin-bottom: 50px;">
          <h2 style="font-size: 2.5rem; color: var(--primary-orange);">The Social Enterprise Cycle</h2>
          <p style="font-size: 1.2rem; opacity: 0.9;">A sustainable loop where every learner fuels the next</p>
        </div>

        <div class="cycle-visual">
          <div class="cycle-ring">
            <div class="cycle-step" style="--step-index: 0;">
              <div class="cycle-node" @mouseenter="activeStep = 0" @mouseleave="activeStep = -1">
                <span class="node-icon">🤝</span>
              </div>
              <div class="node-label">Donate or Partner</div>
              <p class="node-detail" :class="{ visible: activeStep === 0 }">Donate for our teaching and/or work with us as tech partners</p>
            </div>

            <div class="cycle-arrow">→</div>

            <div class="cycle-step" style="--step-index: 1;">
              <div class="cycle-node" @mouseenter="activeStep = 1" @mouseleave="activeStep = -1">
                <span class="node-icon">💻</span>
              </div>
              <div class="node-label">Build the Platform</div>
              <p class="node-detail" :class="{ visible: activeStep === 1 }">Learn and gain experience by developing with us</p>
            </div>

            <div class="cycle-arrow">→</div>

            <div class="cycle-step" style="--step-index: 2;">
              <div class="cycle-node" @mouseenter="activeStep = 2" @mouseleave="activeStep = -1">
                <span class="node-icon">🌱</span>
              </div>
              <div class="node-label">Grow the Community</div>
              <p class="node-detail" :class="{ visible: activeStep === 2 }">Contribute and build meaningful connections</p>
            </div>

            <div class="cycle-arrow">→</div>

            <div class="cycle-step" style="--step-index: 3;">
              <div class="cycle-node" @mouseenter="activeStep = 3" @mouseleave="activeStep = -1">
                <span class="node-icon">🔄</span>
              </div>
              <div class="node-label">Mission Sustained</div>
              <p class="node-detail" :class="{ visible: activeStep === 3 }">Every contribution fuels quality education for all</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- What You Get Section -->
    <section class="elements-section">
      <div class="elements-container">
        <div style="text-align: center; margin-bottom: 50px;">
          <h2 style="font-size: 2.5rem; color: var(--primary-orange);">Same Quality, No Compromise</h2>
          <p style="font-size: 1.2rem; opacity: 0.9;">Every learner receives the full experience</p>
        </div>

        <div class="elements-grid">
          <div class="element-card" style="animation-delay: 0.1s;">
            <div class="element-icon">👨‍🏫</div>
            <h3>Human Mentors</h3>
            <p>The most critical element—real human mentors who guide you, answer your questions, and share hard-won industry experience.</p>
          </div>

          <div class="element-card" style="animation-delay: 0.2s;">
            <div class="element-icon">🎯</div>
            <h3>Real Projects</h3>
            <p>Work on actual projects with real stakes, deadlines, and the pressure that drives true learning and career readiness.</p>
          </div>

          <div class="element-card" style="animation-delay: 0.3s;">
            <div class="element-icon">🌱</div>
            <h3>Start-Up Support</h3>
            <p>Guidance to help you launch your own ideas, with mentorship and resources tailored to aspiring founders.</p>
          </div>

          <div class="element-card" style="animation-delay: 0.4s;">
            <div class="element-icon">🧭</div>
            <h3>Pre-Learning Advisory</h3>
            <p>Personalized advice before you even begin—helping you choose the right path based on your goals, background, and strengths.</p>
          </div>
        </div>
      </div>
    </section>

    <!-- 3 Ways to Contribute Section -->
    <section class="token-section">
      <div class="token-container">
        <div style="text-align: center; margin-bottom: 50px;">
          <h2 style="font-size: 2.5rem; color: var(--primary-orange);">3 Ways to Contribute to the Mission</h2>
          <p style="font-size: 1.2rem; opacity: 0.9;">With a social enterprise model, every contribution directly funds quality education</p>
        </div>

        <div class="token-explainer">
          <div class="token-card main-token">
            <span class="token-badge">🌍</span>
            <h3>How Our Social Enterprise Model Works</h3>
            <p>
              Skill-Wanderer is working toward becoming a social enterprise—meaning <strong>100% of revenue is reinvested
              into our mission</strong> of making quality tech education accessible to everyone.
              There are three meaningful ways you can contribute to this mission,
              each creating value for you while sustaining education for those who need it most.
            </p>
          </div>
        </div>

        <div style="text-align: center; margin: 50px 0 30px;">
          <h3 style="font-size: 1.8rem; color: var(--primary-orange);">Choose Your Way to Contribute</h3>
          <p style="font-size: 1.1rem; opacity: 0.9;">Every path creates impact</p>
        </div>

        <div class="payback-grid">
          <div class="payback-card" style="animation-delay: 0.1s;">
            <span class="payback-icon">🤝</span>
            <h3>Donate for Our Teaching and/or Work with Us as Tech Partners</h3>
            <p>
              Support our mission by donating directly to fund quality teaching,
              and/or work with us as tech partners using our services—be it
              <strong>AI, web, mobile, DevOps, or platform development</strong>.
              All contributions are <strong>reinvested to fund the mission</strong>.
              Your challenges get solved, learners get funded. Everyone wins.
            </p>
          </div>

          <div class="payback-card" style="animation-delay: 0.2s;">
            <span class="payback-icon">💻</span>
            <h3>Platform Development</h3>
            <p>
              Join us in building the Skill-Wanderer platform itself. Learners gain
              <strong>real-world experience and learning at the same time</strong>—we
              will teach you as you contribute. Design, code, test, write—grow your
              skills on a live product with real mentorship.
            </p>
          </div>

          <div class="payback-card" style="animation-delay: 0.3s;">
            <span class="payback-icon">🌱</span>
            <h3>Contribute to the Community</h3>
            <p>
              Give back by mentoring newer learners, creating content, moderating discussions,
              or organizing events. In return, you gain <strong>meaningful connections</strong>
              with like-minded people who share your passion for growth and learning.
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- Maximum Impact Section -->
    <section class="impact-section">
      <div class="impact-container">
        <div style="text-align: center; margin-bottom: 50px;">
          <h2 style="font-size: 2.5rem; color: var(--primary-orange);">Maximum Impact for Those in Greatest Need</h2>
          <p style="font-size: 1.2rem; opacity: 0.9;">We prioritize support where it matters most</p>
        </div>

        <div class="impact-content">
          <div class="impact-card">
            <span class="impact-icon">🛡️</span>
            <h3>For Learners Who Truly Cannot Afford It</h3>
            <p>
              If you're in a situation where financial contribution simply isn't possible,
              we won't turn you away. We will support you with maximum impact—full
              access to mentors, projects, advisory, and everything else. Your only
              obligation is to learn earnestly and, when you're able, give back to
              the community in whatever form you can.
            </p>
          </div>

          <div class="impact-card">
            <span class="impact-icon">⚖️</span>
            <h3>Why Social Enterprise, Not Charity</h3>
            <p>
              This principle once leaned more toward a purely charitable model. But I
              learned that charity alone risks compromising quality or simply isn't
              sustainable over time. A social enterprise model lets us maintain the
              <strong>same high-quality learning with human mentors</strong> while
              creating a cycle where today's learners fund tomorrow's. It's not about
              profit—it's about building something that lasts.
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- Practice Section -->
    <PrinciplePractice
      title="Social Enterprise Model in Action"
      subtitle="How we deliver quality and sustain impact"
      :examples="practiceExamples"
      background-color="var(--darker-bg)"
      list-icon="🌱"
    />

    <!-- Quote Section -->
    <PrincipleQuote
      quote="I once believed that making education free was enough. But quality suffers without sustainability, and charity alone can't fund human mentors forever. The social enterprise model is our answer—whether you donate for our teaching, work with us as tech partners, help build the platform, or strengthen the community, every contribution is reinvested into the mission. This is how we build something that truly lasts."
      author="Quan Nguyen, Founder of Skill-Wanderer"
    />

    <!-- Navigation Section -->
    <PrincipleNavigation current-slug="social-enterprise" />
  </div>
</template>

<script setup lang="ts">
import type { StoryChapter, PracticeExample } from '~/types'

// SEO and meta management
useSEO({
  title: 'Social Enterprise Model: 3 Ways to Contribute to the Mission | Principle #11',
  description: 'Discover Skill-Wanderer\'s social enterprise model—3 ways to contribute: donate for our teaching and/or work with us as tech partners, help develop our platform, or strengthen the community. All contributions reinvested into quality education.',
  keywords: ['social enterprise', 'tech partner', 'skill-wanderer principle 11', 'sustainable education', 'contribute to mission', 'human mentors', 'quality tech education'],
  type: 'article',
  structuredData: [
    createArticleSchema(
      'Social Enterprise Model: 3 Ways to Contribute to the Mission | Principle #11',
      'Discover Skill-Wanderer\'s social enterprise model—3 ways to contribute: donate or become a tech partner, help develop our platform, or strengthen the community. All revenue reinvested into quality education.',
      'https://skill-wanderer.com/principles/social-enterprise'
    ),
    createBreadcrumbSchema([
      { name: 'Home', url: 'https://skill-wanderer.com/' },
      { name: 'Principles', url: 'https://skill-wanderer.com/principles' },
      { name: 'Social Enterprise', url: 'https://skill-wanderer.com/principles/social-enterprise' }
    ])
  ]
})

// Cycle interaction
const activeStep = ref(-1)

// Story content data
const storyIntro = 'I call our eleventh principle <strong>Social Enterprise Model for Quality Education</strong>. We are working toward operating as a social enterprise with three clear ways to contribute to the mission—and its story is one of honest reflection about what truly works.'

const storyChapters: StoryChapter[] = [
  {
    icon: '💡',
    title: 'The Internship Revelation',
    content: [
      {
        type: 'text',
        text: 'I vividly remember that one-month internship taught me more than six months of my formal studies had. What made the difference? It wasn\'t just one thing; it was a combination of crucial elements:'
      },
      {
        type: 'element-list',
        text: '',
        items: [
          'I had <strong>mentors and senior members</strong> who showed me the way.',
          'I had <strong>real projects</strong> to work on, not just theoretical exercises.',
          'I had <strong>real clients</strong> who gave me detailed feedback.',
          'And I had the accountability that comes with <strong>real stress</strong>—the pressure to deliver on time and to a high standard.'
        ]
      },
      {
        type: 'text',
        text: 'The <strong>human mentor</strong> is the most critical—and the most difficult—element in this equation. No matter how hard you try with books, online courses, and solo projects, nothing replaces someone who has walked the path before you, sitting beside you, and helping you see what you can\'t see on your own.'
      },
      {
        type: 'personal-story',
        text: 'During that internship, I was struggling with a complex database optimization problem. I\'d spent days reading documentation and Stack Overflow, but I was stuck. Then my mentor sat with me for just 30 minutes, asked the right questions, and suddenly everything clicked. Those 30 minutes were worth more than weeks of solo struggle. That\'s when I understood the irreplaceable value of human guidance.'
      }
    ]
  },
  {
    icon: '⚖️',
    title: 'From Charity to Social Enterprise',
    content: [
      {
        type: 'challenge-highlight',
        text: 'This principle has changed. It once leaned toward a charitable model—making everything free and hoping goodwill would sustain it. But I learned an honest truth: either the quality suffers, or the model simply isn\'t sustainable for the long run. Human mentors cost real resources. Quality learning materials require investment. You can\'t build something lasting on charity alone.',
        additionalText: 'An Honest Evolution'
      },
      {
        type: 'text',
        text: 'So I found a better balance: a <strong>social enterprise model</strong>. This means we still deliver the same quality—human mentors, real projects, start-up support, pre-learning advisory—but we sustain it through a cycle where learners who benefit today help fund and support the learners of tomorrow.'
      },
      {
        type: 'text',
        text: 'For people who are truly in need and cannot afford to participate at first, we will support them with <strong>maximum impact</strong>. No one who is genuinely committed to learning should be turned away because of their financial situation.'
      }
    ]
  },
  {
    icon: '🌍',
    title: '3 Ways to Contribute to the Mission',
    content: [
      {
        type: 'text',
        text: 'With our social enterprise model, we reinvest all revenue into our mission. There are <strong>three meaningful ways</strong> anyone can contribute:'
      },
      {
        type: 'element-list',
        text: '',
        items: [
          '<strong>Donate for our teaching and/or work with us as tech partners</strong>—support our mission by donating directly to fund quality teaching, and/or use our tech services including AI, web, mobile, DevOps, and platform development. All contributions are reinvested to fund the mission.',
          '<strong>Platform development</strong>—join us in building the Skill-Wanderer platform, gaining real-world experience and learning at the same time while we teach you.',
          '<strong>Contribute to the community</strong>—mentor newer learners, create content, moderate discussions, or organize events, and gain meaningful connections in return.'
        ]
      }
    ]
  }
]

// Practice examples data
const practiceExamples: PracticeExample[] = [
  {
    title: 'Donate for Our Teaching and/or Work with Us as Tech Partners',
    items: [
      'Donate directly to fund quality teaching and support learners',
      'Work with us as tech partners using our services: AI, web, mobile, DevOps, and platform development',
      'All contributions and revenue are reinvested into funding the mission',
      'Whether you donate, partner, or both—every bit goes toward supporting the next learner'
    ]
  },
  {
    title: 'Platform Development',
    items: [
      'Help build and improve the Skill-Wanderer platform hands-on',
      'Gain real-world experience and learning at the same time',
      'We will teach you as you contribute—design, code, test, write',
      'Work on a live product with real mentorship and meaningful outcomes'
    ]
  },
  {
    title: 'Contribute to the Community',
    items: [
      'Mentor newer learners and share your knowledge',
      'Create content, moderate discussions, or organize events',
      'Build meaningful connections with like-minded people',
      'Strengthen a network of passionate learners and professionals'
    ]
  }
]
</script>

<style scoped>
/* Cycle Visual Section */
.cycle-section {
  padding: 80px 20px;
  background: var(--dark-bg);
  position: relative;
  overflow: hidden;
}

.cycle-container {
  max-width: 1200px;
  margin: 0 auto;
}

.cycle-visual {
  margin: 40px auto;
  max-width: 900px;
}

.cycle-ring {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  flex-wrap: wrap;
}

.cycle-step {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  flex: 1;
  min-width: 150px;
  position: relative;
}

.cycle-node {
  width: 100px;
  height: 100px;
  border-radius: 50%;
  background: var(--card-bg);
  border: 3px solid var(--primary-orange);
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: all 0.3s ease;
}

.cycle-node:hover {
  transform: scale(1.1);
  box-shadow: 0 0 30px rgba(255, 107, 53, 0.4);
  border-color: #FFC107;
}

.node-icon {
  font-size: 40px;
}

.node-label {
  margin-top: 12px;
  font-size: 1.1rem;
  font-weight: 600;
  color: white;
}

.node-detail {
  margin-top: 6px;
  font-size: 0.85rem;
  opacity: 0;
  transition: opacity 0.3s ease;
  color: rgba(255, 255, 255, 0.7);
  max-width: 180px;
}

.node-detail.visible {
  opacity: 1;
}

.cycle-arrow {
  font-size: 2rem;
  color: var(--primary-orange);
  opacity: 0.6;
  margin: 0 5px;
}

/* Elements Section */
.elements-section {
  padding: 80px 20px;
  background: var(--darker-bg);
}

.elements-container {
  max-width: 1200px;
  margin: 0 auto;
}

.elements-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 30px;
  margin-top: 60px;
  max-width: 800px;
  margin-left: auto;
  margin-right: auto;
}

.element-card {
  background: var(--card-bg);
  border-radius: 20px;
  padding: 40px;
  text-align: center;
  transition: all 0.3s ease;
  opacity: 0;
  animation: fadeInUp 0.6s ease-out forwards;
  border: 1px solid rgba(255, 107, 53, 0.2);
  position: relative;
  overflow: hidden;
}

.element-card::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 5px;
  background: linear-gradient(90deg, #4CAF50, var(--primary-orange));
}

.element-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3);
}

.element-icon {
  width: 80px;
  height: 80px;
  background: linear-gradient(135deg, #4CAF50, var(--primary-orange));
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto 20px;
  font-size: 36px;
}

.element-card h3 {
  color: white;
  margin-bottom: 15px;
  font-size: 1.3rem;
}

.element-card p {
  opacity: 0.8;
  font-size: 0.95rem;
  line-height: 1.7;
}

/* Social Impact Token Section */
.token-section {
  padding: 80px 20px;
  background: var(--dark-bg);
}

.token-container {
  max-width: 1100px;
  margin: 0 auto;
}

.token-explainer {
  max-width: 800px;
  margin: 0 auto;
}

.main-token {
  background: var(--card-bg);
  border: 2px solid var(--primary-orange);
  border-radius: 24px;
  padding: 50px;
  text-align: center;
  position: relative;
  overflow: hidden;
}

.main-token::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 6px;
  background: linear-gradient(90deg, #4CAF50, var(--primary-orange), #FFC107);
}

.token-badge {
  font-size: 64px;
  display: block;
  margin-bottom: 20px;
}

.main-token h3 {
  font-size: 1.6rem;
  color: var(--primary-orange);
  margin-bottom: 20px;
}

.main-token p {
  font-size: 1.05rem;
  line-height: 1.8;
  opacity: 0.9;
}

.main-token strong {
  color: var(--primary-orange);
}

.payback-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 30px;
}

.payback-card {
  background: var(--card-bg);
  border-radius: 20px;
  padding: 40px;
  text-align: center;
  transition: all 0.3s ease;
  opacity: 0;
  animation: fadeInUp 0.6s ease-out forwards;
  border: 2px solid #4CAF50;
  position: relative;
}

.payback-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 10px 30px rgba(76, 175, 80, 0.3);
  background: rgba(76, 175, 80, 0.05);
}

.payback-icon {
  font-size: 48px;
  margin-bottom: 20px;
  display: block;
}

.payback-card h3 {
  color: #4CAF50;
  margin-bottom: 15px;
  font-size: 1.3rem;
}

.payback-card p {
  opacity: 0.8;
  font-size: 0.95rem;
  line-height: 1.7;
}

/* Transparency Box */
.transparency-box {
  background: linear-gradient(135deg, rgba(76, 175, 80, 0.1), rgba(255, 107, 53, 0.1));
  padding: 40px;
  border-radius: 20px;
  border: 1px solid rgba(76, 175, 80, 0.3);
  margin: 40px 0;
  text-align: center;
}

.transparency-box h3 {
  color: #4CAF50;
  margin-bottom: 20px;
  font-size: 1.6rem;
}

.transparency-box p {
  font-size: 1.1rem;
  line-height: 1.8;
  opacity: 0.9;
}

.transparency-box strong {
  color: var(--primary-orange);
  font-weight: 600;
}

/* Maximum Impact Section */
.impact-section {
  padding: 80px 20px;
  background: var(--darker-bg);
}

.impact-container {
  max-width: 1000px;
  margin: 0 auto;
}

.impact-content {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
  gap: 30px;
}

.impact-card {
  background: var(--card-bg);
  border-radius: 20px;
  padding: 40px;
  text-align: center;
  transition: all 0.3s ease;
  border: 2px solid rgba(255, 107, 53, 0.3);
}

.impact-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 10px 30px rgba(255, 107, 53, 0.2);
}

.impact-icon {
  font-size: 48px;
  display: block;
  margin-bottom: 20px;
}

.impact-card h3 {
  color: var(--primary-orange);
  margin-bottom: 15px;
  font-size: 1.3rem;
}

.impact-card p {
  opacity: 0.8;
  font-size: 0.95rem;
  line-height: 1.8;
}

.impact-card strong {
  color: var(--primary-orange);
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
  .cycle-ring {
    flex-direction: column;
    gap: 20px;
  }

  .cycle-arrow {
    transform: rotate(90deg);
  }

  .elements-grid {
    grid-template-columns: 1fr;
    max-width: 100%;
  }

  .payback-grid {
    grid-template-columns: 1fr;
  }

  .impact-content {
    grid-template-columns: 1fr;
  }
}
</style>
