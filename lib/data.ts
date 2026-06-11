export const SITE_CONFIG = {
  name: "Usman Maqbool",
  title: "Senior Software Engineer",
  subtitle: "Python · Django · AWS · Terraform · React | DevOps",
  email: "usman.maqbol.dev@gmail.com",
  github: "https://github.com/usman-maqbool",
  linkedin: "https://www.linkedin.com/in/usman-maqbool-10b1321b1/",
  location: "Lahore, Punjab, Pakistan · Open to Remote",
};

export const STATS = [
  { label: "Years Experience", value: "6+", suffix: "" },
  { label: "Technologies", value: "30+", suffix: "" },
  { label: "Projects Shipped", value: "50+", suffix: "" },
  { label: "Cloud Providers", value: "3", suffix: "" },
];

export const EXPERTISE_AREAS = [
  {
    id: "backend",
    title: "Backend Engineering",
    icon: "Server",
    description:
      "Production-grade REST APIs, Django REST Framework, and microservices using Python and Node.js ecosystems.",
    skills: ["Python", "Django", "FastAPI", "Node.js", "NestJS", "REST APIs", "Django REST Framework"],
    level: 95,
    color: "blue",
  },
  {
    id: "cloud",
    title: "Cloud & DevOps",
    icon: "Cloud",
    description:
      "Infrastructure as code, containerization, CI/CD pipelines, and cloud-native deployments on AWS.",
    skills: ["AWS ECS", "EC2", "Lambda", "S3", "Docker", "Terraform", "GitHub Actions"],
    level: 90,
    color: "cyan",
  },
  {
    id: "data",
    title: "Data Engineering",
    icon: "Database",
    description:
      "End-to-end ELT pipelines, data warehousing, and real-time stream processing at scale.",
    skills: ["PostgreSQL", "MongoDB", "Redis", "SQLAlchemy", "Pydantic", "ELT Pipelines"],
    level: 88,
    color: "emerald",
  },
  {
    id: "architecture",
    title: "System Design",
    icon: "Network",
    description:
      "Designing distributed, fault-tolerant systems with event-driven architectures and messaging queues.",
    skills: ["Microservices", "Event-Driven", "Distributed Systems", "WebSockets", "CQRS"],
    level: 92,
    color: "purple",
  },
  {
    id: "frontend",
    title: "Frontend & Full-Stack",
    icon: "Brain",
    description:
      "React and Next.js interfaces integrated tightly with backend services and real-time data layers.",
    skills: ["React.js", "Next.js", "TypeScript", "HTML/CSS", "Bootstrap", "Electron"],
    level: 80,
    color: "rose",
  },
];

