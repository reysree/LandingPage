import type { Experience } from "@/types/content";
import { cn } from "@/lib/utils";

interface TimelineItemProps {
  experience: Experience;
  index: number;
}

export function TimelineItem({ experience, index }: TimelineItemProps) {
  const primaryHighlights = experience.description.slice(0, 2);
  const additionalHighlights = experience.description.slice(2);
  const isLeft = index % 2 === 0;

  const cardContent = (
    <article className="card bg-frosted p-4 sm:p-5 md:p-6 min-w-0 overflow-hidden">
      <div className="flex flex-wrap items-center gap-2 mb-3">
        <span
          className="font-mono text-xs px-2.5 py-1 rounded-full border"
          style={{
            color: "var(--mono-text)",
            borderColor: "var(--border-default)",
            background: "var(--bg-elevated)",
          }}
        >
          {experience.period}
        </span>
        {experience.current && (
          <span
            className="font-mono text-xs px-2.5 py-1 rounded-full border"
            style={{
              color: "var(--accent-primary)",
              borderColor: "var(--accent-primary)",
              background: "var(--accent-subtle)",
            }}
          >
            Current role
          </span>
        )}
      </div>

      <h3
        className="text-xl md:text-2xl font-semibold tracking-tight mb-1"
        style={{ color: "var(--text-primary)" }}
      >
        {experience.title}
      </h3>
      <p className="text-base font-medium mb-4" style={{ color: "var(--accent-primary)" }}>
        {experience.company}
      </p>

      <ul className="space-y-2.5 mb-4">
        {primaryHighlights.map((desc, i) => (
          <li key={i} className="flex items-start gap-2.5">
            <span
              className="mt-2 inline-block w-1.5 h-1.5 rounded-full shrink-0"
              style={{ background: "var(--accent-primary)" }}
              aria-hidden="true"
            />
            <span className="text-base leading-relaxed" style={{ color: "var(--text-secondary)" }}>
              {desc}
            </span>
          </li>
        ))}
      </ul>

      {additionalHighlights.length > 0 && (
        <details className="mb-5">
          <summary
            className="text-sm font-medium cursor-pointer select-none"
            style={{ color: "var(--accent-primary)" }}
          >
            View more impact
          </summary>
          <ul className="space-y-2.5 mt-3">
            {additionalHighlights.map((desc, i) => (
              <li key={`${experience.title}-${i}`} className="flex items-start gap-2.5">
                <span
                  className="mt-2 inline-block w-1.5 h-1.5 rounded-full shrink-0"
                  style={{ background: "var(--accent-primary)" }}
                  aria-hidden="true"
                />
                <span className="text-base leading-relaxed" style={{ color: "var(--text-secondary)" }}>
                  {desc}
                </span>
              </li>
            ))}
          </ul>
        </details>
      )}

      <div className="flex flex-wrap gap-1.5">
        {experience.skills.map((skill) => (
          <span key={skill} className="tag">
            {skill}
          </span>
        ))}
      </div>
    </article>
  );

  return (
    <div
      className={cn(
        "relative grid grid-cols-1 md:grid-cols-[1fr_auto_1fr] md:gap-0 gap-0 pb-12 last:pb-0 md:items-start"
      )}
    >
      {/* Mobile: left rail + content */}
      <div className="md:hidden relative pl-8">
        <span
          className="absolute left-3 top-0 bottom-0 w-px"
          style={{
            background:
              "linear-gradient(to bottom, var(--accent-subtle), var(--border-default), transparent)",
          }}
          aria-hidden="true"
        />
        <span
          className="absolute left-[7px] top-7 w-3 h-3 rounded-full border"
          style={{
            background: experience.current ? "var(--accent-primary)" : "var(--bg-surface)",
            borderColor: experience.current ? "var(--accent-primary)" : "var(--border-strong)",
            boxShadow: experience.current ? "0 0 0 4px var(--accent-subtle)" : "none",
          }}
          aria-hidden="true"
        />
        {cardContent}
      </div>

      {/* Desktop: zig-zag - left column */}
      <div className="hidden md:flex md:justify-end md:pr-6">
        {isLeft && <div className="w-full min-w-0">{cardContent}</div>}
      </div>

      {/* Center: node (rail is in parent) */}
      <div className="hidden md:flex md:flex-col md:items-center md:min-w-[24px]">
        <span
          className="relative z-10 mt-6 w-3 h-3 rounded-full border shrink-0"
          style={{
            background: experience.current ? "var(--accent-primary)" : "var(--bg-surface)",
            borderColor: experience.current ? "var(--accent-primary)" : "var(--border-strong)",
            boxShadow: experience.current ? "0 0 0 4px var(--accent-subtle)" : "none",
          }}
          aria-hidden="true"
        />
      </div>

      {/* Desktop: zig-zag - right column */}
      <div className="hidden md:flex md:justify-start md:pl-6">
        {!isLeft && <div className="w-full min-w-0">{cardContent}</div>}
      </div>
    </div>
  );
}
