import { useState } from "react";
import { Menu } from "./components/Menu";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="app">
      <h1>Notes</h1>
      <Menu />
    </div>
  );
}

export default App;
