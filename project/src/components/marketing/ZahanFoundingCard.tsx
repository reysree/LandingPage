"use client";

import { ArrowRight } from "lucide-react";
import { Reveal } from "@/components/motion";

const ZAHAN_URL = "https://zahan.ai";

export function ZahanFoundingCard() {
  return (
    <Reveal>
      <div
        className="rounded-2xl overflow-hidden h-full flex flex-col justify-center min-h-[280px]"
          style={{ background: "var(--bg-elevated)" }}
      >
        <div className="p-6 sm:p-8 flex flex-col items-center justify-center text-center gap-4">
          <p className="text-xl sm:text-2xl font-semibold leading-snug" style={{ color: "var(--text-primary)" }}>
            Founding Engineer of Zahan AI
          </p>
          <a
            href={ZAHAN_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary inline-flex items-center gap-2"
          >
            Visit zahan.ai <ArrowRight size={16} />
          </a>
        </div>
      </div>
    </Reveal>
  );
}
