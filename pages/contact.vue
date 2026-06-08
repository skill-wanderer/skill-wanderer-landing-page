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
          <form id="contactForm" @submit.prevent="handleHireSubmit">
            <div class="form-group">
              <label for="name">Your Name</label>
              <input type="text" id="name" v-model="form.name" required placeholder="How should we address you?">
            </div>
            <div class="form-group">
              <label for="email">Email Address</label>
              <input type="email" id="email" v-model="form.email" required autocomplete="email" spellcheck="false" aria-describedby="hire-email-note" placeholder="your.email@example.com">
              <p id="hire-email-note" class="field-hint">We check email format only. A guild member replies manually to this address after submission; there is no automatic verification email.</p>
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
              <p class="checkbox-note">This helps us tailor our reply. It does not change whether you can submit this inquiry.</p>
            </div>
            <div v-if="!isWeb3FormsConfigured && !formMessage.show" class="form-message error">
              {{ hireConfigErrorMessage }}
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
            <div v-if="formMessage.show" :class="['form-message', formMessage.type]" :role="formMessage.type === 'error' ? 'alert' : 'status'" :aria-live="formMessage.type === 'error' ? 'assertive' : 'polite'">
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
                <div class="info-icon">✉️</div>
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
                <div class="info-icon">🧭</div>
                <h3>How We Work</h3>
              </div>
              <p>Explore our delivery model, project fit, and partnership approach</p>
              <NuxtLink to="/work-with-us" class="info-card-link">See Engagement Options</NuxtLink>
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
          <form @submit.prevent="handleJoinSubmit">
            <div class="form-group">
              <label for="guild-name">Your Name</label>
              <input type="text" id="guild-name" v-model="guildForm.name" required placeholder="How should we address you?">
            </div>
            <div class="form-group">
              <label for="guild-email">Email Address</label>
              <input type="email" id="guild-email" v-model="guildForm.email" required autocomplete="email" spellcheck="false" aria-describedby="guild-email-note" placeholder="your.email@example.com">
              <p id="guild-email-note" class="field-hint">We check email format only. We use this address for manual follow-up on your application; there is no automatic verification email.</p>
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
            <div v-if="!isWeb3FormsConfigured && !guildFormMessage.show" class="form-message error">
              {{ guildConfigErrorMessage }}
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
            <div v-if="guildFormMessage.show" :class="['form-message', guildFormMessage.type]" :role="guildFormMessage.type === 'error' ? 'alert' : 'status'" :aria-live="guildFormMessage.type === 'error' ? 'assertive' : 'polite'">
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
                <div class="info-icon">✏️</div>
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
              <NuxtLink to="/manifesto" class="info-card-link">Read the Guild Manifesto</NuxtLink>
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
// Icons replaced with emojis
import { computed, reactive, ref } from 'vue'

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

type ContactFormType = 'hire-the-guild' | 'join-the-guild'
type SubmissionErrorType = 'config' | 'api' | 'network' | 'unknown'
type SubmissionLifecycleState =
  | 'started'
  | 'duplicate_blocked'
  | 'vendor_request_started'
  | 'vendor_accepted'
  | 'vendor_rejected'
  | 'network_failed'
  | 'config_missing'
  | 'operator_pending'
  | 'unknown_failed'

type ContactFormAuditEvent = {
  event: string
  lifecycle_state: SubmissionLifecycleState
  form_type: ContactFormType
  submission_reference?: string
  duration_ms?: number | null
  status?: number | null
  success?: boolean
  error_type?: SubmissionErrorType
  error_message?: string
  reply_email?: string
}

type ContactAuditEntry = ContactFormAuditEvent & {
  page: string
  timestamp: string
}

type ContactAuditWindow = Window & {
  __SKILL_WANDERER_CONTACT_AUDIT_LOG__?: ContactAuditEntry[]
}

class SubmissionError extends Error {
  constructor(
    message: string,
    readonly errorType: SubmissionErrorType,
    readonly status?: number
  ) {
    super(message)
    this.name = 'SubmissionError'
  }
}

const CONTACT_AUDIT_EVENT_NAME = 'skill-wanderer:contact-form-event'
const CONTACT_AUDIT_LOG_LIMIT = 50
const CONTACT_AUDIT_PAGE = '/contact'

