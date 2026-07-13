import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { AccountPageHeader } from "@/components/account/account-page-header";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { mockOrders } from "@/data/mock-account";

const statusVariant = (status: string): "success" | "warning" => status === "Delivered" ? "success" : "warning";

export default function OrdersPage() { return <div className="space-y-8"><AccountPageHeader title="Order history" description="A record of your mock ARVEN purchases." /><Card className="divide-y divide-border">{mockOrders.map((order) => <Link key={order.id} href={`/account/orders/${order.id}`} className="grid gap-3 p-5 transition-colors hover:bg-secondary/40 sm:grid-cols-[1.4fr_1fr_auto_auto] sm:items-center sm:gap-5"><div><p className="font-medium text-foreground">{order.id}</p><p className="mt-1 text-sm text-muted-foreground">{order.date}</p></div><Badge variant={statusVariant(order.status)} className="w-fit">{order.status}</Badge><p className="font-medium text-foreground">৳{order.total.toLocaleString()}</p><ArrowRight className="size-4 text-muted-foreground sm:justify-self-end" /></Link>)}</Card></div>; }
