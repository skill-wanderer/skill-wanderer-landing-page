<template>
  <!-- Floating admiral FAB -->
  <button
    v-if="!isOpen"
    aria-label="Open Admiral Orion command console"
    class="pathfinder-fab"
    @click="isOpen = true"
  >
    <!-- Shield / star badge icon -->
    <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none"
      stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" fill="currentColor" opacity="0.15" />
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
      <polygon points="12 8 13.09 10.26 15.64 10.64 13.82 12.41 14.18 14.96 12 13.77 9.82 14.96 10.18 12.41 8.36 10.64 10.91 10.26 12 8" fill="currentColor" opacity="0.6" />
    </svg>
    <span class="pathfinder-fab-ring" />
  </button>

  <!-- Chat panel -->
  <Transition name="pathfinder-slide">
    <div v-if="isOpen" class="pathfinder-panel">
      <!-- Starfield canvas -->
      <div class="pathfinder-stars" aria-hidden="true">
        <span v-for="n in 40" :key="n" class="pathfinder-star" />
      </div>

      <!-- Header -->
      <div class="pathfinder-header">
        <div class="flex items-center gap-2">
          <!-- Admiral shield icon -->
          <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none"
            stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" class="pathfinder-planet-icon">
            <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
            <polygon points="12 8 13.09 10.26 15.64 10.64 13.82 12.41 14.18 14.96 12 13.77 9.82 14.96 10.18 12.41 8.36 10.64 10.91 10.26 12 8" fill="currentColor" opacity="0.5" />
          </svg>
          <div class="flex flex-col leading-tight">
            <span class="font-bold text-sm pathfinder-title-text">Admiral Orion</span>
            <span class="text-[10px] opacity-50 tracking-wide">FLEET COMMANDER</span>
          </div>
        </div>
        <div class="flex items-center gap-1">
          <button
            aria-label="New mission"
            class="pathfinder-header-btn"
            title="New mission"
            @click="handleReset"
          >
            <!-- Compass reset -->
            <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24" fill="none"
              stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <polyline points="1 4 1 10 7 10" />
              <path d="M3.51 15a9 9 0 1 0 2.13-9.36L1 10" />
            </svg>
          </button>
          <button
            aria-label="Close command console"
            class="pathfinder-header-btn"
            @click="closePanel"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24" fill="none"
              stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <line x1="18" y1="6" x2="6" y2="18" />
              <line x1="6" y1="6" x2="18" y2="18" />
            </svg>
          </button>
        </div>
      </div>

      <!-- Messages -->
      <div ref="messagesContainer" class="pathfinder-messages">
        <!-- Welcome screen -->
        <div v-if="history.length === 0" class="pathfinder-welcome">
          <div class="pathfinder-welcome-planet" aria-hidden="true">
            <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none"
              stroke="currentColor" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round">
              <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
              <polygon points="12 7 13.45 10.18 16.91 10.64 14.45 13.05 14.91 16.5 12 14.93 9.09 16.5 9.55 13.05 7.09 10.64 10.55 10.18 12 7" fill="currentColor" opacity="0.5" />
              <circle cx="18" cy="6" r="1" fill="currentColor" opacity="0.6" />
              <circle cx="6" cy="18" r="0.5" fill="currentColor" opacity="0.4" />
            </svg>
          </div>
          <p class="text-sm font-semibold mb-1">Welcome aboard, Cadet!</p>
          <p class="text-xs opacity-60 leading-relaxed">Admiral Orion at your command. Report your inquiries about our mission, principles, learning paths, and fleet operations.</p>
          <div class="pathfinder-suggestions">
            <button class="pathfinder-suggestion" @click="askSuggestion('What is Skill-Wanderer?')">Mission Briefing</button>
            <button class="pathfinder-suggestion" @click="askSuggestion('What are the 12 principles?')">The 12 Directives</button>
            <button class="pathfinder-suggestion" @click="askSuggestion('How do learning paths work?')">Navigation Routes</button>
          </div>
        </div>

        <div
          v-for="(msg, i) in history"
          :key="i"
          :class="['pathfinder-msg', msg.role === 'user' ? 'pathfinder-msg-user' : 'pathfinder-msg-assistant']"
        >
          <!-- Admiral avatar -->
          <div v-if="msg.role === 'assistant'" class="pathfinder-avatar" aria-hidden="true">
            <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none"
              stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
            </svg>
          </div>
          <div class="pathfinder-bubble" v-html="formatMessage(getDisplayedContent(msg, i))" />
        </div>

        <!-- Sources -->
        <div v-if="lastSources.length > 0 && revealedSources" class="pathfinder-sources pathfinder-fade-in">
          <p class="text-[10px] uppercase tracking-wider opacity-40 mb-1">Mission Intel</p>
          <a
            v-for="(src, i) in lastSources"
            :key="i"
            :href="src.url"
            target="_blank"
            rel="noopener noreferrer"
            class="pathfinder-source-link"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="10" height="10" viewBox="0 0 24 24" fill="none"
              stroke="currentColor" stroke-width="2" class="inline mr-1 opacity-60">
              <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
            </svg>
            {{ src.title || src.url }}
          </a>
        </div>

        <!-- Loading indicator -->
        <div v-if="loading" class="pathfinder-msg pathfinder-msg-assistant">
          <div class="pathfinder-avatar" aria-hidden="true">
            <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none"
              stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
            </svg>
          </div>
          <div class="pathfinder-bubble pathfinder-typing">
            <span /><span /><span />
          </div>
        </div>

        <!-- Clear chat button -->
        <div v-if="history.length > 0 && !loading" class="pathfinder-clear-chat">
          <button class="pathfinder-clear-btn" @click="handleReset">
            <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none"
              stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <polyline points="1 4 1 10 7 10" />
              <path d="M3.51 15a9 9 0 1 0 2.13-9.36L1 10" />
            </svg>
            Clear bridge log
          </button>
        </div>
      </div>

      <!-- Error -->
      <div v-if="error" class="pathfinder-error">
        {{ error }}
      </div>

      <div class="pathfinder-mobile-actions">
        <button
          type="button"
          class="pathfinder-mobile-close"
          aria-label="Close command console"
          @click="closePanel"
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24" fill="none"
            stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <line x1="18" y1="6" x2="6" y2="18" />
            <line x1="6" y1="6" x2="18" y2="18" />
          </svg>
          <span>Close chat</span>
        </button>
      </div>

      <!-- Privacy notice -->
      <div class="pathfinder-privacy-notice">
        We may store and analyze anonymized conversations to improve the system. You can request deletion at any time. Please avoid sharing personal or sensitive information.
      </div>

      <!-- Input -->
      <form class="pathfinder-input-bar" @submit.prevent="handleSend">
        <input
          ref="inputEl"
          v-model="question"
          type="text"
          placeholder="State your inquiry, Cadet…"
          maxlength="2000"
          :disabled="loading"
          class="pathfinder-input"
          @keydown.enter.exact.prevent="handleSend"
        />
        <button
          type="submit"
          :disabled="!question.trim() || loading"
          class="pathfinder-send-btn"
          aria-label="Transmit"
        >
          <!-- Rocket icon -->
          <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none"
            stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z" />
            <path d="M12 15l-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z" />
            <path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0" />
            <path d="M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5" />
          </svg>
        </button>
      </form>
    </div>
  </Transition>
