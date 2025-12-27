// cartStore.js
import { create } from "zustand";
import { persist } from "zustand/middleware";

export const useCartStore = create(
  persist(
    (set, get) => ({
      cart: {},

      addItem: (product) =>
        set((state) => {
          const existing = state.cart[product.id];
          if (existing) {
            return {
              cart: {
                ...state.cart,
                [product.id]: { ...existing, qty: existing.qty + 1 },
              },
            };
          }
          return {
            cart: {
              ...state.cart,
              [product.id]: { ...product, qty: 1 },
            },
          };
        }),

      removeItem: (productId) =>
        set((state) => {
          const existing = state.cart[productId];
          if (!existing) return { cart: state.cart };
          if (existing.qty <= 1) {
            const copy = { ...state.cart };
            delete copy[productId];
            return { cart: copy };
          }
          return {
            cart: {
              ...state.cart,
              [productId]: { ...existing, qty: existing.qty - 1 },
            },
          };
        }),

      // ✅ Pure logic, no confirm here
      clearCart: () => set({ cart: {} }),

      getTotalCount: () =>
        Object.values(get().cart).reduce((s, it) => s + it.qty, 0),

      getTotalPrice: () =>
        Object.values(get().cart).reduce((s, it) => s + it.qty * it.price, 0),
    }),
    {
      name: "sethji-cart", // localStorage key
    }
  )
);

export default useCartStore;
