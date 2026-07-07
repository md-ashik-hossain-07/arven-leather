import { brand } from "@/constants/brand";

export const siteConfig = {
  name: brand.name,
  description: brand.tagline,
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://arvenleather.com",
  ogImage: "/opengraph-image",
  links: {
    instagram: "https://instagram.com/arvenleather",
    facebook: "https://facebook.com/arvenleather"
  }
} as const;
