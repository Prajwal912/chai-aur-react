import { useState, useCallback, useEffect, useRef } from "react";

function App() {
  const [length, setLength] = useState(8);
  const [numAllowed, setnumAllowed] = useState(false);
  const [charAllowed, setcharAllowed] = useState(false);
  const [password, setpassword] = useState("");

  //useRef hook
  const passRef = useRef(null);

  //useCallback hook for the variables which are talking to eachother so then we can add them to dependencies
  const passwordGenerator = useCallback(() => {
    let pass = "";
    let str = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";

    if (numAllowed) str += "0123456789";
    if (charAllowed) str += "!@#$%^&*()_+{}[]|\\:;\"'<>,.?/~`";

    for (let i = 1; i <= length; i++) {
      let char = Math.floor(Math.random() * str.length + 1);
      pass += str.charAt(char);
    }
    setpassword(pass);
  }, [length, numAllowed, charAllowed, setpassword]);

  useEffect(() => {
    passwordGenerator();
  }, [length, numAllowed, charAllowed, passwordGenerator]);

  const copyPassword = useCallback(() => {
    //?. for optional select
    passRef.current?.select();
    // passRef.current?.setSelectionRange(0, 10);
    window.navigator.clipboard.writeText(password);
  }, [password]);

  return (
    <>
      <div className="w-full max-w-md mx-auto shadow-md rounded-lg px-4 py-4 my-8 text-orange-500 bg-gray-700">
        <h1 className="text-2xl text-center text-white mb-4">
          Password Generator
        </h1>
        <div className="flex shadow-md rounded-lg overflow-hidden mb-4">
          <input
            type="text"
            value={password}
            className="outline-none w-full py-2 px-3"
            placeholder="Password"
            readOnly
          />

          <button
            className="outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0"
            onClick={copyPassword}
          >
            Copy
          </button>
        </div>

        <div className="flex text-sm gap-x-2">
          <div className="flex items-center gap-x-1">
            <input
              type="range"
              min={6}
              max={100}
              value={length}
              ref={passRef}
              className="cursor-pointer"
              onChange={(e) => {
                setLength(e.target.value);
              }}
            />
            <label>{length}</label>
          </div>

          <div className=" flex items-center gap-x-1">
            <input
              type="checkbox"
              defaultChecked={numAllowed}
              id="numberInput"
              onChange={(e) => {
                setnumAllowed((prev) => !prev);
              }}
            />
            <label htmlFor="numberInput">Numbers</label>
            <input
              type="checkbox"
              defaultChecked={charAllowed}
              id="characterInput"
              onChange={(e) => {
                setcharAllowed((prev) => !prev);
              }}
            />
            <label htmlFor="characterInput">Characters</label>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
