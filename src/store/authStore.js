import create from "zustand";
import { persist, devtools } from "zustand/middleware";

const useAuthStore = create(
  devtools(
    persist(
      (set) => ({
        token: null,
        user: null, // {id, name, role}
        setAuth: (token, user) => set({ token, user }),
        logout: () => {
          set({ token: null, user: null });
          // optionally clear cart on logout:
          try {
            const cartStore = require("./cartStore").default;
            cartStore.getState().clearCart();
          } catch (e) {
            // ignore if circular import or not desired
          }
        },
      }),
      { name: "sethji-auth" }
    )
  )
);

export default useAuthStore;
