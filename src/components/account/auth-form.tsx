"use client";

import { useState, type FormEvent } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export type AuthFormKind = "login" | "register" | "forgot" | "reset" | "otp";
type AuthFormProps = { kind: AuthFormKind };

const formContent = {
  login: { title: "Welcome back", description: "Sign in to view your ARVEN account.", submit: "Sign in" },
  register: { title: "Create your account", description: "A considered place for your orders and saved pieces.", submit: "Create account" },
  forgot: { title: "Reset your password", description: "We will send a mock reset instruction to your email.", submit: "Send reset link" },
  reset: { title: "Choose a new password", description: "Create a secure password for your mock account.", submit: "Reset password" },
  otp: { title: "Verify your number", description: "Enter the mock one-time code sent to your mobile number.", submit: "Verify code" }
} as const;

function AuthForm({ kind }: AuthFormProps) {
  const [submitted, setSubmitted] = useState(false);
  const router = useRouter();
  const content = formContent[kind];
  const submit = (event: FormEvent<HTMLFormElement>) => { event.preventDefault(); setSubmitted(true); if (kind === "login" || kind === "register" || kind === "reset" || kind === "otp") router.push("/account"); };
  return <div className="mx-auto w-full max-w-md rounded-xl border border-border bg-card p-6 shadow-card sm:p-8"><p className="text-xs font-bold uppercase tracking-[0.2em] text-secondary">ARVEN account</p><h1 className="mt-3 text-3xl font-semibold">{content.title}</h1><p className="mt-3 text-sm leading-6 text-muted-foreground">{content.description}</p><form onSubmit={submit} className="mt-7 space-y-4">{kind === "register" ? <div><label htmlFor="auth-name" className="mb-2 block text-sm font-medium">Full name</label><Input id="auth-name" required /></div> : null}{kind === "login" || kind === "register" || kind === "forgot" ? <div><label htmlFor="auth-email" className="mb-2 block text-sm font-medium">Email address</label><Input id="auth-email" type="email" required placeholder="you@example.com" /></div> : null}{kind === "login" || kind === "register" || kind === "reset" ? <div><label htmlFor="auth-password" className="mb-2 block text-sm font-medium">{kind === "reset" ? "New password" : "Password"}</label><Input id="auth-password" type="password" required minLength={8} /></div> : null}{kind === "otp" ? <div><label htmlFor="auth-otp" className="mb-2 block text-sm font-medium">One-time code</label><Input id="auth-otp" required inputMode="numeric" maxLength={6} placeholder="000000" className="text-center text-lg tracking-[0.45em]" /></div> : null}<Button type="submit" className="w-full">{content.submit}</Button></form>{submitted && kind === "forgot" ? <p className="mt-4 rounded-md bg-success/10 p-3 text-sm text-success">Mock reset instruction sent.</p> : null}<div className="mt-6 text-center text-sm text-muted-foreground">{kind === "login" ? <>New to ARVEN? <Link href="/register" className="font-medium text-secondary hover:underline">Create an account</Link><Link href="/forgot-password" className="mt-3 block font-medium text-secondary hover:underline">Forgot password?</Link></> : <Link href="/login" className="font-medium text-secondary hover:underline">Back to sign in</Link>}</div></div>;
}

export { AuthForm };
