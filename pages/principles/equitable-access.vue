<template>
  <div>
    <!-- Navigation -->
    <TheNavigation />

    <!-- Hero Section -->
    <PrincipleHero 
      :number="11"
      title="Value-Added Premium Services with Equitable Access"
      tagline="Extra Help When Needed"
      breadcrumb-name="Premium Services with Equity"
    />

    <!-- Story Section -->
    <PrincipleStory 
      :intro="storyIntro"
      :chapters="storyChapters"
    />

    <!-- Balance Visual Section -->
    <section class="balance-section">
      <div class="balance-container">
        <div style="text-align: center; margin-bottom: 50px;">
          <h2 style="font-size: 2.5rem; color: var(--primary-orange);">Creating Balance</h2>
          <p style="font-size: 1.2rem; opacity: 0.9;">Premium services fund equitable access for all</p>
        </div>
          <div class="balance-visual">
          <div class="balance-scale">
            <div class="scale-fulcrum"></div>
            <div 
              class="scale-beam" 
              :style="{ transform: `translateX(-50%) rotate(${scaleRotation}deg)` }"
            ></div>
            
            <div class="balance-side left">
              <div 
                class="balance-pan"
                @mouseenter="tiltScaleLeft"
                @mouseleave="resetScale"
              >
                <span class="pan-icon">💎</span>
                <h3 class="pan-title">Premium Payers</h3>
                <p class="pan-description">Those who can afford to pay full price for premium services</p>
              </div>
            </div>
            
            <div class="balance-side right">
              <div 
                class="balance-pan"
                @mouseenter="tiltScaleRight"
                @mouseleave="resetScale"
              >
                <span class="pan-icon">🤝</span>
                <h3 class="pan-title">Equitable Access</h3>
                <p class="pan-description">Learners who receive discounted or free access based on need</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Elements Comparison Section -->
    <section class="elements-section">
      <div class="elements-container">
        <div style="text-align: center; margin-bottom: 50px;">
          <h2 style="font-size: 2.5rem; color: var(--primary-orange);">The Premium Touch</h2>
          <p style="font-size: 1.2rem; opacity: 0.9;">Elements that make the difference</p>
        </div>
        
        <div class="elements-grid">
          <div class="element-card" style="animation-delay: 0.1s;">
            <div class="element-icon">👨‍🏫</div>
            <h3>Personal Mentorship</h3>
            <p>One-on-one guidance from experienced professionals who understand your unique journey and challenges.</p>
          </div>
          
          <div class="element-card" style="animation-delay: 0.2s;">
            <div class="element-icon">🎯</div>
            <h3>Real Projects</h3>
            <p>Work on actual projects with real stakes, deadlines, and the pressure that drives true learning.</p>
          </div>
          
          <div class="element-card" style="animation-delay: 0.3s;">
            <div class="element-icon">💬</div>
            <h3>Detailed Feedback</h3>
            <p>Get comprehensive code reviews and personalized feedback that generic courses can never provide.</p>
          </div>
          
          <div class="element-card" style="animation-delay: 0.4s;">
            <div class="element-icon">⚡</div>
            <h3>Accelerated Learning</h3>
            <p>Skip the trial-and-error phase with direct answers to your specific questions and challenges.</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Equity Access Section -->
    <section class="equity-section">
      <div class="equity-container">
        <div style="text-align: center; margin-bottom: 50px;">
          <h2 style="font-size: 2.5rem; color: var(--primary-orange);">Equitable Access Program</h2>
          <p style="font-size: 1.2rem; opacity: 0.9;">Premium help for those who need it most</p>
        </div>
        
        <div class="equity-groups">
          <div class="equity-card" style="animation-delay: 0.1s;">
            <span class="equity-icon">♿</span>
            <h3>Learners with Disabilities</h3>
            <p>
              Special accommodations and personalized support to ensure everyone can access 
              quality tech education regardless of physical or learning differences.
            </p>
          </div>
          
          <div class="equity-card" style="animation-delay: 0.2s;">
            <span class="equity-icon">🌍</span>
            <h3>Low-Resource Environments</h3>
            <p>
              Support for learners in developing countries or areas with limited educational 
              infrastructure who show dedication and potential.
            </p>
          </div>
          
          <div class="equity-card" style="animation-delay: 0.3s;">
            <span class="equity-icon">💪</span>
            <h3>Demonstrated Need</h3>
            <p>
              Verification-based support for those facing financial hardship who are committed 
              to changing their lives through technology.
            </p>
          </div>
        </div>
        
        <div class="commitment-box">
          <h3>Our Commitment</h3>
          <p>
            While we're still building the exact criteria and verification systems, our commitment 
            is clear: <strong>no passionate learner should be denied premium support solely because 
            of their financial situation</strong>. As Skill-Wanderer grows, so will our capacity to 
            help more learners access the mentorship and resources they need to succeed.
          </p>
        </div>
      </div>
    </section>

    <!-- Practice Section -->
    <PrinciplePractice 
      title="Premium Services in Action"
      subtitle="How we deliver value while maintaining equity"
      :examples="practiceExamples"
      background-color="var(--darker-bg)"
      list-icon="💎"
    />

    <!-- Quote Section -->
    <PrincipleQuote 
      quote="The learners who are better off will, by paying the full price, help pave the way for others. Every dollar of profit from our premium services is reinvested into expanding free content, supporting more equitable access recipients, and building a sustainable system where premium support can reach everyone who truly needs it."
      author="Quan Nguyen, Founder of Skill-Wanderer"
    />

    <!-- Navigation Section -->
    <PrincipleNavigation current-slug="equitable-access" />

    <!-- Footer -->
    <TheFooter />
  </div>
