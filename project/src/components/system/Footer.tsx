
import { Github, Linkedin, Mail } from "lucide-react";
import { siteSettings } from "@/content/site";
import { XIcon } from "@/components/icons/XIcon";

const year = new Date().getFullYear();

export default function Footer() {
  return (
    <footer
      className="border-t py-10 bg-frosted"
      style={{
        backgroundColor: "var(--bg-surface)",
        borderTopColor: "var(--border-default)",
      }}
    >
      <div className="mx-auto max-w-6xl min-w-0 px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
          <p className="text-sm break-words" style={{ color: "var(--text-muted)" }}>
            © {year}{" "}
            <span style={{ color: "var(--text-secondary)" }}>{siteSettings.name}</span>
          </p>
          <div className="flex items-center gap-3">
            {[
              { href: siteSettings.github, icon: Github, label: "GitHub" },
              { href: siteSettings.linkedin, icon: Linkedin, label: "LinkedIn" },
              { href: siteSettings.x, icon: XIcon, label: "X" },
              { href: `mailto:${siteSettings.email}`, icon: Mail, label: "Email" },
            ].map(({ href, icon: Icon, label }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                className="transition-opacity hover:opacity-60"
                style={{ color: "var(--text-muted)" }}
              >
                <Icon size={17} />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
