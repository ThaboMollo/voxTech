import Link from "next/link";

import type { Insight } from "@/types/site";

import { Card } from "@/components/shared/card";

export function BlogCard({
  article,
}: Readonly<{
  article: Insight;
}>) {
  return (
    <Link href={`/insights/${article.slug}`}>
      <Card className="h-full space-y-4 p-6 transition hover:-translate-y-1">
        <div className="flex items-center justify-between gap-4 text-xs font-semibold uppercase tracking-[0.18em] text-ember">
          <span>{article.category}</span>
          <span>{article.readTime}</span>
        </div>
        <h3 className="text-2xl text-ink">{article.title}</h3>
        <p className="text-sm leading-7">{article.excerpt}</p>
      </Card>
    </Link>
  );
}
