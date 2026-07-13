"use client";

import { useMemo, useState } from "react";
import { Search } from "lucide-react";

import { CatalogFilters, type CatalogFiltersState } from "@/components/catalog/catalog-filters";
import { CatalogProductCard } from "@/components/catalog/catalog-product-card";
import { EmptyState } from "@/components/ui/empty-state";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import type { MockCatalogProduct } from "@/data/mock-catalog";

const initialFilters: CatalogFiltersState = { categories: [], brands: [], minPrice: "", maxPrice: "" };
const pageSize = 8;

type SortOption = "newest" | "price-asc" | "price-desc" | "popular";

function CatalogClient({ products }: { products: readonly MockCatalogProduct[] }) {
  const [filters, setFilters] = useState<CatalogFiltersState>(initialFilters);
  const [search, setSearch] = useState("");
  const [sort, setSort] = useState<SortOption>("newest");
  const [visibleCount, setVisibleCount] = useState(pageSize);
  const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false);

  const filteredProducts = useMemo(() => products.filter((product) => {
    const term = search.trim().toLowerCase();
    const matchesSearch = term === "" || [product.name, product.category, product.brand].some((value) => value.toLowerCase().includes(term));
    const matchesCategory = filters.categories.length === 0 || filters.categories.includes(product.category);
    const matchesBrand = filters.brands.length === 0 || filters.brands.includes(product.brand);
    const minimum = filters.minPrice === "" ? 0 : Number(filters.minPrice);
    const maximum = filters.maxPrice === "" ? Number.POSITIVE_INFINITY : Number(filters.maxPrice);
    return matchesSearch && matchesCategory && matchesBrand && product.price >= minimum && product.price <= maximum;
  }).sort((first, second) => {
    if (sort === "price-asc") return first.price - second.price;
    if (sort === "price-desc") return second.price - first.price;
    if (sort === "popular") return second.popularity - first.popularity;
    return second.newestRank - first.newestRank;
  }), [filters, products, search, sort]);

  const resetFilters = () => { setFilters(initialFilters); setSearch(""); setVisibleCount(pageSize); };
  const updateFilters = (nextFilters: CatalogFiltersState) => { setFilters(nextFilters); setVisibleCount(pageSize); };
  const shownProducts = filteredProducts.slice(0, visibleCount);

  return <div className="grid gap-8 lg:grid-cols-[16rem_1fr] lg:gap-10"><aside className="hidden lg:block"><CatalogFilters filters={filters} onChange={updateFilters} onClear={resetFilters} /></aside><div><div className="flex flex-col gap-4 border-b border-border pb-5 sm:flex-row sm:items-center sm:justify-between"><div className="relative max-w-md flex-1"><Search className="pointer-events-none absolute left-3.5 top-1/2 size-4 -translate-y-1/2 text-muted-foreground" aria-hidden="true" /><Input type="search" value={search} onChange={(event) => { setSearch(event.target.value); setVisibleCount(pageSize); }} placeholder="Search the collection" className="pl-10" /></div><div className="flex items-center gap-3"><button type="button" onClick={() => setMobileFiltersOpen((open) => !open)} className="h-11 rounded-md border border-border px-4 text-sm font-medium lg:hidden">Filters</button><label className="sr-only" htmlFor="catalog-sort">Sort products</label><select id="catalog-sort" value={sort} onChange={(event) => { setSort(event.target.value as SortOption); setVisibleCount(pageSize); }} className="h-11 rounded-md border border-border bg-card px-3 text-sm outline-none focus:border-secondary focus:ring-2 focus:ring-secondary/20"><option value="newest">Newest</option><option value="price-asc">Price: low to high</option><option value="price-desc">Price: high to low</option><option value="popular">Most popular</option></select></div></div>{mobileFiltersOpen ? <div className="mt-4 rounded-lg border border-border bg-muted/35 p-4 lg:hidden"><CatalogFilters filters={filters} onChange={updateFilters} onClear={resetFilters} /></div> : null}<p className="mt-5 text-sm text-muted-foreground">{filteredProducts.length} mock products found</p>{shownProducts.length > 0 ? <div className="mt-6 grid gap-5 sm:grid-cols-2 xl:grid-cols-3">{shownProducts.map((product) => <CatalogProductCard key={product.id} product={product} />)}</div> : <EmptyState className="mt-6" title="No pieces found" description="Try a different search term or clear your selected filters." action={<Button type="button" onClick={resetFilters}>Reset filters</Button>} />}{visibleCount < filteredProducts.length ? <div className="mt-10 text-center"><Button type="button" variant="outline" onClick={() => setVisibleCount((count) => count + pageSize)}>Load more pieces</Button></div> : null}</div></div>;
}

export { CatalogClient };
