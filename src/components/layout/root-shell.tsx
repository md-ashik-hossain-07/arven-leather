import type { PropsWithChildren } from "react";

import { cn } from "@/lib/utils";

type RootShellProps = PropsWithChildren<{
  className?: string;
}>;

export function RootShell({ children, className }: RootShellProps) {
  return <div className={cn("min-h-svh bg-background text-foreground antialiased", className)}>{children}</div>;
}
