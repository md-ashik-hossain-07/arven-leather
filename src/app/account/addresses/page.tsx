import { AddressBook } from "@/components/account/address-book";
import { AccountPageHeader } from "@/components/account/account-page-header";

export default function AddressesPage() { return <div className="space-y-8"><AccountPageHeader title="Address book" description="Manage the delivery addresses used with your mock account." /><AddressBook /></div>; }
