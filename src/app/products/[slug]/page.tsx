import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { ProductDetailsClient } from "@/components/product/product-details-client";
import { Breadcrumb } from "@/components/storefront/breadcrumb";
import { Container } from "@/components/layout/container";
import { Section } from "@/components/layout/section";
import { SiteFooter } from "@/components/layout/site-footer";
import { SiteHeader } from "@/components/layout/site-header";
import { getMockProductDetail, getMockProductSlugs, getMockRelatedProducts } from "@/data/mock-product-details";

type ProductPageProps = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return getMockProductSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: ProductPageProps): Promise<Metadata> {
  const { slug } = await params;
  const product = getMockProductDetail(slug);
  if (!product) return { title: "Product not found" };
  return { title: product.name, description: product.description, openGraph: { images: [{ url: product.gallery[0], alt: product.name }] } };
}

export default async function ProductPage({ params }: ProductPageProps) {
  const { slug } = await params;
  const product = getMockProductDetail(slug);
  if (!product) notFound();

  const structuredData = { "@context": "https://schema.org", "@type": "Product", name: product.name, image: product.gallery, description: product.description, brand: { "@type": "Brand", name: product.brand }, offers: { "@type": "Offer", priceCurrency: "BDT", price: product.price, availability: product.stock === "Out of stock" ? "https://schema.org/OutOfStock" : "https://schema.org/InStock" }, aggregateRating: { "@type": "AggregateRating", ratingValue: product.rating, reviewCount: product.reviewCount } };

  return <><SiteHeader /><main><Section spacing="compact" className="pb-24 md:pb-[clamp(4rem,8vw,8rem)]"><Container><Breadcrumb items={[{ label: "Home", href: "/" }, { label: "Shop", href: "/shop" }, { label: product.category, href: "/shop" }, { label: product.name }]} /><div className="mt-8"><ProductDetailsClient product={product} relatedProducts={getMockRelatedProducts(product)} /></div></Container></Section></main><script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} /><SiteFooter /></>;
}
