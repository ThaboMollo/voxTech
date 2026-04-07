import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { ArticleHeader } from "@/components/blog/article-header";
import { RelatedArticles } from "@/components/blog/related-articles";
import { FinalCta } from "@/components/home/final-cta";
import { PageShell } from "@/components/layout/page-shell";
import { RichText } from "@/components/shared/rich-text";
import { insights } from "@/lib/constants/site-content";

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  return insights.map((article) => ({ slug: article.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const article = insights.find((item) => item.slug === slug);

  return {
    title: article ? `${article.title} | VoxTech` : "Insights | VoxTech",
    description: article?.excerpt,
  };
}

export default async function InsightDetailPage({ params }: Props) {
  const { slug } = await params;
  const article = insights.find((item) => item.slug === slug);

  if (!article) {
    notFound();
  }

  return (
    <PageShell className="pb-24 pt-16 md:pb-32 md:pt-20">
      <ArticleHeader article={article} />
      <section className="rounded-[2rem] border border-black/5 bg-white/80 px-6 py-10 shadow-soft backdrop-blur md:px-10">
        <RichText paragraphs={article.body} />
      </section>
      <RelatedArticles currentSlug={article.slug} />
      <FinalCta />
    </PageShell>
  );
}
