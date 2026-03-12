import Link from "next/link";
import Image from "next/image";
import { ExternalLink, Github, ArrowRight } from "lucide-react";
import { HoverLift } from "@/components/motion";
import type { Project } from "@/types/content";

interface ProjectCardProps {
  project: Project;
  featured?: boolean;
}

export function ProjectCard({ project, featured }: ProjectCardProps) {
  return (
    <HoverLift className="h-full">
      <article className="card h-full flex flex-col min-h-0">
        {project.image && (
          <div className="relative w-full aspect-video rounded-lg overflow-hidden mb-5 bg-[var(--bg-elevated)]">
            <Image
              src={project.image}
              alt={project.title}
              fill
              className="object-cover"
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
            />
            {featured && (
              <span
                className="absolute top-3 left-3 tag"
                style={{ background: "var(--accent-primary)", color: "#fff" }}
              >
                Featured
              </span>
            )}
          </div>
        )}

        <div className="flex flex-col flex-1">
          <div className="flex flex-wrap gap-1.5 mb-3">
            {project.tags.map((tag) => (
              <span key={tag} className="tag">
                {tag}
              </span>
            ))}
          </div>

          <h3
            className="text-xl font-semibold mb-2 tracking-tight"
            style={{ color: "var(--text-primary)" }}
          >
            {project.title}
          </h3>

          <p
            className="text-base leading-relaxed flex-1 mb-4"
            style={{ color: "var(--text-secondary)" }}
          >
            {project.summary}
          </p>

          <div className="flex flex-wrap gap-1.5 mb-5">
            {project.stack.map((tech) => (
              <span
                key={tech}
                className="font-mono text-sm px-2 py-0.5 rounded border"
                style={{
                  color: "var(--text-muted)",
                  borderColor: "var(--border-default)",
                  background: "var(--bg-elevated)",
                }}
              >
                {tech}
              </span>
            ))}
          </div>

          <div className="flex items-center gap-3 mt-auto">
            <Link
              href={`/projects/${project.slug}`}
              className="text-base font-medium flex items-center gap-1 transition-colors"
              style={{ color: "var(--accent-primary)" }}
            >
              Case study <ArrowRight size={14} />
            </Link>
            {project.link && (
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`${project.title} GitHub`}
                className="transition-opacity hover:opacity-60"
                style={{ color: "var(--text-muted)" }}
              >
                <Github size={16} />
              </a>
            )}
            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`${project.title} live demo`}
                className="transition-opacity hover:opacity-60"
                style={{ color: "var(--text-muted)" }}
              >
                <ExternalLink size={16} />
              </a>
            )}
          </div>
        </div>
      </article>
    </HoverLift>
  );
}
