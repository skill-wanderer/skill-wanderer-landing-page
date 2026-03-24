<template>
  <ReusablePathOverview :overview="overview" />
</template>

<script setup lang="ts">
import ReusablePathOverview from '~/components/learning-path/ReusablePathOverview.vue'
import { reusablePathOverviews } from '~/data/learning-path-overviews'

const overview = reusablePathOverviews['software-development-roles-career']

useSEO({
  title: `${overview.title} Learning Path | Skill-Wanderer`,
  description: overview.description,
  keywords: [
    'software development career path',
    'software engineering roles roadmap',
    'tech career growth',
    'developer career guide',
    'skill wanderer software development roles career'
  ]
})
</script>
