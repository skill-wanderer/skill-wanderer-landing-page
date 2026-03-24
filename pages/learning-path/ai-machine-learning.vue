<template>
  <ReusablePathOverview :overview="overview" />
</template>

<script setup lang="ts">
import ReusablePathOverview from '~/components/learning-path/ReusablePathOverview.vue'
import { reusablePathOverviews } from '~/data/learning-path-overviews'

const overview = reusablePathOverviews['ai-machine-learning']

useSEO({
  title: `${overview.title} Learning Path | Skill-Wanderer`,
  description: overview.description,
  keywords: [
    'ai machine learning learning path',
    'deep learning roadmap',
    'machine learning career path',
    'neural networks transformers',
    'skill wanderer ai machine learning'
  ]
})
</script>
