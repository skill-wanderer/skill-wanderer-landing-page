<template>
  <div>
    <!-- Hero Section -->
    <PrincipleHero
      :number="8"
      title="Technology Partnerships Fueling Mission" 
      tagline="Work That Gives Back"
      breadcrumb-name="Technology Partnerships Fueling Mission"
    />

    <!-- Story Section -->
    <PrincipleStory
      :intro="storyIntro"
      :chapters="storyChapters"
    />

    <!-- How Our Partnership Model Works Section -->
    <section class="model-section">
      <div class="model-container">
        <h2>How Our Technology Partnership Model Works</h2>
        
        <div class="model-intro">
          <p class="model-statement">
            Skill-Wanderer does not operate as a traditional outsourcing or staffing company.
          </p>
          <p class="model-statement">
            We do not bill hourly or daily rates, nor do we treat teams as short-term, interchangeable resources.
          </p>
          <p class="model-description">
            Instead, we collaborate with partners through long-term models that may include revenue sharing, 
            outcome-based scaling, or building dedicated teams from our learner community.
          </p>
        </div>

        <div class="model-cards">
          <div class="model-card">
            <div class="model-icon">💫</div>
            <h3>Mission-Support Fee</h3>
            <p>
              In some cases, a modest monthly mission-support fee is used to sustain the Skill-Wanderer ecosystem. 
              This fee covers collaboration coordination, technical mentorship, and educational oversight that ensure 
              learners grow while delivering real work.
            </p>
          </div>

          <div class="model-card">
            <div class="model-icon">🏗️</div>
            <h3>Infrastructure Costs</h3>
            <p>
              All product infrastructure costs — including cloud services, tooling, operational systems, and internal 
              engineering expenses — are borne directly by the partner.
            </p>
          </div>

          <div class="model-card">
            <div class="model-icon">🎓</div>
            <h3>Learner Integration</h3>
            <p>
              Learners who join partner projects are not contracted out temporarily. They are hired into the partner's 
              organization and often continue working there beyond the formal partnership.
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- Aligned Incentives Section -->
    <section class="alignment-section">
      <div class="alignment-container">
        <h2>This Structure Aligns Incentives</h2>
        
        <div class="alignment-grid">
          <div class="alignment-card">
            <span class="alignment-icon">🤝</span>
            <h3>Partners</h3>
            <p>Receive committed teams without outsourcing churn.</p>
          </div>
          <div class="alignment-card">
            <span class="alignment-icon">🚀</span>
            <h3>Learners</h3>
            <p>Gain stable employment and real career pathways.</p>
          </div>
          <div class="alignment-card">
            <span class="alignment-icon">🌍</span>
            <h3>Skill-Wanderer</h3>
            <p>Sustains free, learner-first education through real work, not advertising or sponsorship.</p>
          </div>
        </div>

        <div class="alignment-benefit">
          <p>
            By separating mission sustainability from delivery infrastructure, partners can focus resources on product, 
            marketing, and business growth — often enabling them to operate lean without requiring early external investment.
          </p>
        </div>
      </div>
    </section>

    <!-- Engine Visual Section -->
    <section class="engine-section">
      <div class="engine-container">
        <h2>The Self-Sustaining Engine</h2>
        <p class="engine-subtitle">How technology partnerships power our educational mission</p>
        
        <div class="engine-visual">
          <svg class="engine-flow" viewBox="0 0 800 500">
            <!-- Flow lines -->
            <path class="flow-line" d="M 400 100 Q 550 250 400 400" />
            <path class="flow-line" d="M 400 400 Q 250 250 400 100" />
            <path class="flow-line" d="M 200 250 Q 400 150 600 250" />
            <path class="flow-line" d="M 600 250 Q 400 350 200 250" />
          </svg>
          
          <div class="engine-core">
            Skill-Wanderer<br>Engine
          </div>
          
          <div class="engine-component services">
            <span class="component-icon">💼</span>
            <span class="component-label">Tech Partnerships</span>
          </div>
          
          <div class="engine-component education">
            <span class="component-icon">🎓</span>
            <span class="component-label">Education</span>
          </div>
          
          <div class="engine-component revenue">
            <span class="component-icon">💰</span>
            <span class="component-label">Revenue</span>
          </div>
          
          <div class="engine-component impact">
            <span class="component-icon">🌟</span>
            <span class="component-label">Real Impact</span>
          </div>
        </div>
      </div>
    </section>

    <!-- Dual Role Section -->
    <section class="dual-role-section">
      <div class="dual-role-container">
        <div class="section-header">
          <h2>Practitioners & Educators</h2>
          <p>Two roles that strengthen each other</p>
        </div>
        
        <div class="role-comparison">
          <div class="role-card practitioner">
            <div class="role-icon">💻</div>
            <h3>As Practitioners</h3>
            <ul class="role-benefits">
              <li>Solve real client problems</li>
              <li>Stay current with technology</li>
              <li>Experience actual challenges</li>
              <li>Build production systems</li>
              <li>Learn from failures</li>
            </ul>
          </div>
          
          <div class="role-connector">
            <div class="connector-symbol">♾️</div>
            <p>Reinforcing Loop</p>
          </div>
          
          <div class="role-card educator">
            <div class="role-icon">📚</div>
            <h3>As Educators</h3>
            <ul class="role-benefits">
              <li>Share real experiences</li>
              <li>Teach practical solutions</li>
              <li>Deepen understanding</li>
              <li>Create relevant content</li>
              <li>Inspire with stories</li>
            </ul>
          </div>
        </div>
        
        <p class="role-conclusion">
          Every client project becomes a teaching opportunity. Every teaching moment deepens our expertise. 
          This dual role ensures we never become disconnected from the reality of technology work.
        </p>
      </div>
    </section>

    <!-- Triple Benefit Section -->
    <section class="benefit-section">
      <div class="benefit-container">
        <div class="section-header">
          <h2>The Triple Benefit</h2>
          <p>How this model creates multiple wins</p>
        </div>
        
        <div class="benefit-grid">
          <div class="benefit-card">
            <div class="benefit-number">1</div>
            <span class="benefit-icon">🔄</span>
            <h3>Always Current Curriculum</h3>
            <p>
              Our courses reflect the technologies and challenges we face today, not five years ago. 
              When a new framework emerges, we learn it for clients and teach it immediately.
            </p>
          </div>
          
          <div class="benefit-card">
            <div class="benefit-number">2</div>
            <span class="benefit-icon">💪</span>
            <h3>Sustainable Independence</h3>
            <p>
              Revenue from partnerships funds free education without relying on donations or compromising 
              our principles. We control our own destiny.
            </p>
          </div>
          
          <div class="benefit-card">
            <div class="benefit-number">3</div>
            <span class="benefit-icon">🌍</span>
            <h3>Double Impact</h3>
            <p>
              We help organizations solve real problems while simultaneously creating educational content 
              that helps thousands learn. Every project multiplies its value.
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- Practice Section -->
    <PrinciplePractice
      title="The Engine in Action"
      subtitle="How we integrate partnerships and education"
      :list-icon="'⚙️'"
      :examples="practiceItems"
    />

    <!-- Quote Section -->
    <PrincipleQuote 
      quote="Technology Partnerships Fueling Our Mission isn't just about funding. It's a complete, integrated system designed to ensure quality, relevance, and sustainability for everything we do. We work in the real world to teach the real world."
      author="Quan Nguyen, Founder of Skill-Wanderer"
    />

    <!-- Transparency Note -->
    <section class="transparency-section">
      <div class="transparency-container">
        <p>
          Technology partnerships are listed for transparency about collaboration and learning opportunities, 
          not as endorsements or paid promotion.
        </p>
      </div>
    </section>

    <!-- Navigation Section -->
    <PrincipleNavigation 
      currentSlug="technology-partnership"
    />
  </div>
