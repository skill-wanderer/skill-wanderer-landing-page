<template>
  <div>    <!-- Hero Section -->
    <PrincipleHero 
      :number="12"
      title="Mission-Centric Total Reinvestment & Ethical Stewardship"
      tagline="Every Penny for Purpose"
      :show-lock="true"
    />

    <!-- Story Section -->
    <PrincipleStory 
      :intro="storyIntro"
      :chapters="storyChapters"
    />

    <!-- Failures Section -->
    <section class="failures-section">
      <div class="failures-container">
        <div style="text-align: center; margin-bottom: 50px;">
          <h2 style="font-size: 2.5rem; color: var(--primary-orange);">The Price of Greed</h2>
          <p style="font-size: 1.2rem; opacity: 0.9;">Three startups, three failures, one lesson</p>
        </div>
        
        <div class="failure-cards">
          <div class="failure-card" style="animation-delay: 0.1s;">
            <div class="failure-number">1</div>
            <span class="failure-icon">💔</span>
            <h3>The Profitable Startup That Died</h3>
            <p>
              We had product-market fit. We had revenue. We had growth. But when it came time to 
              divide the profits, greed entered the room. Arguments over who deserved what percentage 
              tore the founding team apart. The company died not from market failure, but from human greed.
            </p>
            <div class="lesson-learned">
              <strong>Lesson:</strong> Success without aligned values is a ticking time bomb.
            </div>
          </div>
          
          <div class="failure-card" style="animation-delay: 0.2s;">
            <div class="failure-number">2</div>
            <span class="failure-icon">🎭</span>
            <h3>The Passion Project We Abandoned</h3>
            <p>
              We started with a mission, but money called louder. We abandoned the project that held 
              our passion to chase the one that simply made more money. The team watched us become 
              everything we swore we'd never be. One by one, they left in disgust.
            </p>
            <div class="lesson-learned">
              <strong>Lesson:</strong> When you betray your mission for money, you lose both.
            </div>
          </div>
          
          <div class="failure-card" style="animation-delay: 0.3s;">
            <div class="failure-number">3</div>
            <span class="failure-icon">😔</span>
            <h3>The Company That Crushed Its Soul</h3>
            <p>
              To maximize profit, we cut costs everywhere. Uncompensated overtime became the norm. 
              Quality was sacrificed for speed. We were profitable on paper, but our people were 
              miserable. The best talent fled, leaving behind a hollow shell of a company.
            </p>
            <div class="lesson-learned">
              <strong>Lesson:</strong> Profit at the expense of people is not success—it's failure in disguise.
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Lock Visual Section -->
    <section class="lock-section">
      <div class="lock-container">
        <h2 style="font-size: 2.5rem; color: var(--primary-orange); margin-bottom: 20px;">The Lock That Protects</h2>
        <p style="font-size: 1.2rem; opacity: 0.9;">This principle is our safeguard against the forces that destroy</p>
        
        <div class="lock-visual">
          <div class="lock-body">
            <div class="lock-keyhole"></div>
          </div>
          <div class="lock-shackle"></div>
          
          <div class="lock-text">
            <h3>Total Reinvestment</h3>
            <p>Every dollar earned goes back to the mission. No exceptions.</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Vision Future Section -->
    <section class="vision-section">
      <div class="vision-container">
        <div style="text-align: center; margin-bottom: 50px;">
          <h2 style="font-size: 2.5rem; color: var(--primary-orange);">A Different Path Forward</h2>
          <p style="font-size: 1.2rem; opacity: 0.9;">Growing talent without traditional equity</p>
        </div>
        
        <div class="future-model">
          <h3>The Spinoff Model</h3>
          <p>
            Instead of stock options that become meaningless without dividends, we envision supporting 
            our best people to create their own autonomous organizations. Skill-Wanderer would hold a 
            minority stake (less than 50%), giving them true ownership and freedom while maintaining 
            our connection to their success.
          </p>
        </div>
        
        <div class="spinoff-visual">
          <div class="entity-node main">
            <strong>Skill-Wanderer</strong>
            <small>Parent Organization</small>
          </div>
          
          <span class="entity-arrow">→</span>
          
          <div class="entity-node">
            <strong>Spinoff A</strong>
            <small>49% SW stake</small>
          </div>
          
          <span class="entity-arrow">→</span>
          
          <div class="entity-node">
            <strong>Spinoff B</strong>
            <small>40% SW stake</small>
          </div>
        </div>
        
        <div class="future-model">
          <h3>The Reinvestment Cycle</h3>
          <p>
            Any dividends received from these spinoffs follow the same principle: 100% reinvestment 
            into our global education mission. This creates a virtuous cycle where success breeds 
            more success, all aligned with our core purpose.
          </p>
        </div>
      </div>
    </section>

    <!-- Practice Section -->
    <PrinciplePractice 
      title="How Total Reinvestment Works"
      subtitle="Every penny has a purpose"
      :examples="practiceExamples"
      background-color="var(--darker-bg)"
      list-icon="🔐"
    />

    <!-- Final Promise Section -->
    <section class="promise-section">
      <div class="promise-content">
        <div class="promise-box">
          <h2>Our Unbreakable Promise</h2>
          <p>
            This principle is not negotiable. It is the foundation that ensures Skill-Wanderer 
            will always serve its mission, not private interests. By locking ourselves into total 
            reinvestment, we protect our organization from the very forces that have destroyed so 
            many others. Every decision we make will be guided by one question: <strong>Does this 
            serve our learners and our mission?</strong>
          </p>
        </div>
      </div>
    </section>

    <!-- Quote Section -->
    <PrincipleQuote 
      quote="I have seen greed destroy profitable companies, passionate teams, and meaningful missions. This principle is our lock against those forces. It ensures that every dollar we earn serves our purpose: making quality tech education accessible to every passionate learner on this planet."
      author="Quan Nguyen, Founder of Skill-Wanderer"
    />

    <!-- Navigation Section -->
    <PrincipleNavigation current-slug="mission-centric-reinvestment" />  </div>
