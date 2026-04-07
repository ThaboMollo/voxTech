import { opportunities } from "@/lib/constants/site-content";

import { OpportunityCard } from "@/components/opportunities/opportunity-card";

export function OpportunityGrid() {
  return (
    <section className="grid gap-6 md:grid-cols-2">
      {opportunities.map((opportunity) => (
        <OpportunityCard key={opportunity.slug} opportunity={opportunity} />
      ))}
    </section>
  );
}
