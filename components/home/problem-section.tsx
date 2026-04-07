import { Card } from "@/components/shared/card";
import { SectionHeading } from "@/components/shared/section-heading";

export function ProblemSection() {
  return (
    <section className="grid gap-6 md:grid-cols-[0.7fr_1.3fr]">
      <SectionHeading
        eyebrow="The Problem"
        title="Most growing businesses feel the drag before they know how to name it."
        description="Processes get heavier. Tools stop talking to each other. Product ideas stay in slide form. Teams start carrying operational weight that software should have taken on already."
      />
      <Card className="grid gap-4 p-8 md:grid-cols-2">
        {[
          "Important work lives across disconnected tools and manual workarounds.",
          "A real software opportunity exists, but the scope is still too fuzzy to build cleanly.",
          "Teams need technical guidance before they commit to product or systems spend.",
          "Legacy processes make the business slower than it should be.",
        ].map((item) => (
          <div key={item} className="rounded-[1.5rem] bg-sand/70 p-5">
            <p className="text-sm leading-7">{item}</p>
          </div>
        ))}
      </Card>
    </section>
  );
}
