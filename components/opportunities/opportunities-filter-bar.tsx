import { opportunities } from "@/lib/constants/site-content";

export function OpportunitiesFilterBar() {
  const filters = Array.from(new Set(opportunities.map((item) => item.type)));

  return (
    <section className="flex flex-wrap gap-3">
      {filters.map((filter) => (
        <span
          key={filter}
          className="rounded-full border border-black/10 bg-white/70 px-4 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-slate"
        >
          {filter}
        </span>
      ))}
    </section>
  );
}
