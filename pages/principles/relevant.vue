<template>
  <div>
    <TheNavigation />
    <!-- Hero Section -->
    <PrincipleHero
      :number="6"
      title="Relevant & Impactful"
      tagline="Real Skills for Real Jobs"
      breadcrumb-name="Relevant & Impactful"
    />

    <!-- Story Section -->
    <PrincipleStory
      :intro="storyIntro"
      :chapters="storyChapters"
    />

    <!-- Evolution Timeline Section -->
    <section class="evolution-section">
      <div class="evolution-container">
        <div style="text-align: center; margin-bottom: 50px;">
          <h2 style="font-size: 2.5rem; color: var(--primary-orange);">The Evolution of Tech Roles</h2>
          <p style="font-size: 1.2rem; opacity: 0.9;">How quickly the landscape changes</p>
        </div>
        
        <div class="evolution-timeline">
          <div class="evolution-track">
            <div class="evolution-line"></div>
            
            <div class="evolution-stop" style="animation-delay: 0.1s;">
              <div class="evolution-marker obsolete">💻</div>
              <div class="evolution-content">
                <h4>"Computer" (Human)</h4>
                <p>People who performed calculations</p>
              </div>
            </div>
            
            <div class="evolution-stop" style="animation-delay: 0.2s;">
              <div class="evolution-marker">🗃️</div>
              <div class="evolution-content">
                <h4>Punch Card Era</h4>
                <p>Physical cards for programming</p>
              </div>
            </div>
            
            <div class="evolution-stop" style="animation-delay: 0.3s;">
              <div class="evolution-marker">🖥️</div>
              <div class="evolution-content">
                <h4>Desktop Developer</h4>
                <p>Single-platform applications</p>
              </div>
            </div>
            
            <div class="evolution-stop" style="animation-delay: 0.4s;">
              <div class="evolution-marker">🌐</div>
              <div class="evolution-content">
                <h4>Web Developer</h4>
                <p>Internet-based solutions</p>
              </div>
            </div>
            
            <div class="evolution-stop" style="animation-delay: 0.5s;">
              <div class="evolution-marker">☁️</div>
              <div class="evolution-content">
                <h4>Cloud Engineer</h4>
                <p>Distributed systems at scale</p>
              </div>
            </div>
            
            <div class="evolution-stop" style="animation-delay: 0.6s;">
              <div class="evolution-marker">🤖</div>
              <div class="evolution-content">
                <h4>AI/ML Engineer</h4>
                <p>Building intelligent systems</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Gap Analysis Section -->
    <section class="gap-section">
      <div class="gap-container">
        <div style="text-align: center; margin-bottom: 50px;">
          <h2 style="font-size: 2.5rem; color: var(--primary-orange);">The Two Gaps We Bridge</h2>
          <p style="font-size: 1.2rem; opacity: 0.9;">Different learners, different needs, one solution</p>
        </div>
        
        <div class="gap-grid">
          <div class="gap-card theory" style="animation-delay: 0.1s;">
            <div class="gap-header">
              <div class="gap-icon">🎓</div>
              <h3>The Theory-Heavy Graduate</h3>
            </div>
            
            <div class="gap-profile">
              <h4>Their Strengths:</h4>
              <p>Strong theoretical foundation, understands algorithms, knows data structures, can prove complexity</p>
            </div>
            
            <div class="gap-profile">
              <h4>Their Gaps:</h4>
              <p>Never deployed to production, unfamiliar with real tools, no experience with team workflows</p>
            </div>
            
            <ul class="gap-list">
              <li>Needs hands-on project experience</li>
              <li>Requires exposure to industry tools</li>
              <li>Must learn debugging real systems</li>
              <li>Needs practice with version control</li>
            </ul>
          </div>
          
          <div class="gap-card practice" style="animation-delay: 0.3s;">
            <div class="gap-header">
              <div class="gap-icon">🛠️</div>
              <h3>The Self-Taught Practitioner</h3>
            </div>
            
            <div class="gap-profile">
              <h4>Their Strengths:</h4>
              <p>Can build working applications, knows popular frameworks, ships features quickly, solves real problems</p>
            </div>
            
            <div class="gap-profile">
              <h4>Their Gaps:</h4>
              <p>Missing fundamental CS concepts, struggles with complex algorithms, limited architectural thinking</p>
            </div>
            
            <ul class="gap-list">
              <li>Needs algorithmic foundations</li>
              <li>Requires system design principles</li>
              <li>Must understand performance analysis</li>
              <li>Needs architectural patterns</li>
            </ul>
          </div>
        </div>
      </div>
    </section>

    <!-- Bridge Visual Section -->
    <section class="bridge-section">
      <div class="bridge-container">
        <h2 style="font-size: 2.5rem; color: var(--primary-orange); margin-bottom: 20px;">Building the Bridge</h2>
        <p style="font-size: 1.2rem; opacity: 0.9;">Connecting theory and practice for complete mastery</p>
        
        <div class="bridge-visual">
          <div class="bridge-sides">
            <div class="bridge-side left">
              <h3>Theory</h3>
              <p>Algorithms, Data Structures, Design Patterns, System Architecture</p>
            </div>
            
            <div class="bridge-side right">
              <h3>Practice</h3>
              <p>Real Projects, Industry Tools, Team Collaboration, Production Skills</p>
            </div>
          </div>
          
          <div class="bridge-connection">
            <div class="bridge-beam"></div>
            <div class="bridge-center">🌉</div>
          </div>
        </div>
        
        <p style="font-size: 1.1rem; opacity: 0.9; margin-top: 40px;">
          Our curriculum builds from both sides, meeting learners wherever they are and 
          guiding them to complete, industry-ready expertise.
        </p>
      </div>
    </section>

    <!-- Practice Section -->
    <PrinciplePractice
      title="Making Education Matter"
      subtitle="How we ensure relevance and impact"
      :examples="practiceExamples"
      background-color="var(--darker-bg)"
    />

    <!-- Quote Section -->
    <PrincipleQuote
      quote="Our goal is to provide an education that doesn't just prepare someone for their first job, but empowers them for a long and successful career in a world that never stops changing."
    />

    <!-- Navigation Section -->
    <PrincipleNavigation current-slug="relevant" />
  </div>
