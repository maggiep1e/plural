import Card from "./Card";

export default function MembersPanel(){

  return(
<Card>
    <div className="border-4 border-black rounded-3xl p-6">

      <h2 className="font-bold mb-4">
        MEMBERS
      </h2>

      <div className="flex gap-10">

        <button >LIST</button>
        <button>FOLDERS</button>
        <button>ADD NEW</button>

      </div>

    </div>
</Card>
  );

}