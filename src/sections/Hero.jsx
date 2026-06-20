import { Button } from "@/components/Button";
import {
  ArrowRight,
  ChevronDown,
  Github,
  Linkedin,
  Twitter,
  Download,
  Newspaper,
} from "lucide-react";
import { AnimatedBorderButton } from "../components/AnimatedBorderButton";

const skills = [
  "Java",
  "Spring Boot",
  "Apache Spark",
  "Apache Airflow",
  "Snowflake",
  "PostgreSQL",
  "Python",
  "React",
  "Angular",
  "Redis",
  "Docker",
  "AWS",
  "ETL Pipelines",
  "Microservices",
  "GenAI",
  "Distributed Systems",
];

const HERO_DOTS = [
  { left: 12, top: 8, duration: 22, delay: 0.5 },
  { left: 28, top: 15, duration: 28, delay: 1.2 },
  { left: 45, top: 6, duration: 19, delay: 2.1 },
  { left: 67, top: 22, duration: 31, delay: 0.8 },
  { left: 83, top: 11, duration: 25, delay: 3.4 },
  { left: 5, top: 35, duration: 27, delay: 1.7 },
  { left: 22, top: 42, duration: 20, delay: 4.2 },
  { left: 38, top: 28, duration: 33, delay: 0.3 },
  { left: 55, top: 48, duration: 24, delay: 2.8 },
  { left: 72, top: 38, duration: 18, delay: 1.1 },
  { left: 91, top: 45, duration: 29, delay: 3.9 },
  { left: 15, top: 58, duration: 26, delay: 0.6 },
  { left: 33, top: 65, duration: 21, delay: 2.4 },
  { left: 50, top: 72, duration: 30, delay: 4.7 },
  { left: 68, top: 55, duration: 23, delay: 1.9 },
  { left: 86, top: 68, duration: 17, delay: 3.1 },
  { left: 8, top: 78, duration: 32, delay: 0.9 },
  { left: 25, top: 85, duration: 19, delay: 2.6 },
  { left: 42, top: 92, duration: 28, delay: 4.0 },
  { left: 60, top: 82, duration: 22, delay: 1.4 },
  { left: 77, top: 88, duration: 27, delay: 3.6 },
  { left: 95, top: 75, duration: 20, delay: 0.2 },
  { left: 18, top: 18, duration: 31, delay: 2.9 },
  { left: 48, top: 33, duration: 24, delay: 4.5 },
  { left: 63, top: 12, duration: 18, delay: 1.6 },
  { left: 35, top: 52, duration: 29, delay: 3.3 },
  { left: 80, top: 28, duration: 21, delay: 0.7 },
  { left: 10, top: 48, duration: 26, delay: 2.2 },
  { left: 58, top: 62, duration: 23, delay: 4.1 },
  { left: 74, top: 8, duration: 30, delay: 1.8 },
];

