"use client";

import { FadeIn } from "@/components/motion";

/**
 * Hero background: subtle gradient mesh that complements the page's animated gradient theme.
 * Replaces the previous Spline 3D cube scene for a cleaner, theme-aligned look.
 */
export function HeroSplineBackground() {
  return (
    <div className="absolute inset-0 w-full h-full -z-10 pointer-events-none overflow-hidden">
      <FadeIn delay={0.5} className="w-full h-full">
        {/* Light: soft gradient orbs */}
        <div
          className="absolute inset-0 opacity-50 dark:opacity-0"
          style={{
            background: `
              radial-gradient(ellipse 80% 50% at 20% 40%, rgba(240, 238, 248, 0.9) 0%, transparent 50%),
              radial-gradient(ellipse 60% 80% at 80% 20%, rgba(232, 244, 240, 0.7) 0%, transparent 50%),
              radial-gradient(ellipse 50% 50% at 70% 70%, rgba(245, 235, 232, 0.6) 0%, transparent 50%)
            `,
            maskImage: "linear-gradient(to bottom, rgba(0,0,0,0.6), transparent 70%)",
            WebkitMaskImage: "linear-gradient(to bottom, rgba(0,0,0,0.6), transparent 70%)",
          }}
        />
        {/* Dark: subtle depth orbs */}
        <div
          className="absolute inset-0 opacity-0 dark:opacity-40"
          style={{
            background: `
              radial-gradient(ellipse 70% 60% at 15% 30%, rgba(28, 32, 50, 0.8) 0%, transparent 50%),
              radial-gradient(ellipse 50% 70% at 85% 60%, rgba(26, 30, 45, 0.6) 0%, transparent 50%)
            `,
            maskImage: "linear-gradient(to bottom, rgba(0,0,0,0.5), transparent 75%)",
            WebkitMaskImage: "linear-gradient(to bottom, rgba(0,0,0,0.5), transparent 75%)",
          }}
        />
      </FadeIn>
    </div>
  );
}
