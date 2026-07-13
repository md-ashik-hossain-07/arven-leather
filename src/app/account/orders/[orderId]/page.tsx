import Link from "next/link";
import { ArrowLeft, CheckCircle2, MapPin, PackageCheck } from "lucide-react";
import { notFound } from "next/navigation";
import { AccountPageHeader } from "@/components/account/account-page-header";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { mockAddresses, mockOrders } from "@/data/mock-account";

export default async function OrderDetailsPage({ params }: { params: Promise<{ orderId: string }> }) {
  const { orderId } = await params;
  const order = mockOrders.find((item) => item.id === orderId);
  if (!order) notFound();
  const address = mockAddresses[0];
  return <div className="space-y-8"><Link href="/account/orders" className="inline-flex items-center gap-2 text-sm font-medium text-muted-foreground transition hover:text-accent"><ArrowLeft className="size-4" />All orders</Link><AccountPageHeader title={`Order ${order.id}`} description={`Placed on ${order.date}`} action={<Badge variant={order.status === "Delivered" ? "success" : "warning"}>{order.status}</Badge>} /><div className="grid gap-6 xl:grid-cols-[minmax(0,1fr)_18rem]"><div className="space-y-6"><Card className="divide-y divide-border">{order.items.map((item) => <div key={item.name} className="flex items-center justify-between gap-4 p-5"><div><p className="font-medium text-foreground">{item.name}</p><p className="mt-1 text-sm text-muted-foreground">Quantity: {item.quantity}</p></div><p className="font-medium text-foreground">৳{item.price.toLocaleString()}</p></div>)}<div className="flex items-center justify-between p-5 font-medium"><span>Order total</span><span className="text-lg">৳{order.total.toLocaleString()}</span></div></Card><Card className="p-5"><div className="flex gap-3"><PackageCheck className="mt-0.5 size-5 text-accent" /><div><h2 className="font-medium text-foreground">Delivery progress</h2><ol className="mt-5 space-y-4 text-sm text-muted-foreground"><li className="flex gap-3"><CheckCircle2 className="size-4 shrink-0 text-success" />Order confirmed</li><li className="flex gap-3"><CheckCircle2 className="size-4 shrink-0 text-success" />Prepared by ARVEN</li><li className="flex gap-3"><CheckCircle2 className={`size-4 shrink-0 ${order.status === "Delivered" ? "text-success" : "text-warning"}`} />{order.status === "Delivered" ? "Delivered" : "On its way"}</li></ol></div></div></Card></div><div className="space-y-6"><Card className="p-5"><h2 className="font-medium text-foreground">Delivery address</h2><div className="mt-4 flex gap-3 text-sm leading-6 text-muted-foreground"><MapPin className="mt-1 size-4 shrink-0 text-accent" /><p>{address.recipient}<br />{address.address}<br />{address.city}<br />{address.phone}</p></div></Card><Card className="p-5"><h2 className="font-medium text-foreground">Payment</h2><p className="mt-3 text-sm text-muted-foreground">{order.payment}</p></Card></div></div></div>;
}
