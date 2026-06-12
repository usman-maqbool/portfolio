export const SITE_CONFIG = {
  name: "Usman Maqbool",
  title: "Senior Software Engineer",
  subtitle: "Full-Stack | DevOps | Cloud",
  email: "usman.maqbol.dev@gmail.com",
  github: "https://github.com/usman-maqbool",
  linkedin: "https://www.linkedin.com/in/usman-maqbool-10b1321b1/",
  location: "Lahore, Pakistan · Open to Remote",
};

export const STATS = [
  { label: "Years Experience", value: "6+", suffix: "" },
  { label: "Technologies", value: "30+", suffix: "" },
  { label: "Projects Shipped", value: "50+", suffix: "" },
  { label: "Apps Delivered", value: "30+", suffix: "" },
];

export const EXPERTISE_AREAS = [
  {
    id: "backend",
    title: "Backend Engineering",
    icon: "Server",
    description:
      "Production-grade REST APIs, GraphQL services, and microservices using Python and Node.js ecosystems.",
    skills: ["Python", "Django", "FastAPI", "Flask", "Node.js", "GraphQL", "REST APIs", "RabbitMQ"],
    level: 95,
    color: "blue",
  },
  {
    id: "cloud",
    title: "Cloud & DevOps",
    icon: "Cloud",
    description:
      "Infrastructure automation, containerisation, CI/CD pipelines, and cloud-native deployments on AWS.",
    skills: ["AWS EC2", "S3", "Lambda", "RDS", "Docker", "Kubernetes", "GitHub Actions", "GitLab CI/CD", "Nginx"],
    level: 90,
    color: "cyan",
  },
  {
    id: "data",
    title: "Data & ML",
    icon: "Database",
    description:
      "Databases, data pipelines, and machine learning integrations using Python's data science stack.",
    skills: ["PostgreSQL", "MySQL", "MongoDB", "Pandas", "Matplotlib", "scikit-learn"],
    level: 82,
    color: "emerald",
  },
  {
    id: "architecture",
    title: "System Design",
    icon: "Network",
    description:
      "Designing distributed, fault-tolerant systems with microservices, event-driven architectures, and IoT integrations.",
    skills: ["Microservices", "System Design", "IoT Integrations", "Agile/Scrum", "Electron"],
    level: 92,
    color: "purple",
  },
  {
    id: "frontend",
    title: "Frontend & Full-Stack",
    icon: "Brain",
    description:
      "React and React Native interfaces tightly integrated with backend services and real-time data layers.",
    skills: ["React.js", "React Native", "JavaScript (ES6+)", "HTML5", "CSS3", "Bootstrap", "Electron"],
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
      "Educational institutions needed a reliable, automated way to monitor students during remote exams across mobile, desktop, and web — without compromising the exam experience.",
    solution:
      "Architected a cross-platform exam integrity system: React Native mobile app, Electron desktop app, and a Django web dashboard — all sharing one Django backend with automated surveillance workflows via GitHub Actions CI/CD.",
    architecture: ["Django", "Python", "React Native", "Electron", "React", "PostgreSQL", "GitHub Actions"],
    keyResults: [
      "3 platform apps sharing one Django backend",
      "Automated surveillance via CI/CD pipelines",
      "Reduced manual proctoring overhead significantly",
      "Production deployment since Dec 2022",
    ],
    tags: ["Django", "React Native", "Electron", "Python", "Full-Stack"],
    color: "blue",
    featured: true,
  },
  {
    id: "easy-patent-search",
    title: "Easy Patent Search",
    tagline: "AI-powered patent discovery tool",
    problem:
      "Patent databases are complex and inaccessible to independent inventors and small businesses who need to conduct accurate patent searches quickly.",
    solution:
      "Built an AI-powered patent discovery tool with a user-friendly interface and advanced filters, improving search accuracy and cutting research time by 40% compared to manual methods.",
    architecture: ["Python", "Django", "PostgreSQL", "HTML/CSS", "Bootstrap"],
    keyResults: [
      "40% reduction in patent research time",
      "AI-powered search accuracy improvements",
      "Advanced keyword and filter system",
      "Free access to vast patent database",
    ],
    tags: ["Django", "Python", "AI", "Full-Stack"],
    color: "emerald",
    featured: true,
  },
  {
    id: "delineate",
    title: "Delineate",
    tagline: "Co-Pilot for Quantitative Systems Pharmacology researchers",
    problem:
      "QSP (Quantitative Systems Pharmacology) researchers needed an intelligent co-pilot application to assist with complex modelling workflows and data processing pipelines.",
    solution:
      "Built a high-availability backend architecture with robust data processing pipelines for Delineate — a Co-Pilot application specifically designed for QSP researchers at Djeneric Solutions.",
    architecture: ["Django", "Python", "FastAPI", "PostgreSQL", "AWS", "Docker"],
    keyResults: [
      "High-availability backend for critical research workflows",
      "Robust data processing pipelines",
      "Co-Pilot AI assistance for QSP modelling",
      "Enterprise-grade reliability for research use",
    ],
    tags: ["Django", "Python", "AI", "Backend", "Data Pipelines"],
    color: "purple",
    featured: true,
  },
  {
    id: "iot-afc-portal",
    title: "Qualcomm AFC Portal",
    tagline: "IoT-based Automated Frequency Coordination system",
    problem:
      "Enterprise IoT and telecommunications clients needed a reliable AFC (Automated Frequency Coordination) portal and DMVI system with strict uptime and compliance requirements.",
    solution:
      "Engineered and maintained an IoT-based Qualcomm AFC portal and DMVI system at StudioX — improving system reliability and uptime by 30% with streamlined deployment pipelines using GitLab CI/CD, Docker, and AWS.",
    architecture: ["Django", "React.js", "Python", "Docker", "AWS", "GitLab CI/CD", "IoT"],
    keyResults: [
      "30% improvement in system reliability and uptime",
      "50% reduction in average deployment time",
      "Eliminated environment inconsistencies",
      "Enterprise IoT compliance achieved",
    ],
    tags: ["IoT", "Django", "AWS", "DevOps", "Enterprise"],
    color: "cyan",
    featured: false,
  },
  {
    id: "smart-home-cloud",
    title: "Smart Home Cloud Platform",
    tagline: "Multi-OEM device communication infrastructure",
    problem:
      "A smart home startup needed scalable cloud infrastructure enabling homeowners to control smart home devices across multiple OEM brands from a unified interface.",
    solution:
      "Collaborated at Crowdbotics to design a scalable cloud infrastructure for multi-OEM smart home device communication — improving device compatibility coverage by 25% via backend API development and front-end integration.",
    architecture: ["Django REST Framework", "Python", "PostgreSQL", "AWS", "React.js"],
    keyResults: [
      "25% improvement in device compatibility coverage",
      "Multi-OEM brand support",
      "Scalable cloud infrastructure",
      "Seamless device communication backend",
    ],
    tags: ["IoT", "Django", "Python", "Cloud", "REST API"],
    color: "orange",
    featured: false,
  },
  {
    id: "dextersol-apps",
    title: "30+ Web Applications",
    tagline: "Django & Flask delivery across diverse client verticals",
    problem:
      "A growing digital agency needed a reliable backend engineer to design and deliver web applications across 30+ client projects with consistent quality and performance.",
    solution:
      "At Dextersol, designed and delivered 30+ web applications using Django and Flask for backend services with HTML/CSS/JS + Bootstrap frontends — reducing production bugs by 20% through automated testing practices.",
    architecture: ["Django", "Flask", "Python", "PostgreSQL", "HTML/CSS", "Bootstrap", "JavaScript"],
    keyResults: [
      "30+ web applications delivered",
      "20% reduction in production bugs",
      "Performance improvements via query optimisation",
      "Automated testing integration",
    ],
    tags: ["Django", "Flask", "Python", "Full-Stack"],
    color: "yellow",
    featured: false,
  },
];

