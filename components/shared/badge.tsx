import { cn } from "@/lib/utils/cn";

export function Badge({
  children,
  className,
}: Readonly<{
  children: React.ReactNode;
  className?: string;
}>) {
  return (
    <span
      className={cn(
        "inline-flex rounded-full bg-gold/15 px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-ember",
        className,
      )}
    >
      {children}
    </span>
  );
}
