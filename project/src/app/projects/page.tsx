import type { Metadata } from "next";
import { Container } from "@/components/system/Container";
import { Section } from "@/components/system/Section";
import { PageHeader } from "@/components/system/PageHeader";
import { ProjectsGrid } from "@/components/marketing/ProjectsGrid";
import { Reveal } from "@/components/motion";
import { projects } from "@/content/projects";

export const metadata: Metadata = {
  title: "Projects",
  description: "A selection of AI-enabled products, systems, and web applications built across startups, universities, and financial institutions.",
};

export default function ProjectsPage() {
  return (
    <Section className="pt-28">
      <Container>
        <Reveal>
          <PageHeader
            eyebrow="Work"
            title="Projects"
            description="A selection of AI-enabled products, systems, and web applications built from architecture to deployment."
          />
        </Reveal>

        <ProjectsGrid projects={projects} />
      </Container>
    </Section>
  );
}
