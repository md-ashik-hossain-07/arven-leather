import type { Metadata, Viewport } from "next";
import type { ReactNode } from "react";

import "./globals.css";

import { RootShell } from "@/components/layout/root-shell";
import { defaultMetadata } from "@/config/seo";
import { cn } from "@/lib/utils";
import { hindSiliguri, poppins } from "@/styles/fonts";

export const metadata: Metadata = defaultMetadata;

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#0A0A08"
};

export default function RootLayout({ children }: Readonly<{ children: ReactNode }>) {
  return (
    <html lang="en" className={cn(poppins.variable, hindSiliguri.variable)} suppressHydrationWarning>
      <body>
        <RootShell>{children}</RootShell>
      </body>
    </html>
  );
}
