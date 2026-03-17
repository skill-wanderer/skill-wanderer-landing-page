<template>
  <nav id="navbar">
    <div class="nav-container">
      <NuxtLink to="/" class="logo">
        <img src="/skill-wanderer-favicon.svg" alt="Skill-Wanderer Logo" class="logo-icon" />
        SKILL-WANDERER
      </NuxtLink>
      
      <!-- Easter egg: Hidden link to mission page -->
      <NuxtLink
        v-if="!isMissionPage"
        to="/mission"
        class="easter-egg"
        :style="heartStyle"
        title="The Heart of Skill-Wanderer (Motivation for Founder)"
        aria-label="View the Skill-Wanderer mission"
      >
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
        
        <!-- About Dropdown -->
        <div class="dropdown" @mouseenter="isAboutDropdownOpen = true" @mouseleave="isAboutDropdownOpen = false">
          <span class="dropdown-trigger" :class="{ active: isAboutDropdownOpen }">
            About
            <svg class="dropdown-arrow" :class="{ rotated: isAboutDropdownOpen }" xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <polyline points="6 9 12 15 18 9"></polyline>
            </svg>
          </span>
          <div class="dropdown-menu" :class="{ open: isAboutDropdownOpen }">
            <NuxtLink to="/about" @click="closeMobileMenu(); isAboutDropdownOpen = false">About Us</NuxtLink>
            <NuxtLink to="/team" @click="closeMobileMenu(); isAboutDropdownOpen = false">Our Team</NuxtLink>
            <NuxtLink to="/principles" @click="closeMobileMenu(); isAboutDropdownOpen = false">Principles</NuxtLink>
            <NuxtLink to="/roadmap" @click="closeMobileMenu(); isAboutDropdownOpen = false">Roadmap</NuxtLink>
            <NuxtLink to="/admiral-orion" @click="closeMobileMenu(); isAboutDropdownOpen = false">Admiral Orion</NuxtLink>
          </div>
        </div>
        
        <!-- Mobile About submenu -->
        <div class="mobile-dropdown">
          <button class="mobile-dropdown-trigger" @click="toggleMobileAboutDropdown" :class="{ active: isMobileAboutDropdownOpen }">
            About
            <svg class="dropdown-arrow" :class="{ rotated: isMobileAboutDropdownOpen }" xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <polyline points="6 9 12 15 18 9"></polyline>
            </svg>
          </button>
          <div class="mobile-dropdown-menu" :class="{ open: isMobileAboutDropdownOpen }">
            <NuxtLink to="/about" @click="closeMobileMenu">About Us</NuxtLink>
            <NuxtLink to="/team" @click="closeMobileMenu">Our Team</NuxtLink>
            <NuxtLink to="/principles" @click="closeMobileMenu">Principles</NuxtLink>
            <NuxtLink to="/roadmap" @click="closeMobileMenu">Roadmap</NuxtLink>
            <NuxtLink to="/admiral-orion" @click="closeMobileMenu">Admiral Orion</NuxtLink>
          </div>
        </div>
        
        <!-- Learning Dropdown -->
        <div class="dropdown" @mouseenter="isLearningPathDropdownOpen = true" @mouseleave="isLearningPathDropdownOpen = false">
          <span class="dropdown-trigger" :class="{ active: isLearningPathDropdownOpen }">
            Learning
            <svg class="dropdown-arrow" :class="{ rotated: isLearningPathDropdownOpen }" xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <polyline points="6 9 12 15 18 9"></polyline>
            </svg>
          </span>
          <div class="dropdown-menu" :class="{ open: isLearningPathDropdownOpen }">
            <a href="https://dojo.skill-wanderer.com/paths" target="_blank" rel="noopener noreferrer" @click="closeMobileMenu(); isLearningPathDropdownOpen = false">All Learning Paths</a>
            <NuxtLink to="/learners" @click="closeMobileMenu(); isLearningPathDropdownOpen = false">Our Learners</NuxtLink>
          </div>
        </div>

        <!-- Mobile Learning submenu -->
        <div class="mobile-dropdown">
          <button class="mobile-dropdown-trigger" @click="toggleMobileLearningPathDropdown" :class="{ active: isMobileLearningPathDropdownOpen }">
            Learning
            <svg class="dropdown-arrow" :class="{ rotated: isMobileLearningPathDropdownOpen }" xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <polyline points="6 9 12 15 18 9"></polyline>
            </svg>
          </button>
          <div class="mobile-dropdown-menu" :class="{ open: isMobileLearningPathDropdownOpen }">
            <a href="https://dojo.skill-wanderer.com/paths" target="_blank" rel="noopener noreferrer" @click="closeMobileMenu">All Learning Paths</a>
            <NuxtLink to="/learners" @click="closeMobileMenu">Our Learners</NuxtLink>
          </div>
        </div>

        <!-- Expertise & Impact Dropdown -->
        <div class="dropdown" @mouseenter="isPartnershipsDropdownOpen = true" @mouseleave="isPartnershipsDropdownOpen = false">
          <span class="dropdown-trigger" :class="{ active: isPartnershipsDropdownOpen }">
            Expertise & Impact
            <svg class="dropdown-arrow" :class="{ rotated: isPartnershipsDropdownOpen }" xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <polyline points="6 9 12 15 18 9"></polyline>
            </svg>
          </span>
          <div class="dropdown-menu" :class="{ open: isPartnershipsDropdownOpen }">
            <NuxtLink to="/expertise-impact" @click="closeMobileMenu(); isPartnershipsDropdownOpen = false">Overview</NuxtLink>
            <NuxtLink to="/expertise-impact/success-sharing-model" @click="closeMobileMenu(); isPartnershipsDropdownOpen = false">Success Sharing Model</NuxtLink>
            <NuxtLink to="/expertise-impact/become-a-partner" @click="closeMobileMenu(); isPartnershipsDropdownOpen = false">Work With Us</NuxtLink>
            <NuxtLink to="/expertise-impact/our-partners" @click="closeMobileMenu(); isPartnershipsDropdownOpen = false">Our Partners</NuxtLink>
          </div>
        </div>

        <!-- Mobile Expertise & Impact submenu -->
        <div class="mobile-dropdown">
          <button class="mobile-dropdown-trigger" @click="toggleMobilePartnershipsDropdown" :class="{ active: isMobilePartnershipsDropdownOpen }">
            Expertise & Impact
            <svg class="dropdown-arrow" :class="{ rotated: isMobilePartnershipsDropdownOpen }" xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <polyline points="6 9 12 15 18 9"></polyline>
            </svg>
          </button>
          <div class="mobile-dropdown-menu" :class="{ open: isMobilePartnershipsDropdownOpen }">
            <NuxtLink to="/expertise-impact" @click="closeMobileMenu">Overview</NuxtLink>
            <NuxtLink to="/expertise-impact/success-sharing-model" @click="closeMobileMenu">Success Sharing Model</NuxtLink>
            <NuxtLink to="/expertise-impact/become-a-partner" @click="closeMobileMenu">Work With Us</NuxtLink>
            <NuxtLink to="/expertise-impact/our-partners" @click="closeMobileMenu">Our Partners</NuxtLink>
          </div>
        </div>

        <!-- Platform Ecosystem Dropdown -->
        <div class="dropdown" @mouseenter="isEcosystemDropdownOpen = true" @mouseleave="isEcosystemDropdownOpen = false">
          <span class="dropdown-trigger" :class="{ active: isEcosystemDropdownOpen }">
            Platform Ecosystem
            <svg class="dropdown-arrow" :class="{ rotated: isEcosystemDropdownOpen }" xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <polyline points="6 9 12 15 18 9"></polyline>
            </svg>
          </span>
          <div class="dropdown-menu" :class="{ open: isEcosystemDropdownOpen }">
            <NuxtLink to="https://dojo.skill-wanderer.com" @click="closeMobileMenu(); isEcosystemDropdownOpen = false">Dojo</NuxtLink>
            <NuxtLink to="https://wanderings.skill-wanderer.com" @click="closeMobileMenu(); isEcosystemDropdownOpen = false">Blog</NuxtLink>
          </div>
        </div>

        <!-- Mobile Platform Ecosystem submenu -->
        <div class="mobile-dropdown">
          <button class="mobile-dropdown-trigger" @click="toggleMobileEcosystemDropdown" :class="{ active: isMobileEcosystemDropdownOpen }">
            Platform Ecosystem
            <svg class="dropdown-arrow" :class="{ rotated: isMobileEcosystemDropdownOpen }" xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <polyline points="6 9 12 15 18 9"></polyline>
            </svg>
          </button>
          <div class="mobile-dropdown-menu" :class="{ open: isMobileEcosystemDropdownOpen }">
            <NuxtLink to="https://dojo.skill-wanderer.com" @click="closeMobileMenu">Dojo</NuxtLink>
            <NuxtLink to="https://wanderings.skill-wanderer.com" @click="closeMobileMenu">Blog</NuxtLink>
          </div>
        </div>

        <NuxtLink to="/contact" @click="closeMobileMenu">Contact</NuxtLink>
      </div>
    </div>
  </nav>
