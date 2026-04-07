import { ArrowRight } from "lucide-react";

import { brand } from "@/lib/constants/brand";
import { ctas } from "@/lib/constants/ctas";

import { Badge } from "@/components/shared/badge";
import { Card } from "@/components/shared/card";
import { CtaButton } from "@/components/shared/cta-button";

export function HeroSection() {
  return (
    <section className="grid gap-6 pt-6 md:grid-cols-[1.1fr_0.9fr] md:pt-10">
      <Card className="space-y-8 overflow-hidden p-8 md:p-12">
        <Badge>{brand.parent}</Badge>
        <div className="space-y-5">
          <h1 className="max-w-3xl text-5xl leading-none text-ink md:text-7xl">
            The voice of tech execution for ambitious businesses.
          </h1>
          <p className="max-w-2xl text-lg leading-8">
            {brand.promise} VoxTech helps SMEs design, build, and scale premium digital
            systems, SaaS products, and practical technical solutions.
          </p>
        </div>
        <div className="flex flex-col gap-3 sm:flex-row">
          <CtaButton href={ctas.primary.href}>{ctas.primary.label}</CtaButton>
          <CtaButton href={ctas.secondary.href} variant="ghost">
            {ctas.secondary.label}
          </CtaButton>
        </div>
      </Card>
      <Card className="section-ring grid gap-6 bg-ink p-8 text-white md:p-10">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.24em] text-gold">
            Positioning
          </p>
          <h2 className="mt-4 text-3xl leading-tight">
            A premium execution house for products, systems, and technical momentum.
          </h2>
        </div>
        <div className="space-y-4">
          {[
            "Product discovery that shapes scope before spend.",
            "System design for real business workflows and constraints.",
            "Delivery pathways that can expand into a measurable lead engine.",
          ].map((item) => (
            <div key={item} className="flex items-start gap-3 rounded-2xl bg-white/8 p-4">
              <ArrowRight className="mt-1 h-4 w-4 text-gold" />
              <p className="text-sm leading-7 text-white/76">{item}</p>
            </div>
          ))}
        </div>
      </Card>
    </section>
  );
}
