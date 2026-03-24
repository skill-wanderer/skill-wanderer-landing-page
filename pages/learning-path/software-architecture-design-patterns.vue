<template>
  <ReusablePathOverview :overview="overview" />
</template>

<script setup lang="ts">
import ReusablePathOverview from '~/components/learning-path/ReusablePathOverview.vue'
import { reusablePathOverviews } from '~/data/learning-path-overviews'

const overview = reusablePathOverviews['software-architecture-design-patterns']

useSEO({
  title: `${overview.title} Learning Path | Skill-Wanderer`,
  description: overview.description,
  keywords: [
    'software architecture learning path',
    'design patterns roadmap',
    'clean architecture microservices',
    'gang of four patterns system design',
    'skill wanderer software architecture'
  ]
})
</script>
