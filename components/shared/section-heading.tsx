import { cn } from "@/lib/utils/cn";

export function SectionHeading({
  eyebrow,
  title,
  description,
  invert = false,
  className,
}: Readonly<{
  eyebrow: string;
  title: string;
  description?: string;
  invert?: boolean;
  className?: string;
}>) {
  return (
    <div className={cn("space-y-4", className)}>
      <p
        className={cn(
          "text-xs font-semibold uppercase tracking-[0.24em]",
          invert ? "text-gold" : "text-ember",
        )}
      >
        {eyebrow}
      </p>
      <h2 className={cn("max-w-3xl text-3xl leading-tight md:text-5xl", invert && "text-white")}>
        {title}
      </h2>
      {description ? (
        <p className={cn("max-w-2xl text-base leading-8", invert ? "text-white/72" : "text-slate")}>
          {description}
        </p>
      ) : null}
    </div>
  );
}
