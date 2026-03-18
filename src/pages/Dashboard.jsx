import CurrentFront from "../components/CurrentFront";
import NotificationPanel from "../components/NotificationPanel";
import MembersPanel from "../components/MembersPanel";
import FrontHistoryPanel from "../components/FrontHistoryPanel";
import JournalPanel from "../components/JournalPanel";

import { SignedIn, SignedOut } from "@clerk/clerk-react";
import Auth from "./auth";

export default function Dashboard(){

  return(
    <>
    <SignedIn>
    <div className="grid grid-cols-2 gap-6">
      <div className="col-span-2">
        <CurrentFront />
      </div>

      <NotificationPanel />
      <MembersPanel />

      <FrontHistoryPanel />
      <JournalPanel />

    </div>
    </SignedIn>

    <SignedOut>
      <Auth />
    </SignedOut>
    </>
  );

}