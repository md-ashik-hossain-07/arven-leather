"use client";

import Link from "next/link";
import { ArrowRight, X } from "lucide-react";

import { BrandLogo } from "@/components/brand/brand-logo";
import { OverlayPanel } from "@/components/navigation/overlay-panel";
import { storefrontNavigation } from "@/constants/navigation";

type MobileNavigationProps = {
  isOpen: boolean;
  onClose: () => void;
};

function MobileNavigation({ isOpen, onClose }: MobileNavigationProps) {
  return (
    <OverlayPanel isOpen={isOpen} onClose={onClose} label="Mobile navigation" side="left" className="bg-arven-black text-white">
      <div className="flex min-h-full flex-col p-6">
        <div className="flex items-center justify-between">
          <Link href="/" aria-label="ARVEN Leather home" onClick={onClose}><BrandLogo className="size-14" priority sizes="56px" /></Link>
          <button type="button" onClick={onClose} aria-label="Close menu" className="grid size-10 place-items-center rounded-full text-white transition hover:bg-white/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-arven-gold"><X className="size-5" aria-hidden="true" /></button>
        </div>
        <nav aria-label="Mobile navigation" className="mt-14">
          <ul className="space-y-1">
            {storefrontNavigation.map((item, index) => (
              <li key={item.href}>
                <Link href={item.href} onClick={onClose} className="group flex items-center justify-between border-b border-white/10 py-5 text-xl font-medium transition-colors hover:text-arven-gold">
                  <span><span className="mr-4 text-xs tracking-[0.2em] text-arven-gold/70">0{index + 1}</span>{item.label}</span>
                  <ArrowRight className="size-4 text-arven-gold transition-transform group-hover:translate-x-1" aria-hidden="true" />
                </Link>
              </li>
            ))}
          </ul>
        </nav>
        <p className="mt-auto pt-12 text-sm leading-6 text-white/55">Premium leather pieces, thoughtfully made in Bangladesh.</p>
      </div>
    </OverlayPanel>
  );
}

export { MobileNavigation };
