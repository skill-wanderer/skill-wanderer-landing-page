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
        </h2>        <template v-for="(content, contentIndex) in chapter.content" :key="contentIndex">
          <p v-if="content.type === 'text'" class="story-text" v-html="content.text"></p>
          
          <div v-else-if="content.type === 'personal-story'" class="personal-story">
            {{ content.text }}
          </div>
          
          <div v-else-if="content.type === 'quote'" class="japanese-quote">
            <p>"{{ content.text }}"</p>
            <p v-if="content.author" class="author">- {{ content.author }}</p>
          </div>
          
          <div v-else-if="content.type === 'annual-review'" class="annual-review">
            <p class="boss-quote">"{{ content.text }}"</p>
            <p v-if="content.additionalText">{{ content.additionalText }}</p>
            <p v-if="content.author" class="boss-quote">"{{ content.author }}"</p>
          </div>

          <div v-else-if="content.type === 'integrity-notice'" class="integrity-notice">
            <h3 v-if="content.additionalText">{{ content.additionalText }}</h3>
            <p v-html="content.text"></p>
          </div>          <div v-else-if="content.type === 'motto-highlight'" class="motto-highlight">
            <h3>{{ content.text }}</h3>
            <p v-if="content.additionalText">{{ content.additionalText }}</p>
          </div>          <div v-else-if="content.type === 'realization-highlight'" class="realization-highlight">
            <p v-html="content.text"></p>
          </div>

          <div v-else-if="content.type === 'element-list'" class="element-list-container">
            <ul class="element-list">
              <li v-for="(item, itemIndex) in content.items" :key="itemIndex" v-html="item"></li>
            </ul>
          </div>

          <div v-else-if="content.type === 'challenge-highlight'" class="challenge-highlight">
            <h3 v-if="content.additionalText">{{ content.additionalText }}</h3>
            <p v-html="content.text"></p>
          </div>
        </template>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
interface StoryContent {
  type: 'text' | 'personal-story' | 'quote' | 'annual-review' | 'motto-highlight' | 'integrity-notice' | 'realization-highlight' | 'element-list' | 'challenge-highlight'
  text: string
  author?: string
  additionalText?: string
  items?: string[]
  timelineItems?: Array<{
    phase: string
    description: string
    icon: string
  }>
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

.japanese-quote {
  background: linear-gradient(135deg, rgba(255, 68, 68, 0.05) 0%, rgba(255, 107, 53, 0.05) 100%);
  padding: 40px;
  border-radius: 20px;
  text-align: center;
  margin: 40px 0;
  position: relative;
  border: 1px solid rgba(255, 107, 53, 0.2);
}

.japanese-quote p {
  font-size: 1.4rem;
  font-style: italic;
  color: var(--primary-orange);
  line-height: 1.8;
  margin-bottom: 20px;
}

.japanese-quote .author {
  font-size: 1rem;
  opacity: 0.8;
}

.annual-review {
  background: linear-gradient(135deg, rgba(156, 39, 176, 0.05) 0%, rgba(255, 107, 53, 0.05) 100%);
  padding: 40px;
  border-radius: 20px;
  margin: 40px 0;
  border: 1px solid rgba(156, 39, 176, 0.2);
  position: relative;
  overflow: hidden;
}

.annual-review::before {
  content: '📋';
  position: absolute;
  top: 20px;
  right: 20px;
  font-size: 3rem;
  opacity: 0.1;
}

.annual-review p {
  font-size: 1.2rem;
  line-height: 1.8;
  color: var(--light-text);
  margin-bottom: 20px;
}

.annual-review .boss-quote {
  color: var(--wisdom-purple);
  font-style: italic;
  font-weight: 500;
}

.integrity-notice {
  background: linear-gradient(135deg, rgba(33, 150, 243, 0.1), rgba(255, 107, 53, 0.05));
  padding: 30px;
  border-radius: 20px;
  border: 1px solid rgba(33, 150, 243, 0.3);
  margin: 40px 0;
  text-align: center;
}

.integrity-notice h3 {
  color: #2196F3;
  margin-bottom: 15px;
  font-size: 1.4rem;
}

.integrity-notice p {
  font-size: 1.1rem;
  line-height: 1.8;
  opacity: 0.9;
}

.integrity-notice :deep(strong) {
  color: var(--primary-orange);
  font-weight: 600;
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

/* Motto Highlight */
.motto-highlight {
  background: linear-gradient(135deg, rgba(156, 39, 176, 0.1), rgba(255, 107, 53, 0.1));
  padding: 30px;
  border-radius: 20px;
  border: 1px solid rgba(156, 39, 176, 0.3);
  text-align: center;
  margin: 40px 0;
}

.motto-highlight h3 {
  color: var(--pathway-purple);
  font-size: 1.8rem;
  margin-bottom: 10px;
}

.motto-highlight p {
  font-size: 1.1rem;
  opacity: 0.9;
}

/* Realization Highlight */
.realization-highlight {
  background: linear-gradient(135deg, rgba(156, 39, 176, 0.1), rgba(255, 107, 53, 0.1));
  padding: 30px;
  border-radius: 20px;
  border: 1px solid rgba(156, 39, 176, 0.3);
  text-align: center;
  margin: 40px 0;
  position: relative;
  overflow: hidden;
}

.realization-highlight::before {
  content: '💡';
  position: absolute;
  top: 15px;
  right: 20px;
  font-size: 2rem;
  opacity: 0.3;
}

.realization-highlight p {
  font-size: 1.3rem;
  color: var(--primary-orange);
  font-weight: 500;
  line-height: 1.6;
}

.realization-highlight :deep(strong) {
  color: var(--primary-orange);
  font-weight: 700;
}

/* Element List */
.element-list-container {
  background: var(--card-bg);
  border: 1px solid rgba(255, 107, 53, 0.2);
  border-radius: 20px;
  padding: 40px;
  margin: 30px 0;
}

.element-list {
  list-style: none;
  padding: 0;
  margin: 0;
}

.element-list li {
  padding: 15px 0;
  padding-left: 40px;
  position: relative;
  opacity: 0.9;
  font-size: 1.1rem;
  line-height: 1.7;
}

.element-list li::before {
  content: '✨';
  position: absolute;
  left: 0;
  font-size: 1.5rem;
}

.element-list li :deep(strong) {
  color: var(--primary-orange);
  font-weight: 600;
}

/* Challenge Highlight */
.challenge-highlight {
  background: linear-gradient(135deg, rgba(255, 193, 7, 0.1), rgba(255, 107, 53, 0.1));
  padding: 30px;
  border-radius: 20px;
  border: 1px solid rgba(255, 193, 7, 0.3);
  margin: 40px 0;
}

.challenge-highlight h3 {
  color: var(--premium-gold);
  margin-bottom: 15px;
  font-size: 1.4rem;
}

.challenge-highlight p {
  font-size: 1.1rem;
  line-height: 1.8;
  opacity: 0.9;
}
</style>
