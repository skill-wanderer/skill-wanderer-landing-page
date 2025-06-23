<template>
  <div>    <!-- Hero Section -->
    <PrincipleHero 
      :number="10"
      title="Collaborative Community Ecosystem"
      tagline="Together We Grow"
    />

    <!-- Story Section -->
    <PrincipleStory 
      :intro="storyIntro"
      :chapters="storyChapters"
    />

    <!-- Three Reasons Section -->
    <section class="reasons-section">
      <div class="reasons-container">
        <div class="reasons-header">
          <h2 class="reasons-title">Why Peer-to-Peer Works</h2>
          <p class="reasons-subtitle">Three powerful discoveries from building teams</p>
        </div>
        
        <div class="reasons-grid">
          <div class="reason-card" style="animation-delay: 0.1s;">
            <div class="reason-number">1</div>
            <span class="reason-icon">🌉</span>
            <h3>The Bridge is Shorter</h3>
            <p>
              When someone just learned something, they still remember the confusion, the "aha" moments, 
              and exactly what helped them understand. They can relate to current struggles because their 
              own are still fresh.
            </p>
          </div>
          
          <div class="reason-card" style="animation-delay: 0.2s;">
            <div class="reason-number">2</div>
            <span class="reason-icon">🔄</span>
            <h3>Teaching Deepens Understanding</h3>
            <p>
              Preparing to teach forces you to organize thoughts, fill knowledge gaps, and truly master 
              the material. Every question from a student reveals new perspectives and edge cases.
            </p>
          </div>
          
          <div class="reason-card" style="animation-delay: 0.3s;">
            <div class="reason-number">3</div>
            <span class="reason-icon">🌟</span>
            <h3>Community Creates Culture</h3>
            <p>
              When everyone is both teacher and student, ego disappears. Knowledge flows freely, 
              questions are welcomed, and growth becomes collective rather than individual.
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- Community Ecosystem Visual -->
    <section class="ecosystem-section">
      <div class="ecosystem-container">
        <h2 class="ecosystem-title">The Living Ecosystem</h2>
        <p class="ecosystem-subtitle">Every member plays a vital role</p>
        
        <div class="ecosystem-visual">
          <div class="ecosystem-ring inner"></div>
          <div class="ecosystem-ring outer"></div>
          
          <div class="ecosystem-center">
            Skill-Wanderer<br>Community
          </div>
          
          <div class="ecosystem-node learner">
            <span class="node-icon">📚</span>
            <span>Learners</span>
          </div>
          
          <div class="ecosystem-node mentor">
            <span class="node-icon">🧭</span>
            <span>Mentors</span>
          </div>
          
          <div class="ecosystem-node creator">
            <span class="node-icon">🎨</span>
            <span>Creators</span>
          </div>
          
          <div class="ecosystem-node supporter">
            <span class="node-icon">💝</span>
            <span>Supporters</span>
          </div>
          
          <div class="ecosystem-node educator">
            <span class="node-icon">🎓</span>
            <span>Educators</span>
          </div>
          
          <div class="ecosystem-node contributor">
            <span class="node-icon">🤝</span>
            <span>Contributors</span>
          </div>
        </div>
        
        <p class="ecosystem-description">
          In our ecosystem, roles are fluid. Today's learner becomes tomorrow's mentor. 
          Everyone contributes what they can, when they can.
        </p>
      </div>
    </section>

    <!-- Vision Future Section -->
    <section class="vision-section">
      <div class="vision-container">
        <div class="vision-header">
          <h2 class="vision-title">Our Community Vision</h2>
          <p class="vision-subtitle">Building bridges across the globe</p>
        </div>
        
        <div class="vision-grid">
          <div class="vision-card" style="animation-delay: 0.1s;">
            <span class="vision-icon">🌐</span>
            <h3>Global Reach</h3>
            <p>
              Connecting learners from every corner of the world, breaking down geographical barriers 
              to quality education.
            </p>
          </div>
          
          <div class="vision-card" style="animation-delay: 0.2s;">
            <span class="vision-icon">🤲</span>
            <h3>Mutual Support</h3>
            <p>
              Creating systems where those who can give—whether time, knowledge, or resources—can 
              easily help those who need.
            </p>
          </div>
          
          <div class="vision-card" style="animation-delay: 0.3s;">
            <span class="vision-icon">📈</span>
            <h3>Collective Growth</h3>
            <p>
              Measuring success not by individual achievements but by how much the entire community 
              advances together.
            </p>
          </div>
          
          <div class="vision-card" style="animation-delay: 0.4s;">
            <span class="vision-icon">💫</span>
            <h3>Lasting Impact</h3>
            <p>
              Building a self-sustaining ecosystem that continues to grow and help people long into 
              the future.
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- Practice Section -->
    <PrinciplePractice 
      title="Building Community in Practice"
      subtitle="How we foster collaboration"
      :examples="practiceExamples"
      background-color="var(--darker-bg)"
      list-icon="🤝"
    />

    <!-- Quote Section -->
    <PrincipleQuote 
      quote="To build something truly global, I cannot do it alone. Only with a community can we reach every corner of the world. When we create an ecosystem where everyone is both learner and teacher, we don't just transfer knowledge—we multiply it."
      author="Quan Nguyen, Founder of Skill-Wanderer"
    />    <!-- Navigation Section -->
    <PrincipleNavigation current-slug="community" />  </div>
