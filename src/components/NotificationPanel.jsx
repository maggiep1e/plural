import Card from "./Card";

export default function NotificationPanel(){

  return(
<Card>
    <div className="border-4 border-black rounded-3xl p-6">

      <h2 className="font-bold mb-4">
        NOTIFICATIONS:
      </h2>

      <div className="flex gap-10">

        <div className="text-center">
          💬
          <p>CHAT</p>
        </div>

        <div className="text-center">
          👤
          <p>FRIENDS</p>
        </div>

      </div>

    </div>
</Card>
  );

}