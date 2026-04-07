import { solutionPillars } from "@/lib/constants/site-content";

import { Card } from "@/components/shared/card";
import { SectionHeading } from "@/components/shared/section-heading";

export function SolutionPillars() {
  return (
    <section className="space-y-8">
      <SectionHeading
        eyebrow="Solution Pillars"
        title="The shape of VoxTech's delivery model."
        description="The business case, the workflow reality, and the implementation path should reinforce each other."
      />
      <div className="grid gap-6 md:grid-cols-3">
        {solutionPillars.map((pillar) => (
          <Card key={pillar.title} className="p-8">
            <h3 className="text-2xl text-ink">{pillar.title}</h3>
            <p className="mt-4 text-sm leading-7">{pillar.description}</p>
          </Card>
        ))}
      </div>
    </section>
  );
}
