import { create } from "zustand";
import { v4 as uuid } from "uuid";

export const useSystemStore = create((set, get) => ({

  members: [],

  frontHistory: [],

  currentFront: null,

  status: "inactive",

folders: [],


addFolder: (name) =>
  set((state) => ({
    folders: [...state.folders, name]
  })),

addMember: (name) =>
  set((state) => ({
    members: [
      ...state.members,
      {
        id: uuid(),
        name,
        displayName: name,
        avatar: "",
        color: "#a855f7",
        tags: [],
        folders: [],
        archived: false
      }
    ]
  })),

  updateMember: (id, updates) =>
  set((state) => ({
    members: state.members.map((m) =>
      m.id === id ? { ...m, ...updates } : m
    )
  })),

  archiveMember: (id) =>
  set((state) => ({
    members: state.members.map((m) =>
      m.id === id ? { ...m, archived: true } : m
    )
  })),

  friends: [],

  addFriend: (username) =>
    set((state) => ({
      friends: [
        ...state.friends,
        { id: uuid(), username }
      ]
    })),

  setFront: (memberId) => {

    const state = get();

    const now = Date.now();

    if (state.currentFront) {
      state.endFront(now);
    }

    set({ currentFront: memberId });

    set((state) => ({
      frontHistory: [
        ...state.frontHistory,
        {
          id: uuid(),
          memberId,
          start: now,
          end: null
        }
      ]
    }));
  },

  endFront: (time = Date.now()) => {
    set((state) => ({
      frontHistory: state.frontHistory.map((log) =>
        log.end === null ? { ...log, end: time } : log
      ),
      currentFront: null
    }));
  }

}))