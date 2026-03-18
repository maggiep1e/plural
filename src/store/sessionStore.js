import { create } from "zustand";

export const useSessionStore = create((set) => ({

  userId: null,
  systemId: null,

  setUser: (id) => set({ userId: id }),

  setSystem: (id) => set({ systemId: id }),

   logout: () => set({ user: null }),

}));