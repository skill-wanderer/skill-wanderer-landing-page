<template>
  <nav id="navbar">
    <div class="nav-container">
      <NuxtLink to="/" class="logo">
        <div class="logo-icon"></div>
        SKILL-WANDERER
      </NuxtLink>
      
      <!-- Easter egg: Hidden link to mission page -->
      <NuxtLink to="/mission" class="easter-egg" title="The Heart of Skill-Wanderer (Motivation for Founder)">
        <span class="heart-beat">❤️</span>
      </NuxtLink>
      
      <!-- Mobile menu button -->
      <button 
        class="mobile-menu-btn"
        @click="toggleMobileMenu"
        :class="{ active: isMobileMenuOpen }"
      >
        <span></span>
        <span></span>
        <span></span>
      </button>
      
      <div class="nav-links" :class="{ 'mobile-open': isMobileMenuOpen }">
        <NuxtLink to="/" @click="closeMobileMenu">Home</NuxtLink>
        <NuxtLink to="/about" @click="closeMobileMenu">About</NuxtLink>
        <NuxtLink to="/learning-path" @click="closeMobileMenu">Learning Path</NuxtLink>
        <NuxtLink to="/principles" @click="closeMobileMenu">Principles</NuxtLink>
        <NuxtLink to="/technology-partner" @click="closeMobileMenu">Technology Partner</NuxtLink>
        <NuxtLink to="https://dojo.skill-wanderer.com" @click="closeMobileMenu">Dojo</NuxtLink>
        <NuxtLink to="https://wanderings.skill-wanderer.com" @click="closeMobileMenu">Blog</NuxtLink>
        <NuxtLink to="/contact" @click="closeMobileMenu">Contact</NuxtLink>
        <!-- Easter egg: Mobile heart link -->
        <NuxtLink to="/mission" @click="closeMobileMenu" class="easter-egg-mobile" title="The Heart of Skill-Wanderer (Motivation for Founder)">
          <span class="heart-beat">❤️</span>
        </NuxtLink>
      </div>
    </div>
  </nav>
</template>

<script setup>
import { onMounted, onUnmounted, ref } from 'vue'

const isMobileMenuOpen = ref(false)

const toggleMobileMenu = () => {
  isMobileMenuOpen.value = !isMobileMenuOpen.value
}

const closeMobileMenu = () => {
  isMobileMenuOpen.value = false
}

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
.mobile-menu-btn {
  display: none;
  flex-direction: column;
  background: none;
  border: none;
  cursor: pointer;
  padding: 5px;
  z-index: 1001;
}

.mobile-menu-btn span {
  width: 25px;
  height: 3px;
  background: #e0e0e0;
  margin: 3px 0;
  transition: all 0.3s ease;
  border-radius: 2px;
}

.mobile-menu-btn.active span:nth-child(1) {
  transform: rotate(45deg) translate(5px, 5px);
  background: #FF6B35;
}

.mobile-menu-btn.active span:nth-child(2) {
  opacity: 0;
}

.mobile-menu-btn.active span:nth-child(3) {
  transform: rotate(-45deg) translate(7px, -6px);
  background: #FF6B35;
}

@media (max-width: 768px) {
  .mobile-menu-btn {
    display: flex;
  }
  
  .nav-links {
    position: absolute;
    top: 100%;
    left: 0;
    right: 0;
    background: rgba(26, 26, 26, 0.98);
    backdrop-filter: blur(10px);
    -webkit-backdrop-filter: blur(10px);
    flex-direction: column;
    padding: 20px;
    gap: 20px;
    border-top: 1px solid rgba(255, 107, 53, 0.1);
    transform: translateY(-100%);
    opacity: 0;
    visibility: hidden;
    transition: all 0.3s ease;
    box-shadow: 0 4px 20px rgba(0, 0, 0, 0.3);
  }
  
  .nav-links.mobile-open {
    transform: translateY(0);
    opacity: 1;
    visibility: visible;
  }
  
  .nav-links a {
    text-align: center;
    padding: 12px 0;
    font-size: 1.1rem;
    border-bottom: 1px solid rgba(255, 107, 53, 0.1);
  }
  
  .nav-links a:last-child {
    border-bottom: none;
  }
  
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
}

/* Easter egg styling */
.easter-egg {
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  z-index: 1000;
  text-decoration: none;
  font-size: 1.2rem;
  opacity: 0.6;
  transition: all 0.3s ease;
  cursor: pointer;
}

.easter-egg:hover {
  opacity: 1;
  transform: translate(-50%, -50%) scale(1.2);
}

.heart-beat {
  animation: heartBeat 2s infinite;
}

@keyframes heartBeat {
  0% { transform: scale(1); }
  14% { transform: scale(1.1); }
  28% { transform: scale(1); }
  42% { transform: scale(1.1); }
  70% { transform: scale(1); }
}

/* Mobile easter egg styling */
.easter-egg-mobile {
  display: none;
  text-decoration: none;
  color: var(--primary-orange);
  font-size: 1.5rem;
  padding: 15px 20px;
  text-align: center;
  border-top: 1px solid rgba(255, 107, 53, 0.2);
  margin-top: 10px;
  transition: all 0.3s ease;
}

.easter-egg-mobile:hover {
  background: rgba(255, 107, 53, 0.1);
  transform: scale(1.1);
}

/* Responsive adjustments */
@media (max-width: 768px) {
  /* Hide desktop easter egg on mobile */
  .easter-egg {
    display: none;
  }
  
  /* Show mobile easter egg */
  .easter-egg-mobile {
    display: block;
  }
}

@media (max-width: 480px) {
  .logo {
    font-size: 18px;
  }
  
  .nav-links a {
    font-size: 1rem;
    padding: 10px 0;
  }
}
</style>