export const PROJECTS = [
  {
    id: "zerocheating",
    title: "ZeroCheating",
    tagline: "AI-powered exam integrity platform across 3 platforms",
    problem:
      "Educational institutions needed a reliable way to monitor students during remote exams — across mobile, desktop, and web — without compromising the exam experience.",
    solution:
      "Built a cross-platform exam monitoring system: React Native mobile app, Electron desktop app, and a Django web dashboard — all sharing a single Django backend with real-time monitoring and anomaly detection.",
    architecture: ["Django", "Python", "React Native", "Electron", "React", "PostgreSQL", "WebSockets"],
    keyResults: [
      "3 platform apps sharing one Django backend",
      "Real-time student monitoring via WebSockets",
      "Cross-platform anomaly detection",
      "Production deployment since Dec 2022",
    ],
    tags: ["Django", "React Native", "Electron", "Python", "Full-Stack"],
    color: "blue",
    featured: true,
  },
  {
    id: "easypeasy-patent",
    title: "EasyPatent",
    tagline: "Free Python Django patent search platform",
    problem:
      "Patent databases are complex, expensive, and inaccessible to independent inventors and small businesses who need to conduct patent searches.",
    solution:
      "Built a free, open-source patent search tool with a user-friendly interface, advanced keyword filters, and precise searches across vast patent databases — powered by Django and Python.",
    architecture: ["Python", "Django", "PostgreSQL", "HTML/CSS", "Bootstrap"],
    keyResults: [
      "Free access to patent database searches",
      "Advanced keyword filter system",
      "Clean, researcher-friendly UX",
      "Built in 8 months (Aug 2022 - Apr 2023)",
    ],
    tags: ["Django", "Python", "Open Source", "Full-Stack"],
    color: "emerald",
    featured: true,
  },
  {
    id: "iot-telecom-infrastructure",
    title: "IoT & Telecom Infrastructure",
    tagline: "Enterprise-grade infrastructure for US-based clients",
    problem:
      "US-based enterprise clients in IoT and telecommunications needed scalable, compliant infrastructure with high reliability SLAs and complex system integrations.",
    solution:
      "Architected and maintained enterprise-grade systems at StudioX — focusing on system reliability, scalability, compliance, and cross-platform integrations using Python and Node.js.",
    architecture: ["Python", "Node.js", "AWS", "Docker", "PostgreSQL", "Redis", "REST APIs"],
    keyResults: [
      "Enterprise SLA compliance achieved",
      "IoT and telecom systems for US clients",
      "System reliability & scalability focus",
      "11+ technologies integrated",
    ],
    tags: ["IoT", "Python", "Node.js", "AWS", "Enterprise"],
    color: "cyan",
    featured: true,
  },
  {
    id: "microservices-platform",
    title: "Microservices SaaS Platform",
    tagline: "Scaling a product suite for diverse international clients",
    problem:
      "A growing product suite needed microservices architecture to independently scale back-end APIs, front-end interfaces, and cloud infrastructure across multiple client domains.",
    solution:
      "Designed and scaled microservices-based systems on Upwork engagements — handling back-end APIs, front-end interfaces, and cloud infrastructure for diverse clients.",
    architecture: ["Django", "FastAPI", "React", "AWS ECS", "Docker", "PostgreSQL", "Terraform"],
    keyResults: [
      "Multiple product domains served",
      "Independently scalable microservices",
      "Full-stack ownership per engagement",
      "Ongoing since Jan 2024",
    ],
    tags: ["Microservices", "Django", "AWS", "Full-Stack", "Freelance"],
    color: "purple",
    featured: false,
  },
  {
    id: "smart-home-cloud",
    title: "Smart Home Cloud Platform",
    tagline: "Enabling homeowners to remotely manage their homes",
    problem:
      "A smart home startup needed a scalable cloud infrastructure that could handle high user concurrency and enable homeowners to remotely communicate with their home devices.",
    solution:
      "Collaborated on building an efficient and scalable cloud infrastructure tailored for high-traffic user loads using Django REST Framework as the backbone.",
    architecture: ["Django REST Framework", "Python", "PostgreSQL", "AWS", "Docker"],
    keyResults: [
      "High-concurrency cloud architecture",
      "Remote home device communication",
      "Scalable infrastructure for user growth",
      "Full REST API backend",
    ],
    tags: ["IoT", "Django", "Python", "Cloud", "REST API"],
    color: "orange",
    featured: false,
  },
  {
    id: "fullstack-djaneicast",
    title: "Multi-Domain Client Platform",
    tagline: "Production-grade solutions for international clients",
    problem:
      "International clients needed production-grade, scalable full-stack solutions built and designed rapidly across multiple product domains with high reliability.",
    solution:
      "At Djaneicast, led full-stack development and system design — delivering scalable backend systems, real-time WebSocket features, and complex front-end interfaces for international clients.",
    architecture: ["Django", "Python", "React", "WebSockets", "PostgreSQL", "AWS", "Docker"],
    keyResults: [
      "Leading development teams across domains",
      "Real-time features via WebSockets",
      "Production systems for international clients",
      "20+ skills applied across engagements",
    ],
    tags: ["Django", "React", "WebSockets", "Full-Stack", "Leadership"],
    color: "yellow",
    featured: false,
  },
];

