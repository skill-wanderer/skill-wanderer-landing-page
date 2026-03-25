<template>
  <ReusablePathOverview :overview="overview" />
</template>

<script setup lang="ts">
import ReusablePathOverview from '~/components/learning-path/ReusablePathOverview.vue'
import { reusablePathOverviews } from '~/data/learning-path-overviews'

const overview = reusablePathOverviews['qa-tester']

useSEO({
  title: `${overview.title} Learning Path | Skill-Wanderer`,
  description: overview.description,
  keywords: [
    'qa tester learning path',
    'qc quality assurance roadmap',
    'test automation manual testing',
    'bug reporting defect lifecycle',
    'skill wanderer qa tester'
  ]
})
</script>
