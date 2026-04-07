import { projects } from "@/lib/constants/site-content";

import { ProjectCard } from "@/components/work/project-card";
import { SectionHeading } from "@/components/shared/section-heading";

export function RelatedProjects({
  currentSlug,
}: Readonly<{
  currentSlug: string;
}>) {
  const relatedProjects = projects.filter((project) => project.slug !== currentSlug).slice(0, 2);

  return (
    <section className="space-y-8">
      <SectionHeading
        eyebrow="Related Work"
        title="More delivery examples in the VoxTech pipeline."
        description="This block is ready to evolve into richer CMS-driven related project logic."
      />
      <div className="grid gap-6 md:grid-cols-2">
        {relatedProjects.map((project) => (
          <ProjectCard key={project.slug} project={project} />
        ))}
      </div>
    </section>
  );
}
