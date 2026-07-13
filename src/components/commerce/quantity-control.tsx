"use client";

import { Minus, Plus } from "lucide-react";

type QuantityControlProps = { value: number; onChange: (value: number) => void };

function QuantityControl({ value, onChange }: QuantityControlProps) {
  return <div className="flex h-10 items-center rounded-md border border-border"><button type="button" aria-label="Decrease quantity" disabled={value <= 1} onClick={() => onChange(value - 1)} className="grid size-9 place-items-center disabled:opacity-40"><Minus className="size-3.5" aria-hidden="true" /></button><span className="w-8 text-center text-sm font-semibold">{value}</span><button type="button" aria-label="Increase quantity" onClick={() => onChange(value + 1)} className="grid size-9 place-items-center"><Plus className="size-3.5" aria-hidden="true" /></button></div>;
}

export { QuantityControl };
