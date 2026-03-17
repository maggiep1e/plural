import { create } from "zustand";
import { socket } from "./chatSocket";

export const useChatStore = create((set) => ({

  messages: [],

  init: () => {

    socket.on("message", (msg) => {
      set((state) => ({
        messages: [...state.messages, msg]
      }));
    });

  },

  sendMessage: (author, text) => {

    const msg = {
      author,
      text,
      time: Date.now()
    };

    socket.emit("message", msg);

  }

}));