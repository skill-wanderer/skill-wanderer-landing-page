<template>
  <div>
    <!-- Navigation -->
    <TheNavigation />

    <!-- Hero Section -->
    <section class="hero">
      <h1>Let's Connect</h1>
      <p>Whether you're a learner with questions, a potential collaborator, or just someone who shares the passion for learning—I'd love to hear from you!</p>
    </section>

    <!-- Contact Section -->
    <section class="contact">
      <div class="contact-container">
        <!-- Contact Form -->
        <div class="contact-form">
          <div class="form-header">
            <h2>Send a Message</h2>
            <p>Have a question, suggestion, or just want to share your learning journey?</p>
          </div>
          <form id="contactForm" @submit.prevent="handleSubmit">
            <div class="form-group">
              <label for="name">Your Name</label>
              <input type="text" id="name" v-model="form.name" required placeholder="How should I address you?">
            </div>
            <div class="form-group">
              <label for="email">Email Address</label>
              <input type="email" id="email" v-model="form.email" required placeholder="your.email@example.com">
            </div>
            <div class="form-group">
              <label for="topic">What's this about?</label>
              <select id="topic" v-model="form.topic" required>
                <option value="">Select a topic</option>
                <option value="learning">Learning & Courses</option>
                <option value="collaboration">Collaboration Opportunities</option>
                <option value="tech-services">Technology Services</option>
                <option value="feedback">Platform Feedback</option>
                <option value="other">Something Else</option>
              </select>
            </div>
            <div class="form-group">
              <label for="message">Your Message</label>
              <textarea id="message" v-model="form.message" required placeholder="Tell me your thoughts, questions, or share your own skill-wandering story..."></textarea>
            </div>
            <button type="submit" class="btn btn-primary" :disabled="isSubmitting">
              {{ isSubmitting ? 'Sending...' : 'Send Message' }}
              <span>{{ isSubmitting ? '⏳' : '→' }}</span>
            </button>
            <div v-if="formMessage.show" :class="['form-message', formMessage.type]">
              {{ formMessage.text }}
            </div>
          </form>
        </div>

        <!-- Contact Info -->
        <div class="contact-info">
          <div class="info-header">
            <h2>Other Ways to Connect</h2>
            <p>Choose whatever works best for you—I'm active on all these channels!</p>
          </div>
          <div class="info-cards">
            <div class="info-card" @click="openEmail">
              <div class="info-card-header">
                <div class="info-icon">📧</div>
                <h3>Email</h3>
              </div>
              <p>For detailed discussions or proposals</p>
              <a href="mailto:nguyen.hong.quan282@gmail.com">nguyen.hong.quan282@gmail.com</a>
            </div>
            <div class="info-card" @click="openLinkedIn">
              <div class="info-card-header">
                <div class="info-icon">💼</div>
                <h3>LinkedIn</h3>
              </div>
              <p>Connect professionally and follow my journey</p>
              <a href="https://www.linkedin.com/in/quan-nguyen-skill-wanderer" target="_blank">@quan-nguyen-skill-wanderer</a>
            </div>
            <div class="info-card">
              <div class="info-card-header">
                <div class="info-icon">💬</div>
                <h3>Community</h3>
              </div>
              <p>Join our Discord for real-time discussions</p>
              <a href="#" class="coming-soon">Coming with platform launch</a>
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
    <TheFooter />
  </div>
</template>

<script setup lang="ts">
import { ref, reactive } from 'vue'

// Meta tags for SEO
useHead({
  title: 'Contact | Let\'s Connect on This Journey',
  meta: [
    { name: 'description', content: 'Get in touch with Skill-Wanderer. Whether you\'re a learner with questions, a potential collaborator, or someone who shares the passion for learning—I\'d love to hear from you!' }
  ]
})

// Form state
const form = reactive({
  name: '',
  email: '',
  topic: '',
  message: ''
})

const isSubmitting = ref(false)
const formMessage = reactive({
  show: false,
  type: '',
  text: ''
})

const activeFaq = ref(-1)

// FAQ data
const faqs = ref([
  {
    question: "When will Skill-Wanderer launch?",
    answer: "We're targeting Q3 2025 for the platform launch with initial courses on web development, cloud concepts, and API design. Follow me on LinkedIn for the latest updates!"
  },
  {
    question: "Will the courses really be free?",
    answer: "Yes! All core course content created or curated by us will be 100% free. Optional premium services like personalized mentorship may be offered later, with equitable access provisions for those who need it."
  },
  {
    question: "Can I contribute to Skill-Wanderer?",
    answer: "Absolutely! As we grow, we'll be looking for passionate educators, content creators, and developers who align with our principles. Reach out through the contact form to discuss collaboration opportunities."
  },
  {
    question: "What technology services do you offer?",
    answer: "I provide full-cycle development, solution architecture, cloud/DevOps consulting, and technical project management. Every real-world challenge solved feeds back into Skill-Wanderer's educational content. Services launch after August 2025."
  },
  {
    question: "Why \"Skill-Wanderer\"?",
    answer: "It represents my journey through various roles—from Import-Export Manager to Full-Stack Developer, from startup founder to Solution Architect. This \"wandering\" approach taught me that the most valuable insights come from connecting dots across disciplines, and that's what I want to share with learners."
  }
])

// Methods
const handleSubmit = async () => {
  isSubmitting.value = true

  console.log('Submitting contact form:', form)
  
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
      timestamp: serverTimestamp(),
      status: 'new'
    }
    
    // Save to Firestore
    console.log('Adding message to Firestore:', messageData)
    await addDoc(collection($firestore, 'contact-messages'), messageData)
    .catch((error) => {
      console.error('Error adding document: ', error)
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
      message: ''
    })
    
    // Hide message after 5 seconds
    setTimeout(() => {
      formMessage.show = false
    }, 5000)
  } catch (error) {
    console.error('Error sending message:', error)
    formMessage.show = true
    formMessage.type = 'error'
    formMessage.text = 'Something went wrong. Please try again or contact me directly via email.'
  } finally {
    isSubmitting.value = false
  }
}

const toggleFaq = (index: number) => {
  activeFaq.value = activeFaq.value === index ? -1 : index
}

const openEmail = () => {
  window.open('mailto:nguyen.hong.quan282@gmail.com', '_blank')
}

const openLinkedIn = () => {
  window.open('https://www.linkedin.com/in/quan-nguyen-skill-wanderer', '_blank')
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

/* Contact Section */
.contact {
  padding: 80px 20px;
  background: var(--darker-bg);
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
  cursor: pointer;
}

.info-card:hover {
  transform: translateY(-3px);
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

.coming-soon {
  font-style: italic;
  opacity: 0.6;
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
}
</style>
