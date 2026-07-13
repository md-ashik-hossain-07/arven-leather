import { BadgeDollarSign, Gem, RefreshCw, ShieldCheck, Truck, type LucideIcon } from "lucide-react";

export type MockProduct = {
  name: string;
  category: string;
  price: string;
  image: string;
  rating: string;
  badge?: string;
};

export type ImageCollection = {
  name: string;
  description: string;
  image: string;
  href: string;
};

const image = (id: string, width: number) => `https://images.unsplash.com/${id}?auto=format&fit=crop&w=${width}&q=88`;

export const homepageMock = {
  heroImage: image("photo-1614253429340-98120bd6d753", 2400),
  bannerImage: image("photo-1603808033192-082d6919d3e1", 2200),
  storyImage: image("photo-1511556820780-d912e42b4980", 1400),
  processImage: image("photo-1495707902641-75cac588d2e9", 1400),
  collections: [
    { name: "The Gentleman’s Edit", description: "Measured silhouettes for everyday distinction.", image: image("photo-1614252235316-8c857d38b5f4", 1200), href: "#shoes" },
    { name: "The Carry Collection", description: "Refined companions for work and beyond.", image: image("photo-1590874103328-eac38a683ce7", 1200), href: "#bags" },
    { name: "The Essential Gift", description: "Small leather goods, thoughtfully finished.", image: image("photo-1627123424574-724758594e93", 1200), href: "#accessories" }
  ] satisfies ImageCollection[],
  categories: [
    { name: "Shoes", description: "Formals, loafers & more", image: image("photo-1608256246200-53e635b5b65f", 900), href: "#shoes" },
    { name: "Bags", description: "Totes, satchels & crossbodies", image: image("photo-1594223274512-ad4803739b7c", 900), href: "#bags" },
    { name: "Wallets", description: "Made for everyday carry", image: image("photo-1627123424574-724758594e93", 900), href: "#wallets" },
    { name: "Accessories", description: "Belts and finishing details", image: image("photo-1559563458-527698bf5295", 900), href: "#accessories" }
  ] satisfies ImageCollection[],
  bestSellers: [
    { name: "Mock Heritage Oxford", category: "Leather Shoes", price: "৳ 4,990", rating: "4.9", badge: "Best seller", image: image("photo-1614252235316-8c857d38b5f4", 1000) },
    { name: "Mock Executive Loafer", category: "Leather Shoes", price: "৳ 4,490", rating: "4.8", image: image("photo-1560769629-975ec94e6a86", 1000) },
    { name: "Mock Structured Tote", category: "Leather Bags", price: "৳ 3,990", rating: "4.9", badge: "Limited", image: image("photo-1594223274512-ad4803739b7c", 1000) },
    { name: "Mock Bifold Wallet", category: "Wallets", price: "৳ 1,790", rating: "4.8", image: image("photo-1627123424574-724758594e93", 1000) }
  ] satisfies MockProduct[],
  newArrivals: [
    { name: "Mock Brown Monk", category: "Leather Shoes", price: "৳ 5,990", rating: "4.9", badge: "New", image: image("photo-1603808033192-082d6919d3e1", 1000) },
    { name: "Mock Minimal Crossbody", category: "Leather Bags", price: "৳ 3,490", rating: "4.7", badge: "New", image: image("photo-1594633312681-425c7b97ccd1", 1000) },
    { name: "Mock Full-Grain Belt", category: "Accessories", price: "৳ 2,190", rating: "4.8", image: image("photo-1559563458-527698bf5295", 1000) },
    { name: "Mock Derby Essential", category: "Leather Shoes", price: "৳ 5,490", rating: "4.8", image: image("photo-1608256246200-53e635b5b65f", 1000) }
  ] satisfies MockProduct[],
  trust: [
    { title: "Selected leather", text: "Characterful materials chosen for enduring wear.", icon: Gem },
    { title: "Nationwide delivery", text: "Considered packing and dependable delivery across Bangladesh.", icon: Truck },
    { title: "Cash on delivery", text: "A familiar, trusted way to complete your order.", icon: BadgeDollarSign },
    { title: "Easy exchange", text: "Simple support when you need a different fit.", icon: RefreshCw }
  ] as { title: string; text: string; icon: LucideIcon }[],
  testimonials: [
    { quote: "The finish feels considered, the leather has real depth, and the presentation is exceptional.", name: "Nabila Rahman", location: "Dhaka" },
    { quote: "A rare local brand that understands restraint. My loafers have become the pair I reach for most.", name: "Arif Hossain", location: "Chattogram" },
    { quote: "Elegant without trying too hard. The tote has exactly the structure and detail I wanted.", name: "Mehzabin Noor", location: "Sylhet" }
  ],
  instagram: ["photo-1614252235316-8c857d38b5f4", "photo-1590874103328-eac38a683ce7", "photo-1608256246200-53e635b5b65f", "photo-1594223274512-ad4803739b7c", "photo-1627123424574-724758594e93", "photo-1559563458-527698bf5295"].map((id) => image(id, 800)),
  faqs: [
    { question: "Are ARVEN products made with genuine leather?", answer: "Our mock storefront content presents ARVEN pieces as selected genuine leather, chosen for lasting character and everyday comfort." },
    { question: "Do you offer cash on delivery?", answer: "Yes. Cash on delivery is presented as an available payment option across Bangladesh." },
    { question: "Can I exchange a product?", answer: "The storefront preview includes easy exchange support, subject to the final policy configured by the business." }
  ],
  paymentLabels: ["Cash on delivery", "bKash", "Nagad", "Cards"],
  process: ["Select", "Shape", "Finish"]
} as const;

export const trustShieldIcon = ShieldCheck;
