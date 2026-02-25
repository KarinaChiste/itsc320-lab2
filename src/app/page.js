"use client";

import { useState } from "react";
import LoginForm from "./components/LoginForm";
import ChuckNorris from "./components/ChuckNorris";

function App() {
  const [token, setToken] = useState(null);

  return token ? (
    <ChuckNorris token={token} onLogout={() => setToken(null)} />
  ) : (
    <LoginForm onLogin={setToken} />
  );
}

export default App;