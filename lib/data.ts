export const SITE_CONFIG = {
  name: "Usman Maqbool",
  title: "Senior Software Engineer",
  subtitle: "Full-Stack | DevOps | Cloud",
  email: "usman.maqbol.dev@gmail.com",
  github: "https://github.com/usman-maqbool",
  linkedin: "https://www.linkedin.com/in/usman-maqbool-10b1321b1/",
  upwork: "https://www.upwork.com/freelancers/~01fb16c872d7ba8796",
  location: "Lahore, Pakistan · Open to Remote",
};

export const STATS = [
  { label: "Years Experience", value: "6+", suffix: "" },
  { label: "Technologies", value: "30+", suffix: "" },
  { label: "Projects Shipped", value: "50+", suffix: "" },
  { label: "Job Success Score", value: "98%", suffix: "", source: "Upwork" },
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
    skills: ["AWS EC2", "S3", "Lambda", "RDS", "Fargate", "Docker", "Kubernetes", "GitHub Actions", "GitLab CI/CD", "Nginx"],
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
      "Built an AI-powered patent discovery tool with a user-friendly interface and advanced filters, improving search accuracy and significantly reducing research time for IP professionals.",
    architecture: ["Python", "Django", "PostgreSQL", "HTML/CSS", "Bootstrap"],
    keyResults: [
      "Significantly reduced research time for IP professionals",
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
      "Engineered and maintained an IoT-based Qualcomm AFC portal and DMVI system at StudioX — improving system reliability and reducing unplanned downtime with streamlined deployment pipelines using GitLab CI/CD, Docker, and AWS.",
    architecture: ["Django", "React.js", "Python", "Docker", "AWS", "GitLab CI/CD", "IoT"],
    keyResults: [
      "Improved system reliability and reduced unplanned downtime",
      "Significantly reduced average deployment time",
      "Eliminated environment inconsistencies across services",
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
      "Collaborated at Crowdbotics to design a scalable cloud infrastructure for multi-OEM smart home device communication — broadening device compatibility coverage via backend API development and front-end integration.",
    architecture: ["Django REST Framework", "Python", "PostgreSQL", "AWS", "React.js"],
    keyResults: [
      "Broadened device compatibility across multiple OEM brands",
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
      "At Dextersol, designed and delivered 30+ web applications using Django and Flask for backend services with HTML/CSS/JS + Bootstrap frontends — integrating automated testing and deployment optimisation for fewer production incidents.",
    architecture: ["Django", "Flask", "Python", "PostgreSQL", "HTML/CSS", "Bootstrap", "JavaScript"],
    keyResults: [
      "30+ web applications delivered",
      "Fewer production incidents via automated testing",
      "Performance improvements via query optimisation",
      "More stable releases through CI/CD practices",
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
      "Architected and built ZeroCheating — exam integrity platform using React Native, Electron, and Django, reducing manual proctoring overhead via automated CI/CD surveillance workflows",
      "Developed Easy Patent Search — AI-powered patent discovery tool, improving search accuracy and significantly reducing research time for IP professionals",
      "Built Delineate — Co-Pilot application for QSP researchers, designing high-availability backend architecture with robust data processing pipelines",
      "Enforced code quality standards through peer code reviews, automated testing, and CI/CD best practices across the engineering team",
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
      "Engineered IoT-based Qualcomm AFC portal and DMVI system — improved system reliability and reduced unplanned downtime across the platform",
      "Streamlined deployment pipelines using GitLab CI/CD, Docker, and AWS — cut deployment time significantly and eliminated environment inconsistencies across services",
      "Collaborated with product and QA teams to define technical requirements, ensuring delivery aligned with business objectives",
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
      "Contributed to backend API development and front-end integration, broadening device compatibility coverage across multiple OEM brands",
      "Reduced feature development time by leveraging a modular component library, identifying and adapting reusable code across services",
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
      "Designed and delivered 30+ web applications using Django and Flask across diverse client verticals",
      "Improved application performance by refactoring legacy backend logic and optimising database queries",
      "Streamlined release cycles by integrating automated testing and deployment optimisation, resulting in fewer production incidents and more stable releases",
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
      "Contributed to foundational AI/ML projects, leveraging scikit-learn, Pandas, and Matplotlib to develop predictive models and generate data-driven insights.",
    achievements: [
      "Contributed to foundational AI/ML projects, developing predictive models using scikit-learn, Pandas, and Matplotlib",
      "Gained hands-on experience in model testing, optimisation, and deployment",
      "Used Git to streamline the development workflow and reduce integration errors",
    ],
    technologies: ["Python", "scikit-learn", "Pandas", "Matplotlib", "Git"],
    type: "full-time",
  },
];

export const TESTIMONIALS = [
  {
    name: "Matthew B.",
    role: "Founder",
    company: "Product Development & Manufacturing",
    avatar: "MB",
    content:
      "Working with Usman as a Full Stack Developer for the past year has been absolutely awesome! He's a wizard when it comes to Python and mobile app development, and he has rocked multiple projects with his skills. Usman's Python game is seriously strong. He's got a deep understanding of the language and its frameworks, and he consistently delivers top-notch code that's efficient and scalable. When faced with tricky problems, he always comes up with creative solutions that blow our minds. Not only is Usman a Python pro, but he's also a mobile app genius. He knows all the ins and outs of different platforms and frameworks, and he's built some seriously impressive and user-friendly applications. His attention to detail ensures that the user experience is smooth and enjoyable.",
    rating: 5,
    date: "Jul 2023",
    verified: true,
    source: "Upwork",
  },
  {
    name: "Upwork Client",
    role: "Long-Term Client",
    company: "Python / Flask & AWS",
    avatar: "UC",
    content:
      "Usman was a great developer. He worked well on our project. We'd hire him in the future again!",
    rating: 5,
    date: "May 2026",
    verified: true,
    source: "Upwork",
  },
  {
    name: "Upwork Client",
    role: "Client",
    company: "Track Patent",
    avatar: "TP",
    content:
      "Usman is a pro! He is a fantastic developer and he is smart, reliable and gives the extra mile.",
    rating: 5,
    date: "Mar 2026",
    verified: true,
    source: "Upwork",
  },
  {
    name: "Upwork Client",
    role: "Client",
    company: "AWS Web App Project",
    avatar: "AW",
    content:
      "Usman did a great job on performing various web app development-related coding tasks on Amazon Web Services. We'll expect to work with this freelancer again.",
    rating: 5,
    date: "Oct 2020",
    verified: true,
    source: "Upwork",
  },
  {
    name: "Upwork Client",
    role: "Client",
    company: "Django & Docker Project",
    avatar: "DD",
    content:
      "Usman Maqbool delivered great work on this Assistance in Django rest framework and Docker project and I would recommend this contractor.",
    rating: 5,
    date: "2020",
    verified: true,
    source: "Upwork",
  },
];

export const CERTIFICATIONS = [
  {
    id: "aws-sa",
    name: "AWS Certified Solutions Architect (SAA-C03)",
    level: "Associate",
    provider: "Udemy / AWS",
    issued: "2021",
    expires: null,
    color: "orange",
    icon: "Cloud",
  },
  {
    id: "python-ml",
    name: "Python for Data Science and Machine Learning Bootcamp",
    level: "Certificate",
    provider: "Udemy",
    issued: "May 2020",
    expires: null,
    color: "blue",
    icon: "Brain",
  },
];
