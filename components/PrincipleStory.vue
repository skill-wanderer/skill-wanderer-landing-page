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
          
          <div v-else-if="content.type === 'motto-highlight'" class="motto-highlight">
            <h3>{{ content.text }}</h3>
            <p v-if="content.additionalText">{{ content.additionalText }}</p>
          </div>
          
          <div v-else-if="content.type === 'disconnect-examples'" class="disconnect-examples">
            <h3>{{ content.text }}</h3>
            <div class="disconnect-grid">
              <div v-for="(item, itemIndex) in content.items" :key="itemIndex" 
                   class="disconnect-card" :style="{ animationDelay: `${0.1 * (itemIndex + 1)}s` }">
                <div class="disconnect-icon">💻</div>
                <h4>{{ item }}</h4>
                <p>A technically perfect system that users avoided because we never asked what they actually needed.</p>
                <div class="lesson-learned">
                  <strong>Lesson:</strong> Only promise what you can deliver by using it yourself.
                </div>
              </div>
            </div>
          </div>
          
          <div v-else-if="content.type === 'reinforcing-loop'" class="loop-visual-container">
            <h3>{{ content.text }}</h3>
            <div class="loop-visual">
              <div class="loop-circle">
                <div class="loop-node learn">
                  <span class="loop-node-icon">📚</span>
                  <span>Learners Study</span>
                </div>
                <div class="loop-node join">
                  <span class="loop-node-icon">🤝</span>
                  <span>Best Join Team</span>
                </div>
                <div class="loop-node teach">
                  <span class="loop-node-icon">🎯</span>
                  <span>Team Creates Content</span>
                </div>
                <div class="loop-node improve">
                  <span class="loop-node-icon">⚡</span>
                  <span>Platform Improves</span>
                </div>
              </div>
              <div class="loop-center">
                Skill-Wanderer
              </div>
            </div>
            <p v-if="content.additionalText" class="loop-description">{{ content.additionalText }}</p>
          </div>
          
          <div v-else-if="content.type === 'vision-timeline'" class="vision-timeline-container">
            <h3>{{ content.text }}</h3>
            <div class="vision-timeline">
              <div class="vision-line"></div>
              <div v-for="(phase, phaseIndex) in content.timelineItems" :key="phaseIndex" 
                   class="vision-phase" :class="{ current: phaseIndex === 0 }" 
                   :style="{ animationDelay: `${0.2 * (phaseIndex + 1)}s` }">
                <div class="vision-content">
                  <h4>{{ phase.phase }}</h4>
                  <p>{{ phase.description }}</p>
                </div>
                <div class="vision-marker">{{ phase.icon }}</div>
              </div>
            </div>
          </div>
        </template>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
interface StoryContent {
  type: 'text' | 'personal-story' | 'quote' | 'annual-review' | 'motto-highlight' | 'disconnect-examples' | 'reinforcing-loop' | 'vision-timeline'
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

/* Disconnect Examples */
.disconnect-examples {
  margin: 60px 0;
}

.disconnect-examples h3 {
  font-size: 2.5rem;
  color: var(--primary-orange);
  text-align: center;
  margin-bottom: 50px;
}

.disconnect-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  gap: 40px;
  margin-top: 50px;
}

.disconnect-card {
  background: var(--card-bg);
  border-radius: 20px;
  padding: 40px;
  position: relative;
  overflow: hidden;
  transition: all 0.3s ease;
  opacity: 0;
  animation: fadeInUp 0.6s ease-out forwards;
  border: 2px solid rgba(244, 67, 54, 0.2);
}

.disconnect-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 15px 40px rgba(0, 0, 0, 0.2);
}

.disconnect-icon {
  font-size: 3rem;
  margin-bottom: 20px;
  display: block;
}

.disconnect-card h4 {
  color: var(--primary-orange);
  font-size: 1.4rem;
  margin-bottom: 20px;
}

.disconnect-card p {
  opacity: 0.9;
  line-height: 1.7;
  margin-bottom: 20px;
}

.lesson-learned {
  background: rgba(255, 107, 53, 0.1);
  padding: 20px;
  border-radius: 10px;
  border-left: 4px solid var(--primary-orange);
  margin-top: 20px;
}

.lesson-learned strong {
  color: var(--primary-orange);
}

/* Reinforcing Loop */
.loop-visual-container {
  margin: 80px 0;
  text-align: center;
}

.loop-visual-container h3 {
  font-size: 2.5rem;
  color: var(--primary-orange);
  margin-bottom: 40px;
}

