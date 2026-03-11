import { useState } from "react";
import { useReminderStore } from "../features/reminders/reminderStore";

export default function Reminders() {

  const reminders = useReminderStore((s) => s.reminders);
  const addReminder = useReminderStore((s) => s.addReminder);

  const [text, setText] = useState("");

  const submit = () => {
    addReminder(text, Date.now() + 60000);
    setText("");
  };

  return (
    <div className="flex flex-col gap-4">

      <h1 className="text-2xl">Reminders</h1>

      <div className="flex gap-2">
        <input
          value={text}
          onChange={(e) => setText(e.target.value)}
          className="bg-zinc-600 px-3 py-2 rounded"
          placeholder="Add a reminder..."
        />

        <button
          onClick={submit}
          className="bg-purple-600 px-4 py-2 rounded"
        >
          Add
        </button>
      </div>

      {reminders.map((r) => (
        <div key={r.id} className="bg-zinc-800 p-3 rounded">
          {r.text}
        </div>
      ))}

    </div>
  );
}