<template>
  <footer>
    <div class="footer-content">
      <div class="footer-links">
        <NuxtLink to="/">Home</NuxtLink>
        <NuxtLink to="/about">About</NuxtLink>
        <NuxtLink to="https://wanderings.skill-wanderer.com">Blog</NuxtLink>
        <!-- <NuxtLink to="/contact">Contact</NuxtLink> -->
        <a href="https://linkedin.com/in/quan-nguyen-skill-wanderer" target="_blank">LinkedIn</a>
      </div>
      <p>&copy; 2025 Skill-Wanderer. All resources reinvested for global impact.</p>
    </div>
  </footer>
</template>

<style scoped>
footer {
  padding: 60px 20px 30px;
  background: var(--darker-bg);
  border-top: 1px solid rgba(255, 107, 53, 0.2);
}

.footer-content {
  max-width: 1200px;
  margin: 0 auto;
  text-align: center;
}

.footer-links {
  display: flex;
  justify-content: center;
  gap: 30px;
  margin-bottom: 30px;
}

.footer-links a {
  color: var(--light-text);
  text-decoration: none;
  transition: color 0.3s ease;
}

.footer-links a:hover {
  color: var(--primary-orange);
}

/* Responsive */
@media (max-width: 768px) {
  .footer-links {
    flex-direction: column;
    gap: 15px;
  }
}
</style>
