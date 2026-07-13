import type { HTMLAttributes } from "react";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const containerVariants = cva("mx-auto w-full px-4 sm:px-6 lg:px-8", {
  variants: {
    size: {
      content: "max-w-5xl",
      default: "max-w-7xl",
      wide: "max-w-[90rem]",
      full: "max-w-none"
    }
  },
  defaultVariants: {
    size: "default"
  }
});

type ContainerProps = HTMLAttributes<HTMLDivElement> & VariantProps<typeof containerVariants>;
export type ContainerSize = NonNullable<VariantProps<typeof containerVariants>["size"]>;

export function Container({ children, className, size, ...props }: ContainerProps) {
  return (
    <div className={cn(containerVariants({ size }), className)} {...props}>
      {children}
    </div>
  );
}

export { containerVariants };
