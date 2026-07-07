import Link from "next/link";
import { ArrowRight } from "lucide-react";

import { BrandLogo } from "@/components/brand/brand-logo";
import { Button } from "@/components/ui/button";

const navItems = [
  { label: "Collections", href: "#collections" },
  { label: "Craft", href: "#craft" },
  { label: "Origin", href: "#origin" }
] as const;

export function SiteHeader() {
  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-arven-black/80 backdrop-blur-xl">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link href="/" aria-label="ARVEN Leather home" className="flex items-center gap-3 py-3">
          <BrandLogo className="size-12 sm:size-14" sizes="56px" priority />
          <span className="hidden text-xs font-medium uppercase tracking-[0.32em] text-arven-gold sm:block">ARVEN</span>
        </Link>

        <nav aria-label="Primary navigation" className="hidden items-center gap-9 md:flex">
          {navItems.map((item) => (
            <a key={item.href} href={item.href} className="text-xs font-medium uppercase tracking-[0.22em] text-white/68 transition hover:text-arven-gold">
              {item.label}
            </a>
          ))}
        </nav>

        <Button asChild variant="outline" size="sm" className="hidden border-arven-gold/45 bg-transparent text-arven-gold hover:bg-arven-gold hover:text-arven-black md:inline-flex">
          <a href="#collections">Explore</a>
        </Button>

        <a href="#collections" className="inline-flex size-10 items-center justify-center rounded-md border border-white/12 text-arven-gold transition hover:bg-arven-gold hover:text-arven-black md:hidden" aria-label="Explore collections">
          <ArrowRight className="size-5" aria-hidden="true" />
        </a>
      </div>
    </header>
  );
}
