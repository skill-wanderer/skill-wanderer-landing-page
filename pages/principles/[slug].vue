<script setup lang="ts">
const route = useRoute()
const slug = route.params.slug

// Basic SEO for dynamic principle pages
const slugTitle = String(slug).replace(/-/g, ' ').replace(/\b\w/g, (c) => c.toUpperCase())
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