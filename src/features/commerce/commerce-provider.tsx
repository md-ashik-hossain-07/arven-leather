"use client";

import { createContext, useContext, useMemo, useState, type PropsWithChildren } from "react";

import type { MockCatalogProduct } from "@/data/mock-catalog";

export type CartItem = { key: string; product: MockCatalogProduct; quantity: number; color?: string; size?: string };
type ItemOptions = { color?: string; size?: string };

type CommerceContextValue = {
  cartItems: CartItem[];
  wishlistIds: string[];
  cartCount: number;
  cartSubtotal: number;
  addToCart: (product: MockCatalogProduct, quantity?: number, options?: ItemOptions) => void;
  removeFromCart: (key: string) => void;
  updateQuantity: (key: string, quantity: number) => void;
  toggleWishlist: (productId: string) => void;
  clearCart: () => void;
};

const CommerceContext = createContext<CommerceContextValue | null>(null);

function CommerceProvider({ children }: PropsWithChildren) {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const [wishlistIds, setWishlistIds] = useState<string[]>([]);

  const value = useMemo<CommerceContextValue>(() => ({
    cartItems,
    wishlistIds,
    cartCount: cartItems.reduce((count, item) => count + item.quantity, 0),
    cartSubtotal: cartItems.reduce((total, item) => total + item.product.price * item.quantity, 0),
    addToCart: (product, quantity = 1, options = {}) => {
      const key = `${product.id}-${options.color ?? "default"}-${options.size ?? "default"}`;
      setCartItems((items) => {
        const existingItem = items.find((item) => item.key === key);
        if (existingItem) return items.map((item) => item.key === key ? { ...item, quantity: item.quantity + quantity } : item);
        return [...items, { key, product, quantity, ...options }];
      });
    },
    removeFromCart: (key) => setCartItems((items) => items.filter((item) => item.key !== key)),
    updateQuantity: (key, quantity) => setCartItems((items) => quantity <= 0 ? items.filter((item) => item.key !== key) : items.map((item) => item.key === key ? { ...item, quantity } : item)),
    toggleWishlist: (productId) => setWishlistIds((items) => items.includes(productId) ? items.filter((id) => id !== productId) : [...items, productId]),
    clearCart: () => setCartItems([])
  }), [cartItems, wishlistIds]);

  return <CommerceContext.Provider value={value}>{children}</CommerceContext.Provider>;
}

function useCommerce() {
  const context = useContext(CommerceContext);
  if (!context) throw new Error("useCommerce must be used within CommerceProvider");
  return context;
}

export { CommerceProvider, useCommerce };
