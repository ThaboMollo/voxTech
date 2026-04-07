import type { Metadata } from "next";

import { DemoBookingEmbed } from "@/components/forms/demo-booking-embed";
import { PageShell } from "@/components/layout/page-shell";
import { Card } from "@/components/shared/card";
import { SectionHeading } from "@/components/shared/section-heading";
import { faqItems } from "@/lib/constants/site-content";

export const metadata: Metadata = {
  title: "Book a Demo | VoxTech",
  description:
    "Book a VoxTech discovery session to clarify the business problem, technical path, and next implementation steps.",
};

export default function BookDemoPage() {
  return (
    <PageShell className="grid gap-8 pb-24 pt-16 md:grid-cols-[0.9fr_1.1fr] md:pb-32 md:pt-20">
      <Card className="space-y-6 p-8">
        <SectionHeading
          eyebrow="Book a Demo"
          title="A working session, not a vague intro call."
          description="Use this to pressure-test the problem, discuss options, and leave with a clearer implementation direction."
        />
        <ul className="space-y-3 text-sm text-slate">
          {faqItems.slice(0, 3).map((item) => (
            <li key={item.question} className="rounded-2xl bg-sand/70 px-4 py-3">
              <span className="block font-semibold text-ink">{item.question}</span>
              <span>{item.answer}</span>
            </li>
          ))}
        </ul>
      </Card>
      <DemoBookingEmbed />
    </PageShell>
  );
}