</template>

<script setup lang="ts">
import type { StoryChapter, PracticeExample } from '~/types'

// SEO and meta management
useSEO({
  title: 'Collaborative Community: Together We Grow | Principle #10',
  description: 'Discover how Skill-Wanderer builds a collaborative community where everyone is both teacher and learner, creating global impact through peer support.',
  keywords: ['collaborative community', 'peer learning', 'skill-wanderer principle 10', 'community ecosystem', 'learning together'],
  type: 'article',
  structuredData: createArticleSchema(
    'Collaborative Community: Together We Grow | Principle #10',
    'Discover how Skill-Wanderer builds a collaborative community ecosystem where everyone is both teacher and learner, creating global impact through peer-to-peer support.',
    'https://skill-wanderer.com/principles/community'
  )
})

// Story content data
const storyIntro = 'I call our tenth principle <strong>Collaborative Community Ecosystem</strong>, and the vision for it grew from a simple observation I made while leading my development teams.'

const storyChapters: StoryChapter[] = [
  {
    icon: '👥',
    title: 'The Power of Peer Teaching',
    content: [
      {
        type: 'text',
        text: 'Over my career, I\'ve discovered that one of the most effective ways to upskill an entire team is to foster a culture of peer-to-peer teaching. I would encourage more senior members to teach the less senior ones—a mid-level developer might teach a junior, and a junior might teach a fresher or an intern.'
      },
      {
        type: 'text',
        text: 'I found this works for three powerful reasons.'
      }
    ]
  },
  {
    icon: '🎯',
    title: 'Three Discoveries',
    content: [
      {
        type: 'text',
        text: '<strong>First, the knowledge gap isn\'t too wide.</strong> The mentor\'s own struggles with the topic are still fresh in their mind, allowing them to teach with greater empathy and a more relatable perspective. They remember what it was like to not understand.'
      },
      {
        type: 'text',
        text: '<strong>Second, the act of teaching benefits the teacher just as much as the student.</strong> Even a senior developer has small gaps in their knowledge. The process of preparing to teach a subject forces them to review, solidify, and "patch the holes" in their own understanding. It\'s a win-win that reinforces mastery.'
      },
      {
        type: 'text',
        text: '<strong>And third, to my pleasant surprise, this practice created something truly special:</strong> a small, vibrant community of learners within my own company. Knowledge was shared freely, and sometimes, as I mentioned in my story about <strong>Individualized</strong> learning, a junior member would even teach me something new. It created a culture where everyone was both a learner and a potential teacher.'
      },
      {
        type: 'personal-story',
        text: 'I remember one particular junior developer who struggled with React hooks. A mid-level developer who had just mastered them the previous month spent hours teaching him. The beautiful part? While teaching, the mid-level developer discovered edge cases he hadn\'t considered. Six months later, that same junior was teaching a new hire, and the cycle continued. The knowledge didn\'t just transfer—it multiplied.'
      }
    ]
  },
  {
    icon: '🌍',
    title: 'Scaling to Global Impact',
    content: [
      {
        type: 'text',
        text: 'This experience led me to a fundamental realization:'
      },      {
        type: 'realization-highlight',
        text: 'To build a platform and an initiative with the global reach I envision, I cannot do it alone. <strong>Only with a community can the platform truly soar and reach people all over the world.</strong>'
      },
      {
        type: 'text',
        text: 'This is the essence of our <strong>Collaborative Community Ecosystem</strong>. My vision is to scale that supportive, peer-to-peer culture to a global level.'
      },
      {
        type: 'text',
        text: 'I envision a future where:'
      },
      {
        type: 'text',
        text: '• Members with more experience can guide those who are just starting out, solidifying their own skills in the process.'
      },
      {
        type: 'text',
        text: '• Members who are more financially fortunate can find ways to support those with fewer resources, perhaps by sponsoring access to premium services.'
      },
      {
        type: 'text',
        text: '• Educators, developers, content creators, and learners all collaborate to build, improve, and enrich the platform for everyone.'
      },
      {
        type: 'text',
        text: 'This principle isn\'t about building an audience; it\'s about fostering a living, breathing ecosystem where people help each other grow. It\'s a cycle of mutual support that will become the true engine of Skill-Wanderer\'s long-term impact.'
      }
    ]
  }
]

