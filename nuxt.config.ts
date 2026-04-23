// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  ssr: true, // Enable server-side rendering
  css: ['~/assets/css/main.css'],
    modules: [
    '@nuxtjs/sitemap'
  ],
  site: {
    url: 'https://skill-wanderer.com',
  },
  sitemap: {
    // Exclude empty directory routes and dynamic catch-all
    exclude: [
      '/partners',
      '/partners/**',
    ],
    urls: async () => {
      // Static principle pages with proper metadata
      const principles = [
        'accessible',
        'community',
        'creativity',
        'engaging',
        'individualized',
        'integrity',
        'mission-centric-reinvestment',
        'pathways',
        'relevant',
        'respect-ip',
        'social-enterprise',
        'tech-services',
        'technology-partnership',
      ]
      const principleUrls = principles.map((slug) => ({
        loc: `/principles/${slug}`,
        changefreq: 'monthly' as const,
        priority: 0.8 as const,
      }))

      // Learning path canonical slugs (matching hub links, served via [slug].vue)
      const learningPaths = [
        'web-development',
        'mobile-development',
        'business-analyst',
        'qa-tester',
        'ai-and-machine-learning',
        'devops',
        'mlops',
        'project-management',
        'start-up-foundation',
        'advanced-software-development-skills',
        'software-architecture-and-design-patterns',
        'software-development-roles-and-career',
        'learn-contribute-build-earn',
      ]
      const learningPathUrls = [
        { loc: '/learning-path', changefreq: 'weekly' as const, priority: 0.9 as const },
        ...learningPaths.map((slug) => ({
          loc: `/learning-path/${slug}`,
          changefreq: 'monthly' as const,
          priority: 0.8 as const,
        })),
      ]

      return [...principleUrls, ...learningPathUrls]
    },
    defaults: {
      changefreq: 'weekly',
      priority: 0.7,
      lastmod: new Date().toISOString(),
    },
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
        { property: 'og:image', content: 'https://skill-wanderer.com/cropped-skill-wanderer-logo-768x256.webp' },
        { property: 'og:image:width', content: '768' },
        { property: 'og:image:height', content: '256' },
        { property: 'og:image:alt', content: 'Skill-Wanderer Logo' },
        // Twitter meta tags
        { name: 'twitter:card', content: 'summary_large_image' },
        { name: 'twitter:image', content: 'https://skill-wanderer.com/cropped-skill-wanderer-logo-768x256.webp' },
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
        apiKey: process.env.NUXT_PUBLIC_FIREBASE_API_KEY || 'AIzaSyCr_1Fo6hzJDsKZrjw2u3HlrFhBnfeHmxE',
        authDomain: process.env.NUXT_PUBLIC_FIREBASE_AUTH_DOMAIN || 'skill-wanderer-hub.firebaseapp.com',
        projectId: process.env.NUXT_PUBLIC_FIREBASE_PROJECT_ID || 'skill-wanderer-hub',
        storageBucket: process.env.NUXT_PUBLIC_FIREBASE_STORAGE_BUCKET || 'skill-wanderer-hub.appspot.com',
        messagingSenderId: process.env.NUXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID || '801841516442',
        appId: process.env.NUXT_PUBLIC_FIREBASE_APP_ID || '1:801841516442:web:77c33043420a581b95f423',
      },
      pathfinder: {
        apiUrl: process.env.NUXT_PUBLIC_PATHFINDER_API_URL || '',
        domains: process.env.NUXT_PUBLIC_PATHFINDER_DOMAINS || 'skill-wanderer.com,wanderings.skill-wanderer.com,dojo.skill-wanderer.com',
        sessionExpiryMinutes: Number(process.env.NUXT_PUBLIC_PATHFINDER_SESSION_EXPIRY_MINUTES) || 30,
        sessionStorage: process.env.NUXT_PUBLIC_PATHFINDER_SESSION_STORAGE || 'browser',
      },
    }
  },

  nitro: {
    preset: 'cloudflare_module',
  },

  routeRules: {
    '/expertise-impact': { redirect: { to: '/work-with-us', statusCode: 301 } },
    '/expertise-impact/**': { redirect: { to: '/work-with-us', statusCode: 301 } },
    '/work-with-us/delivery-model': { redirect: { to: '/work-with-us/success-sharing-model', statusCode: 301 } },
    '/learning-path/ai-machine-learning': { redirect: { to: '/learning-path/ai-and-machine-learning', statusCode: 301 } },
    '/learning-path/startup-foundation': { redirect: { to: '/learning-path/start-up-foundation', statusCode: 301 } },
    '/learning-path/advanced-software-development': { redirect: { to: '/learning-path/advanced-software-development-skills', statusCode: 301 } },
    '/learning-path/software-architecture-design-patterns': { redirect: { to: '/learning-path/software-architecture-and-design-patterns', statusCode: 301 } },
    '/learning-path/software-development-roles-career': { redirect: { to: '/learning-path/software-development-roles-and-career', statusCode: 301 } },
    '/': { sitemap: { changefreq: 'weekly', priority: 1.0 } },
    '/about': { sitemap: { changefreq: 'monthly', priority: 0.8 } },
    '/mission': { sitemap: { changefreq: 'monthly', priority: 0.8 } },
    '/contact': { sitemap: { changefreq: 'monthly', priority: 0.6 } },
    '/roadmap': { sitemap: { changefreq: 'weekly', priority: 0.7 } },
    '/principles': { sitemap: { changefreq: 'monthly', priority: 0.9 } },
    '/principles/**': { sitemap: { changefreq: 'monthly', priority: 0.8 } },
    '/learners': { sitemap: { changefreq: 'monthly', priority: 0.7 } },
    '/learners/**': { sitemap: { changefreq: 'monthly', priority: 0.6 } },
    '/work-with-us': { sitemap: { changefreq: 'monthly', priority: 0.7 } },
    '/work-with-us/**': { sitemap: { changefreq: 'monthly', priority: 0.6 } },
    '/technology-partner': { sitemap: { changefreq: 'monthly', priority: 0.6 } },
    '/privacy-policy': { sitemap: { changefreq: 'yearly', priority: 0.3 } },
    '/terms-of-service': { sitemap: { changefreq: 'yearly', priority: 0.3 } },
  },

  compatibilityDate: '2025-04-19',
})