import { useState, useEffect } from "react";
import { ArrowUpRight, Github } from "lucide-react";

function NpmIcon({ className }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      className={className}
      aria-hidden="true"
    >
      <path d="M1.763 0C.786 0 0 .786 0 1.763v20.474C0 23.214.786 24 1.763 24h20.474c.977 0 1.763-.786 1.763-1.763V1.763C24 .786 23.214 0 22.237 0H1.763zm14.337 6.851c.066.002.127.028.165.07.038.042.058.1.054.16v7.838c.004.06-.016.118-.054.16a.217.217 0 0 1-.165.071H8.502a.211.211 0 0 1-.144-.056.198.198 0 0 1-.062-.1.211.211 0 0 1-.062.1.198.198 0 0 1-.144.056H5.193V8.851h2.024v7.838h2.024V8.851h6.858z" />
    </svg>
  );
}

function MarketplaceIcon({ className }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      className={className}
      aria-hidden="true"
    >
      <path d="M4.5 3.75a3 3 0 0 0-3 3v.75h21v-.75a3 3 0 0 0-3-3h-15Zm-1.5 6v8.25a3 3 0 0 0 3 3h13.5a3 3 0 0 0 3-3V9.75H3Zm6.75 3.75a1.5 1.5 0 1 1 3 0 1.5 1.5 0 0 1-3 0Zm4.5 0a1.5 1.5 0 1 1 3 0 1.5 1.5 0 0 1-3 0Z" />
    </svg>
  );
}

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
  const hasNpm = project.npm && project.npm !== "#";
  const hasMarketplace = project.marketplace && project.marketplace !== "#";

  const showMoatLinks = Boolean(project.moat && (hasNpm || hasMarketplace));
  const showNpmInMobileBar = hasNpm && !showMoatLinks;
  const showMarketplaceInMobileBar = hasMarketplace && !showMoatLinks;
  const mobileBarLinkCount = [
    hasLink,
    hasGithub,
    showNpmInMobileBar,
    showMarketplaceInMobileBar,
  ].filter(Boolean).length;
  const hasMobileBar = mobileBarLinkCount > 0;

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

        {(hasNpm || hasMarketplace) && (
          <div className="absolute top-3 right-3 z-10 hidden md:flex gap-2">
            {hasNpm && (
              <a
                href={project.npm}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 rounded-full border border-[#cb3837]/40 bg-[#cb3837]/15 px-3 py-1.5 text-xs font-semibold text-[#ff6b6b] backdrop-blur-sm transition-colors hover:bg-[#cb3837]/25"
              >
                <NpmIcon className="h-3.5 w-3.5" />
                npm
              </a>
            )}
            {hasMarketplace && (
              <a
                href={project.marketplace}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 rounded-full border border-primary/40 bg-primary/15 px-3 py-1.5 text-xs font-semibold text-primary backdrop-blur-sm transition-colors hover:bg-primary/25"
              >
                <MarketplaceIcon className="h-3.5 w-3.5" />
                Marketplace
              </a>
            )}
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
            loading="lazy"
          />
        ))}

        <div className="absolute inset-0 bg-gradient-to-t from-card via-card/50 to-transparent opacity-60" />

        <div className="absolute inset-0 hidden md:flex items-center justify-center gap-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
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

          {hasNpm && (
            <a
              href={project.npm}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`View ${project.title} on npm`}
              className="p-3 rounded-full glass hover:bg-[#cb3837] hover:text-white transition-all text-[#ff6b6b]"
            >
              <NpmIcon className="w-5 h-5" />
            </a>
          )}

          {hasMarketplace && (
            <a
              href={project.marketplace}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`View ${project.title} on GitHub Marketplace`}
              className="p-3 rounded-full glass hover:bg-primary hover:text-primary-foreground transition-all text-primary"
            >
              <MarketplaceIcon className="w-5 h-5" />
            </a>
          )}
        </div>

        {hasMobileBar && (
          <div
            className={`absolute bottom-0 inset-x-0 z-10 md:hidden gap-2 p-3 bg-card/95 backdrop-blur-sm border-t border-border/40 ${
              mobileBarLinkCount > 2 ? "grid grid-cols-2" : "flex"
            }`}
          >
            {hasLink && (
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-3 py-2 rounded-lg bg-primary/15 text-primary text-sm font-medium min-w-0"
              >
                <ArrowUpRight className="w-4 h-4 shrink-0" />
                <span className="truncate">Live Demo</span>
              </a>
            )}
            {hasGithub && (
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-3 py-2 rounded-lg bg-surface text-foreground text-sm font-medium border border-border/50 min-w-0"
              >
                <Github className="w-4 h-4 shrink-0" />
                <span className="truncate">GitHub</span>
              </a>
            )}
            {showNpmInMobileBar && (
              <a
                href={project.npm}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-3 py-2 rounded-lg bg-[#cb3837]/15 text-[#ff6b6b] text-sm font-medium border border-[#cb3837]/30 min-w-0"
              >
                <NpmIcon className="w-4 h-4 shrink-0" />
                <span className="truncate">npm</span>
              </a>
            )}
            {showMarketplaceInMobileBar && (
              <a
                href={project.marketplace}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-3 py-2 rounded-lg bg-primary/15 text-primary text-sm font-medium border border-primary/30 min-w-0"
              >
                <MarketplaceIcon className="w-4 h-4 shrink-0" />
                <span className="truncate">Marketplace</span>
              </a>
            )}
          </div>
        )}

        {project.images.length > 1 && (
          <div
            className={`absolute left-1/2 -translate-x-1/2 flex gap-2 z-10 ${
              hasMobileBar ? "bottom-[4.75rem] md:bottom-2" : "bottom-2"
            }`}
          >
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

        {project.moat && (
          <div className="flex flex-col gap-2">
            <p className="text-xs font-medium text-muted-foreground">
              {project.moat}
            </p>
            {showMoatLinks && (
              <div className="flex flex-col sm:flex-row gap-2">
                {hasNpm && (
                  <a
                    href={project.npm}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 rounded-lg border border-[#cb3837]/30 bg-[#cb3837]/10 px-3 py-2.5 text-xs font-medium text-[#ff8a8a] transition-colors hover:bg-[#cb3837]/20 sm:flex-1"
                  >
                    <NpmIcon className="h-4 w-4 shrink-0" />
                    npm package
                    <ArrowUpRight className="h-3.5 w-3.5 shrink-0 opacity-80" />
                  </a>
                )}
                {hasMarketplace && (
                  <a
                    href={project.marketplace}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 rounded-lg border border-primary/30 bg-primary/10 px-3 py-2.5 text-xs font-medium text-primary transition-colors hover:bg-primary/20 sm:flex-1"
                  >
                    <MarketplaceIcon className="h-4 w-4 shrink-0" />
                    GitHub Marketplace
                    <ArrowUpRight className="h-3.5 w-3.5 shrink-0 opacity-80" />
                  </a>
                )}
              </div>
            )}
          </div>
        )}

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
