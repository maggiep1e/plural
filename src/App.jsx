import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useEffect, useState } from "react";
import { useIdStore } from "./store/idStore";

import Dashboard from "./pages/Dashboard";
import Members from "./pages/Members";
import Chat from "./pages/Chat";
import Friends from "./pages/Friends";
import Reminders from "./pages/Reminders";
import Systems from "./pages/Systems";
import Auth from "./pages/auth";
import Analytics from "./pages/Analytics";
import SystemJournal from "./pages/SystemJournal";
import MemberJournal from "./pages/MemberJournal";

import { getUser } from "./lib/auth";

export default function AppWrapper() {

  const [user, setUser] = useState(null);
  const setUserId = useIdStore.getState().setUserId;

  useEffect(() => {

    async function load() {
      const u = await getUser();
      setUser(u);

            if (u) {
        setUserId(u.id);
      }
    }

    load();

  }, []);

  if (user === null) return <div>Loading...</div>;

  if (!user) return  <Auth />;

  const initSession = useSessionStore(s => s.initSession);

  useEffect(() => {
    initSession();
  }, []);

  return <App />;

}


// This component can use Clerk hooks
function AppRoutes() {

  const { user, isLoaded } = useUser();
  const setUserId = useIdStore((s) => s.setUserId);

  useEffect(() => {

    if (!isLoaded) return;

    if (user) {
      setUserId(user.id);
    }

  }, [user, isLoaded, setUserId]);

  return (
    <BrowserRouter>
            <Routes>
              <Route path="/" element={<Dashboard />} />
              <Route path="/members" element={<Members />} />
              <Route path="/friends" element={<Friends />} />
              <Route path="/chat" element={<Chat />} />
              <Route path="/reminders" element={<Reminders />} />
              <Route path="/systems" element={<Systems />} />
              <Route path="/auth" element={<Auth />} />
              <Route path="/analytics" element={<Analytics />} />
              <Route path="/system-journal" element={<SystemJournal />} />
              <Route path="/member-journal" element={<MemberJournal />} />
            </Routes>
    </BrowserRouter>
  );
}


export function App() {
  return (
    <div className="
  flex h-screen w-screen max-w-sm sm:max-w-md md:max-w-lg
  bg-white dark:bg-zinc-900
  text-black dark:text-white
">
      <AppRoutes />
    </div>
  );
}