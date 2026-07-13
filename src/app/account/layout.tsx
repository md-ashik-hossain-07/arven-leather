import type { ReactNode } from "react";
import { AccountSidebar } from "@/components/account/account-sidebar";
import { SiteFooter } from "@/components/layout/site-footer";
import { SiteHeader } from "@/components/layout/site-header";
import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";

export default function AccountLayout({ children }: { children: ReactNode }) {
  return <><SiteHeader /><main><Section className="py-10 sm:py-14"><Container><div className="grid gap-8 lg:grid-cols-[15rem_minmax(0,1fr)] lg:gap-12"><AccountSidebar /><div className="min-w-0">{children}</div></div></Container></Section></main><SiteFooter /></>;
}
