<template>
  <ReusablePathOverview :overview="overview" />
</template>

<script setup lang="ts">
import ReusablePathOverview from '~/components/learning-path/ReusablePathOverview.vue'
import { reusablePathOverviews } from '~/data/learning-path-overviews'

const overview = reusablePathOverviews['mlops']

useSEO({
  title: `${overview.title} Learning Path | Skill-Wanderer`,
  description: overview.description,
  keywords: [
    'mlops learning path',
    'machine learning operations roadmap',
    'ml pipeline deployment monitoring',
    'model serving experiment tracking',
    'skill wanderer mlops'
  ]
})
</script>
