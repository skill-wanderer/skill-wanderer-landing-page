<template>
  <div class="min-h-screen flex flex-col">
    <!-- Navigation -->
    <TheNavigation />

    <main class="flex-grow">
      <slot />
    </main>

    <!-- Subscribe Section -->
    <TheSubscribe />

    <!-- Footer -->
    <TheFooter />
  </div>
</template>

<script setup lang="ts">
// No longer need currentYear since TheFooter handles its own copyright
</script>

<style scoped>
/* Layout-specific styles can be added here if needed */
</style>