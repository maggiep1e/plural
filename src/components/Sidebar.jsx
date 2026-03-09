import { Link } from "react-router-dom";

export default function Sidebar() {

  return (
    <div className="w-64 bg-zinc-800 p-4 flex flex-col gap-3">

      <h1 className="text-xl font-bold mb-4">System</h1>

      <Link to="/">Dashboard</Link>
      <Link to="/members">Members</Link>
      <Link to="/friends">Friends</Link>
      <Link to="/chat">Chat</Link>
      <Link to="/reminders">Reminders</Link>

    </div>
  );

}