</template>

<script setup lang="ts">
import { computed, onMounted, onUnmounted, ref, watch } from 'vue'

const isMobileMenuOpen = ref(false)
const isAboutDropdownOpen = ref(false)
const isLearningPathDropdownOpen = ref(false)
const isPartnershipsDropdownOpen = ref(false)
const isEcosystemDropdownOpen = ref(false)
const isMobileAboutDropdownOpen = ref(false)
const isMobileLearningPathDropdownOpen = ref(false)
const isMobilePartnershipsDropdownOpen = ref(false)
const isMobileEcosystemDropdownOpen = ref(false)
const heartStyle = ref({ top: '50vh', left: '50vw' })
const route = useRoute()
const isMissionPage = computed(() => route.path.startsWith('/mission'))

const HEART_MOVE_INTERVAL_MS = 10000
const HEART_MARGIN = 36 
const HEART_HITBOX = 44
const HEART_SAFE_GAP = 12
const CLICKABLE_SELECTOR = 'a, button, input, select, textarea, label, [role="button"], [contenteditable="true"], [tabindex], .btn, .mobile-menu-btn, .dropdown-trigger, .mobile-dropdown-trigger'

let heartMoveIntervalId: number | null = null

const toggleMobileMenu = () => {
  isMobileMenuOpen.value = !isMobileMenuOpen.value
}

