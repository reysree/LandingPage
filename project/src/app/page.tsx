import Link from "next/link";
import { ArrowRight, Download } from "lucide-react";
import { Container } from "@/components/system/Container";
import { Section } from "@/components/system/Section";
import { FadeIn, Reveal } from "@/components/motion";
import { ProjectCard } from "@/components/marketing/ProjectCard";
import { TimelineItem } from "@/components/marketing/TimelineItem";
import { StatPill } from "@/components/marketing/StatPill";
import { HeroImage } from "@/components/marketing/HeroImage";
import { projects } from "@/content/projects";
import { experiences } from "@/content/experience";
import { siteSettings } from "@/content/site";

const featuredProjects = projects.filter((p) => p.featured).slice(0, 3);

const stats = [
  { value: "5+", label: "Years of\nprofessional experience" },
  { value: "10M+", label: "Transactions\nprocessed annually" },
  { value: "200+", label: "Students served\nvia AI apps" },
  { value: "AWS", label: "Certified\nDeveloper" },
  { value: "Java", label: "Oracle\nCertified" },
];

const philosophy = [
  {
    label: "Systems first",
    text: "I design for scale before I write the first line. Architecture decisions made early save months later.",
  },
  {
    label: "AI as leverage",
    text: "I integrate LLMs and AI tooling where they create genuine value, not as a buzzword, but as a force multiplier.",
  },
  {
    label: "Ship with craft",
    text: "Production-grade means tested, observable, and maintainable, not just working in a demo environment.",
  },
  {
    label: "Full-stack ownership",
    text: "From database schema to UI motion, I own the entire delivery surface and think across the stack.",
  },
];

import { HeroSplineBackground } from "@/components/marketing/HeroSplineBackground";

export default function HomePage() {
  return (
    <>
      {/* ── Hero ── */}
      <Section className="relative min-h-screen flex items-center pt-24 pb-16 overflow-hidden">
        <HeroSplineBackground />
        <Container>
          <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
            {/* Left: text */}
            <div>
              <FadeIn delay={0.05}>
                <p className="eyebrow mb-5">Founding Software Engineer</p>
              </FadeIn>
              <FadeIn delay={0.1}>
                <h1 className="display-title mb-6">{siteSettings.name}</h1>
              </FadeIn>
              <FadeIn delay={0.18}>
                <p className="text-xl leading-relaxed mb-8 max-w-lg" style={{ color: "var(--text-secondary)" }}>
                  {siteSettings.tagline}
                </p>
              </FadeIn>
              <FadeIn delay={0.24}>
                <div className="flex flex-wrap items-center gap-3">
                  <Link href="/projects" className="btn-primary">
                    View my work <ArrowRight size={16} />
                  </Link>
                  <a
                    href={siteSettings.resumePdf}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-ghost"
                  >
                    <Download size={15} />
                    Résumé
                  </a>
                </div>
              </FadeIn>
            </div>

            {/* Right: profile image with flip */}
            <FadeIn delay={0.15} className="flex justify-center lg:justify-end">
              <HeroImage />
            </FadeIn>
          </div>
        </Container>
      </Section>

      {/* ── Credibility Strip ── */}
      <section className="bg-frosted" style={{ backgroundColor: "var(--bg-surface)", borderTop: "1px solid var(--border-default)", borderBottom: "1px solid var(--border-default)" }}>
        <Container className="py-8">
          <Reveal>
            <div className="flex flex-wrap justify-center gap-3">
              {stats.map((s) => (
                <StatPill key={s.label} value={s.value} label={s.label} />
              ))}
            </div>
          </Reveal>
        </Container>
      </section>

      {/* ── Selected Projects ── */}
      <Section id="projects">
        <Container>
          <Reveal>
            <div className="relative text-center mb-12">
              <p className="eyebrow mb-2">Selected work</p>
              <h2 className="section-title">What I've built</h2>
              <Link
                href="/projects"
                className="hidden sm:inline-flex absolute right-0 top-1/2 -translate-y-1/2 items-center gap-1.5 text-sm font-medium transition-opacity hover:opacity-60"
                style={{ color: "var(--accent-primary)" }}
              >
                All projects <ArrowRight size={14} />
              </Link>
            </div>
          </Reveal>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:items-stretch">
            {featuredProjects.map((project, i) => (
              <Reveal key={project.slug} delay={i * 0.08} className="h-full min-h-0">
                <ProjectCard project={project} featured={project.featured} />
              </Reveal>
            ))}
          </div>
          <div className="sm:hidden mt-8 text-center">
            <Link href="/projects" className="btn-ghost">
              All projects <ArrowRight size={14} />
            </Link>
          </div>
        </Container>
      </Section>

      {/* ── Engineering Philosophy ── */}
      <Section surface id="philosophy">
        <Container>
          <Reveal>
            <div className="text-center">
              <p className="eyebrow mb-2">How I work</p>
              <h2 className="section-title mb-12">Engineering philosophy</h2>
            </div>
          </Reveal>
          <div className="grid sm:grid-cols-2 gap-px" style={{ background: "var(--border-default)", border: "1px solid var(--border-default)", borderRadius: "var(--radius-xl)", overflow: "hidden" }}>
            {philosophy.map((item, i) => (
              <Reveal key={item.label} delay={i * 0.07}>
                <div className="p-10 min-h-[260px] bg-frosted flex flex-col justify-center" style={{ background: "var(--card-bg)" }}>
                  <p className="eyebrow !text-2xl mb-4 whitespace-nowrap">{item.label}</p>
                  <p className="text-base leading-relaxed" style={{ color: "var(--text-secondary)" }}>
                    {item.text}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </Container>
      </Section>

      {/* ── Career Snapshot ── */}
      <Section id="experience">
        <Container>
          <Reveal>
            <div className="text-center">
              <p className="eyebrow mb-2">Career</p>
              <h2 className="section-title mb-12">Experience</h2>
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
              <Reveal key={i} delay={i * 0.06}>
                <TimelineItem experience={exp} index={i} />
              </Reveal>
            ))}
          </div>
        </Container>
      </Section>

      {/* ── Final CTA ── */}
      <Section surface>
        <Container narrow>
          <Reveal>
            <div className="text-center">
              <p className="eyebrow mb-4">Let's talk</p>
              <h2 className="section-title mb-5">Ready to build something?</h2>
              <p className="text-lg mb-8 max-w-md mx-auto" style={{ color: "var(--text-secondary)" }}>
                Open to founding engineer, staff-level, and product-minded roles where I can own architecture and ship fast.
              </p>
              <div className="flex flex-wrap justify-center gap-3">
                <Link href="/contact" className="btn-primary">
                  Get in touch <ArrowRight size={16} />
                </Link>
                <Link href="/about" className="btn-ghost">
                  More about me
                </Link>
              </div>
            </div>
          </Reveal>
        </Container>
      </Section>
    </>
  );
}
