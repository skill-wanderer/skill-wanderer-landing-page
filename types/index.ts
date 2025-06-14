// Global type definitions for the Skill Wanderer project

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
  type: 'text' | 'personal-story' | 'quote'
  text: string
  author?: string
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

// Extend global types if needed
declare global {
  // Add any global type extensions here
}