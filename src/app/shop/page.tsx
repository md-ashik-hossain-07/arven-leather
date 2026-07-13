import type { Metadata } from "next";

import { Breadcrumb } from "@/components/storefront/breadcrumb";
import { CatalogClient } from "@/components/catalog/catalog-client";
import { SectionHeading } from "@/components/storefront/section-heading";
import { Container } from "@/components/layout/container";
import { Section } from "@/components/layout/section";
import { SiteFooter } from "@/components/layout/site-footer";
import { SiteHeader } from "@/components/layout/site-header";
import { mockCatalogProducts } from "@/data/mock-catalog";

export const metadata: Metadata = { title: "Shop" };

export default function ShopPage() {
  return <><SiteHeader /><main><Section spacing="compact" className="border-b border-border bg-muted/45"><Container><Breadcrumb items={[{ label: "Home", href: "/" }, { label: "Shop" }]} /><SectionHeading className="mt-8" eyebrow="The complete collection" title="Find your next well-made piece." description="A mock catalog of considered leather shoes, bags, wallets, and everyday accessories." /></Container></Section><Section><Container><CatalogClient products={mockCatalogProducts} /></Container></Section></main><SiteFooter /></>;
}
