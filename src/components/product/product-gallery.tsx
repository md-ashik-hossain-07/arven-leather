"use client";

import { useState } from "react";
import { Expand } from "lucide-react";

type ProductGalleryProps = { images: readonly string[]; productName: string };

function ProductGallery({ images, productName }: ProductGalleryProps) {
  const [activeIndex, setActiveIndex] = useState(0);
  const activeImage = images[activeIndex] ?? images[0];

  return <div><div className="group relative aspect-[4/5] overflow-hidden rounded-lg bg-muted"><img src={activeImage} alt={`${productName} view ${activeIndex + 1}`} className="h-full w-full cursor-zoom-in object-cover transition duration-700 ease-out group-hover:scale-125" /><span className="absolute bottom-4 right-4 grid size-10 place-items-center rounded-full bg-card/90 text-foreground shadow-sm"><Expand className="size-4" aria-hidden="true" /></span></div><div className="mt-4 grid grid-cols-4 gap-3">{images.map((image, index) => <button key={image} type="button" onClick={() => setActiveIndex(index)} aria-label={`Show ${productName} image ${index + 1}`} aria-pressed={activeIndex === index} className={`aspect-square overflow-hidden rounded-md border-2 bg-muted transition ${activeIndex === index ? "border-secondary" : "border-transparent hover:border-border"}`}><img src={image} alt="" loading="lazy" decoding="async" className="h-full w-full object-cover" /></button>)}</div></div>;
}

export { ProductGallery };
