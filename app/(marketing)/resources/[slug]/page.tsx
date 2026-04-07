import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { FinalCta } from "@/components/home/final-cta";
import { PageShell } from "@/components/layout/page-shell";
import { ResourceAccessPanel } from "@/components/resources/resource-access-panel";
import { SectionHeading } from "@/components/shared/section-heading";
import { resources } from "@/lib/constants/site-content";

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  return resources.map((item) => ({ slug: item.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const resource = resources.find((item) => item.slug === slug);

  return {
    title: resource ? `${resource.title} | VoxTech` : "Resources | VoxTech",
    description: resource?.description,
  };
}

export default async function ResourceDetailPage({ params }: Props) {
  const { slug } = await params;
  const resource = resources.find((item) => item.slug === slug);

  if (!resource) {
    notFound();
  }

  return (
    <PageShell className="pb-24 pt-16 md:pb-32 md:pt-20">
      <section className="rounded-[2rem] border border-black/5 bg-white/75 px-6 py-12 shadow-soft backdrop-blur md:px-10">
        <SectionHeading
          eyebrow="Resource"
          title={resource.title}
          description={resource.description}
        />
      </section>
      <ResourceAccessPanel resource={resource} />
      <FinalCta />
    </PageShell>
  );
}
