"use client";

import { useEffect, useRef, type ReactNode } from "react";
import { AnimatePresence, motion } from "framer-motion";

import { cn } from "@/lib/utils";

type OverlayPanelProps = {
  children: ReactNode;
  isOpen: boolean;
  onClose: () => void;
  label: string;
  side?: "left" | "right" | "center";
  className?: string;
};

function OverlayPanel({ children, isOpen, onClose, label, side = "right", className }: OverlayPanelProps) {
  const panelRef = useRef<HTMLElement>(null);

  useEffect(() => {
    if (!isOpen) return;

    const previousOverflow = document.body.style.overflow;
    const focusableSelector = "a[href], button:not([disabled]), input:not([disabled]), select:not([disabled]), textarea:not([disabled]), [tabindex]:not([tabindex='-1'])";
    const focusFirstElement = () => panelRef.current?.querySelector<HTMLElement>(focusableSelector)?.focus();
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") onClose();
      if (event.key !== "Tab" || !panelRef.current) return;

      const focusableElements = Array.from(panelRef.current.querySelectorAll<HTMLElement>(focusableSelector));
      if (focusableElements.length === 0) return;

      const firstElement = focusableElements.at(0);
      const lastElement = focusableElements.at(-1);
      if (!firstElement || !lastElement) return;
      if (event.shiftKey && document.activeElement === firstElement) {
        event.preventDefault();
        lastElement.focus();
      } else if (!event.shiftKey && document.activeElement === lastElement) {
        event.preventDefault();
        firstElement.focus();
      }
    };

    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKeyDown);
    requestAnimationFrame(focusFirstElement);
    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [isOpen, onClose]);

  const panelAnimation = side === "center"
    ? { initial: { opacity: 0, y: 12, scale: 0.98 }, animate: { opacity: 1, y: 0, scale: 1 }, exit: { opacity: 0, y: 12, scale: 0.98 } }
    : { initial: { x: side === "left" ? "-100%" : "100%" }, animate: { x: 0 }, exit: { x: side === "left" ? "-100%" : "100%" } };

  return (
    <AnimatePresence>
      {isOpen ? (
        <div className="fixed inset-0 z-[100] flex items-start justify-center p-4 sm:p-6" role="presentation">
          <motion.button type="button" aria-label={`Close ${label}`} className="absolute inset-0 bg-arven-black/55 backdrop-blur-[2px]" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onClick={onClose} />
          <motion.section
            role="dialog"
            aria-modal="true"
            aria-label={label}
            ref={panelRef}
            className={cn(
              "relative z-10 w-full bg-card text-foreground shadow-floating",
              side === "center" ? "mt-[10svh] max-w-2xl rounded-xl" : "absolute inset-y-0 max-w-md overflow-y-auto",
              side === "left" ? "left-0" : side === "right" ? "right-0" : "",
              className
            )}
            initial={panelAnimation.initial}
            animate={panelAnimation.animate}
            exit={panelAnimation.exit}
            transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
          >
            {children}
          </motion.section>
        </div>
      ) : null}
    </AnimatePresence>
  );
}

export { OverlayPanel };
