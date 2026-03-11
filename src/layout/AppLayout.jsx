import Sidebar from "./Sidebar";
import TopBar from "./TopBar";

export default function AppLayout({ children }) {

  return (
    <div className="h-screen">

      <TopBar />

      <div className="flex h-[calc(100%-80px)]">

        <Sidebar />

        <main className="flex-1 p-6 overflow-auto">
          {children}
        </main>

      </div>

    </div>
  );
}