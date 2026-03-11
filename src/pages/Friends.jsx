import { useState } from "react";
import { useSystemStore } from "../store/systemStore";

export default function Friends() {

  const friends = useSystemStore((s) => s.friends);
  const addFriend = useSystemStore((s) => s.addFriend);

  const [name, setName] = useState("");

  return (
    <div className="flex flex-col gap-4">

      <h1 className="text-2xl">Friends</h1>

      <div className="flex gap-2">

        <input
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="bg-zinc-600 px-3 py-2 rounded"
          placeholder="Search friends..."
        />

        <button
          onClick={() => addFriend(name)}
          className="bg-purple-600 px-4 py-2 rounded"
        >
          Add
        </button>

      </div>

      {friends.map((f) => (
        <div key={f.id} className="bg-zinc-800 p-3 rounded">
          {f.username}
        </div>
      ))}

    </div>
  );
}