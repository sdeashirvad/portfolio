import { useEffect, useRef, useState } from "react";
import { X } from "lucide-react";
import { projects, allProjectTags } from "@/data/projects";
import { ProjectCard } from "@/components/ProjectCard";

export const AllProjectsModal = ({ isOpen, onClose }) => {
  const [activeTag, setActiveTag] = useState(null);
  const modalRef = useRef(null);
  const closeButtonRef = useRef(null);

  const filteredProjects = activeTag
    ? projects.filter((p) => p.tags.includes(activeTag))
    : projects;

  useEffect(() => {
    if (!isOpen) return;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    closeButtonRef.current?.focus();

    const handleKeyDown = (e) => {
      if (e.key === "Escape") onClose();
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-[100] flex items-start justify-center"
      role="dialog"
      aria-modal="true"
      aria-labelledby="all-projects-title"
    >
      <button
        type="button"
        className="absolute inset-0 bg-background/80 backdrop-blur-md"
        aria-label="Close all projects"
        onClick={onClose}
      />

      <div
        ref={modalRef}
        className="relative w-full max-w-6xl mx-4 my-8 md:my-12 max-h-[90vh] overflow-y-auto theme-scrollbar glass-strong rounded-3xl border border-primary/20 animate-fade-in"
      >
        <div className="sticky top-0 z-10 glass-strong border-b border-border/50 px-6 py-5 flex items-start justify-between gap-4 rounded-t-3xl">
          <div>
            <h2 id="all-projects-title" className="text-2xl md:text-3xl font-bold">
              All Projects
            </h2>
            <p className="text-sm text-muted-foreground mt-1">
              6 builds from SDEAshirvad Labs
            </p>
          </div>
          <button
            ref={closeButtonRef}
            type="button"
            onClick={onClose}
            aria-label="Close projects modal"
            className="p-2 rounded-full hover:bg-primary/10 transition-colors shrink-0"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        <div className="px-6 py-4 flex flex-wrap gap-2 border-b border-border/30">
          <button
            type="button"
            onClick={() => setActiveTag(null)}
            className={`px-3 py-1.5 rounded-full text-xs font-medium transition-all ${
              activeTag === null
                ? "bg-primary text-primary-foreground"
                : "bg-surface text-muted-foreground hover:text-foreground"
            }`}
          >
            All
          </button>
          {allProjectTags.map((tag) => (
            <button
              key={tag}
              type="button"
              onClick={() => setActiveTag(tag === activeTag ? null : tag)}
              className={`px-3 py-1.5 rounded-full text-xs font-medium transition-all ${
                activeTag === tag
                  ? "bg-primary text-primary-foreground"
                  : "bg-surface text-muted-foreground hover:text-foreground"
              }`}
            >
              {tag}
            </button>
          ))}
        </div>

        <div className="p-6 grid md:grid-cols-2 gap-8">
          {filteredProjects.map((project, idx) => (
            <ProjectCard
              key={project.title}
              project={project}
              idx={idx}
              variant="detailed"
            />
          ))}
        </div>

        {filteredProjects.length === 0 && (
          <p className="text-center text-muted-foreground py-12">
            No projects match this filter.
          </p>
        )}
      </div>
    </div>
  );
};
