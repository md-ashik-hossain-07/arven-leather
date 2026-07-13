import { AccountPageHeader } from "@/components/account/account-page-header";
import { ProfileForm } from "@/components/account/profile-form";
import { Card } from "@/components/ui/card";

export default function ProfilePage() { return <div className="space-y-8"><AccountPageHeader title="Profile" description="Keep your personal details ready for a considered checkout." /><Card className="p-5 sm:p-7"><ProfileForm /></Card></div>; }
