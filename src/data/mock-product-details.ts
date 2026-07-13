import { mockCatalogProducts, type MockCatalogProduct } from "@/data/mock-catalog";

export type MockProductDetail = MockCatalogProduct & {
  slug: string;
  gallery: string[];
  colors: string[];
  sizes: string[];
  description: string;
  specifications: { label: string; value: string }[];
  reviews: { name: string; location: string; rating: number; date: string; comment: string }[];
};

const galleryImages = [
  "https://images.unsplash.com/photo-1614252235316-8c857d38b5f4?auto=format&fit=crop&w=1600&q=90",
  "https://images.unsplash.com/photo-1603808033192-082d6919d3e1?auto=format&fit=crop&w=1600&q=90",
  "https://images.unsplash.com/photo-1608256246200-53e635b5b65f?auto=format&fit=crop&w=1600&q=90",
  "https://images.unsplash.com/photo-1560769629-975ec94e6a86?auto=format&fit=crop&w=1600&q=90"
];

function slugFromId(id: string) {
  return id.replace(/^mock-/, "");
}

export function getMockProductDetail(slug: string): MockProductDetail | undefined {
  const product = mockCatalogProducts.find((item) => slugFromId(item.id) === slug);
  if (!product) return undefined;

  const hasSizes = product.category === "Shoes";
  const hasColors = product.category !== "Accessories" || product.name.includes("Belt");

  return {
    ...product,
    slug,
    gallery: [product.image, ...galleryImages.filter((image) => image !== product.image)].slice(0, 4),
    colors: hasColors ? ["Black", "Chestnut", "Espresso"] : [],
    sizes: hasSizes ? ["39", "40", "41", "42", "43"] : [],
    description: `The ${product.name} is a mock ARVEN product created for the storefront experience. It balances clean proportion, considered leather, and practical comfort for an elevated everyday ritual.`,
    specifications: [
      { label: "Material", value: "Selected genuine leather" },
      { label: "Craft", value: "Mock hand-finished construction" },
      { label: "Origin", value: "Bangladesh" },
      { label: "Care", value: "Wipe gently; condition as needed" }
    ],
    reviews: [
      { name: "Nabila Rahman", location: "Dhaka", rating: 5, date: "Mock review", comment: "The material feels beautifully considered and the fit is exactly what I hoped for." },
      { name: "Arif Hossain", location: "Chattogram", rating: 5, date: "Mock review", comment: "An elegant piece with subtle detail. It looks even better in person." },
      { name: "Mehzabin Noor", location: "Sylhet", rating: 4, date: "Mock review", comment: "The finish and presentation both feel genuinely premium." }
    ]
  };
}

export function getMockProductSlugs() {
  return mockCatalogProducts.map((product) => slugFromId(product.id));
}

export function getMockRelatedProducts(product: MockProductDetail) {
  return mockCatalogProducts.filter((item) => item.id !== product.id && (item.category === product.category || item.brand === product.brand)).slice(0, 4);
}
