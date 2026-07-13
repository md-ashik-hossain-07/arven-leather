import type { Metadata } from "next";

import { WishlistPageContent } from "@/components/commerce/wishlist-page-content";
import { Breadcrumb } from "@/components/storefront/breadcrumb";
import { Container } from "@/components/layout/container";
import { Section } from "@/components/layout/section";
import { SiteFooter } from "@/components/layout/site-footer";
import { SiteHeader } from "@/components/layout/site-header";

export const metadata: Metadata = { title: "Wishlist" };

export default function WishlistPage() { return <><SiteHeader /><main><Section><Container><Breadcrumb items={[{ label: "Home", href: "/" }, { label: "Wishlist" }]} /><h1 className="mt-8 text-3xl font-semibold sm:text-4xl">Wishlist</h1><p className="mt-3 text-muted-foreground">Pieces you have saved for later.</p><div className="mt-8"><WishlistPageContent /></div></Container></Section></main><SiteFooter /></>; }
