<template>
  <div class="min-h-screen flex flex-col">
    <!-- Navigation -->
    <TheNavigation />

    <main class="flex-grow">
      <slot />
    </main>

    <!-- Subscribe Section — shown only on homepage and contact -->
    <TheSubscribe v-if="showSubscribe" />

    <!-- Footer -->
    <TheFooter />

    <!-- Pathfinder Chatbot (available on all pages) -->
    <ClientOnly>
      <PathfinderChat />
    </ClientOnly>

    <!-- Cookie Banner -->
    <ClientOnly>
      <CookieBanner />
    </ClientOnly>
  </div>
</template>

<script setup lang="ts">
const route = useRoute()

const showSubscribe = computed(() => {
  const path = route.path
  return path === '/' || path === '/contact'
})
</script>

<style scoped>
/* Layout-specific styles can be added here if needed */
</style>