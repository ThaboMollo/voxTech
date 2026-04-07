import type { Service } from "@/types/site";

import { Card } from "@/components/shared/card";
import { CtaButton } from "@/components/shared/cta-button";

export function ServiceDetailCard({
  service,
}: Readonly<{
  service: Service;
}>) {
  return (
    <Card className="space-y-5 p-8">
      <div>
        <p className="text-xs font-semibold uppercase tracking-[0.22em] text-ember">Service</p>
        <h3 className="mt-3 text-2xl text-ink">{service.title}</h3>
      </div>
      <p className="text-sm leading-7">{service.summary}</p>
      <div className="space-y-2 text-sm leading-7 text-slate">
        <p>
          <span className="font-semibold text-ink">For:</span> {service.audience}
        </p>
        <p>
          <span className="font-semibold text-ink">Outcome:</span> {service.outcome}
        </p>
      </div>
      <CtaButton href="/book-demo" variant="ghost">
        Discuss this service
      </CtaButton>
    </Card>
  );
}
