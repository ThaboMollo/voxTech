import type { Metadata } from "next";

import { ServiceCtaBanner } from "@/components/services/service-cta-banner";
import { ServiceGrid } from "@/components/services/service-grid";
import { PageShell } from "@/components/layout/page-shell";
import { SectionHeading } from "@/components/shared/section-heading";

export const metadata: Metadata = {
  title: "What We Do | VoxTech",
  description:
    "Explore VoxTech services across SaaS development, business systems, consulting, product discovery, and modernization.",
};

export default function WhatWeDoPage() {
  return (
    <PageShell className="pb-24 pt-16 md:pb-32 md:pt-20">
      <section className="rounded-[2rem] border border-black/5 bg-white/75 px-6 py-12 shadow-soft backdrop-blur md:px-10">
        <SectionHeading
          eyebrow="What We Do"
          title="Digital systems built to remove drag and create momentum."
          description="VoxTech turns operational friction, product ideas, and fragmented workflows into well-shaped software that businesses can actually run on."
        />
      </section>
      <ServiceGrid />
      <ServiceCtaBanner />
    </PageShell>
  );
}
