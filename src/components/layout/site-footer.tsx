import { MapPin } from "lucide-react";

import { BrandLogo } from "@/components/brand/brand-logo";
import { Container } from "@/components/layout/container";
import { brand, productCategories } from "@/constants/brand";

export function SiteFooter() {
  return (
    <footer className="border-t border-white/10 bg-arven-black text-white">
      <Container className="grid gap-10 py-12 md:grid-cols-[1.2fr_1fr_1fr] md:py-16">
        <div>
          <BrandLogo className="size-24" sizes="96px" />
          <p className="mt-5 max-w-sm text-sm leading-7 text-white/60">{brand.tagline} Crafted for a modern leather lifestyle from Bangladesh.</p>
        </div>

        <div>
          <h2 className="text-xs font-semibold uppercase tracking-[0.28em] text-arven-gold">Collections</h2>
          <ul className="mt-5 space-y-3 text-sm text-white/62">
            {productCategories.map((category) => (
              <li key={category.id}>{category.title}</li>
            ))}
          </ul>
        </div>

        <div>
          <h2 className="text-xs font-semibold uppercase tracking-[0.28em] text-arven-gold">Origin</h2>
          <p className="mt-5 flex items-center gap-3 text-sm text-white/62">
            <MapPin className="size-4 text-arven-gold" aria-hidden="true" /> Bangladesh
          </p>
        </div>
      </Container>
      <div className="border-t border-white/10 py-5 text-center text-xs uppercase tracking-[0.22em] text-white/38">© 2026 ARVEN Leather</div>
    </footer>
  );
}
