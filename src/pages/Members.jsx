import { useState } from "react";
import { useSystemStore } from "../store/systemStore";

import MemberCard from "../components/MemberCard";
import SearchBar from "../components/SearchBar";
import { filterMembers } from "../features/search/searchEngine";
import FolderSelect from "../components/FolderSelect";

export default function Members() {

  const members = useSystemStore((s) => s.members);
  const addMember = useSystemStore((s) => s.addMember);
  const setFront = useSystemStore((s) => s.setFront);

  const [name, setName] = useState("");
  const [search, setSearch] = useState("");

  const [tagFilter, setTagFilter] = useState("");
  const [folderFilter, setFolderFilter] = useState("");

  const submit = () => {
    if (!name) return;
    addMember(name);
    setName("");
  };

  const filtered = filterMembers({
    members,
    search,
    tag: tagFilter,
    folder: folderFilter
  });
  const list = search ? filtered : members;

  const allTags = [...new Set(members.flatMap(m => m.tags))];
  const allFolders = [...new Set(members.flatMap(m => m.folders))];

  return (
    <div className="flex flex-col gap-4">

      <SearchBar onSearch={setSearch} />

      <div className="flex gap-2">

        <select
          onChange={(e) => setTagFilter(e.target.value)}
          className="bg-zinc-200 dark:bg-zinc-700 px-3 py-2 rounded"
        >
          <option value="">All tags</option>

          {allTags.map(tag => (
            <option key={tag}>{tag}</option>
          ))}

        </select>

        <FolderSelect
          folders={allFolders}
          setFolder={setFolderFilter}
        />

      </div>

      <h1 className="text-2xl font-bold">Members</h1>

      <div className="flex gap-2">
        <input
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Member name"
          className="bg-zinc-200  dark:bg-zinc-700 px-3 py-2 rounded"
        />

        <button
          onClick={submit}
          className="bg-purple-600   px-4 py-2 rounded"
        >
          Add
        </button>
      </div>

      <div className="flex flex-col gap-2">
        {list.map((m) => (
          <MemberCard
            key={m.id}
            member={m}
            onFront={setFront}
          />
        ))}
      </div>

    </div>
  );
}