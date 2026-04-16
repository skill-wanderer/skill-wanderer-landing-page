<script setup lang="ts">
const route = useRoute()

// Keep this allowlist in sync with the real principle pages supported by the site.
const validPrinciples = new Set([
  'integrity'
])

const rawSlug = route.params.slug
const slug = typeof rawSlug === 'string' ? rawSlug : ''

if (!validPrinciples.has(slug)) {
  useSEO({
    title: 'Principle Not Found | Skill-Wanderer',
    description: 'This principle page does not exist. Discover Skill-Wanderer’s core values and learning philosophy for free, high-quality tech education.',
    robots: 'noindex, nofollow'
  })

  throw createError({
    statusCode: 404,
    statusMessage: 'Principle not found'
  })
}

// Basic SEO for valid dynamic principle pages
const slugTitle = slug.replace(/-/g, ' ').replace(/\b\w/g, (c) => c.toUpperCase())
useSEO({
  title: `${slugTitle} Principle | Skill-Wanderer`,
  description: `Learn about the ${slugTitle.toLowerCase()} principle that guides Skill-Wanderer's mission to provide free, quality tech education with integrity.`,
  keywords: [`${slug} principle`, 'skill-wanderer principles', 'tech education', 'learning philosophy'],
  type: 'article'
})

// You can now use 'slug' to fetch data or render content dynamically
</script>

<template>

    {{ slug }}

</template>