</template>

<script setup lang="ts">
import type { StoryChapter, StoryContent, PracticeExample } from '~/types'

// Meta
useSeoMeta({
  title: 'Relevant & Impactful: Real Skills for Real Jobs | Principle #6 - Skill-Wanderer',
  description: 'Bridge the gap between theory and practice. Learn how we create education that serves both graduates who need practical skills and practitioners who need foundational knowledge.',
})

// Story content
const storyIntro = "I call our sixth principle <strong>Relevant & Impactful</strong>. As someone who completely changed careers from an import-export manager to a developer, I understand the words \"reskill\" and \"upskill\" on a deeply personal level."

const storyChapters: StoryChapter[] = [
  {
    icon: "🔄",
    title: "The World in Constant Motion",
    content: [
      {
        type: "text",
        text: "The world of technology is in constant motion. Old skills become obsolete, making way for new ones. Job titles might stay the same, but the skills required are vastly different. The job of a developer today bears little resemblance to the era of punch cards. There even used to be a formal job title called \"Computer\" for people who performed calculations—a role that has since vanished entirely. This constant evolution means that lifelong learning isn't just a nice idea; it's a necessity for survival and growth."
      },
      {
        type: "personal-story",
        text: "When I made my career transition, I remember feeling overwhelmed by how much had changed even in the few years since I'd first looked at programming. Languages I'd heard about were already considered legacy. New frameworks appeared monthly. The skills that were \"must-haves\" when I started learning were already being replaced. It was both terrifying and exhilarating."
      }
    ]
  },
  {
    icon: "🎓",
    title: "The Two Gaps",
    content: [
      {
        type: "text",
        text: "This also highlights a challenge I've repeatedly observed in formal education. Don't get me wrong, university education is valuable—I myself enrolled in a computer science program. However, in many parts of the world, it often lacks a crucial component: practical, real-world application. I've led many bright graduates who have a strong theoretical foundation but are unprepared for the realities of a development job, forcing them to be retrained from the ground up."
      },
      {
        type: "text",
        text: "On the other hand, I've also worked with brilliant, self-taught developers who have incredible practical skills but lack some of the formal, foundational knowledge from a structured education. While they are very effective, this gap can sometimes limit their potential for future growth into more complex architectural or leadership roles."
      }
    ]
  },
  {
    icon: "🌉",
    title: "Bridging Both Worlds",
    content: [
      {
        type: "text",
        text: "Our organization aims to bridge both of these gaps. This is the heart of our <strong>Relevant & Impactful</strong> principle."
      },
      {
        type: "text",
        text: "• Our education must be <strong>Relevant</strong>: It needs to be practical, hands-on, and directly connected to the skills the industry demands <em>today</em>. This is how we serve the graduate who has theory but needs practice."
      },
      {
        type: "text",
        text: "• Our education must be <strong>Impactful</strong>: It must provide the solid, foundational knowledge that allows for long-term growth and adaptability. This is how we serve the practitioner who has skills but needs a deeper understanding to go further."
      },
      {
        type: "text",
        text: "This is where this principle connects directly with our others. Through <strong>Principle #3 (Individualized)</strong>, learners can choose their own path to fill the specific gaps they have, whether theoretical or practical. And through <strong>Principle #1 (Accessible)</strong>, we ensure that this crucial reskilling and upskilling is available to anyone who needs it to navigate their career."
      },
      {
        type: "text",
        text: "Ultimately, our goal is to provide an education that doesn't just prepare someone for their first job, but empowers them for a long and successful career in a world that never stops changing."
      }
    ]
  }
]

