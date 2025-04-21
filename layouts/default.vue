<template>
  <div class="min-h-screen flex flex-col">
    <header class="bg-white shadow-sm sticky top-0 z-10">
      <nav class="container flex justify-between items-center py-4 md:py-6">
        <NuxtLink to="/" class="text-xl md:text-2xl font-bold text-primary">Skill Wanderer</NuxtLink>
        
        <!-- Mobile Menu Button -->
        <button @click="showMobileMenu = !showMobileMenu" class="md:hidden">
          <span class="block w-6 h-px mb-1 bg-gray-900"></span>
          <span class="block w-6 h-px mb-1 bg-gray-900"></span>
          <span class="block w-6 h-px bg-gray-900"></span>
        </button>
        
        <!-- Desktop Navigation -->
        <div class="hidden md:flex space-x-8">
          <a href="https://blog.skill-wanderer.com" class="hover:text-primary transition">Blog</a>
          <a href="https://dojo.skill-wanderer.com" class="hover:text-primary transition">Dojo</a>
          <a href="https://hub.skill-wanderer.com" class="hover:text-primary transition opacity-50">Hub (Soon)</a>
        </div>
      </nav>
      
      <!-- Mobile Navigation -->
      <div v-if="showMobileMenu" class="md:hidden bg-white py-4 shadow-inner">
        <div class="container flex flex-col space-y-4">
          <a href="https://blog.skill-wanderer.com" class="hover:text-primary transition">Blog</a>
          <a href="https://dojo.skill-wanderer.com" class="hover:text-primary transition">Dojo</a>
          <a href="https://hub.skill-wanderer.com" class="hover:text-primary transition opacity-50">Hub (Soon)</a>
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