<template>
  <ReusablePathOverview :overview="overview" />
</template>

<script setup lang="ts">
import ReusablePathOverview from '~/components/learning-path/ReusablePathOverview.vue'
import { reusablePathOverviews } from '~/data/learning-path-overviews'

const overview = reusablePathOverviews['mobile-development']

useSEO({
  title: `${overview.title} Learning Path | Skill-Wanderer`,
  description: overview.description,
  keywords: [
    'mobile development learning path',
    'flutter game development',
    'ios android cross-platform roadmap',
    'flutter flame engine',
    'skill wanderer mobile development'
  ]
})
</script>