</template>

<script setup lang="ts">
import type { StoryChapter, PracticeExample } from '~/types'

// Meta tags for SEO
useHead({
  title: 'Premium Services with Equity: Extra Help When Needed | Principle #11 - Skill-Wanderer',
  meta: [
    { name: 'description', content: 'Discover how Skill-Wanderer offers premium services with equitable access, ensuring no passionate learner is denied support due to financial circumstances.' }
  ]
})

// Balance scale interaction
const scaleRotation = ref(0)

const tiltScaleLeft = () => {
  scaleRotation.value = 3
}

const tiltScaleRight = () => {
  scaleRotation.value = -3
}

const resetScale = () => {
  scaleRotation.value = 0
}

// Story content data
const storyIntro = 'I call our eleventh principle <strong>Value-Added Premium Services with Equitable Access</strong>, and its story begins with a realization I had during my first internship.'

const storyChapters: StoryChapter[] = [
  {
    icon: '💡',
    title: 'The Internship Revelation',
    content: [      {
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
        text: 'I realized then that no matter how hard you try with books, online courses, and solo projects, these are the elements you will almost always lack. Learners inevitably hit roadblocks or misunderstand concepts in ways that generic materials can\'t address. To give learners the very best path to mastery, there often needs to be a <strong>human touch</strong> or access to specialized infrastructure.'
      },
      {
        type: 'personal-story',
        text: 'During that internship, I was struggling with a complex database optimization problem. I\'d spent days reading documentation and Stack Overflow, but I was stuck. Then my mentor sat with me for just 30 minutes, asked the right questions, and suddenly everything clicked. Those 30 minutes were worth more than weeks of solo struggle. That\'s when I understood the irreplaceable value of human guidance.'
      }
    ]
  },
  {
    icon: '⚖️',
    title: 'The Challenge of Scale',    content: [
      {
        type: 'challenge-highlight',
        text: 'These "human touch" resources—a mentor\'s time, personalized feedback on a project—are inherently limited. Unlike digital course content that can be put on a server and accessed by millions at low cost, human expertise is a finite and valuable resource. It has a real cost, and it doesn\'t scale infinitely.',
        additionalText: 'The Finite Resource Problem'
      },
      {
        type: 'text',
        text: 'But I also understand two things about our future learners. There will be learners who are better off financially, who can and will happily pay a fair price to accelerate their learning with this intensive support. And there will be dedicated, "unfortunate learners"—those with great potential but without the financial means to access such premium help.'
      },
      {
        type: 'text',
        text: 'This principle is our solution to serving both, while honoring our mission of accessibility and sustainability.'
      }
    ]
  },
  {
    icon: '🌉',
    title: 'Building Bridges, Not Walls',
    content: [
      {
        type: 'text',
        text: 'We will offer <strong>Value-Added Premium Services</strong> for those who can afford them. The revenue from these services will be essential for our organization\'s resilience. But it will do more than that: <strong>the learners who are better off will, by paying the full price, help pave the way for others.</strong>'
      },
      {
        type: 'text',
        text: 'Their support will allow us to build a system of equitable access. As our principle states, we will strive to offer these same premium services at significantly discounted rates, or free of charge where feasible, to individuals with disabilities, those in verifiably low-resource environments, and people with demonstrated low income.'
      },
      {
        type: 'text',
        text: 'I want to be honest: in the early days of Skill-Wanderer, these premium services and the support we can offer will be limited. We haven\'t figured out the exact specific criteria for this equitable access program yet. But as our organization grows and scales, we are committed to building out a clear, fair system.'
      },
      {
        type: 'text',
        text: 'This principle allows us to provide the highest level of intensive support while ensuring that access to that support is, itself, rooted in our core value of making quality education accessible to all who are passionate about learning.'
      }
    ]
  }
]

