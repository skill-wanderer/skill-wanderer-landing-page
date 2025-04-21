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

    <!-- Products/Services Section -->
    <section class="section" id="platforms">
      <div class="container">
        <h2 class="section-title text-white">Our Educational Ecosystem</h2>
        
        <div class="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
          <!-- Blog Card -->
          <div class="platform-card cream-bg rounded-lg shadow-lg overflow-hidden">
            <div class="p-6">
              <h3 class="text-2xl font-bold mb-3 text-orange-500">Blog</h3>
              <p class="text-gray-700 mb-4">Educational articles and resources to enhance your learning journey.</p>
              <a href="https://blog.skill-wanderer.com" class="inline-flex items-center text-orange-500 hover:text-orange-600">
                Visit Blog <span class="ml-1">→</span>
              </a>
            </div>
          </div>
          
          <!-- Dojo Card -->
          <div class="platform-card cream-bg rounded-lg shadow-lg overflow-hidden">
            <div class="p-6">
              <h3 class="text-2xl font-bold mb-3 text-orange-500">Dojo</h3>
              <p class="text-gray-700 mb-4">Interactive courses and learning paths for structured skill development.</p>
              <a href="https://dojo.skill-wanderer.com" class="inline-flex items-center text-orange-500 hover:text-orange-600">
                Visit Dojo <span class="ml-1">→</span>
              </a>
            </div>
          </div>
          
          <!-- Hub Card (Coming Soon) -->
          <div class="platform-card cream-bg rounded-lg shadow-lg overflow-hidden relative">
            <div class="absolute top-0 right-0 bg-gray-500 text-white py-1 px-3 rounded-bl-lg text-sm">
              Coming Soon
            </div>
            <div class="p-6">
              <h3 class="text-2xl font-bold mb-3 text-orange-500">Hub</h3>
              <p class="text-gray-700 mb-4">Community space for connecting with fellow learners and experts.</p>
              <a href="#" class="inline-flex items-center text-gray-400 cursor-not-allowed">
                Visit Hub <span class="ml-1">→</span>
              </a>
            </div>
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

<style scoped>
.cream-bg {
  background-color: #FEF1E4;
}

.platform-card {
  margin: 1rem 0;
  padding: 1.5rem;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.platform-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04);
}

.platform-title {
  color: black;
  display: inline-block;
  padding: 0.25rem 1rem;
  border-radius: 0.25rem;
}
</style>