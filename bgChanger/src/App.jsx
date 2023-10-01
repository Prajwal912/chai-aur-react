import { useState } from "react";
import "./App.css";

function App() {
  const [color, setColor] = useState("olive");

  return (
    <>
      <div
        className="w-full h-screen duration-200"
        style={{ background: color }}
      >
        <div className="fixed flex justify-center bottom-12 inset-x-0 px-2">
          <div className="flex justify-center flex-wrap gap-3 shadow-lg bg-white px-3 py-2 rounded-3xl">
            <button
              className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
              style={{ background: "skyBlue " }}
              onClick={ () => setColor("skyBlue")}
            >
              skyBlue
            </button>
            <button
              className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
              style={{ background: "yellow" }}
              onClick={ () => setColor("yellow")}
            >
              yellow
            </button>
            <button
              className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
              style={{ background: "lavender" }}
              onClick={ () => setColor("lavender")}
            >
              lavender
            </button>
            <button
              className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
              style={{ background: "grey" }}
              onClick={ () => setColor("grey")}
            >
              grey
            </button>
            <button
              className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
              style={{ background: "black" }}
              onClick={ () => setColor("black")}
            >
              black
            </button>
            <button
              className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
              style={{ background: "green" }}
              onClick={ () => setColor("green")}
            >
              green
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
