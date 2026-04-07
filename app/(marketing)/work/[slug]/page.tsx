import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { CaseStudyHeader } from "@/components/work/case-study-header";
import { CaseStudySection } from "@/components/work/case-study-section";
import { RelatedProjects } from "@/components/work/related-projects";
import { FinalCta } from "@/components/home/final-cta";
import { PageShell } from "@/components/layout/page-shell";
import { projects } from "@/lib/constants/site-content";

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const project = projects.find((item) => item.slug === slug);

  if (!project) {
    return {
      title: "Work | VoxTech",
    };
  }

  return {
    title: `${project.name} | VoxTech`,
    description: project.solution,
  };
}

export default async function WorkDetailPage({ params }: Props) {
  const { slug } = await params;
  const project = projects.find((item) => item.slug === slug);

  if (!project) {
    notFound();
  }

  return (
    <PageShell className="pb-24 pt-16 md:pb-32 md:pt-20">
      <CaseStudyHeader project={project} />
      <CaseStudySection title="Challenge" body={project.challenge} />
      <CaseStudySection title="Solution" body={project.solution} />
      <CaseStudySection title="Outcome" body={project.outcome} />
      <RelatedProjects currentSlug={project.slug} />
      <FinalCta />
    </PageShell>
  );
}
