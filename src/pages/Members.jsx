import { useState, useEffect } from "react";
import { useSystemStore } from "../store/systemStore";

import MemberCard from "../components/MemberCard";
import SearchBar from "../components/SearchBar";
import { filterMembers } from "../features/search/searchEngine";
import FolderSelect from "../components/FolderSelect";

import {
  getMembers,
  createMember,
  getFolders,
  createFolder,
  deleteFolder,
  addMemberToFolder,
  removeMemberFromFolder
} from "../api/members"; // <- we need API functions for folders

export default function Members() {
  const members = useSystemStore((s) => s.members);
  const addMember = useSystemStore((s) => s.addMember);
  const setMembers = useSystemStore((s) => s.setMembers);
  const setFront = useSystemStore((s) => s.setFront);

  const [name, setName] = useState("");
  const [search, setSearch] = useState("");
  const [tagFilter, setTagFilter] = useState("");
  const [folderFilter, setFolderFilter] = useState("");
  const [folders, setFolders] = useState([]);
  const [newFolderName, setNewFolderName] = useState("");
  const [displayName, setDisplayName] = useState("");
  const [avatar, setAvatar] = useState("");
  const [color, setColor] = useState("#a855f7");
  const [tagsInput, setTagsInput] = useState("");
  const [folderChoice, setFolderChoice] = useState("");
  const [showAddMember, setShowAddMember] = useState(false);

  // LOAD MEMBERS & FOLDERS
  useEffect(() => {
    async function loadData() {
      setMembers(await getMembers());
      setFolders(await getFolders());
    }
    loadData();
  }, []);

  // ADD MEMBER
  const submit = async () => {
    if (!name) return;
    const newMember = await createMember({ name, color: "#a855f7" });
    addMember({
      name,
      displayName: name,
      color: "#a855f7",
      tags: []
    });
  };

  // ADD FOLDER
  const handleAddFolder = async () => {
    if (!newFolderName) return;
    const folder = await createFolder({ name: newFolderName });
    setFolders((prev) => [...prev, folder]);
    setNewFolderName("");
  };

  // DELETE FOLDER
  const handleDeleteFolder = async (folderId) => {
    await deleteFolder(folderId);
    setFolders((prev) => prev.filter(f => f._id !== folderId));
  };

  // FOLDER MEMBERS
  const handleAddToFolder = async (folderName, memberId) => {
    const folder = folders.find(f => f.name === folderName);
    if (!folder) return;
    await addMemberToFolder(folder._id, memberId);
  };

  const handleRemoveFromFolder = async (folderName, memberId) => {
    const folder = folders.find(f => f.name === folderName);
    if (!folder) return;
    await removeMemberFromFolder(folder._id, memberId);
  };

  const filtered = filterMembers({
    members,
    search,
    tag: tagFilter,
    folder: folderFilter
  });
  const list = search ? filtered : members;

  const allTags = [...new Set(members.flatMap(m => m.tags || []))];
  const allFolderNames = folders.map(f => f.name);

  return (
    <div className="flex flex-col gap-4">

      <SearchBar onSearch={setSearch} />

      <div className="flex gap-2">
        <select
          onChange={(e) => setTagFilter(e.target.value)}
          className="bg-zinc-200 dark:bg-zinc-700 px-3 py-2 rounded"
        >
          <option value="">All tags</option>
          {allTags.map(tag => <option key={tag}>{tag}</option>)}
        </select>

        <FolderSelect
          folders={allFolderNames}
          setFolder={setFolderFilter}
        />
      </div>

      <div className="flex gap-2 items-center">
        <input
          value={newFolderName}
          onChange={(e) => setNewFolderName(e.target.value)}
          placeholder="New folder name"
          className="bg-zinc-200 dark:bg-zinc-700 px-3 py-2 rounded"
        />
        <button
          onClick={handleAddFolder}
          className="bg-green-600 px-4 py-2 rounded"
        >
          Add Folder
        </button>
      </div>

      <div className="flex flex-wrap gap-2">
        {folders.map(f => (
          <div key={f._id} className="flex items-center gap-1 bg-zinc-300 dark:bg-zinc-700 px-2 py-1 rounded">
            <span>{f.name}</span>
            <button
              onClick={() => handleDeleteFolder(f._id)}
              className="bg-red-600 px-2 py-1 rounded text-white"
            >
              Delete
            </button>
          </div>
        ))}
      </div>

      <div className="flex justify-between items-center">

  <h1 className="text-2xl font-bold">Members</h1>

  <button
    onClick={() => setShowAddMember(true)}
    className="bg-purple-600 px-4 py-2 rounded text-white"
  >
    + Add Member
  </button>

</div>

      <div className="flex flex-col gap-2">
        {list.map(m => (
          <MemberCard
            key={m._id || m.id}
            member={m}
            onFront={setFront}
            folders={allFolderNames}
            onAddToFolder={handleAddToFolder}
            onRemoveFromFolder={handleRemoveFromFolder}
          />
        ))}
      </div>
      {showAddMember && (

  <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50">

    <div className="bg-white dark:bg-zinc-800 p-6 rounded-xl flex flex-col gap-3 w-80">

      <h2 className="text-xl font-bold">Add Member</h2>

      <input
        value={name}
        onChange={(e)=>setName(e.target.value)}
        placeholder="Name"
        className="bg-zinc-200 dark:bg-zinc-700 px-3 py-2 rounded"
      />

      <input
        value={displayName}
        onChange={(e)=>setDisplayName(e.target.value)}
        placeholder="Display name"
        className="bg-zinc-200 dark:bg-zinc-700 px-3 py-2 rounded"
      />

      <input
        value={avatar}
        onChange={(e)=>setAvatar(e.target.value)}
        placeholder="Avatar URL"
        className="bg-zinc-200 dark:bg-zinc-700 px-3 py-2 rounded"
      />

      <div className="flex gap-2">

        <input
          type="color"
          value={color}
          onChange={(e)=>setColor(e.target.value)}
          className="w-12 h-10 rounded"
        />

        <input
          value={tagsInput}
          onChange={(e)=>setTagsInput(e.target.value)}
          placeholder="tags (comma separated)"
          className="flex-1 bg-zinc-200 dark:bg-zinc-700 px-3 py-2 rounded"
        />

      </div>

      <select
        value={folderChoice}
        onChange={(e)=>setFolderChoice(e.target.value)}
        className="bg-zinc-200 dark:bg-zinc-700 px-3 py-2 rounded"
      >

        <option value="">No Folder</option>

        {folders.map(f => (
          <option key={f._id} value={f.name}>
            {f.name}
          </option>
        ))}

      </select>

      <div className="flex gap-2 justify-end">

        <button
          onClick={()=>setShowAddMember(false)}
          className="bg-zinc-400 px-4 py-2 rounded"
        >
          Cancel
        </button>

        <button
          onClick={async () => {

            await submit();
            setShowAddMember(false);

          }}
          className="bg-purple-600 px-4 py-2 rounded text-white"
        >
          Create
        </button>

      </div>

    </div>

  </div>

)}
    </div>
  );
}
