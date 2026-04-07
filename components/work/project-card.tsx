import Link from "next/link";

import type { Project } from "@/types/site";

import { Badge } from "@/components/shared/badge";
import { Card } from "@/components/shared/card";

export function ProjectCard({
  project,
}: Readonly<{
  project: Project;
}>) {
  return (
    <Link href={`/work/${project.slug}`}>
      <Card className="h-full space-y-5 p-8 transition hover:-translate-y-1">
        <div className="space-y-3">
          <Badge>{project.descriptor}</Badge>
          <h3 className="text-2xl text-ink">{project.name}</h3>
        </div>
        <p className="text-sm leading-7">{project.challenge}</p>
        <div className="flex flex-wrap gap-2">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="rounded-full border border-black/10 px-3 py-1 text-xs uppercase tracking-[0.14em] text-slate"
            >
              {tag}
            </span>
          ))}
        </div>
      </Card>
    </Link>
  );
}
