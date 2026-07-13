"use client";

import { Trash2 } from "lucide-react";

import { QuantityControl } from "@/components/commerce/quantity-control";
import { useCommerce, type CartItem } from "@/features/commerce/commerce-provider";
import { formatTaka } from "@/lib/format";

function CartItemRow({ item, compact = false }: { item: CartItem; compact?: boolean }) {
  const { removeFromCart, updateQuantity } = useCommerce();
  return <article className="flex gap-4"><img src={item.product.image} alt={`${item.product.name} mock product`} className={`${compact ? "size-20" : "size-24 sm:size-28"} shrink-0 rounded-md object-cover`} /><div className="min-w-0 flex-1"><div className="flex items-start justify-between gap-3"><div><p className="text-xs font-bold uppercase tracking-[0.14em] text-muted-foreground">{item.product.brand}</p><h2 className="mt-1 font-semibold leading-6">{item.product.name}</h2>{item.color || item.size ? <p className="mt-1 text-xs text-muted-foreground">{[item.color, item.size].filter(Boolean).join(" / ")}</p> : null}</div><button type="button" onClick={() => removeFromCart(item.key)} aria-label={`Remove ${item.product.name}`} className="text-muted-foreground transition hover:text-danger"><Trash2 className="size-4" aria-hidden="true" /></button></div><div className="mt-4 flex items-center justify-between gap-3"><QuantityControl value={item.quantity} onChange={(quantity) => updateQuantity(item.key, quantity)} /><p className="font-semibold text-secondary">{formatTaka(item.product.price * item.quantity)}</p></div></div></article>;
}

export { CartItemRow };
