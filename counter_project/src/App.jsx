import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  
  let counter = 5;

  const addVal = () => {
    counter++;
  }

  const removeVal = () => {
    counter--;
  }

  return (
    <>
      <h1>Basic Counter</h1>

      <h2>Counter Value: {counter}</h2>

      <button onClick={addVal}>Increase Val</button>
      <br />
      <br />
      <button onClick={removeVal}>Decrease Val</button>
    </>
  )
}

export default App
