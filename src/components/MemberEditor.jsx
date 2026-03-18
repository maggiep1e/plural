import { useState } from "react";
import { useSystemStore } from "../store/systemStore";

export default function MemberEditor({ member, close }) {

  const updateMember = useSystemStore((s) => s.updateMember);

  const [name, setName] = useState(member.name);
  const [displayName, setDisplayName] = useState(member.displayName);
  const [color, setColor] = useState(member.color);
  const [tags, setTags] = useState(member.tags || []);
  const [folders, setFolders] = useState(member.folders || []);

  const save = () => {

    updateMember(member.id, {
      name,
      displayName,
      color,
      tags,
      folders
    });

    close();
  };

  return (

    <div className="fixed inset-0 bg-black/60 flex items-center justify-center">

      <div className="dark:bg-zinc-800 p-6 rounded-xl w-96 flex flex-col gap-4">

        <h2 className="text-xl font-bold">Edit Member</h2>

        <input
        type="file"
        accept="image/*"
        onChange={(e) => {
            const file = e.target.files[0];

            const reader = new FileReader();

            reader.onload = () => {
            updateMember(member.id, { avatar: reader.result });
            };

            reader.readAsDataURL(file);
        }}
        />

        <input
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Name"
          className="bg-zinc-700 px-3 py-2 rounded"
        />

        <input
          value={displayName}
          onChange={(e) => setDisplayName(e.target.value)}
          placeholder="Display name"
          className="dark:bg-zinc-700 px-3 py-2 rounded"
        />

        <input
          type="color"
          value={color}
          onChange={(e) => setColor(e.target.value)}
        />

        <input
          placeholder="tags (comma separated)"
          value={tags.join(",")}
          onChange={(e) =>
            setTags(e.target.value.split(","))
          }
          className="dark:bg-zinc-700 px-3 py-2 rounded"
        />

        <input
          placeholder="folders (comma separated)"
          value={folders.join(",")}
          onChange={(e) =>
            setFolders(e.target.value.split(","))
          }
          className="dark:bg-zinc-700 px-3 py-2 rounded"
        />

        <div className="flex gap-2">

          <button
            onClick={save}
            className="bg-purple-600 px-4 py-2 rounded"
          >
            Save
          </button>

          <button
            onClick={close}
            className="bg-zinc-200 px-4 py-2 rounded"
          >
            Cancel
          </button>

        </div>

      </div>

    </div>

  );

}