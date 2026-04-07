import type { Metadata } from "next";

import { ContactForm } from "@/components/forms/contact-form";
import { PageShell } from "@/components/layout/page-shell";
import { Card } from "@/components/shared/card";
import { SectionHeading } from "@/components/shared/section-heading";
import { siteContact } from "@/lib/constants/site-content";

export const metadata: Metadata = {
  title: "Contact | VoxTech",
  description:
    "Contact VoxTech about software builds, business systems, digital workflows, and technical consulting.",
};

export default function ContactPage() {
  return (
    <PageShell className="grid gap-8 pb-24 pt-16 md:grid-cols-[0.95fr_1.05fr] md:pb-32 md:pt-20">
      <Card className="space-y-6 p-8">
        <SectionHeading
          eyebrow="Contact"
          title="Tell us what needs to move."
          description="If you're dealing with operational drag, a product idea that needs structure, or systems that no longer fit the business, this is where the conversation starts."
        />
        <div className="space-y-4 text-sm text-slate">
          <div>
            <p className="font-semibold uppercase tracking-[0.24em] text-ink">Email</p>
            <p>{siteContact.email}</p>
          </div>
          <div>
            <p className="font-semibold uppercase tracking-[0.24em] text-ink">Location</p>
            <p>{siteContact.location}</p>
          </div>
          <div>
            <p className="font-semibold uppercase tracking-[0.24em] text-ink">Response rhythm</p>
            <p>{siteContact.responseTime}</p>
          </div>
        </div>
      </Card>
      <ContactForm />
    </PageShell>
  );
}
