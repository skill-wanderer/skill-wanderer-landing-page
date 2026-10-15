// Global type definitions for the Skill-Wanderer project

export interface Platform {
  title: string
  description: string
  link: string
  icon: string
  isComingSoon?: boolean
}

export interface SeoMeta {
  title: string
  description: string
  image?: string
  url?: string
}

export interface StoryContent {
  type: 'text' | 'personal-story' | 'quote' | 'annual-review' | 'motto-highlight' | 'integrity-notice' | 'realization-highlight' | 'element-list' | 'challenge-highlight'
  text: string
  author?: string
  additionalText?: string
  items?: string[]
  timelineItems?: Array<{
    phase: string
    description: string
    icon: string
  }>
}

export interface StoryChapter {
  icon: string
  title: string
  content: StoryContent[]
}

export interface PracticeExample {
  title: string
  items: string[]
}

export interface SubscribeRequest {
  email: string
  /** Path of the page the form was sent from, such as '/about'. */
  source?: string
}

export type SubscribeSuccessStatus = 'accepted' | 'confirmed'

export type SubscribeFailureStatus = 'invalid' | 'throttled' | 'unavailable' | 'failed'

export type SubscribeFailureCode =
  | 'SUBSCRIBE_INVALID_BODY'
  | 'SUBSCRIBE_EMAIL_REQUIRED'
  | 'SUBSCRIBE_INVALID_EMAIL'
  | 'SUBSCRIBE_EMAIL_TOO_LONG'
  | 'SUBSCRIBE_THROTTLED'
  | 'SUBSCRIBE_CONFIG_MISSING'
  | 'SUBSCRIBE_PROVIDER_REJECTED'
  | 'SUBSCRIBE_CONTACT_REJECTED'
  | 'SUBSCRIBE_PROVIDER_NO_DATA'
  | 'SUBSCRIBE_PROVIDER_EXCEPTION'

export type SubscribeResponse =
  | {
      ok: true
      status: SubscribeSuccessStatus
      message: string
      requestId: string
    }
  | {
      ok: false
      status: SubscribeFailureStatus
      code: SubscribeFailureCode
      message: string
      requestId: string
      retryable: boolean
      retryAfterSeconds?: number
    }

/** Starts a one-time or monthly donation. */
export interface DonationRequest {
  /** Amount in US dollars as the donor picked or typed it, such as '25' or '25.50'. */
  amount: string
}

export type DonationFailureCode =
  | 'DONATION_INVALID_BODY'
  | 'DONATION_INVALID_AMOUNT'
  | 'DONATION_NOT_FOUND'
  | 'DONATION_NOT_ACTIVE'
  | 'DONATION_THROTTLED'
  | 'DONATION_CONFIG_MISSING'
  | 'DONATION_DECLINED'
  | 'DONATION_PROVIDER_ERROR'

export interface DonationFailure {
  ok: false
  code: DonationFailureCode
  message: string
  requestId: string
  retryable: boolean
}

export type DonationOrderResponse =
  | {
      ok: true
      /** PayPal order ID, handed to the PayPal SDK to open checkout. */
      orderId: string
      requestId: string
    }
  | DonationFailure

export type DonationCaptureResponse =
  | {
      ok: true
      /** 'pending' means PayPal accepted the payment but is still reviewing it. */
      status: 'completed' | 'pending'
      /** Captured amount, such as '25.00'. */
      amount: string
      currency: string
      message: string
      requestId: string
    }
  | DonationFailure

export type MonthlyDonationStartResponse =
  | {
      ok: true
      /** PayPal subscription ID, handed to the PayPal SDK to open checkout. */
      subscriptionId: string
      requestId: string
    }
  | DonationFailure

export type MonthlyDonationStatusResponse =
  | {
      ok: true
      /** 'pending' means the donor approved it and PayPal is still switching it on. */
      status: 'active' | 'pending'
      /** Monthly amount, such as '10.00'. */
      amount: string
      currency: string
      message: string
      requestId: string
    }
  | DonationFailure

// Extend global types if needed
declare global {
  // Add any global type extensions here
}