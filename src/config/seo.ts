import type { Metadata } from "next";

import { siteConfig } from "@/config/site";
import { brand } from "@/constants/brand";

export const defaultMetadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: siteConfig.name,
    template: "%s | " + siteConfig.name
  },
  description: siteConfig.description,
  applicationName: siteConfig.name,
  authors: [{ name: brand.name }],
  creator: brand.name,
  publisher: brand.name,
  icons: {
    icon: [
      {
        url: "/favicon.png",
        type: "image/png",
        sizes: "1254x1254"
      }
    ],
    apple: [
      {
        url: "/brand/arven-logo.png",
        type: "image/png",
        sizes: "1254x1254"
      }
    ]
  },
  formatDetection: {
    telephone: false,
    address: false,
    email: false
  },
  openGraph: {
    type: "website",
    locale: "bn_BD",
    siteName: siteConfig.name,
    title: siteConfig.name,
    description: siteConfig.description,
    url: siteConfig.url,
    images: [
      {
        url: brand.logo.src,
        width: brand.logo.width,
        height: brand.logo.height,
        alt: brand.logo.alt
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: siteConfig.name,
    description: siteConfig.description,
    images: [brand.logo.src]
  },
  robots: {
    index: true,
    follow: true
  }
};
