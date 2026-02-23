import { useState, useEffect } from "react";
import { ArrowUpRight, Github } from "lucide-react";
import { AnimatedBorderButton } from "@/components/AnimatedBorderButton";

const projects = [
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
    github: "https://github.com/sdeashirvad/pnlguard-dashboard",
  },
  {
    title: "AirflowSentry AI — ETL Failure Diagnosis Console",
    description:
      "AI-powered ETL Ops console that analyzes Airflow pipeline failures, performs structured root-cause classification, and recommends retry-safe remediation steps. Includes incident templates, exportable summaries, and mock Jira/Slack integrations to simulate real SRE workflows.",
    images: ["/projects/sentryAi-1.png", "/projects/sentryAi-2.png", "/projects/sentryAi-3.png"],
    tags: ["React", "Spring Boot", "AI Ops", "Airflow", "Redis", "Docker"],
    link: "https://sentryai.ashirvad.work",
    github: "https://github.com/sdeashirvad/airflowsentry-console",
  },
  {
    title: "ChatLoom — Multi-Channel GenAI Interaction Platform",
    description:
      "Centralized AI orchestration backend supporting dynamic system prompt templates, multi-API key rotation, persona-driven responses, and Telegram/Web interfaces. Built as a reusable AI service layer for future AI-Ops extensions.",
    images: ["/projects/chatloom-1.png", "/projects/chatloom-2.png"],
    tags: [
      "Spring Boot",
      "Gemini API",
      "Prompt Engineering",
      "Docker",
      "REST APIs",
    ],
    link: "https://chatloom.ashirvad.work",
    github: "https://github.com/sdeashirvad/chatloom",
  },
  {
    title:
      "Transaction Guard — Idempotency & Exactly-Once Execution Layer (In Development)",
    description:
      "Designing a Redis-backed idempotency middleware that guarantees atomic state transitions and exactly-once execution under retries and concurrent duplicate requests. Implements distributed locking via Lua scripts, configurable TTL, and fail-open/fail-closed modes for high-availability trade-offs.",
    images: ["/projects/transactionGaurd-1.png"],
    tags: [
      "Spring Boot",
      "Redis",
      "Lua",
      "Distributed Systems",
      "Concurrency Control",
      "Docker",
    ],
    link: "#",
    github: "#",
    status: "in-progress",
  },
];

const ProjectCard = ({ project, idx }) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    if (isHovered || project.images.length <= 1) return;

    const timer = setInterval(() => {
      setActiveIndex((prevIndex) => (prevIndex + 1) % project.images.length);
    }, 4000);

    return () => clearInterval(timer);
  }, [isHovered, project.images.length]);

  return (
    <div
      className="group glass rounded-2xl overflow-hidden animate-fade-in md:row-span-1"
      style={{ animationDelay: `${(idx + 1) * 100}ms` }}
    >
      <div
        className="relative overflow-hidden aspect-video"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {project.status === "in-progress" && (
          <div className="absolute top-3 left-3 z-10 bg-amber-500 text-black text-xs font-bold px-2.5 py-1 rounded-full">
            In Development
          </div>
        )}

        {project.images.map((image, index) => (
          <img
            key={index}
            src={image}
            alt={`${project.title} screenshot ${index + 1}`}
            className={`w-full h-full object-cover absolute inset-0 transition-opacity duration-1000 ${
              index === activeIndex ? "opacity-100" : "opacity-0"
            }`}
          />
        ))}

        <div className="absolute inset-0 bg-gradient-to-t from-card via-card/50 to-transparent opacity-60" />

        <div className="absolute inset-0 flex items-center justify-center gap-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <a
            href={project.link}
            className="p-3 rounded-full glass hover:bg-primary hover:text-primary-foreground transition-all"
          >
            <ArrowUpRight className="w-5 h-5" />
          </a>
          <a
            href={project.github}
            className="p-3 rounded-full glass hover:bg-primary hover:text-primary-foreground transition-all"
          >
            <Github className="w-5 h-5" />
          </a>
        </div>

        {project.images.length > 1 && (
          <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex gap-2">
            {project.images.map((_, index) => (
              <button
                key={index}
                onClick={() => setActiveIndex(index)}
                className={`w-2 h-2 rounded-full transition-colors duration-300 ${
                  index === activeIndex ? "bg-white" : "bg-white/50"
                } hover:bg-white`}
              />
            ))}
          </div>
        )}
      </div>

      <div className="p-6 space-y-4">
        <div className="flex items-start justify-between">
          <h3 className="text-xl font-semibold group-hover:text-primary transition-colors">
            {project.title}
          </h3>
          <ArrowUpRight className="w-5 h-5 text-muted-foreground group-hover:text-primary group-hover:translate-x-1 group-hover:-translate-y-1 transition-all" />
        </div>
        <p className="text-muted-foreground text-sm">{project.description}</p>
        <div className="flex flex-wrap gap-2">
          {project.tags.map((tag, tagIdx) => (
            <span
              key={tagIdx}
              className="px-4 py-1.5 rounded-full bg-surface text-xs font-medium border border-border/50 text-muted-foreground hover:border-primary/50 hover:text-primary transition-all duration-300"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export const Projects = () => {
  return (
    <section id="projects" className="py-32 relative overflow-hidden">
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 left-0 w-64 h-64 bg-highlight/5 rounded-full blur-3xl" />
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mx-auto max-w-3xl mb-16">
          <span className="text-secondary-foreground text-sm font-medium tracking-wider uppercase animate-fade-in">
            Featured Work
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6 animate-fade-in animation-delay-100 text-secondary-foreground">
            Projects that
            <span className="font-serif italic font-normal text-white">
              {" "}
              make an impact.
            </span>
          </h2>
          <p className="text-muted-foreground animate-fade-in animation-delay-200">
            Production-ready AI-driven platforms focused on backend reliability,
            data workflows, and distributed system correctness.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, idx) => (
            <ProjectCard key={idx} project={project} idx={idx} />
          ))}
        </div>

        <div className="text-center mt-12 animate-fade-in animation-delay-500">
          <AnimatedBorderButton>
            View All Projects
            <ArrowUpRight className="w-5 h-5" />
          </AnimatedBorderButton>
        </div>
      </div>
    </section>
  );
};
