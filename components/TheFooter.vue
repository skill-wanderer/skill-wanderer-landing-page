<template>
  <footer>    <div class="footer-content">
      <div class="footer-links">
        <NuxtLink to="/">Home</NuxtLink>
        <NuxtLink to="/about">About</NuxtLink>
        <NuxtLink to="/explore">Explore</NuxtLink>
        <NuxtLink to="/principles">Principles</NuxtLink>
        <NuxtLink to="/services">Services</NuxtLink>
        <NuxtLink to="https://dojo.skill-wanderer.com">Dojo</NuxtLink>
        <NuxtLink to="https://wanderings.skill-wanderer.com">Blog</NuxtLink>
        <a href="https://linkedin.com/company/skill-wanderer" target="_blank" rel="noopener noreferrer">Company LinkedIn</a>
        <a href="https://linkedin.com/in/quan-nguyen-skill-wanderer" target="_blank" rel="noopener noreferrer">Personal LinkedIn</a>
        <NuxtLink to="/contact">Contact</NuxtLink>
      </div>
      
      <div class="open-source-info">
        <p>
          This website is open source! 
          <a href="https://github.com/skill-wanderer/skill-wanderer-landing-page" target="_blank" rel="noopener noreferrer" aria-label="View source code on GitHub">
            <span aria-hidden="true">⚡</span> View the source code
          </a> 
          and contribute to our mission.
        </p>
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

.open-source-info {
  margin-bottom: 20px;
  padding: 20px;
  background: rgba(255, 107, 53, 0.1);
  border-radius: 8px;
  border: 1px solid rgba(255, 107, 53, 0.2);
}

.open-source-info p {
  margin: 0;
  color: var(--light-text);
  font-size: 14px;
  line-height: 1.5;
}

.open-source-info a {
  color: var(--primary-orange);
  text-decoration: none;
  font-weight: 500;
  transition: color 0.3s ease;
}

.open-source-info a:hover {
  color: #ff8a65;
  text-decoration: underline;
}

/* Responsive */
@media (max-width: 768px) {
  .footer-links {
    flex-direction: column;
    gap: 15px;
  }
}
</style>
