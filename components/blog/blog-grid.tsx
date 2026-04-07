import { insights } from "@/lib/constants/site-content";

import { BlogCard } from "@/components/blog/blog-card";

export function BlogGrid() {
  return (
    <section className="grid gap-6 md:grid-cols-3">
      {insights.map((article) => (
        <BlogCard key={article.slug} article={article} />
      ))}
    </section>
  );
}
