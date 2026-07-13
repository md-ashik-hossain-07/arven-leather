export const storefrontNavigation = [
  { label: "Shop", href: "/shop" },
  { label: "New arrivals", href: "/shop" },
  { label: "Shoes", href: "#shoes" },
  { label: "Bags", href: "#bags" },
  { label: "Wallets", href: "#wallets" },
  { label: "Accessories", href: "#accessories" }
] as const;

export const footerNavigation = {
  shop: [
    { label: "New arrivals", href: "#new-arrivals" },
    { label: "Leather shoes", href: "#shoes" },
    { label: "Leather bags", href: "#bags" },
    { label: "Wallets & accessories", href: "#accessories" }
  ],
  support: [
    { label: "Contact us", href: "#contact" },
    { label: "Delivery & returns", href: "#delivery" },
    { label: "Leather care", href: "#care" },
    { label: "Size guide", href: "#size-guide" }
  ],
  company: [
    { label: "Our story", href: "#our-story" },
    { label: "Craftsmanship", href: "#craftsmanship" },
    { label: "Privacy policy", href: "#privacy" },
    { label: "Terms & conditions", href: "#terms" }
  ]
} as const;
