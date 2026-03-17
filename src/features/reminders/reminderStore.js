import { create } from "zustand";
import { v4 as uuid } from "uuid";

export const useReminderStore = create((set) => ({

  reminders: [],

  addReminder: (text, time) =>
    set((state) => ({
      reminders: [
        ...state.reminders,
        {
          id: uuid(),
          text,
          time
        }
      ]
    }))

}));