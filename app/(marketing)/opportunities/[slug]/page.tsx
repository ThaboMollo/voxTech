import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { FinalCta } from "@/components/home/final-cta";
import { PageShell } from "@/components/layout/page-shell";
import { OpportunityHeader } from "@/components/opportunities/opportunity-header";
import { Card } from "@/components/shared/card";
import { opportunities } from "@/lib/constants/site-content";

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  return opportunities.map((item) => ({ slug: item.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const opportunity = opportunities.find((item) => item.slug === slug);

  return {
    title: opportunity ? `${opportunity.title} | VoxTech` : "Opportunities | VoxTech",
    description: opportunity?.summary,
  };
}

export default async function OpportunityDetailPage({ params }: Props) {
  const { slug } = await params;
  const opportunity = opportunities.find((item) => item.slug === slug);

  if (!opportunity) {
    notFound();
  }

  return (
    <PageShell className="pb-24 pt-16 md:pb-32 md:pt-20">
      <OpportunityHeader opportunity={opportunity} />
      <Card className="space-y-4 p-8">
        <p className="text-base leading-8">{opportunity.summary}</p>
        <p className="text-base leading-8">
          This page is ready for richer event detail, registration logic, and related
          opportunities once the CMS layer is wired in.
        </p>
      </Card>
      <FinalCta />
    </PageShell>
  );
}
