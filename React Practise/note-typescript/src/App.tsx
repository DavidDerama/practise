import { useState } from "react";
import { Menu } from "./components/Menu";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <main className="app">
      <h1>Notes</h1>
      <Menu />
    </main>
  );
}

export default App;
