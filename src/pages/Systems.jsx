import { useEffect, useState } from "react";
import { useSessionStore } from "../store/sessionStore";
import { SignedIn, SignedOut } from "@clerk/clerk-react";
import Auth from "./auth";


const API = "http://localhost:4000";

export default function Systems() {

  const userId = useSessionStore((s) => s.userId);
  const setSystem = useSessionStore((s) => s.setSystem);

  const [systems, setSystems] = useState([]);
  const [name, setName] = useState("");

  useEffect(() => {

    async function load() {

      const res = await fetch(`${API}/systems/${userId}`);
      const data = await res.json();

      setSystems(data);

    }

    if (userId) load();

  }, [userId]);



  const createSystem = async () => {

    const res = await fetch(`${API}/systems`, {

      method: "POST",

      headers: { "Content-Type": "application/json" },

      body: JSON.stringify({
        userId,
        name
      })

    });

    const system = await res.json();

    setSystems((prev) => [...prev, system]);

  };



  return (
    <>
    <SignedIn>
    <div className="flex flex-col gap-4">

      <h1 className="text-2xl font-bold">
        Your Systems
      </h1>

      <input
        placeholder="System name"
        onChange={(e) => setName(e.target.value)}
      />

      <button onClick={createSystem}>
        Create System
      </button>

      {systems.map((sys) => (

        <div
          key={sys._id}
          className="p-3 border rounded cursor-pointer"
          onClick={() => setSystem(sys._id)}
        >

          {sys.name}

        </div>

      ))}

    </div>
    </SignedIn>
    <SignedOut>
      <Auth />
    </SignedOut>
    </>

  );
}