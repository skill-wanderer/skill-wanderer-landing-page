<template>
  <nav id="navbar">
    <div class="nav-container">
      <NuxtLink to="/" class="logo">
        <img src="/skill-wanderer-favicon.svg" alt="Skill-Wanderer Logo" class="logo-icon" />
        SKILL-WANDERER
      </NuxtLink>
      
      <!-- Easter egg: Hidden link to mission page -->
      <NuxtLink
        v-if="!isHeartTargetPage"
        to="/about#mission"
        class="easter-egg"
        :class="{ 'easter-egg--hidden': !isHeartVisible }"
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
        <!-- Learn Dropdown (the mission comes first) -->
        <div class="dropdown" @mouseenter="openLearningDropdown" @mouseleave="scheduleDropdownClose">
          <span class="dropdown-trigger" :class="{ active: isLearningPathDropdownOpen }">
            Learn
            <svg class="dropdown-arrow" :class="{ rotated: isLearningPathDropdownOpen }" xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <polyline points="6 9 12 15 18 9"></polyline>
            </svg>
          </span>
          <div class="dropdown-menu rich-dropdown-menu" :class="{ open: isLearningPathDropdownOpen }">
            <NuxtLink to="/learning-path" class="rich-menu-item" @click="closeMobileMenu(); isLearningPathDropdownOpen = false">
              <span class="rich-menu-icon">
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="22 12 18 12 15 21 9 3 6 12 2 12"/></svg>
              </span>
              <span class="rich-menu-text">
                <span class="rich-menu-label">Learning Paths</span>
                <span class="rich-menu-desc">Pick a craft and grow your skills step by step</span>
              </span>
            </NuxtLink>
            <NuxtLink to="/learning-path/learn-contribute-build-earn" class="rich-menu-item" @click="closeMobileMenu(); isLearningPathDropdownOpen = false">
              <span class="rich-menu-icon">
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/></svg>
              </span>
              <span class="rich-menu-text">
                <span class="rich-menu-label">How Learning Works</span>
                <span class="rich-menu-desc">Learn. Contribute. Build. Earn.</span>
              </span>
            </NuxtLink>
            <NuxtLink to="/learners" class="rich-menu-item" @click="closeMobileMenu(); isLearningPathDropdownOpen = false">
              <span class="rich-menu-icon">
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>
              </span>
              <span class="rich-menu-text">
                <span class="rich-menu-label">Learner Stories</span>
                <span class="rich-menu-desc">Real journeys from our learners</span>
              </span>
            </NuxtLink>
            <div class="rich-menu-divider"></div>
            <a href="https://dojo.skill-wanderer.com/paths" target="_blank" rel="noopener noreferrer" class="rich-menu-item" @click="closeMobileMenu(); isLearningPathDropdownOpen = false">
              <span class="rich-menu-icon">
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polygon points="12 2 2 7 12 12 22 7 12 2"/><polyline points="2 17 12 22 22 17"/><polyline points="2 12 12 17 22 12"/></svg>
              </span>
              <span class="rich-menu-text">
                <span class="rich-menu-label">Enter the Dojo</span>
                <span class="rich-menu-desc">Interactive dojo with guided paths</span>
              </span>
              <span class="rich-menu-arrow">
                <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/><polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/></svg>
              </span>
            </a>
            <a href="https://wanderings.skill-wanderer.com" target="_blank" rel="noopener noreferrer" class="rich-menu-item" @click="closeMobileMenu(); isLearningPathDropdownOpen = false">
              <span class="rich-menu-icon">
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"/><path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"/></svg>
              </span>
              <span class="rich-menu-text">
                <span class="rich-menu-label">Wanderings Blog</span>
                <span class="rich-menu-desc">Insights, tutorials &amp; stories from the guild</span>
              </span>
              <span class="rich-menu-arrow">
                <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/><polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/></svg>
              </span>
            </a>
          </div>
        </div>

        <!-- Mobile Learn submenu -->
        <div class="mobile-dropdown">
          <button class="mobile-dropdown-trigger" @click="toggleMobileLearningPathDropdown" :class="{ active: isMobileLearningPathDropdownOpen }">
            Learn
            <svg class="dropdown-arrow" :class="{ rotated: isMobileLearningPathDropdownOpen }" xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <polyline points="6 9 12 15 18 9"></polyline>
            </svg>
          </button>
          <div class="mobile-dropdown-menu" :class="{ open: isMobileLearningPathDropdownOpen }">
            <NuxtLink to="/learning-path" @click="closeMobileMenu">Learning Paths</NuxtLink>
            <NuxtLink to="/learning-path/learn-contribute-build-earn" @click="closeMobileMenu">How Learning Works</NuxtLink>
            <NuxtLink to="/learners" @click="closeMobileMenu">Learner Stories</NuxtLink>
            <a href="https://dojo.skill-wanderer.com/paths" target="_blank" rel="noopener noreferrer" @click="closeMobileMenu">Enter the Dojo</a>
            <a href="https://wanderings.skill-wanderer.com" target="_blank" rel="noopener noreferrer" @click="closeMobileMenu">Wanderings Blog</a>
          </div>
        </div>

        <!-- Work With Us Dropdown (the client service that funds the mission) -->
        <div class="dropdown" @mouseenter="openPartnershipsDropdown" @mouseleave="scheduleDropdownClose">
          <span class="dropdown-trigger" :class="{ active: isPartnershipsDropdownOpen }">
            Work With Us
            <svg class="dropdown-arrow" :class="{ rotated: isPartnershipsDropdownOpen }" xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <polyline points="6 9 12 15 18 9"></polyline>
            </svg>
          </span>
          <div class="dropdown-menu rich-dropdown-menu" :class="{ open: isPartnershipsDropdownOpen }">
            <NuxtLink to="/work-with-us" class="rich-menu-item" @click="closeMobileMenu(); isPartnershipsDropdownOpen = false">
              <span class="rich-menu-icon">
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="7" width="20" height="14" rx="2" ry="2"/><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"/></svg>
              </span>
              <span class="rich-menu-text">
                <span class="rich-menu-label">Services</span>
                <span class="rich-menu-desc">Who we help and what we can build for you</span>
              </span>
            </NuxtLink>
            <NuxtLink to="/work-with-us/service-model" class="rich-menu-item" @click="closeMobileMenu(); isPartnershipsDropdownOpen = false">
              <span class="rich-menu-icon">
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg>
              </span>
              <span class="rich-menu-text">
                <span class="rich-menu-label">How It Works</span>
                <span class="rich-menu-desc">Free prototype, no development fee, no lock-in</span>
              </span>
            </NuxtLink>
            <NuxtLink to="/work-with-us/our-projects" class="rich-menu-item" @click="closeMobileMenu(); isPartnershipsDropdownOpen = false">
              <span class="rich-menu-icon">
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="3" width="20" height="14" rx="2" ry="2"/><line x1="8" y1="21" x2="16" y2="21"/><line x1="12" y1="17" x2="12" y2="21"/></svg>
              </span>
              <span class="rich-menu-text">
                <span class="rich-menu-label">Client Projects</span>
                <span class="rich-menu-desc">Real work for real clients</span>
              </span>
            </NuxtLink>
            <div class="rich-menu-divider"></div>
            <NuxtLink to="/contact" class="rich-menu-item rich-menu-cta" @click="closeMobileMenu(); isPartnershipsDropdownOpen = false">
              <span class="rich-menu-icon">
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"/></svg>
              </span>
              <span class="rich-menu-text">
                <span class="rich-menu-label">Tell Us About Your Idea</span>
                <span class="rich-menu-desc">Quan reads every message himself</span>
              </span>
              <span class="rich-menu-arrow">
                <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>
              </span>
            </NuxtLink>
          </div>
        </div>

        <!-- Mobile Work With Us submenu -->
        <div class="mobile-dropdown">
          <button class="mobile-dropdown-trigger" @click="toggleMobilePartnershipsDropdown" :class="{ active: isMobilePartnershipsDropdownOpen }">
            Work With Us
            <svg class="dropdown-arrow" :class="{ rotated: isMobilePartnershipsDropdownOpen }" xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <polyline points="6 9 12 15 18 9"></polyline>
            </svg>
          </button>
          <div class="mobile-dropdown-menu" :class="{ open: isMobilePartnershipsDropdownOpen }">
            <NuxtLink to="/work-with-us" @click="closeMobileMenu">Services</NuxtLink>
            <NuxtLink to="/work-with-us/service-model" @click="closeMobileMenu">How It Works</NuxtLink>
            <NuxtLink to="/work-with-us/our-projects" @click="closeMobileMenu">Client Projects</NuxtLink>
          </div>
        </div>

        <!-- About Dropdown -->
        <div class="dropdown" @mouseenter="openAboutDropdown" @mouseleave="scheduleDropdownClose">
          <span class="dropdown-trigger" :class="{ active: isAboutDropdownOpen }">
            About
            <svg class="dropdown-arrow" :class="{ rotated: isAboutDropdownOpen }" xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <polyline points="6 9 12 15 18 9"></polyline>
            </svg>
          </span>
          <div class="dropdown-menu rich-dropdown-menu" :class="{ open: isAboutDropdownOpen }">
            <NuxtLink to="/about" class="rich-menu-item" @click="closeMobileMenu(); isAboutDropdownOpen = false">
              <span class="rich-menu-icon">
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"/><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"/></svg>
              </span>
              <span class="rich-menu-text">
                <span class="rich-menu-label">Our Story</span>
                <span class="rich-menu-desc">Why Skill-Wanderer exists and who leads it</span>
              </span>
            </NuxtLink>
            <NuxtLink to="/team" class="rich-menu-item" @click="closeMobileMenu(); isAboutDropdownOpen = false">
              <span class="rich-menu-icon">
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>
              </span>
              <span class="rich-menu-text">
                <span class="rich-menu-label">Team</span>
                <span class="rich-menu-desc">Meet the people behind the guild</span>
              </span>
            </NuxtLink>
            <NuxtLink to="/principles" class="rich-menu-item" @click="closeMobileMenu(); isAboutDropdownOpen = false">
              <span class="rich-menu-icon">
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>
              </span>
              <span class="rich-menu-text">
                <span class="rich-menu-label">12 Principles</span>
                <span class="rich-menu-desc">The promises behind everything we do</span>
              </span>
            </NuxtLink>
            <NuxtLink to="/roadmap" class="rich-menu-item" @click="closeMobileMenu(); isAboutDropdownOpen = false">
              <span class="rich-menu-icon">
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="8" y1="6" x2="21" y2="6"/><line x1="8" y1="12" x2="21" y2="12"/><line x1="8" y1="18" x2="21" y2="18"/><line x1="3" y1="6" x2="3.01" y2="6"/><line x1="3" y1="12" x2="3.01" y2="12"/><line x1="3" y1="18" x2="3.01" y2="18"/></svg>
              </span>
              <span class="rich-menu-text">
                <span class="rich-menu-label">Roadmap</span>
                <span class="rich-menu-desc">What we're building next for the guild</span>
              </span>
            </NuxtLink>
            <div class="rich-menu-divider"></div>
            <NuxtLink to="/admiral-orion" class="rich-menu-item rich-menu-cta" @click="closeMobileMenu(); isAboutDropdownOpen = false">
              <span class="rich-menu-icon">
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>
              </span>
              <span class="rich-menu-text">
                <span class="rich-menu-label">Admiral Orion</span>
                <span class="rich-menu-desc">Our AI guide: ask anything, anytime</span>
              </span>
              <span class="rich-menu-arrow">
                <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>
              </span>
            </NuxtLink>
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
            <NuxtLink to="/about" @click="closeMobileMenu">Our Story</NuxtLink>
            <NuxtLink to="/team" @click="closeMobileMenu">Team</NuxtLink>
            <NuxtLink to="/principles" @click="closeMobileMenu">12 Principles</NuxtLink>
            <NuxtLink to="/roadmap" @click="closeMobileMenu">Roadmap</NuxtLink>
            <NuxtLink to="/admiral-orion" @click="closeMobileMenu">Admiral Orion</NuxtLink>
          </div>
        </div>

        <NuxtLink to="/contact" class="nav-cta" @click="closeMobileMenu">Get in Touch</NuxtLink>

        <!-- Mobile Easter Egg -->
        <NuxtLink
          v-if="!isHeartTargetPage"
          to="/about#mission"
          class="easter-egg-mobile"
          @click="closeMobileMenu"
          title="The Heart of Skill-Wanderer (Motivation for Founder)"
          aria-label="View the Skill-Wanderer mission"
        >
          <span class="heart-beat">❤️</span>
          <span>The Heart of Skill-Wanderer</span>
        </NuxtLink>
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
const isMobileAboutDropdownOpen = ref(false)
const isMobileLearningPathDropdownOpen = ref(false)
const isMobilePartnershipsDropdownOpen = ref(false)
const heartStyle = ref({ top: '50vh', left: '50vw' })
// Hidden until a free spot is found, so the heart never flashes over page text.
const isHeartVisible = ref(false)
const route = useRoute()
// The heart links to the mission section on /about, so it hides itself there.
const isHeartTargetPage = computed(() => route.path === '/about')

