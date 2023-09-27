import { useState } from "react";

import "./App.css";

function App() {
  const [counter, setcounter] = useState(15);

  const addVal = () => {
    if(counter < 20){
      setcounter(counter + 1);
    }
  };

  const removeVal = () => {
    if(counter > 0){
      setcounter(counter - 1);
    }
  };

  return (
    <>
      <h1>Basic Counter</h1>

      <h2>Counter Value: {counter}</h2>

      <button onClick={addVal}>Increase Val</button>
      <br />
      <br />
      <button onClick={removeVal}>Decrease Val</button>
    </>
  );
}

export default App;
