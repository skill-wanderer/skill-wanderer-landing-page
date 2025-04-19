<template>
  <div>
    <!-- Hero Section -->
    <section class="py-20 text-center">
      <h1 class="text-5xl font-bold mb-4">Welcome to Skill Wanderer</h1>
      <p class="text-xl mb-8 max-w-2xl mx-auto">
        Your central hub for accessible education, regardless of financial means
      </p>
      <div class="flex justify-center space-x-4">
        <NuxtLink to="#platforms" class="bg-primary hover:bg-opacity-80 text-white px-6 py-3 rounded-lg transition">
          Explore Our Platforms
        </NuxtLink>
      </div>
    </section>

    <!-- Platforms Section -->
    <section id="platforms" class="py-16 bg-gray-50">
      <div class="container mx-auto">
        <h2 class="text-3xl font-bold mb-12 text-center">Our Educational Platforms</h2>
        
        <div class="grid md:grid-cols-3 gap-8">
          <!-- Blog Platform -->
          <div class="bg-white p-6 rounded-lg shadow-md">
            <h3 class="text-2xl font-bold mb-3">Blog</h3>
            <p class="mb-4">Educational articles and resources to enhance your learning journey.</p>
            <a href="https://blog.skill-wanderer.com" class="text-primary hover:underline">Visit Blog →</a>
          </div>
          
          <!-- Dojo Platform -->
          <div class="bg-white p-6 rounded-lg shadow-md">
            <h3 class="text-2xl font-bold mb-3">Dojo</h3>
            <p class="mb-4">Free, mission-driven educational platform with optional premium support.</p>
            <a href="https://dojo.skill-wanderer.com" class="text-primary hover:underline">Visit Dojo →</a>
          </div>
          
          <!-- Hub Platform (Coming Soon) -->
          <div class="bg-white p-6 rounded-lg shadow-md opacity-75">
            <h3 class="text-2xl font-bold mb-3">Hub <span class="text-sm font-normal text-gray-500">(Coming Soon)</span></h3>
            <p class="mb-4">Community learning environment to connect with fellow learners.</p>
            <span class="text-gray-400">Coming Soon</span>
          </div>
        </div>
      </div>
    </section>

    <!-- Mission Section -->
    <section class="py-16">
      <div class="container mx-auto">
        <h2 class="text-3xl font-bold mb-6 text-center">Our Mission</h2>
        <p class="text-lg max-w-3xl mx-auto text-center">
          The Skill Wanderer platform is dedicated to making quality education accessible to everyone, 
          regardless of financial means. We believe in the power of knowledge to transform lives.
        </p>
      </div>
    </section>
  </div>
</template>