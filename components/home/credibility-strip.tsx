import { credibilityStats } from "@/lib/constants/site-content";

export function CredibilityStrip() {
  return (
    <section className="grid gap-3 rounded-[2rem] border border-black/5 bg-white/60 p-4 shadow-soft backdrop-blur md:grid-cols-4">
      {credibilityStats.map((item) => (
        <div key={item} className="rounded-[1.4rem] bg-sand/80 px-4 py-5 text-center text-sm font-semibold text-ink">
          {item}
        </div>
      ))}
    </section>
  );
}
