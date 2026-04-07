import { cn } from "@/lib/utils/cn";

export function Container({
  children,
  className,
}: Readonly<{
  children: React.ReactNode;
  className?: string;
}>) {
  return <div className={cn("mx-auto w-full max-w-site px-4 md:px-6", className)}>{children}</div>;
}