</template>

<script setup lang="ts">
const { history, loading, error, sendMessage, resetChat } = usePathfinder()

const isOpen = ref(false)
const question = ref('')
const messagesContainer = ref<HTMLElement | null>(null)
const inputEl = ref<HTMLInputElement | null>(null)

// Typewriter effect state
const typingIndex = ref<number | null>(null) // which message index is currently typing
const typingPos = ref(0) // current character position in the typing message
const TYPING_SPEED = 12 // ms per character
let typingTimer: ReturnType<typeof setTimeout> | null = null

interface Source {
  title: string
  url: string
  chunk_index: number
  total_chunks: number
  score: number
}

const lastSources = ref<Source[]>([]);
const revealedSources = ref(false)

function getDisplayedContent(msg: { role: string; content: string }, index: number): string {
  if (msg.role === 'user') return msg.content
  if (typingIndex.value === index) {
    return msg.content.slice(0, typingPos.value)
  }
  // Already finished typing or loaded from session
  if (typingIndex.value === null || index < typingIndex.value) {
    return msg.content
  }
  // Future messages (shouldn't happen, but safety)
  return msg.content
}

function startTypewriter(messageIndex: number, fullText: string) {
  stopTypewriter()
  typingIndex.value = messageIndex
  typingPos.value = 0
  revealedSources.value = false

  function tick() {
    if (typingPos.value < fullText.length) {
      // Advance by a small chunk for speed
      const step = Math.min(3, fullText.length - typingPos.value)
      typingPos.value += step
      scrollToBottom()
      typingTimer = setTimeout(tick, TYPING_SPEED)
    } else {
      // Done typing
      typingIndex.value = null
      revealedSources.value = true
      scrollToBottom()
    }
  }
  tick()
}