</template>

<script setup lang="ts">
import type { StoryChapter, PracticeExample } from '~/types'

// SEO and meta management
useSEO({
  title: 'Mission-Centric Reinvestment: Every Penny for Purpose | Principle #12',
  description: 'Discover how Skill-Wanderer commits to total reinvestment of all revenue back into the mission, ensuring every dollar serves learners.',
  keywords: ['mission-centric', 'reinvestment', 'skill-wanderer principle 12', 'ethical stewardship', 'purpose-driven'],
  type: 'article',
  structuredData: createArticleSchema(
    'Mission-Centric Reinvestment: Every Penny for Purpose | Principle #12',
    'Discover how Skill-Wanderer commits to total reinvestment of all revenue back into the mission, ensuring every dollar serves learners rather than private profit.',
    'https://skill-wanderer.com/principles/mission-centric-reinvestment'
  )
})

// Story content data
const storyIntro = 'I call our final principle <strong>Mission-Centric Total Reinvestment & Ethical Stewardship</strong>, and I want to be honest: the decision to include this principle, in this exact way, was the hardest one for me.'

const storyChapters = [
  {
    title: 'The Internal Battle',
    icon: '😈',
    content: [
      {
        type: 'text',
        text: 'It required a long, honest conversation with myself. As a normal human being, the "greed side" of me spoke up. I asked myself, "What\'s in it for me?"'
      },
      {
        type: 'personal-story',
        text: 'I initially wanted to only reinvest the revenue from the educational platform, while allowing the technology services arm to operate more like a traditional business—maybe reinvesting 51% as the law in Vietnam requires for a social enterprise. The thought was simple: \'I\'m the one generating that tech revenue, so I deserve a larger share, right?\''
      },
      {
        type: 'text',
        text: 'But then, my heart spoke for the vision we are building here. And my past experiences screamed at me.'
      }
    ]
  },
  {
    title: 'The Lessons from Failure',
    icon: '💔',
    content: [
      {
        type: 'text',
        text: 'I have been in a successful, profitable start-up that failed. It didn\'t fail because of the market; it failed because when it was time to divide the profits, greed entered the room. Arguments over unequal splits tore the founding team apart.'
      },
      {
        type: 'text',
        text: 'I have been in another start-up with multiple projects. We were profitable. But again, greed called. We abandoned the project that held our passion and purpose to chase the one that simply made more money. The team grew disgusted with what we had become, and they left.'
      },
      {
        type: 'text',
        text: 'And I have been in a third start-up where, to maximize profit, we cut costs by mistreating our employees with constant, uncompensated overtime and by sacrificing the quality of our product. The company was profitable, but our people were miserable, and they left.'
      },
      {
        type: 'personal-story',
        text: 'I still remember the exact moment in that third startup when I looked around the office at 11 PM on a Friday. Half the team was still there, exhausted, working on yet another "urgent" feature to squeeze out more profit. The light had gone out of their eyes. We had become everything we once said we\'d never be. That image haunts me, and I swore I would never let greed destroy another team, another vision, another purpose.'
      },
      {
        type: 'text',
        text: '<strong>I am unwilling to ever repeat those mistakes.</strong>'
      }
    ]
  },
  {
    title: 'The Lock That Protects',
    icon: '🔐',
    content: [
      {
        type: 'text',
        text: 'That is why this principle exists and why it is absolute. I also recognize that the success of our technology services will be tied to the goodwill and reputation of our educational mission. The two are linked. Therefore, all the value generated deserves to be reinvested back into the whole.'
      },
      {
        type: 'text',
        text: 'But what about retaining the best people? I know many companies use stock options. In a company like ours with a "total reinvestment" policy and no dividends, traditional stock options become financially meaningless.'
      },
      {
        type: 'text',
        text: 'So I envision a different path for our most dedicated and talented team members. A future where our best people can be supported to spin off their own small, autonomous organizations, with Skill-Wanderer holding a minority stake (less than 50%). This gives them true ownership and freedom. And any dividend our organization ever receives from these new ventures will be treated the same as all other revenue: it will be reinvested directly back into our global mission, after covering costs, with no exceptions.'
      },
      {
        type: 'text',
        text: 'This final principle is our lock. It is our promise to ourselves, our team, our community, and our learners. It is designed to protect our organization from the very forces that can tear even profitable ventures apart. By keeping our finances and our mission perfectly aligned, we ensure that every decision we ever make serves our purpose, not private profit.'
      }
    ]
  }
] as StoryChapter[]

