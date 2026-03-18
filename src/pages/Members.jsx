import { useState } from "react";
import { useSystemStore } from "../store/systemStore";
import MemberProfile from "../components/MemberProfile";

import MemberEditor from "../components/MemberEditor";

import { SignedIn, SignedOut } from "@clerk/clerk-react";
import Auth from "./auth";
import SearchBar from "../components/SearchBar";

export default function Members() {

  const members = useSystemStore((s) => s.members);

  const [selected, setSelected] = useState(null);
  const [mode, setMode] = useState("view");

  return (
<>
    <SignedIn>
      <SearchBar />
    <div className="flex gap-6">

      {/* member list */}

      <div className="w-60 space-y-2">

        {members.map(m => (

          <div
            key={m._id}
            className="border p-2 rounded cursor-pointer"
            onClick={() => {
              setSelected(m);
              setMode("view");
            }}
          >
            {m.displayName || m.name}
          </div>

        ))}

      </div>

      {/* panel */}

      <div className="flex-1">

        {selected && mode === "view" && (
          <MemberProfile
            member={selected}
            onEdit={() => setMode("edit")}
          />
        )}

        {selected && mode === "edit" && (
          <MemberEditor
            member={selected}
            onDone={() => setMode("view")}
          />
        )}

      </div>

    </div>
    </SignedIn>
    <SignedOut>
      <Auth />
    </SignedOut>
    </>
  );
}