import type { HTMLAttributes } from "react";
import { cva, type VariantProps } from "class-variance-authority";

import { Container, type ContainerSize } from "@/components/layout/container";
import { cn } from "@/lib/utils";

const sectionVariants = cva("py-[clamp(4rem,8vw,8rem)]", {
  variants: {
    spacing: {
      compact: "py-[clamp(3rem,6vw,5rem)]",
      default: "py-[clamp(4rem,8vw,8rem)]",
      spacious: "py-[clamp(5rem,10vw,10rem)]"
    },
    tone: {
      default: "bg-background",
      muted: "bg-muted",
      inverse: "bg-primary text-primary-foreground"
    }
  },
  defaultVariants: {
    spacing: "default",
    tone: "default"
  }
});

type SectionProps = HTMLAttributes<HTMLElement> & VariantProps<typeof sectionVariants> & {
  container?: boolean;
  containerSize?: ContainerSize;
};

function Section({ children, className, spacing, tone, container = true, containerSize, ...props }: SectionProps) {
  const content = container ? <Container size={containerSize}>{children}</Container> : children;

  return <section className={cn(sectionVariants({ spacing, tone }), className)} {...props}>{content}</section>;
}

export { Section, sectionVariants };
