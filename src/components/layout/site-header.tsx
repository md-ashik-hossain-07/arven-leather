"use client";

import { useState } from "react";
import Link from "next/link";
import { Heart, Menu, Search, ShoppingBag, UserRound } from "lucide-react";

import { BrandLogo } from "@/components/brand/brand-logo";
import { HeaderActionButton } from "@/components/navigation/action-button";
import { CartDrawer } from "@/components/navigation/cart-drawer";
import { DesktopNavigation } from "@/components/navigation/desktop-navigation";
import { MobileNavigation } from "@/components/navigation/mobile-navigation";
import { SearchModal } from "@/components/navigation/search-modal";
import { UserMenu } from "@/components/navigation/user-menu";

export function SiteHeader() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [cartOpen, setCartOpen] = useState(false);
  const [userMenuOpen, setUserMenuOpen] = useState(false);

  return <><header className="sticky top-0 z-50"><div className="bg-arven-gold px-4 py-2 text-center text-[10px] font-bold uppercase tracking-[0.18em] text-arven-black sm:text-xs">Complimentary delivery on orders above ৳ 3,000</div><div className="border-b border-white/10 bg-arven-black/95 backdrop-blur-xl"><div className="mx-auto flex h-16 max-w-7xl items-center justify-between gap-4 px-4 sm:h-20 sm:px-6 lg:px-8"><div className="flex min-w-0 items-center gap-2 lg:flex-1"><HeaderActionButton className="lg:hidden" onClick={() => setMobileMenuOpen(true)} aria-label="Open menu"><Menu className="size-5" aria-hidden="true" /></HeaderActionButton><Link href="/" aria-label="ARVEN Leather home" className="flex items-center gap-2 sm:gap-3"><BrandLogo className="size-10 sm:size-12" priority sizes="48px" /><span className="hidden text-xs font-semibold uppercase tracking-[0.32em] text-arven-gold sm:block">ARVEN</span></Link></div><DesktopNavigation /><div className="flex flex-1 items-center justify-end gap-0.5"><HeaderActionButton onClick={() => setSearchOpen(true)} aria-label="Search"><Search className="size-5" aria-hidden="true" /></HeaderActionButton><div className="relative hidden sm:block"><HeaderActionButton onClick={() => setUserMenuOpen((isOpen) => !isOpen)} aria-expanded={userMenuOpen} aria-haspopup="menu" aria-label="Account menu"><UserRound className="size-5" aria-hidden="true" /></HeaderActionButton><UserMenu isOpen={userMenuOpen} /></div><HeaderActionButton className="hidden sm:inline-flex" badge={2} aria-label="Wishlist"><Heart className="size-5" aria-hidden="true" /></HeaderActionButton><HeaderActionButton badge={1} onClick={() => setCartOpen(true)} aria-label="Open shopping bag"><ShoppingBag className="size-5" aria-hidden="true" /></HeaderActionButton></div></div></div></header><MobileNavigation isOpen={mobileMenuOpen} onClose={() => setMobileMenuOpen(false)} /><SearchModal isOpen={searchOpen} onClose={() => setSearchOpen(false)} /><CartDrawer isOpen={cartOpen} onClose={() => setCartOpen(false)} /></>;
}