function stopTypewriter() {
  if (typingTimer) {
    clearTimeout(typingTimer)
    typingTimer = null
  }
}

function formatMessage(content: string): string {
  // Basic markdown-like: bold, links, newlines
  return content
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
    .replace(/\[(.*?)\]\((https?:\/\/.*?)\)/g, '<a href="$2" target="_blank" rel="noopener noreferrer" class="underline">$1</a>')
    .replace(/\n/g, '<br/>')
}

async function handleSend() {
  const q = question.value.trim()
  if (!q || loading.value) return

  question.value = ''
  lastSources.value = []

  const res = await sendMessage(q)
  if (res) {
    lastSources.value = res.sources || []
    // Start typewriter on the newly added assistant message (last in history)
    const assistantIdx = history.value.length - 1
    startTypewriter(assistantIdx, history.value[assistantIdx].content)
  }

  await nextTick()
  scrollToBottom()
}

function handleReset() {
  stopTypewriter()
  resetChat()
  lastSources.value = []
  revealedSources.value = false
}

function closePanel() {
  isOpen.value = false
}

function askSuggestion(text: string) {
  question.value = text
  handleSend()
}

function scrollToBottom() {
  if (messagesContainer.value) {
    messagesContainer.value.scrollTop = messagesContainer.value.scrollHeight
  }
}

watch(isOpen, async (val) => {
  if (val) {
    await nextTick()
    inputEl.value?.focus()
    scrollToBottom()
  }
})

watch(() => history.value.length, async () => {
  await nextTick()
  scrollToBottom()
})

// Listen for external open events (e.g. from the Admiral Orion intro page)
function handleExternalOpen(e: Event) {
  isOpen.value = true
  const detail = (e as CustomEvent).detail
  if (detail?.question) {
    nextTick(() => {
      question.value = detail.question
      handleSend()
    })
  }
}

onMounted(() => {
  window.addEventListener('open-admiral-orion', handleExternalOpen)
})

onUnmounted(() => {
  window.removeEventListener('open-admiral-orion', handleExternalOpen)
})
</script>

<style scoped>
/* =============================================
   ADMIRAL ORION COMMAND THEME
   ============================================= */

