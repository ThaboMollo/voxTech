import { insights } from "@/lib/constants/site-content";

export function CategoryFilter() {
  const categories = Array.from(new Set(insights.map((article) => article.category)));

  return (
    <section className="flex flex-wrap gap-3">
      {categories.map((category) => (
        <span
          key={category}
          className="rounded-full border border-black/10 bg-white/70 px-4 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-slate"
        >
          {category}
        </span>
      ))}
    </section>
  );
}
