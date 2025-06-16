<template>
    <TheNavigation />

  <div>    <!-- Hero Section -->
    <PrincipleHero
      :number="7"
      title="Pathways for Our Learners" 
      tagline="From Student to Colleague"
      breadcrumb-name="Pathways for Our Learners"
    />

    <!-- Story Section -->
    <PrincipleStory
      :intro="storyIntro"
      :chapters="storyChapters"
    />

    <!-- Practice Section -->
    <PrinciplePractice
      title="Creating Real Pathways"
      subtitle="How we turn promise into practice"
      :examples="practiceExamples"
      background-color="var(--darker-bg)"
    />

    <!-- Quote Section -->
    <PrincipleQuote
      quote="We are so committed to your success that our goal is to one day be your colleagues. This isn't just education—it's an invitation to join us in building something extraordinary."
    />

    <!-- Navigation Section -->
    <PrincipleNavigation current-slug="pathways" />
  </div>
</template>

<script setup lang="ts">
import type { StoryChapter, PracticeExample } from '~/types'

// SEO Meta
useHead({
  title: 'Pathways for Our Learners: From Student to Colleague | Principle #7 - Skill-Wanderer',
  meta: [
    {
      name: 'description',
      content: 'Discover how Skill-Wanderer creates pathways from student to colleague, eating our own dog food to ensure quality education and building our own successors through proven learning systems.'
    }
  ]
})

const storyIntro = `
  I call our seventh principle <strong>Pathways for Our Learners</strong>, but its internal motto is much simpler: "Eat your own dog food." This philosophy comes from hard-earned lessons in both software development and education.
`

const storyChapters: StoryChapter[] = [
  {
    icon: '💔',
    title: 'The Perfect System Nobody Used',
    content: [
      {
        type: 'text',
        text: `Of the many systems I've built, one stands out in my memory the most—not for its success, but for 
               what it taught me. It was an in-house system, and on paper, it was perfect. The development team 
               met every business requirement, we finished quickly, and we were proud of our work. There was just 
               one problem: the users didn't openly refuse to use it; they just... didn't. They were unwilling and 
               did everything they could to avoid it.`
      },
      {
        type: 'personal-story',
        text: `I still remember the crushing realization when I walked through the office weeks after deployment. 
               People were still using spreadsheets, still doing things the old way. Our "perfect" system sat 
               unused, a monument to our disconnect from reality. The worst part? We had been so confident that 
               we'd already started planning to sell it externally.`
      },
      {
        type: 'text',
        text: `We had made a classic mistake: we left the most important stakeholder—the end-user—out of the process 
               and then forced a system onto them. Unsurprisingly, when we tried to sell this "successful" system 
               to external customers, it failed completely.`
      }
    ]
  },
  {
    icon: '🎓',
    title: 'The Education Disconnect',
    content: [
      {
        type: 'text',
        text: `I see this same disconnect happening constantly in education. I've hired many developers from so-called 
               bootcamps and even universities who are a testament to this gap. They often know plenty of things they 
               don't need to, and very little of what is actually most important for the job. In one extreme case, 
               a graduate from a prestigious college admitted to me that he had bribed a professor to pass.`
      },
      {
        type: 'text',
        text: `The common theme is clear: many institutions teach a curriculum and then leave the learners on their 
               own after graduation, with little accountability for their actual success.`
      },
      {
        type: 'text',
        text: `I once enrolled in an online university that promised internships with its related companies after 
               completing half the subjects. It was a compelling idea. But the university eventually had to abandon 
               this model, buckling under financial pressures and flaws in its own educational methods. However, it 
               taught me a valuable lesson: <strong>if you truly believe in the quality of what you produce, you must 
               be willing to use it yourself.</strong>`
      }
    ]
  },
  {
    icon: '💡',
    title: 'The Core Philosophy',
    content: [
      {
        type: 'motto-highlight',
        text: '"Eat Your Own Dog Food"',
        additionalText: 'If you truly believe in what you create, you must be willing to use it yourself.'
      }
    ]
  },
  {
    icon: '🔄',
    title: 'The Self-Reinforcing Loop',
    content: [
      {
        type: 'text',
        text: `This is the very soul of our <strong>Pathways for Our Learners</strong> principle.`
      },
      {
        type: 'text',
        text: `I envision an organization where we create pathways for the people we educate to join our own team. 
               This is our ultimate proof of quality and our method for building our own successors. The e-learning 
               platform we build will also become the main educational platform for our own future staff, creating 
               a powerful, self-reinforcing loop.`
      },
      {
        type: 'reinforcing-loop',
        text: 'The Self-Reinforcing Loop',
        additionalText: `Every graduate who joins us brings fresh perspectives. Every team member who creates content 
                        knows it must be good enough for their own learning. Every improvement makes the next 
                        generation even better.`
      },
      {
        type: 'text',
        text: `I understand this is a long-term vision. In our early phase, with limited course offerings and the 
               challenges of a rough start, direct hiring opportunities will be few. But by building our organization 
               on a foundation of quality and using our financial model (Principle #12) to serve our mission without 
               pressure for short-term profit, we are confident this principle is not just a dream, but an achievable 
               and essential part of our future.`
      },
      {
        type: 'text',
        text: `It's our promise to our learners: <strong>we are so committed to your success that our goal is to 
               one day be your colleagues.</strong>`
      }
    ]
  },
  {
    icon: '🌱',
    title: 'The Journey Ahead',
    content: [
      {
        type: 'vision-timeline',
        text: 'Building pathways takes time, but the destination is clear',
        timelineItems: [
          {
            phase: 'Early Phase (Now)',
            description: 'Building foundation courses, establishing quality standards, creating our first content. Limited direct opportunities but unlimited commitment.',
            icon: '🌱'
          },
          {
            phase: 'Growth Phase',
            description: 'First learners complete programs, initial hires from our community, proving the model works. Success stories begin.',
            icon: '🌿'
          },
          {
            phase: 'Maturity Phase',
            description: 'Regular pipeline from learner to team member, alumni creating content, multiple career paths available within our ecosystem.',
            icon: '🌳'
          },
          {
            phase: 'Full Circle',
            description: 'Former learners leading teams, creating new programs, mentoring the next generation. The loop becomes self-sustaining.',
            icon: '🔄'
          }
        ]
      }
    ]
  }
]

const practiceExamples: PracticeExample[] = [
  {
    title: 'Internal Education First',
    items: [
      'Every team member learns through our own platform',
      'New hires onboard using our courses',
      'Continuous learning paths for existing staff',
      'If it\'s not good enough for us, it\'s not good enough for anyone'
    ]
  },
  {
    title: 'Performance-Based Opportunities',
    items: [
      'Track learner progress and engagement',
      'Identify top performers through projects',
      'Offer internships and contract work first',
      'Full-time positions for proven contributors'
    ]
  },
  {
    title: 'Building Succession',
    items: [
      'Today\'s learners become tomorrow\'s colleagues',
      'Career progression from student to educator',
      'Leadership development for future growth',
      'Creating our own talent pipeline'
    ]
  }
]
</script>

<style scoped>
/* Custom styles specific to this principle page */
</style>
