"use client";

import { Search, X } from "lucide-react";

import { Input } from "@/components/ui/input";
import { OverlayPanel } from "@/components/navigation/overlay-panel";

const suggestedSearches = ["Oxford shoes", "Leather bags", "Men's wallets", "Gift ideas"] as const;

type SearchModalProps = {
  isOpen: boolean;
  onClose: () => void;
};

function SearchModal({ isOpen, onClose }: SearchModalProps) {
  return (
    <OverlayPanel isOpen={isOpen} onClose={onClose} label="Search products" side="center">
      <div className="p-5 sm:p-7">
        <div className="flex items-center justify-between gap-4">
          <div><p className="text-xs font-semibold uppercase tracking-[0.22em] text-secondary">Find your piece</p><h2 className="mt-2 text-2xl font-semibold">Search the collection</h2></div>
          <button type="button" onClick={onClose} aria-label="Close search" className="grid size-10 place-items-center rounded-full text-muted-foreground transition hover:bg-muted hover:text-foreground"><X className="size-5" aria-hidden="true" /></button>
        </div>
        <div className="relative mt-7"><Search className="pointer-events-none absolute left-4 top-1/2 size-5 -translate-y-1/2 text-muted-foreground" aria-hidden="true" /><Input autoFocus type="search" placeholder="Search shoes, bags, wallets..." className="h-14 pl-12 text-base" /></div>
        <div className="mt-7"><p className="text-xs font-semibold uppercase tracking-[0.18em] text-muted-foreground">Popular searches</p><div className="mt-3 flex flex-wrap gap-2">{suggestedSearches.map((search) => <button key={search} type="button" className="rounded-full border border-border px-3 py-2 text-sm text-foreground transition hover:border-secondary/40 hover:bg-muted">{search}</button>)}</div></div>
      </div>
    </OverlayPanel>
  );
}

export { SearchModal };
