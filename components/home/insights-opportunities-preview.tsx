import { insights, opportunities } from "@/lib/constants/site-content";

import { BlogCard } from "@/components/blog/blog-card";
import { OpportunityCard } from "@/components/opportunities/opportunity-card";
import { SectionHeading } from "@/components/shared/section-heading";

export function InsightsOpportunitiesPreview() {
  return (
    <section className="grid gap-8 md:grid-cols-2">
      <div className="space-y-6">
        <SectionHeading
          eyebrow="Insights"
          title="Authority built through useful thinking."
          description="Editorial content that helps visitors understand how VoxTech approaches software and systems work."
        />
        <div className="grid gap-4">
          {insights.slice(0, 2).map((article) => (
            <BlogCard key={article.slug} article={article} />
          ))}
        </div>
      </div>
      <div className="space-y-6">
        <SectionHeading
          eyebrow="Opportunities"
          title="A visible participant in collaboration and innovation."
          description="A route for partnerships, events, and ecosystem activity that keeps the brand dynamic."
        />
        <div className="grid gap-4">
          {opportunities.map((item) => (
            <OpportunityCard key={item.slug} opportunity={item} />
          ))}
        </div>
      </div>
    </section>
  );
}
