"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import { ProjectCard } from "@/components/marketing/ProjectCard";
import { Reveal } from "@/components/motion";
import type { Project } from "@/types/content";

const INITIAL_COUNT = 6;
const LOAD_MORE_COUNT = 6;

interface ProjectsGridProps {
  projects: Project[];
}

export function ProjectsGrid({ projects }: ProjectsGridProps) {
  const [visibleCount, setVisibleCount] = useState(INITIAL_COUNT);
  const sentinelRef = useRef<HTMLDivElement>(null);
  const hasMore = visibleCount < projects.length;

  const loadMore = useCallback(() => {
    setVisibleCount((prev) => Math.min(prev + LOAD_MORE_COUNT, projects.length));
  }, [projects.length]);

  useEffect(() => {
    if (!hasMore || !sentinelRef.current) return;

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0]?.isIntersecting) loadMore();
      },
      { rootMargin: "200px", threshold: 0 }
    );

    observer.observe(sentinelRef.current);
    return () => observer.disconnect();
  }, [hasMore, loadMore]);

  const visible = projects.slice(0, visibleCount);

  return (
    <>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:items-stretch">
        {visible.map((project, i) => (
          <Reveal key={project.slug} delay={Math.min(i * 0.05, 0.3)} className="h-full min-h-0">
            <ProjectCard project={project} featured={project.featured} />
          </Reveal>
        ))}
      </div>

      {hasMore && (
        <div ref={sentinelRef} className="h-20 flex items-center justify-center" aria-hidden="true">
          <span
            className="text-sm font-medium animate-pulse"
            style={{ color: "var(--text-muted)" }}
          >
            Loading more...
          </span>
        </div>
      )}
    </>
  );
}
