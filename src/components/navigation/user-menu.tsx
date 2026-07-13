"use client";

import { Heart, Package, UserRound } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";

type UserMenuProps = {
  isOpen: boolean;
};

const userLinks = [{ label: "My account", href: "/account", icon: UserRound }, { label: "My orders", href: "/account/orders", icon: Package }, { label: "Wishlist", href: "/wishlist", icon: Heart }] as const;

function UserMenu({ isOpen }: UserMenuProps) {
  return <AnimatePresence>{isOpen ? <motion.div initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: 8 }} transition={{ duration: 0.18 }} className="absolute right-0 top-[calc(100%+0.75rem)] z-50 w-60 rounded-lg border border-border bg-card p-2 text-foreground shadow-elevated"><div className="border-b border-border px-3 py-3"><p className="text-sm font-semibold">Welcome to ARVEN</p><p className="mt-1 text-xs text-muted-foreground">Sign in to access your account.</p></div><div className="py-2">{userLinks.map(({ label, href, icon: Icon }) => <Link key={label} href={href} className="flex items-center gap-3 rounded-md px-3 py-2.5 text-sm transition hover:bg-muted"><Icon className="size-4 text-secondary" aria-hidden="true" />{label}</Link>)}</div><Link href="/login" className="block w-full rounded-md bg-primary px-3 py-2.5 text-center text-sm font-medium text-primary-foreground transition hover:bg-primary/90">Sign in</Link></motion.div> : null}</AnimatePresence>;
}

export { UserMenu };
