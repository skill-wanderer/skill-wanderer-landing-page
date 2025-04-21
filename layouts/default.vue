<template>
  <div class="min-h-screen flex flex-col">
    <header class="bg-orange-500 shadow-sm sticky top-0 z-10 text-white">
      <nav class="container flex justify-between items-center py-4 md:py-6">
        <NuxtLink to="/" class="flex items-center space-x-2 w-1/5">
          <img src="/cropped-skill-wanderer-logo-768x256.webp" alt="Skill Wanderer Logo" class="h-8 md:h-10 w-full object-contain" />
          <span class="text-xl md:text-2xl font-bold text-white">Skill Wanderer</span>
        </NuxtLink>
        

      </nav>
      
      <!-- Mobile Navigation -->
      <div v-if="showMobileMenu" class="md:hidden bg-gray-800 py-4 shadow-inner">
        <div class="container flex flex-col space-y-4">
          <NuxtLink to="https://blog.skill-wanderer.com" class="text-white hover:text-orange-300 transition">Blog</NuxtLink>
          <NuxtLink to="https://dojo.skill-wanderer.com" class="text-white hover:text-orange-300 transition">Dojo</NuxtLink>
          <NuxtLink to="https://hub.skill-wanderer.com" class="text-white hover:text-orange-300 transition opacity-50">Hub (Soon)</NuxtLink>
        </div>
      </div>
    </header>

    <main class="flex-grow">
      <slot />
    </main>

    <footer class="bg-gray-100 py-8">
      <div class="container text-center">
        <p>© {{ new Date().getFullYear() }} Skill Wanderer. All rights reserved.</p>
        <p class="mt-2 text-sm text-gray-600">Making quality education accessible to everyone</p>
      </div>
    </footer>
  </div>
</template>

<script setup>
const showMobileMenu = ref(false);
</script>