/* Floating action button — admiral shield */
.pathfinder-fab {
  position: fixed;
  bottom: 1.5rem;
  right: 1.5rem;
  z-index: 9998;
  width: 60px;
  height: 60px;
  border-radius: 50%;
  background: radial-gradient(circle at 35% 35%, #FF8C42, #FF6B35 50%, #E85D25);
  color: #fff;
  border: 2px solid rgba(255, 217, 61, 0.3);
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow:
    0 4px 24px rgba(255, 107, 53, 0.45),
    0 0 0 0 rgba(255, 107, 53, 0.3);
  transition: transform 0.25s, box-shadow 0.25s;
  animation: pathfinder-pulse 3s ease-in-out infinite;
}
.pathfinder-fab:hover {
  transform: scale(1.1);
  box-shadow:
    0 6px 32px rgba(255, 107, 53, 0.6),
    0 0 20px rgba(255, 217, 61, 0.2);
  animation: none;
}
.pathfinder-fab-ring {
  position: absolute;
  inset: -4px;
  border-radius: 50%;
  border: 1.5px dashed rgba(255, 217, 61, 0.25);
  animation: pathfinder-spin 12s linear infinite;
  pointer-events: none;
}
@keyframes pathfinder-pulse {
  0%, 100% { box-shadow: 0 4px 24px rgba(255, 107, 53, 0.45), 0 0 0 0 rgba(255, 107, 53, 0.3); }
  50% { box-shadow: 0 4px 24px rgba(255, 107, 53, 0.45), 0 0 0 10px rgba(255, 107, 53, 0); }
}
@keyframes pathfinder-spin {
  from { transform: rotate(0deg); }
  to { transform: rotate(360deg); }
}

/* Chat panel */
.pathfinder-panel {
  position: fixed;
  bottom: 1.5rem;
  right: 1.5rem;
  z-index: 9999;
  width: 390px;
  max-width: calc(100vw - 2rem);
  height: 540px;
  max-height: calc(100vh - 3rem);
  background: #0d1117;
  border: 1px solid rgba(255, 217, 61, 0.12);
  border-radius: 18px;
  display: flex;
  flex-direction: column;
  overflow: hidden;
  box-shadow:
    0 8px 48px rgba(0, 0, 0, 0.6),
    0 0 1px rgba(255, 107, 53, 0.3),
    inset 0 1px 0 rgba(255, 255, 255, 0.04);
}

/* Starfield background */
.pathfinder-stars {
  position: absolute;
  inset: 0;
  overflow: hidden;
  pointer-events: none;
  z-index: 0;
}
.pathfinder-star {
  position: absolute;
  width: 2px;
  height: 2px;
  background: #fff;
  border-radius: 50%;
  opacity: 0;
  animation: pathfinder-twinkle 4s ease-in-out infinite;
}
.pathfinder-star:nth-child(odd) { animation-duration: 3s; }
.pathfinder-star:nth-child(3n) { animation-duration: 5s; width: 1px; height: 1px; }
.pathfinder-star:nth-child(1)  { top: 8%; left: 12%; animation-delay: 0s; }
.pathfinder-star:nth-child(2)  { top: 15%; left: 68%; animation-delay: 0.4s; }
.pathfinder-star:nth-child(3)  { top: 22%; left: 35%; animation-delay: 1.1s; }
.pathfinder-star:nth-child(4)  { top: 30%; left: 82%; animation-delay: 0.7s; }
.pathfinder-star:nth-child(5)  { top: 38%; left: 20%; animation-delay: 2.0s; }
.pathfinder-star:nth-child(6)  { top: 44%; left: 55%; animation-delay: 1.5s; }
.pathfinder-star:nth-child(7)  { top: 52%; left: 90%; animation-delay: 0.3s; }
.pathfinder-star:nth-child(8)  { top: 58%; left: 10%; animation-delay: 1.8s; }
.pathfinder-star:nth-child(9)  { top: 65%; left: 45%; animation-delay: 2.5s; }
.pathfinder-star:nth-child(10) { top: 72%; left: 75%; animation-delay: 0.9s; }
.pathfinder-star:nth-child(11) { top: 78%; left: 30%; animation-delay: 3.0s; }
.pathfinder-star:nth-child(12) { top: 85%; left: 60%; animation-delay: 1.3s; }
.pathfinder-star:nth-child(13) { top: 10%; left: 50%; animation-delay: 2.2s; }
.pathfinder-star:nth-child(14) { top: 25%; left: 5%; animation-delay: 0.6s; }
.pathfinder-star:nth-child(15) { top: 35%; left: 95%; animation-delay: 1.9s; }
.pathfinder-star:nth-child(16) { top: 48%; left: 25%; animation-delay: 2.8s; }
.pathfinder-star:nth-child(17) { top: 55%; left: 72%; animation-delay: 0.2s; }
.pathfinder-star:nth-child(18) { top: 62%; left: 88%; animation-delay: 1.6s; }
.pathfinder-star:nth-child(19) { top: 70%; left: 15%; animation-delay: 3.2s; }
.pathfinder-star:nth-child(20) { top: 80%; left: 42%; animation-delay: 0.8s; }
.pathfinder-star:nth-child(n+21) { display: none; }
@keyframes pathfinder-twinkle {
  0%, 100% { opacity: 0; }
  50% { opacity: 0.6; }
}

/* Header */
.pathfinder-header {
  position: relative;
  z-index: 1;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0.75rem 1rem;
  background: linear-gradient(135deg, rgba(255, 107, 53, 0.12) 0%, rgba(13, 17, 23, 0.95) 100%);
  border-bottom: 1px solid rgba(255, 217, 61, 0.08);
  color: #e0e0e0;
}
.pathfinder-planet-icon {
  color: #FF8C42;
  animation: pathfinder-orbit-bob 6s ease-in-out infinite;
}
@keyframes pathfinder-orbit-bob {
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-2px); }
}
.pathfinder-title-text {
  background: linear-gradient(135deg, #FFD93D, #FF6B35);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}
.pathfinder-header-btn {
  background: none;
  border: none;
  color: rgba(255, 255, 255, 0.45);
  cursor: pointer;
  padding: 5px;
  border-radius: 6px;
  transition: color 0.15s, background 0.15s;
}
.pathfinder-header-btn:hover {
  color: #FFD93D;
  background: rgba(255, 217, 61, 0.1);
}

/* Messages area */
.pathfinder-messages {
  position: relative;
  z-index: 1;
  flex: 1;
  overflow-y: auto;
  padding: 1rem;
  display: flex;
  flex-direction: column;
  gap: 0.625rem;
}
.pathfinder-messages::-webkit-scrollbar {
  width: 4px;
}
.pathfinder-messages::-webkit-scrollbar-thumb {
  background: rgba(255, 107, 53, 0.2);
  border-radius: 4px;
}

/* Welcome */
.pathfinder-welcome {
  text-align: center;
  padding: 1.5rem 1rem 1rem;
  color: #b0b0b0;
}
.pathfinder-welcome-planet {
  color: #FF8C42;
  margin-bottom: 0.75rem;
  animation: pathfinder-orbit-bob 5s ease-in-out infinite;
}
.pathfinder-suggestions {
  display: flex;
  flex-wrap: wrap;
  gap: 6px;
  justify-content: center;
  margin-top: 1rem;
}
.pathfinder-suggestion {
  background: rgba(255, 107, 53, 0.08);
  border: 1px solid rgba(255, 107, 53, 0.2);
  color: #FF8C42;
  font-size: 0.6875rem;
  padding: 5px 10px;
  border-radius: 20px;
  cursor: pointer;
  transition: background 0.15s, border-color 0.15s;
}
.pathfinder-suggestion:hover {
  background: rgba(255, 107, 53, 0.18);
  border-color: rgba(255, 107, 53, 0.4);
}

/* Message rows */
.pathfinder-msg {
  display: flex;
  align-items: flex-start;
  gap: 6px;
}
.pathfinder-msg-user {
  justify-content: flex-end;
}
.pathfinder-msg-assistant {
  justify-content: flex-start;
}

/* Assistant avatar */
.pathfinder-avatar {
  flex-shrink: 0;
  width: 24px;
  height: 24px;
  border-radius: 50%;
  background: rgba(255, 107, 53, 0.15);
  display: flex;
  align-items: center;
  justify-content: center;
  color: #FF8C42;
  margin-top: 2px;
}

/* Bubbles */
.pathfinder-bubble {
  max-width: 82%;
  padding: 0.5rem 0.75rem;
  border-radius: 14px;
  font-size: 0.8125rem;
  line-height: 1.55;
  word-break: break-word;
}
.pathfinder-msg-user .pathfinder-bubble {
  background: linear-gradient(135deg, #FF6B35, #E85D25);
  color: #fff;
  border-bottom-right-radius: 4px;
  box-shadow: 0 2px 8px rgba(255, 107, 53, 0.2);
}
.pathfinder-msg-assistant .pathfinder-bubble {
  background: rgba(255, 255, 255, 0.06);
  border: 1px solid rgba(255, 255, 255, 0.06);
  color: #d0d0d0;
  border-bottom-left-radius: 4px;
}
.pathfinder-msg-assistant .pathfinder-bubble :deep(a) {
  color: #FFD93D;
}

/* Typing animation */
.pathfinder-typing {
  display: flex;
  gap: 5px;
  align-items: center;
  padding: 0.75rem;
}
.pathfinder-typing span {
  width: 6px;
  height: 6px;
  background: #FF8C42;
  border-radius: 50%;
  animation: pathfinder-dot 1.4s infinite both;
}
.pathfinder-typing span:nth-child(2) { animation-delay: 0.2s; }
.pathfinder-typing span:nth-child(3) { animation-delay: 0.4s; }
@keyframes pathfinder-dot {
  0%, 80%, 100% { opacity: 0.2; transform: scale(0.7); }
  40% { opacity: 1; transform: scale(1); }
}

/* Sources */
.pathfinder-sources {
  padding-left: 2rem;
}
.pathfinder-fade-in {
  animation: pathfinder-fade-in 0.4s ease forwards;
}
@keyframes pathfinder-fade-in {
  from { opacity: 0; transform: translateY(4px); }
  to { opacity: 1; transform: translateY(0); }
}

/* Clear chat */
.pathfinder-clear-chat {
  display: flex;
  justify-content: center;
  padding-top: 0.5rem;
}
.pathfinder-clear-btn {
  display: flex;
  align-items: center;
  gap: 5px;
  background: rgba(255, 107, 53, 0.08);
  border: 1px solid rgba(255, 107, 53, 0.2);
  color: #FF8C42;
  font-size: 0.6875rem;
  padding: 5px 12px;
  border-radius: 20px;
  cursor: pointer;
  transition: background 0.15s, border-color 0.15s;
}
.pathfinder-clear-btn:hover {
  background: rgba(255, 107, 53, 0.18);
  border-color: rgba(255, 107, 53, 0.4);
}
.pathfinder-source-link {
  display: block;
  font-size: 0.6875rem;
  color: #FFD93D;
  opacity: 0.7;
  text-decoration: none;
  margin-bottom: 3px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  transition: opacity 0.15s;
}
.pathfinder-source-link:hover {
  opacity: 1;
  text-decoration: underline;
}

/* Error */
.pathfinder-error {
  position: relative;
  z-index: 1;
  padding: 0.5rem 1rem;
  font-size: 0.75rem;
  color: #ff6b6b;
  background: rgba(255, 107, 107, 0.06);
  border-top: 1px solid rgba(255, 107, 107, 0.15);
}

.pathfinder-mobile-actions {
  display: none;
  position: relative;
  z-index: 1;
  padding: 0 0.75rem 0.625rem;
  background: rgba(13, 17, 23, 0.95);
}

.pathfinder-mobile-close {
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  min-height: 44px;
  border-radius: 12px;
  border: 1px solid rgba(255, 255, 255, 0.1);
  background: rgba(255, 255, 255, 0.05);
  color: #e0e0e0;
  font-size: 0.8125rem;
  font-weight: 600;
  letter-spacing: 0.02em;
  transition: border-color 0.15s, background 0.15s, color 0.15s;
}

.pathfinder-mobile-close:hover {
  color: #FFD93D;
  background: rgba(255, 217, 61, 0.08);
  border-color: rgba(255, 217, 61, 0.24);
}

/* Privacy notice */
.pathfinder-privacy-notice {
  position: relative;
  z-index: 1;
  padding: 0.375rem 0.75rem;
  font-size: 0.625rem;
  line-height: 1.4;
  color: rgba(255, 255, 255, 0.4);
  background: rgba(13, 17, 23, 0.95);
  border-top: 1px solid rgba(255, 255, 255, 0.04);
  text-align: center;
}

/* Input bar */
.pathfinder-input-bar {
  position: relative;
  z-index: 1;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.625rem 0.75rem;
  border-top: 1px solid rgba(255, 217, 61, 0.08);
  background: rgba(13, 17, 23, 0.95);
}
.pathfinder-input {
  flex: 1;
  background: rgba(255, 255, 255, 0.04);
  border: 1px solid rgba(255, 255, 255, 0.08);
  border-radius: 10px;
  padding: 0.5rem 0.75rem;
  font-size: 0.8125rem;
  color: #e0e0e0;
  outline: none;
  transition: border-color 0.2s, box-shadow 0.2s;
}
.pathfinder-input::placeholder {
  color: #555;
  font-style: italic;
}
.pathfinder-input:focus {
  border-color: rgba(255, 107, 53, 0.4);
  box-shadow: 0 0 0 2px rgba(255, 107, 53, 0.08);
}
.pathfinder-send-btn {
  background: linear-gradient(135deg, #FF6B35, #E85D25);
  color: #fff;
  border: none;
  border-radius: 10px;
  width: 38px;
  height: 38px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: transform 0.15s, box-shadow 0.15s;
}
.pathfinder-send-btn:disabled {
  opacity: 0.3;
  cursor: not-allowed;
  transform: none;
}
.pathfinder-send-btn:not(:disabled):hover {
  transform: translateY(-1px);
  box-shadow: 0 4px 12px rgba(255, 107, 53, 0.35);
}

/* Slide transition */
.pathfinder-slide-enter-active,
.pathfinder-slide-leave-active {
  transition: opacity 0.3s ease, transform 0.3s ease;
}
.pathfinder-slide-enter-from,
.pathfinder-slide-leave-to {
  opacity: 0;
  transform: translateY(24px) scale(0.92);
}

/* Mobile responsive */
@media (max-width: 480px) {
  .pathfinder-panel {
    bottom: 0;
    right: 0;
    width: 100vw;
    height: 100vh;
    max-width: 100vw;
    max-height: 100vh;
    border-radius: 0;
  }

  .pathfinder-header-btn {
    min-width: 40px;
    min-height: 40px;
    display: inline-flex;
    align-items: center;
    justify-content: center;
  }

  .pathfinder-mobile-actions {
    display: block;
  }

  .pathfinder-input-bar {
    padding-bottom: calc(0.625rem + env(safe-area-inset-bottom, 0px));
  }

  .pathfinder-fab {
    bottom: 1rem;
    right: 1rem;
  }
}
</style>
