import type { ReactNode } from "react";
import { PackageOpen, type LucideIcon } from "lucide-react";

import { cn } from "@/lib/utils";

type EmptyStateProps = {
  title: string;
  description?: string;
  action?: ReactNode;
  icon?: LucideIcon;
  className?: string;
};

function EmptyState({ title, description, action, icon: Icon = PackageOpen, className }: EmptyStateProps) {
  return (
    <section className={cn("flex min-h-64 flex-col items-center justify-center rounded-lg border border-dashed border-border bg-card px-6 py-12 text-center", className)}>
      <div className="flex size-12 items-center justify-center rounded-full bg-muted text-secondary">
        <Icon className="size-5" aria-hidden="true" />
      </div>
      <h2 className="mt-5 text-lg font-semibold text-foreground">{title}</h2>
      {description ? <p className="mt-2 max-w-md text-sm leading-6 text-muted-foreground">{description}</p> : null}
      {action ? <div className="mt-6">{action}</div> : null}
    </section>
  );
}

export { EmptyState };
