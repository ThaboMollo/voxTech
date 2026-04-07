import type { Metadata } from "next";

import { BlogGrid } from "@/components/blog/blog-grid";
import { CategoryFilter } from "@/components/blog/category-filter";
import { PageShell } from "@/components/layout/page-shell";
import { SectionHeading } from "@/components/shared/section-heading";

export const metadata: Metadata = {
  title: "Insights | VoxTech",
  description:
    "Read VoxTech insights on product strategy, software delivery, AI in business, and digital growth for SMEs.",
};

export default function InsightsPage() {
  return (
    <PageShell className="pb-24 pt-16 md:pb-32 md:pt-20">
      <section className="rounded-[2rem] border border-black/5 bg-white/75 px-6 py-12 shadow-soft backdrop-blur md:px-10">
        <SectionHeading
          eyebrow="Insights"
          title="Ideas shaped for operators, founders, and teams under pressure."
          description="A growing editorial layer for product strategy, engineering choices, AI leverage, and practical build lessons."
        />
      </section>
      <CategoryFilter />
      <BlogGrid />
    </PageShell>
  );
}
