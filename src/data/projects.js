export const projects = [
  {
    title: "PnLGuard AI — Financial Anomaly Monitoring Platform",
    description:
      "Full-stack anomaly detection platform that ingests P&L data, performs rule-based break detection, and generates AI-driven risk explanations with a human-in-the-loop review workflow (Accept/Reject + audit trail). Designed for low-latency backend processing with Redis-backed caching and replay safety.",
    images: [
      "/projects/pnlGaurd-1.png",
      "/projects/pnlGaurd-2.png",
      "/projects/pnlGaurd-3.png",
    ],
    tags: ["React", "Spring Boot", "PostgreSQL", "Redis", "GenAI", "Docker"],
    link: "https://pnlgaurd.ashirvad.work",
    github: "https://github.com/sdeashirvad/pnlgaurd",
    featured: true,
    highlights: {
      metrics: [
        "Rule-based + AI hybrid break detection on live P&L feeds",
        "Redis-backed caching for low-latency review workflows",
        "Human-in-the-loop Accept/Reject with full audit trail",
      ],
      architecture: [
        "Spring Boot microservices with PostgreSQL persistence",
        "Redis cache layer for replay-safe, idempotent processing",
        "GenAI risk explanations decoupled from detection pipeline",
      ],
      ownership: "Full-stack owner — backend architecture, AI integration, and React console",
    },
    architectureNote:
      "Ingest → Rule Engine → Redis Cache → GenAI Explainer → HITL Review → Audit Store",
  },
  {
    title: "AirflowSentry AI — ETL Failure Diagnosis Console",
    description:
      "AI-powered ETL Ops console that analyzes Airflow pipeline failures, performs structured root-cause classification, and recommends retry-safe remediation steps. Includes incident templates, exportable summaries, and mock Jira/Slack integrations to simulate real SRE workflows.",
    images: [
      "/projects/sentryAi-1.png",
      "/projects/sentryAi-2.png",
      "/projects/sentryAi-3.png",
    ],
    tags: ["React", "Spring Boot", "AI Ops", "Airflow", "Redis", "Docker"],
    link: "https://sentryai.ashirvad.work",
    github: "https://github.com/sdeashirvad/airflow-sentry-ai",
    featured: true,
    highlights: {
      metrics: [
        "Structured root-cause classification for Airflow failures",
        "Retry-safe remediation recommendations per incident type",
        "Exportable incident summaries for SRE handoffs",
      ],
      architecture: [
        "Spring Boot backend parsing Airflow failure payloads",
        "LLM-driven classification with templated incident responses",
        "Mock Jira/Slack integrations simulating production SRE flows",
      ],
      ownership: "Sole builder — ETL ops console, AI diagnosis engine, and incident workflow",
    },
  },
  {
    title: "ChatLoom — Multi-Channel GenAI Interaction Platform",
    description:
      "Centralized AI orchestration backend supporting multi-tenant RAG architecture, configurable grounding modes, dynamic system prompt templates, multi-API key rotation, persona-driven responses, and Telegram/Web interfaces. Built as a reusable AI service layer for future AI-Ops extensions.",
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
        "Multi-API key rotation for resilient LLM access",
        "Telegram + Web channels on a single orchestration layer",
      ],
      architecture: [
        "Spring Boot service layer with persona-driven prompt templates",
        "Pluggable RAG pipeline with dynamic system prompt injection",
        "REST API facade designed for future AI-Ops extensions",
      ],
      ownership: "Backend architect — AI orchestration layer and multi-channel interfaces",
    },
  },
  {
    title: "Transaction Guard — Idempotency & Exactly-Once Execution Layer",
    description:
      "Redis-backed idempotency middleware designed to guarantee atomic state transitions and exactly-once execution under retries and concurrent duplicate requests. Implements distributed locking via Lua scripts, configurable TTL, and fail-open/fail-closed operational modes.",
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
      "WIP — Redis idempotency middleware with Lua-based distributed locking. Public repo and demo coming soon.",
    highlights: {
      metrics: [
        "Exactly-once execution under concurrent duplicate requests",
        "Configurable TTL with fail-open / fail-closed modes",
      ],
      architecture: [
        "Lua scripts for atomic distributed locking in Redis",
        "Spring Boot middleware intercepting retry-prone endpoints",
      ],
      ownership: "In active development — distributed systems research project",
    },
  },
  {
    title: "Bloom — Quiet Pregnancy Companion",
    description:
      "Offline-first Android companion for week-by-week pregnancy journeys. Private journaling, gentle reflections, milestone memories, and exportable memory books — all stored locally on device with no account, tracking, or cloud sync required.",
    images: [
      "/projects/bloom-1.png",
      "/projects/bloom-2.png",
      "/projects/bloom-3.png",
    ],
    tags: ["React Native", "Android", "Offline-First", "Mobile", "Product Design"],
    link: "https://bloom.ashirvad.work",
    github: null,
    sourcePrivate: true,
    sourceNote:
      "Proprietary mobile product — source private ahead of Play Store release to protect user data and offline storage architecture.",
    featured: false,
    highlights: {
      metrics: [
        "Week-by-week guidance with mood check-ins and milestone memories",
        "100% on-device storage — no account, tracking, or internet required",
        "Exportable memory book PDF from the user's pregnancy journey",
      ],
      architecture: [
        "Offline-first local storage with privacy-by-design data model",
        "Modular feature screens: home, reflect, memories, and keepsake export",
      ],
      ownership: "Founder & lead engineer — SDEAshirvad Labs product",
    },
  },
  {
    title: "Veera — Fitness Intelligence Platform",
    description:
      "Adaptive fitness intelligence platform that goes beyond the scale — tracking body composition, translating complex signals into daily actions, and evolving personalized plans as your body changes. Mobile app in active development; early-access waitlist live.",
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
    sourceNote:
      "Proprietary mobile product — source private during pre-release; public repo would expand attack surface for health and fitness user data.",
    status: "in-progress",
    featured: false,
    wipNote:
      "In Development — native mobile app in build. Join early access at veera.sdeashirvad.com.",
    highlights: {
      metrics: [
        "Adaptive transformation tracking that adjusts plans to real progress",
        "Body composition insights beyond weight: fat loss, muscle gain, consistency",
        "Daily personalized actions from complex fitness and nutrition signals",
      ],
      architecture: [
        "Tracking → learning → adjustment loop for transformation intelligence",
        "Unified nutrition, workout, and composition data model for holistic guidance",
      ],
      ownership: "Founder & lead engineer — SDEAshirvad Labs product",
    },
  },
];

export const featuredProjects = projects.filter((p) => p.featured);

export const allProjectTags = [
  ...new Set(projects.flatMap((p) => p.tags)),
].sort();
