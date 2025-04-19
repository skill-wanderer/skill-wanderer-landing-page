<template>
  <div class="min-h-screen flex flex-col">
    <header class="bg-white shadow">
      <nav class="container mx-auto px-4 py-6 flex justify-between items-center">
        <NuxtLink to="/" class="text-2xl font-bold text-primary">Skill Wanderer</NuxtLink>
        <div class="flex space-x-6">
          <a href="https://blog.skill-wanderer.com" class="hover:text-primary transition">Blog</a>
          <a href="https://dojo.skill-wanderer.com" class="hover:text-primary transition">Dojo</a>
          <a href="https://hub.skill-wanderer.com" class="hover:text-primary transition opacity-50">Hub (Soon)</a>
        </div>
      </nav>
    </header>

    <main class="flex-grow container mx-auto px-4 py-8">
      <slot />
    </main>

    <footer class="bg-gray-100 py-8">
      <div class="container mx-auto px-4 text-center">
        <p>© {{ new Date().getFullYear() }} Skill Wanderer. All rights reserved.</p>
        <p class="mt-2 text-sm text-gray-600">Making quality education accessible to everyone</p>
      </div>
    </footer>
  </div>
</template>