import { BrowserRouter, Routes, Route } from "react-router-dom";

import Dashboard from "./pages/Dashboard";
import Members from "./pages/Members";
import Chat from "./pages/Chat";
import Friends from "./pages/Friends";
import Reminders from "./pages/Reminders";

import Sidebar from "./components/Sidebar";

setInterval(() => {

  const reminders = useReminderStore.getState().reminders;

  const now = Date.now();

  reminders.forEach((r) => {

    if (Math.abs(now - r.time) < 5000) {
      alert(r.text);
    }

  });

}, 5000);

export default function App() {
  return (
    <BrowserRouter>

      <div className="flex h-screen">

        <Sidebar />

        <div className="flex-1 p-6 overflow-auto">

          <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/members" element={<Members />} />
          <Route path="/friends" element={<Friends />} />
          <Route path="/chat" element={<Chat />} />
          <Route path="/reminders" element={<Reminders />} />
        </Routes>

        </div>

      </div>

    </BrowserRouter>
  );
}