const logFormSubmissionEvent = (event: ContactFormAuditEvent) => {
  if (!import.meta.client || !import.meta.dev) {
    return
  }

  const auditEntry: ContactAuditEntry = {
    ...event,
    page: CONTACT_AUDIT_PAGE,
    timestamp: new Date().toISOString()
  }

  const auditWindow = window as ContactAuditWindow
  const auditLog = auditWindow.__SKILL_WANDERER_CONTACT_AUDIT_LOG__ ?? []

  auditLog.push(auditEntry)

  if (auditLog.length > CONTACT_AUDIT_LOG_LIMIT) {
    auditLog.shift()
  }

  auditWindow.__SKILL_WANDERER_CONTACT_AUDIT_LOG__ = auditLog
  window.dispatchEvent(new CustomEvent(CONTACT_AUDIT_EVENT_NAME, { detail: auditEntry }))
}

const getDurationMs = (startTime: number) => Math.round(performance.now() - startTime)

const getSubmissionErrorType = (error: unknown): SubmissionErrorType => {
  if (error instanceof SubmissionError) {
    return error.errorType
  }

  if (error instanceof TypeError) {
    return 'network'
  }

  return 'unknown'
}

const hireConfigErrorMessage = 'Contact form configuration is incomplete. Please contact me directly via email.'
const guildConfigErrorMessage = 'Application form configuration is incomplete. Please reach us directly via email.'

const createSubmissionReference = (formType: ContactFormType) => {
  const prefix = formType === 'hire-the-guild' ? 'HIRE' : 'JOIN'
  const timestamp = new Date().toISOString().replace(/[-:.TZ]/g, '').slice(0, 14)
  const entropy = globalThis.crypto?.randomUUID?.().split('-')[0].toUpperCase()
    ?? Math.random().toString(36).slice(2, 8).toUpperCase()

  return `${prefix}-${timestamp}-${entropy}`
}

const getFailureLifecycleState = (errorType: SubmissionErrorType): SubmissionLifecycleState => {
  if (errorType === 'config') {
    return 'config_missing'
  }

  if (errorType === 'api') {
    return 'vendor_rejected'
  }

  if (errorType === 'network') {
    return 'network_failed'
  }

  return 'unknown_failed'
}

const buildHireSuccessMessage = (replyEmail: string, submissionReference: string) =>
  `Message accepted for delivery. Reference: ${submissionReference}. We'll reply to ${replyEmail} within 24-48 hours. If you do not hear from us, please check spam or email us directly with this reference.`

const buildGuildSuccessMessage = (replyEmail: string, submissionReference: string) =>
  `Application accepted for delivery. Reference: ${submissionReference}. We'll reply to ${replyEmail} after review. If you do not hear from us within a few days, please check spam or email us directly with this reference.`

const getHireSubmissionErrorMessage = (error: unknown) => {
  if (error instanceof SubmissionError) {
    if (error.errorType === 'config') {
      return hireConfigErrorMessage
    }

    if (error.errorType === 'api') {
      return 'We could not confirm delivery with our form provider. Your message was not sent. Please try again or contact me directly via email.'
    }
  }

  if (getSubmissionErrorType(error) === 'network') {
    return 'We could not reach our form provider. Your message was not sent. Please try again or contact me directly via email.'
  }

  return 'We could not confirm that your message was received. Please try again or contact me directly via email.'
}

const getGuildSubmissionErrorMessage = (error: unknown) => {
  if (error instanceof SubmissionError) {
    if (error.errorType === 'config') {
      return guildConfigErrorMessage
    }

    if (error.errorType === 'api') {
      return 'We could not confirm delivery with our form provider. Your application was not sent. Please try again or reach us directly via email.'
    }
  }

  if (getSubmissionErrorType(error) === 'network') {
    return 'We could not reach our form provider. Your application was not sent. Please try again or reach us directly via email.'
  }

  return 'We could not confirm that your application was received. Please try again or reach us directly via email.'
}

type ContactPublicRuntimeConfig = {
  web3forms?: {
    accessKey?: string
  }
}

const getWeb3FormsAccessKey = () => {
  const accessKey = (useRuntimeConfig().public as ContactPublicRuntimeConfig).web3forms?.accessKey
  return typeof accessKey === 'string' ? accessKey.trim() : ''
}

const isWeb3FormsConfigured = computed(() => getWeb3FormsAccessKey().length > 0)