const HEART_MOVE_INTERVAL_MS = 10000
const HEART_SCROLL_SETTLE_MS = 300
const HEART_PLACEMENT_ATTEMPTS = 120
const HEART_MARGIN = 36
const HEART_HITBOX = 44
const HEART_SAFE_GAP = 12
const CLICKABLE_SELECTOR = 'a, button, input, select, textarea, label, [role="button"], [contenteditable="true"], [tabindex], .btn, .mobile-menu-btn, .dropdown-trigger, .mobile-dropdown-trigger, h1, h2, h3, h4, .logo, .rich-dropdown-menu, .pathfinder-panel, .pathfinder-fab'
// The heart must not rest on anything a visitor reads, looks at, or clicks.
const HEART_BLOCKING_TAGS = new Set([
  'A', 'BUTTON', 'INPUT', 'SELECT', 'TEXTAREA', 'LABEL', 'SUMMARY',
  'IMG', 'PICTURE', 'VIDEO', 'CANVAS', 'IFRAME',
  'P', 'H1', 'H2', 'H3', 'H4', 'H5', 'H6', 'LI', 'DT', 'DD', 'BLOCKQUOTE', 'FIGCAPTION',
  'SPAN', 'STRONG', 'EM', 'B', 'I', 'SMALL', 'CODE', 'PRE', 'TD', 'TH'
])
const HEART_BLOCKING_AREAS = 'svg, #navbar, .cookie-banner, .pathfinder-panel, .pathfinder-fab'
// Sample a grid across the heart plus its safety gap.
const HEART_SAMPLE_OFFSETS = [-HEART_SAFE_GAP, 10, 34, HEART_HITBOX + HEART_SAFE_GAP]