</template>

<script setup>
import { computed } from 'vue'

// SEO and meta management
useSEO({
  title: 'Technology Partnerships Fueling Mission: Work That Gives Back | Principle #8',
  description: 'How Skill-Wanderer uses technology partnerships to create a self-sustaining engine that funds education while ensuring relevance through practice.',
  keywords: ['technology partnerships', 'self-sustaining mission', 'skill-wanderer principle 8', 'real-world practice', 'funding education'],
  type: 'article',
  structuredData: createArticleSchema(
    'Technology Partnerships Fueling Mission: Work That Gives Back | Principle #8',
    'How Skill-Wanderer uses technology partnerships to create a self-sustaining engine that funds education while ensuring relevance through real-world practice.',
    'https://skill-wanderer.com/principles/technology-partnership'
  )
})

// Story content
const storyIntro = "I call our eighth principle <strong>Technology Partnerships Fueling Our Mission</strong>, and it defines the very engine of our organization."

const storyChapters = [
  {
    icon: "🤔",
    title: "The Initial Dilemma",
    content: [
      {
        type: "text",
        text: "To be honest, when I first envisioned Skill-Wanderer, I considered making it a purely educational organization. However, I quickly realized that doing so would directly conflict with my other core principles. A purely academic organization, detached from the fast-paced changes of the real world, would inevitably lead to the very same problem many universities face: a lack of practical, current knowledge. That is not a problem I am willing to repeat."
      },
      {
        type: "text",
        text: "I've seen too many educational institutions become echo chambers, teaching outdated technologies with outdated methods. The professors haven't worked in industry for years, sometimes decades. The curriculum moves at glacial speed while the tech world races ahead. I knew we had to do something fundamentally different."
      }
    ]
  },
  {
    icon: "💡",
    title: "The Realization",
    content: [
      {
        type: "text",
        text: "I believe there is only one way to ensure our education is truly <strong>relevant</strong> and <strong>impactful</strong> (Principle #6): we must be active participants in the world we are teaching about. This is how our own educators, engineers, and staff can continuously upskill themselves and stay at the cutting edge of their fields."
      },
      {
        type: "text",
        text: "This led me to a core part of my vision: an organization where our team members are both <strong>practitioners and educators</strong>. It's a reinforcing loop. The real-world work they do on client projects informs and enriches their teaching, making it practical and relevant. In turn, the act of teaching forces them to deepen their own skills and understanding. Each role makes the other stronger."
      }
    ]
  },
  {
    icon: "⚙️",
    title: "The Engine Design",
    content: [
      {
        type: "text",
        text: "With this model in mind, I made another fundamental decision: I don't want to rely primarily on donations to fuel our mission. We have the skills. We plan on working in the real world to keep our educational content sharp. So, why not turn those valuable technology partnerships into the revenue stream that fuels our mission?"
      },
      {
        type: "text",
        text: "This approach creates a powerful, self-sustaining engine with a triple benefit:"
      },
      {
        type: "text",
        text: "1. It ensures <strong>our curriculum will never become outdated</strong>, because it's directly informed by the real-world problems we are solving every day."
      },
      {
        type: "text",
        text: "2. It creates a <strong>resilient and sustainable financial model</strong> to fuel our educational mission, allowing us to maintain our integrity and keep our core content free."
      },
      {
        type: "text",
        text: "3. It allows us to <strong>contribute our skills directly to the world</strong> by helping other organizations solve their technology challenges."
      },
      {
        type: "text",
        text: "This is what <strong>Technology Partnerships Fueling Our Mission</strong> is all about. It's not just about funding. It's a complete, integrated system designed to ensure quality, relevance, and sustainability for everything we do."
      }
    ]
  }
]

