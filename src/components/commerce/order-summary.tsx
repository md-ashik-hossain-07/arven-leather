import { formatTaka } from "@/lib/format";

type OrderSummaryProps = { subtotal: number; shipping?: number; discount?: number; title?: string };

function OrderSummary({ subtotal, shipping = 0, discount = 0, title = "Order summary" }: OrderSummaryProps) {
  const total = Math.max(0, subtotal + shipping - discount);
  return <section className="rounded-lg border border-border bg-card p-5 shadow-card"><h2 className="text-lg font-semibold">{title}</h2><dl className="mt-5 space-y-3 text-sm"><div className="flex justify-between gap-4 text-muted-foreground"><dt>Subtotal</dt><dd>{formatTaka(subtotal)}</dd></div><div className="flex justify-between gap-4 text-muted-foreground"><dt>Shipping</dt><dd>{shipping === 0 ? "Calculated at checkout" : formatTaka(shipping)}</dd></div>{discount > 0 ? <div className="flex justify-between gap-4 text-success"><dt>Discount</dt><dd>−{formatTaka(discount)}</dd></div> : null}<div className="flex justify-between gap-4 border-t border-border pt-4 text-base font-semibold"><dt>Total</dt><dd>{formatTaka(total)}</dd></div></dl></section>;
}

export { OrderSummary };
