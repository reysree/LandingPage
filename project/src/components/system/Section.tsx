import { cn } from "@/lib/utils";

interface SectionProps {
  children: React.ReactNode;
  className?: string;
  id?: string;
  surface?: boolean; // use bg-surface instead of bg-canvas
}

/** Page section with consistent vertical padding and optional surface background. */
export function Section({ children, className, id, surface }: SectionProps) {
  return (
    <section
      id={id}
      className={cn(
        "py-12 sm:py-16 lg:py-28",
        surface ? "bg-[var(--bg-surface)] bg-frosted" : "bg-transparent",
        className
      )}
    >
      {children}
    </section>
  );
}
