export const brand = {
  name: "ARVEN Leather",
  legalName: "ARVEN Leather Bangladesh",
  tagline: "Premium leather. Timeless style.",
  origin: "Bangladesh",
  locale: "bn-BD",
  defaultCurrency: "BDT",
  logo: {
    src: "/brand/arven-logo.png",
    alt: "ARVEN Leather official logo",
    width: 1254,
    height: 1254
  }
} as const;

export const productCategories = [
  { id: "shoes", label: "Shoes", title: "Leather Shoes", href: "#collections" },
  { id: "bags", label: "Bags", title: "Leather Bags", href: "#collections" },
  { id: "wallets", label: "Wallets", title: "Wallets", href: "#collections" },
  { id: "accessories", label: "Accessories", title: "Accessories", href: "#collections" }
] as const;

export type ProductCategory = (typeof productCategories)[number];
