import type { ReactNode } from "react";

type AccountPageHeaderProps = { title: string; description?: string; action?: ReactNode };

function AccountPageHeader({ title, description, action }: AccountPageHeaderProps) {
  return <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between"><div><h1 className="text-3xl font-semibold sm:text-4xl">{title}</h1>{description ? <p className="mt-3 text-muted-foreground">{description}</p> : null}</div>{action}</div>;
}

export { AccountPageHeader };
