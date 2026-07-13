"use client";

import { SlidersHorizontal, X } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { catalogBrands, catalogCategories, catalogPriceRange } from "@/data/mock-catalog";
import { formatTaka } from "@/lib/format";

export type CatalogFiltersState = { categories: string[]; brands: string[]; minPrice: string; maxPrice: string };

type CatalogFiltersProps = { filters: CatalogFiltersState; onChange: (filters: CatalogFiltersState) => void; onClear: () => void };

function FilterGroup({ title, items, selected, onToggle }: { title: string; items: readonly string[]; selected: string[]; onToggle: (item: string) => void }) {
  return <fieldset className="border-t border-border py-5"><legend className="text-sm font-semibold">{title}</legend><div className="mt-3 space-y-3">{items.map((item) => <label key={item} className="flex cursor-pointer items-center justify-between gap-3 text-sm text-muted-foreground"><span className="flex items-center gap-2.5"><input type="checkbox" checked={selected.includes(item)} onChange={() => onToggle(item)} className="size-4 rounded border-border accent-secondary" />{item}</span></label>)}</div></fieldset>;
}

function CatalogFilters({ filters, onChange, onClear }: CatalogFiltersProps) {
  const toggle = (key: "categories" | "brands", item: string) => onChange({ ...filters, [key]: filters[key].includes(item) ? filters[key].filter((value) => value !== item) : [...filters[key], item] });
  const hasActiveFilters = filters.categories.length > 0 || filters.brands.length > 0 || filters.minPrice !== "" || filters.maxPrice !== "";

  return <div><div className="flex items-center justify-between"><h2 className="flex items-center gap-2 text-base font-semibold"><SlidersHorizontal className="size-4 text-secondary" aria-hidden="true" />Filters</h2>{hasActiveFilters ? <Button type="button" variant="link" size="sm" onClick={onClear}>Clear all <X className="size-3.5" aria-hidden="true" /></Button> : null}</div><FilterGroup title="Category" items={catalogCategories} selected={filters.categories} onToggle={(item) => toggle("categories", item)} /><FilterGroup title="Brand" items={catalogBrands} selected={filters.brands} onToggle={(item) => toggle("brands", item)} /><fieldset className="border-y border-border py-5"><legend className="text-sm font-semibold">Price range</legend><div className="mt-3 grid grid-cols-2 gap-3"><div><label htmlFor="minimum-price" className="sr-only">Minimum price</label><Input id="minimum-price" type="number" min={catalogPriceRange.min} max={catalogPriceRange.max} inputMode="numeric" value={filters.minPrice} onChange={(event) => onChange({ ...filters, minPrice: event.target.value })} placeholder="Min" /></div><div><label htmlFor="maximum-price" className="sr-only">Maximum price</label><Input id="maximum-price" type="number" min={catalogPriceRange.min} max={catalogPriceRange.max} inputMode="numeric" value={filters.maxPrice} onChange={(event) => onChange({ ...filters, maxPrice: event.target.value })} placeholder="Max" /></div></div><p className="mt-3 text-xs text-muted-foreground">Mock range: {formatTaka(catalogPriceRange.min)} – {formatTaka(catalogPriceRange.max)}</p></fieldset></div>;
}

export { CatalogFilters };
