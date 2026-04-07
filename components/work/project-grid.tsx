import { projects } from "@/lib/constants/site-content";

import { ProjectCard } from "@/components/work/project-card";

export function ProjectGrid() {
  return (
    <section className="grid gap-6 md:grid-cols-3">
      {projects.map((project) => (
        <ProjectCard key={project.slug} project={project} />
      ))}
    </section>
  );
}
