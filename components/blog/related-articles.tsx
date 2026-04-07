import { insights } from "@/lib/constants/site-content";

import { BlogCard } from "@/components/blog/blog-card";
import { SectionHeading } from "@/components/shared/section-heading";

export function RelatedArticles({
  currentSlug,
}: Readonly<{
  currentSlug: string;
}>) {
  const relatedArticles = insights.filter((article) => article.slug !== currentSlug).slice(0, 2);

  return (
    <section className="space-y-8">
      <SectionHeading
        eyebrow="Related Reading"
        title="More VoxTech thinking from the same editorial layer."
        description="This section is ready for category-aware recommendations once content is CMS-driven."
      />
      <div className="grid gap-6 md:grid-cols-2">
        {relatedArticles.map((article) => (
          <BlogCard key={article.slug} article={article} />
        ))}
      </div>
    </section>
  );
}
