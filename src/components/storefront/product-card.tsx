import { Heart, Star } from "lucide-react";

import type { MockProduct } from "@/data/mock-storefront";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

type ProductCardProps = { product: MockProduct; priority?: boolean };

function ProductCard({ product, priority = false }: ProductCardProps) {
  return <article className="group overflow-hidden rounded-lg border border-border bg-card shadow-card transition duration-300 hover:-translate-y-1 hover:shadow-elevated"><div className="relative aspect-[4/5] overflow-hidden bg-muted"><img src={product.image} alt={`${product.name} mock product`} loading={priority ? "eager" : "lazy"} fetchPriority={priority ? "high" : "auto"} decoding="async" className="h-full w-full object-cover transition duration-700 group-hover:scale-105" />{product.badge ? <Badge className="absolute left-3 top-3 bg-card/95 text-foreground shadow-sm" variant="outline">{product.badge}</Badge> : null}<button type="button" aria-label={`Save ${product.name}`} className="absolute right-3 top-3 grid size-9 place-items-center rounded-full bg-card/95 text-foreground shadow-sm transition hover:bg-arven-gold"><Heart className="size-4" aria-hidden="true" /></button></div><div className="p-4 sm:p-5"><p className="text-xs font-medium uppercase tracking-[0.16em] text-muted-foreground">{product.category}</p><div className="mt-2 flex gap-3"><h3 className="min-w-0 flex-1 text-base font-semibold leading-6">{product.name}</h3><p className="shrink-0 text-sm font-bold text-secondary">{product.price}</p></div><div className="mt-3 flex items-center gap-1 text-arven-gold"><Star className="size-3.5 fill-current" aria-hidden="true" /><span className="text-xs font-semibold text-muted-foreground">{product.rating}</span></div><Button type="button" variant="outline" className="mt-5 w-full">View piece</Button></div></article>;
}

export { ProductCard };
