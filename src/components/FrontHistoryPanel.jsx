import Card from "./Card";

export default function FrontHistoryPanel(){

  return(
<Card>
    <div className="border-4 border-black rounded-3xl p-6">

      <h2 className="font-bold mb-4">
        FRONT HISTORY
      </h2>

      <div className="flex gap-10">

        <button>TRENDS</button>
        <button>BY MEMBER</button>

      </div>

    </div>
    </Card>

  );

}