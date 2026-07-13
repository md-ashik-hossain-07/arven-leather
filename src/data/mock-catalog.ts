export type MockCatalogProduct = {
  id: string;
  name: string;
  category: "Shoes" | "Bags" | "Wallets" | "Accessories";
  brand: "ARVEN Atelier" | "ARVEN Essentials" | "ARVEN Reserve";
  price: number;
  oldPrice?: number;
  rating: number;
  reviewCount: number;
  stock: "In stock" | "Low stock" | "Out of stock";
  badge?: "New" | "Best seller" | "Limited" | "Archive price";
  image: string;
  newestRank: number;
  popularity: number;
};

const image = (id: string) => `https://images.unsplash.com/${id}?auto=format&fit=crop&w=1100&q=88`;

export const mockCatalogProducts: MockCatalogProduct[] = [
  { id: "mock-heritage-oxford", name: "Mock Heritage Oxford", category: "Shoes", brand: "ARVEN Reserve", price: 4990, oldPrice: 5490, rating: 4.9, reviewCount: 42, stock: "In stock", badge: "Best seller", image: image("photo-1614252235316-8c857d38b5f4"), newestRank: 7, popularity: 98 },
  { id: "mock-executive-loafer", name: "Mock Executive Loafer", category: "Shoes", brand: "ARVEN Atelier", price: 4490, rating: 4.8, reviewCount: 31, stock: "In stock", image: image("photo-1560769629-975ec94e6a86"), newestRank: 5, popularity: 93 },
  { id: "mock-brown-monk", name: "Mock Brown Monk", category: "Shoes", brand: "ARVEN Reserve", price: 5990, rating: 4.9, reviewCount: 19, stock: "Low stock", badge: "New", image: image("photo-1603808033192-082d6919d3e1"), newestRank: 12, popularity: 90 },
  { id: "mock-derby-essential", name: "Mock Derby Essential", category: "Shoes", brand: "ARVEN Essentials", price: 5490, oldPrice: 5990, rating: 4.8, reviewCount: 27, stock: "In stock", badge: "Archive price", image: image("photo-1608256246200-53e635b5b65f"), newestRank: 3, popularity: 88 },
  { id: "mock-structured-tote", name: "Mock Structured Tote", category: "Bags", brand: "ARVEN Atelier", price: 3990, rating: 4.9, reviewCount: 38, stock: "In stock", badge: "Limited", image: image("photo-1594223274512-ad4803739b7c"), newestRank: 8, popularity: 96 },
  { id: "mock-minimal-crossbody", name: "Mock Minimal Crossbody", category: "Bags", brand: "ARVEN Essentials", price: 3490, rating: 4.7, reviewCount: 18, stock: "Low stock", badge: "New", image: image("photo-1594633312681-425c7b97ccd1"), newestRank: 11, popularity: 85 },
  { id: "mock-city-satchel", name: "Mock City Satchel", category: "Bags", brand: "ARVEN Reserve", price: 6490, rating: 4.9, reviewCount: 12, stock: "In stock", image: image("photo-1548036328-c9fa89d128fa"), newestRank: 9, popularity: 82 },
  { id: "mock-bifold-wallet", name: "Mock Bifold Wallet", category: "Wallets", brand: "ARVEN Essentials", price: 1790, rating: 4.8, reviewCount: 51, stock: "In stock", badge: "Best seller", image: image("photo-1627123424574-724758594e93"), newestRank: 4, popularity: 97 },
  { id: "mock-card-holder", name: "Mock Card Holder", category: "Wallets", brand: "ARVEN Atelier", price: 1190, rating: 4.7, reviewCount: 15, stock: "In stock", badge: "New", image: image("photo-1627123424574-724758594e93"), newestRank: 10, popularity: 78 },
  { id: "mock-travel-wallet", name: "Mock Travel Wallet", category: "Wallets", brand: "ARVEN Reserve", price: 2490, oldPrice: 2790, rating: 4.8, reviewCount: 22, stock: "Out of stock", image: image("photo-1627123424574-724758594e93"), newestRank: 1, popularity: 74 },
  { id: "mock-full-grain-belt", name: "Mock Full-Grain Belt", category: "Accessories", brand: "ARVEN Atelier", price: 2190, rating: 4.8, reviewCount: 35, stock: "In stock", image: image("photo-1559563458-527698bf5295"), newestRank: 6, popularity: 89 },
  { id: "mock-key-organizer", name: "Mock Key Organizer", category: "Accessories", brand: "ARVEN Essentials", price: 990, rating: 4.6, reviewCount: 9, stock: "In stock", badge: "New", image: image("photo-1559563458-527698bf5295"), newestRank: 13, popularity: 70 }
];

export const catalogCategories = ["Shoes", "Bags", "Wallets", "Accessories"] as const;
export const catalogBrands = ["ARVEN Atelier", "ARVEN Essentials", "ARVEN Reserve"] as const;
export const catalogPriceRange = { min: 0, max: 7000 } as const;
