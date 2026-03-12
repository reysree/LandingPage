"use client";

import dynamic from "next/dynamic";

const GitHubStatsDynamic = dynamic(() => import("./GitHubStats").then((m) => m.GitHubStats), {
  ssr: false,
  loading: () => (
    <div
      className="rounded-2xl overflow-hidden min-h-[280px] flex items-center justify-center"
      style={{ background: "var(--bg-elevated)" }}
    >
      <div className="animate-pulse text-sm" style={{ color: "var(--text-muted)" }}>
        Loading GitHub…
      </div>
    </div>
  ),
});

export function GitHubStatsClient() {
  return <GitHubStatsDynamic />;
}
