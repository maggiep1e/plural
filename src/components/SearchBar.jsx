import { useState } from "react";

export default function SearchBar({ onSearch }) {

  const [value, setValue] = useState("");

  return (

    <input
      value={value}
      onChange={(e) => {
        const v = e.target.value;
        setValue(v);
        onSearch(v);
      }}
      placeholder="Search members..."
      className="bg-zinc-800 px-3 py-2 rounded w-full"
    />

  );
}