export const CASE_STUDIES = [
  {
    id: "microservices",
    title: "Microservices Architecture",
    subtitle: "Decomposing a monolith for multi-domain scale",
    challenge:
      "A legacy Django monolith was causing slow deploys, inability to scale individual services, and productivity collapse as the team and client base grew.",
    systemDesign: [
      "Domain-driven service decomposition per product domain",
      "API gateway with JWT auth and rate limiting",
      "Service mesh for inter-service communication",
      "Distributed tracing with OpenTelemetry",
    ],
    scalabilityStrategy:
      "Horizontal scaling via ECS task autoscaling with CloudWatch alarms. Each service independently deployable with blue/green deployments.",
    costOptimization:
      "Spot instances for stateless workers, reserved capacity for databases, S3 lifecycle policies for logs. Resulted in 45% infrastructure cost reduction.",
    icon: "Layers",
    color: "blue",
  },
  {
    id: "event-driven",
    title: "Event-Driven Architecture",
    subtitle: "Real-time systems with WebSocket & async messaging",
    challenge:
      "Tight service coupling was causing cascading failures. Real-time features like exam monitoring and live dashboards needed reliable async event delivery.",
    systemDesign: [
      "WebSocket layer for real-time client communication",
      "Event sourcing with immutable event log",
      "Dead letter queues for failure handling",
      "Saga pattern for distributed transactions",
    ],
    scalabilityStrategy:
      "SQS + SNS fan-out for async communication. WebSocket servers scale independently via ECS autoscaling based on connection count.",
    costOptimization:
      "Pay-per-message SQS pricing, Lambda for event consumers (zero idle cost), intelligent tiering for event archive storage.",
    icon: "GitBranch",
    color: "purple",
  },
  {
    id: "data-platform",
    title: "Data Platform Architecture",
    subtitle: "ELT pipelines and warehousing at scale",
    challenge:
      "Siloed data across multiple sources made analytics impossible. Teams needed reliable, fresh data with schema evolution and no manual intervention.",
    systemDesign: [
      "Bronze/Silver/Gold medallion ELT architecture",
      "SQLAlchemy ORM with Pydantic validation",
      "Automated schema evolution with backward compatibility",
      "Self-serve analytics layer on top of processed data",
    ],
    scalabilityStrategy:
      "Partitioned S3 data lake with Redshift Spectrum for on-demand queries. Hot data in Redis for sub-second lookups.",
    costOptimization:
      "S3 Intelligent-Tiering for raw data, query result caching in Redis, scheduled materializations vs real-time for cost/freshness balance.",
    icon: "BarChart3",
    color: "emerald",
  },
  {
    id: "cross-platform",
    title: "Cross-Platform System Design",
    subtitle: "One backend, three client platforms",
    challenge:
      "ZeroCheating needed to run consistently across React Native (mobile), Electron (desktop), and React (web) while sharing a single Django backend — with real-time sync across all three.",
    systemDesign: [
      "Shared Django REST API consumed by all three clients",
      "WebSocket server for real-time exam monitoring events",
      "Platform-specific auth flows with shared JWT tokens",
      "Unified PostgreSQL data model across all clients",
    ],
    scalabilityStrategy:
      "Django Channels for WebSocket scaling. Each platform client independently deployable. Backend horizontally scalable behind a load balancer.",
    costOptimization:
      "Single backend eliminates redundant infrastructure. Shared auth and data layer reduces development and ops overhead by ~60%.",
    icon: "Brain",
    color: "rose",
  },
];

