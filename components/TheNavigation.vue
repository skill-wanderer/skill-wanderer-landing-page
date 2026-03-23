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
          <div class="dropdown-menu rich-dropdown-menu" :class="{ open: isAboutDropdownOpen }">
            <NuxtLink to="/about" class="rich-menu-item" @click="closeMobileMenu(); isAboutDropdownOpen = false">
              <span class="rich-menu-icon">
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"/><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"/></svg>
              </span>
              <span class="rich-menu-text">
                <span class="rich-menu-label">Our Story</span>
                <span class="rich-menu-desc">How the guild came to be</span>
              </span>
            </NuxtLink>
            <NuxtLink to="/team" class="rich-menu-item" @click="closeMobileMenu(); isAboutDropdownOpen = false">
              <span class="rich-menu-icon">
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>
              </span>
              <span class="rich-menu-text">
                <span class="rich-menu-label">Guild Members</span>
                <span class="rich-menu-desc">Meet the craftspeople building the guild</span>
              </span>
            </NuxtLink>
            <NuxtLink to="/principles" class="rich-menu-item" @click="closeMobileMenu(); isAboutDropdownOpen = false">
              <span class="rich-menu-icon">
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>
              </span>
              <span class="rich-menu-text">
                <span class="rich-menu-label">Guild Principles</span>
                <span class="rich-menu-desc">The values that guide our social enterprise</span>
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
                <span class="rich-menu-desc">The guardian spirit of Skill-Wanderer</span>
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
            <NuxtLink to="/team" @click="closeMobileMenu">Guild Members</NuxtLink>
            <NuxtLink to="/principles" @click="closeMobileMenu">Guild Principles</NuxtLink>
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
          <div class="dropdown-menu rich-dropdown-menu" :class="{ open: isLearningPathDropdownOpen }">
            <NuxtLink to="/learning-path/learn-contribute-build-earn" class="rich-menu-item" @click="closeMobileMenu(); isLearningPathDropdownOpen = false">
              <span class="rich-menu-icon">
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/></svg>
              </span>
              <span class="rich-menu-text">
                <span class="rich-menu-label">Guild Philosophy</span>
                <span class="rich-menu-desc">Learn. Contribute. Build. Earn.</span>
              </span>
            </NuxtLink>
            <NuxtLink to="/learning-path" class="rich-menu-item" @click="closeMobileMenu(); isLearningPathDropdownOpen = false">
              <span class="rich-menu-icon">
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="22 12 18 12 15 21 9 3 6 12 2 12"/></svg>
              </span>
              <span class="rich-menu-text">
                <span class="rich-menu-label">Learning Paths</span>
                <span class="rich-menu-desc">Pick a craft and grow your skills step by step</span>
              </span>
            </NuxtLink>
            <NuxtLink to="/learners" class="rich-menu-item" @click="closeMobileMenu(); isLearningPathDropdownOpen = false">
              <span class="rich-menu-icon">
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>
              </span>
              <span class="rich-menu-text">
                <span class="rich-menu-label">Guild Stories</span>
                <span class="rich-menu-desc">Real journeys from our guild members</span>
              </span>
            </NuxtLink>
            <div class="rich-menu-divider"></div>
            <a href="https://dojo.skill-wanderer.com/paths" target="_blank" rel="noopener noreferrer" class="rich-menu-item rich-menu-cta" @click="closeMobileMenu(); isLearningPathDropdownOpen = false">
              <span class="rich-menu-icon">
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/><polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/></svg>
              </span>
              <span class="rich-menu-text">
                <span class="rich-menu-label">Enter the Dojo</span>
                <span class="rich-menu-desc">Jump into the guild's learning dojo</span>
              </span>
              <span class="rich-menu-arrow">
                <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>
              </span>
            </a>
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
            <NuxtLink to="/learning-path/learn-contribute-build-earn" @click="closeMobileMenu">Guild Philosophy</NuxtLink>
            <NuxtLink to="/learning-path" @click="closeMobileMenu">Learning Paths</NuxtLink>
            <NuxtLink to="/learners" @click="closeMobileMenu">Guild Stories</NuxtLink>
            <a href="https://dojo.skill-wanderer.com/paths" target="_blank" rel="noopener noreferrer" @click="closeMobileMenu">Start Studying</a>
          </div>
        </div>

        <!-- Engage the Guild Dropdown -->
        <div class="dropdown" @mouseenter="isPartnershipsDropdownOpen = true" @mouseleave="isPartnershipsDropdownOpen = false">
          <span class="dropdown-trigger" :class="{ active: isPartnershipsDropdownOpen }">
            Engage the Guild
            <svg class="dropdown-arrow" :class="{ rotated: isPartnershipsDropdownOpen }" xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <polyline points="6 9 12 15 18 9"></polyline>
            </svg>
          </span>
          <div class="dropdown-menu rich-dropdown-menu" :class="{ open: isPartnershipsDropdownOpen }">
            <NuxtLink to="/work-with-us" class="rich-menu-item" @click="closeMobileMenu(); isPartnershipsDropdownOpen = false">
              <span class="rich-menu-icon">
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><path d="M16 8h-6a2 2 0 1 0 0 4h4a2 2 0 1 1 0 4H8"/><path d="M12 18V6"/></svg>
              </span>
              <span class="rich-menu-text">
                <span class="rich-menu-label">Guild Approach</span>
                <span class="rich-menu-desc">How we partner to build and sustain impact</span>
              </span>
            </NuxtLink>
            <NuxtLink to="/work-with-us/who-we-work-with" class="rich-menu-item" @click="closeMobileMenu(); isPartnershipsDropdownOpen = false">
              <span class="rich-menu-icon">
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>
              </span>
              <span class="rich-menu-text">
                <span class="rich-menu-label">Ideal Partners</span>
                <span class="rich-menu-desc">Startups, non-profits & builders we serve</span>
              </span>
            </NuxtLink>
            <NuxtLink to="/work-with-us/our-projects" class="rich-menu-item" @click="closeMobileMenu(); isPartnershipsDropdownOpen = false">
              <span class="rich-menu-icon">
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="3" width="20" height="14" rx="2" ry="2"/><line x1="8" y1="21" x2="16" y2="21"/><line x1="12" y1="17" x2="12" y2="21"/></svg>
              </span>
              <span class="rich-menu-text">
                <span class="rich-menu-label">Projects</span>
                <span class="rich-menu-desc">Real work creating real-world impact</span>
              </span>
            </NuxtLink>
            <NuxtLink to="/work-with-us/success-sharing-model" class="rich-menu-item" @click="closeMobileMenu(); isPartnershipsDropdownOpen = false">
              <span class="rich-menu-icon">
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>
              </span>
              <span class="rich-menu-text">
                <span class="rich-menu-label">Success Sharing</span>
                <span class="rich-menu-desc">Partnership over outsourcing — shared risk, shared reward</span>
              </span>
            </NuxtLink>
            <NuxtLink to="/work-with-us/pricing" class="rich-menu-item" @click="closeMobileMenu(); isPartnershipsDropdownOpen = false">
              <span class="rich-menu-icon">
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="12" y1="1" x2="12" y2="23"/><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/></svg>
              </span>
              <span class="rich-menu-text">
                <span class="rich-menu-label">Guild Engagements</span>
                <span class="rich-menu-desc">Sprint packages, retainers & partnership models</span>
              </span>
            </NuxtLink>
            <div class="rich-menu-divider"></div>
            <NuxtLink to="/work-with-us/become-a-partner" class="rich-menu-item rich-menu-cta" @click="closeMobileMenu(); isPartnershipsDropdownOpen = false">
              <span class="rich-menu-icon">
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"/><path d="M13.73 21a2 2 0 0 1-3.46 0"/></svg>
              </span>
              <span class="rich-menu-text">
                <span class="rich-menu-label">Partner With Us</span>
                <span class="rich-menu-desc">Start a conversation about working together</span>
              </span>
              <span class="rich-menu-arrow">
                <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>
              </span>
            </NuxtLink>
          </div>
        </div>

        <!-- Mobile Engage the Guild submenu -->
        <div class="mobile-dropdown">
          <button class="mobile-dropdown-trigger" @click="toggleMobilePartnershipsDropdown" :class="{ active: isMobilePartnershipsDropdownOpen }">
            Engage the Guild
            <svg class="dropdown-arrow" :class="{ rotated: isMobilePartnershipsDropdownOpen }" xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <polyline points="6 9 12 15 18 9"></polyline>
            </svg>
          </button>
          <div class="mobile-dropdown-menu" :class="{ open: isMobilePartnershipsDropdownOpen }">
            <NuxtLink to="/work-with-us" @click="closeMobileMenu">Guild Approach</NuxtLink>
            <NuxtLink to="/work-with-us/who-we-work-with" @click="closeMobileMenu">Ideal Partners</NuxtLink>
            <NuxtLink to="/work-with-us/our-projects" @click="closeMobileMenu">Projects</NuxtLink>
            <NuxtLink to="/work-with-us/success-sharing-model" @click="closeMobileMenu">Success Sharing</NuxtLink>
            <NuxtLink to="/work-with-us/pricing" @click="closeMobileMenu">Guild Engagements</NuxtLink>
            <NuxtLink to="/work-with-us/become-a-partner" @click="closeMobileMenu">Partner With Us</NuxtLink>
          </div>
        </div>

        <!-- Guild Ecosystem Dropdown -->
        <div class="dropdown" @mouseenter="isEcosystemDropdownOpen = true" @mouseleave="isEcosystemDropdownOpen = false">
          <span class="dropdown-trigger" :class="{ active: isEcosystemDropdownOpen }">
            Guild Ecosystem
            <svg class="dropdown-arrow" :class="{ rotated: isEcosystemDropdownOpen }" xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <polyline points="6 9 12 15 18 9"></polyline>
            </svg>
          </span>
          <div class="dropdown-menu rich-dropdown-menu" :class="{ open: isEcosystemDropdownOpen }">
            <a href="https://dojo.skill-wanderer.com" target="_blank" rel="noopener noreferrer" class="rich-menu-item" @click="closeMobileMenu(); isEcosystemDropdownOpen = false">
              <span class="rich-menu-icon">
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polygon points="12 2 2 7 12 12 22 7 12 2"/><polyline points="2 17 12 22 22 17"/><polyline points="2 12 12 17 22 12"/></svg>
              </span>
              <span class="rich-menu-text">
                <span class="rich-menu-label">Dojo</span>
                <span class="rich-menu-desc">Interactive guild dojo with guided paths</span>
              </span>
              <span class="rich-menu-arrow">
                <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/><polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/></svg>
              </span>
            </a>
            <a href="https://wanderings.skill-wanderer.com" target="_blank" rel="noopener noreferrer" class="rich-menu-item" @click="closeMobileMenu(); isEcosystemDropdownOpen = false">
              <span class="rich-menu-icon">
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"/><path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"/></svg>
              </span>
              <span class="rich-menu-text">
                <span class="rich-menu-label">Wanderings Blog</span>
                <span class="rich-menu-desc">Insights, tutorials & stories from the guild</span>
              </span>
              <span class="rich-menu-arrow">
                <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/><polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/></svg>
              </span>
            </a>
          </div>
        </div>

        <!-- Mobile Guild Ecosystem submenu -->
        <div class="mobile-dropdown">
          <button class="mobile-dropdown-trigger" @click="toggleMobileEcosystemDropdown" :class="{ active: isMobileEcosystemDropdownOpen }">
            Guild Ecosystem
            <svg class="dropdown-arrow" :class="{ rotated: isMobileEcosystemDropdownOpen }" xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <polyline points="6 9 12 15 18 9"></polyline>
            </svg>
          </button>
          <div class="mobile-dropdown-menu" :class="{ open: isMobileEcosystemDropdownOpen }">
            <a href="https://dojo.skill-wanderer.com" target="_blank" rel="noopener noreferrer" @click="closeMobileMenu">Dojo</a>
            <a href="https://wanderings.skill-wanderer.com" target="_blank" rel="noopener noreferrer" @click="closeMobileMenu">Wanderings Blog</a>
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

let resizeDebounceTimeoutId: number | null = null

const startHeartAutoMove = () => {
  stopHeartAutoMove()
  if (isMissionPage.value) {
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

/* External link arrows — always visible but subtle */
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