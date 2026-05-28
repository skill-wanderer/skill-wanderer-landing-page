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
  source?: 'home' | 'contact'
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

// Extend global types if needed
declare global {
  // Add any global type extensions here
}