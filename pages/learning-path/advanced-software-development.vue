<template>
  <ReusablePathOverview :overview="overview" />
</template>

<script setup lang="ts">
import ReusablePathOverview from '~/components/learning-path/ReusablePathOverview.vue'
import { reusablePathOverviews } from '~/data/learning-path-overviews'

const overview = reusablePathOverviews['advanced-software-development-skills']

useSEO({
  title: `${overview.title} Learning Path | Skill-Wanderer`,
  description: overview.description,
  keywords: [
    'advanced software development learning path',
    'clean code solid principles',
    'system design performance engineering',
    'technical leadership roadmap',
    'skill wanderer advanced software development'
  ]
})
</script>