// Practice examples data
const practiceExamples: PracticeExample[] = [
  {
    title: 'Premium Offerings',
    items: [
      '1-on-1 mentorship sessions with industry professionals',
      'Custom learning paths designed for specific career goals',
      'Direct project collaboration opportunities',
      'Resume reviews and career coaching'
    ]
  },
  {
    title: 'Mission-Driven Revenue Model',
    items: [
      'Fair compensation for mentors and experts who deliver premium services',
      'Operational costs to maintain high-quality service delivery',
      'Infrastructure to support both premium and free offerings',
      'All profits after costs are reinvested into our mission: expanding free content, supporting more equitable access recipients, and reaching more learners globally'
    ]
  },
  {
    title: 'Ensuring Quality & Equity',
    items: [
      'Same high-quality mentorship regardless of payment status',
      'Anonymous participation to prevent any bias',
      'Regular review of equitable access applications',
      'Community-funded sponsorship opportunities'
    ]
  }
]
</script>

<style scoped>
/* Balance Visual Section */
.balance-section {
  padding: 80px 20px;
  background: var(--dark-bg);
  position: relative;
  overflow: hidden;
}

.balance-container {
  max-width: 1200px;
  margin: 0 auto;
}

.balance-visual {
  margin: 60px auto;
  position: relative;
  height: 400px;
}

.balance-scale {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 600px;
  height: 300px;
}

.scale-fulcrum {
  position: absolute;
  bottom: 0;
  left: 50%;
  transform: translateX(-50%);
  width: 0;
  height: 0;
  border-left: 40px solid transparent;
  border-right: 40px solid transparent;
  border-bottom: 80px solid var(--primary-orange);
}

.scale-beam {
  position: absolute;
  bottom: 70px;
  left: 50%;
  transform: translateX(-50%);
  width: 500px;
  height: 8px;
  background: linear-gradient(90deg, var(--premium-gold), var(--primary-orange), var(--equity-blue));
  border-radius: 4px;
  transition: transform 0.3s ease;
}

.balance-side {
  position: absolute;
  bottom: 80px;
  width: 200px;
  height: 250px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-end;
}

.balance-side.left {
  left: 50px;
}

.balance-side.right {
  right: 50px;
}

.balance-pan {
  width: 180px;
  height: 180px;
  background: var(--card-bg);
  border: 3px solid var(--primary-orange);
  border-radius: 20px;
  padding: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  transition: all 0.3s ease;
  cursor: pointer;
}

.balance-side.left .balance-pan {
  border-color: var(--premium-gold);
  background: rgba(255, 193, 7, 0.05);
}

.balance-side.right .balance-pan {
  border-color: var(--equity-blue);
  background: rgba(33, 150, 243, 0.05);
}

.balance-pan:hover {
  transform: translateY(-10px);
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3);
}

.pan-icon {
  font-size: 48px;
  margin-bottom: 15px;
}

.pan-title {
  font-size: 1.2rem;
  color: white;
  margin-bottom: 10px;
}

.pan-description {
  font-size: 0.9rem;
  opacity: 0.8;
}

/* Elements Comparison Section */
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
  background: linear-gradient(90deg, #FFC107, var(--primary-orange));
}

.element-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3);
}

.element-icon {
  width: 80px;
  height: 80px;
  background: linear-gradient(135deg, #FFC107, var(--primary-orange));
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

/* Equity Access Section */
.equity-section {
  padding: 80px 20px;
  background: var(--dark-bg);
}

.equity-container {
  max-width: 1000px;
  margin: 0 auto;
}

.equity-groups {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 30px;
  margin-top: 60px;
}

.equity-card {
  background: var(--card-bg);
  border-radius: 20px;
  padding: 40px;
  text-align: center;
  transition: all 0.3s ease;
  opacity: 0;
  animation: fadeInUp 0.6s ease-out forwards;
  border: 2px solid #2196F3;
  position: relative;
}

.equity-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 10px 30px rgba(33, 150, 243, 0.3);
  background: rgba(33, 150, 243, 0.05);
}

.equity-icon {
  font-size: 48px;
  margin-bottom: 20px;
  display: block;
}

.equity-card h3 {
  color: #2196F3;
  margin-bottom: 15px;
  font-size: 1.3rem;
}

.equity-card p {
  opacity: 0.8;
  font-size: 0.95rem;
  line-height: 1.7;
}

/* Commitment Box */
.commitment-box {
  background: linear-gradient(135deg, rgba(33, 150, 243, 0.1), rgba(255, 107, 53, 0.1));
  padding: 40px;
  border-radius: 20px;
  border: 1px solid rgba(33, 150, 243, 0.3);
  margin: 40px 0;
  text-align: center;
}

.commitment-box h3 {
  color: #2196F3;
  margin-bottom: 20px;
  font-size: 1.6rem;
}

.commitment-box p {
  font-size: 1.1rem;
  line-height: 1.8;
  opacity: 0.9;
}

.commitment-box strong {
  color: var(--primary-orange);
  font-weight: 600;
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
  .balance-scale {
    width: 100%;
    max-width: 400px;
  }

  .scale-beam {
    width: 350px;
  }

  .balance-side {
    position: static;
    margin: 20px auto;
  }

  .balance-visual {
    height: auto;
  }

  .elements-grid {
    grid-template-columns: 1fr;
    max-width: 100%;
  }

  .equity-groups {
    grid-template-columns: 1fr;
  }
}
</style>
