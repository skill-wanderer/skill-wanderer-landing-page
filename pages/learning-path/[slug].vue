<template>
  <ReusablePathOverview v-if="reusableOverview" :overview="reusableOverview" />

  <div v-else class="path-detail-page">
    <section class="detail-hero">
      <div class="detail-content">
        <p class="eyebrow">Learning Path</p>
        <h1>{{ topicTitle }}</h1>
        <p class="description">
          {{ topicDescription }}
        </p>

        <div class="actions">
          <NuxtLink to="/learning-path" class="btn btn-primary">← Back to Topic Hub</NuxtLink>
          <a href="https://dojo.skill-wanderer.com/paths" class="btn btn-secondary" target="_blank" rel="noopener noreferrer">
            Explore Dojo Paths
          </a>
        </div>

        <p class="status-note" v-if="!reusableOverview">Detailed content for this path is in progress and tracked in GitHub issue backlog.</p>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import ReusablePathOverview from '~/components/learning-path/ReusablePathOverview.vue'
import { reusablePathOverviews } from '~/data/learning-path-overviews'

const route = useRoute()

const topicMap: Record<string, { title: string; description: string }> = {
  'learn-contribute-build-earn': {
    title: 'Education Philosophy',
    description: 'Understand Skill-Wanderer\'s Learn. Contribute. Build. Earn. model and how learners grow through each stage.'
  },
  'web-development': {
    title: 'Web Development',
    description: 'Build modern frontend, backend, and full-stack engineering skills step by step.'
  },
  'mobile-development': {
    title: 'Mobile Development',
    description: 'Create robust mobile apps with practical workflows for iOS, Android, and cross-platform projects.'
  },
  'ai-and-machine-learning': {
    title: 'AI and Machine Learning',
    description: 'Learn model fundamentals, applied AI workflows, and practical machine learning implementation.'
  },
  devops: {
    title: 'DevOps',
    description: 'Master CI/CD, automation, observability, and reliable deployment operations.'
  },
  mlops: {
    title: 'MLOps',
    description: 'Design and operate ML systems with reproducible pipelines and production monitoring.'
  },
  'qa-tester': {
    title: 'QA / Tester',
    description: 'Develop quality engineering skills across testing strategy, automation, and release confidence.'
  },
  'software-development-roles-and-career': {
    title: 'Software Development Roles & Career',
    description: 'Understand role pathways, growth milestones, and practical career navigation in software development.'
  },
  'project-management': {
    title: 'Project Management',
    description: 'Build planning, delivery, and stakeholder management skills for real project outcomes.'
  },
  'business-analyst': {
    title: 'Business Analyst',
    description: 'Translate business needs into actionable product and technology requirements.'
  },
  'start-up-foundation': {
    title: 'Start-Up Foundation',
    description: 'Learn startup fundamentals from problem validation to MVP execution and iteration.'
  },
  'advanced-software-development-skills': {
    title: 'Advanced Software Development Skills',
    description: 'Sharpen advanced engineering judgment in testing, performance, architecture, and maintainability.'
  },
  'software-architecture-and-design-patterns': {
    title: 'Software Architecture & Design Patterns',
    description: 'Design scalable systems and apply proven design patterns with clarity and purpose.'
  }
}

const slug = computed(() => String(route.params.slug || ''))
const reusableOverview = computed(() => reusablePathOverviews[slug.value])
const topic = computed(() => topicMap[slug.value])

const topicTitle = computed(() => topic.value?.title || 'Learning Path Not Found')
const topicDescription = computed(() =>
  topic.value?.description || 'The requested learning path does not exist. Please return to the Learning Path hub.'
)

if (!topic.value) {
  throw createError({ statusCode: 404, statusMessage: 'Learning Path Not Found' })
}

useSEO({
  title: `${topicTitle.value} | Skill-Wanderer Learning Path`,
  description: topicDescription.value,
  keywords: ['learning path', 'skill-wanderer', topicTitle.value]
})
</script>

<style scoped>
.path-detail-page {
  min-height: 100vh;
  background:
    radial-gradient(circle at 14% 14%, rgba(255, 107, 53, 0.22) 0, transparent 45%),
    radial-gradient(circle at 86% 82%, rgba(255, 217, 61, 0.13) 0, transparent 50%),
    linear-gradient(160deg, #111 0%, #1b1816 44%, #0d0d0d 100%);
}

.detail-hero {
  padding: 130px 24px 90px;
}

.detail-content {
  max-width: 900px;
  margin: 0 auto;
  text-align: center;
  color: #f4f4f4;
}

.eyebrow {
  margin: 0;
  text-transform: uppercase;
  letter-spacing: 0.2em;
  color: #ffc793;
  font-size: 0.78rem;
}

h1 {
  margin: 16px 0 12px;
  font-size: clamp(2rem, 5vw, 3.3rem);
  line-height: 1.2;
}

.description {
  margin: 0 auto;
  max-width: 760px;
  font-size: 1.06rem;
  line-height: 1.72;
  color: rgba(243, 243, 243, 0.88);
}

.actions {
  margin-top: 28px;
  display: flex;
  justify-content: center;
  gap: 12px;
  flex-wrap: wrap;
}

.btn {
  padding: 10px 18px;
  border-radius: 999px;
  font-weight: 600;
  text-decoration: none;
  border: 1px solid transparent;
  transition: transform 0.2s ease, opacity 0.2s ease;
}

.btn:hover {
  transform: translateY(-2px);
  opacity: 0.95;
}

.btn-primary {
  background: linear-gradient(135deg, #ff6b35, #ff8848);
  color: #fff;
}

.btn-secondary {
  border-color: rgba(255, 199, 147, 0.55);
  color: #ffd9b4;
}

.status-note {
  margin-top: 22px;
  color: rgba(255, 255, 255, 0.72);
  font-style: italic;
}
</style>
