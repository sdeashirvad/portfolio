import { useEffect, useRef } from "react";
import { trackSectionView } from "@/lib/analytics";

const TRACKED_SECTIONS = ["projects", "writing", "experience", "contact"];

export function useSectionTracking() {
  const tracked = useRef(new Set());

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          const id = entry.target.id;
          if (!TRACKED_SECTIONS.includes(id) || tracked.current.has(id)) return;
          tracked.current.add(id);
          trackSectionView(id);
        });
      },
      { threshold: 0.4 }
    );

    TRACKED_SECTIONS.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);
}
