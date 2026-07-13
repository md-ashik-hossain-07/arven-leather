"use client";

import { useState, type FormEvent } from "react";
import { useRouter } from "next/navigation";
import { CreditCard, Landmark, Smartphone } from "lucide-react";

import { CartItemRow } from "@/components/commerce/cart-item-row";
import { OrderSummary } from "@/components/commerce/order-summary";
import { EmptyState } from "@/components/ui/empty-state";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useCommerce } from "@/features/commerce/commerce-provider";

const paymentMethods = [
  { id: "cod", label: "Cash on Delivery", description: "Pay once your order arrives.", icon: Landmark },
  { id: "bkash", label: "bKash", description: "Mock payment interface only.", icon: Smartphone },
  { id: "nagad", label: "Nagad", description: "Mock payment interface only.", icon: Smartphone },
  { id: "card", label: "Card", description: "Mock card payment interface only.", icon: CreditCard }
] as const;

function CheckoutPageContent() {
  const { cartItems, cartSubtotal, clearCart } = useCommerce();
  const [paymentMethod, setPaymentMethod] = useState<(typeof paymentMethods)[number]["id"]>("cod");
  const [shippingZone, setShippingZone] = useState("Dhaka");
  const router = useRouter();
  const shipping = shippingZone === "Dhaka" ? 80 : 130;
  const submitOrder = (event: FormEvent<HTMLFormElement>) => { event.preventDefault(); clearCart(); router.push("/order-success"); };

  if (cartItems.length === 0) return <EmptyState title="Your bag is empty" description="Add a product before beginning checkout." action={<Button asChild><a href="/shop">Shop now</a></Button>} />;
  return <form onSubmit={submitOrder} className="grid gap-10 lg:grid-cols-[minmax(0,1fr)_22rem]"><div className="space-y-8"><section><h2 className="text-xl font-semibold">Contact information</h2><div className="mt-5 grid gap-4 sm:grid-cols-2"><div className="sm:col-span-2"><label htmlFor="checkout-email" className="mb-2 block text-sm font-medium">Email address</label><Input id="checkout-email" type="email" required placeholder="you@example.com" /></div><div><label htmlFor="checkout-first-name" className="mb-2 block text-sm font-medium">First name</label><Input id="checkout-first-name" required /></div><div><label htmlFor="checkout-last-name" className="mb-2 block text-sm font-medium">Last name</label><Input id="checkout-last-name" required /></div><div className="sm:col-span-2"><label htmlFor="checkout-phone" className="mb-2 block text-sm font-medium">Mobile number</label><Input id="checkout-phone" required inputMode="tel" placeholder="01XXXXXXXXX" /></div></div></section><section className="border-t border-border pt-8"><h2 className="text-xl font-semibold">Shipping information</h2><div className="mt-5 grid gap-4 sm:grid-cols-2"><div className="sm:col-span-2"><label htmlFor="checkout-address" className="mb-2 block text-sm font-medium">Address</label><Input id="checkout-address" required placeholder="House, road, area" /></div><div><label htmlFor="checkout-city" className="mb-2 block text-sm font-medium">City</label><Input id="checkout-city" required /></div><div><label htmlFor="checkout-zone" className="mb-2 block text-sm font-medium">Delivery area</label><select id="checkout-zone" value={shippingZone} onChange={(event) => setShippingZone(event.target.value)} className="h-11 w-full rounded-md border border-border bg-card px-3 text-sm outline-none focus:border-secondary focus:ring-2 focus:ring-secondary/20"><option>Dhaka</option><option>Outside Dhaka</option></select></div><div className="sm:col-span-2"><label htmlFor="checkout-note" className="mb-2 block text-sm font-medium">Order note <span className="font-normal text-muted-foreground">(optional)</span></label><Input id="checkout-note" placeholder="Delivery preferences or a note for us" /></div></div></section><section className="border-t border-border pt-8"><h2 className="text-xl font-semibold">Payment method</h2><div className="mt-5 grid gap-3">{paymentMethods.map(({ id, label, description, icon: Icon }) => <label key={id} className={`flex cursor-pointer items-center gap-4 rounded-lg border p-4 transition ${paymentMethod === id ? "border-secondary bg-secondary/5" : "border-border hover:border-secondary/40"}`}><input type="radio" name="payment-method" value={id} checked={paymentMethod === id} onChange={() => setPaymentMethod(id)} className="size-4 accent-secondary" /><Icon className="size-5 text-secondary" aria-hidden="true" /><span><span className="block text-sm font-semibold">{label}</span><span className="mt-1 block text-xs text-muted-foreground">{description}</span></span></label>)}</div></section><section className="border-t border-border pt-8"><h2 className="text-xl font-semibold">Your items</h2><div className="mt-5 space-y-5">{cartItems.map((item) => <CartItemRow key={item.key} item={item} compact />)}</div></section></div><aside className="lg:sticky lg:top-28"><OrderSummary subtotal={cartSubtotal} shipping={shipping} title="Order summary" /><Button type="submit" className="mt-4 w-full">Place mock order</Button><p className="mt-3 text-center text-xs leading-5 text-muted-foreground">This checkout is a frontend-only mock. No payment or order is submitted.</p></aside></form>;
}

export { CheckoutPageContent };
