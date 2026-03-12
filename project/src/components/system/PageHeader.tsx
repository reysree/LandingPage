import { cn } from "@/lib/utils";

interface PageHeaderProps {
  eyebrow?: string;
  title: string;
  description?: string;
  className?: string;
}

/** Top-of-page header with eyebrow, large title, and optional description. */
export function PageHeader({ eyebrow, title, description, className }: PageHeaderProps) {
  return (
    <div className={cn("mb-14 lg:mb-20", className)}>
      {eyebrow && <p className="eyebrow mb-4">{eyebrow}</p>}
      <h1 className="section-title mb-4">{title}</h1>
      {description && (
        <p
          className="text-lg leading-relaxed max-w-2xl"
          style={{ color: "var(--text-secondary)" }}
        >
          {description}
        </p>
      )}
    </div>
  );
}
