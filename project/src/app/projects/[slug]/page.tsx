import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ArrowLeft, Github, ExternalLink } from "lucide-react";
import Link from "next/link";
import { Container } from "@/components/system/Container";
import { Section } from "@/components/system/Section";
import { Reveal } from "@/components/motion";
import { projects } from "@/content/projects";
import { mdxComponents } from "@/lib/content/mdx-components";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);
  if (!project) return {};
  return {
    title: project.title,
    description: project.summary,
  };
}

export default async function ProjectDetailPage({ params }: Props) {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);
  if (!project) notFound();

  // Dynamically import the MDX file
  let MDXContent: React.ComponentType<Record<string, unknown>> | null = null;
  try {
    const mod = await import(`@/content/projects/${slug}.mdx`);
    MDXContent = mod.default;
  } catch {
    // MDX file not found - render project data only
  }

  return (
    <Section className="pt-24 sm:pt-28">
      <Container narrow>
        <Reveal>
          <Link
            href="/projects"
            className="inline-flex items-center gap-1.5 text-sm mb-10 transition-opacity hover:opacity-60"
            style={{ color: "var(--text-muted)" }}
          >
            <ArrowLeft size={14} /> All projects
          </Link>

          {/* Header */}
          <div className="mb-10">
            <div className="flex flex-wrap gap-1.5 mb-4">
              {project.tags.map((tag) => (
                <span key={tag} className="tag">{tag}</span>
              ))}
            </div>
            <h1 className="section-title mb-3">{project.title}</h1>
            <p className="text-lg leading-relaxed mb-6" style={{ color: "var(--text-secondary)" }}>
              {project.description}
            </p>

            {/* Stack */}
            <div className="flex flex-wrap gap-2 mb-6">
              {project.stack.map((tech) => (
                <span
                  key={tech}
                  className="font-mono text-xs px-2.5 py-1 rounded border"
                  style={{ color: "var(--text-muted)", borderColor: "var(--border-default)", background: "var(--bg-elevated)" }}
                >
                  {tech}
                </span>
              ))}
            </div>

            {/* Links */}
            <div className="flex flex-wrap gap-2 sm:gap-3">
              {project.link && (
                <a href={project.link} target="_blank" rel="noopener noreferrer" className="btn-ghost text-sm">
                  <Github size={15} /> GitHub
                </a>
              )}
              {project.liveUrl && (
                <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="btn-primary text-sm">
                  <ExternalLink size={15} /> Live demo
                </a>
              )}
            </div>
          </div>

          <hr style={{ borderColor: "var(--border-default)" }} />
        </Reveal>

        {/* MDX content or fallback */}
        <Reveal delay={0.1}>
          <div
            className="mt-10 prose prose-neutral max-w-none overflow-x-hidden [&_img]:max-w-full [&_pre]:max-w-full"
            style={{ color: "var(--text-secondary)" }}
          >
            {MDXContent ? (
              <MDXContent components={mdxComponents} />
            ) : (
              <p style={{ color: "var(--text-muted)" }}>
                Detailed case study coming soon.
              </p>
            )}
          </div>
        </Reveal>
      </Container>
    </Section>
  );
}
