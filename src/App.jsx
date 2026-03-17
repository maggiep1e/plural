import { BrowserRouter, Routes, Route } from "react-router-dom";

import Dashboard from "./pages/Dashboard";
import Members from "./pages/Members";
import Chat from "./pages/Chat";
import Friends from "./pages/Friends";
import Reminders from "./pages/Reminders";
import Systems from "./pages/Systems";
import Auth from "./pages/auth";

import Sidebar from "./components/Sidebar";
import TopBar from "./layout/TopBar";
import { useIdStore } from "./store/idStore";

export default function App() {
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