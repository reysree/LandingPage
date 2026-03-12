import type { Metadata } from "next";
import Image from "next/image";
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
    items: ["Java", "Python", "TypeScript", "JavaScript", "SQL", "Scala"],
  },
  {
    category: "Frontend",
    items: ["Next.js", "React.js", "Angular", "Tailwind CSS", "shadcn"],
  },
  {
    category: "Backend",
    items: ["Spring Boot", "Node.js", "Django", "REST APIs", "Spring Security", "Web Sockets", "Edge Functions"],
  },
  {
    category: "AI & ML",
    items: ["OpenAI", "LangChain", "LLMs", "RAG", "Gemini", "MCP"],
  },
  {
    category: "Cloud & DevOps",
    items: ["AWS", "GCP", "Docker", "Kubernetes", "CI/CD", "GitHub Actions", "Vercel"],
  },
  {
    category: "Databases",
    items: ["MySQL", "PostgreSQL", "MongoDB", "Redis", "Firebase", "Supabase"],
  },
];

export default function AboutPage() {
  return (
    <>
      <Section className="pt-28 pb-20">
        <Container>
          <div className="grid lg:grid-cols-[1fr_auto] gap-12 lg:gap-16 items-center">
            <div className="min-w-0">
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
                className="relative w-64 h-80 sm:w-72 sm:h-96 lg:w-[360px] lg:h-[450px] rounded-2xl overflow-hidden shrink-0"
                style={{ border: "1px solid var(--border-default)" }}
              >
                <Image
                  src="/IMG_5943.jpg"
                  alt="Sreeram Bangaru"
                  fill
                  className="object-cover rounded-2xl"
                  sizes="(max-width: 1024px) 288px, 360px"
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
            <div className="text-center">
              <p className="eyebrow mb-2">Capabilities</p>
              <h2 className="section-title mb-10">Technical skills</h2>
            </div>
          </Reveal>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:items-stretch sm:grid-rows-3 lg:grid-rows-2 sm:min-h-[540px] lg:min-h-[440px]">
            {skills.map((group, i) => (
              <Reveal key={group.category} delay={i * 0.06} className="h-full min-h-0">
                <div className="card h-full flex flex-col min-h-0">
                  <p className="eyebrow mb-4 shrink-0">{group.category}</p>
                  <div className="flex flex-wrap gap-1.5 flex-1 content-start">
                    {group.items.map((skill) => (
                      <span key={skill} className="tag">
                        {skill}
                      </span>
                    ))}
                  </div>
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
            <div className="text-center">
              <p className="eyebrow mb-2">Credentials</p>
              <h2 className="section-title mb-10">Certifications</h2>
            </div>
          </Reveal>
          <div className="grid sm:grid-cols-3 gap-6 sm:items-stretch">
            {certifications.map((cert, i) => (
              <Reveal key={cert.title} delay={i * 0.07} className="h-full min-h-0">
                <a
                  href={cert.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="card h-full flex flex-col items-center gap-4 hover:no-underline min-h-[220px] text-center"
                >
                  <div
                    className="relative w-28 h-28 rounded-lg overflow-hidden shrink-0 flex items-center justify-center"
                    style={{ background: "var(--bg-elevated)" }}
                  >
                    <Image
                      src={cert.image}
                      alt={cert.title}
                      fill
                      className="object-contain p-2"
                      sizes="112px"
                    />
                  </div>
                  <div className="flex flex-col flex-1 min-h-0 w-full items-center text-center">
                    <p className="eyebrow mb-1">{cert.issuer}</p>
                    <p className="text-base font-medium flex-1" style={{ color: "var(--text-primary)" }}>
                      {cert.title}
                    </p>
                    <p
                      className="text-sm mt-1 flex items-center gap-1 shrink-0"
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
            <div className="text-center">
              <p className="eyebrow mb-2">Academic background</p>
              <h2 className="section-title mb-10">Education</h2>
            </div>
          </Reveal>
          <div className="space-y-6">
            <Reveal delay={0.05}>
              <div className="card">
                <p className="eyebrow mb-2">Aug 2023 – Dec 2024</p>
                <h3 className="text-xl font-semibold tracking-tight mb-1" style={{ color: "var(--text-primary)" }}>
                  M.S. Computer Science
                </h3>
                <p className="text-base font-medium mb-3" style={{ color: "var(--accent-primary)" }}>
                  George Mason University, Fairfax, VA, USA
                </p>
                <p className="text-base" style={{ color: "var(--text-secondary)" }}>
                  Focus: Software Engineering, AI systems, Distributed Computing
                </p>
              </div>
            </Reveal>
            <Reveal delay={0.08}>
              <div className="card">
                <p className="eyebrow mb-2">June 2016 – Aug 2020</p>
                <h3 className="text-xl font-semibold tracking-tight mb-1" style={{ color: "var(--text-primary)" }}>
                  B.Tech in Computer Science and Engineering
                </h3>
                <p className="text-base font-medium mb-3" style={{ color: "var(--accent-primary)" }}>
                  JNTUH, Hyderabad, Telangana, India
                </p>
                <p className="text-base" style={{ color: "var(--text-secondary)" }}>
                  Focus: Programming languages, Mathematics, Machine Learning
                </p>
              </div>
            </Reveal>
          </div>
        </Container>
      </Section>

      {/* Experience */}
      <Section>
        <Container>
          <Reveal>
            <div className="text-center mb-10">
              <p className="eyebrow mb-2">Career</p>
              <h2 className="section-title">Experience</h2>
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
