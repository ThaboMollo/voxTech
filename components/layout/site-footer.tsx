import Link from "next/link";

import { brand } from "@/lib/constants/brand";
import { ctas } from "@/lib/constants/ctas";
import { navigation } from "@/lib/constants/nav";
import { siteContact } from "@/lib/constants/site-content";

import { Container } from "@/components/shared/container";
import { CtaButton } from "@/components/shared/cta-button";

export function SiteFooter() {
  return (
    <footer className="pb-10 pt-8">
      <Container>
        <div className="grid gap-8 rounded-[2rem] bg-ink px-6 py-10 text-white shadow-soft md:grid-cols-[1.1fr_0.9fr] md:px-10">
          <div className="space-y-4">
            <p className="text-xs font-semibold uppercase tracking-[0.24em] text-gold">
              {brand.parent}
            </p>
            <h2 className="max-w-xl text-3xl leading-tight">
              {brand.name} exists to turn technical ambition into deliverable systems.
            </h2>
            <p className="max-w-xl text-sm text-white/72">{brand.promise}</p>
            <CtaButton href={ctas.primary.href} variant="secondary">
              {ctas.primary.label}
            </CtaButton>
          </div>
          <div className="grid gap-3 text-sm text-white/72 sm:grid-cols-2">
            {navigation.map((item) => (
              <Link key={item.href} href={item.href} className="transition hover:text-white">
                {item.label}
              </Link>
            ))}
            <span>{siteContact.email}</span>
            <span>Johannesburg, South Africa</span>
          </div>
        </div>
      </Container>
    </footer>
  );
}
