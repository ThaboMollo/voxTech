import { ctas } from "@/lib/constants/ctas";

import { Card } from "@/components/shared/card";
import { CtaButton } from "@/components/shared/cta-button";
import { SectionHeading } from "@/components/shared/section-heading";

export function FinalCta() {
  return (
    <Card className="rounded-[2.5rem] bg-ink px-8 py-12 text-white md:px-12">
      <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
        <SectionHeading
          eyebrow="Next Step"
          title="If the business has friction, the technical path should not stay vague."
          description="Book a demo and turn the current problem into a clearer execution plan."
          invert
        />
        <CtaButton href={ctas.primary.href} variant="secondary">
          {ctas.primary.label}
        </CtaButton>
      </div>
    </Card>
  );
}
