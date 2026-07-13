"use client";

import { Heart, Package, UserRound } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";

type UserMenuProps = {
  isOpen: boolean;
};

const userLinks = [{ label: "My account", icon: UserRound }, { label: "My orders", icon: Package }, { label: "Wishlist", icon: Heart }] as const;

function UserMenu({ isOpen }: UserMenuProps) {
  return <AnimatePresence>{isOpen ? <motion.div initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: 8 }} transition={{ duration: 0.18 }} className="absolute right-0 top-[calc(100%+0.75rem)] z-50 w-60 rounded-lg border border-border bg-card p-2 text-foreground shadow-elevated"><div className="border-b border-border px-3 py-3"><p className="text-sm font-semibold">Welcome to ARVEN</p><p className="mt-1 text-xs text-muted-foreground">Sign in to access your account.</p></div><div className="py-2">{userLinks.map(({ label, icon: Icon }) => <button key={label} type="button" className="flex w-full items-center gap-3 rounded-md px-3 py-2.5 text-left text-sm transition hover:bg-muted"><Icon className="size-4 text-secondary" aria-hidden="true" />{label}</button>)}</div><button type="button" className="w-full rounded-md bg-primary px-3 py-2.5 text-sm font-medium text-primary-foreground transition hover:bg-primary/90">Sign in</button></motion.div> : null}</AnimatePresence>;
}

export { UserMenu };
