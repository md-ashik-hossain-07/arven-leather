import Link from "next/link";
import { ArrowRight, Heart, MapPin, PackageCheck } from "lucide-react";
import { AccountPageHeader } from "@/components/account/account-page-header";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { mockAddresses, mockCustomer, mockOrders } from "@/data/mock-account";

const statusVariant = (status: string): "success" | "warning" => status === "Delivered" ? "success" : "warning";

export default function AccountDashboardPage() {
  const stats = [{ label: "Orders placed", value: mockCustomer.totalOrders, icon: PackageCheck, href: "/account/orders" }, { label: "Saved addresses", value: mockAddresses.length, icon: MapPin, href: "/account/addresses" }, { label: "Wishlist items", value: mockCustomer.wishlistCount, icon: Heart, href: "/wishlist" }];
  return <div className="space-y-10"><AccountPageHeader title={`Welcome back, ${mockCustomer.name.split(" ")[0]}`} description="Manage your ARVEN orders, details and saved preferences." /><div className="grid gap-4 sm:grid-cols-3">{stats.map(({ label, value, icon: Icon, href }) => <Link key={label} href={href} className="group"><Card className="h-full p-5 transition-transform duration-300 hover:-translate-y-1"><Icon className="mb-6 size-5 text-accent" /><p className="font-display text-3xl text-foreground">{value}</p><p className="mt-1 text-sm text-muted-foreground">{label}</p></Card></Link>)}</div><section><div className="mb-5 flex items-end justify-between gap-4"><div><h2 className="font-display text-2xl text-foreground">Recent orders</h2><p className="mt-1 text-sm text-muted-foreground">Your latest mock purchases.</p></div><Link href="/account/orders" className="inline-flex items-center gap-1 text-sm font-medium text-accent hover:text-accent/80">View all <ArrowRight className="size-4" /></Link></div><Card className="divide-y divide-border">{mockOrders.slice(0, 2).map((order) => <Link key={order.id} href={`/account/orders/${order.id}`} className="flex flex-wrap items-center justify-between gap-4 p-5 transition-colors hover:bg-secondary/40"><div><p className="font-medium text-foreground">{order.id}</p><p className="mt-1 text-sm text-muted-foreground">{order.date}</p></div><Badge variant={statusVariant(order.status)}>{order.status}</Badge><p className="font-medium text-foreground">৳{order.total.toLocaleString()}</p><ArrowRight className="size-4 text-muted-foreground" /></Link>)}</Card></section></div>;
}
