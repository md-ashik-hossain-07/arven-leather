"use client";

import type { ReactNode } from "react";
import { motion } from "framer-motion";

import { cn } from "@/lib/utils";

type RevealProps = { children: ReactNode; className?: string; delay?: number };

function Reveal({ children, className, delay = 0 }: RevealProps) {
  return <motion.div className={cn(className)} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-72px" }} transition={{ duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] }}>{children}</motion.div>;
}

export { Reveal };