export const EXPERIENCE = [
  {
    company: "Djeneric Solutions",
    role: "Senior Software Engineer II",
    duration: "Nov 2023 — Present",
    location: "Lahore, Pakistan · Hybrid",
    description:
      "Lead full-stack development initiatives integrating system design principles to deliver scalable, production-grade solutions for international clients.",
    achievements: [
      "Architected ZeroCheating — exam integrity platform using React Native, Electron, and Django",
      "Developed Easy Patent Search — AI-powered patent discovery tool, cutting research time by 40%",
      "Built Delineate — Co-Pilot application for Quantitative Systems Pharmacology researchers",
      "Enforced code quality via peer reviews, automated testing, and CI/CD best practices",
    ],
    technologies: ["Django", "Python", "React", "React Native", "Electron", "FastAPI", "AWS", "PostgreSQL"],
    type: "full-time",
  },
  {
    company: "StudioX",
    role: "Senior Software Engineer I",
    duration: "Aug 2021 — Oct 2023 · 2 yrs 2 mos",
    location: "Lahore, Pakistan",
    description:
      "Developed and maintained enterprise-grade web applications using Django (backend) and React.js (frontend), delivering efficient, well-tested Python services for US-based clients.",
    achievements: [
      "Engineered IoT-based Qualcomm AFC portal and DMVI system — improved uptime by 30%",
      "Streamlined deployment pipelines using GitLab CI/CD, Docker, and AWS — cut deploy time by 50%",
      "Eliminated environment inconsistencies across dev, staging, and production",
      "Collaborated with product and QA teams to align features with business objectives",
    ],
    technologies: ["Django", "React.js", "Python", "Docker", "AWS", "GitLab CI/CD", "PostgreSQL"],
    type: "full-time",
  },
  {
    company: "Crowdbotics",
    role: "Full Stack Engineer",
    duration: "Dec 2020 — Aug 2021 · 8 mos",
    location: "Lahore, Pakistan",
    description:
      "Collaborated with senior engineers to design a scalable cloud infrastructure enabling homeowners to communicate with and control smart home devices across multiple OEM brands.",
    achievements: [
      "Designed scalable cloud infrastructure for multi-OEM smart home device communication",
      "Improved device compatibility coverage by 25% via backend API and front-end integration",
      "Applied AI-assisted code matching to accelerate feature development",
      "Contributed to modular component architecture for codebase reuse",
    ],
    technologies: ["Django REST Framework", "Python", "React.js", "PostgreSQL", "AWS"],
    type: "full-time",
  },
  {
    company: "Dextersol",
    role: "Django Developer",
    duration: "Nov 2019 — Dec 2020 · 1 yr 1 mo",
    location: "Lahore, Pakistan",
    description:
      "Designed and delivered 30+ web applications using Django and Flask for backend services, and HTML/CSS/JS with Bootstrap for responsive front-end interfaces.",
    achievements: [
      "Designed and delivered 30+ web applications across diverse client verticals",
      "Reduced production bugs by 20% through automated testing and deployment optimisation",
      "Improved performance by refactoring legacy backend logic and optimising database queries",
      "Streamlined release cycles through CI/CD integration practices",
    ],
    technologies: ["Django", "Flask", "Python", "PostgreSQL", "HTML/CSS", "Bootstrap", "JavaScript"],
    type: "full-time",
  },
  {
    company: "Optimum Tech",
    role: "Python Developer",
    duration: "Jan 2019 — Sep 2019 · 8 mos",
    location: "Lahore, Pakistan",
    description:
      "Initiated and contributed to foundational AI/ML projects, leveraging scikit-learn, Pandas, and Matplotlib to develop predictive models and generate data-driven insights.",
    achievements: [
      "Built predictive models using scikit-learn, Pandas, and Matplotlib",
      "Generated data-driven insights from model outputs",
      "Gained hands-on experience in model testing, optimisation, and deployment",
      "Used Git to streamline development workflow and reduce integration errors",
    ],
    technologies: ["Python", "scikit-learn", "Pandas", "Matplotlib", "Git"],
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
