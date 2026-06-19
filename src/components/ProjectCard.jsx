import { useState, useEffect } from "react";
import { ArrowUpRight, Github } from "lucide-react";

export const ProjectCard = ({ project, idx, variant = "compact" }) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const isDetailed = variant === "detailed";

  useEffect(() => {
    if (isHovered || project.images.length <= 1) return;

    const timer = setInterval(() => {
      setActiveIndex((prevIndex) => (prevIndex + 1) % project.images.length);
    }, 4000);

    return () => clearInterval(timer);
  }, [isHovered, project.images.length]);

  const hasLink = project.link && project.link !== "#";
  const hasGithub = project.github && project.github !== "#";

  return (
    <article
      className="group glass rounded-2xl overflow-hidden animate-fade-in md:row-span-1"
      style={{ animationDelay: `${(idx + 1) * 100}ms` }}
      aria-labelledby={`project-title-${idx}`}
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
            alt={`${project.title} platform screenshot ${index + 1}`}
            className={`w-full h-full object-cover absolute inset-0 transition-opacity duration-1000 ${
              index === activeIndex ? "opacity-100" : "opacity-0"
            }`}
            loading="lazy"
          />
        ))}

        <div className="absolute inset-0 bg-gradient-to-t from-card via-card/50 to-transparent opacity-60" />

        <div className="absolute inset-0 flex items-center justify-center gap-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          {hasLink && (
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`Visit ${project.title}`}
              className="p-3 rounded-full glass hover:bg-primary hover:text-primary-foreground transition-all"
            >
              <ArrowUpRight className="w-5 h-5" />
            </a>
          )}

          {hasGithub && (
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`View ${project.title} GitHub repository`}
              className="p-3 rounded-full glass hover:bg-primary hover:text-primary-foreground transition-all"
            >
              <Github className="w-5 h-5" />
            </a>
          )}
        </div>

        {project.images.length > 1 && (
          <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex gap-2">
            {project.images.map((_, index) => (
              <button
                key={index}
                onClick={() => setActiveIndex(index)}
                aria-label={`View screenshot ${index + 1} of ${project.title}`}
                className={`w-2 h-2 rounded-full transition-colors duration-300 ${
                  index === activeIndex ? "bg-white" : "bg-white/50"
                } hover:bg-white`}
              />
            ))}
          </div>
        )}
      </div>

      <div className="p-6 space-y-4">
        <div className="flex items-start justify-between gap-4">
          <h3
            id={`project-title-${idx}`}
            className="text-xl font-semibold group-hover:text-primary transition-colors"
          >
            {project.title}
          </h3>

          <ArrowUpRight className="w-5 h-5 shrink-0 text-muted-foreground group-hover:text-primary group-hover:translate-x-1 group-hover:-translate-y-1 transition-all" />
        </div>

        <p className="text-muted-foreground text-sm leading-relaxed">
          {project.description}
        </p>

        {project.wipNote && isDetailed && (
          <p className="text-amber-400/90 text-xs leading-relaxed border border-amber-500/20 rounded-lg px-3 py-2 bg-amber-500/5">
            {project.wipNote}
          </p>
        )}

        {project.sourcePrivate && project.sourceNote && (
          <p
            className={`text-xs leading-relaxed border rounded-lg px-3 py-2 ${
              isDetailed
                ? "text-muted-foreground border-border/50 bg-surface/50"
                : "text-muted-foreground/90 border-border/40 bg-surface/30"
            }`}
          >
            <span className="font-medium text-foreground/80">Private repository — </span>
            {project.sourceNote}
          </p>
        )}

        {isDetailed && project.highlights && (
          <div className="space-y-3 pt-2 border-t border-border/50">
            <p className="text-xs font-semibold uppercase tracking-wider text-primary">
              {project.highlights.ownership}
            </p>

            {project.architectureNote && (
              <p className="text-xs font-mono text-muted-foreground bg-surface rounded-lg px-3 py-2">
                {project.architectureNote}
              </p>
            )}

            {project.highlights.metrics?.length > 0 && (
              <ul className="text-xs text-muted-foreground space-y-1 list-disc list-inside">
                {project.highlights.metrics.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
            )}

            {project.highlights.architecture?.length > 0 && (
              <div className="flex flex-wrap gap-1.5">
                {project.highlights.architecture.map((item, i) => (
                  <span
                    key={i}
                    className="text-xs px-2 py-1 rounded-md bg-primary/10 text-primary/90 border border-primary/20"
                  >
                    {item}
                  </span>
                ))}
              </div>
            )}
          </div>
        )}

        <div
          className="flex flex-wrap gap-2"
          aria-label={`${project.title} technologies`}
        >
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
    </article>
  );
};
