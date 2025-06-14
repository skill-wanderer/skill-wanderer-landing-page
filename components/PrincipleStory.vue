<template>
  <section class="story-section">
    <div class="story-content">
      <p class="story-intro" v-html="intro"></p>

      <div 
        v-for="(chapter, index) in chapters" 
        :key="index"
        class="story-chapter" 
        :style="{ animationDelay: `${0.1 * (index + 1)}s` }"
      >
        <h2>
          <span class="chapter-icon">{{ chapter.icon }}</span>
          {{ chapter.title }}
        </h2>
        
        <template v-for="(content, contentIndex) in chapter.content" :key="contentIndex">
          <p v-if="content.type === 'text'" class="story-text" v-html="content.text"></p>
          
          <div v-else-if="content.type === 'personal-story'" class="personal-story">
            {{ content.text }}
          </div>
        </template>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
interface StoryContent {
  type: 'text' | 'personal-story'
  text: string
}

interface StoryChapter {
  icon: string
  title: string
  content: StoryContent[]
}

interface Props {
  intro: string
  chapters: StoryChapter[]
}

const props = defineProps<Props>()
</script>

<style scoped>
/* Story Section */
.story-section {
  padding: 80px 20px;
  background: var(--darker-bg);
}

.story-content {
  max-width: 800px;
  margin: 0 auto;
}

.story-intro {
  font-size: 1.4rem;
  line-height: 1.8;
  margin-bottom: 50px;
  opacity: 0.9;
  animation: fadeInUp 0.6s ease-out 0.3s both;
  text-align: center;
}

.story-chapter {
  margin-bottom: 60px;
  opacity: 0;
  animation: fadeInUp 0.6s ease-out forwards;
}

.story-chapter h2 {
  font-size: 2rem;
  color: var(--primary-orange);
  margin-bottom: 20px;
  display: flex;
  align-items: center;
  gap: 15px;
}

.chapter-icon {
  font-size: 1.5rem;
}

.story-text {
  font-size: 1.1rem;
  line-height: 1.9;
  opacity: 0.9;
  margin-bottom: 20px;
}

.story-text :deep(strong) {
  color: var(--primary-orange);
  font-weight: 600;
}

.personal-story {
  background: rgba(255, 107, 53, 0.05);
  padding: 30px;
  border-radius: 15px;
  border-left: 4px solid var(--primary-orange);
  font-style: italic;
  margin: 30px 0;
  position: relative;
}

.personal-story::before {
  content: '"';
  position: absolute;
  top: 10px;
  left: 15px;
  font-size: 3rem;
  opacity: 0.3;
  color: var(--primary-orange);
}

/* Animations */
@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
</style>
