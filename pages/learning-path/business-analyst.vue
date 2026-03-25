<template>
  <ReusablePathOverview :overview="overview" />
</template>

<script setup lang="ts">
import ReusablePathOverview from '~/components/learning-path/ReusablePathOverview.vue'
import { reusablePathOverviews } from '~/data/learning-path-overviews'

const overview = reusablePathOverviews['business-analyst']

useSEO({
  title: `${overview.title} Learning Path | Skill-Wanderer`,
  description: overview.description,
  keywords: [
    'business analyst learning path',
    'requirement analysis roadmap',
    'stakeholder communication',
    'user stories acceptance criteria',
    'skill wanderer business analyst'
  ]
})
</script>