// Practice examples data
const practiceExamples: PracticeExample[] = [
  {
    title: 'Revenue Streams',
    items: [
      'Premium services from educational platform',
      'Technology services and consulting projects',
      'Corporate training and partnerships',
      'Future dividends from minority stakes in spinoffs'
    ]
  },
  {
    title: 'Reinvestment Priorities',
    items: [
      'Creating more free, high-quality educational content',
      'Supporting learners in underserved communities',
      'Building better learning infrastructure and tools',
      'Expanding our global reach and impact'
    ]
  },
  {
    title: 'Reinvesting Back to the People',
    items: [
      'Fair compensation and benefits for all team members',
      'Professional development funds for continuous learning',
      'Supporting team members to launch their own ventures',
      'Creating opportunities for community members to join our mission'
    ]
  }
]

// Interactive functionality
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
    })
  }, observerOptions)

  // Observe failure cards
  document.querySelectorAll('.failure-card').forEach(item => {
    observer.observe(item)
  })

  // Lock animation
  const lockShackle = document.querySelector('.lock-shackle') as HTMLElement
  const lockBody = document.querySelector('.lock-body') as HTMLElement
  
  if (lockShackle && lockBody) {
    lockBody.addEventListener('mouseenter', function() {
      lockShackle.style.transform = 'translateX(-50%) translateY(-10px)'
      lockShackle.style.transition = 'transform 0.3s ease'
    })
    
    lockBody.addEventListener('mouseleave', function() {
      lockShackle.style.transform = 'translateX(-50%) translateY(0)'
    })
  }

  // Entity nodes hover effect
  const entityNodes = document.querySelectorAll('.entity-node')
  entityNodes.forEach(node => {
    const element = node as HTMLElement
    element.addEventListener('mouseenter', function() {
      element.style.transform = 'scale(1.1)'
    })
    
    element.addEventListener('mouseleave', function() {
      element.style.transform = 'scale(1)'
    })
  })
})
</script>

<style scoped>
/* Failures Section */
.failures-section {
  padding: 80px 20px;
  background: var(--dark-bg);
}

.failures-container {
  max-width: 1200px;
  margin: 0 auto;
}

.failure-cards {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  gap: 40px;
  margin-top: 60px;
}

.failure-card {
  background: var(--card-bg);
  border-radius: 20px;
  padding: 40px;
  position: relative;
  overflow: hidden;
  transition: all 0.3s ease;
  opacity: 0;
  animation: fadeInUp 0.6s ease-out forwards;
  border: 2px solid rgba(244, 67, 54, 0.2);
}

.failure-card::before {
  content: '';
  position: absolute;
  top: -2px;
  left: -2px;
  right: -2px;
  bottom: -2px;
  background: linear-gradient(135deg, var(--failure-red), transparent);
  border-radius: 20px;
  opacity: 0.1;
  z-index: -1;
}

.failure-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3);
}

.failure-number {
  position: absolute;
  top: 20px;
  right: 20px;
  width: 50px;
  height: 50px;
  background: var(--greed-red);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.5rem;
  font-weight: bold;
  color: white;
}

.failure-icon {
  font-size: 48px;
  margin-bottom: 20px;
  display: block;
  opacity: 0.7;
}

.failure-card h3 {
  color: white;
  margin-bottom: 15px;
  font-size: 1.4rem;
}

.failure-card p {
  opacity: 0.8;
  line-height: 1.7;
  margin-bottom: 20px;
}

.lesson-learned {
  background: rgba(76, 175, 80, 0.1);
  border: 1px solid rgba(76, 175, 80, 0.3);
  border-radius: 10px;
  padding: 15px;
  margin-top: 20px;
}

.lesson-learned strong {
  color: var(--success-green);
}

