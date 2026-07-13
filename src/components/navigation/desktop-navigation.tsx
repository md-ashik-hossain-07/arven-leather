import Link from "next/link";

import { storefrontNavigation } from "@/constants/navigation";

function DesktopNavigation() {
  return (
    <nav aria-label="Main navigation" className="hidden lg:block">
      <ul className="flex items-center gap-6 xl:gap-8">
        {storefrontNavigation.map((item) => (
          <li key={item.href}>
            <Link href={item.href} className="text-[11px] font-semibold uppercase tracking-[0.2em] text-white/72 transition-colors hover:text-arven-gold focus-visible:outline-none focus-visible:text-arven-gold">
              {item.label}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export { DesktopNavigation };
