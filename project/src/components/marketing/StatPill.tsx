interface StatPillProps {
  value: string;
  label: string;
}

export function StatPill({ value, label }: StatPillProps) {
  return (
    <div
      className="flex flex-col items-center gap-1 px-3 py-2.5 sm:px-5 sm:py-3 rounded-xl border min-w-0 max-w-[140px] sm:max-w-none shrink-0"
      style={{ background: "var(--bg-elevated)", borderColor: "var(--border-default)" }}
    >
      <span
        className="font-mono text-2xl sm:text-3xl font-bold tracking-tight"
        style={{ color: "var(--accent-primary)" }}
      >
        {value}
      </span>
      <span className="text-xs sm:text-sm text-center leading-tight break-words" style={{ color: "var(--text-muted)", whiteSpace: "pre-line" }}>
        {label}
      </span>
    </div>
  );
}
