import FrontTracker from "../components/FrontTracker";
import { useSystemStore } from "../store/systemStore";

export default function Dashboard() {

  const history = useSystemStore((s) => s.frontHistory);
  const members = useSystemStore((s) => s.members);

  return (

    <div className="flex flex-col gap-6">

      <h1 className="text-2xl font-bold">Dashboard</h1>

      <FrontTracker />

      <div className="bg-zinc-800 p-6 rounded-xl">

        <h2 className="text-lg mb-4">Front History</h2>

        <div className="flex flex-col gap-2">

          {history.slice().reverse().map((log) => {

            const member = members.find((m) => m.id === log.memberId);

            return (
              <div key={log.id} className="text-sm">
                {member?.displayName || "Unknown"}
              </div>
            );

          })}

        </div>

      </div>

    </div>

  );

}