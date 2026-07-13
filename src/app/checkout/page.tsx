import type { Metadata } from "next";

import { CheckoutPageContent } from "@/components/commerce/checkout-page-content";
import { Breadcrumb } from "@/components/storefront/breadcrumb";
import { Container } from "@/components/layout/container";
import { Section } from "@/components/layout/section";
import { SiteFooter } from "@/components/layout/site-footer";
import { SiteHeader } from "@/components/layout/site-header";

export const metadata: Metadata = { title: "Checkout" };

export default function CheckoutPage() { return <><SiteHeader /><main><Section><Container size="content"><Breadcrumb items={[{ label: "Home", href: "/" }, { label: "Shopping bag", href: "/cart" }, { label: "Checkout" }]} /><h1 className="mt-8 text-3xl font-semibold sm:text-4xl">Secure checkout</h1><p className="mt-3 text-muted-foreground">Complete your mock order in a few considered steps.</p><div className="mt-8"><CheckoutPageContent /></div></Container></Section></main><SiteFooter /></>; }
