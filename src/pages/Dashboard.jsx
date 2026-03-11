import CurrentFront from "../components/CurrentFront";
import NotificationPanel from "../components/NotificationPanel";
import MembersPanel from "../components/MembersPanel";
import FrontHistoryPanel from "../components/FrontHistoryPanel";
import JournalsPanel from "../components/JournalsPanel";

export default function Dashboard(){

  return(

    <div className="grid grid-cols-2 gap-6">
      <div className="col-span-2">
        <CurrentFront />
      </div>

      <NotificationPanel />
      <MembersPanel />

      <FrontHistoryPanel />
      <JournalsPanel />

    </div>

  );

}