import { create } from "zustand";

export const useProductStore = create((set) => ({
  cart: 0,
  addToCart: () => set((state) => ({ cart: state.cart + 1 })),
  removeFromCart: () =>
    set((state) => ({ cart: state.cart > 0 ? state.cart - 1 : 0 })),
  ResetCart: () => set(() => ({ cart: 0 })),
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
  addItem: (item) =>
    set((state) => {
      const exists = state.CartContent.some(
        (cartItem) => cartItem.id === item.id
      );
      if (!exists) {
        return { CartContent: [...state.CartContent, item] };
      }
      return state;
    }),

  removeItem: (itemId) =>
    set((state) => ({
      CartContent: state.CartContent.filter((item) => item.id !== itemId),
    })),

  // Clear the entire cart
  clearCart: () => set({ CartContent: [] }),
}));

export const useCartFunctionalityStore = create((set) => ({
  AddItem: false,
  isAddItem: () => set({ AddItem: true }),
  isRemoveItem: () => set({ AddItem: false }),
}));
