<template>
  <ReusablePathOverview :overview="overview" />
</template>

<script setup lang="ts">
import ReusablePathOverview from '~/components/learning-path/ReusablePathOverview.vue'
import { reusablePathOverviews } from '~/data/learning-path-overviews'

const overview = reusablePathOverviews['devops']

useSEO({
  title: `${overview.title} Learning Path | Skill-Wanderer`,
  description: overview.description,
  keywords: [
    'devops learning path',
    'ci cd pipeline roadmap',
    'kubernetes docker infrastructure as code',
    'sre site reliability engineering',
    'skill wanderer devops'
  ]
})
</script>
