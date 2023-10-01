import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Card from "./components/Card";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <h1 className="bg-green-100 text-black mb-4 rounded-lg">Tailwind</h1>

      <Card btn='View' />
      <Card  />
    </>
  );
}

export default App;