let heartMoveIntervalId: number | null = null
let heartScrollSettleId: number | null = null

const toggleMobileMenu = () => {
  isMobileMenuOpen.value = !isMobileMenuOpen.value
}

const closeMobileMenu = () => {
  isMobileMenuOpen.value = false
  isMobileAboutDropdownOpen.value = false
  isMobileLearningPathDropdownOpen.value = false
  isMobilePartnershipsDropdownOpen.value = false
  isAboutDropdownOpen.value = false
  isLearningPathDropdownOpen.value = false
  isPartnershipsDropdownOpen.value = false
}

let dropdownCloseTimer: ReturnType<typeof setTimeout> | null = null

const cancelDropdownClose = () => {
  if (dropdownCloseTimer) {
    clearTimeout(dropdownCloseTimer)
    dropdownCloseTimer = null
  }
}

const closeAllDropdowns = () => {
  isAboutDropdownOpen.value = false
  isLearningPathDropdownOpen.value = false
  isPartnershipsDropdownOpen.value = false
}

const scheduleDropdownClose = () => {
  cancelDropdownClose()
  dropdownCloseTimer = setTimeout(() => {
    closeAllDropdowns()
  }, 80)
}

const openAboutDropdown = () => {
  cancelDropdownClose()
  closeAllDropdowns()
  isAboutDropdownOpen.value = true
}

