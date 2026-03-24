<template>
  <ReusablePathOverview :overview="overview" />
</template>

<script setup lang="ts">
import ReusablePathOverview from '~/components/learning-path/ReusablePathOverview.vue'
import { reusablePathOverviews } from '~/data/learning-path-overviews'

const overview = reusablePathOverviews['startup-foundation']

useSEO({
  title: `${overview.title} Learning Path | Skill-Wanderer`,
  description: overview.description,
  keywords: [
    'startup foundation learning path',
    'how to build a startup',
    'mvp product validation roadmap',
    'founder skills tech startup',
    'skill wanderer startup foundation'
  ]
})
</script>