const closeMobileMenu = () => {
  isMobileMenuOpen.value = false
  isMobileAboutDropdownOpen.value = false
  isMobileLearningPathDropdownOpen.value = false
  isMobilePartnershipsDropdownOpen.value = false
  isMobileEcosystemDropdownOpen.value = false
  isAboutDropdownOpen.value = false
  isLearningPathDropdownOpen.value = false
  isPartnershipsDropdownOpen.value = false
  isEcosystemDropdownOpen.value = false
}

const toggleMobileAboutDropdown = () => {
  isMobileAboutDropdownOpen.value = !isMobileAboutDropdownOpen.value
}

const toggleMobileLearningPathDropdown = () => {
  isMobileLearningPathDropdownOpen.value = !isMobileLearningPathDropdownOpen.value
}

const toggleMobilePartnershipsDropdown = () => {
  isMobilePartnershipsDropdownOpen.value = !isMobilePartnershipsDropdownOpen.value
}

const toggleMobileEcosystemDropdown = () => {
  isMobileEcosystemDropdownOpen.value = !isMobileEcosystemDropdownOpen.value
}

const isVisibleElement = (element: HTMLElement) => {
  const rect = element.getBoundingClientRect()
  const style = window.getComputedStyle(element)

  return (
    rect.width > 0
    && rect.height > 0
    && style.visibility !== 'hidden'
    && style.display !== 'none'
    && style.pointerEvents !== 'none'
  )
}

const isOverlapping = (
  a: { left: number; right: number; top: number; bottom: number },
  b: { left: number; right: number; top: number; bottom: number }
) => !(a.right < b.left || a.left > b.right || a.bottom < b.top || a.top > b.bottom)

const canPlaceHeartAt = (x: number, y: number) => {
  const heartRect = {
    left: x,
    right: x + HEART_HITBOX,
    top: y,
    bottom: y + HEART_HITBOX
  }

  const clickables = document.querySelectorAll<HTMLElement>(CLICKABLE_SELECTOR)

  for (const element of clickables) {
    if (element.classList.contains('easter-egg') || element.classList.contains('easter-egg-mobile')) {
      continue
    }

    if (!isVisibleElement(element)) {
      continue
    }

    const rect = element.getBoundingClientRect()
    const expandedRect = {
      left: rect.left - HEART_SAFE_GAP,
      right: rect.right + HEART_SAFE_GAP,
      top: rect.top - HEART_SAFE_GAP,
      bottom: rect.bottom + HEART_SAFE_GAP
    }

    if (isOverlapping(heartRect, expandedRect)) {
      return false
    }
  }

  return true
}

const setRandomHeartPosition = () => {
  if (isMissionPage.value) {
    return
  }

  const minX = HEART_MARGIN
  const maxX = window.innerWidth - HEART_MARGIN - HEART_HITBOX
  const minY = HEART_MARGIN
  const maxY = window.innerHeight - HEART_MARGIN - HEART_HITBOX

  const xRange = Math.max(maxX - minX, 0)
  const yRange = Math.max(maxY - minY, 0)

  for (let attempt = 0; attempt < 80; attempt += 1) {
    const randomX = minX + Math.random() * xRange
    const randomY = minY + Math.random() * yRange

    if (canPlaceHeartAt(randomX, randomY)) {
      heartStyle.value = {
        left: `${randomX}px`,
        top: `${randomY}px`
      }
      return
    }
  }

}

const stopHeartAutoMove = () => {
  if (heartMoveIntervalId !== null) {
    window.clearInterval(heartMoveIntervalId)
    heartMoveIntervalId = null
  }
}