const openLearningDropdown = () => {
  cancelDropdownClose()
  closeAllDropdowns()
  isLearningPathDropdownOpen.value = true
}

const openPartnershipsDropdown = () => {
  cancelDropdownClose()
  closeAllDropdowns()
  isPartnershipsDropdownOpen.value = true
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

const getClickableRects = () => {
  const rects: DOMRect[] = []

  for (const element of document.querySelectorAll<HTMLElement>(CLICKABLE_SELECTOR)) {
    if (element.classList.contains('easter-egg') || element.classList.contains('easter-egg-mobile')) {
      continue
    }

    if (isVisibleElement(element)) {
      rects.push(element.getBoundingClientRect())
    }
  }

  return rects
}

const hasOwnText = (element: Element) =>
  Array.from(element.childNodes).some(
    (node) => node.nodeType === Node.TEXT_NODE && (node.textContent ?? '').trim() !== ''
  )

const isBlockingElement = (element: Element) =>
  HEART_BLOCKING_TAGS.has(element.tagName.toUpperCase())
  || element.closest(HEART_BLOCKING_AREAS) !== null
  || hasOwnText(element)

// True when any sample point around the heart lands on text, media, or a control.
const isOverContent = (x: number, y: number, heartElement: Element | null) => {
  for (const dx of HEART_SAMPLE_OFFSETS) {
    for (const dy of HEART_SAMPLE_OFFSETS) {
      const topmost = document
        .elementsFromPoint(x + dx, y + dy)
        .find((element) => !heartElement?.contains(element))

      if (topmost && isBlockingElement(topmost)) {
        return true
      }
    }
  }

  return false
}

const canPlaceHeartAt = (x: number, y: number, clickableRects: DOMRect[], heartElement: Element | null) => {
  const heartRect = {
    left: x,
    right: x + HEART_HITBOX,
    top: y,
    bottom: y + HEART_HITBOX
  }

  for (const rect of clickableRects) {
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

  return !isOverContent(x, y, heartElement)
}

const showHeartAt = (x: number, y: number) => {
  const wasHidden = !isHeartVisible.value
  heartStyle.value = {
    left: `${x}px`,
    top: `${y}px`
  }

  if (wasHidden) {
    // Let the jump land while still hidden, then fade in at the new spot.
    requestAnimationFrame(() => requestAnimationFrame(() => {
      isHeartVisible.value = true
    }))
  }
}

const setRandomHeartPosition = () => {
  if (isHeartTargetPage.value) {
    return
  }

  const heartElement = document.querySelector('.easter-egg')
  const navbarBottom = document.getElementById('navbar')?.getBoundingClientRect().bottom ?? 0

  const minX = HEART_MARGIN
  const maxX = window.innerWidth - HEART_MARGIN - HEART_HITBOX
  const minY = Math.max(HEART_MARGIN, navbarBottom + HEART_SAFE_GAP)
  const maxY = window.innerHeight - HEART_MARGIN - HEART_HITBOX

  const xRange = Math.max(maxX - minX, 0)
  const yRange = Math.max(maxY - minY, 0)
  const clickableRects = getClickableRects()

  for (let attempt = 0; attempt < HEART_PLACEMENT_ATTEMPTS; attempt += 1) {
    const randomX = minX + Math.random() * xRange
    const randomY = minY + Math.random() * yRange

    if (canPlaceHeartAt(randomX, randomY, clickableRects, heartElement)) {
      showHeartAt(randomX, randomY)
      return
    }
  }

  // No free spot in view right now: stay hidden rather than cover text.
  isHeartVisible.value = false
}

// Page content scrolls under the fixed heart, so hide it while scrolling and re-place it after.
const hideHeartWhileScrolling = () => {
  if (heartMoveIntervalId === null) {
    return
  }

  isHeartVisible.value = false
  if (heartScrollSettleId !== null) {
    window.clearTimeout(heartScrollSettleId)
  }
  heartScrollSettleId = window.setTimeout(() => {
    heartScrollSettleId = null
    setRandomHeartPosition()
  }, HEART_SCROLL_SETTLE_MS)
}

const stopHeartAutoMove = () => {
  if (heartMoveIntervalId !== null) {
    window.clearInterval(heartMoveIntervalId)
    heartMoveIntervalId = null
  }
  if (heartScrollSettleId !== null) {
    window.clearTimeout(heartScrollSettleId)
    heartScrollSettleId = null
  }
}

let resizeDebounceTimeoutId: number | null = null

const startHeartAutoMove = () => {
  stopHeartAutoMove()
  if (isHeartTargetPage.value || (typeof window !== 'undefined' && window.innerWidth <= 1024)) {
    return
  }

  setRandomHeartPosition()
  heartMoveIntervalId = window.setInterval(setRandomHeartPosition, HEART_MOVE_INTERVAL_MS)
}

const debouncedStartHeartAutoMove = () => {
  if (resizeDebounceTimeoutId !== null) {
    window.clearTimeout(resizeDebounceTimeoutId)
  }
  resizeDebounceTimeoutId = window.setTimeout(() => {
    startHeartAutoMove()
  }, 200)
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

  hideHeartWhileScrolling()
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll)
  window.addEventListener('resize', debouncedStartHeartAutoMove)
  startHeartAutoMove()
})

