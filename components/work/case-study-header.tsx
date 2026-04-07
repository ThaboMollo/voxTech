import type { Project } from "@/types/site";

import { Badge } from "@/components/shared/badge";
import { Card } from "@/components/shared/card";

export function CaseStudyHeader({
  project,
}: Readonly<{
  project: Project;
}>) {
  return (
    <Card className="space-y-6 bg-ink p-8 text-white md:p-12">
      <Badge className="bg-gold/18 text-gold">{project.descriptor}</Badge>
      <div className="space-y-4">
        <h1 className="text-4xl md:text-6xl">{project.name}</h1>
        <p className="max-w-2xl text-base leading-8 text-white/74">{project.solution}</p>
      </div>
    </Card>
  );
}
