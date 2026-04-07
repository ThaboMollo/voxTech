import Link from "next/link";

import type { Opportunity } from "@/types/site";

import { Card } from "@/components/shared/card";

export function OpportunityCard({
  opportunity,
}: Readonly<{
  opportunity: Opportunity;
}>) {
  return (
    <Link href={`/opportunities/${opportunity.slug}`}>
      <Card className="h-full space-y-4 p-6 transition hover:-translate-y-1">
        <div className="flex items-center justify-between gap-4 text-xs font-semibold uppercase tracking-[0.18em] text-ember">
          <span>{opportunity.type}</span>
          <span>{opportunity.date}</span>
        </div>
        <h3 className="text-2xl text-ink">{opportunity.title}</h3>
        <p className="text-sm leading-7">{opportunity.summary}</p>
        <p className="text-xs uppercase tracking-[0.18em] text-slate">{opportunity.location}</p>
      </Card>
    </Link>
  );
}
