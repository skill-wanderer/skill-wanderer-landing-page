export interface TeamMember {
  slug: string
  name: string
  role: string
  badge: string
  avatar: string
  tagline: string
  location: string
  title: string
  github?: string
  linkedin?: string
  website?: string
  bio: string
  skills: string[]
  contributions: string[]
}

export const teamMembers: TeamMember[] = [
  {
    slug: 'quan-nguyen',
    name: 'Quan Nguyen',
    role: 'Founder & Leader',
    badge: '🏅 Founder',
    avatar: '/skill-wanderer-avatar.jpg',
    tagline: 'Building the future of tech education',
    location: 'Vietnam',
    title: 'Founder & Project Leader',
    github: 'https://github.com/skill-wanderer',
    bio: 'Quan is the founder and leader of Skill-Wanderer. With a journey that began in international trade and evolved through four startups, leading 50+ members, and wandering through roles from Frontend to DevOps, from Business Analyst to Solution Architect, Quan brings a unique perspective to tech education. His unconventional path taught him that the most fundamental skill is learning how to learn—and that every failure is a stepping stone to mastery. Skill-Wanderer is the culmination of that belief: a platform where honest, practical education meets real-world experience, completely free and without bias.',
    skills: ['Solution Architecture', 'Full-Stack Development', 'DevOps & Kubernetes', 'AI & Machine Learning', 'Mobile Development', 'Project Management', 'Team Leadership', 'Community Building', 'Mentorship', 'One-Man Army'],
    contributions: [
      'Founded Skill-Wanderer and established its 12 guiding principles',
      'Built the entire platform on a self-hosted Kubernetes cluster using just an old laptop and Orange Pi',
      'Designed the learning path curriculum and mentorship program',
      'Created the social enterprise model and Success Sharing framework',
      'Leading the open-source development team and community growth',
    ],
  },
  {
    slug: 'thanh-nguyen',
    name: 'Thanh Nguyen',
    role: 'Full-Cycle Associate',
    badge: '💫 Team Member',
    avatar: '/thanh-nguyen-avatar.jpg', 
    tagline: 'Fueling Innovation through Lifelong Learning and Adaptability',
    location: 'Vietnam',
    title: 'Full-Cycle Associate',
    github: 'https://github.com/Thanh-Nguyen-Valerie', 
    bio: "As a fresh graduate with a 'learn-it-all' rather than 'know-it-all' philosophy, Thanh joins Skill-Wanderer with a vibrant energy and a relentless drive for excellence. Embracing the 'Full-Cycle' mindset, Thanh is dedicated to mastering the entire product lifecycle—from initial concept to deployment. With a belief that the tech landscape is an infinite classroom, Thanh views every challenge as a strategic stepping stone to mastery, aiming to bridge the gap between academic theory and high-impact, real-world solutions.",
    skills: [
      'Full-Stack Development', 
      'Problem-Solving', 
      'Rapid Prototyping', 
      'Growth Mindset', 
      'Cross-functional Collaboration'
    ],
    contributions: [
      'Currently undergoing onboarding and deep-diving into the Skill-Wanderer ecosystem',
    ],
  },
  {
    slug: 'rei-reltroner',
    name: 'Rei Reltroner',
    role: 'Full-Cycle Solutions Associate',
    badge: '⭐ Team Member',
    avatar: '/learners/Rei-Reltroner.jpeg',
    tagline: 'Designing deterministic systems with architecture-first thinking',
    location: 'Indonesia',
    title: 'Full-Cycle Solutions Associate',
    github: 'https://github.com/Reltroner',
    linkedin: 'https://www.linkedin.com/in/rei-reltroner-a3a7b8173/',
    website: 'https://www.reltroner.com',
    bio: 'Rei Reltroner is a system-oriented backend engineer focused on building deterministic, modular, and production-grade systems. With a strong foundation in Laravel, REST API architecture, and authentication systems (JWT, OIDC, Keycloak), Rei approaches engineering as a layered system—from infrastructure to logic—prioritizing root-cause analysis and long-term reliability. As an early contributor to Skill-Wanderer, Rei is expanding from independent system building into full-cycle solution delivery within a global, collaborative environment, bridging architecture thinking with real-world product development.',
    skills: [
      'Backend Architecture (Laravel)',
      'REST API Design',
      'Authentication Systems (JWT, OIDC, Keycloak)',
      'Modular System Design',
      'Deterministic System Engineering',
      'Database Design (MySQL, PostgreSQL)',
      'CI/CD (GitHub Actions)',
      'Docker & Containerization',
      'System Debugging (Root Cause Analysis)',
      'Technical Documentation (ADR, Incident Reports)',
    ],
    contributions: [
      'Contributing to the development of a distributed platform ecosystem (learner portal, microservices, community systems)',
      'Participating in Jira-driven agile workflows including issue tracking and sprint collaboration',
      'Applying backend system design principles in a multi-component, team-based environment',
      'Supporting full-cycle product development from implementation to validation and iteration',
      'Engaging in QA discussions and system validation to ensure reliability and consistency',
      'Collaborating with international contributors across engineering and product discussions',
    ],
  },
  {
    slug: 'logicalaryan',
    name: 'Aryan',
    role: ' Associate',
    badge: '⭐ Team Member',
    avatar: '/learners/Aryan.jpeg',
    tagline: 'Debugging under pressure, delivering with precision',
    location: 'India',
    title: 'Full-Cycle Associate',
    github: 'https://github.com/logicalaryan',
    bio: `Aryan is just a rookie — but he’s stepping in with a builder’s mindset and a strong foundation in development.

  He may not know everything yet, but he understands how to build. With hands-on experience in full stack development, Aryan has worked on few projects involving modern web technologies, creating responsive UIs, handling backend logic, and connecting systems end-to-end. He believes in learning by doing — not just watching, but actually building, breaking, and improving.

  Instead of waiting to feel ready, Aryan puts himself under pressure, takes on challenges, and figures things out along the way. Every bug he fixes and every feature he ships adds to his growing understanding of software development.

  He is still learning, still evolving — but with each step, his skills, confidence, and problem-solving ability are getting stronger.`,
    skills: ['Nuxt 3', 'Vue', 'TypeScript','React','JavaScript',],
contributions: [
  'Learning and contributing to UI development',
  'Fixing minor UI issues',
  'Gradually contributing to frontend features'
]  },
]

