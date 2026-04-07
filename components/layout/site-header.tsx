import Link from "next/link";

import { brand } from "@/lib/constants/brand";
import { ctas } from "@/lib/constants/ctas";
import { navigation } from "@/lib/constants/nav";

import { MobileNav } from "@/components/layout/mobile-nav";
import { Container } from "@/components/shared/container";
import { CtaButton } from "@/components/shared/cta-button";
import { LogoMark } from "@/components/shared/logo-mark";

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 pt-4">
      <Container>
        <div className="glass-panel flex items-center justify-between rounded-full px-4 py-3 shadow-soft">
          <Link href="/" className="flex items-center gap-3">
            <LogoMark />
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.22em] text-ink">
                {brand.name}
              </p>
              <p className="hidden text-xs text-slate sm:block">{brand.parent}</p>
            </div>
          </Link>
          <nav className="hidden items-center gap-6 md:flex">
            {navigation.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-xs font-semibold uppercase tracking-[0.18em] text-slate transition hover:text-ink"
              >
                {item.label}
              </Link>
            ))}
          </nav>
          <div className="hidden md:block">
            <CtaButton href={ctas.primary.href}>{ctas.primary.label}</CtaButton>
          </div>
          <MobileNav />
        </div>
      </Container>
    </header>
  );
}
