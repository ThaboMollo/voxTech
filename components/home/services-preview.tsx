import { services } from "@/lib/constants/site-content";

import { CtaButton } from "@/components/shared/cta-button";
import { SectionHeading } from "@/components/shared/section-heading";
import { ServiceDetailCard } from "@/components/services/service-detail-card";

export function ServicesPreview() {
  return (
    <section className="space-y-8">
      <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
        <SectionHeading
          eyebrow="Services"
          title="From idea shaping to system delivery."
          description="A focused set of service lines built around practical product and operations work."
        />
        <CtaButton href="/what-we-do" variant="ghost">
          Explore services
        </CtaButton>
      </div>
      <div className="grid gap-6 md:grid-cols-2">
        {services.map((service) => (
          <ServiceDetailCard key={service.slug} service={service} />
        ))}
      </div>
    </section>
  );
}
