"use client";

import Link from "next/link";
import { Heart, LayoutDashboard, LogOut, MapPin, Package, UserRound } from "lucide-react";
import { usePathname } from "next/navigation";

import { mockCustomer } from "@/data/mock-account";

const accountLinks = [
  { href: "/account", label: "Dashboard", icon: LayoutDashboard },
  { href: "/account/profile", label: "Profile", icon: UserRound },
  { href: "/account/orders", label: "Orders", icon: Package },
  { href: "/account/addresses", label: "Addresses", icon: MapPin },
  { href: "/wishlist", label: "Wishlist", icon: Heart }
] as const;

function AccountSidebar() {
  const pathname = usePathname();
  return <aside><div className="hidden rounded-lg border border-border bg-card p-5 shadow-card lg:block"><div className="border-b border-border pb-5"><p className="text-xs font-bold uppercase tracking-[0.15em] text-secondary">My account</p><h2 className="mt-2 text-lg font-semibold">{mockCustomer.name}</h2><p className="mt-1 text-sm text-muted-foreground">{mockCustomer.email}</p></div><nav aria-label="Account navigation" className="mt-4 space-y-1">{accountLinks.map(({ href, label, icon: Icon }) => <Link key={href} href={href} className={`flex items-center gap-3 rounded-md px-3 py-2.5 text-sm font-medium transition ${pathname === href ? "bg-secondary/10 text-secondary" : "text-muted-foreground hover:bg-muted hover:text-foreground"}`}><Icon className="size-4" aria-hidden="true" />{label}</Link>)}<button type="button" className="mt-3 flex w-full items-center gap-3 rounded-md px-3 py-2.5 text-left text-sm font-medium text-muted-foreground transition hover:bg-muted hover:text-foreground"><LogOut className="size-4" aria-hidden="true" />Sign out</button></nav></div><nav aria-label="Account navigation" className="-mx-4 overflow-x-auto border-y border-border px-4 lg:hidden"><div className="flex min-w-max gap-5 py-3">{accountLinks.map(({ href, label, icon: Icon }) => <Link key={href} href={href} className={`flex items-center gap-2 text-sm font-medium ${pathname === href ? "text-secondary" : "text-muted-foreground"}`}><Icon className="size-4" aria-hidden="true" />{label}</Link>)}</div></nav></aside>;
}

export { AccountSidebar };
