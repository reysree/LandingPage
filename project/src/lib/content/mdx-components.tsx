import type { MDXComponents } from "mdx/types";

// MDX component overrides for project case study pages
export const mdxComponents: MDXComponents = {
  h1: (props) => (
    <h1 className="section-title mt-10 mb-4" style={{ color: "var(--text-primary)" }} {...props} />
  ),
  h2: (props) => (
    <h2 className="text-xl font-semibold mt-8 mb-3 tracking-tight" style={{ color: "var(--text-primary)" }} {...props} />
  ),
  h3: (props) => (
    <h3 className="text-base font-semibold mt-6 mb-2" style={{ color: "var(--text-primary)" }} {...props} />
  ),
  p: (props) => (
    <p className="leading-relaxed mb-4 text-lg" style={{ color: "var(--text-secondary)" }} {...props} />
  ),
  ul: (props) => (
    <ul className="space-y-2 mb-4 pl-5 list-disc" style={{ color: "var(--text-secondary)" }} {...props} />
  ),
  li: (props) => <li className="text-lg leading-relaxed" {...props} />,
  code: (props) => (
    <code
      className="font-mono text-xs px-1.5 py-0.5 rounded"
      style={{ background: "var(--bg-elevated)", color: "var(--mono-text)" }}
      {...props}
    />
  ),
  pre: (props) => (
    <pre
      className="p-4 rounded-xl overflow-x-auto text-xs mb-4 font-mono max-w-full"
      style={{ background: "var(--bg-elevated)", color: "var(--text-secondary)", border: "1px solid var(--border-default)" }}
      {...props}
    />
  ),
  hr: () => <hr className="my-8" style={{ borderColor: "var(--border-default)" }} />,
  table: (props) => (
    <div className="overflow-x-auto -mx-4 sm:mx-0 my-6">
      <table className="min-w-full border-collapse text-sm" style={{ borderColor: "var(--border-default)" }} {...props} />
    </div>
  ),
  th: (props) => (
    <th
      className="px-4 py-2 text-left font-semibold border-b"
      style={{ color: "var(--text-primary)", borderColor: "var(--border-default)" }}
      {...props}
    />
  ),
  td: (props) => (
    <td
      className="px-4 py-2 border-b"
      style={{ color: "var(--text-secondary)", borderColor: "var(--border-default)" }}
      {...props}
    />
  ),
  strong: (props) => (
    <strong className="font-semibold" style={{ color: "var(--text-primary)" }} {...props} />
  ),
};