const activeFaq = ref(-1)

// FAQ data
const faqs = ref([
  {
    question: "What kind of projects do you take on?",
    answer: "We build custom websites, web applications, platforms, and provide technical consulting. From single landing pages to complex multi-feature platforms — every project is custom-coded with modern frameworks, no templates or page builders. Check our What We Build page for detailed examples."
  },
  {
    question: "How does pricing work?",
    answer: "We scope engagements around clear deliverables, timelines, and fixed proposals. Describe your project and we'll recommend the right fit, timeline, and next step."
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
const handleHireSubmit = async () => {
  const formType: ContactFormType = 'hire-the-guild'
  let requestStartTime: number | null = null
  const replyEmail = form.email.trim()
  const submissionReference = createSubmissionReference(formType)
  const submittedAt = new Date().toISOString()

  if (isSubmitting.value) {
    logFormSubmissionEvent({
      event: 'contact_form_duplicate_blocked',
      lifecycle_state: 'duplicate_blocked',
      form_type: formType,
      reply_email: replyEmail || undefined
    })

    return
  }

  isSubmitting.value = true
  formMessage.show = false
  logFormSubmissionEvent({
    event: 'contact_form_submission_started',
    lifecycle_state: 'started',
    form_type: formType,
    submission_reference: submissionReference,
    reply_email: replyEmail || undefined
  })

  try {
    const accessKey = getWeb3FormsAccessKey()

    if (!accessKey) {
      throw new SubmissionError('Missing Web3Forms access key', 'config')
    }

    const payload = {
      access_key: accessKey,
      name: form.name,
      email: replyEmail,
      message: form.message,
      topic: form.topic,
      valuesQuality: form.valuesQuality,
      form_type: formType,
      submission_reference: submissionReference,
      submitted_at: submittedAt,
      source: '/contact',
      subject: 'Hire the Guild inquiry'
    }

    logFormSubmissionEvent({
      event: 'contact_form_vendor_request_started',
      lifecycle_state: 'vendor_request_started',
      form_type: formType,
      submission_reference: submissionReference,
      reply_email: replyEmail || undefined
    })

    requestStartTime = performance.now()
    const response = await fetch('https://api.web3forms.com/submit', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json'
      },
      body: JSON.stringify(payload)
    })

    const responseData = await response.json() as {
      success?: boolean
      message?: string
    }

    const durationMs = getDurationMs(requestStartTime)
    const vendorAccepted = Boolean(response.ok && responseData.success)

    logFormSubmissionEvent({
      event: vendorAccepted ? 'contact_form_vendor_accepted' : 'contact_form_vendor_rejected',
      lifecycle_state: vendorAccepted ? 'vendor_accepted' : 'vendor_rejected',
      form_type: formType,
      submission_reference: submissionReference,
      duration_ms: durationMs,
      status: response.status,
      success: vendorAccepted,
      reply_email: replyEmail || undefined
    })

    if (!vendorAccepted) {
      throw new SubmissionError(
        responseData.message || 'Web3Forms submission failed',
        'api',
        response.status
      )
    }

    logFormSubmissionEvent({
      event: 'contact_form_operator_pending',
      lifecycle_state: 'operator_pending',
      form_type: formType,
      submission_reference: submissionReference,
      duration_ms: durationMs,
      status: response.status,
      reply_email: replyEmail || undefined
    })

    // Show success message
    formMessage.show = true
    formMessage.type = 'success'
    formMessage.text = buildHireSuccessMessage(replyEmail, submissionReference)

    // Reset form
    Object.assign(form, {
      name: '',
      email: '',
      topic: '',
      message: '',
      valuesQuality: false
    })
  } catch (error) {
    const errorType = getSubmissionErrorType(error)

    logFormSubmissionEvent({
      event: 'contact_form_submission_failed',
      lifecycle_state: getFailureLifecycleState(errorType),
      form_type: formType,
      submission_reference: submissionReference,
      duration_ms: requestStartTime === null ? null : getDurationMs(requestStartTime),
      error_type: errorType,
      error_message: error instanceof Error ? error.message : 'Unknown submission error',
      status: error instanceof SubmissionError ? error.status ?? null : null,
      reply_email: replyEmail || undefined
    })

    formMessage.show = true
    formMessage.type = 'error'
    formMessage.text = getHireSubmissionErrorMessage(error)
  } finally {
    isSubmitting.value = false
  }
}

const handleJoinSubmit = async () => {
  const formType: ContactFormType = 'join-the-guild'
  let requestStartTime: number | null = null
  const replyEmail = guildForm.email.trim()
  const submissionReference = createSubmissionReference(formType)
  const submittedAt = new Date().toISOString()

  if (isGuildSubmitting.value) {
    logFormSubmissionEvent({
      event: 'contact_form_duplicate_blocked',
      lifecycle_state: 'duplicate_blocked',
      form_type: formType,
      reply_email: replyEmail || undefined
    })

    return
  }

  isGuildSubmitting.value = true
  guildFormMessage.show = false
  logFormSubmissionEvent({
    event: 'contact_form_submission_started',
    lifecycle_state: 'started',
    form_type: formType,
    submission_reference: submissionReference,
    reply_email: replyEmail || undefined
  })

  try {
    const accessKey = getWeb3FormsAccessKey()

    if (!accessKey) {
      throw new SubmissionError('Missing Web3Forms access key', 'config')
    }

    const payload = {
      access_key: accessKey,
      name: guildForm.name,
      email: replyEmail,
      skill: guildForm.skill,
      experience: guildForm.experience,
      portfolio: guildForm.portfolio,
      message: guildForm.message,
      form_type: formType,
      submission_reference: submissionReference,
      submitted_at: submittedAt,
      source: '/contact',
      subject: 'Join the Guild application'
    }

    logFormSubmissionEvent({
      event: 'contact_form_vendor_request_started',
      lifecycle_state: 'vendor_request_started',
      form_type: formType,
      submission_reference: submissionReference,
      reply_email: replyEmail || undefined
    })

    requestStartTime = performance.now()
    const response = await fetch('https://api.web3forms.com/submit', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json'
      },
      body: JSON.stringify(payload)
    })

    const responseData = await response.json() as {
      success?: boolean
      message?: string
    }

    const durationMs = getDurationMs(requestStartTime)
    const vendorAccepted = Boolean(response.ok && responseData.success)

    logFormSubmissionEvent({
      event: vendorAccepted ? 'contact_form_vendor_accepted' : 'contact_form_vendor_rejected',
      lifecycle_state: vendorAccepted ? 'vendor_accepted' : 'vendor_rejected',
      form_type: formType,
      submission_reference: submissionReference,
      duration_ms: durationMs,
      status: response.status,
      success: vendorAccepted,
      reply_email: replyEmail || undefined
    })

    if (!vendorAccepted) {
      throw new SubmissionError(
        responseData.message || 'Web3Forms submission failed',
        'api',
        response.status
      )
    }

    logFormSubmissionEvent({
      event: 'contact_form_operator_pending',
      lifecycle_state: 'operator_pending',
      form_type: formType,
      submission_reference: submissionReference,
      duration_ms: durationMs,
      status: response.status,
      reply_email: replyEmail || undefined
    })

    guildFormMessage.show = true
    guildFormMessage.type = 'success'
    guildFormMessage.text = buildGuildSuccessMessage(replyEmail, submissionReference)

    Object.assign(guildForm, {
      name: '',
      email: '',
      skill: '',
      experience: '',
      portfolio: '',
      message: ''
    })
  } catch (error) {
    const errorType = getSubmissionErrorType(error)

    logFormSubmissionEvent({
      event: 'contact_form_submission_failed',
      lifecycle_state: getFailureLifecycleState(errorType),
      form_type: formType,
      submission_reference: submissionReference,
      duration_ms: requestStartTime === null ? null : getDurationMs(requestStartTime),
      error_type: errorType,
      error_message: error instanceof Error ? error.message : 'Unknown submission error',
      status: error instanceof SubmissionError ? error.status ?? null : null,
      reply_email: replyEmail || undefined
    })

    guildFormMessage.show = true
    guildFormMessage.type = 'error'
    guildFormMessage.text = getGuildSubmissionErrorMessage(error)
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

.field-hint {
  margin-top: 8px;
  font-size: 0.88rem;
  line-height: 1.5;
  opacity: 0.7;
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

.checkbox-note {
  margin-top: 10px;
  font-size: 0.88rem;
  line-height: 1.5;
  opacity: 0.7;
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