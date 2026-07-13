import type { ButtonHTMLAttributes, ReactNode } from "react";

import { cn } from "@/lib/utils";

type HeaderActionButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  children: ReactNode;
  badge?: string | number;
};

function HeaderActionButton({ children, badge, className, ...props }: HeaderActionButtonProps) {
  return (
    <button
      type="button"
      className={cn("relative inline-flex size-10 items-center justify-center rounded-full text-white transition-colors hover:bg-white/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-arven-gold", className)}
      {...props}
    >
      {children}
      {badge !== undefined ? (
        <span className="absolute right-0 top-0 grid min-w-4 place-items-center rounded-full bg-arven-gold px-1 text-[10px] font-bold leading-4 text-arven-black">
          {badge}
        </span>
      ) : null}
    </button>
  );
}

export { HeaderActionButton };
