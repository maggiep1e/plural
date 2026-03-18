import Card from "./Card";
import { useSystemStore } from "../store/systemStore";

export default function CurrentFront() {

  const currentFront = useSystemStore((s) => s.currentFront);

  return (
    <Card>
      <div className="border-4 border-black rounded-3xl p-6">

        <h2 className="font-bold mb-4">
          CURRENT FRONT:
        </h2>

        <div className="flex gap-6 items-center">

          {currentFront ? (
            <div className="flex flex-col items-center">

              <div className="w-16 h-16 rounded-full border-4 border-black flex items-center justify-center text-2xl">
                {currentFront.avatar ? (
                  <img
                    src={currentFront.avatar}
                    className="w-full h-full rounded-full object-cover"
                  />
                ) : (
                  "👤"
                )}
              </div>

              <span className="text-sm mt-2">
                {currentFront.displayName || currentFront.name}
              </span>

            </div>
          ) : (
            <span className="text-sm text-gray-500">
              Nobody fronting
            </span>
          )}

          <button className="text-4xl font-bold">
            +
          </button>

        </div>

      </div>
    </Card>
  );
}