import Link from "next/link";
import { Facebook, Instagram, Mail, MapPin, Send } from "lucide-react";

import { BrandLogo } from "@/components/brand/brand-logo";
import { Container } from "@/components/layout/container";
import { Button } from "@/components/ui/button";
import { brand } from "@/constants/brand";
import { footerNavigation } from "@/constants/navigation";
import { siteConfig } from "@/config/site";

function FooterLinkGroup({ title, links }: { title: string; links: readonly { label: string; href: string }[] }) {
  return <div><h2 className="text-xs font-semibold uppercase tracking-[0.22em] text-arven-gold">{title}</h2><ul className="mt-5 space-y-3">{links.map((link) => <li key={link.href}><Link href={link.href} className="text-sm text-white/62 transition hover:text-white">{link.label}</Link></li>)}</ul></div>;
}

export function SiteFooter() {
  return (
    <footer className="bg-arven-black text-white">
      <section className="border-y border-white/10 bg-white/[0.03]"><Container className="grid gap-8 py-10 md:grid-cols-[1fr_auto] md:items-center md:py-12"><div><p className="text-xs font-semibold uppercase tracking-[0.24em] text-arven-gold">The ARVEN Letter</p><h2 className="mt-3 text-2xl font-semibold sm:text-3xl">Private access to new leather arrivals.</h2><p className="mt-3 max-w-xl text-sm leading-6 text-white/58">Receive considered updates, early access, and care notes. No noise.</p></div><form className="flex w-full max-w-md gap-2" aria-label="Newsletter subscription"><label className="sr-only" htmlFor="footer-email">Email address</label><input id="footer-email" type="email" placeholder="Your email address" className="h-11 min-w-0 flex-1 rounded-md border border-white/15 bg-white/5 px-4 text-sm text-white outline-none placeholder:text-white/40 focus:border-arven-gold focus:ring-2 focus:ring-arven-gold/20" /><Button type="button" variant="secondary" size="icon" aria-label="Subscribe to newsletter"><Send className="size-4" aria-hidden="true" /></Button></form></Container></section>
      <Container className="grid gap-10 py-14 sm:grid-cols-2 lg:grid-cols-[1.35fr_0.8fr_0.8fr_0.8fr]"><div><BrandLogo className="size-20" sizes="80px" /><p className="mt-5 max-w-sm text-sm leading-7 text-white/62">{brand.tagline} Crafted for a modern leather lifestyle from Bangladesh.</p><p className="mt-5 flex items-center gap-2 text-sm text-white/55"><MapPin className="size-4 text-arven-gold" aria-hidden="true" /> Proudly based in Bangladesh</p><div className="mt-6 flex gap-2"><a href={siteConfig.links.instagram} aria-label="ARVEN Leather on Instagram" className="grid size-9 place-items-center rounded-full border border-white/15 text-white/70 transition hover:border-arven-gold hover:text-arven-gold"><Instagram className="size-4" aria-hidden="true" /></a><a href={siteConfig.links.facebook} aria-label="ARVEN Leather on Facebook" className="grid size-9 place-items-center rounded-full border border-white/15 text-white/70 transition hover:border-arven-gold hover:text-arven-gold"><Facebook className="size-4" aria-hidden="true" /></a><a href="mailto:hello@arvenleather.com" aria-label="Email ARVEN Leather" className="grid size-9 place-items-center rounded-full border border-white/15 text-white/70 transition hover:border-arven-gold hover:text-arven-gold"><Mail className="size-4" aria-hidden="true" /></a></div></div><FooterLinkGroup title="Shop" links={footerNavigation.shop} /><FooterLinkGroup title="Support" links={footerNavigation.support} /><FooterLinkGroup title="About ARVEN" links={footerNavigation.company} /></Container>
      <div className="border-t border-white/10"><Container className="flex flex-col gap-3 py-5 text-xs text-white/42 sm:flex-row sm:items-center sm:justify-between"><p>© 2026 {brand.name}. All rights reserved.</p><p>Designed for a considered leather life.</p></Container></div>
    </footer>
  );
}
