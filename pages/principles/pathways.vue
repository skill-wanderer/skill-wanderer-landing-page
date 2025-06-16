<template>
    <TheNavigation />

  <div>    <!-- Hero Section -->
    <PrincipleHero
      :number="7"
      title="Pathways for Our Learners" 
      tagline="From Student to Colleague"
      breadcrumb-name="Pathways for Our Learners"
    />    <!-- Story Section -->
    <PrincipleStory
      :intro="storyIntro"
      :chapters="storyChapters"
    />

    <!-- Disconnect Examples Section -->
    <section class="disconnect-section">
      <div class="disconnect-container">
        <div style="text-align: center; margin-bottom: 50px;">
          <h2 style="font-size: 2.5rem; color: var(--primary-orange);">Learning from Disconnects</h2>
          <p style="font-size: 1.2rem; opacity: 0.9;">What happens when education forgets its purpose</p>
        </div>
        
        <div class="disconnect-grid">
          <div class="disconnect-card" style="animation-delay: 0.1s;">
            <div class="disconnect-icon">💻</div>
            <h3>The Unused System</h3>
            <p>A technically perfect system that users avoided because we never asked what they actually needed.</p>
            <div class="lesson-learned">
              <strong>Lesson:</strong> Only promise what you can deliver by using it yourself.
            </div>
          </div>
          
          <div class="disconnect-card" style="animation-delay: 0.2s;">
            <div class="disconnect-icon">🎓</div>
            <h3>The Unprepared Graduate</h3>
            <p>Students who know theory but can't apply it, or worse, who bought their way through.</p>
            <div class="lesson-learned">
              <strong>Lesson:</strong> Education without accountability is just expensive entertainment.
            </div>
          </div>
          
          <div class="disconnect-card" style="animation-delay: 0.3s;">
            <div class="disconnect-icon">🏢</div>
            <h3>The Broken Promise</h3>
            <p>Institutions that promise job placement but lack the quality or connections to deliver.</p>
            <div class="lesson-learned">
              <strong>Lesson:</strong> Success isn't measured by features completed, but by lives improved.
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Self-Reinforcing Loop Section -->
    <section class="loop-section">
      <div class="loop-container">
        <h2 style="font-size: 2.5rem; color: var(--primary-orange); margin-bottom: 20px;">The Self-Reinforcing Loop</h2>
        <p style="font-size: 1.2rem; opacity: 0.9;">How eating our own dog food creates excellence</p>
        
        <div class="loop-visual">
          <div class="loop-circle">
            <div class="loop-node learn">
              <span class="loop-node-icon">📚</span>
              <span>Learners Study</span>
            </div>
            <div class="loop-node join">
              <span class="loop-node-icon">🤝</span>
              <span>Best Join Team</span>
            </div>
            <div class="loop-node teach">
              <span class="loop-node-icon">🎯</span>
              <span>Team Creates Content</span>
            </div>
            <div class="loop-node improve">
              <span class="loop-node-icon">⚡</span>
              <span>Platform Improves</span>
            </div>
          </div>
          <div class="loop-center">
            Skill-Wanderer
          </div>
        </div>
        
        <p style="font-size: 1.1rem; opacity: 0.9; margin-top: 40px;">
          Every graduate who joins us brings fresh perspectives. Every team member who creates content 
          knows it must be good enough for their own learning. Every improvement makes the next 
          generation even better.
        </p>      </div>
    </section>

    <!-- Vision Timeline Section -->
    <section class="vision-section">
      <div class="vision-container">
        <div style="text-align: center; margin-bottom: 50px;">
          <h2 style="font-size: 2.5rem; color: var(--primary-orange);">The Journey Ahead</h2>
          <p style="font-size: 1.2rem; opacity: 0.9;">Building pathways takes time, but the destination is clear</p>
        </div>
        
        <div class="vision-timeline">
          <div class="vision-line"></div>
          
          <div class="vision-phase current" style="animation-delay: 0.1s;">
            <div class="vision-content">
              <h3>Early Phase (Now)</h3>
              <p>Building foundation courses, establishing quality standards, creating our first content. Limited direct opportunities but unlimited commitment.</p>
            </div>
            <div class="vision-marker">🌱</div>
          </div>
          
          <div class="vision-phase" style="animation-delay: 0.3s;">
            <div class="vision-content">
              <h3>Growth Phase</h3>
              <p>First learners complete programs, initial hires from our community, proving the model works. Success stories begin.</p>
            </div>
            <div class="vision-marker">🌿</div>
          </div>
          
          <div class="vision-phase" style="animation-delay: 0.5s;">
            <div class="vision-content">
              <h3>Maturity Phase</h3>
              <p>Regular pipeline from learner to team member, alumni creating content, multiple career paths available within our ecosystem.</p>
            </div>
            <div class="vision-marker">🌳</div>
          </div>
          
          <div class="vision-phase" style="animation-delay: 0.7s;">
            <div class="vision-content">
              <h3>Full Circle</h3>
              <p>Former learners leading teams, creating new programs, mentoring the next generation. The loop becomes self-sustaining.</p>
            </div>
            <div class="vision-marker">🔄</div>
          </div>
        </div>
      </div>
    </section>

    <!-- Practice Section -->
    <PrinciplePractice
      title="Creating Real Pathways"
      subtitle="How we turn promise into practice"
      :examples="practiceExamples"
      background-color="var(--darker-bg)"
    />

    <!-- Quote Section -->
    <PrincipleQuote
      quote="We are so committed to your success that our goal is to one day be your colleagues. This isn't just education—it's an invitation to join us in building something extraordinary."
    />

    <!-- Navigation Section -->
    <PrincipleNavigation current-slug="pathways" />
  </div>