const startHeartAutoMove = () => {
  stopHeartAutoMove()
  if (isMissionPage.value) {
    return
  }

  setRandomHeartPosition()
  heartMoveIntervalId = window.setInterval(setRandomHeartPosition, HEART_MOVE_INTERVAL_MS)
}

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

onMounted(() => {
  window.addEventListener('scroll', handleScroll)
  window.addEventListener('resize', startHeartAutoMove)
  startHeartAutoMove()
})

watch(() => route.path, () => {
  startHeartAutoMove()
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
  window.removeEventListener('resize', startHeartAutoMove)
  stopHeartAutoMove()
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
  object-fit: contain;
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

/* Dropdown Styles */
.dropdown {
  position: relative;
  display: block;
}

.dropdown-trigger {
  color: #e0e0e0;
  font-weight: 500;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 5px;
  padding: 0.5rem 0;
  transition: all 0.3s ease;
}

.dropdown-trigger:hover,
.dropdown-trigger.active {
  color: #FF6B35;
}

.dropdown-arrow {
  transition: transform 0.3s ease;
}

.dropdown-arrow.rotated {
  transform: rotate(180deg);
}

.dropdown-menu {
  position: absolute;
  top: 100%;
  left: 50%;
  transform: translateX(-50%) translateY(10px);
  background: rgba(26, 26, 26, 0.98);
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 107, 53, 0.2);
  border-radius: 8px;
  padding: 10px 0;
  min-width: 160px;
  opacity: 0;
  visibility: hidden;
  transition: all 0.3s ease;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.3);
  z-index: 1002;
}

.dropdown-menu.open {
  opacity: 1;
  visibility: visible;
  transform: translateX(-50%) translateY(0);
}

.dropdown-menu a {
  display: block;
  padding: 10px 20px;
  color: #e0e0e0;
  text-decoration: none;
  font-weight: 500;
  transition: all 0.3s ease;
}

.dropdown-menu a:hover {
  background: rgba(255, 107, 53, 0.1);
  color: #FF6B35;
}

.dropdown-menu a::after {
  display: none;
}

.dropdown-menu a.view-all-link,
.mobile-dropdown-menu a.view-all-link {
  border-bottom: 1px solid rgba(255, 107, 53, 0.2);
  color: #FF6B35;
  font-weight: 600;
  margin-bottom: 5px;
  padding-bottom: 12px;
}

/* Hide mobile dropdown on desktop */
.mobile-dropdown {
  display: none;
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
  
  /* Hide desktop dropdown, show mobile dropdown */
  .dropdown {
    display: none;
  }
  
  .mobile-dropdown {
    display: block;
    width: 100%;
  }
  
  .mobile-dropdown-trigger {
    color: #e0e0e0;
    font-weight: 500;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 8px;
    padding: 12px 0;
    font-size: 1.1rem;
    border-bottom: 1px solid rgba(255, 107, 53, 0.1);
    background: none;
    border-left: none;
    border-right: none;
    border-top: none;
    width: 100%;
    transition: all 0.3s ease;
  }
  
  .mobile-dropdown-trigger:hover,
  .mobile-dropdown-trigger.active {
    color: #FF6B35;
  }
  
  .mobile-dropdown-menu {
    max-height: 0;
    overflow: hidden;
    transition: max-height 0.3s ease;
    background: rgba(0, 0, 0, 0.2);
    border-radius: 8px;
    margin-top: 5px;
  }
  
  .mobile-dropdown-menu.open {
    max-height: 200px;
  }
  
  .mobile-dropdown-menu a {
    display: block;
    padding: 12px 20px;
    color: #e0e0e0;
    text-decoration: none;
    font-weight: 500;
    text-align: center;
    transition: all 0.3s ease;
    border-bottom: 1px solid rgba(255, 107, 53, 0.05);
  }
  
  .mobile-dropdown-menu a:last-child {
    border-bottom: none;
  }
  
  .mobile-dropdown-menu a:hover {
    background: rgba(255, 107, 53, 0.1);
    color: #FF6B35;
  }
  
  .mobile-dropdown-menu a::after {
    display: none;
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
}

/* Easter egg styling */
.easter-egg {
  position: fixed;
  z-index: 999;
  text-decoration: none;
  font-size: 1.2rem;
  opacity: 0.6;
  transition: left 0.45s ease, top 0.45s ease, opacity 0.3s ease, transform 0.3s ease;
  cursor: pointer;
  will-change: left, top, opacity, transform;
}

.easter-egg:hover {
  opacity: 1;
  transform: scale(1.2);
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
  .easter-egg {
    font-size: 1rem;
    opacity: 0.75;
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
