import Link from "next/link";

import type { Resource } from "@/types/site";

import { Card } from "@/components/shared/card";

export function ResourceCard({
  resource,
}: Readonly<{
  resource: Resource;
}>) {
  return (
    <Link href={`/resources/${resource.slug}`}>
      <Card className="h-full space-y-4 p-6 transition hover:-translate-y-1">
        <p className="text-xs font-semibold uppercase tracking-[0.18em] text-ember">{resource.mode}</p>
        <h3 className="text-2xl text-ink">{resource.title}</h3>
        <p className="text-sm leading-7">{resource.description}</p>
      </Card>
    </Link>
  );
}
