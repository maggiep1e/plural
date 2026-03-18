import { useThemeStore } from "../store/themeStore";
import { useNavigate } from "react-router-dom";
import { useSessionStore } from '../store/sessionStore';

export default function TopBar() {
  const setMode = useThemeStore((state) => state.setMode);
  const mode = useThemeStore((state) => state.mode);
  const navigate = useNavigate();

  // Get logout function and userId from the store
  const logout = useSessionStore((state) => state.logout);
  const userId = useSessionStore((state) => state.userId); // <- access it here

  return (
    <div className="flex justify-end p-4 space-x-2 bg-white dark:bg-zinc-800">
      {!userId ? (
        <button onClick={() => navigate("/auth")}>Login</button>
      ) : (
        <button onClick={logout}>Logout</button>
      )}

      <button onClick={() => setMode("light")} className="px-3 py-1 rounded">
        Light
      </button>

      <button onClick={() => setMode("dark")} className="px-3 py-1 rounded">
        Dark
      </button>
    </div>
  );
}