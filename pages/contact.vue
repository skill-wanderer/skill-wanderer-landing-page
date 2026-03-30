<template>
  <div>
    <!-- Hero Section -->
    <section class="hero">
      <h1>Let's Build Something Together</h1>
      <p>Have a project in mind? Tell us what you need and we'll get back to you with a plan, timeline, and transparent pricing.</p>
    </section>

    <!-- Authority Section: FAQ + Mission + Impact -->
    <section class="authority">
      <div class="authority-container">
        <!-- Senior Architect Oversight -->
        <div class="authority-card authority-leadership">
          <div class="authority-icon">🏛️</div>
          <h3>Who Will Work on Your Project?</h3>
          <p>Every engagement receives <strong>senior architect oversight</strong> from the Guild Master — a solution architect with over a decade of experience across startups and enterprises. Your project is never handed off to juniors. The Guild Master personally leads architecture, code review, and quality assurance, hand-picking skilled artisans for each engagement.</p>
        </div>

        <!-- Mission Highlight -->
        <div class="authority-card authority-mission">
          <div class="authority-icon">🌱</div>
          <h3>Your Project Fuels a Mission</h3>
          <p>Every guild engagement directly funds <strong>free mentorship</strong> for passionate learners like <NuxtLink to="/learners/rei-reltroner" class="authority-link">Rei</NuxtLink> and <NuxtLink to="/team/thanh-nguyen" class="authority-link">Thanh</NuxtLink>. When you build with the Guild, you invest in the next generation of developers.</p>
        </div>

        <!-- Impact Counter -->
        <div class="authority-card authority-impact">
          <div class="authority-icon">📊</div>
          <div class="impact-counter">
            <span class="impact-number">100%</span>
            <span class="impact-label">of projects fund local tech education</span>
          </div>
          <p>Senior-led quality with a social enterprise vision — your investment creates real impact beyond code.</p>
        </div>
      </div>
    </section>

    <!-- Admiral Orion: Instant Alternative -->
    <section class="orion-section">
      <div class="orion-container">
        <div class="orion-card">
          <div class="orion-header">
            <div class="orion-icon">🧭</div>
            <div>
              <h2>Need Answers Now?</h2>
              <p>Talk to <strong>Admiral Orion</strong>, our AI assistant, for instant project guidance — no waiting required.</p>
            </div>
          </div>
          <NuxtLink to="/admiral-orion" class="btn btn-orion">Chat with Admiral Orion</NuxtLink>
        </div>
      </div>
    </section>

    <!-- Contact Section -->
    <section class="contact">
      <!-- Tab Switcher -->
      <div class="tab-switcher">
        <button
          :class="['tab-btn', { active: activeTab === 'hire' }]"
          @click="activeTab = 'hire'"
        >
          Hire the Guild
        </button>
        <button
          :class="['tab-btn', { active: activeTab === 'join' }]"
          @click="activeTab = 'join'"
        >
          Join the Guild
        </button>
      </div>

      <div v-if="activeTab === 'hire'" class="contact-container">
        <!-- Contact Form -->
        <div class="contact-form">
          <div class="form-header">
            <h2>We're Ready to Build</h2>
            <p>Describe your vision and we'll respond within 24–48 hours with an architectural assessment and next steps.</p>
          </div>
          <form id="contactForm" @submit.prevent="handleSubmit">
            <div class="form-group">
              <label for="name">Your Name</label>
              <input type="text" id="name" v-model="form.name" required placeholder="How should we address you?">
            </div>
            <div class="form-group">
              <label for="email">Email Address</label>
              <input type="email" id="email" v-model="form.email" required placeholder="your.email@example.com">
            </div>
            <div class="form-group">
              <label for="topic">How Can the Guild Support Your Vision?</label>
              <select id="topic" v-model="form.topic" required>
                <option value="">Which Digital Foundation Do You Need?</option>
                <option value="website">Website or Landing Page</option>
                <option value="web-app">Web Application or Platform</option>
                <option value="ecommerce">E-Commerce or Marketplace</option>
                <option value="ai">AI Application or Integration</option>
                <option value="mobile">Mobile App or Progressive Web App</option>
                <option value="api">API Development or Integration</option>
                <option value="automation">Automation or Workflow Tools</option>
                <option value="legacy">Legacy System Replacement</option>
                <option value="consulting">Technical Consulting</option>
                <option value="partnership">Partnership Opportunity</option>
                <option value="other">Something Else</option>
              </select>
            </div>
            <div class="form-group">
              <label for="message">Your Message</label>
              <textarea id="message" v-model="form.message" required placeholder="Describe your project, goals, timeline, and any technical requirements..."></textarea>
            </div>
            <div class="form-group form-checkbox-group">
              <label class="checkbox-label">
                <input type="checkbox" v-model="form.valuesQuality">
                <span>I value senior-led quality that fuels social impact</span>
              </label>
            </div>
            <button type="submit" class="btn btn-primary" :disabled="isSubmitting">
              {{ isSubmitting ? 'Sending...' : 'Request an Architectural Audit' }}
              <span>{{ isSubmitting ? '⏳' : '→' }}</span>
            </button>
            <div class="form-footer-legal">
              <NuxtLink to="/privacy-policy" class="legal-link">Privacy Policy</NuxtLink>
              <span class="legal-separator">·</span>
              <NuxtLink to="/terms-of-service" class="legal-link">Terms of Service</NuxtLink>
            </div>
            <div v-if="formMessage.show" :class="['form-message', formMessage.type]">
              {{ formMessage.text }}
            </div>
          </form>
        </div>

        <!-- Contact Info -->
        <div class="contact-info">
          <div class="info-header">
            <h2>Other Ways to Reach Us</h2>
            <p>Prefer a different channel? We're happy to connect however works best for you.</p>
          </div>
          <div class="info-cards">
            <div class="info-card">
              <div class="info-card-header">
                <div class="info-icon">📧</div>
                <h3>Email</h3>
              </div>
              <p>For project proposals or detailed discussions</p>
              <div class="email-row">
                <span class="email-text">quan.nguyen@skill-wanderer.com</span>
                <button type="button" class="copy-btn" title="Copy email to clipboard" @click="copyEmail">
                  <span v-if="!emailCopied">📋</span>
                  <span v-else>✅</span>
                </button>
              </div>
            </div>

            <div class="info-card">
              <div class="info-card-header">
                <div class="info-icon">💰</div>
                <h3>Pricing</h3>
              </div>
              <p>Explore our transparent sprint packages and partnership models</p>
              <NuxtLink to="/work-with-us/pricing" class="info-card-link">View Pricing</NuxtLink>
            </div>
          </div>
        </div>
      </div>

      <!-- Join the Guild Form -->
      <div v-if="activeTab === 'join'" class="contact-container">
        <div class="contact-form">
          <div class="form-header">
            <h2>Apply to Join</h2>
            <p>Tell us about your craft and why you want to build with the Guild. We review every application personally.</p>
          </div>
          <form @submit.prevent="handleGuildSubmit">
            <div class="form-group">
              <label for="guild-name">Your Name</label>
              <input type="text" id="guild-name" v-model="guildForm.name" required placeholder="How should we address you?">
            </div>
            <div class="form-group">
              <label for="guild-email">Email Address</label>
              <input type="email" id="guild-email" v-model="guildForm.email" required placeholder="your.email@example.com">
            </div>
            <div class="form-group">
              <label for="guild-skill">Primary Skill</label>
              <select id="guild-skill" v-model="guildForm.skill" required>
                <option value="">What is your main craft?</option>
                <option value="frontend">Frontend Development</option>
                <option value="backend">Backend Development</option>
                <option value="fullstack">Full-Stack Development</option>
                <option value="mobile">Mobile Development</option>
                <option value="devops">DevOps / Infrastructure</option>
                <option value="ui-ux">UI / UX Design</option>
                <option value="ai-ml">AI / Machine Learning</option>
                <option value="other">Other</option>
              </select>
            </div>
            <div class="form-group">
              <label for="guild-experience">Years of Experience</label>
              <select id="guild-experience" v-model="guildForm.experience" required>
                <option value="">Select experience level</option>
                <option value="0-1">Less than 1 year</option>
                <option value="1-3">1–3 years</option>
                <option value="3-5">3–5 years</option>
                <option value="5-10">5–10 years</option>
                <option value="10+">10+ years</option>
              </select>
            </div>
            <div class="form-group">
              <label for="guild-portfolio">Portfolio or GitHub URL <span class="label-optional">(optional)</span></label>
              <input type="url" id="guild-portfolio" v-model="guildForm.portfolio" placeholder="https://github.com/yourname">
            </div>
            <div class="form-group">
              <label for="guild-message">Why Do You Want to Join the Guild?</label>
              <textarea id="guild-message" v-model="guildForm.message" required placeholder="Tell us about your background, what drives you, and what you hope to contribute and gain..."></textarea>
            </div>
            <button type="submit" class="btn btn-primary" :disabled="isGuildSubmitting">
              {{ isGuildSubmitting ? 'Sending...' : 'Apply to Join the Guild' }}
              <span>{{ isGuildSubmitting ? '⏳' : '→' }}</span>
            </button>
            <div class="form-footer-legal">
              <NuxtLink to="/privacy-policy" class="legal-link">Privacy Policy</NuxtLink>
              <span class="legal-separator">·</span>
              <NuxtLink to="/terms-of-service" class="legal-link">Terms of Service</NuxtLink>
            </div>
            <div v-if="guildFormMessage.show" :class="['form-message', guildFormMessage.type]">
              {{ guildFormMessage.text }}
            </div>
          </form>
        </div>

        <!-- Guild Info -->
        <div class="contact-info">
          <div class="info-header">
            <h2>What to Expect</h2>
            <p>We are selective but welcoming. Here's how the process works.</p>
          </div>
          <div class="info-cards">
            <div class="info-card">
              <div class="info-card-header">
                <div class="info-icon">📝</div>
                <h3>Application Review</h3>
              </div>
              <p>The Guild Master reviews every application personally. We look for passion, craftsmanship, and alignment with the Guild's values — not just years of experience.</p>
            </div>
            <div class="info-card">
              <div class="info-card-header">
                <div class="info-icon">🤝</div>
                <h3>Craft Interview</h3>
              </div>
              <p>Shortlisted candidates are invited for a relaxed craft conversation — no whiteboard puzzles, just a genuine discussion about how you think and build.</p>
            </div>
            <div class="info-card">
              <div class="info-card-header">
                <div class="info-icon">⚔️</div>
                <h3>Guild Membership</h3>
              </div>
              <p>Guild artisans collaborate on real client projects, receive mentorship, and share in the mission of funding free tech education for emerging developers.</p>
              <NuxtLink to="/guild-manifesto" class="info-card-link">Read the Guild Manifesto</NuxtLink>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- FAQ Section -->
    <section class="faq">
      <div class="faq-container">
        <div class="faq-header">
          <h2>Frequently Asked Questions</h2>
          <p>Quick answers to common questions</p>
        </div>
        <div class="faq-list">
          <div v-for="(faq, index) in faqs" :key="index" class="faq-item" :class="{ active: activeFaq === index }">
            <div class="faq-question" @click="toggleFaq(index)">
              <h3>{{ faq.question }}</h3>
              <span class="faq-toggle">+</span>
            </div>
            <div class="faq-answer">
              <p>{{ faq.answer }}</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Footer -->
  </div>
