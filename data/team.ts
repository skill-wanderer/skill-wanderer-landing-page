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
    badge: '🚀 Founder',
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
]
