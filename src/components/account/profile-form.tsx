"use client";

import { type FormEvent, useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { mockCustomer } from "@/data/mock-account";

export function ProfileForm() {
  const [saved, setSaved] = useState(false);
  const submit = (event: FormEvent<HTMLFormElement>) => { event.preventDefault(); setSaved(true); };
  return <form onSubmit={submit} className="grid gap-5 sm:grid-cols-2"><div><label htmlFor="profile-name" className="mb-2 block text-sm font-medium">Full name</label><Input id="profile-name" defaultValue={mockCustomer.name} required /></div><div><label htmlFor="profile-email" className="mb-2 block text-sm font-medium">Email address</label><Input id="profile-email" type="email" defaultValue={mockCustomer.email} required /></div><div><label htmlFor="profile-phone" className="mb-2 block text-sm font-medium">Phone number</label><Input id="profile-phone" type="tel" defaultValue={mockCustomer.phone} required /></div><div><label htmlFor="profile-birthday" className="mb-2 block text-sm font-medium">Birthday <span className="text-muted-foreground">(optional)</span></label><Input id="profile-birthday" type="date" /></div><div className="sm:col-span-2 flex flex-wrap items-center gap-3 pt-2"><Button type="submit">Save mock changes</Button>{saved ? <p className="text-sm text-success" role="status">Your mock profile has been updated for this session.</p> : null}</div></form>;
}
