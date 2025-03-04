import { create } from "zustand";

export const useProductStore = create((set) => ({
  cart: 0,
  addToCart: () => set((state) => ({ cart: state.cart + 1 })),
  removeFromCart: () =>
    set((state) => ({ cart: state.cart > 0 ? state.cart - 1 : 0 })),
}));

export const useSideBarStore = create((set) => ({
  SideBarOpen: false,
  isOpen: () => set({ SideBarOpen: true }),
  isClosed: () => set({ SideBarOpen: false }),
}));

export const useCartStore = create((set, get) => ({
  CartOpen: false,
  isCartOpen: () => set({ CartOpen: true }),
  isCartClosed: () => set({ CartOpen: false }),
  toggleCart: () => set({ CartOpen: !get().CartOpen }),
  CartContent: [],
}));
