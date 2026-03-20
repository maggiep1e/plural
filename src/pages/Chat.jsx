import ChatUI from "../features/chat/ChatUI";

import Auth from "./auth";
import SearchBar from "../components/SearchBar";


export default function Chat() {
  return (
    <>

    <div className="h-full">
      <h1 className="text-2xl mb-4">Chat</h1>
      <SearchBar />
      <ChatUI />
    </div>
    </>
  );
}