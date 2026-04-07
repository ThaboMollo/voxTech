import { cn } from "@/lib/utils/cn";

export function Card({
  children,
  className,
}: Readonly<{
  children: React.ReactNode;
  className?: string;
}>) {
  return (
    <div className={cn("rounded-[2rem] border border-black/5 bg-white/80 shadow-soft backdrop-blur", className)}>
      {children}
    </div>
  );
}
