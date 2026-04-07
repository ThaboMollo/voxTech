import type { Metadata } from "next";

import { OpportunityGrid } from "@/components/opportunities/opportunity-grid";
import { OpportunitiesFilterBar } from "@/components/opportunities/opportunities-filter-bar";
import { PageShell } from "@/components/layout/page-shell";
import { SectionHeading } from "@/components/shared/section-heading";

export const metadata: Metadata = {
  title: "Opportunities | VoxTech",
  description:
    "Explore VoxTech opportunities, innovation events, collaboration calls, and ecosystem activity.",
};

export default function OpportunitiesPage() {
  return (
    <PageShell className="pb-24 pt-16 md:pb-32 md:pt-20">
      <section className="rounded-[2rem] border border-black/5 bg-pine px-6 py-12 text-white shadow-soft md:px-10">
        <SectionHeading
          eyebrow="Opportunities"
          title="Where VoxTech shows up in innovation, collaboration, and build culture."
          description="Upcoming opportunities for partnerships, hackathons, ecosystems, and conversations that move technical work forward."
          invert
        />
      </section>
      <OpportunitiesFilterBar />
      <OpportunityGrid />
    </PageShell>
  );
}
