<template>
  <div class="min-h-screen flex flex-col">
    <!-- Navigation -->
    <TheNavigation />

    <main class="flex-grow">
      <slot />
    </main>

    <!-- Subscribe Section, with the Help the Mission button below it -->
    <TheSubscribe />

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

    <!-- Email Chooser: mailto links open this, since many computers have no mail app set up -->
    <ClientOnly>
      <EmailChooser />
    </ClientOnly>
  </div>
</template>

<style scoped>
/* Layout-specific styles can be added here if needed */
</style>