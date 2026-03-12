import type { Metadata } from "next";

import { Mail, Github, Linkedin, ArrowRight } from "lucide-react";
import { Container } from "@/components/system/Container";
import { Section } from "@/components/system/Section";
import { PageHeader } from "@/components/system/PageHeader";
import { Reveal } from "@/components/motion";
import { siteSettings } from "@/content/site";

export const metadata: Metadata = {
  title: "Contact",
  description: "Open to founding engineer, staff-level, and product-minded roles. Let's talk.",
};

const links = [
  {
    label: "Email",
    value: siteSettings.email,
    href: `mailto:${siteSettings.email}`,
    icon: Mail,
  },
  {
    label: "GitHub",
    value: "github.com/reysree",
    href: siteSettings.github,
    icon: Github,
  },
  {
    label: "LinkedIn",
    value: "sreerambangaru",
    href: siteSettings.linkedin,
    icon: Linkedin,
  },
];

export default function ContactPage() {
  return (
    <Section className="pt-24 sm:pt-28 min-h-[70vh]">
      <Container narrow>
        <Reveal>
          <PageHeader
            eyebrow="Let's connect"
            title="Get in touch"
            description="Open to founding engineer, staff-level, and product-minded roles. If you're building something ambitious, I want to hear about it."
          />
        </Reveal>

        <div className="space-y-4">
          {links.map(({ label, value, href, icon: Icon }, i) => (
            <Reveal key={label} delay={i * 0.07}>
              <a
                href={href}
                target={href.startsWith("mailto") ? undefined : "_blank"}
                rel="noopener noreferrer"
                className="flex items-center gap-4 sm:gap-5 p-4 sm:p-5 rounded-xl border transition-all group min-w-0"
                style={{
                  background: "var(--card-bg)",
                  borderColor: "var(--card-border)",
                }}
              >
                <span
                  className="flex items-center justify-center w-10 h-10 rounded-lg"
                  style={{ background: "var(--bg-elevated)" }}
                >
                  <Icon size={18} style={{ color: "var(--accent-primary)" }} />
                </span>
                <div className="flex-1 min-w-0">
                  <p className="eyebrow mb-0.5">{label}</p>
                  <p className="text-sm font-medium break-words" style={{ color: "var(--text-primary)" }}>
                    {value}
                  </p>
                </div>
                <ArrowRight
                  size={16}
                  className="transition-transform group-hover:translate-x-1"
                  style={{ color: "var(--text-muted)" }}
                />
              </a>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.25}>
          <div
            className="mt-12 p-6 rounded-xl border"
            style={{ background: "var(--bg-surface)", borderColor: "var(--border-default)" }}
          >
            <p className="eyebrow mb-2">Response time</p>
            <p className="text-sm" style={{ color: "var(--text-secondary)" }}>
              I typically respond within 24 hours. For urgent projects, reach out via email directly.
            </p>
          </div>
        </Reveal>
      </Container>
    </Section>
  );
}
