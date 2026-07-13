"use client";

import { useState } from "react";

import type { MockProductDetail } from "@/data/mock-product-details";

type TabName = "Description" | "Specifications" | "Shipping" | "Return policy";
const tabs: TabName[] = ["Description", "Specifications", "Shipping", "Return policy"];

function ProductTabs({ product }: { product: MockProductDetail }) {
  const [activeTab, setActiveTab] = useState<TabName>("Description");

  return <section aria-label="Product information" className="border-y border-border"><div role="tablist" aria-label="Product information sections" className="flex overflow-x-auto"><>{tabs.map((tab) => <button key={tab} type="button" role="tab" aria-selected={activeTab === tab} onClick={() => setActiveTab(tab)} className={`shrink-0 border-b-2 px-4 py-4 text-sm font-semibold transition ${activeTab === tab ? "border-secondary text-foreground" : "border-transparent text-muted-foreground hover:text-foreground"}`}>{tab}</button>)}</></div><div role="tabpanel" className="max-w-3xl py-6 text-sm leading-7 text-muted-foreground">{activeTab === "Description" ? <p>{product.description}</p> : null}{activeTab === "Specifications" ? <dl className="grid gap-3 sm:grid-cols-2">{product.specifications.map((item) => <div key={item.label} className="rounded-md bg-muted/60 p-4"><dt className="text-xs font-bold uppercase tracking-[0.15em] text-foreground">{item.label}</dt><dd className="mt-1">{item.value}</dd></div>)}</dl> : null}{activeTab === "Shipping" ? <p>Mock storefront shipping: delivery is presented as available throughout Bangladesh, with final timing and cost confirmed at checkout.</p> : null}{activeTab === "Return policy" ? <p>Mock storefront return policy: easy exchange support is presented for eligible items, subject to final business policy.</p> : null}</div></section>;
}

export { ProductTabs };