export const Hero = () => {
  const handleDownloadCV = () => {
    const link = document.createElement("a");
    link.href = "/Resume_Ashirvad_Kumar_Pandey.pdf";
    link.download = "Resume_Ashirvad_Kumar_Pandey.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      <div className="absolute inset-0">
        <img
          src="/hero-bg.jpg"
          alt="Decorative dark gradient background with subtle network pattern"
          aria-hidden="true"
          className="w-full h-full object-cover opacity-40"
          fetchPriority="high"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/20 via-background/80 to-background" />
      </div>

      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {HERO_DOTS.map((dot, i) => (
          <div
            key={i}
            className="absolute w-1.5 h-1.5 rounded-full opacity-60"
            style={{
              backgroundColor: "#20B2A6",
              left: `${dot.left}%`,
              top: `${dot.top}%`,
              animation: `slow-drift ${dot.duration}s ease-in-out infinite`,
              animationDelay: `${dot.delay}s`,
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-6 pt-32 pb-20 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="animate-fade-in">
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass text-sm text-primary">
                <span className="w-2 h-2 bg-primary rounded-full animate-pulse" />
                Backend & Data Engineer · Software Engineer II
              </span>
            </div>

            <div className="space-y-4">
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight animate-fade-in animation-delay-100">
                Building enterprise
                <br />
                <span className="text-primary glow-text">data & AI</span>
                <br />
                <span className="font-serif italic font-normal text-white">
                  platforms.
                </span>
              </h1>

              <p className="text-sm md:text-base text-primary/90 font-medium max-w-lg animate-fade-in animation-delay-150 border-l-2 border-primary/50 pl-4">
                Morgan Stanley (via Wissen) · SE II · Agentic SDLC for 6 teams · Snowflake Cortex
              </p>

              <p className="text-lg text-muted-foreground max-w-lg animate-fade-in animation-delay-200">
                I build production backend systems and data pipelines — with agentic AI where it earns its place.
              </p>
            </div>

            <div className="flex flex-wrap gap-4 animate-fade-in animation-delay-300">
              <Button href="#contact" size="lg">
                Let's Talk <ArrowRight className="w-5 h-5" />
              </Button>
              <Button
                href="https://www.linkedin.com/in/sdeashirvad/"
                target="_blank"
                rel="noopener noreferrer"
                size="lg"
                className="bg-secondary text-foreground hover:bg-secondary/80 shadow-none"
              >
                <Linkedin className="w-5 h-5" />
                Connect on LinkedIn
              </Button>
              <AnimatedBorderButton
                onClick={handleDownloadCV}
                aria-label="Download CV"
                className="inline-flex"
              >
                <Download className="w-5 h-5" />
                Download CV
              </AnimatedBorderButton>
            </div>

            <div className="flex items-center gap-4 animate-fade-in animation-delay-400">
              <span className="text-sm text-muted-foreground">Follow me: </span>
              {[
                { icon: Github, href: "https://github.com/sdeashirvad", label: "GitHub" },
                { icon: Linkedin, href: "https://www.linkedin.com/in/sdeashirvad/", label: "LinkedIn" },
                { icon: Twitter, href: "https://x.com/sdeashirvad", label: "X" },
                { icon: Newspaper, href: "https://sdeashirvad.medium.com/", label: "Medium" },
              ].map((social, idx) => (
                <a
                  key={idx}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  className="p-2 rounded-full glass hover:bg-primary/10 hover:text-primary transition-all duration-300"
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          <div className="relative animate-fade-in animation-delay-300">
            <div className="relative max-w-md mx-auto">
              <div
                className="absolute inset-0 rounded-3xl bg-gradient-to-br from-primary/30 via-transparent to-primary/10 blur-2xl animate-pulse"
              />
              <div className="relative glass rounded-3xl p-2 glow-border">
                <img
                  src="/profile-photo.jpg"
                  alt="Ashirvad Kumar Pandey"
                  className="w-full aspect-[4/5] object-cover rounded-2xl"
                  loading="eager"
                  fetchPriority="high"
                />

                <div className="absolute -bottom-4 -right-4 glass rounded-xl px-4 py-3 animate-float">
                  <div className="flex items-center gap-3">
                    <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse" />
                    <span className="text-sm font-medium">
                      Software Engineer II · Open to collaborate
                    </span>
                  </div>
                </div>

                <div className="absolute -top-4 -left-4 glass rounded-xl px-4 py-3 animate-float animation-delay-500">
                  <div className="text-2xl font-bold text-primary">2+</div>
                  <div className="text-xs text-muted-foreground">Years Exp.</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-20 animate-fade-in animation-delay-600">
          <p className="text-sm text-muted-foreground mb-6 text-center">
            Technologies I work with
          </p>
          <div className="relative overflow-hidden">
            <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-background to-transparent z-10 pointer-events-none" />
            <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-background to-transparent z-10 pointer-events-none" />
            <div className="flex animate-marquee w-max">
              {skills.map((skill) => (
                <div key={skill} className="flex-shrink-0 px-8 py-4">
                  <span className="text-xl font-semibold text-muted-foreground/50 hover:text-muted-foreground transition-colors">
                    {skill}
                  </span>
                </div>
              ))}
              <div className="flex shrink-0" aria-hidden="true">
                {skills.map((skill) => (
                  <div key={`dup-${skill}`} className="flex-shrink-0 px-8 py-4">
                    <span className="text-xl font-semibold text-muted-foreground/50">
                      {skill}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-fade-in animation-delay-800">
        <a
          href="#about"
          className="flex flex-col items-center gap-2 text-muted-foreground hover:text-primary transition-colors group"
        >
          <span className="text-xs uppercase tracking-wider">Scroll</span>
          <ChevronDown className="w-6 h-6 animate-bounce" />
        </a>
      </div>
    </section>
  );
};
