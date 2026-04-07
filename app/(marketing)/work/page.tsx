import type { Metadata } from "next";

import { PageShell } from "@/components/layout/page-shell";
import { SectionHeading } from "@/components/shared/section-heading";
import { ProjectGrid } from "@/components/work/project-grid";

export const metadata: Metadata = {
  title: "Work | VoxTech",
  description:
    "See how VoxTech translates business needs into real software products, systems, and measurable delivery outcomes.",
};

export default function WorkPage() {
  return (
    <PageShell className="pb-24 pt-16 md:pb-32 md:pt-20">
      <section className="rounded-[2rem] border border-black/5 bg-ink px-6 py-12 text-white shadow-soft md:px-10">
        <SectionHeading
          eyebrow="Work"
          title="Execution proof for businesses that need delivery, not theatre."
          description="A focused set of products and systems that show how VoxTech approaches product thinking, workflows, and launch-ready software."
          invert
        />
      </section>
      <ProjectGrid />
    </PageShell>
  );
}
