import MemberMarkdown from "./MemberMarkdown";

export default function MemberProfile({ member, onEdit }) {

  return (

    <div className="border rounded-xl p-6 space-y-4">

      <div className="flex justify-between">

        <h2 className="text-xl font-bold">
          {member.displayName || member.name}
        </h2>

        <button
          onClick={onEdit}
          className="border px-3 py-1 rounded"
        >
          Edit
        </button>

      </div>

      {member.avatar && (
        <img
          src={member.avatar}
          className="w-24 h-24 rounded-full"
        />
      )}

      <MemberMarkdown text={member.description} />

    </div>

  );
}