/* Lock Visual Section */
.lock-section {
  padding: 80px 20px;
  background: var(--darker-bg);
  position: relative;
  overflow: hidden;
}

.lock-container {
  max-width: 800px;
  margin: 0 auto;
  text-align: center;
}

.lock-visual {
  width: 300px;
  height: 300px;
  margin: 60px auto;
  position: relative;
}

.lock-body {
  width: 200px;
  height: 150px;
  background: linear-gradient(135deg, var(--lock-silver), #616161);
  border-radius: 20px;
  position: absolute;
  bottom: 0;
  left: 50%;
  transform: translateX(-50%);
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.5);
  cursor: pointer;
}

.lock-keyhole {
  width: 40px;
  height: 60px;
  background: var(--darker-bg);
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  border-radius: 20px 20px 30px 30px;
}

.lock-shackle {
  width: 140px;
  height: 140px;
  border: 20px solid var(--lock-silver);
  border-bottom: none;
  border-radius: 70px 70px 0 0;
  position: absolute;
  top: 0;
  left: 50%;
  transform: translateX(-50%);
  background: transparent;
  box-shadow: inset 0 5px 10px rgba(0, 0, 0, 0.3);
  transition: transform 0.3s ease;
}

.lock-text {
  position: absolute;
  bottom: -50px;
  left: 50%;
  transform: translateX(-50%);
  width: 100%;
}

.lock-text h3 {
  color: var(--primary-orange);
  font-size: 1.8rem;
  margin-bottom: 10px;
}

.lock-text p {
  opacity: 0.9;
  font-size: 1.1rem;
}

/* Vision Future Section */
.vision-section {
  padding: 80px 20px;
  background: var(--dark-bg);
}

.vision-container {
  max-width: 1000px;
  margin: 0 auto;
}

.future-model {
  background: linear-gradient(135deg, rgba(76, 175, 80, 0.05), rgba(255, 107, 53, 0.05));
  padding: 40px;
  border-radius: 20px;
  border: 1px solid rgba(76, 175, 80, 0.2);
  margin-top: 40px;
  position: relative;
  overflow: hidden;
}

.future-model::before {
  content: '🌱';
  position: absolute;
  top: 20px;
  right: 20px;
  font-size: 3rem;
  opacity: 0.1;
}

.future-model h3 {
  color: var(--success-green);
  margin-bottom: 20px;
  font-size: 1.6rem;
}

.future-model p {
  font-size: 1.1rem;
  line-height: 1.8;
  opacity: 0.9;
}

.spinoff-visual {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 40px;
  margin: 40px 0;
  flex-wrap: wrap;
}

.entity-node {
  width: 150px;
  height: 150px;
  background: var(--card-bg);
  border: 3px solid var(--primary-orange);
  border-radius: 50%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  padding: 20px;
  transition: all 0.3s ease;
  cursor: pointer;
}

.entity-node:hover {
  transform: scale(1.1);
  box-shadow: 0 10px 30px rgba(255, 107, 53, 0.3);
}

.entity-node.main {
  background: linear-gradient(135deg, var(--primary-orange), var(--deep-orange));
  color: white;
}

.entity-arrow {
  font-size: 2rem;
  color: var(--primary-orange);
  opacity: 0.5;
}

/* Promise Section */
.promise-section {
  padding: 80px 20px;
  background: linear-gradient(135deg, rgba(255, 107, 53, 0.1) 0%, rgba(255, 217, 61, 0.05) 100%);
  text-align: center;
}

.promise-content {
  max-width: 900px;
  margin: 0 auto;
}

.promise-box {
  background: var(--card-bg);
  border: 3px solid var(--primary-orange);
  border-radius: 30px;
  padding: 60px;
  position: relative;
  overflow: hidden;
}

.promise-box::before {
  content: '';
  position: absolute;
  top: -50%;
  left: -50%;
  width: 200%;
  height: 200%;
  background: radial-gradient(circle, rgba(255, 107, 53, 0.1) 0%, transparent 70%);
  animation: rotate 20s linear infinite;
}

@keyframes rotate {
  from { transform: rotate(0deg); }
  to { transform: rotate(360deg); }
}

.promise-box h2 {
  color: var(--primary-orange);
  font-size: 2.5rem;
  margin-bottom: 30px;
  position: relative;
  z-index: 1;
}

.promise-box p {
  font-size: 1.3rem;
  line-height: 1.8;
  opacity: 0.9;
  position: relative;
  z-index: 1;
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
  .failure-cards {
    grid-template-columns: 1fr;
  }

  .lock-visual {
    width: 250px;
    height: 250px;
  }

  .lock-body {
    width: 150px;
    height: 120px;
  }

  .spinoff-visual {
    flex-direction: column;
  }

  .promise-box {
    padding: 40px 20px;
  }
}
</style>