</template>

<script setup lang="ts">
import { ref, reactive } from 'vue'

// SEO and meta management
useSEO({
  title: 'Contact Skill-Wanderer | Start Your Project Today',
  description: 'Get in touch with Skill-Wanderer Guild. Tell us about your project and receive a proposal with transparent pricing, clear timelines, and a dedicated team.',
  keywords: ['contact skill-wanderer', 'custom software development', 'web development services', 'project inquiry', 'get a quote'],
  type: 'website'
})

// Tab state
const activeTab = ref<'hire' | 'join'>('hire')

// Hire form state
const form = reactive({
  name: '',
  email: '',
  topic: '',
  message: '',
  valuesQuality: false
})

// Guild application form state
const guildForm = reactive({
  name: '',
  email: '',
  skill: '',
  experience: '',
  portfolio: '',
  message: ''
})

const emailCopied = ref(false)

const isSubmitting = ref(false)
const formMessage = reactive({
  show: false,
  type: '',
  text: ''
})

const isGuildSubmitting = ref(false)
const guildFormMessage = reactive({
  show: false,
  type: '',
  text: ''
})

const activeFaq = ref(-1)

// FAQ data
const faqs = ref([
  {
    question: "What kind of projects do you take on?",
    answer: "We build custom websites, web applications, platforms, and provide technical consulting. From single landing pages to complex multi-feature platforms — every project is custom-coded with modern frameworks, no templates or page builders. Check our What We Build page for detailed examples."
  },
  {
    question: "How does pricing work?",
    answer: "We offer transparent sprint-based packages. Each sprint is scoped with clear deliverables, timelines, and fixed pricing. No hidden fees, no surprise invoices. Visit our pricing page for package details, or describe your project and we'll recommend the right fit."
  },

  {
    question: "How long does a typical project take?",
    answer: "Timelines depend on scope. A landing page can be delivered in 1-2 weeks, while a full web application may take 4-8 weeks or more. After you describe your project, we'll provide a realistic timeline along with our proposal."
  },
  {
    question: "What makes the guild different from a traditional agency?",
    answer: "We combine senior-led quality with a social enterprise mission. Every project is architect-led with hands-on code review. Our guild model means you get dedicated craftsmanship at competitive rates, and your investment directly funds free education and mentorship for emerging developers."
  }
])

