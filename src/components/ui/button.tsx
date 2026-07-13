import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex shrink-0 items-center justify-center gap-2 rounded-md border border-transparent px-5 text-sm font-medium whitespace-nowrap transition-[background-color,border-color,color,box-shadow,transform] duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background disabled:pointer-events-none disabled:opacity-45",
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground shadow-sm hover:-translate-y-px hover:bg-primary/90 hover:shadow-md",
        secondary: "bg-secondary text-secondary-foreground shadow-sm hover:-translate-y-px hover:bg-secondary/90 hover:shadow-md",
        outline: "border-border bg-card text-foreground hover:border-secondary/40 hover:bg-muted",
        ghost: "text-foreground hover:bg-muted",
        link: "h-auto px-0 text-secondary underline-offset-4 hover:text-secondary/80 hover:underline",
        destructive: "bg-danger text-white shadow-sm hover:-translate-y-px hover:bg-danger/90 hover:shadow-md"
      },
      size: {
        default: "h-11 px-5",
        sm: "h-9 px-4 text-xs",
        lg: "h-12 px-6",
        icon: "size-10 p-0",
        iconSm: "size-9 p-0"
      }
    },
    defaultVariants: {
      variant: "default",
      size: "default"
    }
  }
);

export type ButtonProps = React.ComponentProps<"button"> &
  VariantProps<typeof buttonVariants> & {
    asChild?: boolean;
  };

function Button({ className, variant, size, asChild = false, ...props }: ButtonProps) {
  const Comp = asChild ? Slot : "button";

  return <Comp data-slot="button" className={cn(buttonVariants({ variant, size, className }))} {...props} />;
}

export { Button, buttonVariants };
