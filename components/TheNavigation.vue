<template>
  <nav id="navbar">
    <div class="nav-container">
      <NuxtLink to="/" class="logo">
        <div class="logo-icon"></div>
        Skill-Wanderer
      </NuxtLink>
      <div class="nav-links">
        <NuxtLink to="/">Home</NuxtLink>
        <NuxtLink to="/about">About</NuxtLink>
        <NuxtLink to="https://wanderings.skill-wanderer.com">Blog</NuxtLink>
        <!-- <NuxtLink to="/contact">Contact</NuxtLink> -->
      </div>
    </div>
  </nav>
</template>

<script setup>
import { onMounted, onUnmounted } from 'vue'

onMounted(() => {
  const handleScroll = () => {
    const navbar = document.getElementById('navbar')
    if (navbar) {
      if (window.scrollY > 50) {
        navbar.classList.add('scrolled')
      } else {
        navbar.classList.remove('scrolled')
      }
    }
  }
  
  window.addEventListener('scroll', handleScroll)
  
  onUnmounted(() => {
    window.removeEventListener('scroll', handleScroll)
  })
})
</script>

<style scoped>
/* Navigation Styles */
#navbar {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  background: rgba(26, 26, 26, 0.95);
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
  border-bottom: 1px solid rgba(255, 107, 53, 0.1);
  z-index: 1000;
  transition: all 0.3s ease;
  padding: 20px 0;
}

#navbar.scrolled {
  padding: 15px 0;
  box-shadow: 0 2px 20px rgba(0, 0, 0, 0.3);
}

.nav-container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.logo {
  display: flex;
  align-items: center;
  font-size: 24px;
  font-weight: bold;
  color: #FF6B35;
  text-decoration: none;
  transition: all 0.3s ease;
  gap: 10px;
}

.logo:hover {
  transform: translateY(-2px);
}

.logo-icon {
  width: 30px;
  height: 30px;
  background: #FFD93D;
  border-radius: 50%;
  position: relative;
  overflow: hidden;
}

.logo-icon::before {
  content: '';
  position: absolute;
  bottom: -5px;
  left: 50%;
  transform: translateX(-50%);
  width: 0;
  height: 0;
  border-left: 10px solid transparent;
  border-right: 10px solid transparent;
  border-top: 15px solid #1a1a1a;
}

.nav-links {
  display: flex;
  gap: 30px;
  align-items: center;
}

.nav-links a {
  color: #e0e0e0;
  text-decoration: none;
  font-weight: 500;
  transition: all 0.3s ease;
  position: relative;
  padding: 0.5rem 0;
}

.nav-links a::after {
  content: '';
  position: absolute;
  bottom: 0;
  left: 0;
  width: 0;
  height: 2px;
  background: #FF6B35;
  transition: width 0.3s ease;
}

.nav-links a:hover::after,
.nav-links a.router-link-active::after {
  width: 100%;
}

.nav-links a:hover {
  color: #FF6B35;
  transform: translateY(-2px);
}

.nav-links a.router-link-active {
  color: #FF6B35;
}

/* Mobile responsiveness */
@media (max-width: 768px) {
  .nav-container {
    padding: 0 20px;
  }
  
  .logo {
    font-size: 20px;
  }
  
  .logo-icon {
    width: 25px;
    height: 25px;
  }
  
  .logo-icon::before {
    border-left: 8px solid transparent;
    border-right: 8px solid transparent;
    border-top: 12px solid #1a1a1a;
  }
  
  .nav-links {
    gap: 20px;
    font-size: 0.9rem;
  }
}

@media (max-width: 480px) {
  .nav-links {
    gap: 15px;
    font-size: 0.8rem;
  }
  
  .nav-links a {
    padding: 0.25rem 0;
  }
  
  .logo {
    font-size: 18px;
  }
}
</style>
