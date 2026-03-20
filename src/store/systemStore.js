import { create } from "zustand";
import {
  getMembers,
  createMember,
  updateMember
} from "../api/members";

export const useSystemStore = create((set, get) => ({

  systemId: null,

  members: [],

  setSystemId: (id) => set({ systemId: id }),

  loadMembers: async () => {

    const systemId = get().systemId;
    if (!systemId) return;

    const data = await getMembers(systemId);

    set({ members: data });

  },

  addMember: async (memberData) => {

    const systemId = get().systemId;

    const newMember = await createMember({
      ...memberData,
      system_id: systemId
    });

    set((state) => ({
      members: [newMember, ...state.members]
    }));

  },

  updateMember: async (id, updates) => {

    const updated = await updateMember(id, updates);

    set((state) => ({
      members: state.members.map(m =>
        m.id === id ? updated : m
      )
    }));

  }

}));