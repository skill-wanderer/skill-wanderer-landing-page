// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  css: ['~/assets/css/main.css'],

  app: {
    head: {
      title: 'Skill Wanderer',
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { hid: 'description', name: 'description', content: 'The central navigation hub for the Skill Wanderer ecosystem' },
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