// Practice items for the Practice section
const practiceItems = [
  {
    title: "From Client Work to Course Content",
    items: [
      "Every project challenge becomes a case study",
      "Solutions we develop become tutorials", 
      "Mistakes we make become lessons on what to avoid",
      "Best practices we discover get documented and shared"
    ]
  },
  {
    title: "Quality Through Practice",
    items: [
      "Teaching what we actually do, not what we think should work",
      "Battle-tested solutions from production environments",
      "Real-world constraints and trade-offs explained",
      "Current industry standards and expectations"
    ]
  },
  {
    title: "Financial Transparency",
    items: [
      "Clear connection between partnership revenue and educational investment",
      "No hidden fees or profit margins",
      "No hidden profit motives - everything reinvested",
      "Sustainable model that doesn't depend on charity"
    ]
  }
]
</script>

<style scoped>
/* Model Section */
.model-section {
  padding: 80px 20px;
  background: var(--darker-bg);
}

.model-container {
  max-width: 1000px;
  margin: 0 auto;
  text-align: center;
}

.model-container h2 {
  font-size: 2.5rem;
  color: var(--primary-orange);
  margin-bottom: 40px;
}

.model-intro {
  margin-bottom: 50px;
}

.model-statement {
  font-size: 1.2rem;
  color: var(--light-text);
  margin-bottom: 15px;
  font-weight: 500;
}

.model-description {
  font-size: 1.1rem;
  color: var(--light-text);
  opacity: 0.9;
  margin-top: 25px;
  line-height: 1.8;
}

.model-cards {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 30px;
}

.model-card {
  background: rgba(255, 255, 255, 0.03);
  border: 1px solid rgba(255, 107, 53, 0.2);
  border-radius: 15px;
  padding: 30px;
  text-align: center;
  transition: all 0.3s ease;
}

.model-card:hover {
  transform: translateY(-5px);
  border-color: var(--primary-orange);
  box-shadow: 0 10px 30px rgba(255, 107, 53, 0.1);
}

.model-icon {
  font-size: 40px;
  margin-bottom: 20px;
}

.model-card h3 {
  color: var(--primary-orange);
  font-size: 1.3rem;
  margin-bottom: 15px;
}