// Methods
const handleSubmit = async () => {
  isSubmitting.value = true
  
  try {
    // Get Firebase Firestore instance
    const { $firestore } = useNuxtApp()
    const { collection, addDoc, serverTimestamp } = await import('firebase/firestore')
    
    // Prepare the message data
    const messageData = {
      name: form.name,
      email: form.email,
      topic: form.topic,
      message: form.message,
      valuesQuality: form.valuesQuality,
      timestamp: serverTimestamp(),
      status: 'new'
    }
    
    // Save to Firestore
    await addDoc(collection($firestore, 'contact-messages'), messageData)
    .catch((error) => {
      throw error
    })

    
    // Show success message
    formMessage.show = true
    formMessage.type = 'success'
    formMessage.text = "Thank you for your message! I'll get back to you within 24-48 hours."
    
    // Reset form
    Object.assign(form, {
      name: '',
      email: '',
      topic: '',
      message: '',
      valuesQuality: false
    })
    
    // Hide message after 5 seconds
    setTimeout(() => {
      formMessage.show = false
    }, 5000)
  } catch (error) {
    formMessage.show = true
    formMessage.type = 'error'
    formMessage.text = 'Something went wrong. Please try again or contact me directly via email.'
  } finally {
    isSubmitting.value = false
  }
}

