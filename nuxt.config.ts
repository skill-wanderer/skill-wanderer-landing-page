// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  css: ['~/assets/css/main.css'],
    modules: [
    '@nuxtjs/sitemap'
  ],
  site: {
    url: 'https://skill-wanderer.com', // Replace with your actual domain
  },
    sitemap: {
    urls: [
      {
        loc: '/',
        changefreq: 'weekly',
        priority: 1.0
      },
      {
        loc: '/about',
        changefreq: 'monthly',
        priority: 0.8
      },
      {
        loc: '/contact',
        changefreq: 'monthly',
        priority: 0.8
      },
      {
        loc: '/principles',
        changefreq: 'weekly',
        priority: 0.9
      },
      {
        loc: '/principles/accessible',
        changefreq: 'monthly',
        priority: 0.7
      },
      {
        loc: '/principles/community',
        changefreq: 'monthly',
        priority: 0.7
      },
      {
        loc: '/principles/creativity',
        changefreq: 'monthly',
        priority: 0.7
      },
      {
        loc: '/principles/engaging',
        changefreq: 'monthly',
        priority: 0.7
      },
      {
        loc: '/principles/equitable-access',
        changefreq: 'monthly',
        priority: 0.7
      },
      {
        loc: '/principles/individualized',
        changefreq: 'monthly',
        priority: 0.7
      },
      {
        loc: '/principles/integrity',
        changefreq: 'monthly',
        priority: 0.7
      },
      {
        loc: '/principles/mission-centric-reinvestment',
        changefreq: 'monthly',
        priority: 0.7
      },
      {
        loc: '/principles/pathways',
        changefreq: 'monthly',
        priority: 0.7
      },
      {
        loc: '/principles/relevant',
        changefreq: 'monthly',
        priority: 0.7
      },
      {
        loc: '/principles/resourceful',
        changefreq: 'monthly',
        priority: 0.7
      },
      {
        loc: '/principles/tech-services',
        changefreq: 'monthly',
        priority: 0.7
      }
    ]
  },

  // TypeScript configuration
  typescript: {
    typeCheck: true
  },

  app: {
    head: {
      title: 'Skill-Wanderer',
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { name: 'description', content: 'The central navigation hub for the Skill-Wanderer ecosystem' },
        // Open Graph / social media meta tags for the logo
        { property: 'og:image', content: '/cropped-skill-wanderer-logo-768x256.webp' },
        { property: 'og:image:width', content: '768' },
        { property: 'og:image:height', content: '256' },
        { name: 'twitter:image', content: '/cropped-skill-wanderer-logo-768x256.webp' }
      ],
      link: [
        { rel: 'icon', type: 'image/svg+xml', href: '/skill-wanderer-favicon.svg' }
      ]
    }
  },

  postcss: {
    plugins: {
      '@tailwindcss/postcss': {},
      autoprefixer: {},
    },
  },

  compatibilityDate: '2025-04-19',
})