export const siteConfig = {
  name: "Ogedi Favour Uchibeke",
  title: "Senior Full-Stack Engineer",
  shortTitle: "Ogedi",
  description:
    "Senior Full-Stack Engineer specializing in scalable distributed systems, cloud-native architectures, AI/LLM integration, and high-performance APIs. 5+ years building systems that power millions of transactions.",
  accentColor: "#2563eb", // Modern blue
  url: "https://ogedi-dev.vercel.app",
  ogImage: "/og.jpg",
  links: {
    email: "ogedifavour2@gmail.com",
    linkedin: "https://linkedin.com/in/ogedi-favour-uchibeke-553955152",
    twitter: "https://x.com/Ogedi_01",
    github: "https://github.com/Ogedi001",
  },
  availability: {
    openToWork: true,
    location: "Remote (Nigeria)",
    roles:
      "Senior Full-Stack Engineer, Staff Engineer, Platform Engineer, Technical Lead",
  },
  aboutMe: {
    intro:
      "Senior Full-Stack Engineer with 5+ years of experience designing and deploying scalable, secure, and high-performance distributed systems. I bridge the gap between complex backend engineering and elegant user interfaces.",
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
      name: "TaskCollab",
      tagline: "Real-Time Collaboration Platform",
      description:
        "Full-stack task management platform with real-time collaboration and AI-powered automation. Features WebSocket-based live updates, background processing with BullMQ, and AI document parsing.",
      link: "https://taskcollab-app.vercel.app/",
      github: "https://github.com/Ogedi001/taskcollab",
      highlights: [
        "Real-time collaboration using WebSockets and Socket.IO",
        "Background processing pipeline with Redis + BullMQ",
        "AI-driven task extraction from documents",
        "Role-based access control and analytics",
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
