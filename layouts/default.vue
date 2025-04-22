<template>
  <div class="min-h-screen flex flex-col">
    <!-- Header -->
    <header class="bg-dark-gray shadow-md">
      <div class="container">
        <div class="logo-container flex justify-center py-5">
          <img src="/cropped-skill-wanderer-logo-768x256.webp" alt="Skill-Wanderer Logo" class="logo h-[60px]">
        </div>
      </div>
    </header>

    <main class="flex-grow">
      <slot />
    </main>

    <!-- Footer -->
    <footer class="bg-dark-gray text-white py-10">
      <div class="container text-center">
        <p class="copyright opacity-70 text-sm">&copy; {{ new Date().getFullYear() }} Skill-Wanderer. All rights reserved.</p>
      </div>
    </footer>
  </div>
</template>

<style scoped>
header {
  background-color: var(--dark-gray);
}

.footer-links a {
  color: white;
  text-decoration: none;
  opacity: 0.8;
  transition: var(--transition);
}

.footer-links a:hover {
  opacity: 1;
  color: var(--primary-color);
}

.social-link:hover {
  transform: translateY(-3px);
}
</style>