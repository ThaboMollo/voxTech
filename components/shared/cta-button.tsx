import Link from "next/link";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils/cn";

const buttonVariants = cva(
  "inline-flex items-center justify-center rounded-full px-5 py-3 text-sm font-semibold uppercase tracking-[0.18em] transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold",
  {
    variants: {
      variant: {
        primary: "bg-ink text-white hover:bg-pine",
        secondary: "bg-gold text-ink hover:bg-[#d7ac70]",
        ghost: "border border-black/10 bg-white/80 text-ink hover:bg-white",
      },
    },
    defaultVariants: {
      variant: "primary",
    },
  },
);

export function CtaButton({
  href,
  children,
  variant,
  className,
}: Readonly<{
  href: string;
  children: React.ReactNode;
  className?: string;
} & VariantProps<typeof buttonVariants>>) {
  return (
    <Link href={href} className={cn(buttonVariants({ variant }), className)}>
      {children}
    </Link>
  );
}