const handleGuildSubmit = async () => {
  isGuildSubmitting.value = true

  try {
    const { $firestore } = useNuxtApp()
    const { collection, addDoc, serverTimestamp } = await import('firebase/firestore')

    await addDoc(collection($firestore, 'guild-applications'), {
      name: guildForm.name,
      email: guildForm.email,
      skill: guildForm.skill,
      experience: guildForm.experience,
      portfolio: guildForm.portfolio,
      message: guildForm.message,
      timestamp: serverTimestamp(),
      status: 'new'
    })

    guildFormMessage.show = true
    guildFormMessage.type = 'success'
    guildFormMessage.text = "Thank you for applying! We'll review your application and get back to you within a few days."

    Object.assign(guildForm, {
      name: '',
      email: '',
      skill: '',
      experience: '',
      portfolio: '',
      message: ''
    })

    setTimeout(() => { guildFormMessage.show = false }, 6000)
  } catch {
    guildFormMessage.show = true
    guildFormMessage.type = 'error'
    guildFormMessage.text = 'Something went wrong. Please try again or reach us directly via email.'
  } finally {
    isGuildSubmitting.value = false
  }
}

const toggleFaq = (index: number) => {
  activeFaq.value = activeFaq.value === index ? -1 : index
}

const copyEmail = async () => {
  try {
    await navigator.clipboard.writeText('quan.nguyen@skill-wanderer.com')
    emailCopied.value = true
    setTimeout(() => { emailCopied.value = false }, 2000)
  } catch {
    // Fallback for older browsers
    const textArea = document.createElement('textarea')
    textArea.value = 'quan.nguyen@skill-wanderer.com'
    textArea.style.position = 'fixed'
    textArea.style.opacity = '0'
    document.body.appendChild(textArea)
    textArea.select()
    document.execCommand('copy')
    document.body.removeChild(textArea)
    emailCopied.value = true
    setTimeout(() => { emailCopied.value = false }, 2000)
  }
}



</script>

