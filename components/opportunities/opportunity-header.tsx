import type { Opportunity } from "@/types/site";

import { Card } from "@/components/shared/card";

export function OpportunityHeader({
  opportunity,
}: Readonly<{
  opportunity: Opportunity;
}>) {
  return (
    <Card className="space-y-5 p-8 md:p-10">
      <div className="flex flex-wrap gap-3 text-xs font-semibold uppercase tracking-[0.18em] text-ember">
        <span>{opportunity.type}</span>
        <span>{opportunity.date}</span>
        <span>{opportunity.location}</span>
      </div>
      <h1 className="max-w-4xl text-4xl text-ink md:text-6xl">{opportunity.title}</h1>
    </Card>
  );
}
