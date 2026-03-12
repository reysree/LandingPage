import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ExternalLink } from "lucide-react";
import { Container } from "@/components/system/Container";
import { Section } from "@/components/system/Section";
import { PageHeader } from "@/components/system/PageHeader";
import { Reveal } from "@/components/motion";
import { experiences, certifications } from "@/content/experience";
import { TimelineItem } from "@/components/marketing/TimelineItem";
import { siteSettings } from "@/content/site";

export const metadata: Metadata = {
  title: "About",
  description: "Founding Software Engineer with 5+ years building AI-enabled products and scalable systems across fintech, education, and startups.",
};

const skills = [
  {
    category: "Languages",
    items: ["Java", "Python", "TypeScript / JavaScript", "SQL", "Scala"],
  },
  {
    category: "Frontend",
    items: ["Next.js", "React.js", "Angular", "Tailwind CSS", "shadcn/ui"],
  },
  {
    category: "Backend",
    items: ["Spring Boot", "Node.js", "Django", "REST APIs", "Spring Security"],
  },
  {
    category: "AI & ML",
    items: ["OpenAI", "LangChain", "LLMs", "RAG", "Gemini AI"],
  },
  {
    category: "Cloud & DevOps",
    items: ["AWS (EC2, S3, EKS, RDS)", "Docker", "Kubernetes", "CI/CD", "GitHub Actions"],
  },
  {
    category: "Databases",
    items: ["MySQL", "PostgreSQL", "MongoDB", "Redis", "Firebase"],
  },
];

export default function AboutPage() {
  return (
    <>
      <Section className="pt-28">
        <Container>
          <div className="grid lg:grid-cols-[1fr_auto] gap-16 items-start">
            <div>
              <Reveal>
                <PageHeader
                  eyebrow="The person behind the code"
                  title="About me"
                />
              </Reveal>
              <Reveal delay={0.05}>
                <div className="space-y-4 text-lg leading-relaxed max-w-2xl" style={{ color: "var(--text-secondary)" }}>
                  <p>
                    I'm Sreeram Bangaru, a Founding Software Engineer who builds AI-enabled products,
                    scalable backend systems, and polished user interfaces. I've shipped production
                    software across fintech, higher education, and AI-native startups.
                  </p>
                  <p>
                    I hold an MS in Computer Science from George Mason University and have built
                    everything from cross-border payment platforms processing 10M+ transactions
                    annually to AI student companion apps serving 200+ users daily.
                  </p>
                  <p>
                    I work across the full stack but think in systems. I care about the architecture
                    decisions that won't show up as bugs for six months, and I ship with craft.
                  </p>
                </div>
              </Reveal>
              <Reveal delay={0.1}>
                <div className="flex flex-wrap gap-3 mt-8">
                  <a href={`mailto:${siteSettings.email}`} className="btn-primary">
                    Get in touch <ArrowRight size={15} />
                  </a>
                  <a href={siteSettings.resumePdf} target="_blank" rel="noopener noreferrer" className="btn-ghost">
                    View résumé <ExternalLink size={14} />
                  </a>
                </div>
              </Reveal>
            </div>

            {/* Profile image */}
            <Reveal delay={0.08} className="hidden lg:block">
              <div
                className="relative w-64 h-80 sm:w-72 sm:h-96 lg:w-[400px] lg:h-[500px] rounded-2xl overflow-hidden"
                style={{ border: "1px solid var(--border-default)" }}
              >
                <Image
                  src="/IMG_5943.jpg"
                  alt="Sreeram Bangaru"
                  fill
                  className="object-cover rounded-2xl"
                  sizes="(max-width: 1024px) 288px, 400px"
                />
              </div>
            </Reveal>
          </div>
        </Container>
      </Section>

      {/* Skills */}
      <Section surface>
        <Container>
          <Reveal>
            <p className="eyebrow mb-2">Capabilities</p>
            <h2 className="section-title mb-10">Technical skills</h2>
          </Reveal>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {skills.map((group, i) => (
              <Reveal key={group.category} delay={i * 0.06}>
                <div className="card">
                  <p className="eyebrow mb-4">{group.category}</p>
                  <ul className="space-y-1.5">
                    {group.items.map((skill) => (
                      <li
                        key={skill}
                        className="text-base"
                        style={{ color: "var(--text-secondary)" }}
                      >
                        {skill}
                      </li>
                    ))}
                  </ul>
                </div>
              </Reveal>
            ))}
          </div>
        </Container>
      </Section>

      {/* Certifications */}
      <Section>
        <Container>
          <Reveal>
            <p className="eyebrow mb-2">Credentials</p>
            <h2 className="section-title mb-10">Certifications</h2>
          </Reveal>
          <div className="grid sm:grid-cols-3 gap-6">
            {certifications.map((cert, i) => (
              <Reveal key={cert.title} delay={i * 0.07}>
                <a
                  href={cert.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="card flex flex-col items-start gap-4 hover:no-underline"
                >
                  <div
                    className="relative w-20 h-20 rounded-lg overflow-hidden"
                    style={{ background: "var(--bg-elevated)" }}
                  >
                    <Image
                      src={cert.image}
                      alt={cert.title}
                      fill
                      className="object-contain p-2"
                      sizes="80px"
                    />
                  </div>
                  <div>
                    <p className="eyebrow mb-1">{cert.issuer}</p>
                    <p className="text-base font-medium" style={{ color: "var(--text-primary)" }}>
                      {cert.title}
                    </p>
                    <p
                      className="text-sm mt-1 flex items-center gap-1"
                      style={{ color: "var(--accent-primary)" }}
                    >
                      View credential <ExternalLink size={11} />
                    </p>
                  </div>
                </a>
              </Reveal>
            ))}
          </div>
        </Container>
      </Section>

      {/* Education */}
      <Section surface>
        <Container narrow>
          <Reveal>
            <p className="eyebrow mb-2">Academic background</p>
            <h2 className="section-title mb-10">Education</h2>
          </Reveal>
          <Reveal delay={0.05}>
            <div className="card">
              <p className="eyebrow mb-2">Aug 2023 – Dec 2024</p>
              <h3 className="text-xl font-semibold tracking-tight mb-1" style={{ color: "var(--text-primary)" }}>
                M.S. Computer Science
              </h3>
              <p className="text-base font-medium mb-3" style={{ color: "var(--accent-primary)" }}>
                George Mason University, Fairfax, VA
              </p>
              <p className="text-base" style={{ color: "var(--text-secondary)" }}>
                Focus: Software Engineering, AI systems, Distributed Computing
              </p>
            </div>
          </Reveal>
        </Container>
      </Section>

      {/* Experience */}
      <Section>
        <Container>
          <Reveal>
            <div className="flex items-end justify-between mb-10">
              <div>
                <p className="eyebrow mb-2">Career</p>
                <h2 className="section-title">Experience</h2>
              </div>
              <Link href="/" className="text-base font-medium" style={{ color: "var(--accent-primary)" }}>
                Full timeline ↑
              </Link>
            </div>
          </Reveal>
          <div className="relative">
            <span
              className="hidden md:block absolute left-1/2 top-0 bottom-0 w-px -translate-x-px"
              style={{
                background:
                  "linear-gradient(to bottom, var(--accent-subtle), var(--border-default), transparent)",
              }}
              aria-hidden="true"
            />
            {experiences.map((exp, i) => (
              <Reveal key={i} delay={i * 0.05}>
                <TimelineItem experience={exp} index={i} />
              </Reveal>
            ))}
          </div>
        </Container>
      </Section>
    </>
  );
}
