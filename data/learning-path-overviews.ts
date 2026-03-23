export type LessonStatus = 'available' | 'coming-soon'

export interface ReusablePathLesson {
  id: string
  title: string
  description?: string
  status: LessonStatus
  url?: string
}

export interface ReusablePathStage {
  id: string
  title: string
  timeline: string
  description: string
  points: string[]
}

export interface ReusablePathOverview {
  slug: string
  title: string
  description: string
  intro: string
  goals: string[]
  stages: ReusablePathStage[]
  lessons: ReusablePathLesson[]
}

export const reusablePathOverviews: Record<string, ReusablePathOverview> = {
  'web-development': {
    slug: 'web-development',
    title: 'Web Development',
    description: 'A guided path from frontend foundations to shipping full-stack products.',
    intro:
      'Web development is not only about making pages look good. It is about understanding user experience, application logic, data flow, performance, security, and delivery. This overview gives learners a clear map of what will be covered so each lesson feels connected to a real goal.',
    goals: [
      'Understand the full journey from static pages to interactive full-stack applications.',
      'Build responsive interfaces with clean HTML, CSS, and modern JavaScript.',
      'Work with frontend frameworks, backend APIs, and database-backed features.',
      'Ship projects with stronger habits in debugging, testing, deployment, and maintainability.'
    ],
    stages: [
      {
        id: '01',
        title: 'Frontend Foundations',
        timeline: 'Stage One',
        description: 'Build the base skills required to structure content, style interfaces, and think in reusable UI pieces.',
        points: [
          'Semantic HTML and accessible page structure',
          'CSS layout systems, responsive design, and visual consistency',
          'JavaScript fundamentals for interaction and browser behavior'
        ]
      },
      {
        id: '02',
        title: 'Modern Frontend Development',
        timeline: 'Stage Two',
        description: 'Move from static pages into component-based application development with state, routing, and data flow.',
        points: [
          'Component thinking and frontend architecture',
          'Routing, reusable logic, and state handling',
          'Data fetching, forms, validation, and user feedback'
        ]
      },
      {
        id: '03',
        title: 'Backend and API Skills',
        timeline: 'Stage Three',
        description: 'Understand how web apps communicate with services, manage business logic, and protect data.',
        points: [
          'REST concepts, request lifecycle, and error handling',
          'Authentication, authorization, and secure application flow',
          'Server-side logic and integration patterns'
        ]
      },
      {
        id: '04',
        title: 'Data, Deployment, and Product Thinking',
        timeline: 'Stage Four',
        description: 'Connect application features to real product delivery with persistence, deployment, and maintainable workflows.',
        points: [
          'Database basics, modeling, and CRUD workflows',
          'Deployment pipelines, environment configuration, and monitoring',
          'Testing, debugging, and improving production quality'
        ]
      }
    ],
    lessons: [
      {
        id: 'L01',
        title: 'HTML Foundations: Building with Purpose',
        description: 'Learn how HTML gives meaning to content — from document structure and semantic elements to accessible forms and real-world markup patterns.',
        status: 'available',
        url: 'https://dojo.skill-wanderer.com/courses/html-fundamentals-from-structure-to-forms'
      },
      {
        id: 'L02',
        title: 'More lessons coming soon',
        status: 'coming-soon'
      },
      {
        id: 'L03',
        title: 'More lessons coming soon',
        status: 'coming-soon'
      }
    ]
  },
  'mobile-development': {
    slug: 'mobile-development',
    title: 'Mobile Development',
    description: 'Create robust mobile apps with practical workflows for iOS, Android, and cross-platform projects.',
    intro:
      'This path helps learners understand mobile product thinking, UI patterns, app architecture, and release workflows across native and cross-platform development.',
    goals: [
      'Understand platform fundamentals for Android, iOS, and cross-platform delivery.',
      'Build mobile-friendly UI flows with stronger UX and performance habits.',
      'Learn app architecture basics, API integration, and release-ready practices.'
    ],
    stages: [
      {
        id: '01',
        title: 'Mobile Foundations',
        timeline: 'Stage One',
        description: 'Build a strong base in mobile UI patterns, platform constraints, and app navigation flow.',
        points: [
          'Mobile-first layout and touch-friendly UX',
          'Native platform basics and app lifecycle',
          'Cross-platform mindset and development setup'
        ]
      },
      {
        id: '02',
        title: 'Data and App Logic',
        timeline: 'Stage Two',
        description: 'Connect screens with state, API integration, and predictable behavior in real usage scenarios.',
        points: [
          'State management and data flow patterns',
          'API calls, error handling, and loading states',
          'Offline and low-connectivity considerations'
        ]
      },
      {
        id: '03',
        title: 'Release and Quality',
        timeline: 'Stage Three',
        description: 'Prepare apps for real users with testing, performance checks, and release practices.',
        points: [
          'Basic mobile testing strategy',
          'Performance and device compatibility checks',
          'Build, signing, and release workflow overview'
        ]
      }
    ],
    lessons: [
      {
        id: 'M01',
        title: 'More lessons coming soon',
        status: 'coming-soon'
      },
      {
        id: 'M02',
        title: 'More lessons coming soon',
        status: 'coming-soon'
      }
    ]
  },
  'business-analyst': {
    slug: 'business-analyst',
    title: 'Business Analyst',
    description: 'Bridge business and technical teams with strong analysis and communication.',
    intro:
      'This path focuses on requirement analysis, stakeholder communication, process mapping, and writing clear product documentation for delivery teams.',
    goals: [
      'Translate business goals into clear, actionable software requirements.',
      'Improve collaboration between stakeholders, product, and engineering teams.',
      'Practice practical analysis workflows used in real delivery environments.'
    ],
    stages: [
      {
        id: '01',
        title: 'Business Discovery',
        timeline: 'Stage One',
        description: 'Understand business context, goals, and constraints before writing requirements.',
        points: [
          'Stakeholder mapping and objective alignment',
          'Problem framing and scope definition',
          'Current-state process understanding'
        ]
      },
      {
        id: '02',
        title: 'Requirement Structuring',
        timeline: 'Stage Two',
        description: 'Convert business needs into clear, testable, and implementation-ready documentation.',
        points: [
          'User stories and acceptance criteria basics',
          'Functional and non-functional requirement writing',
          'Prioritization and release planning collaboration'
        ]
      },
      {
        id: '03',
        title: 'Delivery Support',
        timeline: 'Stage Three',
        description: 'Support teams during implementation and refine requirements through feedback loops.',
        points: [
          'Requirement clarification during sprint execution',
          'Change impact analysis and communication',
          'UAT support and outcome validation'
        ]
      }
    ],
    lessons: [
      {
        id: 'B01',
        title: 'More lessons coming soon',
        status: 'coming-soon'
      },
      {
        id: 'B02',
        title: 'More lessons coming soon',
        status: 'coming-soon'
      }
    ]
  },
  'qa-tester': {
    slug: 'qa-tester',
    title: 'QA / Tester',
    description: 'Build quality-first testing skills across manual, automation, and strategy.',
    intro:
      'This path introduces testing fundamentals, quality strategy, bug reporting discipline, and automation foundations for modern product teams.',
    goals: [
      'Build a testing mindset that supports reliable releases.',
      'Learn practical manual testing, test design, and defect communication.',
      'Understand automation basics and quality collaboration with developers.'
    ],
    stages: [
      {
        id: '01',
        title: 'Testing Foundations',
        timeline: 'Stage One',
        description: 'Develop core QA thinking and understand where quality fits in product delivery.',
        points: [
          'Quality mindset and testing principles',
          'Test case design and coverage basics',
          'Defect lifecycle and clear bug reporting'
        ]
      },
      {
        id: '02',
        title: 'Execution and Collaboration',
        timeline: 'Stage Two',
        description: 'Run practical testing workflows and improve cross-team communication for release readiness.',
        points: [
          'Functional, regression, and exploratory testing',
          'Risk-based prioritization in limited timelines',
          'Working effectively with product and engineering'
        ]
      },
      {
        id: '03',
        title: 'Automation Entry Point',
        timeline: 'Stage Three',
        description: 'Learn where automation helps and how to start building maintainable QA automation habits.',
        points: [
          'What to automate and what not to automate',
          'Basic automation flow and tool landscape',
          'Maintaining reliable test suites over time'
        ]
      }
    ],
    lessons: [
      {
        id: 'Q01',
        title: 'More lessons coming soon',
        status: 'coming-soon'
      },
      {
        id: 'Q02',
        title: 'More lessons coming soon',
        status: 'coming-soon'
      }
    ]
  }
}