<style scoped>
:root {
  --primary-orange: #FF6B35;
  --deep-orange: #E85D25;
  --dark-bg: #1a1a1a;
  --darker-bg: #0f0f0f;
  --light-text: #e0e0e0;
  --accent-yellow: #FFD93D;
  --card-bg: rgba(255, 255, 255, 0.05);
  --card-hover: rgba(255, 255, 255, 0.08);
  --success-green: #4CAF50;
  --error-red: #f44336;
}

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, sans-serif;
  background-color: var(--dark-bg);
  color: var(--light-text);
  line-height: 1.6;
  overflow-x: hidden;
}

/* Hero Section */
.hero {
  padding: 140px 20px 60px;
  text-align: center;
  background: radial-gradient(circle at 50% 50%, rgba(255, 107, 53, 0.1) 0%, transparent 50%);
}

.hero h1 {
  font-size: clamp(2.5rem, 6vw, 4rem);
  font-weight: 800;
  margin-bottom: 20px;
  background: linear-gradient(135deg, var(--primary-orange), var(--accent-yellow));
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  animation: fadeInUp 0.8s ease-out;
}

.hero p {
  font-size: 1.3rem;
  max-width: 600px;
  margin: 0 auto;
  opacity: 0.9;
  animation: fadeInUp 0.8s ease-out 0.2s both;
}

/* Authority Section */
.authority {
  padding: 60px 20px;
  background: var(--darker-bg);
}

.authority-container {
  max-width: 1200px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 30px;
}

.authority-card {
  background: var(--card-bg);
  border: 1px solid rgba(255, 107, 53, 0.2);
  border-radius: 20px;
  padding: 30px;
  text-align: center;
}

.authority-card:hover {
  background: var(--card-hover);
  border-color: rgba(255, 107, 53, 0.3);
}

.authority-icon {
  font-size: 2.5rem;
  margin-bottom: 15px;
}

.authority-card h3 {
  font-size: 1.3rem;
  color: var(--primary-orange);
  margin-bottom: 12px;
}

.authority-card p {
  opacity: 0.85;
  line-height: 1.7;
  font-size: 0.95rem;
}

.authority-link {
  color: var(--primary-orange);
  text-decoration: none;
  font-weight: 600;
}

.authority-link:hover {
  text-decoration: underline;
}

.impact-counter {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 15px;
}

.impact-number {
  font-size: 3rem;
  font-weight: 800;
  background: linear-gradient(135deg, var(--primary-orange), var(--accent-yellow));
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  line-height: 1;
}

.impact-label {
  font-size: 1rem;
  color: var(--primary-orange);
  font-weight: 600;
  margin-top: 8px;
}

/* Admiral Orion Section */
.orion-section {
  padding: 40px 20px;
  background: var(--darker-bg);
}

.orion-container {
  max-width: 800px;
  margin: 0 auto;
}

.orion-card {
  background: linear-gradient(135deg, rgba(255, 107, 53, 0.08), rgba(255, 217, 61, 0.05));
  border: 1px solid rgba(255, 107, 53, 0.3);
  border-radius: 20px;
  padding: 35px 40px;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  gap: 20px;
}

.orion-header {
  display: flex;
  align-items: center;
  gap: 20px;
}

.orion-icon {
  font-size: 2.5rem;
  flex-shrink: 0;
}

.orion-header h2 {
  font-size: 1.5rem;
  color: var(--primary-orange);
  margin-bottom: 5px;
}

.orion-header p {
  opacity: 0.85;
}

.btn-orion {
  padding: 12px 30px;
  border: 2px solid var(--primary-orange);
  border-radius: 50px;
  background: transparent;
  color: var(--primary-orange);
  font-size: 1rem;
  font-weight: 600;
  text-decoration: none;
  transition: all 0.3s ease;
  display: inline-flex;
  align-items: center;
  gap: 8px;
}

.btn-orion:hover {
  background: var(--primary-orange);
  color: white;
  transform: translateY(-2px);
}

/* Contact Section */
.contact {
  padding: 80px 20px;
  background: var(--darker-bg);
}

/* Tab Switcher */
.tab-switcher {
  display: flex;
  justify-content: center;
  gap: 12px;
  margin-bottom: 50px;
}

.tab-btn {
  padding: 12px 32px;
  border-radius: 50px;
  border: 2px solid rgba(255, 107, 53, 0.4);
  background: transparent;
  color: var(--light-text);
  font-size: 1rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
}

.tab-btn:hover {
  border-color: var(--primary-orange);
  color: var(--primary-orange);
}

