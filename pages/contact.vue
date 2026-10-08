<template>
  <div>
    <!-- Hero Section -->
    <section class="hero">
      <h1>Tell Us About Your Idea</h1>
      <p>
        Describe what you want to build or the problem you have. Quan Nguyen, our founder and Guild Master,
        reads every message himself.
      </p>
    </section>

    <!-- Contact Section: the form comes first -->
    <section class="contact">
      <!-- Tab Switcher -->
      <div class="tab-switcher">
        <button
          :class="['tab-btn', { active: activeTab === 'hire' }]"
          @click="activeTab = 'hire'"
        >
          Start a Project
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
            <h2>Start a Project</h2>
            <p>No technical words needed. Tell us what you want, who it's for, and what success would look like.</p>
          </div>
          <form id="contactForm" @submit.prevent="handleHireSubmit">
            <div class="form-group">
              <label for="name">Your Name</label>
              <input type="text" id="name" v-model="form.name" required placeholder="How should we address you?">
            </div>
            <div class="form-group">
              <label for="email">Email Address</label>
              <input type="email" id="email" v-model="form.email" required autocomplete="email" spellcheck="false" aria-describedby="hire-email-note" placeholder="your.email@example.com">
              <p id="hire-email-note" class="field-hint">We check email format only. Quan replies to this address himself; there is no automatic verification email.</p>
            </div>
            <div class="form-group">
              <label for="topic">What Do You Have in Mind?</label>
              <select id="topic" v-model="form.topic" required>
                <option value="">Choose the closest one</option>
                <option value="website">A website for my business or practice</option>
                <option value="ai">An AI tool for my students or clients</option>
                <option value="booking-payments-automation">Booking, payments or automation</option>
                <option value="app-platform">An app or a bigger platform</option>
                <option value="not-sure">Not sure yet, I just have an idea</option>
              </select>
            </div>
            <div class="form-group">
              <label for="message">Your Idea or Problem</label>
              <textarea id="message" v-model="form.message" required placeholder="What do you want to build? Who is it for? What would success look like? Plain words are perfect."></textarea>
            </div>
            <div v-if="!isWeb3FormsConfigured && !formMessage.show" class="form-message error">
              {{ hireConfigErrorMessage }}
            </div>
            <button type="submit" class="btn btn-primary" :disabled="isSubmitting">
              {{ isSubmitting ? 'Sending...' : 'Send My Idea' }}
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

        <!-- What happens next + other ways to reach us -->
        <div class="contact-info">
          <div class="info-header">
            <h2>What Happens Next</h2>
            <p>Simple steps, and no pressure at any of them.</p>
          </div>
          <ol class="next-steps">
            <li class="next-step">
              <span class="next-step-number">1</span>
              <div>
                <h3>Quan reads your message</h3>
                <p>He usually replies within 2 working days with a time for a short call.</p>
              </div>
            </li>
            <li class="next-step">
              <span class="next-step-number">2</span>
              <div>
                <h3>One short call</h3>
                <p>
                  Quan takes one call a day so he keeps time to build and teach. Your call may be a few days
                  later, and that's normal.
                </p>
              </div>
            </li>
            <li class="next-step">
              <span class="next-step-number">3</span>
              <div>
                <h3>A free working prototype</h3>
                <p>
                  If your idea is a good fit, we build a free prototype. You decide after you've seen it, and
                  you can walk away and owe nothing.
                </p>
              </div>
            </li>
          </ol>
          <div class="info-cards">
            <div class="info-card">
              <div class="info-card-header">
                <div class="info-icon">✉️</div>
                <h3>Prefer Email?</h3>
              </div>
              <p>Write to the Guild Master directly</p>
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
                <h3>How It Works</h3>
              </div>
              <p>Free prototype first, no development fee, and no lock-in.</p>
              <NuxtLink to="/work-with-us/service-model" class="info-card-link">See the Full Details</NuxtLink>
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
              <p>The Guild Master reviews every application personally. We look for passion, craftsmanship, and alignment with the Guild's values, not just years of experience.</p>
            </div>
            <div class="info-card">
              <div class="info-card-header">
                <div class="info-icon">🤝</div>
                <h3>Craft Interview</h3>
              </div>
              <p>Shortlisted candidates are invited for a relaxed craft conversation. No whiteboard puzzles, just a genuine discussion about how you think and build.</p>
            </div>
            <div class="info-card">
              <div class="info-card-header">
                <div class="info-icon">⚔️</div>
                <h3>Guild Membership</h3>
              </div>
              <p>Guild members help on real client projects under senior review, receive mentorship, and share in the mission of funding free education for learners everywhere.</p>
              <NuxtLink to="/learning-path/learn-contribute-build-earn" class="info-card-link">How Learning Works</NuxtLink>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Trust: who builds your project, and what it funds -->
    <section class="authority">
      <div class="authority-container">
        <div class="authority-card authority-leadership">
          <div class="authority-icon">🏛️</div>
          <h3>Who Will Work on Your Project?</h3>
          <p>Quan Nguyen, our founder and Guild Master, is a solution architect with over a decade of experience across startups and enterprises. He designs your project, builds the critical parts, and <strong>reviews every change</strong>. Guild learners may help, always under his review.</p>
        </div>

        <div class="authority-card authority-mission">
          <div class="authority-icon">🌱</div>
          <h3>Your Project Funds a Mission</h3>
          <p>Every client project helps fund <strong>free mentorship</strong> for passionate learners like <NuxtLink to="/learners/rei-reltroner" class="authority-link">Rei</NuxtLink> and <NuxtLink to="/team/thanh-nguyen" class="authority-link">Thanh</NuxtLink>. We fund education through client work, not donations.</p>
        </div>

        <div class="authority-card authority-impact">
          <div class="authority-icon">📊</div>
          <div class="impact-counter">
            <span class="impact-number">100%</span>
            <span class="impact-label">of net revenue reinvested in the mission</span>
          </div>
          <p>No investors and no profit extraction. What you pay keeps your project running and keeps free education going.</p>
        </div>
      </div>
    </section>

    <!-- Admiral Orion: a secondary option for visitors not ready to write -->
    <section class="orion-section">
      <div class="orion-container">
        <div class="orion-card">
          <div class="orion-header">
            <div class="orion-icon">🧭</div>
            <div>
              <h2>Not Ready to Write Yet?</h2>
              <p>Ask <strong>Admiral Orion</strong>, our AI guide, whether your idea is a good fit or how the free prototype works.</p>
            </div>
          </div>
          <NuxtLink to="/admiral-orion" class="btn btn-orion">Chat with Admiral Orion</NuxtLink>
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
import { computed, reactive, ref, watch } from 'vue'

