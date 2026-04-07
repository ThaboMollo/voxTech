import type { Resource } from "@/types/site";

import { Card } from "@/components/shared/card";
import { CtaButton } from "@/components/shared/cta-button";

export function ResourceAccessPanel({
  resource,
}: Readonly<{
  resource: Resource;
}>) {
  return (
    <Card className="space-y-4 p-8">
      <p className="text-xs font-semibold uppercase tracking-[0.18em] text-ember">{resource.mode}</p>
      <p className="max-w-2xl text-base leading-8">
        This route is ready for either direct file delivery or a gated lead form once the CMS
        and integration layers are connected.
      </p>
      <CtaButton href={resource.mode === "Direct download" ? "/contact" : "/book-demo"}>
        {resource.mode === "Direct download" ? "Request the asset" : "Unlock access"}
      </CtaButton>
    </Card>
  );
}