.tab-btn.active {
  background: linear-gradient(135deg, var(--primary-orange), var(--deep-orange));
  border-color: transparent;
  color: white;
  box-shadow: 0 4px 20px rgba(255, 107, 53, 0.3);
}

.contact-container {
  max-width: 1200px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 60px;
  align-items: start;
}

/* Contact Form */
.contact-form {
  background: var(--card-bg);
  border: 1px solid rgba(255, 107, 53, 0.2);
  border-radius: 20px;
  padding: 40px;
  animation: fadeInUp 0.8s ease-out 0.4s both;
}

.form-header {
  margin-bottom: 30px;
}

.form-header h2 {
  font-size: 2rem;
  color: var(--primary-orange);
  margin-bottom: 10px;
}

.form-header p {
  opacity: 0.8;
}

.form-group {
  margin-bottom: 25px;
}

.form-group label {
  display: block;
  margin-bottom: 8px;
  font-weight: 500;
  color: var(--light-text);
}

.label-optional {
  font-weight: 400;
  opacity: 0.5;
  font-size: 0.85em;
}

.form-group input,
.form-group textarea,
.form-group select {
  width: 100%;
  padding: 15px;
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(255, 107, 53, 0.2);
  border-radius: 10px;
  color: var(--light-text);
  font-size: 1rem;
  transition: all 0.3s ease;
}

.form-group input:focus,
.form-group textarea:focus,
.form-group select:focus {
  outline: none;
  border-color: var(--primary-orange);
  background: rgba(255, 255, 255, 0.08);
}

.form-group textarea {
  resize: vertical;
  min-height: 120px;
}

.form-group select {
  cursor: pointer;
}

.form-group option {
  background: var(--dark-bg);
  color: var(--light-text);
}

.btn {
  padding: 15px 30px;
  border: none;
  border-radius: 50px;
  font-size: 1.1rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  display: inline-flex;
  align-items: center;
  gap: 10px;
  width: 100%;
  justify-content: center;
}

.btn-primary {
  background: linear-gradient(135deg, var(--primary-orange), var(--deep-orange));
  color: white;
  box-shadow: 0 4px 20px rgba(255, 107, 53, 0.3);
}

.btn-primary:hover {
  transform: translateY(-2px);
  box-shadow: 0 6px 30px rgba(255, 107, 53, 0.4);
}

.btn-primary:disabled {
  opacity: 0.6;
  cursor: not-allowed;
  transform: none;
}

/* Contact Info */
.contact-info {
  animation: fadeInUp 0.8s ease-out 0.6s both;
}

.info-header {
  margin-bottom: 40px;
}

.info-header h2 {
  font-size: 2rem;
  color: var(--primary-orange);
  margin-bottom: 10px;
}

.info-cards {
  display: flex;
  flex-direction: column;
  gap: 25px;
}

.info-card {
  background: var(--card-bg);
  border: 1px solid rgba(255, 107, 53, 0.2);
  border-radius: 15px;
  padding: 30px;
  transition: all 0.3s ease;
}

.info-card:hover {
  background: var(--card-hover);
  border-color: rgba(255, 107, 53, 0.3);
}

.info-card-header {
  display: flex;
  align-items: center;
  gap: 15px;
  margin-bottom: 15px;
}

.info-icon {
  width: 50px;
  height: 50px;
  background: linear-gradient(135deg, var(--primary-orange), var(--deep-orange));
  border-radius: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 24px;
}

.info-card h3 {
  font-size: 1.3rem;
  color: white;
}

.info-card p {
  opacity: 0.8;
  margin-bottom: 10px;
}

.info-card a {
  color: var(--primary-orange);
  text-decoration: none;
  font-weight: 500;
  transition: opacity 0.3s ease;
}

.info-card a:hover {
  opacity: 0.8;
}

.info-card-link {
  color: var(--primary-orange);
  text-decoration: none;
  font-weight: 500;
  transition: opacity 0.3s ease;
}

.info-card-link:hover {
  opacity: 0.8;
}

/* FAQ Section */
.faq {
  padding: 80px 20px;
  background: var(--dark-bg);
}

.faq-container {
  max-width: 900px;
  margin: 0 auto;
}

.faq-header {
  text-align: center;
  margin-bottom: 60px;
}

.faq-header h2 {
  font-size: 2.5rem;
  color: var(--primary-orange);
  margin-bottom: 20px;
}

