import { useState } from "react";
import { useAuth } from "@clerk/clerk-react";
import { useIdStore } from "../store/idStore";
import { createSystemJournal } from "../api/journals";

import { SignedIn, SignedOut } from "@clerk/clerk-react";
import Auth from "./auth";
import SearchBar from "../components/SearchBar";

export default function SystemJournal() {

  const { getToken } = useAuth();
  const systemId = useIdStore((s) => s.systemId);

  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  async function submit() {

    const token = await getToken();

    const mentions = content.match(/@(\w+)/g)?.map(m => m.slice(1)) || [];

    // Extract [[journal links]]
    const journalLinks = content.match(/\[\[(.*?)\]\]/g)?.map(j => j.slice(2,-2)) || [];

    await createSystemJournal(
      { systemId, title, content, taggedMembers: mentions, linkedJournals: journalLinks },
      token
    );

    setTitle("");
    setContent("");

  }

  return (
    <>
    <SignedIn>
    <div className="space-y-4">

      <h1 className="text-2xl font-bold">
        System Journal
      </h1>
        <SearchBar />
      <input
        placeholder="Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        className="border p-2 rounded w-full"
      />

      <textarea
        placeholder="Write entry... use @memberName or [[Journal Title]]"
        value={content}
        onChange={(e) => setContent(e.target.value)}
        className="border p-2 rounded w-full h-40"
        />

      <button
        onClick={submit}
        className="px-4 py-2 border rounded"
      >
        Save Entry
      </button>

    </div>
    </SignedIn>
    <SignedOut>
      <Auth />
    </SignedOut>
    </>
  );
}