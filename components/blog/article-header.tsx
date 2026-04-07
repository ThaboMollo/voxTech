import type { Insight } from "@/types/site";

import { Card } from "@/components/shared/card";

export function ArticleHeader({
  article,
}: Readonly<{
  article: Insight;
}>) {
  return (
    <Card className="space-y-4 p-8 md:p-10">
      <div className="flex flex-wrap gap-3 text-xs font-semibold uppercase tracking-[0.18em] text-ember">
        <span>{article.category}</span>
        <span>{article.readTime}</span>
      </div>
      <h1 className="max-w-4xl text-4xl text-ink md:text-6xl">{article.title}</h1>
      <p className="max-w-2xl text-base leading-8">{article.excerpt}</p>
    </Card>
  );
}