// SEO and meta management
useSEO({
  title: 'Contact Skill-Wanderer | Tell Us About Your Idea',
  description: 'Tell us about your idea. Quan, our founder, reads every message and replies with a time for a short call. Free prototype first, no development fee.',
  keywords: ['contact skill-wanderer', 'website for small business', 'tech partner', 'free prototype', 'no development fee', 'project inquiry'],
  type: 'website'
})

// Tab state: links such as /contact?tab=join open the guild form directly
const route = useRoute()
const getTabFromQuery = (): 'hire' | 'join' => (route.query.tab === 'join' ? 'join' : 'hire')
const activeTab = ref<'hire' | 'join'>(getTabFromQuery())

watch(() => route.query.tab, () => {
  activeTab.value = getTabFromQuery()
})

// Hire form state
const form = reactive({
  name: '',
  email: '',
  topic: '',
  message: ''
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
  `Message accepted for delivery. Reference: ${submissionReference}. Quan will usually reply to ${replyEmail} within 2 working days with a time for a short call. If you do not hear from us, please check spam or email us directly with this reference.`

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
    answer: "Websites for your business or practice, AI tools for your students or clients, booking and payments, small automations, and apps or bigger platforms when you are ready. Every project is custom-built, and we explain everything in plain language."
  },
  {
    question: "How does pricing work?",
    answer: "For accepted projects there is no development fee. We build a free working prototype first, so you can see it before you commit. If you continue, you pay a monthly fee for hosting, maintenance, support and occasional changes, billed monthly or quarterly. The exact price is confirmed after the prototype review, never before."
  },
  {
    question: "How long does a typical project take?",
    answer: "Timelines depend on scope. A simple website can be ready in 1-2 weeks, while a full web application may take 4-8 weeks or more. After your call, Quan will give you a realistic timeline."
  },
  {
    question: "Who will work on my project?",
    answer: "Quan Nguyen, our founder, designs your project, builds the critical parts and reviews every change. Guild learners may help, always under his review."
  },
  {
    question: "Why does Quan only take one call a day?",
    answer: "Quan builds and teaches as well as meeting new clients. One call a day keeps time for the work itself, so every client gets his full attention."
  },
  {
    question: "What makes Skill-Wanderer different from an agency?",
    answer: "There is no big upfront bill: you see a working prototype first and pay no development fee. You get honest advice, not just code. There is no lock-in: you own your domain and can see the code. And your project helps fund free education."
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
  padding: 80px 20px;
  background: var(--dark-bg);
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

.info-header p {
  opacity: 0.8;
}

/* What happens next */
.next-steps {
  list-style: none;
  margin-bottom: 30px;
  display: grid;
  gap: 16px;
}

.next-step {
  display: flex;
  gap: 16px;
  align-items: flex-start;
  background: var(--card-bg);
  border: 1px solid rgba(255, 107, 53, 0.2);
  border-radius: 15px;
  padding: 22px 24px;
}

.next-step-number {
  flex-shrink: 0;
  width: 36px;
  height: 36px;
  border-radius: 50%;
  background: linear-gradient(135deg, var(--primary-orange), var(--deep-orange));
  color: white;
  font-weight: 700;
  display: flex;
  align-items: center;
  justify-content: center;
}

.next-step h3 {
  font-size: 1.1rem;
  color: white;
  margin-bottom: 6px;
}

.next-step p {
  opacity: 0.8;
  line-height: 1.6;
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