.loop-visual {
  position: relative;
  width: 500px;
  height: 500px;
  margin: 60px auto;
}

.loop-circle {
  position: absolute;
  width: 100%;
  height: 100%;
  border: 3px solid var(--primary-orange);
  border-radius: 50%;
  top: 0;
  left: 0;
}

.loop-center {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 140px;
  height: 140px;
  background: var(--primary-orange);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.1rem;
  font-weight: bold;
  color: var(--dark-bg);
  z-index: 10;
  text-align: center;
  line-height: 1.2;
}

.loop-node {
  position: absolute;
  width: 120px;
  height: 120px;
  background: var(--card-bg);
  border: 3px solid var(--primary-orange);
  border-radius: 50%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 8px;
  font-size: 0.85rem;
  text-align: center;
  color: var(--light-text);
  font-weight: 500;
}

.loop-node.learn {
  top: -60px;
  left: 50%;
  transform: translateX(-50%);
}

.loop-node.join {
  top: 50%;
  right: -60px;
  transform: translateY(-50%);
}

.loop-node.teach {
  bottom: -60px;
  left: 50%;
  transform: translateX(-50%);
}

.loop-node.improve {
  top: 50%;
  left: -60px;
  transform: translateY(-50%);
}

.loop-node-icon {
  font-size: 2.2rem;
  display: block;
}

.loop-node span:last-child {
  font-size: 0.75rem;
  line-height: 1.1;
  max-width: 80px;
}

.loop-description {
  font-size: 1.1rem;
  opacity: 0.9;
  margin-top: 40px;
  max-width: 600px;
  margin-left: auto;
  margin-right: auto;
}

/* Add subtle rotation animation to the whole loop */
.loop-visual {
  animation: slowRotate 30s linear infinite;
}

@keyframes slowRotate {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
}

/* Responsive adjustments */
@media (max-width: 768px) {
  .loop-visual {
    width: 350px;
    height: 350px;
  }
  
  .loop-center {
    width: 100px;
    height: 100px;
    font-size: 0.9rem;
  }
  
  .loop-node {
    width: 90px;
    height: 90px;
    font-size: 0.75rem;
  }
  
  .loop-node.learn {
    top: -45px;
  }
  
  .loop-node.join {
    right: -45px;
  }
  
  .loop-node.teach {
    bottom: -45px;
  }
  
  .loop-node.improve {
    left: -45px;
  }
  
  .loop-node-icon {
    font-size: 1.8rem;
  }
  
  .loop-node span:last-child {
    font-size: 0.7rem;
    max-width: 60px;
  }
}

/* Vision Timeline */
.vision-timeline-container {
  margin: 80px 0;
}

.vision-timeline-container h3 {
  font-size: 2.5rem;
  color: var(--primary-orange);
  text-align: center;
  margin-bottom: 50px;
}

.vision-timeline {
  position: relative;
  max-width: 800px;
  margin: 0 auto;
}

.vision-line {
  position: absolute;
  left: 50%;
  top: 0;
  bottom: 0;
  width: 3px;
  background: linear-gradient(to bottom, var(--primary-orange), var(--pathway-purple));
  transform: translateX(-50%);
  z-index: 1;
}

.vision-phase {
  display: flex;
  align-items: center;
  margin-bottom: 80px;
  position: relative;
  opacity: 0;
  animation: fadeInUp 0.6s ease-out forwards;
}

.vision-phase:nth-child(even) {
  flex-direction: row-reverse;
}

.vision-phase:nth-child(even) .vision-content {
  text-align: right;
}

.vision-content {
  flex: 1;
  padding: 0 40px;
}

.vision-content h4 {
  color: white;
  margin-bottom: 10px;
  font-size: 1.3rem;
}

.vision-content p {
  opacity: 0.8;
  line-height: 1.7;
}

.vision-marker {
  width: 80px;
  height: 80px;
  background: var(--card-bg);
  border: 3px solid var(--primary-orange);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 32px;
  position: relative;
  z-index: 2;
}

.vision-phase.current .vision-marker {
  background: rgba(255, 107, 53, 0.1);
  animation: pulse 2s ease-in-out infinite;
}

@keyframes pulse {
  0%, 100% {
    box-shadow: 0 0 0 0 rgba(255, 107, 53, 0.4);
  }
  50% {
    box-shadow: 0 0 0 20px rgba(255, 107, 53, 0);
  }
}
</style>
