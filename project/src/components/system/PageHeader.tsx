import { cn } from "@/lib/utils";

interface PageHeaderProps {
  eyebrow?: string;
  title: string;
  description?: string;
  className?: string;
  center?: boolean;
}

/** Top-of-page header with eyebrow, large title, and optional description. */
export function PageHeader({ eyebrow, title, description, className, center }: PageHeaderProps) {
  return (
    <div className={cn("mb-14 lg:mb-20", center && "text-center", className)}>
      {eyebrow && <p className="eyebrow mb-4">{eyebrow}</p>}
      <h1 className="section-title mb-4">{title}</h1>
      {description && (
        <p
          className={cn("text-lg leading-relaxed max-w-2xl", center && "mx-auto")}
          style={{ color: "var(--text-secondary)" }}
        >
          {description}
        </p>
      )}
    </div>
  );
}