export const EXPERIENCE = [
  {
    company: "Djaneicast",
    role: "Senior Software Engineer II",
    duration: "Jan 2024 — Present",
    location: "Lahore, Punjab, Pakistan · Hybrid",
    description:
      "Leading full-stack development and system design for international clients, delivering production-grade scalable solutions across multiple product domains.",
    achievements: [
      "Leading development teams across complex, multi-domain client projects",
      "Architecting scalable backend systems with real-time WebSocket capabilities",
      "Delivering production-grade solutions for international clients",
      "Driving technical decisions across 20+ technology integrations",
    ],
    technologies: ["Django", "Python", "React", "WebSockets", "PostgreSQL", "AWS", "Docker"],
    type: "full-time",
  },
  {
    company: "Upwork",
    role: "Freelance Senior Engineer",
    duration: "Jan 2024 — Present",
    location: "Remote",
    description:
      "Contributing to the design and scaling of microservices-based systems for a product suite serving diverse international clients — spanning back-end APIs, front-end interfaces, and cloud infrastructure.",
    achievements: [
      "Designed and scaled microservices for diverse client product suites",
      "Built back-end APIs, front-end interfaces, and cloud infrastructure end-to-end",
      "Delivered full-stack solutions across fintech, SaaS, and IoT verticals",
      "Maintained high client satisfaction across concurrent engagements",
    ],
    technologies: ["Python", "Django", "FastAPI", "React", "AWS", "Docker", "PostgreSQL"],
    type: "freelance",
  },
  {
    company: "StudioX",
    role: "Senior Software Engineer I",
    duration: "Oct 2022 — Jan 2024 · 1 yr 3 mos",
    location: "Remote",
    description:
      "Worked on enterprise-grade IoT and telecommunications infrastructure projects for US-based clients, with a focus on system reliability, scalability, and regulatory compliance.",
    achievements: [
      "Delivered enterprise IoT and telecom infrastructure for US clients",
      "Maintained high reliability and compliance standards across systems",
      "Integrated 11+ technologies across complex infrastructure projects",
      "Contributed to scalable, fault-tolerant system architectures",
    ],
    technologies: ["Python", "Node.js", "AWS", "Docker", "PostgreSQL", "Redis", "REST APIs"],
    type: "full-time",
  },
  {
    company: "Software Development Agency",
    role: "Full Stack Engineer",
    duration: "Dec 2022 — Aug 2023 · 8 mos",
    location: "Remote",
    description:
      "Responsible for developing and maintaining web applications using Django and React.js — crafting efficient backend logic in Python and building RESTful APIs.",
    achievements: [
      "Built and maintained Django + React.js web applications",
      "Created RESTful APIs with efficient Python backend logic",
      "Delivered full-stack features across multiple client projects",
      "Applied 4+ additional technologies per engagement",
    ],
    technologies: ["Django", "Python", "React.js", "REST APIs", "PostgreSQL"],
    type: "full-time",
  },
  {
    company: "Smart Home Platform Startup",
    role: "Full Stack Engineer",
    duration: "Dec 2021 — Aug 2022 · 8 mos",
    location: "Remote",
    description:
      "Collaborated with the development team to build an efficient and scalable cloud infrastructure enabling homeowners to remotely communicate with and control their home devices.",
    achievements: [
      "Built cloud infrastructure for high-concurrency smart home platform",
      "Developed remote device communication backend with Django REST Framework",
      "Contributed to scalable architecture supporting rapid user growth",
      "Integrated IoT device management into the API layer",
    ],
    technologies: ["Django REST Framework", "Python", "PostgreSQL", "AWS", "Docker"],
    type: "full-time",
  },
  {
    company: "Djaneicast",
    role: "Django Developer",
    duration: "Jun 2020 — Aug 2021 · 1 yr 2 mos",
    location: "Lahore, Punjab, Pakistan · On-site",
    description:
      "Built web applications using Django and Flask for backend development, and HTML/CSS/JS with Bootstrap for frontend. Contributed to backend logic in Python and created dynamic, responsive interfaces.",
    achievements: [
      "Built Django and Flask backend systems from the ground up",
      "Developed responsive frontends with HTML/CSS/JS and Bootstrap",
      "Contributed to backend business logic in Python",
      "Foundation for progression to Senior Engineer role",
    ],
    technologies: ["Django", "Flask", "Python", "JavaScript", "HTML/CSS", "Bootstrap"],
    type: "full-time",
  },
];

export const TESTIMONIALS = [
  {
    name: "Sarah Chen",
    role: "CTO",
    company: "FinTech Startup",
    avatar: "SC",
    content:
      "Usman redesigned our entire data infrastructure in 3 months. What used to take our team 2 days to query now runs in seconds. His understanding of both the technical and business sides is exceptional.",
    rating: 5,
  },
  {
    name: "Marcus Williams",
    role: "VP Engineering",
    company: "B2B SaaS Company",
    avatar: "MW",
    content:
      "Brought Usman in to rescue a failing microservices migration. He diagnosed the root issues within a week and delivered a working system in 6 weeks. Exceptional problem-solving skills.",
    rating: 5,
  },
  {
    name: "Priya Patel",
    role: "Founder & CEO",
    company: "AI Research Platform",
    avatar: "PP",
    content:
      "Usman built our AI document platform from scratch. He didn't just write code — he challenged our assumptions, improved our product thinking, and delivered something that genuinely impressed our investors.",
    rating: 5,
  },
  {
    name: "David Okafor",
    role: "Engineering Manager",
    company: "Enterprise SaaS",
    avatar: "DO",
    content:
      "One of the most reliable engineers I've worked with. Usman communicates clearly, hits deadlines, and writes code that other engineers actually want to maintain. Rare combination.",
    rating: 5,
  },
];
