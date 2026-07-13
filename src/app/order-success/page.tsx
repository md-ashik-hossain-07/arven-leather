import { CheckCircle2, PackageCheck } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Container } from "@/components/layout/container";
import { Section } from "@/components/layout/section";
import { SiteFooter } from "@/components/layout/site-footer";
import { SiteHeader } from "@/components/layout/site-header";

export default function OrderSuccessPage() { return <><SiteHeader /><main><Section><Container size="content"><div className="mx-auto max-w-xl rounded-xl border border-border bg-card px-6 py-14 text-center shadow-card sm:px-12"><div className="mx-auto grid size-16 place-items-center rounded-full bg-success/10 text-success"><CheckCircle2 className="size-8" aria-hidden="true" /></div><p className="mt-6 text-xs font-bold uppercase tracking-[0.2em] text-secondary">Mock order confirmed</p><h1 className="mt-3 text-3xl font-semibold">Thank you for choosing ARVEN.</h1><p className="mt-4 text-sm leading-7 text-muted-foreground">Your mock order reference is <strong className="text-foreground">ARV-MOCK-2026</strong>. No payment was processed and no order was sent.</p><div className="mt-8 rounded-lg bg-muted/60 p-4 text-left"><div className="flex items-center gap-3"><PackageCheck className="size-5 text-secondary" aria-hidden="true" /><div><p className="text-sm font-semibold">What happens next?</p><p className="mt-1 text-xs leading-5 text-muted-foreground">In a live flow, we would confirm your order and delivery details here.</p></div></div></div><Button asChild className="mt-8"><a href="/shop">Continue shopping</a></Button></div></Container></Section></main><SiteFooter /></>; }
