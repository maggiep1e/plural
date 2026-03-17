import Card from "./Card";

export default function JournalsPanel(){

  return(
<Card>
    <div className="border-4 border-black rounded-3xl p-6">

      <h2 className="font-bold mb-4">
        JOURNALS
      </h2>

      <div className="flex gap-10">

        <button>SYSTEM</button>
        <button>MEMBER</button>

      </div>

    </div>
</Card>
  );

}