"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu, X } from "lucide-react";

import { ctas } from "@/lib/constants/ctas";
import { navigation } from "@/lib/constants/nav";
import { cn } from "@/lib/utils/cn";

import { CtaButton } from "@/components/shared/cta-button";

export function MobileNav() {
  const [open, setOpen] = useState(false);

  return (
    <div className="md:hidden">
      <button
        type="button"
        aria-expanded={open}
        aria-label="Toggle navigation"
        onClick={() => setOpen((current) => !current)}
        className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-black/10 bg-white/80 text-ink backdrop-blur"
      >
        {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
      </button>
      <div
        className={cn(
          "absolute left-4 right-4 top-20 rounded-[1.75rem] border border-black/5 bg-white/95 p-6 shadow-soft transition",
          open ? "visible translate-y-0 opacity-100" : "invisible -translate-y-3 opacity-0",
        )}
      >
        <nav className="flex flex-col gap-4">
          {navigation.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={() => setOpen(false)}
              className="text-sm font-semibold tracking-[0.16em] text-slate uppercase"
            >
              {item.label}
            </Link>
          ))}
          <CtaButton href={ctas.primary.href}>{ctas.primary.label}</CtaButton>
        </nav>
      </div>
    </div>
  );
}
