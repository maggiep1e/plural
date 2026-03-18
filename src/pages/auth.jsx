import { useState } from "react";
import { login, register } from "../api/auth";
import { useSessionStore } from "../store/sessionStore";

export default function Auth() {

  const setUser = useSessionStore((s) => s.setUser);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async () => {

    const data = await login(email, password);

    if (data.userId) {
      setUser(data.userId);
    }

  };

  const handleRegister = async () => {

    const data = await register(email, password);

    if (data.userId) {
      setUser(data.userId);
    }

  };

  return (

    <div className="flex flex-col gap-3 max-w-sm mx-auto">

      <h1 className="text-2xl font-bold">Login / Register</h1>

      <input
        placeholder="Email"
        onChange={(e) => setEmail(e.target.value)}
      />

      <input
        type="password"
        placeholder="Password"
        onChange={(e) => setPassword(e.target.value)}
      />

      <button onClick={handleLogin}>
        Login
      </button>

      <button onClick={handleRegister}>
        Register
      </button>

    </div>

  );
}