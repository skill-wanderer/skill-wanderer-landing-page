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
        title: 'AI-First Learning for Tech Careers',
        description: 'Learn how to use AI tools effectively to accelerate your learning and build stronger habits for real-world work.',
        status: 'available',
        url: 'https://dojo.skill-wanderer.com/courses/ai-first-learning-for-tech-careers'
      },
      {
        id: 'L02',
        title: 'Git Version Control: From Basics to Branching',
        status: 'coming-soon'
      },
      {
        id: 'L03',
        title: 'HTML Foundations: Building with Purpose',
        description: 'Learn how HTML gives meaning to content — from document structure and semantic elements to accessible forms and real-world markup patterns.',
        status: 'available',
        url: 'https://dojo.skill-wanderer.com/courses/html-fundamentals-from-structure-to-forms'
      },
    ]
  },
  'mobile-development': {
    slug: 'mobile-development',
    title: 'Mobile Development',
    description: 'Create robust mobile apps with practical workflows for iOS, Android, cross-platform projects, and Flutter game development.',
    intro:
      'This path helps learners understand mobile product thinking, UI patterns, app architecture, and release workflows across native and cross-platform development. It also covers Flutter game development — giving learners the skills to build interactive 2D games using the Flame engine on top of their mobile foundations.',
    goals: [
      'Understand platform fundamentals for Android, iOS, and cross-platform delivery.',
      'Build mobile-friendly UI flows with stronger UX and performance habits.',
      'Learn app architecture basics, API integration, and release-ready practices.',
      'Build interactive 2D games using Flutter and the Flame game engine.'
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
      },
      {
        id: '04',
        title: 'Flutter Game Development',
        timeline: 'Stage Four',
        description: 'Apply Flutter skills to build interactive 2D games using the Flame engine, from game loops to physics and deployment.',
        points: [
          'Game loop, rendering, and the Flame engine basics',
          'Sprites, animations, collision detection, and input handling',
          'Game state management, scoring, and level design',
          'Packaging and releasing Flutter games to mobile stores'
        ]
      }
    ],
    lessons: [
      {
        id: 'M01',
        title: 'AI-First Learning for Tech Careers',
        description: 'Learn how to use AI tools effectively to accelerate your learning and build stronger habits for real-world work.',
        status: 'available',
        url: 'https://dojo.skill-wanderer.com/courses/ai-first-learning-for-tech-careers'
      },
      {
        id: 'M02',
        title: 'Git Version Control: From Basics to Branching',
        status: 'coming-soon'
      },
      {
        id: 'M03',
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
        title: 'AI-First Learning for Tech Careers',
        description: 'Learn how to use AI tools effectively to accelerate your learning and build stronger habits for real-world work.',
        status: 'available',
        url: 'https://dojo.skill-wanderer.com/courses/ai-first-learning-for-tech-careers'
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
        title: 'AI-First Learning for Tech Careers',
        description: 'Learn how to use AI tools effectively to accelerate your learning and build stronger habits for real-world work.',
        status: 'available',
        url: 'https://dojo.skill-wanderer.com/courses/ai-first-learning-for-tech-careers'
      },
      {
        id: 'Q02',
        title: 'More lessons coming soon',
        status: 'coming-soon'
      }
    ]
  },
  'ai-and-machine-learning': {
    slug: 'ai-and-machine-learning',
    title: 'AI and Machine Learning',
    description: 'A structured path from understanding AI fundamentals to building and deploying production-ready machine learning systems.',
    intro:
      'Artificial intelligence and machine learning are reshaping every industry. This path takes learners from foundational concepts and mathematics through core ML algorithms, deep learning architectures, and applied AI in production. Each stage builds on the previous so that learners do not just run models — they understand why they work, how to evaluate them rigorously, and how to deliver real value with them responsibly.',
    goals: [
      'Build a strong conceptual and mathematical foundation for understanding AI and ML systems.',
      'Apply core machine learning algorithms with confidence across supervised and unsupervised tasks.',
      'Design, train, and evaluate deep learning models including transformers and modern architectures.',
      'Deploy, monitor, and maintain ML systems in production with responsible AI practices.'
    ],
    stages: [
      {
        id: '01',
        title: 'AI and ML Foundations',
        timeline: 'Stage One',
        description: 'Establish the conceptual, mathematical, and tooling foundations needed to learn machine learning with real understanding.',
        points: [
          'Overview of AI, ML, and deep learning — how they relate and where each applies',
          'Essential mathematics: linear algebra, probability, statistics, and calculus intuition for ML',
          'Python for data science: NumPy, Pandas, and exploratory data analysis',
          'Understanding data: types, distributions, quality issues, and preprocessing'
        ]
      },
      {
        id: '02',
        title: 'Core Machine Learning',
        timeline: 'Stage Two',
        description: 'Master the fundamental algorithms and workflows that underpin most real-world ML applications.',
        points: [
          'Supervised learning: regression, classification, decision trees, and ensemble methods',
          'Unsupervised learning: clustering, dimensionality reduction, and anomaly detection',
          'Model evaluation: cross-validation, metrics, bias-variance trade-off, and overfitting',
          'Feature engineering, selection, and pipeline construction for reliable model training'
        ]
      },
      {
        id: '03',
        title: 'Deep Learning and Neural Networks',
        timeline: 'Stage Three',
        description: 'Understand and apply deep learning architectures from feedforward networks to transformers.',
        points: [
          'Neural network fundamentals: layers, activations, backpropagation, and optimizers',
          'Convolutional neural networks for vision tasks and transfer learning',
          'Sequence models: RNNs, LSTMs, and the attention mechanism',
          'Transformer architecture and large language model concepts'
        ]
      },
      {
        id: '04',
        title: 'Applied AI and Production Readiness',
        timeline: 'Stage Four',
        description: 'Move models from notebooks into real systems with deployment, monitoring, and responsible AI practices.',
        points: [
          'Model packaging, serving, and API integration for production use',
          'MLOps fundamentals: experiment tracking, versioning, and pipeline automation',
          'Responsible AI: fairness, explainability, privacy considerations, and governance',
          'Real-world project delivery: problem framing, iteration, and stakeholder communication'
        ]
      }
    ],
    lessons: [
      {
        id: 'AI01',
        title: 'AI-First Learning for Tech Careers',
        description: 'Learn how to use AI tools effectively to accelerate your learning and build stronger habits for real-world work.',
        status: 'available',
        url: 'https://dojo.skill-wanderer.com/courses/ai-first-learning-for-tech-careers'
      },
      {
        id: 'AI02',
        title: 'More lessons coming soon',
        status: 'coming-soon'
      }
    ]
  },
  'devops': {
    slug: 'devops',
    title: 'DevOps',
    description: 'Master the culture, tools, and practices that bridge software development and reliable production operations.',
    intro:
      'DevOps is not a tool — it is a way of working. This path takes learners through the mindset, practices, and technical skills needed to build, ship, and operate software with speed and reliability. From version control and CI/CD pipelines to infrastructure as code and observability, every stage is designed to connect engineering work directly to production outcomes.',
    goals: [
      'Understand the DevOps culture, principles, and how they improve delivery speed and system reliability.',
      'Build and maintain CI/CD pipelines that automate testing, integration, and deployment.',
      'Manage infrastructure as code using containers, orchestration, and cloud platforms.',
      'Operate production systems with strong monitoring, alerting, and incident response practices.'
    ],
    stages: [
      {
        id: '01',
        title: 'DevOps Foundations',
        timeline: 'Stage One',
        description: 'Understand the DevOps philosophy, feedback loops, and foundational technical practices that enable high-performing teams.',
        points: [
          'DevOps culture: collaboration, shared responsibility, and continuous improvement',
          'Version control mastery: branching strategies, pull requests, and Git workflows',
          'Linux fundamentals, shell scripting, and command-line productivity',
          'Networking basics relevant to application and infrastructure work'
        ]
      },
      {
        id: '02',
        title: 'CI/CD and Automation',
        timeline: 'Stage Two',
        description: 'Design and implement automated pipelines that deliver tested, reliable software consistently.',
        points: [
          'Continuous integration: automated builds, testing gates, and code quality checks',
          'Continuous delivery and deployment: pipeline design, environments, and rollback strategies',
          'Artifact management, versioning, and dependency control',
          'Security scanning and compliance checks in the delivery pipeline'
        ]
      },
      {
        id: '03',
        title: 'Infrastructure and Cloud',
        timeline: 'Stage Three',
        description: 'Provision and manage infrastructure programmatically across cloud platforms using containers and orchestration.',
        points: [
          'Infrastructure as code: Terraform and cloud-native provisioning patterns',
          'Containers with Docker: images, registries, networking, and multi-container setups',
          'Kubernetes fundamentals: pods, deployments, services, and cluster management',
          'Cloud platform essentials: compute, storage, networking, and managed services'
        ]
      },
      {
        id: '04',
        title: 'Monitoring, Security, and Reliability',
        timeline: 'Stage Four',
        description: 'Build production-grade observability and apply security and reliability engineering principles to real systems.',
        points: [
          'Observability: metrics, logs, traces, and actionable alerting strategies',
          'Incident management: on-call practices, post-mortems, and learning from failure',
          'DevSecOps: shifting security left, secrets management, and vulnerability response',
          'SRE principles: SLOs, SLAs, error budgets, and reliability as a product feature'
        ]
      }
    ],
    lessons: [
      {
        id: 'DV01',
        title: 'AI-First Learning for Tech Careers',
        description: 'Learn how to use AI tools effectively to accelerate your learning and build stronger habits for real-world work.',
        status: 'available',
        url: 'https://dojo.skill-wanderer.com/courses/ai-first-learning-for-tech-careers'
      },
      {
        id: 'DV02',
        title: 'More lessons coming soon',
        status: 'coming-soon'
      }
    ]
  },
  'mlops': {
    slug: 'mlops',
    title: 'MLOps',
    description: 'Bridge machine learning and operations to deliver reliable, scalable, and governed ML systems in production.',
    intro:
      'Building a model in a notebook is only the beginning. MLOps is the discipline of operationalizing machine learning — making it reproducible, automatable, observable, and maintainable at scale. This path covers the full ML lifecycle from experiment management through pipeline automation, model deployment, and ongoing governance. Learners will build the skills to treat ML systems with the same engineering discipline as any production software.',
    goals: [
      'Understand the ML lifecycle and where operational discipline is required at each stage.',
      'Implement reproducible experimentation with experiment tracking and data versioning.',
      'Build automated ML pipelines for training, evaluation, and deployment.',
      'Monitor deployed models and maintain governance standards for data quality and fairness.'
    ],
    stages: [
      {
        id: '01',
        title: 'MLOps Foundations',
        timeline: 'Stage One',
        description: 'Understand the operational challenges of ML systems and establish reproducibility as a core habit.',
        points: [
          'The ML lifecycle: experimentation, training, deployment, and decay',
          'Experiment tracking: logging parameters, metrics, and artifacts systematically',
          'Data and model versioning for reproducible results',
          'Environment management and dependency isolation for ML projects'
        ]
      },
      {
        id: '02',
        title: 'Pipeline Automation',
        timeline: 'Stage Two',
        description: 'Automate the end-to-end ML workflow from data ingestion to model evaluation.',
        points: [
          'Data pipeline design: ingestion, validation, transformation, and feature stores',
          'Training pipeline automation and scheduled retraining strategies',
          'Model evaluation gates and automated comparison against baseline',
          'Pipeline orchestration tools and workflow management principles'
        ]
      },
      {
        id: '03',
        title: 'Model Deployment and Serving',
        timeline: 'Stage Three',
        description: 'Package, containerize, and serve ML models reliably across different deployment patterns.',
        points: [
          'Model packaging formats and serving infrastructure overview',
          'REST and gRPC APIs for model inference at scale',
          'Deployment strategies: shadow mode, canary, A/B testing, and blue-green',
          'Containerization and orchestration for ML workloads'
        ]
      },
      {
        id: '04',
        title: 'Monitoring and Governance',
        timeline: 'Stage Four',
        description: 'Sustain model quality in production through continuous monitoring, data governance, and responsible AI controls.',
        points: [
          'Model performance monitoring: accuracy drift, data drift, and concept drift',
          'Data quality monitoring and alerting pipelines',
          'Responsible AI in production: fairness auditing, explainability APIs, and bias detection',
          'ML governance: lineage tracking, audit trails, and regulatory considerations'
        ]
      }
    ],
    lessons: [
      {
        id: 'MO01',
        title: 'AI-First Learning for Tech Careers',
        description: 'Learn how to use AI tools effectively to accelerate your learning and build stronger habits for real-world work.',
        status: 'available',
        url: 'https://dojo.skill-wanderer.com/courses/ai-first-learning-for-tech-careers'
      },
      {
        id: 'MO02',
        title: 'More lessons coming soon',
        status: 'coming-soon'
      }
    ]
  },
  'software-development-roles-and-career': {
    slug: 'software-development-roles-and-career',
    title: 'Software Development Roles & Career',
    description: 'Navigate the software industry with clarity — understanding roles, team dynamics, and how to grow with intention.',
    intro:
      'The software industry can feel overwhelming without a map. This path helps learners understand how software teams are structured, what different roles actually do, and how to grow from entry-level contributor to trusted professional. Beyond technical skills, it focuses on the habits, communication, and career decisions that separate those who grow fast from those who plateau.',
    goals: [
      'Understand the landscape of software roles and how they interact within product and engineering teams.',
      'Develop professional habits in code quality, collaboration, estimation, and documentation.',
      'Build strong communication and self-management skills for thriving in delivery environments.',
      'Navigate career growth with intention — from first role to senior contributor and beyond.'
    ],
    stages: [
      {
        id: '01',
        title: 'Understanding the Industry',
        timeline: 'Stage One',
        description: 'Build a clear picture of how software companies work, how teams are structured, and where different roles fit.',
        points: [
          'Software team structures: product, engineering, design, QA, and operations',
          'Common roles: frontend, backend, fullstack, mobile, DevOps, BA, QA, and PM',
          'How work flows: from idea to production in modern delivery teams',
          'Startup versus scale-up versus enterprise: what changes and what stays the same'
        ]
      },
      {
        id: '02',
        title: 'Technical Professionalism',
        timeline: 'Stage Two',
        description: 'Develop the technical habits that distinguish dependable contributors from those who are difficult to work with.',
        points: [
          'Writing readable, maintainable code and giving constructive code review feedback',
          'Documentation habits: inline comments, READMEs, and decision records',
          'Estimation practices: breaking down tasks, communicating uncertainty, and managing scope',
          'Asking good questions and unblocking yourself effectively'
        ]
      },
      {
        id: '03',
        title: 'Professional Effectiveness',
        timeline: 'Stage Three',
        description: 'Build the interpersonal and organizational skills that determine how much real impact you can have.',
        points: [
          'Communicating technical work clearly to non-technical stakeholders',
          'Giving and receiving feedback in delivery teams',
          'Managing your own time, energy, and focus in an engineering environment',
          'Working across time zones, remote collaboration, and async communication'
        ]
      },
      {
        id: '04',
        title: 'Career Growth and Mastery',
        timeline: 'Stage Four',
        description: 'Take ownership of your career trajectory with deliberate skill-building, portfolio work, and long-term thinking.',
        points: [
          'Career ladders: understanding seniority levels and what progression actually requires',
          'Building a portfolio and presence that reflects your real skills',
          'Interview preparation: technical, behavioral, and system design conversations',
          'Lifelong learning strategies for staying relevant in a fast-moving industry'
        ]
      }
    ],
    lessons: [
      {
        id: 'SR01',
        title: 'AI-First Learning for Tech Careers',
        description: 'Learn how to use AI tools effectively to accelerate your learning and build stronger habits for real-world work.',
        status: 'available',
        url: 'https://dojo.skill-wanderer.com/courses/ai-first-learning-for-tech-careers'
      },
      {
        id: 'SR02',
        title: 'More lessons coming soon',
        status: 'coming-soon'
      }
    ]
  },
  'project-management': {
    slug: 'project-management',
    title: 'Project Management',
    description: 'Lead software projects from initiation to delivery with clear thinking, practical frameworks, and strong team habits.',
    intro:
      'Project management in technology is not about bureaucracy — it is about creating the conditions for teams to deliver well. This path covers everything from understanding stakeholder goals and structuring delivery plans, to facilitating Agile ceremonies, managing risk, and driving continuous improvement. Learners will develop the judgment to adapt their approach to real constraints rather than following a methodology by rote.',
    goals: [
      'Understand the full project lifecycle and the key decisions made at each phase.',
      'Apply Agile and Scrum practices effectively in software delivery contexts.',
      'Manage scope, risk, dependencies, and stakeholder expectations with clarity.',
      'Drive team performance and continuous improvement through strong facilitation and delivery habits.'
    ],
    stages: [
      {
        id: '01',
        title: 'Project Management Foundations',
        timeline: 'Stage One',
        description: 'Understand the core responsibilities, frameworks, and mental models that define effective project management.',
        points: [
          'Project lifecycle: initiation, planning, execution, monitoring, and closure',
          'Stakeholder identification, mapping, and engagement strategies',
          'Scope definition, project charter, and success criteria',
          'Overview of delivery methodologies: Waterfall, Agile, Scrum, Kanban, and hybrid approaches'
        ]
      },
      {
        id: '02',
        title: 'Agile and Scrum Delivery',
        timeline: 'Stage Two',
        description: 'Apply Agile values and Scrum practices to manage iterative software delivery effectively.',
        points: [
          'Agile principles and how they translate into day-to-day delivery decisions',
          'Scrum ceremonies: sprint planning, daily standup, review, and retrospective',
          'Backlog management: writing, refining, and prioritizing user stories',
          'Velocity, burn-down tracking, and forecasting delivery timelines'
        ]
      },
      {
        id: '03',
        title: 'Execution, Risk, and Stakeholder Management',
        timeline: 'Stage Three',
        description: 'Keep projects on track through disciplined planning, risk management, and proactive communication.',
        points: [
          'Dependency mapping and critical path analysis',
          'Risk identification, assessment, and mitigation planning',
          'Change management: evaluating impact and communicating scope changes',
          'Status reporting and transparent communication with stakeholders and sponsors'
        ]
      },
      {
        id: '04',
        title: 'Delivery Excellence and Program Thinking',
        timeline: 'Stage Four',
        description: 'Elevate delivery quality through retrospectives, outcome measurement, and cross-team coordination.',
        points: [
          'Running effective retrospectives that drive real process improvement',
          'OKRs, KPIs, and measuring delivery outcomes beyond velocity',
          'Program management: coordinating multiple teams and managing interdependencies',
          'Building high-trust team environments and leading through ambiguity'
        ]
      }
    ],
    lessons: [
      {
        id: 'PM01',
        title: 'AI-First Learning for Tech Careers',
        description: 'Learn how to use AI tools effectively to accelerate your learning and build stronger habits for real-world work.',
        status: 'available',
        url: 'https://dojo.skill-wanderer.com/courses/ai-first-learning-for-tech-careers'
      },
      {
        id: 'PM02',
        title: 'More lessons coming soon',
        status: 'coming-soon'
      }
    ]
  },
  'start-up-foundation': {
    slug: 'start-up-foundation',
    title: 'Start-up Foundation',
    description: 'Build the mindset, skills, and practices to turn an idea into a real, sustainable product and business.',
    intro:
      'Starting a company is one of the hardest things a person can do — and one of the most rewarding. This path gives aspiring founders and early-stage builders a grounded, practical foundation in product thinking, lean validation, team building, and early business operations. It strips away the myths and focuses on what actually matters in the earliest stages: learning fast, building with purpose, and creating something people genuinely want.',
    goals: [
      'Validate ideas quickly and cheaply before committing to full product development.',
      'Build and ship minimum viable products that generate real learning from real users.',
      'Understand early team dynamics, co-founder relationships, and culture formation.',
      'Develop foundational business literacy including growth thinking, financial basics, and funding awareness.'
    ],
    stages: [
      {
        id: '01',
        title: 'Idea Validation and Product Thinking',
        timeline: 'Stage One',
        description: 'Pressure-test your idea with real users and structured thinking before writing a line of code.',
        points: [
          'Problem discovery: identifying pain points worth solving and customers worth serving',
          'User research basics: interviews, observation, and synthesizing insights',
          'Defining the minimum viable product: scope decisions and trade-offs',
          'Hypothesis-driven development and how to design meaningful experiments'
        ]
      },
      {
        id: '02',
        title: 'Build and Launch',
        timeline: 'Stage Two',
        description: 'Ship your first version, get it in front of users, and generate the feedback loops needed to improve.',
        points: [
          'MVP development decisions: build vs. buy, tooling, and technical trade-offs for speed',
          'Go-to-market basics: distribution channels, early adopter targeting, and launch strategy',
          'Product-market fit signals: what to measure and how to interpret early traction',
          'Iteration cycles: how to learn from feedback without losing direction'
        ]
      },
      {
        id: '03',
        title: 'Team and Culture',
        timeline: 'Stage Three',
        description: 'Build the right team and the right environment for early-stage product work.',
        points: [
          'Co-founder dynamics: complementary skills, decision-making, and conflict resolution',
          'First hires: when to hire, who to hire, and how to evaluate culture fit at an early stage',
          'Building a strong team culture intentionally rather than by accident',
          'Equity, roles, and early-stage organizational structures'
        ]
      },
      {
        id: '04',
        title: 'Growth and Business Foundations',
        timeline: 'Stage Four',
        description: 'Understand the business mechanics that determine whether a start-up can survive and scale.',
        points: [
          'Growth loops and sustainable acquisition channels versus paid growth shortcuts',
          'Financial basics: revenue models, unit economics, burn rate, and runway',
          'Fundraising awareness: when to raise, from whom, and what investors look for',
          'Building for long-term sustainability: mission alignment and social impact considerations'
        ]
      }
    ],
    lessons: [
      {
        id: 'SF01',
        title: 'AI-First Learning for Tech Careers',
        description: 'Learn how to use AI tools effectively to accelerate your learning and build stronger habits for real-world work.',
        status: 'available',
        url: 'https://dojo.skill-wanderer.com/courses/ai-first-learning-for-tech-careers'
      },
      {
        id: 'SF02',
        title: 'More lessons coming soon',
        status: 'coming-soon'
      }
    ]
  },
  'advanced-software-development-skills': {
    slug: 'advanced-software-development-skills',
    title: 'Advanced Software Development Skills',
    description: 'Deepen engineering craft from clean code and system design to performance, reliability, and technical leadership.',
    intro:
      'There is a significant gap between writing code that works and writing code that lasts. This path is for developers who want to close that gap — moving from functional to excellent by developing deep habits in code quality, system design, performance engineering, and technical influence. Each stage pushes beyond the basics to build the kind of skills that make engineers genuinely valuable at any level of seniority.',
    goals: [
      'Write clean, intentional code built on SOLID principles and strong design habits.',
      'Design systems that are scalable, maintainable, and resilient under real-world load.',
      'Diagnose and resolve performance bottlenecks and reliability issues in production.',
      'Grow as a technical leader who influences decisions, raises team quality, and communicates with clarity.'
    ],
    stages: [
      {
        id: '01',
        title: 'Code Quality and Engineering Craftsmanship',
        timeline: 'Stage One',
        description: 'Build the foundational habits that separate maintainable, professional code from code that creates long-term problems.',
        points: [
          'Clean code principles: naming, functions, structure, and readability',
          'SOLID principles applied in practice with real examples and trade-offs',
          'Refactoring techniques: improving existing code safely and incrementally',
          'Code review culture: giving useful feedback and receiving it constructively'
        ]
      },
      {
        id: '02',
        title: 'System Design Fundamentals',
        timeline: 'Stage Two',
        description: 'Develop the ability to design systems that can scale, evolve, and stay reliable as requirements change.',
        points: [
          'Scalability patterns: vertical vs. horizontal scaling, load balancing, and stateless design',
          'Database design: relational vs. NoSQL trade-offs, sharding, replication, and indexing',
          'Caching strategies, message queues, and asynchronous processing patterns',
          'API design principles: consistency, versioning, error handling, and backward compatibility'
        ]
      },
      {
        id: '03',
        title: 'Performance and Reliability Engineering',
        timeline: 'Stage Three',
        description: 'Identify and resolve performance bottlenecks and build software that holds up under real production conditions.',
        points: [
          'Performance profiling: finding bottlenecks in CPU, memory, I/O, and network',
          'Load and stress testing: designing meaningful tests and interpreting results',
          'Resilience patterns: circuit breakers, retries, timeouts, and graceful degradation',
          'Debugging production issues: distributed tracing, log analysis, and incident response'
        ]
      },
      {
        id: '04',
        title: 'Technical Leadership and Influence',
        timeline: 'Stage Four',
        description: 'Develop the judgment and communication skills to lead technical decisions and elevate those around you.',
        points: [
          'Technical decision-making: trade-off analysis, documentation, and architecture decision records',
          'Mentoring and knowledge transfer: growing other engineers intentionally',
          'Communicating technical complexity to non-technical audiences with precision',
          'Building engineering standards, playbooks, and a shared quality culture'
        ]
      }
    ],
    lessons: [
      {
        id: 'AS01',
        title: 'AI-First Learning for Tech Careers',
        description: 'Learn how to use AI tools effectively to accelerate your learning and build stronger habits for real-world work.',
        status: 'available',
        url: 'https://dojo.skill-wanderer.com/courses/ai-first-learning-for-tech-careers'
      },
      {
        id: 'AS02',
        title: 'More lessons coming soon',
        status: 'coming-soon'
      }
    ]
  },
  'software-architecture-and-design-patterns': {
    slug: 'software-architecture-and-design-patterns',
    title: 'Software Architecture & Design Patterns',
    description: 'Learn to design software systems with intentional structure — from design patterns to architectural styles and real-world trade-offs.',
    intro:
      'Software architecture is the set of decisions that are hardest to reverse. This path teaches learners to think architecturally — understanding quality attributes, evaluating trade-offs, applying the right design patterns for the right problems, and choosing architectural styles that serve long-term product goals. By the end, learners will be equipped not just to follow existing architectures but to reason about, communicate, and evolve them with confidence.',
    goals: [
      'Think in terms of system structure, quality attributes, and architectural trade-offs rather than just features.',
      'Apply design patterns from the Gang of Four and beyond to solve recurring structural problems.',
      'Understand architectural styles and when each is appropriate for specific product and team contexts.',
      'Communicate architectural decisions clearly through documentation, diagrams, and structured decision records.'
    ],
    stages: [
      {
        id: '01',
        title: 'Architecture Thinking',
        timeline: 'Stage One',
        description: 'Develop the mental models for reasoning about software structure, quality, and long-term system health.',
        points: [
          'What architecture is and why it matters: structure, behavior, and cross-cutting concerns',
          'Quality attributes: performance, scalability, maintainability, security, and testability',
          'Architectural trade-offs: understanding that every decision creates cost somewhere',
          'Reading and reasoning about existing architectures before designing new ones'
        ]
      },
      {
        id: '02',
        title: 'Design Patterns',
        timeline: 'Stage Two',
        description: 'Learn the canonical design patterns, understand the problems they solve, and recognize when not to use them.',
        points: [
          'Creational patterns: Factory, Abstract Factory, Builder, Singleton, and Prototype',
          'Structural patterns: Adapter, Decorator, Facade, Composite, and Proxy',
          'Behavioral patterns: Strategy, Observer, Command, Chain of Responsibility, and State',
          'Anti-patterns and over-engineering: recognizing when patterns add complexity without value'
        ]
      },
      {
        id: '03',
        title: 'Architectural Styles and Patterns',
        timeline: 'Stage Three',
        description: 'Understand the major architectural styles and the contexts in which each delivers the most value.',
        points: [
          'Layered architecture and the separation of concerns across application tiers',
          'Hexagonal and clean architecture: protecting domain logic from infrastructure',
          'Event-driven architecture: events, commands, messaging patterns, and eventual consistency',
          'Microservices: decomposition strategies, service boundaries, and the hidden costs of distribution'
        ]
      },
      {
        id: '04',
        title: 'Architecture in Practice',
        timeline: 'Stage Four',
        description: 'Apply architectural thinking to real systems through documentation, evaluation, and evolutionary design.',
        points: [
          'Architecture decision records: capturing context, options, and rationale for future teams',
          'C4 diagrams and structured visual communication of system design',
          'Evaluating existing architectures: identifying pain points and prioritizing improvement',
          'Evolutionary architecture: designing for change without over-engineering for the future'
        ]
      }
    ],
    lessons: [
      {
        id: 'SA01',
        title: 'AI-First Learning for Tech Careers',
        description: 'Learn how to use AI tools effectively to accelerate your learning and build stronger habits for real-world work.',
        status: 'available',
        url: 'https://dojo.skill-wanderer.com/courses/ai-first-learning-for-tech-careers'
      },
      {
        id: 'SA02',
        title: 'More lessons coming soon',
        status: 'coming-soon'
      }
    ]
  }
}
