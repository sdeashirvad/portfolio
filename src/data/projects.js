export const projects = [
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
    link: "https://pnlgaurd.ashirvad.work",
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
    title: "AirflowSentry AI — ETL Failure Diagnosis Console",
    description:
      "Airflow failure diagnosis — root-cause classification and retry-safe remediation.",
    images: [
      "/projects/sentryAi-1.png",
      "/projects/sentryAi-2.png",
      "/projects/sentryAi-3.png",
    ],
    tags: ["React", "Spring Boot", "AI Ops", "Airflow", "Docker"],
    link: "https://sentryai.ashirvad.work",
    github: "https://github.com/sdeashirvad/airflow-sentry-ai",
    featured: true,
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
    link: "https://chatloom.ashirvad.work",
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
    featured: true,
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
    title: "Bloom — Quiet Pregnancy Companion",
    description:
      "Offline-first pregnancy companion — local journaling, milestones, memory export.",
    images: [
      "/projects/bloom-1.png",
      "/projects/bloom-2.png",
      "/projects/bloom-3.png",
    ],
    tags: ["React Native", "Android", "Offline-First", "Mobile", "Product Design"],
    link: "https://bloom.ashirvad.work",
    github: null,
    sourcePrivate: true,
    sourceNote: "Proprietary product — source private ahead of Play Store release.",
    featured: false,
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
