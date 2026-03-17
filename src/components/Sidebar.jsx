import { Link } from "react-router-dom";

export default function Sidebar() {

  return (
    <div className="w-64 p-4 flex flex-col gap-3 border-r-4 border-zinc-600
    ">

      <h1 className="text-xl font-bold p-6">INNER CIRCLE</h1>

      <Link to="/" className="bg-zinc-200 dark:bg-zinc-700 px-3 py-2 rounded">Dashboard</Link>
      <Link to="/members" className="bg-zinc-200 dark:bg-zinc-700 px-3 py-2 rounded">Members</Link>
      <Link to="/friends" className="bg-zinc-200 dark:bg-zinc-700 px-3 py-2 rounded">Friends</Link>
      <Link to="/chat" className="bg-zinc-200 dark:bg-zinc-700 px-3 py-2 rounded">Chat</Link>
      <Link to="/reminders" className="bg-zinc-200 dark:bg-zinc-700 px-3 py-2 rounded">Reminders</Link>
      <Link to="/systems" className="bg-zinc-200 dark:bg-zinc-700 px-3 py-2 rounded">Systems</Link>

    </div>
  );

}
