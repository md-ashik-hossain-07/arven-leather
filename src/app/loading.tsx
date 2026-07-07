import { BrandLogo } from "@/components/brand/brand-logo";

export default function Loading() {
  return (
    <main className="grid min-h-svh place-items-center bg-arven-black text-white">
      <div className="flex flex-col items-center gap-6">
        <BrandLogo className="size-28" sizes="112px" priority />
        <div className="h-px w-32 overflow-hidden bg-white/10">
          <div className="h-full w-1/2 animate-[arven-load_1.15s_ease-in-out_infinite] bg-arven-gold" />
        </div>
      </div>
    </main>
  );
}
