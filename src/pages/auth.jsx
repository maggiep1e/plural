import { SignIn, SignUp } from "@clerk/clerk-react";

export default function Auth() {
  return (
    <div className="flex gap-10 justify-center p-10">
      <SignIn />
      <SignUp />
    </div>
  );
}