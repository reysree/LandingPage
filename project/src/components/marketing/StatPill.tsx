interface StatPillProps {
  value: string;
  label: string;
}

export function StatPill({ value, label }: StatPillProps) {
  return (
    <div
      className="flex flex-col items-center gap-1 px-5 py-3 rounded-xl border"
      style={{ background: "var(--bg-elevated)", borderColor: "var(--border-default)" }}
    >
      <span
        className="font-mono text-3xl font-bold tracking-tight"
        style={{ color: "var(--accent-primary)" }}
      >
        {value}
      </span>
      <span className="text-sm text-center leading-tight" style={{ color: "var(--text-muted)", whiteSpace: "pre-line" }}>
        {label}
      </span>
    </div>
  );
}
