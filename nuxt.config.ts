// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  ssr: true, // Enable server-side rendering
  css: ['~/assets/css/main.css'],
    modules: [
    '@nuxtjs/sitemap'
  ],
  site: {
    url: 'https://skill-wanderer.com', // Replace with your actual domain
  },


  // TypeScript configuration
  typescript: {
    typeCheck: true
  },
  app: {
    head: {
      htmlAttrs: {
        lang: 'en'
      },
      title: 'Skill-Wanderer - Free Tech Education for Everyone',
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { name: 'description', content: 'Free, practical tech education that celebrates learning through failure. Quality education shapes brighter futures with no ads or affiliate bias.' },
        { name: 'author', content: 'Quan Nguyen' },
        { name: 'robots', content: 'index,follow' },
        { name: 'language', content: 'en' },
        // Open Graph / social media meta tags for the logo
        { property: 'og:site_name', content: 'Skill-Wanderer' },
        { property: 'og:type', content: 'website' },
        { property: 'og:image', content: '/cropped-skill-wanderer-logo-768x256.webp' },
        { property: 'og:image:width', content: '768' },
        { property: 'og:image:height', content: '256' },
        { property: 'og:image:alt', content: 'Skill-Wanderer Logo' },
        // Twitter meta tags
        { name: 'twitter:card', content: 'summary_large_image' },
        { name: 'twitter:image', content: '/cropped-skill-wanderer-logo-768x256.webp' },
        { name: 'twitter:image:alt', content: 'Skill-Wanderer Logo' }
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

  runtimeConfig: {
    public: {
      firebase: {
        apiKey: process.env.NUXT_PUBLIC_FIREBASE_API_KEY,
        authDomain: process.env.NUXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
        projectId: process.env.NUXT_PUBLIC_FIREBASE_PROJECT_ID,
        storageBucket: process.env.NUXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
        messagingSenderId: process.env.NUXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
        appId: process.env.NUXT_PUBLIC_FIREBASE_APP_ID,
        measurementId: process.env.NUXT_PUBLIC_FIREBASE_MEASUREMENT_ID || '',
      }

    }
  },

  compatibilityDate: '2025-04-19',
})