</template>

<script setup lang="ts">
import type { StoryChapter, PracticeExample } from '~/types'

// SEO Meta
useHead({
  title: 'Pathways for Our Learners: From Student to Colleague | Principle #7 - Skill-Wanderer',
  meta: [
    {
      name: 'description',
      content: 'Discover how Skill-Wanderer creates pathways from student to colleague, eating our own dog food to ensure quality education and building our own successors through proven learning systems.'
    }
  ]
})

const storyIntro = `
  I call our seventh principle <strong>Pathways for Our Learners</strong>, but its internal motto is much simpler: "Eat your own dog food." This philosophy comes from hard-earned lessons in both software development and education.
`

const storyChapters: StoryChapter[] = [
  {
    icon: '💔',
    title: 'The Perfect System Nobody Used',
    content: [
      {
        type: 'text',
        text: `Of the many systems I've built, one stands out in my memory the most—not for its success, but for 
               what it taught me. It was an in-house system, and on paper, it was perfect. The development team 
               met every business requirement, we finished quickly, and we were proud of our work. There was just 
               one problem: the users didn't openly refuse to use it; they just... didn't. They were unwilling and 
               did everything they could to avoid it.`
      },
      {
        type: 'personal-story',
        text: `I still remember the crushing realization when I walked through the office weeks after deployment. 
               People were still using spreadsheets, still doing things the old way. Our "perfect" system sat 
               unused, a monument to our disconnect from reality. The worst part? We had been so confident that 
               we'd already started planning to sell it externally.`
      },
      {
        type: 'text',
        text: `We had made a classic mistake: we left the most important stakeholder—the end-user—out of the process 
               and then forced a system onto them. Unsurprisingly, when we tried to sell this "successful" system 
               to external customers, it failed completely.`
      }
    ]
  },
  {
    icon: '🎓',
    title: 'The Education Disconnect',
    content: [
      {
        type: 'text',
        text: `I see this same disconnect happening constantly in education. I've hired many developers from so-called 
               bootcamps and even universities who are a testament to this gap. They often know plenty of things they 
               don't need to, and very little of what is actually most important for the job. In one extreme case, 
               a graduate from a prestigious college admitted to me that he had bribed a professor to pass.`
      },
      {
        type: 'text',
        text: `The common theme is clear: many institutions teach a curriculum and then leave the learners on their 
               own after graduation, with little accountability for their actual success.`
      },
      {
        type: 'text',
        text: `I once enrolled in an online university that promised internships with its related companies after 
               completing half the subjects. It was a compelling idea. But the university eventually had to abandon 
               this model, buckling under financial pressures and flaws in its own educational methods. However, it 
               taught me a valuable lesson: <strong>if you truly believe in the quality of what you produce, you must 
               be willing to use it yourself.</strong>`
      }
    ]
  },
  {
    icon: '💡',
    title: 'The Core Philosophy',
    content: [
      {
        type: 'motto-highlight',
        text: '"Eat Your Own Dog Food"',
        additionalText: 'If you truly believe in what you create, you must be willing to use it yourself.'
      }
    ]
  },
  {
    icon: '🔄',
    title: 'The Self-Reinforcing Loop',
    content: [
      {
        type: 'text',
        text: `This is the very soul of our <strong>Pathways for Our Learners</strong> principle.`
      },      {
        type: 'text',
        text: `I envision an organization where we create pathways for the people we educate to join our own team. 
               This is our ultimate proof of quality and our method for building our own successors. The e-learning 
               platform we build will also become the main educational platform for our own future staff, creating 
               a powerful, self-reinforcing loop.`
      },
      {
        type: 'text',
        text: `I understand this is a long-term vision. In our early phase, with limited course offerings and the 
               challenges of a rough start, direct hiring opportunities will be few. But by building our organization 
               on a foundation of quality and using our financial model (Principle #12) to serve our mission without 
               pressure for short-term profit, we are confident this principle is not just a dream, but an achievable 
               and essential part of our future.`
      },
      {
        type: 'text',
        text: `It's our promise to our learners: <strong>we are so committed to your success that our goal is to 
               one day be your colleagues.</strong>`
      }
    ]
  }
]

