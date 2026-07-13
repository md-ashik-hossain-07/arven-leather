"use client";

import { Minus, Plus, ShoppingBag, Trash2, X } from "lucide-react";

import { OverlayPanel } from "@/components/navigation/overlay-panel";
import { Button } from "@/components/ui/button";

const mockCartItem = { name: "Mock leather wallet", detail: "Black / One size", price: "৳ 1,790", quantity: 1 } as const;

type CartDrawerProps = {
  isOpen: boolean;
  onClose: () => void;
};

function CartDrawer({ isOpen, onClose }: CartDrawerProps) {
  return (
    <OverlayPanel isOpen={isOpen} onClose={onClose} label="Shopping cart" side="right">
      <div className="flex min-h-full flex-col">
        <div className="flex items-center justify-between border-b border-border px-5 py-5 sm:px-6"><div><p className="text-xs font-semibold uppercase tracking-[0.2em] text-secondary">Your selection</p><h2 className="mt-1 text-xl font-semibold">Shopping bag</h2></div><button type="button" onClick={onClose} aria-label="Close cart" className="grid size-10 place-items-center rounded-full text-muted-foreground transition hover:bg-muted hover:text-foreground"><X className="size-5" aria-hidden="true" /></button></div>
        <div className="flex-1 px-5 py-6 sm:px-6">
          <article className="flex gap-4"><div className="grid size-20 shrink-0 place-items-center rounded-md bg-muted text-secondary"><ShoppingBag className="size-6" aria-hidden="true" /></div><div className="min-w-0 flex-1"><div className="flex justify-between gap-3"><div><h3 className="font-semibold">{mockCartItem.name}</h3><p className="mt-1 text-sm text-muted-foreground">{mockCartItem.detail}</p></div><button type="button" aria-label="Remove mock cart item" className="text-muted-foreground hover:text-danger"><Trash2 className="size-4" aria-hidden="true" /></button></div><div className="mt-4 flex items-center justify-between"><div className="flex items-center rounded-md border border-border"><button type="button" aria-label="Decrease quantity" className="grid size-8 place-items-center hover:bg-muted"><Minus className="size-3" aria-hidden="true" /></button><span className="w-7 text-center text-sm">{mockCartItem.quantity}</span><button type="button" aria-label="Increase quantity" className="grid size-8 place-items-center hover:bg-muted"><Plus className="size-3" aria-hidden="true" /></button></div><p className="font-semibold text-secondary">{mockCartItem.price}</p></div></div></article>
        </div>
        <div className="border-t border-border bg-muted/45 p-5 sm:p-6"><div className="flex items-center justify-between text-sm"><span className="text-muted-foreground">Subtotal</span><span className="font-semibold">{mockCartItem.price}</span></div><p className="mt-2 text-xs leading-5 text-muted-foreground">Shipping and discounts are calculated at checkout.</p><Button className="mt-5 w-full">Checkout</Button><button type="button" onClick={onClose} className="mt-3 w-full text-sm font-medium text-secondary underline-offset-4 hover:underline">Continue shopping</button></div>
      </div>
    </OverlayPanel>
  );
}

export { CartDrawer };