.faq-item {
  background: var(--card-bg);
  border: 1px solid rgba(255, 107, 53, 0.2);
  border-radius: 15px;
  margin-bottom: 20px;
  overflow: hidden;
  transition: all 0.3s ease;
}

.faq-question {
  padding: 25px 30px;
  cursor: pointer;
  display: flex;
  justify-content: space-between;
  align-items: center;
  transition: background 0.3s ease;
}

.faq-question:hover {
  background: var(--card-hover);
}

.faq-question h3 {
  font-size: 1.2rem;
  color: white;
  font-weight: 500;
}

.faq-toggle {
  font-size: 1.5rem;
  color: var(--primary-orange);
  transition: transform 0.3s ease;
}

.faq-item.active .faq-toggle {
  transform: rotate(45deg);
}

.faq-answer {
  padding: 0 30px;
  max-height: 0;
  overflow: hidden;
  transition: max-height 0.3s ease, padding 0.3s ease;
}

.faq-item.active .faq-answer {
  padding: 0 30px 25px;
  max-height: 300px;
}

.faq-answer p {
  opacity: 0.8;
  line-height: 1.8;
}

/* Success/Error Messages */
.form-message {
  margin-top: 20px;
  padding: 15px;
  border-radius: 10px;
  text-align: center;
}

.form-message.success {
  background: rgba(76, 175, 80, 0.1);
  border: 1px solid var(--success-green);
  color: var(--success-green);
}

.form-message.error {
  background: rgba(244, 67, 54, 0.1);
  border: 1px solid var(--error-red);
  color: var(--error-red);
}

/* Email Row with Copy Button */
.email-row {
  display: flex;
  align-items: center;
  gap: 10px;
  margin-bottom: 15px;
}

.email-text {
  color: var(--primary-orange);
  font-weight: 500;
  word-break: break-all;
}

.copy-btn {
  background: rgba(255, 107, 53, 0.15);
  border: 1px solid rgba(255, 107, 53, 0.3);
  border-radius: 8px;
  padding: 6px 10px;
  cursor: pointer;
  font-size: 1rem;
  transition: all 0.3s ease;
  flex-shrink: 0;
}

.copy-btn:hover {
  background: rgba(255, 107, 53, 0.25);
}

/* Value Checkbox */
.form-checkbox-group {
  margin-bottom: 20px;
}

.checkbox-label {
  display: flex;
  align-items: center;
  gap: 12px;
  cursor: pointer;
  font-size: 0.95rem;
  line-height: 1.5;
}

.checkbox-label input[type="checkbox"] {
  width: 20px;
  height: 20px;
  accent-color: var(--primary-orange);
  flex-shrink: 0;
  cursor: pointer;
}

/* Form Footer Legal */
.form-footer-legal {
  margin-top: 15px;
  text-align: center;
  font-size: 0.8rem;
  opacity: 0.5;
}

.form-footer-legal .legal-link {
  color: var(--light-text);
  text-decoration: none;
  transition: all 0.3s ease;
}

.form-footer-legal .legal-link:hover {
  color: var(--primary-orange);
  opacity: 1;
}

.legal-separator {
  margin: 0 6px;
  opacity: 0.5;
}

/* Form Legal Links - Legacy */
.form-legal-links {
  margin-top: 20px;
  text-align: center;
}

.form-legal-links p {
  font-size: 0.9rem;
  opacity: 0.7;
  color: var(--light-text);
}

.legal-link {
  color: var(--primary-orange);
  text-decoration: none;
  transition: opacity 0.3s ease;
}

.legal-link:hover {
  opacity: 0.8;
  text-decoration: underline;
}

/* Animations */
@keyframes fadeInUp {
  /* from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  } */
}

/* Responsive */
@media (max-width: 768px) {
  .authority-container {
    grid-template-columns: 1fr;
    gap: 20px;
  }

  .orion-header {
    flex-direction: column;
    text-align: center;
  }

  .orion-card {
    padding: 25px 20px;
  }

  .contact-container {
    grid-template-columns: 1fr;
    gap: 40px;
  }

  .contact-form,
  .info-card {
    padding: 30px 20px;
  }

  .faq-question {
    padding: 20px;
  }

  .faq-question h3 {
    font-size: 1.1rem;
  }

  .email-row {
    flex-wrap: wrap;
  }
}
</style>
