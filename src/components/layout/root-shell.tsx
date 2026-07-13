import type { PropsWithChildren } from "react";

import { cn } from "@/lib/utils";
import { CommerceProvider } from "@/features/commerce/commerce-provider";

type RootShellProps = PropsWithChildren<{
  className?: string;
}>;

export function RootShell({ children, className }: RootShellProps) {
  return <CommerceProvider><div className={cn("min-h-svh bg-background text-foreground antialiased", className)}>{children}</div></CommerceProvider>;
}