const practiceExamples: PracticeExample[] = [
  {
    title: 'Internal Education First',
    items: [
      'Every team member learns through our own platform',
      'New hires onboard using our courses',
      'Continuous learning paths for existing staff',
      'If it\'s not good enough for us, it\'s not good enough for anyone'
    ]
  },
  {
    title: 'Performance-Based Opportunities',
    items: [
      'Track learner progress and engagement',
      'Identify top performers through projects',
      'Offer internships and contract work first',
      'Full-time positions for proven contributors'
    ]
  },
  {
    title: 'Building Succession',
    items: [
      'Today\'s learners become tomorrow\'s colleagues',
      'Career progression from student to educator',
      'Leadership development for future growth',
      'Creating our own talent pipeline'
    ]
  }
]
</script>

<style scoped>
/* Disconnect Examples Section */
.disconnect-section {
  padding: 80px 20px;
  background: var(--dark-bg);
}

.disconnect-container {
  max-width: 1200px;
  margin: 0 auto;
}

.disconnect-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  gap: 40px;
  margin-top: 50px;
}

.disconnect-card {
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

.disconnect-card::before {
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

.disconnect-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3);
}

.disconnect-icon {
  width: 60px;
  height: 60px;
  background: rgba(244, 67, 54, 0.1);
  border: 2px solid var(--failure-red);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 20px;
  font-size: 28px;
}

.disconnect-card h3 {
  color: white;
  margin-bottom: 15px;
  font-size: 1.4rem;
}

