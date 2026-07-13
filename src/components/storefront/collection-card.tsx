import { ArrowUpRight } from "lucide-react";

import type { ImageCollection } from "@/data/mock-storefront";

type CollectionCardProps = { collection: ImageCollection; priority?: boolean };

function CollectionCard({ collection, priority = false }: CollectionCardProps) {
  return <a href={collection.href} className="group relative block aspect-[4/5] overflow-hidden rounded-lg bg-muted focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-4"><img src={collection.image} alt="" loading={priority ? "eager" : "lazy"} fetchPriority={priority ? "high" : "auto"} decoding="async" className="absolute inset-0 h-full w-full object-cover transition duration-700 group-hover:scale-105" /><div className="absolute inset-0 bg-gradient-to-t from-arven-black/85 via-arven-black/15 to-transparent" /><div className="absolute inset-x-0 bottom-0 p-5 text-white sm:p-6"><div className="flex items-end justify-between gap-3"><div><h3 className="text-xl font-semibold">{collection.name}</h3><p className="mt-2 max-w-xs text-sm leading-6 text-white/70">{collection.description}</p></div><ArrowUpRight className="mb-1 size-5 shrink-0 text-arven-gold transition-transform group-hover:-translate-y-1 group-hover:translate-x-1" aria-hidden="true" /></div></div></a>;
}

export { CollectionCard };
