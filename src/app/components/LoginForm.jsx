"use client";
import { useState } from "react";

function LoginForm({ onLogin }) {

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <form
        className="bg-white p-8 rounded-xl shadow-md w-full max-w-sm"
        onSubmit={(e) => {
          e.preventDefault();

          fetch("http://localhost:3333/login", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              username: username,
              password: password,
            }),
          })
            .then(async (res) => {
              const data = await res.json();

              if (!res.ok) {
                setError(data.message || "Invalid username or password");
                return;
              }

              setError(""); // fixed react error message
              onLogin(data.uuid);
            })
            .catch(() => {
              setError("Server connection failed.");
            });
        }}
      >
        <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">
          Chuck Norris Facts
        </h2>

        <p className="text-xs font-semibold uppercase tracking-widest text-gray-400 mb-1">
          Username
        </p>
        <input
          type="text"
          placeholder="Enter username"
          className="text-gray-700 w-full mb-4 p-3 bg-gray-100 border-0 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-400"
          onChange={(e) => setUsername(e.target.value)}
        />

        <p className="text-xs font-semibold uppercase tracking-widest text-gray-400 mb-1">
          Password
        </p>
        <input
          type="password"
          placeholder="Enter password"
          className="text-gray-700 w-full mb-4 p-3 bg-gray-100 border-0 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-400"
          onChange={(e) => setPassword(e.target.value)}
        />

        {/* Made error message instead od alert */}
        {error && (
          <p className="text-red-500 text-sm mb-4">
            {error}
          </p>
        )}

        <button
          type="submit"
          className="w-full bg-gray-800 text-white py-3 rounded-lg font-semibold hover:bg-gray-700 transition-colors"
        >
          Login
        </button>
      </form>
    </div>
  );
}

export default LoginForm;
