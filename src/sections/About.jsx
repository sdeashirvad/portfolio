import { Server, Workflow, BrainCircuit, Blocks} from "lucide-react";

const highlights = [
  {
    icon: Server,
    title: "Backend Architecture",
    description:
      "Building resilient, highly scalable microservices and distributed systems utilizing robust frameworks like Spring Boot.",
  },
  {
    icon: Workflow,
    title: "Data Engineering & Pipelines",
    description:
      "Designing fault-tolerant ETL pipelines, optimizing complex database queries, and managing distributed data processing engines.",
  },
  {
    icon: BrainCircuit,
    title: "Agentic AI Workflows",
    description: "Seamlessly integrating intelligent, autonomous agents and LLM capabilities into production systems to automate complex enterprise tasks.",
  },
  {
    icon: Blocks,
    title: "System Design",
    description:
      "Architecting high-availability systems with a strict focus on idempotency, high-scale caching, and resilient data flows.",
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
                With 2+ years of experience building production-grade enterprise systems,
                my expertise lies in heavy backend architecture and robust data engineering.
                I focus on developing resilient, distributed services and moving beyond basic
                API wrappers to solve complex, high-scale engineering challenges.
              </p>
              <p>
                My core specialty sits at the intersection of high-volume data processing and autonomous systems.
                I architect robust ETL pipelines, optimize data streams, and integrate Agentic
                AI to automate complex workflows and drive intelligent decision-making at scale.
              </p>
              <p>
                By combining a rigorous foundation in data structures and algorithms with modern system design principles,
                I architect solutions that are not just functional, but highly performant, maintainable,
                and built to withstand enterprise-level loads.
              </p>
            </div>

            <div className="glass rounded-2xl p-6 glow-border animate-fade-in animation-delay-300">
              <p className="text-lg font-medium italic text-foreground">
                "Great engineering should feel invisible. I build heavy-lifting systems behind the scenes so that complex data and intelligent workflows can just... work."
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
