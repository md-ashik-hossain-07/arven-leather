import { Star } from "lucide-react";

import type { MockProductDetail } from "@/data/mock-product-details";

function ProductReviews({ product }: { product: MockProductDetail }) {
  return <section id="reviews" className="scroll-mt-28"><div className="flex flex-col justify-between gap-3 sm:flex-row sm:items-end"><div><p className="text-xs font-bold uppercase tracking-[0.2em] text-secondary">Customer notes</p><h2 className="mt-3 text-2xl font-semibold">Reviews for this piece</h2></div><div className="flex items-center gap-1 text-arven-gold"><Star className="size-4 fill-current" aria-hidden="true" /><span className="font-semibold">{product.rating.toFixed(1)}</span><span className="ml-1 text-sm text-muted-foreground">from {product.reviewCount} mock reviews</span></div></div><div className="mt-7 grid gap-4 md:grid-cols-3">{product.reviews.map((review) => <article key={review.name} className="rounded-lg border border-border bg-card p-5"><div className="flex gap-0.5 text-arven-gold">{Array.from({ length: 5 }, (_, index) => <Star key={index} className={`size-3.5 ${index < review.rating ? "fill-current" : "text-border"}`} aria-hidden="true" />)}</div><p className="mt-4 text-sm leading-7 text-muted-foreground">“{review.comment}”</p><div className="mt-5 border-t border-border pt-3"><p className="text-sm font-semibold">{review.name}</p><p className="mt-1 text-xs text-muted-foreground">{review.location} · {review.date}</p></div></article>)}</div></section>;
}

export { ProductReviews };
