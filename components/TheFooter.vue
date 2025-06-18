<template>
  <footer>
    <div class="footer-content">      <div class="footer-links">
        <NuxtLink to="/">Home</NuxtLink>
        <NuxtLink to="/about">About</NuxtLink>
        <NuxtLink to="/principles">Principles</NuxtLink>
        <NuxtLink to="https://dojo.skill-wanderer.com">Dojo</NuxtLink>
        <NuxtLink to="https://wanderings.skill-wanderer.com">Blog</NuxtLink>
        <a href="https://github.com/skill-wanderer/skill-wanderer-landing-page" target="_blank" rel="noopener noreferrer" aria-label="View source code on GitHub">
          <span aria-hidden="true">⚡</span> View Source Code
        </a>
        <a href="https://linkedin.com/in/quan-nguyen-skill-wanderer" target="_blank" rel="noopener noreferrer">LinkedIn</a>
        <NuxtLink to="/contact">Contact</NuxtLink>
        <a href="https://linkedin.com/in/quan-nguyen-skill-wanderer" target="_blank">LinkedIn</a>
      </div>
      <p>&copy; 2025 Skill-Wanderer. All resources reinvested for global impact.</p>
    </div>
  </footer>
</template>

<style scoped>
:root {
  --primary-orange: #FF6B35;
  --deeper-bg: #0f0f0f;
  --light-text: #e0e0e0;
}

footer {
  padding: 60px 20px 30px;
  background: var(--deeper-bg);
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
