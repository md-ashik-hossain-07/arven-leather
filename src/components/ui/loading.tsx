import { LoaderCircle } from "lucide-react";

import { cn } from "@/lib/utils";

type LoadingSpinnerProps = {
  className?: string;
  label?: string;
};

function LoadingSpinner({ className, label = "Loading" }: LoadingSpinnerProps) {
  return (
    <span role="status" aria-label={label} className={cn("inline-flex items-center justify-center text-secondary", className)}>
      <LoaderCircle className="size-5 animate-spin" aria-hidden="true" />
    </span>
  );
}

function LoadingBlock({ className, label = "Loading content" }: LoadingSpinnerProps) {
  return (
    <div role="status" aria-label={label} className={cn("flex min-h-40 items-center justify-center rounded-lg border border-dashed border-border bg-muted/40", className)}>
      <LoadingSpinner label={label} />
    </div>
  );
}

export { LoadingBlock, LoadingSpinner };
