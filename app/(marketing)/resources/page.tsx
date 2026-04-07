import type { Metadata } from "next";

import { PageShell } from "@/components/layout/page-shell";
import { ResourceGrid } from "@/components/resources/resource-grid";
import { SectionHeading } from "@/components/shared/section-heading";

export const metadata: Metadata = {
  title: "Resources | VoxTech",
  description:
    "Download VoxTech capability materials, planning guides, and practical assets for software delivery and digital growth.",
};

export default function ResourcesPage() {
  return (
    <PageShell className="pb-24 pt-16 md:pb-32 md:pt-20">
      <section className="rounded-[2rem] border border-black/5 bg-white/75 px-6 py-12 shadow-soft backdrop-blur md:px-10">
        <SectionHeading
          eyebrow="Resources"
          title="Useful assets for teams planning their next system, product, or workflow shift."
          description="This layer will become VoxTech's resource and lead-magnet engine. The current build includes the initial structure and preview content."
        />
      </section>
      <ResourceGrid />
    </PageShell>
  );
}
