import Image from "next/image";

import { brand } from "@/constants/brand";
import { cn } from "@/lib/utils";

type BrandLogoProps = {
  className?: string;
  imageClassName?: string;
  priority?: boolean;
  sizes?: string;
};

export function BrandLogo({ className, imageClassName, priority = false, sizes = "160px" }: BrandLogoProps) {
  return (
    <div className={cn("relative inline-flex aspect-square items-center justify-center", className)}>
      <Image
        src={brand.logo.src}
        alt={brand.logo.alt}
        width={brand.logo.width}
        height={brand.logo.height}
        priority={priority}
        sizes={sizes}
        className={cn("h-full w-full object-contain", imageClassName)}
      />
    </div>
  );
}
