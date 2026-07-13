"use client";

import { type FormEvent, useState } from "react";
import { Edit3, MapPin, Plus } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { mockAddresses } from "@/data/mock-account";

export function AddressBook() {
  const [showForm, setShowForm] = useState(false);
  const [added, setAdded] = useState(false);
  const submit = (event: FormEvent<HTMLFormElement>) => { event.preventDefault(); setAdded(true); setShowForm(false); };
  return <div className="space-y-5"><div className="grid gap-4 md:grid-cols-2">{mockAddresses.map((address) => <Card key={address.id} className="p-5"><div className="flex items-start justify-between gap-4"><div><div className="flex items-center gap-2"><MapPin className="size-4 text-accent" /><h2 className="font-medium text-foreground">{address.label}</h2>{address.default ? <span className="rounded-full bg-secondary/10 px-2 py-0.5 text-xs font-medium text-secondary">Default</span> : null}</div><p className="mt-5 text-sm font-medium text-foreground">{address.recipient}</p><p className="mt-1 text-sm leading-6 text-muted-foreground">{address.address}<br />{address.city}<br />{address.phone}</p></div><button type="button" aria-label={`Edit ${address.label} address`} className="text-muted-foreground transition hover:text-accent"><Edit3 className="size-4" /></button></div></Card>)}</div>{added ? <p className="rounded-md bg-success/10 p-3 text-sm text-success" role="status">Your mock address was saved for this session.</p> : null}{showForm ? <Card className="p-5 sm:p-7"><form onSubmit={submit} className="grid gap-4 sm:grid-cols-2"><div><label htmlFor="address-label" className="mb-2 block text-sm font-medium">Address label</label><Input id="address-label" required placeholder="Home" /></div><div><label htmlFor="address-recipient" className="mb-2 block text-sm font-medium">Recipient</label><Input id="address-recipient" required placeholder="Your name" /></div><div className="sm:col-span-2"><label htmlFor="address-line" className="mb-2 block text-sm font-medium">Address</label><Input id="address-line" required placeholder="House, road and area" /></div><div><label htmlFor="address-city" className="mb-2 block text-sm font-medium">City</label><Input id="address-city" required placeholder="Dhaka" /></div><div><label htmlFor="address-phone" className="mb-2 block text-sm font-medium">Phone</label><Input id="address-phone" required type="tel" placeholder="01700 000000" /></div><div className="flex gap-3 sm:col-span-2"><Button type="submit">Save mock address</Button><Button type="button" variant="ghost" onClick={() => setShowForm(false)}>Cancel</Button></div></form></Card> : <Button type="button" variant="outline" onClick={() => setShowForm(true)}><Plus className="size-4" /> Add an address</Button>}</div>;
}
