import { projects } from "@/lib/constants/site-content";

import { ProjectCard } from "@/components/work/project-card";
import { SectionHeading } from "@/components/shared/section-heading";

export function FeaturedWork() {
  return (
    <section className="space-y-8">
      <SectionHeading
        eyebrow="Featured Work"
        title="Proof shaped around real use cases and business context."
        description="A first layer of product and systems work that can later expand into deeper case-study storytelling."
      />
      <div className="grid gap-6 md:grid-cols-3">
        {projects.map((project) => (
          <ProjectCard key={project.slug} project={project} />
        ))}
      </div>
    </section>
  );
}
