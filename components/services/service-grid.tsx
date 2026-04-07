import { services } from "@/lib/constants/site-content";

import { ServiceDetailCard } from "@/components/services/service-detail-card";

export function ServiceGrid() {
  return (
    <section className="grid gap-6 md:grid-cols-2">
      {services.map((service) => (
        <ServiceDetailCard key={service.slug} service={service} />
      ))}
    </section>
  );
}
