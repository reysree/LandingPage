"use client";

import { Reveal } from "@/components/motion";

export function ExperienceBox() {
  return (
    <Reveal>
      <div
        className="rounded-2xl overflow-hidden h-full flex flex-col justify-center min-h-[280px]"
        style={{ background: "var(--bg-elevated)" }}
      >
        <div className="p-6 sm:p-8 text-center">
          <p className="text-xl sm:text-2xl font-semibold leading-snug" style={{ color: "var(--text-primary)" }}>
            5+ years of professional software development experience
          </p>
        </div>
      </div>
    </Reveal>
  );
}
