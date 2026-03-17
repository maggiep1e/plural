import Card from "./Card";
import { useSystemStore } from "../store/systemStore";

export default function CurrentFront(){

  const currentFront = useSystemStore((s) => s.currentFront);


  return(
<Card>
    <div className="border-4 border-black rounded-3xl p-6">

      <h2 className="font-bold mb-4">
        CURRENT FRONT:
      </h2>

      <div className="flex gap-6 items-center">

        {currentFront.map((m)=>(
          <div key={m} className="flex flex-col items-center">

            <div className="w-16 h-16 rounded-full border-4 border-black flex items-center justify-center text-2xl">
              👤
            </div>

            <span className="text-sm mt-2">NAME</span>

          </div>
        ))}

        <button className="text-4xl font-bold">
          +
        </button>

      </div>

    </div>
</Card>
  );

}