export const siteConfig = {
  name: "Ogedi Favour Uchibeke",
  title: "Senior Full-Stack Engineer",
  shortTitle: "Ogedi",
  description:
    "Senior Full-Stack Engineer specializing in scalable distributed systems, cloud-native architectures, AI/LLM integration, and high-performance APIs. 4+ years building systems that power millions of transactions.",
  accentColor: "#2563eb", // Modern blue
  url: "https://ogedi-dev.vercel.app",
  ogImage: "/ogedi.jpg",
  links: {
    email: "ogedifavour2@gmail.com",
    linkedin: "https://linkedin.com/in/ogedi-favour-uchibeke-553955152",
    twitter: "https://x.com/Ogedi_01",
    github: "https://github.com/Ogedi001",
    resume: "/ogedi-resume.pdf",
  },
  socials: [
    { name: "GitHub", href: "https://github.com/Ogedi001", icon: "github" },
    {
      name: "LinkedIn",
      href: "https://linkedin.com/in/ogedi-favour-uchibeke-553955152",
      icon: "linkedin",
    },
    { name: "X", href: "https://x.com/Ogedi_01", icon: "twitter" },
  ],
  availability: {
    openToWork: true,
    location: "Remote (Nigeria)",
    roles:
      "Senior Full-Stack Engineer, Staff Engineer, Platform Engineer, Technical Lead",
  },
  aboutMe: {
    intro:
      "Senior Full-Stack Engineer with 4+ years of experience designing and deploying scalable, secure, and high-performance distributed systems. I bridge the gap between complex backend engineering and elegant user interfaces.",
    core: "I specialize in building cloud-native backend systems that handle millions of transactions, combined with modern frontend architectures. From designing API architectures at Techstars companies to integrating AI/LLM capabilities, I deliver engineering that drives business impact.",
    focus:
      "Currently focused on distributed systems, AI/LLM integration with LangChain and RAG patterns, and building engineering teams that ship reliable software.",
  },
  skills: {
    frontend: [
      "React",
      "Next.js",
      "TypeScript",
      "TailwindCSS",
      "Framer Motion",
    ],
    backend: [
      "Node.js",
      "TypeScript",
      "Rust",
      "Python",
      "NestJS",
      "Fastify",
      "Express.js",
      "GraphQL",
      "WebSockets",
    ],
    databases: [
      "PostgreSQL",
      "MongoDB",
      "MySQL",
      "Redis",
      "Elasticsearch",
      "Firebase",
    ],
    cloud: [
      "AWS",
      "Azure",
      "DigitalOcean",
      "Kubernetes",
      "Docker",
      "Terraform",
    ],
    devops: [
      "GitHub Actions",
      "CI/CD",
      "Prometheus",
      "Grafana",
      "Loki",
      "NGINX",
    ],
    ai: ["OpenAI API", "LangChain", "LLM Integration", "Embeddings", "RAG"],
  },
  experience: [
    {
      company: "Chimoney (Techstars '23)",
      title: "Full-Stack Engineer",
      location: "Remote — Canada",
      dateRange: "Aug 2024 – Present",
      highlights: [
        "Led design and release of API v0.2.4, reducing debugging time by ~30%",
        "Built scalable backend services supporting internationalization and multi-region usage",
        "Improved application performance and SEO by ~30% through caching strategies",
        "Collaborated cross-functionally with product, design, and engineering teams",
      ],
      tech: ["Node.js", "TypeScript", "PostgreSQL", "Redis", "AWS", "Next.js"],
    },
    {
      company: "Airepro Solution Pvt Ltd",
      title: "Backend Engineer",
      location: "Remote — India",
      dateRange: "Jul 2023 – Aug 2024",
      highlights: [
        "Containerized backend services using Docker and Kubernetes clusters",
        "Configured NGINX load balancing for peak traffic handling",
        "Built centralized logging with Elasticsearch, Grafana, and Loki",
        "Automated backend workflows, reducing operational overhead by ~40%",
      ],
      tech: ["Node.js", "Docker", "Kubernetes", "Azure", "NGINX", "Redis"],
    },
    {
      company: "Outcess Solution Nigeria Ltd",
      title: "Backend Developer",
      location: "Nigeria",
      dateRange: "Feb 2022 – Nov 2022",
      highlights: [
        "Developed and optimized RESTful APIs for large CRM platform",
        "Introduced Redis caching, reducing API latency by ~60%",
        "Resolved 90% of critical user-reported issues within 24 hours",
        "Built automation workflows streamlining internal operations",
      ],
      tech: ["Node.js", "PostgreSQL", "Redis", "REST APIs", "MongoDB"],
    },
  ],
  projects: [
    {
      name: "TrustFlow",
      category: "Fintech Infrastructure",
      status: "In Progress",
      tagline: "Trust Infrastructure for Trade",
      description:
        "Trust infrastructure for trade: an in-progress transaction orchestration platform for private orders, payment-protection workflows, delivery evidence, settlement coordination, and dispute handling.",
      link: "https://trustflowhq.app/",
      github: undefined,
      caseStudy: "/systems/trustflow-trade-infrastructure",
      highlights: [
        "Rust and Axum backend designed as a modular monolith",
        "Domain boundaries shaped by DDD for transaction-oriented workflows",
        "Designed for transactional integrity, auditability, and long-term evolution",
      ],
      tech: ["Rust", "Axum", "Domain-Driven Design", "Modular Monolith"],
    },
    {
      name: "TaskCollab",
      category: "Collaboration Software",
      status: "In Progress",
      tagline: "In-Progress Collaboration Platform",
      description:
        "An in-progress task management platform exploring real-time collaboration, background processing with BullMQ, and future AI-assisted document workflows.",
      link: "https://taskcollab-app.vercel.app/",
      github: "https://github.com/Ogedi001/taskcollab",
      caseStudy: undefined,
      highlights: [
        "Exploring real-time collaboration with WebSockets and Socket.IO",
        "Background-processing architecture with Redis + BullMQ",
        "Exploring AI-assisted task extraction from documents",
        "Role-based access control and analytics in progress",
      ],
      tech: [
        "Next.js",
        "Node.js",
        "TypeScript",
        "Redis",
        "BullMQ",
        "Socket.IO",
        "PostgreSQL",
        "Prisma",
      ],
    },
  ],
  education: [
    {
      school: "Rivers State University",
      degree: "B.Agric",
      dateRange: "2017 – 2023",
      achievements: ["Department Best Graduating Student"],
    },
    {
      school: "Loctech Training Institute",
      degree: "Full-Stack Web Development",
      dateRange: "2022",
      achievements: ["Career transition into Software Engineering"],
    },
  ],
  certifications: [
    {
      name: "Data Structures & Algorithms",
      provider: "LeetCode/Udemy",
      year: "2024",
    },
  ],
};
