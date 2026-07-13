import Link from "next/link";
import { ChevronRight } from "lucide-react";

type BreadcrumbItem = { label: string; href?: string };

function Breadcrumb({ items }: { items: readonly BreadcrumbItem[] }) {
  return <nav aria-label="Breadcrumb"><ol className="flex flex-wrap items-center gap-1.5 text-sm text-muted-foreground">{items.map((item, index) => <li key={item.label} className="flex items-center gap-1.5">{index > 0 ? <ChevronRight className="size-3.5 text-muted-foreground/65" aria-hidden="true" /> : null}{item.href ? <Link href={item.href} className="transition hover:text-secondary">{item.label}</Link> : <span aria-current="page" className="font-medium text-foreground">{item.label}</span>}</li>)}</ol></nav>;
}

export { Breadcrumb };
