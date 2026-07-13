"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";

import { CatalogProductCard } from "@/components/catalog/catalog-product-card";
import { Button } from "@/components/ui/button";
import { EmptyState } from "@/components/ui/empty-state";
import { useCommerce } from "@/features/commerce/commerce-provider";
import { mockCatalogProducts } from "@/data/mock-catalog";

function WishlistPageContent() {
  const { wishlistIds } = useCommerce();
  const products = mockCatalogProducts.filter((product) => wishlistIds.includes(product.id));
  if (products.length === 0) return <EmptyState title="Your wishlist is waiting" description="Save leather pieces you would like to return to later." action={<Button asChild><Link href="/shop">Explore the collection <ArrowRight className="size-4" aria-hidden="true" /></Link></Button>} />;
  return <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">{products.map((product) => <CatalogProductCard key={product.id} product={product} />)}</div>;
}

export { WishlistPageContent };
