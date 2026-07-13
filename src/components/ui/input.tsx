import * as React from "react";

import { cn } from "@/lib/utils";

const Input = React.forwardRef<HTMLInputElement, React.ComponentProps<"input">>(({ className, type, ...props }, ref) => (
  <input
    ref={ref}
    type={type}
    data-slot="input"
    className={cn(
      "flex h-11 w-full rounded-md border border-border bg-card px-3.5 py-2 text-sm text-foreground shadow-sm outline-none transition-[border-color,box-shadow] placeholder:text-muted-foreground focus:border-secondary focus:ring-2 focus:ring-secondary/20 disabled:cursor-not-allowed disabled:bg-muted disabled:opacity-60",
      className
    )}
    {...props}
  />
));

Input.displayName = "Input";

export { Input };
