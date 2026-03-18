import { create } from "zustand";
import { useThemeStore } from "./themeStore";
import { createMember } from "../api/members";

export const useSystemStore = create((set, get) => ({

  members: [],
  folders: [],

  frontHistory: [],
  currentFront: null,

  status: "inactive",

  friends: [],


  setMembers: (members) =>
    set({ members }),


  addMember: async (memberData) => {

    const newMember = await createMember(memberData);

    set((state) => ({
      members: [...state.members, newMember]
    }));

  },


  updateMember: (id, updates) =>
    set((state) => ({
      members: state.members.map((m) =>
        m._id === id ? { ...m, ...updates } : m
      )
    })),



  archiveMember: (id) =>
    set((state) => ({
      members: state.members.map((m) =>
        m._id === id ? { ...m, archived: true } : m
      )
    })),



  addFolder: (name) =>
    set((state) => ({
      folders: [...state.folders, name]
    })),



  addFriend: (username) =>
    set((state) => ({
      friends: [
        ...state.friends,
        { username }
      ]
    })),



  setFront: (member) => {

    const state = get();
    const now = Date.now();

    if (state.currentFront) {
      state.endFront(now);
    }

    const { setSystemColor } = useThemeStore.getState();

    if (member.color) {
      setSystemColor(member.color);
    }

    set({ currentFront: member });

    set((state) => ({
      frontHistory: [
        ...state.frontHistory,
        {
          memberId: member._id,
          start: now,
          end: null
        }
      ]
    }));

  },



  endFront: (time = Date.now()) =>
    set((state) => ({
      frontHistory: state.frontHistory.map((log) =>
        log.end === null ? { ...log, end: time } : log
      ),
      currentFront: null
    })),

}));