import ChatUI from "../features/chat/ChatUI";
import { SignedIn, SignedOut } from "@clerk/clerk-react";
import Auth from "./auth";


export default function Chat() {
  return (
    <>
    <SignedIn>
    <div className="h-full">
      <h1 className="text-2xl mb-4">Chat</h1>
      <ChatUI />
    </div>
    </SignedIn> 
    <SignedOut>
      <Auth />
    </SignedOut>
    </>
  );
}