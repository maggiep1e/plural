import { useState } from "react";
import { useChatStore } from "./chatStore";

export default function ChatUI() {

  const messages = useChatStore((s) => s.messages);
  const send = useChatStore((s) => s.sendMessage);

  const [text, setText] = useState("");

  return (

    <div className="flex flex-col h-full">

      <div className="flex-1 overflow-auto">

        {messages.map((m) => (
          <div key={m.id} className="p-2">
            <b>{m.author}</b>: {m.text}
          </div>
        ))}

      </div>

      <div className="flex gap-2">

        <input
          value={text}
          onChange={(e) => setText(e.target.value)}
          className="flex-1 bg-zinc-800 px-3 py-2"
        />

        <button
          onClick={() => {
            send("user", text);
            setText("");
          }}
          className="bg-purple-600 px-4"
        >
          Send
        </button>

      </div>

    </div>

  );
}