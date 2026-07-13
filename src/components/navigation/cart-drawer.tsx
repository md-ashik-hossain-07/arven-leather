"use client";

import Link from "next/link";
import { ShoppingBag, X } from "lucide-react";

import { CartItemRow } from "@/components/commerce/cart-item-row";
import { OverlayPanel } from "@/components/navigation/overlay-panel";
import { Button } from "@/components/ui/button";
import { useCommerce } from "@/features/commerce/commerce-provider";
import { formatTaka } from "@/lib/format";

type CartDrawerProps = { isOpen: boolean; onClose: () => void };

function CartDrawer({ isOpen, onClose }: CartDrawerProps) {
  const { cartItems, cartCount, cartSubtotal } = useCommerce();
  return <OverlayPanel isOpen={isOpen} onClose={onClose} label="Shopping cart" side="right"><div className="flex min-h-full flex-col"><div className="flex items-center justify-between border-b border-border px-5 py-5 sm:px-6"><div><p className="text-xs font-semibold uppercase tracking-[0.2em] text-secondary">Your selection</p><h2 className="mt-1 text-xl font-semibold">Shopping bag ({cartCount})</h2></div><button type="button" onClick={onClose} aria-label="Close cart" className="grid size-10 place-items-center rounded-full text-muted-foreground transition hover:bg-muted hover:text-foreground"><X className="size-5" aria-hidden="true" /></button></div>{cartItems.length > 0 ? <><div className="flex-1 space-y-5 overflow-y-auto px-5 py-6 sm:px-6">{cartItems.map((item) => <CartItemRow key={item.key} item={item} compact />)}</div><div className="border-t border-border bg-muted/45 p-5 sm:p-6"><div className="flex items-center justify-between text-sm"><span className="text-muted-foreground">Subtotal</span><span className="font-semibold">{formatTaka(cartSubtotal)}</span></div><p className="mt-2 text-xs leading-5 text-muted-foreground">Shipping and discounts are calculated at checkout.</p><Button asChild className="mt-5 w-full" onClick={onClose}><Link href="/checkout">Checkout</Link></Button><Link href="/cart" onClick={onClose} className="mt-3 block text-center text-sm font-medium text-secondary underline-offset-4 hover:underline">View shopping bag</Link></div></> : <div className="flex flex-1 flex-col items-center justify-center px-6 text-center"><div className="grid size-14 place-items-center rounded-full bg-muted text-secondary"><ShoppingBag className="size-6" aria-hidden="true" /></div><h3 className="mt-5 text-lg font-semibold">Your bag is empty</h3><p className="mt-2 text-sm leading-6 text-muted-foreground">Find a piece worth carrying every day.</p><Button asChild className="mt-6" onClick={onClose}><Link href="/shop">Shop now</Link></Button></div>}</div></OverlayPanel>;
}

export { CartDrawer };
