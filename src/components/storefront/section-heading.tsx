import { cn } from "@/lib/utils";

type SectionHeadingProps = { eyebrow: string; title: string; description?: string; align?: "left" | "center"; className?: string };

function SectionHeading({ eyebrow, title, description, align = "left", className }: SectionHeadingProps) {
  return <div className={cn(align === "center" ? "mx-auto max-w-3xl text-center" : "max-w-2xl", className)}><p className="text-xs font-bold uppercase tracking-[0.25em] text-secondary">{eyebrow}</p><h2 className="mt-4 text-balance text-3xl font-semibold leading-[1.1] sm:text-4xl lg:text-5xl">{title}</h2>{description ? <p className="mt-5 text-sm leading-7 text-muted-foreground sm:text-base">{description}</p> : null}</div>;
}

export { SectionHeading };