.disconnect-card p {
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

/* Self-Reinforcing Loop Section */
.loop-section {
  padding: 80px 20px;
  background: var(--darker-bg);
  position: relative;
  overflow: hidden;
}

.loop-container {
  max-width: 800px;
  margin: 0 auto;
  text-align: center;
}

.loop-visual {
  width: 400px;
  height: 400px;
  margin: 60px auto;
  position: relative;
}

.loop-circle {
  width: 100%;
  height: 100%;
  border: 4px solid rgba(255, 107, 53, 0.2);
  border-radius: 50%;
  position: relative;
  animation: rotate 20s linear infinite;
}

@keyframes rotate {
  from { transform: rotate(0deg); }
  to { transform: rotate(360deg); }
}

.loop-node {
  position: absolute;
  width: 100px;
  height: 100px;
  background: var(--card-bg);
  border: 3px solid var(--primary-orange);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  font-size: 14px;
  text-align: center;
  padding: 10px;
  transition: all 0.3s ease;
}

.loop-node:hover {
  transform: scale(1.1);
  background: var(--card-hover);
  box-shadow: 0 5px 20px rgba(255, 107, 53, 0.4);
}

.loop-node.learn {
  top: -50px;
  left: 50%;
  transform: translateX(-50%);
}

.loop-node.join {
  right: -50px;
  top: 50%;
  transform: translateY(-50%);
}

.loop-node.teach {
  bottom: -50px;
  left: 50%;
  transform: translateX(-50%);
}

.loop-node.improve {
  left: -50px;
  top: 50%;
  transform: translateY(-50%);
}

.loop-center {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 150px;
  height: 150px;
  background: linear-gradient(135deg, var(--primary-orange), var(--deep-orange));
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-size: 18px;
  font-weight: bold;
  box-shadow: 0 10px 30px rgba(255, 107, 53, 0.4);
}

.loop-node-icon {
  font-size: 24px;
  margin-bottom: 5px;
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

/* Responsive design */
@media (max-width: 768px) {
  .disconnect-grid {
    grid-template-columns: 1fr;
    gap: 30px;
  }
  
  .loop-visual {
    width: 300px;
    height: 300px;
  }
  
  .loop-node {
    width: 80px;
    height: 80px;
    font-size: 12px;
    padding: 8px;
  }
  
  .loop-node.learn {
    top: -40px;
  }
  
  .loop-node.join {
    right: -40px;
  }
  
  .loop-node.teach {
    bottom: -40px;
  }
  
  .loop-node.improve {
    left: -40px;
  }
  
  .loop-center {
    width: 120px;
    height: 120px;
    font-size: 16px;
  }
    .loop-node-icon {
    font-size: 20px;
  }
}

/* Vision Timeline Section */
.vision-section {
  padding: 80px 20px;
  background: var(--dark-bg);
}

.vision-container {
  max-width: 1000px;
  margin: 0 auto;
}

.vision-timeline {
  position: relative;
  margin-top: 60px;
}

.vision-line {
  position: absolute;
  left: 50%;
  top: 0;
  bottom: 0;
  width: 4px;
  background: linear-gradient(180deg, rgba(255, 107, 53, 0.2) 0%, var(--primary-orange) 100%);
  transform: translateX(-50%);
}

.vision-phase {
  display: flex;
  align-items: center;
  margin-bottom: 60px;
  position: relative;
  opacity: 0;
  animation: fadeInUp 0.6s ease-out forwards;
}

.vision-phase:nth-child(even) {
  flex-direction: row-reverse;
}

.vision-phase:nth-child(even) .vision-content {
  text-align: right;
}

.vision-content {
  flex: 1;
  padding: 0 40px;
}

.vision-marker {
  width: 80px;
  height: 80px;
  background: var(--card-bg);
  border: 3px solid var(--primary-orange);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 32px;
  position: relative;
  z-index: 2;
}

.vision-phase.current .vision-marker {
  background: rgba(255, 107, 53, 0.1);
  animation: pulse 2s ease-in-out infinite;
}

@keyframes pulse {
  0%, 100% {
    box-shadow: 0 0 0 0 rgba(255, 107, 53, 0.4);
  }
  50% {
    box-shadow: 0 0 0 20px rgba(255, 107, 53, 0);
  }
}

.vision-content h3 {
  color: white;
  margin-bottom: 10px;
  font-size: 1.3rem;
}

.vision-content p {
  opacity: 0.8;
  line-height: 1.7;
}

/* Responsive design for vision timeline */
@media (max-width: 768px) {
  .vision-phase {
    flex-direction: column !important;
    text-align: center;
    margin-bottom: 40px;
  }
  
  .vision-content {
    order: 2;
    text-align: center !important;
    padding: 20px 0;
  }
  
  .vision-marker {
    order: 1;
    margin-bottom: 20px;
    width: 60px;
    height: 60px;
    font-size: 24px;
  }
  
  .vision-line {
    display: none;
  }
}
</style>