// Practice examples
const practiceExamples: PracticeExample[] = [
  {
    title: 'Peer-to-Peer Learning Systems',
    items: [
      'Study groups formed around specific technologies or projects',
      'Pair programming sessions between community members',
      'Code review exchanges to improve skills',
      'Regular "teach what you learned" sessions'
    ]
  },
  {
    title: 'Support Networks',
    items: [
      'Mentorship matching based on skills and goals',
      'Community sponsorship programs for premium resources',
      'Regional chapters for local meetups and support',
      '24/7 help channels with rotating volunteers'
    ]
  },
  {
    title: 'Contribution Opportunities',
    items: [
      'Creating tutorials based on personal learning journeys',
      'Translating content for global accessibility',
      'Reviewing and improving existing materials',
      'Building tools that benefit the entire community'
    ]
  }
]
</script>

<style scoped>
/* Reasons Section */
.reasons-section {
  padding: 80px 20px;
  background: #0f0f0f;
}

.reasons-container {
  max-width: 1200px;
  margin: 0 auto;
}

.reasons-header {
  text-align: center;
  margin-bottom: 3rem;
}

.reasons-title {
  font-size: 2.5rem;
  font-weight: bold;
  color: #FF6B35;
  margin-bottom: 1.25rem;
}

.reasons-subtitle {
  font-size: 1.25rem;
  opacity: 0.9;
}

.reasons-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2.5rem;
  margin-top: 3.75rem;
}

.reason-card {
  background: rgba(255, 255, 255, 0.05);
  border-radius: 1rem;
  padding: 2.5rem;
  position: relative;
  overflow: hidden;
  transition: all 0.3s ease;
  border: 1px solid rgba(255, 107, 53, 0.2);
  animation: fadeInUp 0.6s ease-out forwards;
  opacity: 0;
}

.reason-card::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 4px;
  background: linear-gradient(90deg, #9C27B0, #FF6B35);
}

.reason-card:hover {
  transform: translateY(-8px);
  box-shadow: 0 25px 50px rgba(0, 0, 0, 0.3);
}

