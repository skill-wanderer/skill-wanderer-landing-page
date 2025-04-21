<template>
  <div>
    <!-- Hero Section -->
    <section class="section bg-gradient-to-b from-gray-50 to-white">
      <div class="container">
        <div class="max-w-3xl mx-auto text-center">
          <h1 class="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 md:mb-6">Welcome to Skill Wanderer</h1>
          <p class="text-lg md:text-xl mb-8 text-gray-600">
            Your central hub for accessible education, regardless of financial means
          </p>
          <NuxtLink to="#platforms" class="btn-primary">
            Explore Our Platforms
          </NuxtLink>
        </div>
      </div>
    </section>

    <!-- Platforms Section -->
    <section id="platforms" class="section bg-gray-50">
      <div class="container">
        <h2 class="section-title">Our Educational Platforms</h2>
        
        <div class="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          <!-- Blog Platform -->
          <div class="card">
            <h3 class="text-xl md:text-2xl font-bold mb-3">Blog</h3>
            <p class="mb-4 text-gray-600">Educational articles and resources to enhance your learning journey.</p>
            <a href="https://blog.skill-wanderer.com" class="text-primary hover:underline font-medium">Visit Blog →</a>
          </div>
          
          <!-- Dojo Platform -->
          <div class="card">
            <h3 class="text-xl md:text-2xl font-bold mb-3">Dojo</h3>
            <p class="mb-4 text-gray-600">Free, mission-driven educational platform with optional premium support.</p>
            <a href="https://dojo.skill-wanderer.com" class="text-primary hover:underline font-medium">Visit Dojo →</a>
          </div>
          
          <!-- Hub Platform (Coming Soon) -->
          <div class="card opacity-75">
            <h3 class="text-xl md:text-2xl font-bold mb-3">Hub <span class="text-sm font-normal text-gray-500">(Coming Soon)</span></h3>
            <p class="mb-4 text-gray-600">Community learning environment to connect with fellow learners.</p>
            <span class="text-gray-400">Coming Soon</span>
          </div>
        </div>
      </div>
    </section>

    <!-- Mission Section -->
    <section class="section">
      <div class="container">
        <h2 class="section-title">Our Mission</h2>
        <div class="max-w-3xl mx-auto">
          <p class="text-lg text-center text-gray-600">
            The Skill Wanderer platform is dedicated to making quality education accessible to everyone, 
            regardless of financial means. We believe in the power of knowledge to transform lives.
          </p>
        </div>
      </div>
    </section>
  </div>
</template>