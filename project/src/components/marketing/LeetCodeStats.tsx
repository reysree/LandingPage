"use client";

import { useEffect, useState } from "react";
import { ExternalLink, Check } from "lucide-react";
import { siteSettings } from "@/content/site";
import { LeetCodeIcon } from "@/components/icons/LeetCodeIcon";
import { Reveal } from "@/components/motion";

const LEETCODE_USERNAME = "reysree";
const LEETCODE_API = "https://leetcode-stats.tashif.codes";

interface LeetCodeData {
  status: string;
  totalSolved: number;
  totalQuestions: number;
  easySolved: number;
  totalEasy: number;
  mediumSolved: number;
  totalMedium: number;
  hardSolved: number;
  totalHard: number;
}

export function LeetCodeStats() {
  const [data, setData] = useState<LeetCodeData | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const loadData = async () => {
      // Try API route first (works on localhost), then external API (works when Vercel serverless is blocked)
      const urls = [
        `/api/leetcode/${LEETCODE_USERNAME}`,
        `${LEETCODE_API}/${LEETCODE_USERNAME}`,
      ];
      for (const url of urls) {
        try {
          const res = await fetch(url);
          const json = await res.json();
          if (json.status === "success") {
            setData(json);
            return;
          }
        } catch {
          continue;
        }
      }
      setError("Failed to load LeetCode data");
    };
    loadData().finally(() => setLoading(false));
  }, []);

  if (loading) {
    return (
      <Reveal>
        <div
          className="rounded-2xl overflow-hidden flex items-center justify-center min-h-[280px]"
          style={{ background: "var(--bg-elevated)" }}
        >
          <div className="animate-pulse text-sm" style={{ color: "var(--text-muted)" }}>
            Loading LeetCode stats…
          </div>
        </div>
      </Reveal>
    );
  }

  if (error || !data) {
    return (
      <Reveal>
        <a
          href={siteSettings.leetcode}
          target="_blank"
          rel="noopener noreferrer"
          className="block rounded-2xl overflow-hidden hover:no-underline min-h-[280px] flex flex-col justify-center"
          style={{ background: "var(--bg-elevated)" }}
        >
          <div className="p-8 text-center">
            <div className="mx-auto mb-3 opacity-60">
              <LeetCodeIcon size={32} />
            </div>
            <p className="text-sm mb-2" style={{ color: "var(--text-secondary)" }}>
              {error ?? "Unable to load stats"}
            </p>
            <p className="text-sm flex items-center justify-center gap-1" style={{ color: "var(--accent-primary)" }}>
              View LeetCode profile <ExternalLink size={14} />
            </p>
          </div>
        </a>
      </Reveal>
    );
  }

  const progress = (data.totalSolved / data.totalQuestions) * 100;

  return (
    <Reveal>
      <a
        href={siteSettings.leetcode}
        target="_blank"
        rel="noopener noreferrer"
        className="block hover:no-underline"
      >
        <div
          className="rounded-2xl overflow-hidden h-full flex flex-col min-h-[280px]"
            style={{ background: "var(--bg-elevated)" }}
        >
          {/* Header */}
          <div className="flex items-center justify-between p-4 sm:p-5 shrink-0" style={{ borderBottom: "1px solid var(--border-subtle)" }}>
            <div className="flex items-center gap-3">
              <div
                className="flex items-center justify-center w-10 h-10 rounded-lg"
                style={{ background: "var(--card-bg)" }}
              >
                <LeetCodeIcon size={22} />
              </div>
              <div>
                <h3 className="font-semibold" style={{ color: "var(--text-primary)" }}>
                  LeetCode Profile
                </h3>
                <p className="text-sm flex items-center gap-1" style={{ color: "var(--accent-primary)" }}>
                  View profile <ExternalLink size={12} />
                </p>
              </div>
            </div>
          </div>

          {/* Total solved + categories */}
          <div className="p-4 sm:p-5 flex-1 flex flex-col sm:flex-row items-center justify-center gap-6">
            {/* Circular progress */}
            <div className="flex flex-col items-center gap-2">
              <div className="relative w-24 h-24 sm:w-28 sm:h-28">
                <svg className="w-full h-full -rotate-90" viewBox="0 0 36 36">
                  <circle
                    cx="18"
                    cy="18"
                    r="15.9"
                    fill="none"
                    stroke="var(--border-default)"
                    strokeWidth="2.5"
                  />
                  <circle
                    cx="18"
                    cy="18"
                    r="15.9"
                    fill="none"
                    stroke="var(--accent-primary)"
                    strokeWidth="2.5"
                    strokeDasharray={`${progress} 100`}
                    strokeLinecap="round"
                    className="transition-all duration-700"
                  />
                </svg>
                <div className="absolute inset-0 flex flex-col items-center justify-center">
                  <Check size={18} className="text-emerald-500 mb-0.5" />
                  <span className="font-mono text-base sm:text-lg font-bold" style={{ color: "var(--text-primary)" }}>
                    {data.totalSolved}
                  </span>
                  <span className="text-[10px]" style={{ color: "var(--text-muted)" }}>
                    /{data.totalQuestions}
                  </span>
                </div>
              </div>
              <p className="text-xs text-center" style={{ color: "var(--text-muted)" }}>
                Solved
              </p>
            </div>

            {/* Difficulty breakdown */}
            <div className="flex flex-col gap-2 w-full sm:w-auto sm:min-w-[140px]">
              <div className="flex items-center justify-between py-1.5 px-3 rounded-lg" style={{ background: "var(--card-bg)" }}>
                <span className="text-sm" style={{ color: "var(--text-secondary)" }}>Easy</span>
                <span className="font-mono text-sm font-medium" style={{ color: "var(--text-primary)" }}>
                  {data.easySolved}/{data.totalEasy}
                </span>
              </div>
              <div className="flex items-center justify-between py-1.5 px-3 rounded-lg" style={{ background: "var(--card-bg)" }}>
                <span className="text-sm" style={{ color: "var(--text-secondary)" }}>Med.</span>
                <span className="font-mono text-sm font-medium" style={{ color: "var(--text-primary)" }}>
                  {data.mediumSolved}/{data.totalMedium}
                </span>
              </div>
              <div className="flex items-center justify-between py-1.5 px-3 rounded-lg" style={{ background: "var(--card-bg)" }}>
                <span className="text-sm" style={{ color: "var(--text-secondary)" }}>Hard</span>
                <span className="font-mono text-sm font-medium" style={{ color: "var(--text-primary)" }}>
                  {data.hardSolved}/{data.totalHard}
                </span>
              </div>
            </div>
          </div>
        </div>
      </a>
    </Reveal>
  );
}
