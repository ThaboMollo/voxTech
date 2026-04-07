import { Card } from "@/components/shared/card";
import { SectionHeading } from "@/components/shared/section-heading";

export function WhyVoxTech() {
  return (
    <section className="grid gap-6 md:grid-cols-[0.9fr_1.1fr]">
      <Card className="bg-pine p-8 text-white">
        <SectionHeading
          eyebrow="Why VoxTech"
          title="The work is commercial before it is cosmetic."
          description="VoxTech is positioned around business fit, technical clarity, and implementation discipline."
          invert
        />
      </Card>
      <Card className="grid gap-4 p-8 md:grid-cols-3">
        {[
          "Premium positioning without bloated UX.",
          "Architecture shaped for CMS, SEO, and lead capture growth.",
          "A build approach designed to expand into analytics and CRM later.",
        ].map((item) => (
          <div key={item} className="rounded-[1.5rem] bg-sand/70 p-5">
            <p className="text-sm leading-7">{item}</p>
          </div>
        ))}
      </Card>
    </section>
  );
}
