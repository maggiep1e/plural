import { useThemeStore } from "../store/themeStore";

export default function TopBar() {
  const setMode = useThemeStore((state) => state.setMode);
  const mode = useThemeStore((state) => state.mode);

  return (
    <div className="flex justify-end p-4 space-x-2 bg-white dark:bg-zinc-800">
      <button
        onClick={() => setMode("light")}
        className="px-3 py-1 rounded"
      >
        Light
      </button>
      <button
        onClick={() => setMode("dark")}
        className="px-3 py-1 rounded"
      >
        Dark
      </button>
    </div>
  );
}