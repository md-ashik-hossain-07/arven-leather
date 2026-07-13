"use client";

import { useState } from "react";
import { Heart, Minus, Plus, ShoppingBag, Star, Zap } from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { useCommerce } from "@/features/commerce/commerce-provider";
import type { MockProductDetail } from "@/data/mock-product-details";
import { formatTaka } from "@/lib/format";

const stockVariant = { "In stock": "success", "Low stock": "warning", "Out of stock": "danger" } as const;

function ProductPurchasePanel({ product }: { product: MockProductDetail }) {
  const [quantity, setQuantity] = useState(1);
  const [selectedColor, setSelectedColor] = useState(product.colors[0] ?? "");
  const [selectedSize, setSelectedSize] = useState(product.sizes[0] ?? "");
  const { addToCart, toggleWishlist, wishlistIds } = useCommerce();
  const isWishlisted = wishlistIds.includes(product.id);
  const unavailable = product.stock === "Out of stock";
  const addProduct = () => addToCart(product, quantity, {
    ...(selectedColor ? { color: selectedColor } : {}),
    ...(selectedSize ? { size: selectedSize } : {})
  });

  return <div className="rounded-lg border border-border bg-card p-5 shadow-card sm:p-6"><div className="flex flex-wrap items-center gap-2"><p className="text-xs font-bold uppercase tracking-[0.17em] text-secondary">{product.brand}</p><Badge variant={stockVariant[product.stock]}>{product.stock}</Badge></div><h1 className="mt-3 text-3xl font-semibold leading-tight sm:text-4xl">{product.name}</h1><div className="mt-4 flex items-center gap-2"><span className="flex items-center gap-1 text-sm text-arven-gold"><Star className="size-4 fill-current" aria-hidden="true" />{product.rating.toFixed(1)}</span><a href="#reviews" className="text-sm text-muted-foreground underline-offset-4 hover:text-secondary hover:underline">{product.reviewCount} mock reviews</a></div><div className="mt-6 flex items-end gap-3"><p className="text-2xl font-bold text-secondary">{formatTaka(product.price)}</p>{product.oldPrice ? <p className="text-base text-muted-foreground line-through">{formatTaka(product.oldPrice)}</p> : null}</div>{product.colors.length > 0 ? <fieldset className="mt-7"><legend className="text-sm font-semibold">Color <span className="font-normal text-muted-foreground">— {selectedColor}</span></legend><div className="mt-3 flex flex-wrap gap-2">{product.colors.map((color) => <button key={color} type="button" onClick={() => setSelectedColor(color)} aria-pressed={selectedColor === color} className={`rounded-md border px-3 py-2 text-sm transition ${selectedColor === color ? "border-secondary bg-secondary/10 text-secondary" : "border-border hover:border-secondary/50"}`}>{color}</button>)}</div></fieldset> : null}{product.sizes.length > 0 ? <fieldset className="mt-6"><legend className="text-sm font-semibold">Size <span className="font-normal text-muted-foreground">— {selectedSize}</span></legend><div className="mt-3 flex flex-wrap gap-2">{product.sizes.map((size) => <button key={size} type="button" onClick={() => setSelectedSize(size)} aria-pressed={selectedSize === size} className={`grid size-10 place-items-center rounded-md border text-sm transition ${selectedSize === size ? "border-secondary bg-secondary/10 text-secondary" : "border-border hover:border-secondary/50"}`}>{size}</button>)}</div></fieldset> : null}<div className="mt-7 flex items-center gap-3"><div className="flex h-11 items-center rounded-md border border-border"><button type="button" aria-label="Decrease quantity" disabled={quantity === 1} onClick={() => setQuantity((value) => Math.max(1, value - 1))} className="grid size-10 place-items-center disabled:opacity-40"><Minus className="size-4" aria-hidden="true" /></button><span className="w-8 text-center text-sm font-semibold">{quantity}</span><button type="button" aria-label="Increase quantity" onClick={() => setQuantity((value) => value + 1)} className="grid size-10 place-items-center"><Plus className="size-4" aria-hidden="true" /></button></div><Button type="button" disabled={unavailable} onClick={addProduct} className="flex-1"><ShoppingBag className="size-4" aria-hidden="true" />{unavailable ? "Out of stock" : "Add to cart"}</Button><Button type="button" variant="outline" size="icon" onClick={() => toggleWishlist(product.id)} aria-pressed={isWishlisted} aria-label={isWishlisted ? "Remove from wishlist" : "Add to wishlist"}><Heart className={`size-4 ${isWishlisted ? "fill-secondary text-secondary" : ""}`} aria-hidden="true" /></Button></div><Button type="button" disabled={unavailable} variant="secondary" onClick={addProduct} className="mt-3 w-full"><Zap className="size-4" aria-hidden="true" />Buy now</Button><p className="mt-5 text-center text-xs leading-5 text-muted-foreground">Mock purchase controls only. No order or payment action is performed.</p></div>;
}

export { ProductPurchasePanel };
