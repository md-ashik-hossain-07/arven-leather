import { AuthForm, type AuthFormKind } from "@/components/account/auth-form";
import { SiteFooter } from "@/components/layout/site-footer";
import { SiteHeader } from "@/components/layout/site-header";
import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";

export function AuthPageShell({ kind }: { kind: AuthFormKind }) {
  return <><SiteHeader /><main><Section className="py-14 sm:py-20"><Container><AuthForm kind={kind} /></Container></Section></main><SiteFooter /></>;
}
