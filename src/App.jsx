import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ClerkProvider, useUser } from "@clerk/clerk-react";
import { useEffect } from "react";
import { useIdStore } from "./store/idStore";

import Dashboard from "./pages/Dashboard";
import Members from "./pages/Members";
import Chat from "./pages/Chat";
import Friends from "./pages/Friends";
import Reminders from "./pages/Reminders";
import Systems from "./pages/Systems";
import Auth from "./pages/auth";

import Sidebar from "./components/Sidebar";
import TopBar from "./layout/TopBar";

const clerkPubKey = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY;


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
      <div className="flex h-screen bg-white dark:bg-zinc-800 text-black dark:text-white">
        <Sidebar />
        <div className="flex-1 flex flex-col overflow-auto">
          <TopBar />
          <div className="flex-1 p-6">
            <Routes>
              <Route path="/" element={<Dashboard />} />
              <Route path="/members" element={<Members />} />
              <Route path="/friends" element={<Friends />} />
              <Route path="/chat" element={<Chat />} />
              <Route path="/reminders" element={<Reminders />} />
              <Route path="/systems" element={<Systems />} />
              <Route path="/auth" element={<Auth />} />
            </Routes>
          </div>
        </div>
      </div>
    </BrowserRouter>
  );
}


export default function App() {
  return (
    <ClerkProvider publishableKey={clerkPubKey}>
      <AppRoutes />
    </ClerkProvider>
  );
}