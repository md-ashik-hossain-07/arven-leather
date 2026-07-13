"use client";

import { ShoppingBag } from "lucide-react";

import { CatalogProductCard } from "@/components/catalog/catalog-product-card";
import { ProductGallery } from "@/components/product/product-gallery";
import { ProductPurchasePanel } from "@/components/product/product-purchase-panel";
import { ProductReviews } from "@/components/product/product-reviews";
import { ProductTabs } from "@/components/product/product-tabs";
import { Button } from "@/components/ui/button";
import type { MockCatalogProduct } from "@/data/mock-catalog";
import type { MockProductDetail } from "@/data/mock-product-details";

function ProductDetailsClient({ product, relatedProducts }: { product: MockProductDetail; relatedProducts: MockCatalogProduct[] }) {
  const unavailable = product.stock === "Out of stock";

  return <><div className="grid gap-8 lg:grid-cols-[minmax(0,1.1fr)_minmax(22rem,0.9fr)] lg:items-start lg:gap-12"><ProductGallery images={product.gallery} productName={product.name} /><aside className="lg:sticky lg:top-28"><ProductPurchasePanel product={product} /></aside></div><div className="mt-12 space-y-12"><ProductTabs product={product} /><ProductReviews product={product} /><section><div className="flex items-end justify-between gap-4"><div><p className="text-xs font-bold uppercase tracking-[0.2em] text-secondary">You may also like</p><h2 className="mt-3 text-2xl font-semibold">Related pieces</h2></div><p className="hidden text-sm text-muted-foreground sm:block">Scroll to explore</p></div><div className="mt-7 flex snap-x gap-5 overflow-x-auto pb-3">{relatedProducts.map((relatedProduct) => <div key={relatedProduct.id} className="w-[17rem] shrink-0 snap-start"><CatalogProductCard product={relatedProduct} /></div>)}</div></section></div><div className="fixed inset-x-0 bottom-0 z-40 border-t border-border bg-card/95 p-3 shadow-elevated backdrop-blur md:hidden"><Button type="button" disabled={unavailable} className="w-full"><ShoppingBag className="size-4" aria-hidden="true" />{unavailable ? "Out of stock" : `Add ${product.name} to cart`}</Button></div></>;
}

export { ProductDetailsClient };
