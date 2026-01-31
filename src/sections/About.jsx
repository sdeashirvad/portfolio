import { Code2, Lightbulb, Rocket, Users } from "lucide-react";

const highlights = [
  {
    icon: Code2,
    title: "Full Stack Development",
    description:
      "Building scalable systems with SpringBoot, GoLang, Flask, FastAPI backends and React/Angular frontends.",
  },
  {
    icon: Rocket,
    title: "Data Processing & Analysis",
    description:
      "Designing ETL pipelines, optimizing queries, and transforming data into actionable insights.",
  },
  {
    icon: Users,
    title: "AI Integration",
    description: "Seamlessly integrating machine learning models and AI capabilities into production systems.",
  },
  {
    icon: Lightbulb,
    title: "System Design",
    description:
      "Architecting robust, scalable systems that handle complex data workflows efficiently.",
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
              Full Stack Developer
              <span className="font-serif italic font-normal text-white">
                {" "}
                with data expertise.
              </span>
            </h2>

            <div className="space-y-4 text-muted-foreground animate-fade-in animation-delay-200">
              <p>
                I'm a full stack developer with 2+ years of experience building intelligent,
                data-driven applications. My expertise spans the entire technology stack —
                from robust backends using SpringBoot, GoLang, Flask, and FastAPI, to responsive
                frontends with React and Angular.
              </p>
              <p>
                My core speciality is data processing, analysis, and AI integration. I design systems
                that transform raw data into actionable insights, and seamlessly integrate machine learning
                and AI capabilities into production applications. I focus on building scalable architectures
                that handle complex data workflows efficiently.
              </p>
              <p>
                I combine technical excellence with a deep understanding of data structures and algorithms.
                Whether it's optimizing database queries, building ETL pipelines, or integrating AI models,
                I deliver solutions that are performant, maintainable, and production-ready.
              </p>
            </div>

            <div className="glass rounded-2xl p-6 glow-border animate-fade-in animation-delay-300">
              <p className="text-lg font-medium italic text-foreground">
                "I build data-driven systems where every line of code serves a purpose - turning complex information into insights that drive better decisions and measurable impact."
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
