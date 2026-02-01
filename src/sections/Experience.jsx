import { ChevronRight, X } from "lucide-react";
import { useState } from "react";

const experiences = [
  {
    period: "Jun 2025 — Present",
    role: "Software Engineer – Full Stack & Data Engineering",
    company: "Wissen Technology (Client: Morgan Stanley)",
    bullets: [
      "Engineered an end-to-end financial audit automation platform, reducing reporting turnaround time by 40% for risk and P&L workflows",
      "Built scalable Angular frontends and Spring Boot microservices integrated with Snowflake to support high-volume financial data processing",
      "Implemented AI-driven anomaly detection to automate P&L insights, cutting manual analysis effort by 60% for risk managers",
      "Led a 3-member initiative to deploy Airflow Celery-based orchestration, improving pipeline reliability, failover recovery, and execution visibility",
      "Collaborated closely with controllers and risk stakeholders to translate regulatory requirements into production-ready systems",
    ],
    technologies: [
      "Angular",
      "Spring Boot",
      "Apache Airflow",
      "Snowflake",
      "AI/Anomaly Detection",
      "Microservices",
      "ETL Pipelines",
      "Financial Systems",
    ],
    current: true,
  },
  {
    period: "Feb 2024 — May 2025",
    role: "SDE Intern / Data Engineering Consultant",
    company: "Wissen Technology (Client: Morgan Stanley)",
    bullets: [
      "Automated 200+ hours per week of manual EUC effort by designing and implementing Spark-based ETL pipelines for ICAAP and regulatory reporting",
      "Developed secure and scalable REST APIs using Spring Boot, integrating frontend applications with Snowflake and Teradata",
      "Optimized Spark queries and data workflows, achieving up to 80% performance improvement across large datasets",
      "Introduced distributed caching using Hazelcast, improving system responsiveness and throughput by 70%",
      "Migrated legacy GWT and Angular monoliths to a React-based micro-frontend architecture, enabling independent deployments and better scalability",
    ],
    technologies: [
      "Java",
      "Apache Spark",
      "Spring Boot",
      "React",
      "Angular",
      "Snowflake",
      "Teradata",
      "Hazelcast",
      "REST APIs",
      "Micro-Frontends",
    ],
    current: false,
  },
  {
    period: "Aug 2021 — Jan 2024",
    role: "Software Engineering Projects",
    company: "Independent & Academic Work",
    bullets: [
      "Built end-to-end full-stack applications using React, Java, and Python, focusing on clean architecture and maintainable codebases",
      "Implemented backend services and REST APIs, working with SQL databases and optimizing queries for performance",
      "Strengthened problem-solving skills through hands-on practice in data structures, algorithms, and system design fundamentals",
      "Worked with Git-based version control, collaborative workflows, and basic deployment pipelines",
      "Explored AI integration and automation through independent projects aligned with real-world engineering problems",
    ],
    technologies: [
      "React",
      "Java",
      "Python",
      "JavaScript",
      "SQL",
      "Git",
      "HTML",
      "CSS",
      "System Design Basics",
    ],
    current: false,
  },
];

const HIGHLIGHT_KEYWORDS = [
  "40%",
  "60%",
  "200+",
  "80%",
  "70%",
  "Angular",
  "Spring Boot",
  "Apache Spark",
  "React",
  "Snowflake",
  "Airflow",
  "ETL",
  "Microservices",
  "P&L",
  "ICAAP",
];

const highlightText = (text, keywords) => {
  if (!text) return text;

  const regex = new RegExp(`(${keywords.join("|")})`, "gi");

  return text.split(regex).map((part, i) =>
    keywords.some(k => k.toLowerCase() === part.toLowerCase()) ? (
      <span
        key={i}
        className="text-white/90 font-medium underline decoration-white/20 underline-offset-2"
      >
        {part}
      </span>
    ) : (
      part
    )
  );
};

