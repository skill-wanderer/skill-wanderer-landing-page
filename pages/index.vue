<template>
  <div>
    <HeroSection />
    <FeaturesSection />
    <ValuesSection />
    <JourneySection />
    <ExpertiseBriefSection />
  </div>
</template>

<script setup lang="ts">
// SEO and meta management
useSEO({
  title: 'Skill-Wanderer - Free Tech Education for Everyone',
  description: 'Free, practical tech education that celebrates learning through failure. Quality education shapes brighter futures with no ads or affiliate bias.',
  keywords: ['tech education', 'programming courses', 'free coding bootcamp', 'web development', 'skill development', 'learning platform'],
  type: 'website',
  structuredData: [
    createOrganizationSchema(),
    createFAQSchema([
      {
        question: 'Is Skill-Wanderer really free?',
        answer: 'Yes, all Skill-Wanderer learning content is completely free. Human mentors and support are sustained through our social enterprise model with Social Impact Tokens.'
      },
      {
        question: 'What makes Skill-Wanderer different from other learning platforms?',
        answer: 'Skill-Wanderer operates with complete integrity — no ads, no affiliate marketing, no commissions. All recommendations are purely for your benefit. We integrate real-world expertise into practical tech education.'
      },
      {
        question: 'Who is behind Skill-Wanderer?',
        answer: 'Skill-Wanderer was founded by Quan Nguyen, a passionate educator who believes quality education shapes brighter futures. The platform is built by learners, for learners.'
      },
      {
        question: 'How does Skill-Wanderer sustain itself financially?',
        answer: 'Skill-Wanderer uses a success sharing model through its Expertise & Impact work. All net revenue is reinvested into the platform, community, and global educational impact.'
      }
    ])
  ]
})

// 🔷 Define handler outside (important for cleanup)
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

const handleAnchorClick = (e: Event) => {
  const targetElement = e.target as HTMLElement | null
  if (!targetElement) return

  const anchor = targetElement.closest('a[href^="#"]') as HTMLAnchorElement | null
  if (!anchor) return

  const href = anchor.getAttribute('href')
  if (!href) return

  const target = document.querySelector(href)
  if (target) {
    e.preventDefault()
    target.scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    })
  }
}

// 🔷 Mount
onMounted(() => {
  window.addEventListener('scroll', handleScroll)
  document.addEventListener('click', handleAnchorClick)
})

// 🔷 Cleanup (TOP LEVEL ✅)
onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
  document.removeEventListener('click', handleAnchorClick)
})
</script>