.reason-number {
  position: absolute;
  top: 1.25rem;
  right: 1.25rem;
  width: 3rem;
  height: 3rem;
  background: linear-gradient(135deg, #FF6B35, #E85D25);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.5rem;
  font-weight: bold;
  color: white;
}

.reason-icon {
  font-size: 3rem;
  margin-bottom: 1.25rem;
  display: block;
}

.reason-card h3 {
  color: white;
  margin-bottom: 1rem;
  font-size: 1.25rem;
}

.reason-card p {
  opacity: 0.8;
  line-height: 1.7;
}

/* Ecosystem Section */
.ecosystem-section {
  padding: 80px 20px;
  background: #1a1a1a;
  position: relative;
  overflow: hidden;
}

.ecosystem-container {
  max-width: 1000px;
  margin: 0 auto;
  text-align: center;
}

.ecosystem-title {
  font-size: 2.5rem;
  font-weight: bold;
  color: #FF6B35;
  margin-bottom: 1.25rem;
}

.ecosystem-subtitle {
  font-size: 1.25rem;
  opacity: 0.9;
}

.ecosystem-visual {
  margin: 3.75rem auto;
  position: relative;
  height: 600px;
}

.ecosystem-center {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 144px;
  height: 144px;
  background: linear-gradient(135deg, #FF6B35, #E85D25);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-size: 1.125rem;
  font-weight: bold;
  text-align: center;
  z-index: 10;
  box-shadow: 0 0 50px rgba(255, 107, 53, 0.5);
  animation: pulse 2s ease-in-out infinite;
}

@keyframes pulse {
  0%, 100% {
    box-shadow: 0 0 30px rgba(255, 107, 53, 0.5);
  }
  50% {
    box-shadow: 0 0 60px rgba(255, 107, 53, 0.8);
  }
}

.ecosystem-ring {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  border: 2px dashed rgba(255, 107, 53, 0.3);
  border-radius: 50%;
  animation: rotate 30s linear infinite;
}

.ecosystem-ring.inner {
  width: 288px;
  height: 288px;
}

.ecosystem-ring.outer {
  width: 384px;
  height: 384px;
  animation-direction: reverse;
  animation-duration: 40s;
}

@keyframes rotate {
  from { transform: translate(-50%, -50%) rotate(0deg); }
  to { transform: translate(-50%, -50%) rotate(360deg); }
}

.ecosystem-node {
  position: absolute;
  width: 96px;
  height: 96px;
  background: rgba(255, 255, 255, 0.05);
  border: 2px solid #FF6B35;
  border-radius: 50%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: 0.875rem;
  text-align: center;
  padding: 0.5rem;
  transition: all 0.3s ease;
  cursor: pointer;
}

.ecosystem-node:hover {
  transform: scale(1.1);
  background: rgba(255, 255, 255, 0.08);
  box-shadow: 0 5px 20px rgba(255, 107, 53, 0.4);
}

.ecosystem-node.learner {
  top: 10%;
  left: 50%;
  transform: translateX(-50%);
}

.ecosystem-node.mentor {
  top: 30%;
  right: 25%; 
}

.ecosystem-node.creator {
  bottom: 30%;
  right: 25%; 
}

.ecosystem-node.supporter {
  bottom: 10%;
  left: 50%;
  transform: translateX(-50%);
}

.ecosystem-node.educator {
  bottom: 30%;
  left: 25%; 
}

.ecosystem-node.contributor {
  top: 30%;
  left: 25%; 
}

.node-icon {
  font-size: 1.5rem;
  margin-bottom: 0.25rem;
}

.ecosystem-description {
  text-align: center;
  margin-top: 2.5rem;
  font-size: 1.125rem;
  opacity: 0.9;
  max-width: 768px;
  margin-left: auto;
  margin-right: auto;
}

/* Vision Section */
.vision-section {
  padding: 80px 20px;
  background: #0f0f0f;
}

.vision-container {
  max-width: 1000px;
  margin: 0 auto;
}

.vision-header {
  text-align: center;
  margin-bottom: 3rem;
}

.vision-title {
  font-size: 2.5rem;
  font-weight: bold;
  color: #FF6B35;
  margin-bottom: 1.25rem;
}

.vision-subtitle {
  font-size: 1.25rem;
  opacity: 0.9;
}

.vision-grid {
  display: grid;
  grid-template-columns: 1fr; /* Default to 1 column on small screens */
  gap: 2rem;
  margin-top: 3.75rem;
}

@media (min-width: 768px) { /* Apply 2x2 grid for screens wider than 768px */
  .vision-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

.vision-card {
  background: rgba(255, 255, 255, 0.05);
  border-radius: 1rem;
  padding: 2.5rem;
  text-align: center;
  transition: all 0.3s ease;
  border: 1px solid rgba(255, 107, 53, 0.2);
  position: relative;
  overflow: hidden;
  animation: fadeInUp 0.6s ease-out forwards;
  opacity: 0;
}

.vision-card::before {
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

.vision-card:hover {
  transform: translateY(-8px);
  box-shadow: 0 25px 50px rgba(0, 0, 0, 0.3);
}

.vision-card:hover::before {
  opacity: 1;
}

.vision-icon {
  font-size: 3rem;
  margin-bottom: 1.25rem;
  display: block;
}

.vision-card h3 {
  color: white;
  margin-bottom: 1rem;
  font-size: 1.2rem;
}

.vision-card p {
  opacity: 0.8;
  font-size: 0.95rem;
  line-height: 1.7;
}

/* Responsive Design */
@media (max-width: 767px) { /* Adjusted breakpoint to be less than 768px */
  .ecosystem-visual {
    height: 400px;
  }
  
  .ecosystem-center {
    width: 112px;
    height: 112px;
    font-size: 0.875rem;
  }
  
  .ecosystem-ring.inner {
    width: 192px;
    height: 192px;
  }
  
  .ecosystem-ring.outer {
    width: 320px;
    height: 320px;
  }
  
  .ecosystem-node {
    width: 80px;
    height: 80px;
    font-size: 0.75rem;
  }
  
  .reasons-grid {
    grid-template-columns: 1fr;
  }
  
  .vision-grid {
    grid-template-columns: 1fr; /* Ensures 1 column on smaller screens */
  }
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
</style>
