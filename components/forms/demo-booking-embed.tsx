import { Card } from "@/components/shared/card";
import { CtaButton } from "@/components/shared/cta-button";

export function DemoBookingEmbed() {
  return (
    <Card className="space-y-5 p-8">
      <h2 className="text-3xl text-ink">Booking integration placeholder</h2>
      <p className="text-base leading-8">
        This panel is ready for Calendly or a custom scheduler. Until that integration is added,
        route high-intent users into a fallback lead workflow.
      </p>
      <CtaButton href="/contact">Use the fallback inquiry flow</CtaButton>
    </Card>
  );
}
