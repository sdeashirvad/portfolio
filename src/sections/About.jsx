import { Server, Workflow, BrainCircuit, Blocks, Layers, Cloud } from "lucide-react";

const highlights = [
  {
    icon: Server,
    title: "Backend Architecture",
    description:
      "Resilient microservices and distributed systems with Spring Boot.",
  },
  {
    icon: Workflow,
    title: "Data Engineering & Pipelines",
    description:
      "Fault-tolerant ETL, query optimization, and distributed processing.",
  },
  {
    icon: BrainCircuit,
    title: "Agentic AI Workflows",
    description: "LLM and agent workflows integrated into production systems.",
  },
  {
    icon: Blocks,
    title: "System Design",
    description:
      "Idempotency, caching, and resilient data flows at scale.",
  },
  {
    icon: Layers,
    title: "Full-Stack Delivery",
    description:
      "Backend-led end-to-end features — Spring Boot APIs with React or Angular frontends.",
  },
  {
    icon: Cloud,
    title: "Cloud & DevOps",
    description:
      "Docker, AWS, and CI/CD for reliable deployment and production ops.",
  },
];

export const About = () => {
  return (
    <section id="about" className="py-32 relative overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Column */}
          <div className="space-y-8">
            <div className="animate-fade-in">
              <span className="text-secondary-foreground text-sm font-medium tracking-wider uppercase">
                About Me
              </span>
            </div>

            <h2 className="text-4xl md:text-5xl font-bold leading-tight animate-fade-in animation-delay-100 text-secondary-foreground">
              Enterprise Systems Engineer
              <span className="font-serif italic font-normal text-white">
                {" "}
                with data & AI expertise.
              </span>
            </h2>

            <div className="space-y-4 text-muted-foreground animate-fade-in animation-delay-200">
              <p>
                With 2+ years building production enterprise systems, I focus on backend
                architecture and data engineering — resilient distributed services beyond
                basic API wrappers.
              </p>
              <p>
                My specialty sits at high-volume data processing and autonomous systems:
                ETL pipelines, optimized data streams, and Agentic AI for intelligent
                decision-making at scale.
              </p>
            </div>

            <div className="glass rounded-2xl p-6 glow-border animate-fade-in animation-delay-300">
              <p className="text-lg font-medium italic text-foreground">
                "Great engineering should feel invisible. I build heavy-lifting systems behind the scenes so that complex data and intelligent workflows can just... work."
              </p>
            </div>

            <div className="glass rounded-2xl p-5 border border-primary/20 animate-fade-in animation-delay-400">
              <p className="text-xs font-semibold uppercase tracking-wider text-primary mb-3">
                System Design Snapshot — PnLGuard
              </p>
              <p className="text-xs font-mono text-muted-foreground leading-relaxed bg-surface rounded-lg px-4 py-3">
                Ingest → Rule Engine → PostgreSQL Store → GenAI Explainer → HITL Review → Audit Store
              </p>
              <p className="text-xs text-muted-foreground mt-3 leading-relaxed">
                Rules stay deterministic; GenAI adds context for human reviewers.
              </p>
            </div>
          </div>

          {/* Right Column - Hilights */}
          <div className="grid sm:grid-cols-2 gap-6">
            {highlights.map((item, idx) => (
              <div
                key={idx}
                className="glass p-6 rounded-2xl animate-fade-in"
                style={{ animationDelay: `${(idx + 1) * 100}ms` }}
              >
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 hover:bg-primary/20">
                  <item.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
                <p className="text-sm text-muted-foreground">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