watch(() => route.path, () => {
  startHeartAutoMove()
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
  window.removeEventListener('resize', debouncedStartHeartAutoMove)
  if (resizeDebounceTimeoutId !== null) {
    window.clearTimeout(resizeDebounceTimeoutId)
    resizeDebounceTimeoutId = null
  }
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
  white-space: nowrap;
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
  gap: clamp(16px, 2.5vw, 45px);
  align-items: center;
}

.nav-links a {
  color: #e0e0e0;
  text-decoration: none;
  font-weight: 500;
  transition: all 0.3s ease;
  position: relative;
  padding: 0.5rem 0;
  white-space: nowrap;
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

/* Primary header CTA */
.nav-links a.nav-cta {
  background: linear-gradient(135deg, #FF6B35, #E85D25);
  color: white;
  padding: 10px 22px;
  border-radius: 50px;
  font-weight: 600;
  box-shadow: 0 4px 16px rgba(255, 107, 53, 0.3);
}

.nav-links a.nav-cta::after {
  display: none;
}

.nav-links a.nav-cta:hover,
.nav-links a.nav-cta.router-link-active {
  color: white;
}

.nav-links a.nav-cta:hover {
  box-shadow: 0 6px 22px rgba(255, 107, 53, 0.45);
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
  pointer-events: none;
  transition: opacity 0.3s ease, transform 0.3s ease;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.3);
  z-index: 1002;
}

.dropdown-menu.open {
  opacity: 1;
  visibility: visible;
  pointer-events: auto;
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

/* Rich dropdown menus */
.rich-dropdown-menu {
  min-width: 320px;
  padding: 8px 0;
}

.rich-menu-item {
  display: flex !important;
  align-items: center;
  gap: 12px;
  padding: 12px 16px !important;
  text-decoration: none;
  transition: all 0.2s ease;
  border-radius: 6px;
  margin: 2px 8px;
}

.rich-menu-item:hover {
  background: rgba(255, 107, 53, 0.08) !important;
}

.rich-menu-icon {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 36px;
  height: 36px;
  border-radius: 8px;
  background: rgba(255, 107, 53, 0.1);
  color: #FF6B35;
  flex-shrink: 0;
  transition: all 0.2s ease;
}

.rich-menu-item:hover .rich-menu-icon {
  background: rgba(255, 107, 53, 0.18);
  transform: scale(1.05);
}

.rich-menu-text {
  display: flex;
  flex-direction: column;
  gap: 2px;
  min-width: 0;
}

.rich-menu-label {
  font-size: 0.9rem;
  font-weight: 600;
  color: #e0e0e0;
  transition: color 0.2s ease;
}

.rich-menu-item:hover .rich-menu-label {
  color: #FF6B35;
}

.rich-menu-desc {
  font-size: 0.75rem;
  color: #888;
  line-height: 1.3;
  font-weight: 400;
}

.rich-menu-divider {
  height: 1px;
  background: rgba(255, 107, 53, 0.15);
  margin: 6px 16px;
}

.rich-menu-cta {
  background: rgba(255, 107, 53, 0.06);
  position: relative;
}

.rich-menu-cta .rich-menu-icon {
  background: rgba(255, 107, 53, 0.2);
}

.rich-menu-cta .rich-menu-label {
  color: #FF6B35;
}

.rich-menu-cta:hover {
  background: rgba(255, 107, 53, 0.14) !important;
}

.rich-menu-cta:hover .rich-menu-icon {
  background: rgba(255, 107, 53, 0.3);
}

.rich-menu-arrow {
  display: flex;
  align-items: center;
  color: #FF6B35;
  margin-left: auto;
  opacity: 0;
  transform: translateX(-4px);
  transition: all 0.2s ease;
}

.rich-menu-cta:hover .rich-menu-arrow {
  opacity: 1;
  transform: translateX(0);
}

/* External link arrows: always visible but subtle */
.rich-menu-item[target="_blank"] .rich-menu-arrow {
  opacity: 0.4;
  transform: translateX(0);
}

.rich-menu-item[target="_blank"]:hover .rich-menu-arrow {
  opacity: 1;
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

@media (max-width: 1024px) {
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
    max-height: 500px;
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
    max-height: calc(100vh - 75px);
    overflow-y: auto;
    -webkit-overflow-scrolling: touch;
    overscroll-behavior: contain;
    background: rgba(26, 26, 26, 0.98);
    backdrop-filter: blur(10px);
    -webkit-backdrop-filter: blur(10px);
    flex-direction: column;
    padding: 20px 20px 40px;
    gap: 16px;
    border-top: 1px solid rgba(255, 107, 53, 0.1);
    transform: translateY(-100%);
    opacity: 0;
    visibility: hidden;
    transition: all 0.3s ease;
    box-shadow: 0 8px 30px rgba(0, 0, 0, 0.4);
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

  .nav-links a.nav-cta {
    padding: 12px 32px;
    margin-top: 8px;
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

/* While hidden, position changes jump instantly instead of gliding across the page. */
.easter-egg.easter-egg--hidden {
  opacity: 0;
  pointer-events: none;
  transition: opacity 0.2s ease;
}

.heart-beat {
  animation: heartBeat 1.2s ease-in-out infinite;
  display: inline-block;
}

@keyframes heartBeat {
  0% { transform: scale(1); }
  15% { transform: scale(1.3); }
  30% { transform: scale(1); }
  45% { transform: scale(1.3); }
  60% { transform: scale(1); }
  100% { transform: scale(1); }
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
@media (max-width: 1024px) {
  .easter-egg {
    display: none !important;
  }

  .easter-egg-mobile {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 10px;
    font-size: 1rem;
    font-weight: 500;
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