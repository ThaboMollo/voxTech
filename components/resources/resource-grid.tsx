import { resources } from "@/lib/constants/site-content";

import { ResourceCard } from "@/components/resources/resource-card";

export function ResourceGrid() {
  return (
    <section className="grid gap-6 md:grid-cols-2">
      {resources.map((resource) => (
        <ResourceCard key={resource.slug} resource={resource} />
      ))}
    </section>
  );
}