.model-card p {
  color: var(--light-text);
  opacity: 0.9;
  line-height: 1.7;
  font-size: 0.95rem;
  text-align: left;
}

/* Alignment Section */
.alignment-section {
  padding: 80px 20px;
  background: var(--dark-bg);
}

.alignment-container {
  max-width: 1000px;
  margin: 0 auto;
  text-align: center;
}

.alignment-container h2 {
  font-size: 2.5rem;
  color: var(--primary-orange);
  margin-bottom: 40px;
}

.alignment-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 30px;
  margin-bottom: 40px;
}

.alignment-card {
  background: rgba(255, 107, 53, 0.05);
  border-radius: 15px;
  padding: 30px;
  transition: all 0.3s ease;
}

.alignment-card:hover {
  transform: translateY(-5px);
  background: rgba(255, 107, 53, 0.1);
}

.alignment-icon {
  font-size: 40px;
  display: block;
  margin-bottom: 15px;
}

.alignment-card h3 {
  color: var(--primary-orange);
  font-size: 1.3rem;
  margin-bottom: 10px;
}

.alignment-card p {
  color: var(--light-text);
  opacity: 0.9;
  line-height: 1.6;
}

.alignment-benefit {
  background: rgba(255, 255, 255, 0.02);
  border-radius: 15px;
  padding: 30px;
  max-width: 800px;
  margin: 0 auto;
}

.alignment-benefit p {
  font-size: 1.1rem;
  color: var(--light-text);
  opacity: 0.9;
  line-height: 1.8;
  margin: 0;
}

/* Transparency Section */
.transparency-section {
  padding: 40px 20px;
  background: var(--darker-bg);
}

.transparency-container {
  max-width: 800px;
  margin: 0 auto;
  background: linear-gradient(135deg, rgba(255, 107, 53, 0.1), rgba(255, 107, 53, 0.05));
  border-left: 4px solid var(--primary-orange);
  border-radius: 0 12px 12px 0;
  padding: 25px 30px;
  text-align: center;
}

.transparency-container p {
  color: var(--light-text);
  font-size: 1rem;
  font-style: italic;
  margin: 0;
  opacity: 0.95;
}

/* Section Header */
.section-header {
  text-align: center;
  margin-bottom: 50px;
}

.section-header h2 {
  font-size: 2.5rem;
  color: var(--primary-orange);
  margin-bottom: 15px;
}

.section-header p {
  font-size: 1.2rem;
  opacity: 0.9;
}

/* Engine Visual Section */
.engine-section {
  padding: 80px 20px;
  background: var(--darker-bg);
  position: relative;
  overflow: hidden;
}

.engine-container {
  max-width: 1000px;
  margin: 0 auto;
  text-align: center;
}

.engine-container h2 {
  font-size: 2.5rem;
  color: var(--primary-orange);
  margin-bottom: 20px;
}

.engine-subtitle {
  font-size: 1.2rem;
  opacity: 0.9;
}

.engine-visual {
  margin: 60px auto;
  position: relative;
  height: 500px;
}

.engine-flow {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 1;
}

.flow-line {
  fill: none;
  stroke: var(--primary-orange);
  stroke-width: 2;
  stroke-dasharray: 10, 5;
  opacity: 0.6;
  animation: flow 4s linear infinite;
}

@keyframes flow {
  0% {
    stroke-dashoffset: 0;
  }
  100% {
    stroke-dashoffset: 60;
  }
}

.engine-core {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 200px;
  height: 200px;
  background: linear-gradient(135deg, var(--primary-orange), var(--deep-orange));
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-size: 20px;
  font-weight: bold;
  text-align: center;
  box-shadow: 0 0 50px rgba(255, 107, 53, 0.5);
  z-index: 10;
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

.engine-component {
  position: absolute;
  width: 150px;
  height: 150px;
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

.engine-component:hover {
  transform: scale(1.05);
  background: var(--card-hover);
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3);
}

.engine-component.services {
  top: 0;
  left: 50%;
  transform: translateX(-50%);
  border-color: #2196F3;
}

.engine-component.education {
  bottom: 0;
  left: 50%;
  transform: translateX(-50%);
  border-color: #9C27B0;
}

.engine-component.revenue {
  top: 50%;
  right: 25%;
  transform: translateY(-50%);
  border-color: #4CAF50;
}

.engine-component.impact {
  top: 50%;
  left: 25%;
  transform: translateY(-50%);
  border-color: var(--accent-yellow);
}

.component-icon {
  font-size: 36px;
  margin-bottom: 10px;
}

.component-label {
  font-size: 14px;
  font-weight: 600;
  color: var(--light-text);
}

/* Dual Role Section */
.dual-role-section {
  padding: 80px 20px;
  background: var(--dark-bg);
}

.dual-role-container {
  max-width: 1200px;
  margin: 0 auto;
}

.role-comparison {
  display: grid;
  grid-template-columns: 1fr auto 1fr;
  gap: 40px;
  align-items: center;
  margin-top: 60px;
}

.role-card {
  background: var(--card-bg);
  border-radius: 20px;
  padding: 40px;
  text-align: center;
  border: 2px solid rgba(255, 255, 255, 0.2);
  transition: all 0.3s ease;
}

.role-card.practitioner {
  border-color: #2196F3;
}

.role-card.educator {
  border-color: #9C27B0;
}

.role-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3);
}

