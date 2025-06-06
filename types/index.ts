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

// Extend global types if needed
declare global {
  // Add any global type extensions here
}