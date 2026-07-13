"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowRight, Ticket, Truck } from "lucide-react";

import { CartItemRow } from "@/components/commerce/cart-item-row";
import { OrderSummary } from "@/components/commerce/order-summary";
import { EmptyState } from "@/components/ui/empty-state";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useCommerce } from "@/features/commerce/commerce-provider";

function CartPageContent() {
  const { cartItems, cartSubtotal } = useCommerce();
  const [coupon, setCoupon] = useState("");
  const [couponApplied, setCouponApplied] = useState(false);
  const [shippingZone, setShippingZone] = useState("Dhaka");
  const shipping = shippingZone === "Dhaka" ? 80 : shippingZone === "Outside Dhaka" ? 130 : 0;
  const discount = couponApplied ? Math.round(cartSubtotal * 0.1) : 0;

  if (cartItems.length === 0) return <EmptyState title="Your shopping bag is empty" description="Explore the collection and save a well-made piece for your everyday." action={<Button asChild><Link href="/shop">Shop the collection <ArrowRight className="size-4" aria-hidden="true" /></Link></Button>} />;

  return <div className="grid gap-10 lg:grid-cols-[minmax(0,1fr)_22rem]"><div><div className="space-y-6 divide-y divide-border">{cartItems.map((item) => <div key={item.key} className="pb-6"><CartItemRow item={item} /></div>)}</div><div className="mt-8 grid gap-5 md:grid-cols-2"><section className="rounded-lg border border-border bg-muted/35 p-5"><div className="flex items-center gap-2"><Ticket className="size-4 text-secondary" aria-hidden="true" /><h2 className="font-semibold">Coupon code</h2></div><div className="mt-4 flex gap-2"><Input value={coupon} onChange={(event) => setCoupon(event.target.value)} placeholder="Try ARVEN10" /><Button type="button" variant="outline" onClick={() => setCouponApplied(coupon.trim().toUpperCase() === "ARVEN10")}>Apply</Button></div>{coupon ? <p className={`mt-3 text-xs ${couponApplied ? "text-success" : "text-muted-foreground"}`}>{couponApplied ? "Mock coupon applied: 10% off." : "Use mock code ARVEN10 for 10% off."}</p> : null}</section><section className="rounded-lg border border-border bg-muted/35 p-5"><div className="flex items-center gap-2"><Truck className="size-4 text-secondary" aria-hidden="true" /><h2 className="font-semibold">Estimate shipping</h2></div><label className="mt-4 block text-xs font-semibold uppercase tracking-[0.12em] text-muted-foreground" htmlFor="shipping-zone">Delivery area</label><select id="shipping-zone" value={shippingZone} onChange={(event) => setShippingZone(event.target.value)} className="mt-2 h-11 w-full rounded-md border border-border bg-card px-3 text-sm outline-none focus:border-secondary focus:ring-2 focus:ring-secondary/20"><option>Dhaka</option><option>Outside Dhaka</option><option value="">Select later</option></select>{shippingZone ? <p className="mt-3 text-xs text-muted-foreground">Mock estimated shipping is added to your total.</p> : null}</section></div></div><aside className="lg:sticky lg:top-28"><OrderSummary subtotal={cartSubtotal} shipping={shipping} discount={discount} /><Button asChild className="mt-4 w-full"><Link href="/checkout">Secure checkout <ArrowRight className="size-4" aria-hidden="true" /></Link></Button><Link href="/shop" className="mt-4 block text-center text-sm font-medium text-secondary underline-offset-4 hover:underline">Continue shopping</Link></aside></div>;
}

export { CartPageContent };
