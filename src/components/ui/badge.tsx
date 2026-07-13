import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const badgeVariants = cva("inline-flex items-center gap-1 rounded-full border px-2.5 py-1 text-xs font-semibold leading-none", {
  variants: {
    variant: {
      default: "border-primary bg-primary text-primary-foreground",
      secondary: "border-secondary/20 bg-secondary/10 text-secondary",
      outline: "border-border bg-transparent text-foreground",
      success: "border-success/20 bg-success/10 text-success",
      warning: "border-warning/20 bg-warning/10 text-warning",
      danger: "border-danger/20 bg-danger/10 text-danger",
      info: "border-info/20 bg-info/10 text-info"
    }
  },
  defaultVariants: {
    variant: "default"
  }
});

type BadgeProps = React.ComponentProps<"span"> & VariantProps<typeof badgeVariants>;

function Badge({ className, variant, ...props }: BadgeProps) {
  return <span data-slot="badge" className={cn(badgeVariants({ variant }), className)} {...props} />;
}

export { Badge, badgeVariants };
