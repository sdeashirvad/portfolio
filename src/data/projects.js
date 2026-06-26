export const projects = [
  {
    title: "SpecSentinel — API Contract Governance Platform",
    description:
      "Detect breaking OpenAPI changes, score deployment risk, and enforce governance via CLI, GitHub Actions, and PR comments.",
    images: [
      "/projects/specsentinel-0.png",
      "/projects/specsentinel-1.png",
      "/projects/specsentinel-2.png",
      "/projects/specsentinel-3.png",
      "/projects/specsentinel-4.png",
    ],
    tags: [
      "TypeScript",
      "Node.js",
      "React",
      "OpenAPI",
      "GitHub Actions",
      "API Governance",
    ],
    link: "https://specsentinel.sdeashirvad.com",
    github: "https://github.com/sdeashirvad/specsentinel",
    npm: "https://www.npmjs.com/package/specsentinel",
    marketplace: "https://github.com/marketplace/actions/specsentinel",
    moat: "Live on npm & GitHub Marketplace — drop into any CI pipeline",
    featured: true,
    highlights: {
      metrics: [
        "Breaking change detection on OpenAPI specs",
        "Published on npm — npx specsentinel for CI/CD pipelines",
        "GitHub Marketplace Action — one-click install in workflows",
        "Configurable governance policies with deployment risk scoring",
      ],
      architecture: [
        "CLI + GitHub Actions integration with PR comment workflow",
        "Studio/WebView for interactive contract review",
      ],
      ownership: "Founder & lead engineer",
    },
    architectureNote:
      "Spec Diff → Risk Engine → Policy Gate → CLI / GitHub Actions / PR Comment / Studio",
  },
  {
    title: "PnLGuard AI — Financial Anomaly Monitoring Platform",
    description:
      "Rule + AI anomaly detection on P&L feeds with HITL review and audit trail.",
    images: [
      "/projects/pnlGaurd-1.png",
      "/projects/pnlGaurd-2.png",
      "/projects/pnlGaurd-3.png",
    ],
    tags: ["React", "Spring Boot", "PostgreSQL", "GenAI", "Docker"],
    link: "https://pnlguard.sdeashirvad.com",
    github: "https://github.com/sdeashirvad/pnlgaurd",
    featured: true,
    highlights: {
      metrics: [
        "Rule-based + AI hybrid break detection on live P&L feeds",
        "Human-in-the-loop Accept/Reject with full audit trail",
      ],
      architecture: [
        "Spring Boot microservices with PostgreSQL persistence",
        "GenAI risk explanations decoupled from detection pipeline",
      ],
      ownership: "Full-stack owner",
    },
    architectureNote:
      "Ingest → Rule Engine → PostgreSQL Store → GenAI Explainer → HITL Review → Audit Store",
  },
  {
    title: "Bloom — Quiet Pregnancy Companion",
    description:
      "Offline-first pregnancy companion — local journaling, milestones, memory export.",
    images: [
      "/projects/bloom-1.png",
      "/projects/bloom-2.png",
      "/projects/bloom-3.png",
    ],
    tags: ["React Native", "Android", "Offline-First", "Mobile", "Product Design"],
    link: "https://bloom.sdeashirvad.com",
    github: null,
    sourcePrivate: true,
    sourceNote: "Proprietary product — source private ahead of Play Store release.",
    featured: true,
    highlights: {
      metrics: [
        "Week-by-week guidance with mood check-ins and milestone memories",
        "100% on-device storage — no account or internet required",
      ],
      architecture: [
        "Offline-first local storage with privacy-by-design data model",
        "Modular screens: home, reflect, memories, and keepsake export",
      ],
      ownership: "Founder & lead engineer",
    },
  },
  {
    title: "ChatLoom — Multi-Channel GenAI Interaction Platform",
    description:
      "Multi-tenant GenAI backend: RAG, personas, key rotation, Telegram + Web.",
    images: [
      "/projects/chatloom-1.png",
      "/projects/chatloom-2.png",
      "/projects/chatloom-3.png",
    ],
    tags: [
      "RAG",
      "Spring Boot",
      "Gemini API",
      "Prompt Engineering",
      "Docker",
      "REST APIs",
    ],
    link: "https://chatloom.sdeashirvad.com",
    github: "https://github.com/sdeashirvad/chat-loom",
    featured: true,
    highlights: {
      metrics: [
        "Multi-tenant RAG with configurable grounding modes",
        "Telegram + Web channels on a single orchestration layer",
      ],
      architecture: [
        "Spring Boot service layer with persona-driven prompt templates",
        "REST API facade designed for future AI-Ops extensions",
      ],
      ownership: "Backend architect",
    },
  },
  {
    title: "GoForge — Workflow Orchestration Platform",
    description:
      "Go-based job orchestration with worker pools, queue depth monitoring, retries, and real-time Observatory.",
    images: [
      "/projects/goforge-1.png",
      "/projects/goforge-2.png",
      "/projects/goforge-3.png",
      "/projects/goforge-4.png",
    ],
    tags: ["Go", "Worker Pools", "Job Queues", "Retries", "Observability"],
    link: "https://goforge.sdeashirvad.com",
    github: "https://github.com/sdeashirvad",
    featured: false,
    highlights: {
      metrics: [
        "Real-time worker pool and queue depth observatory",
        "Configurable retries with job lifecycle tracking",
      ],
      architecture: [
        "Job Submit → Queue Buffer → Worker Pool → Retry Policy → Observatory UI",
        "Watch orchestration breathe before failures cascade",
      ],
      ownership: "Founder & lead engineer",
    },
    architectureNote:
      "Job Submit → Queue Buffer → Worker Pool → Retry Policy → Status Store → Observatory UI",
  },
  {
    title: "AirflowSentry AI — ETL Failure Diagnosis Console",
    description:
      "Airflow failure diagnosis — root-cause classification and retry-safe remediation.",
    images: [
      "/projects/sentryAi-1.png",
      "/projects/sentryAi-2.png",
      "/projects/sentryAi-3.png",
    ],
    tags: ["React", "Spring Boot", "AI Ops", "Airflow", "Docker"],
    link: "https://sentryai.sdeashirvad.com",
    github: "https://github.com/sdeashirvad/airflow-sentry-ai",
    featured: false,
    highlights: {
      metrics: [
        "Structured root-cause classification for Airflow failures",
        "Exportable incident summaries for SRE handoffs",
      ],
      architecture: [
        "Spring Boot backend parsing Airflow failure payloads",
        "LLM-driven classification with templated incident responses",
      ],
      ownership: "Sole builder",
    },
  },
  {
    title: "Transaction Guard — Idempotency & Exactly-Once Execution Layer",
    description:
      "Redis-backed idempotency middleware for exactly-once execution under retries and concurrent duplicate requests.",
    images: ["/projects/transactionGaurd-1.png"],
    tags: [
      "Spring Boot",
      "Redis",
      "Lua",
      "Distributed Systems",
      "Concurrency Control",
      "Docker",
    ],
    link: null,
    github: null,
    status: "in-progress",
    featured: false,
    wipNote:
      "WIP — Redis idempotency middleware with Lua-based distributed locking.",
    highlights: {
      metrics: [
        "Exactly-once execution under concurrent duplicate requests",
        "Configurable TTL with fail-open / fail-closed modes",
      ],
      architecture: [
        "Lua scripts for atomic distributed locking in Redis",
        "Spring Boot middleware intercepting retry-prone endpoints",
      ],
      ownership: "In active development",
    },
  },
  {
    title: "Veera — Fitness Intelligence Platform",
    description:
      "Adaptive fitness intelligence — body composition, daily actions, evolving plans.",
    images: ["/projects/veera-1.png"],
    tags: [
      "Mobile",
      "Fitness Tech",
      "Body Composition",
      "Adaptive AI",
      "Health",
      "Product",
    ],
    link: "https://veera.sdeashirvad.com",
    github: null,
    sourcePrivate: true,
    sourceNote: "Proprietary product — source private during pre-release.",
    status: "in-progress",
    featured: false,
    wipNote: "In development — join early access at veera.sdeashirvad.com.",
    highlights: {
      metrics: [
        "Adaptive transformation tracking that adjusts plans to real progress",
        "Body composition insights beyond weight: fat loss, muscle gain, consistency",
      ],
      architecture: [
        "Tracking → learning → adjustment loop for transformation intelligence",
        "Unified nutrition, workout, and composition data model",
      ],
      ownership: "Founder & lead engineer",
    },
  },
];

export const featuredProjects = projects.filter((p) => p.featured);

export const allProjectTags = [
  ...new Set(projects.flatMap((p) => p.tags)),
].sort();