// Practice examples
const practiceExamples: PracticeExample[] = [
  {
    title: "Industry-Aligned Curriculum",
    items: [
      "Regular surveys of job postings to identify in-demand skills",
      "Direct feedback from hiring managers and tech leads",
      "Curriculum updates based on technology trends",
      "Focus on tools and frameworks actually used in production"
    ]
  },
  {
    title: "Balanced Learning Approach",
    items: [
      "Theory explained through practical examples",
      "Practice grounded in solid principles",
      "Real projects that demonstrate fundamental concepts",
      "Code reviews that teach both style and substance"
    ]
  },
  {
    title: "Career-Long Empowerment",
    items: [
      "Teaching how to learn new technologies independently",
      "Building adaptability for future role changes",
      "Creating strong foundations for continuous growth",
      "Preparing for roles that don't exist yet"
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

  document.querySelectorAll('.evolution-stop, .gap-card, .bridge-side').forEach(item => {
    observer.observe(item)
  })
})
</script>

<style scoped>
/* Evolution Timeline */
.evolution-section {
  padding: 80px 20px;
  background: var(--dark-bg);
}

.evolution-container {
  max-width: 1200px;
  margin: 0 auto;
}

.evolution-timeline {
  position: relative;
  margin-top: 60px;
}

.evolution-track {
  display: flex;
  justify-content: space-between;
  position: relative;
  padding: 0 40px;
}

.evolution-line {
  position: absolute;
  top: 40px;
  left: 80px;
  right: 80px;
  height: 4px;
  background: linear-gradient(90deg, rgba(255, 107, 53, 0.2) 0%, rgba(255, 107, 53, 0.4) 100%);
  z-index: 0;
}

.evolution-stop {
  flex: 1;
  text-align: center;
  position: relative;
  z-index: 1;
  opacity: 0;
  animation: fadeInUp 0.6s ease-out forwards;
}

.evolution-marker {
  width: 80px;
  height: 80px;
  margin: 0 auto 25px;
  background: var(--card-bg);
  border: 3px solid var(--primary-orange);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 32px;
  transition: all 0.3s ease;
}

.evolution-marker.obsolete {
  opacity: 0.5;
  border-color: #666;
}

.evolution-stop:hover .evolution-marker {
  transform: scale(1.1);
  box-shadow: 0 5px 20px rgba(255, 107, 53, 0.3);
}

.evolution-content h4 {
  color: white;
  margin-bottom: 10px;
  font-size: 1.1rem;
}

.evolution-content p {
  opacity: 0.8;
  font-size: 0.9rem;
  max-width: 150px;
  margin: 0 auto;
}

/* Gap Analysis Section */
.gap-section {
  padding: 80px 20px;
  background: var(--darker-bg);
}

.gap-container {
  max-width: 1000px;
  margin: 0 auto;
}

.gap-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 40px;
  margin-top: 50px;
}

