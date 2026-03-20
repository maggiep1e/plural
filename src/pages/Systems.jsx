import { useEffect, useState } from "react";
import { getSystems, createSystem } from "../api/systems";
import { useSystemStore } from "../store/systemStore";

export default function Systems() {

  const [systems, setSystems] = useState([]);
  const [name, setName] = useState("");

  const setSystemId = useSystemStore((s) => s.setSystemId);

  useEffect(() => {
    load();
  }, []);

  async function load() {
    const data = await getSystems();
    setSystems(data);
  }

  async function create() {

    const system = await createSystem(name);

    setSystems(prev => [...prev, system]);

    setName("");

  }

  return (

    <div className="space-y-4">

      <h1 className="text-2xl font-bold">
        Systems
      </h1>

      <div className="flex gap-2">

        <input
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="System name"
          className="border p-2"
        />

        <button onClick={create} className="border px-4">
          Create
        </button>

      </div>

      {systems.map(s => (

        <div
          key={s.id}
          onClick={() => setSystemId(s.id)}
          className="border p-3 cursor-pointer"
        >
          {s.name}
        </div>

      ))}

    </div>

  );
}