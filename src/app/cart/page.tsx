import type { Metadata } from "next";

import { CartPageContent } from "@/components/commerce/cart-page-content";
import { Breadcrumb } from "@/components/storefront/breadcrumb";
import { Container } from "@/components/layout/container";
import { Section } from "@/components/layout/section";
import { SiteFooter } from "@/components/layout/site-footer";
import { SiteHeader } from "@/components/layout/site-header";

export const metadata: Metadata = { title: "Shopping Bag" };

export default function CartPage() { return <><SiteHeader /><main><Section><Container><Breadcrumb items={[{ label: "Home", href: "/" }, { label: "Shopping bag" }]} /><h1 className="mt-8 text-3xl font-semibold sm:text-4xl">Shopping bag</h1><div className="mt-8"><CartPageContent /></div></Container></Section></main><SiteFooter /></>; }