.gap-card {
  background: var(--card-bg);
  border-radius: 20px;
  padding: 40px;
  position: relative;
  transition: all 0.3s ease;
  opacity: 0;
  animation: fadeInUp 0.6s ease-out forwards;
}

.gap-card.theory {
  border: 2px solid rgba(33, 150, 243, 0.3);
}

.gap-card.practice {
  border: 2px solid rgba(0, 188, 212, 0.3);
}

.gap-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3);
}

.gap-header {
  display: flex;
  align-items: center;
  gap: 20px;
  margin-bottom: 30px;
}

.gap-icon {
  width: 60px;
  height: 60px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 28px;
}

.gap-card.theory .gap-icon {
  background: rgba(33, 150, 243, 0.1);
  border: 2px solid var(--theory-blue);
}

.gap-card.practice .gap-icon {
  background: rgba(0, 188, 212, 0.1);
  border: 2px solid var(--practice-green);
}

.gap-card h3 {
  font-size: 1.5rem;
  color: white;
}

.gap-profile {
  margin-bottom: 25px;
}

.gap-profile h4 {
  color: var(--primary-orange);
  margin-bottom: 10px;
}

.gap-profile p {
  opacity: 0.8;
  line-height: 1.7;
}

.gap-list {
  list-style: none;
  padding: 0;
}

.gap-list li {
  padding: 10px 0;
  padding-left: 30px;
  position: relative;
  opacity: 0.9;
}

.gap-list li::before {
  content: '→';
  position: absolute;
  left: 0;
  color: var(--primary-orange);
  font-weight: bold;
}

/* Bridge Section */
.bridge-section {
  padding: 80px 20px;
  background: var(--dark-bg);
  position: relative;
}

.bridge-container {
  max-width: 1000px;
  margin: 0 auto;
  text-align: center;
}

.bridge-visual {
  margin: 60px 0;
  position: relative;
  height: 300px;
}

.bridge-sides {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  height: 100%;
}

.bridge-side {
  width: 35%;
  padding: 40px;
  background: var(--card-bg);
  border-radius: 20px;
  border: 2px solid rgba(255, 107, 53, 0.2);
  position: relative;
  opacity: 0;
  animation: fadeInUp 0.6s ease-out forwards;
}

.bridge-side.left {
  border-color: var(--theory-blue);
  animation-delay: 0.2s;
}

.bridge-side.right {
  border-color: var(--practice-green);
  animation-delay: 0.4s;
}

.bridge-side h3 {
  color: white;
  margin-bottom: 15px;
  font-size: 1.5rem;
}

.bridge-side p {
  opacity: 0.9;
  line-height: 1.6;
}

.bridge-connection {
  position: absolute;
  top: 50%;
  left: 35%;
  right: 35%;
  height: 80px;
  transform: translateY(-50%);
  display: flex;
  align-items: center;
  justify-content: center;
}

.bridge-beam {
  position: absolute;
  width: 100%;
  height: 6px;
  background: linear-gradient(90deg, var(--theory-blue), var(--primary-orange), var(--practice-green));
  border-radius: 3px;
  opacity: 0;
  animation: fadeIn 1s ease-out 0.6s forwards;
}

.bridge-center {
  background: var(--primary-orange);
  color: white;
  width: 60px;
  height: 60px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 24px;
  z-index: 1;
  opacity: 0;
  animation: fadeIn 1s ease-out 0.8s forwards;
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

@keyframes fadeIn {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}

/* Responsive */
@media (max-width: 768px) {
  .evolution-track {
    flex-direction: column;
    gap: 40px;
    padding: 0;
  }

  .evolution-line {
    display: none;
  }

  .gap-grid {
    grid-template-columns: 1fr;
  }

  .bridge-visual {
    height: auto;
  }

  .bridge-sides {
    flex-direction: column;
    gap: 40px;
  }

  .bridge-side {
    width: 100%;
  }

  .bridge-connection {
    display: none;  }
}
</style>