.role-icon {
  width: 80px;
  height: 80px;
  margin: 0 auto 20px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 36px;
}

.role-card.practitioner .role-icon {
  background: rgba(33, 150, 243, 0.1);
  border: 2px solid #2196F3;
}

.role-card.educator .role-icon {
  background: rgba(156, 39, 176, 0.1);
  border: 2px solid #9C27B0;
}

.role-card h3 {
  color: white;
  margin-bottom: 15px;
  font-size: 1.4rem;
  text-align: center;
  font-weight: 600;
}

.role-benefits {
  list-style: none;
  padding: 0;
  text-align: left;
}

.role-benefits li {
  padding: 8px 0;
  position: relative;
  padding-left: 25px;
  color: rgba(255, 255, 255, 0.9);
  font-size: 0.95rem;
}

.role-benefits li::before {
  content: '→';
  position: absolute;
  left: 0;
  color: var(--primary-orange);
  font-weight: bold;
}

.role-connector {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 20px;
}

.role-connector p {
  font-weight: 600;
  color: var(--primary-orange);
}

.connector-symbol {
  width: 60px;
  height: 60px;
  background: linear-gradient(135deg, var(--primary-orange), var(--deep-orange));
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 24px;
  color: white;
  box-shadow: 0 5px 20px rgba(255, 107, 53, 0.4);
  animation: rotate 4s linear infinite;
}

@keyframes rotate {
  from { transform: rotate(0deg); }
  to { transform: rotate(360deg); }
}

.role-conclusion {
  text-align: center;
  margin-top: 40px;
  font-size: 1.1rem;
  opacity: 0.9;
  max-width: 800px;
  margin-left: auto;
  margin-right: auto;
}

/* Triple Benefit Section */
.benefit-section {
  padding: 80px 20px;
  background: var(--darker-bg);
}

.benefit-container {
  max-width: 1200px;
  margin: 0 auto;
}

.benefit-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  gap: 40px;
  margin-top: 60px;
}

.benefit-card {
  background: var(--card-bg);
  border-radius: 20px;
  padding: 40px;
  position: relative;
  overflow: hidden;
  transition: all 0.3s ease;
}

.benefit-card::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 5px;
  background: linear-gradient(90deg, var(--primary-orange), var(--accent-yellow));
}

.benefit-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3);
}

.benefit-number {
  position: absolute;
  top: 20px;
  right: 20px;
  width: 50px;
  height: 50px;
  background: linear-gradient(135deg, var(--primary-orange), var(--deep-orange));
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 24px;
  font-weight: bold;
  color: white;
}

.benefit-icon {
  font-size: 48px;
  margin-bottom: 20px;
  display: block;
}

.benefit-card h3 {
  color: white;
  margin-bottom: 15px;
  font-size: 1.4rem;
}

.benefit-card p {
  opacity: 0.8;
  line-height: 1.7;
}

/* Responsive Design */
@media (max-width: 768px) {
  .model-cards {
    grid-template-columns: 1fr;
  }

  .alignment-grid {
    grid-template-columns: 1fr;
  }

  .engine-visual {
    height: 400px;
  }
  
  .engine-core {
    width: 160px;
    height: 160px;
    font-size: 16px;
  }
  
  .engine-component {
    width: 120px;
    height: 120px;
    padding: 15px;
  }
  
  .component-icon {
    font-size: 28px;
  }
  
  .component-label {
    font-size: 12px;
  }
  
  .role-comparison {
    grid-template-columns: 1fr;
    gap: 30px;
  }
  
  .role-connector {
    order: -1;
  }
  
  .benefit-grid {
    grid-template-columns: 1fr;
  }

  .section-header h2,
  .model-container h2,
  .alignment-container h2,
  .engine-container h2 {
    font-size: 2rem;
  }
}

@media (max-width: 480px) {
  .model-card {
    padding: 20px;
  }

  .transparency-container {
    padding: 20px;
  }
}
</style>
