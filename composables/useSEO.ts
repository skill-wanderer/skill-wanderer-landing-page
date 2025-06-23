// SEO composable for consistent metadata across the site
export interface SEOConfig {
  title: string
  description: string
  image?: string
  url?: string
  type?: 'website' | 'article'
  author?: string
  keywords?: string[]
  structuredData?: any
}

export const useSEO = (config: SEOConfig) => {
  const route = useRoute()
  const siteUrl = 'https://skill-wanderer.com'
  const siteName = 'Skill-Wanderer'
  const defaultImage = '/cropped-skill-wanderer-logo-768x256.webp'
  
  // Ensure title is optimized (50-60 characters)
  const optimizedTitle = config.title.length > 60 
    ? config.title.substring(0, 57) + '...'
    : config.title
  
  // Ensure description is optimized (150-160 characters)
  const optimizedDescription = config.description.length > 160
    ? config.description.substring(0, 157) + '...'
    : config.description
  
  const fullUrl = config.url || `${siteUrl}${route.path}`
  const ogImage = config.image || defaultImage
  const absoluteImageUrl = ogImage.startsWith('http') ? ogImage : `${siteUrl}${ogImage}`
  
  // Set up all meta tags
  useHead({
    title: optimizedTitle,
    meta: [
      // Basic meta tags
      { name: 'description', content: optimizedDescription },
      { name: 'author', content: config.author || 'Quan Nguyen' },
      
      // Keywords (if provided)
      ...(config.keywords ? [{ name: 'keywords', content: config.keywords.join(', ') }] : []),
      
      // Open Graph tags
      { property: 'og:title', content: optimizedTitle },
      { property: 'og:description', content: optimizedDescription },
      { property: 'og:type', content: config.type || 'website' },
      { property: 'og:url', content: fullUrl },
      { property: 'og:site_name', content: siteName },
      { property: 'og:image', content: absoluteImageUrl },
      { property: 'og:image:width', content: '768' },
      { property: 'og:image:height', content: '256' },
      { property: 'og:image:alt', content: `${siteName} - ${optimizedTitle}` },
      
      // Twitter Card tags
      { name: 'twitter:card', content: 'summary_large_image' },
      { name: 'twitter:title', content: optimizedTitle },
      { name: 'twitter:description', content: optimizedDescription },
      { name: 'twitter:image', content: absoluteImageUrl },
      { name: 'twitter:image:alt', content: `${siteName} - ${optimizedTitle}` },
      
      // Additional SEO tags
      { name: 'robots', content: 'index,follow' },
      { name: 'language', content: 'en' },
      { name: 'revisit-after', content: '7 days' },
    ],
    link: [
      // Canonical URL
      { rel: 'canonical', href: fullUrl },
    ]
  })
  
  // Add structured data if provided
  if (config.structuredData) {
    useHead({
      script: [
        {
          type: 'application/ld+json',
          innerHTML: JSON.stringify(config.structuredData)
        }
      ]
    })
  }
}

// Helper function to create organization structured data
export const createOrganizationSchema = () => {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Skill-Wanderer",
    "url": "https://skill-wanderer.com",
    "logo": "https://skill-wanderer.com/cropped-skill-wanderer-logo-768x256.webp",
    "description": "Free, practical tech education that celebrates learning through failure. Quality education shapes brighter futures.",
    "founder": {
      "@type": "Person",
      "name": "Quan Nguyen",
      "jobTitle": "Founder & Lead Educator"
    },
    "sameAs": [
      "https://www.linkedin.com/in/quan-nguyen-skill-wanderer"
    ]
  }
}

// Helper function to create article structured data
export const createArticleSchema = (title: string, description: string, url: string, publishedDate?: string) => {
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": title,
    "description": description,
    "url": url,
    "author": {
      "@type": "Person",
      "name": "Quan Nguyen"
    },
    "publisher": {
      "@type": "Organization",
      "name": "Skill-Wanderer",
      "logo": {
        "@type": "ImageObject",
        "url": "https://skill-wanderer.com/cropped-skill-wanderer-logo-768x256.webp"
      }
    },
    ...(publishedDate && { "datePublished": publishedDate }),
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": url
    }
  }
}

// Helper function to create educational course structured data
export const createCourseSchema = (title: string, description: string, url: string) => {
  return {
    "@context": "https://schema.org",
    "@type": "Course",
    "name": title,
    "description": description,
    "url": url,
    "provider": {
      "@type": "Organization",
      "name": "Skill-Wanderer",
      "url": "https://skill-wanderer.com"
    },
    "educationalLevel": "Beginner to Advanced",
    "inLanguage": "en",
    "isAccessibleForFree": true,
    "courseMode": "online"
  }
}