export const Experience = () => {
  const [selectedExp, setSelectedExp] = useState(null);

  return (
    <section id="experience" className="py-32 relative overflow-hidden">
      <div
        className="absolute top-1/2 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl -translate-y-1/2"
      />

      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <span className="text-secondary-foreground text-sm font-medium tracking-wider uppercase animate-fade-in">
            Professional Journey
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6 animate-fade-in animation-delay-100 text-secondary-foreground">
            Experience &
            <span className="font-serif italic font-normal text-white"> expertise.</span>
          </h2>

          <p className="text-muted-foreground animate-fade-in animation-delay-200">
            From junior developer to full stack engineer, I've built a solid foundation
            in modern web development with a focus on production-ready applications.
          </p>
        </div>

        {/* Timeline */}
        <div className="relative">
          <div className="timeline-glow absolute left-0 md:left-1/2 top-0 bottom-0 w-[2px] bg-gradient-to-b from-primary/70 via-primary/30 to-transparent md:-translate-x-1/2 shadow-[0_0_25px_rgba(32,178,166,0.8)]" />

          <div className="space-y-12">
            {experiences.map((exp, idx) => (
              <div
                key={idx}
                className="relative grid md:grid-cols-2 gap-8 animate-fade-in"
                style={{ animationDelay: `${(idx + 1) * 150}ms` }}
              >
                {/* Timeline Dot */}
                <div className="absolute left-0 md:left-1/2 top-0 w-3 h-3 bg-primary rounded-full -translate-x-1/2 ring-4 ring-background z-10">
                  {exp.current && (
                    <span className="absolute inset-0 rounded-full bg-primary animate-ping opacity-75" />
                  )}
                </div>

                {/* Content */}
                <div
                  className={`pl-8 md:pl-0 ${
                    idx % 2 === 0
                      ? "md:pr-16 md:text-right"
                      : "md:col-start-2 md:pl-16"
                  }`}
                >
                  <div
                    onClick={() => setSelectedExp(exp)}
                    role="button"
                    tabIndex={0}
                    className="glass p-6 rounded-2xl border border-primary/30 hover:border-primary/50 hover:cursor-pointer transition-all duration-500 group"
                  >
                    <span className="text-sm text-primary font-medium">
                      {exp.period}
                    </span>
                    <h3 className="text-xl font-semibold mt-2">{exp.role}</h3>
                    <p className="text-muted-foreground">{exp.company}</p>

                    <ul className="mt-4 space-y-2 text-sm list-disc list-outside pl-5 text-muted-foreground">
                      {exp.bullets.slice(0, 2).map((bullet, i) => (
                        <li key={i} className="leading-relaxed">
                          {highlightText(bullet, HIGHLIGHT_KEYWORDS)}
                        </li>
                      ))}
                    </ul>

                    {exp.bullets.length > 2 && (
                      <button
                        onClick={() => setSelectedExp(exp)}
                        className="relative mt-4 inline-flex items-center gap-2 px-4 py-2 text-xs font-medium text-primary border border-primary/40 rounded-full overflow-hidden group"
                      >
                        {/* Fill sweep layer */}
                        <span className="pointer-events-none absolute inset-0 overflow-hidden">
                          <span
                            className="absolute inset-0 bg-primary/15 animate-sweep-ltr"
                          />
                        </span>

                        {/* Content */}
                        <span className="relative z-10 group-hover:text-white transition-colors">
                          Read More
                        </span>

                        <ChevronRight className="relative z-10 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                      </button>
                    )}



                    <div
                      className={`flex flex-wrap gap-2 mt-4 ${
                        idx % 2 === 0 ? "md:justify-end" : ""
                      }`}
                    >
                      {exp.technologies.map((tech, techIdx) => (
                        <span
                          key={techIdx}
                          className="px-3 py-1 bg-surface text-xs rounded-full text-muted-foreground"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Modal */}
      {selectedExp && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4 backdrop-blur-sm">
          <div className="glass rounded-3xl p-8 max-w-2xl w-full max-h-[80vh] overflow-y-auto border border-primary/30 animate-fade-in relative">

            <button
              onClick={() => setSelectedExp(null)}
              className="absolute top-6 right-6 p-2 rounded-full hover:bg-primary/10 transition-colors"
            >
              <X className="w-6 h-6" />
            </button>

            <span className="text-sm text-primary font-medium">
              {selectedExp.period}
            </span>

            <h3 className="text-3xl font-bold mt-2 mb-1">
              {selectedExp.role}
            </h3>

            <p className="text-white/70 text-lg mb-6 tracking-wide">
              {selectedExp.company}
            </p>

            {/* Experience Bullets */}
            <ul className="space-y-3 text-white/80 text-base list-disc list-outside pl-5 marker:text-white/40 mb-8">
              {selectedExp.bullets.map((bullet, i) => (
                <li
                  key={i}
                  className="leading-snug tracking-[0.01em]"
                >
                  {highlightText(bullet, HIGHLIGHT_KEYWORDS)}
                </li>
              ))}
            </ul>

            {/* Technologies */}
            <div className="border-t border-border pt-6">
              <h4 className="text-sm font-semibold mb-4 uppercase tracking-wider">
                Technologies & Skills
              </h4>
              <div className="flex flex-wrap gap-2">
                {selectedExp.technologies.map((tech, techIdx) => (
                  <span
                    key={techIdx}
                    className="px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium border border-primary/30 hover:border-primary/50 transition-all"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}

    </section>
  );
};
