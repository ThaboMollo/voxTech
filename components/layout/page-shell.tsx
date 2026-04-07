import { cn } from "@/lib/utils/cn";

import { Container } from "@/components/shared/container";

export function PageShell({
  children,
  className,
}: Readonly<{
  children: React.ReactNode;
  className?: string;
}>) {
  return <Container className={cn("flex flex-col", className)}>{children}</Container>;
}
