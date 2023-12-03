import React, { useState, useContext } from "react";
import userContext from "../context/userContext";

function Login({style}) {
  const [userName, setuserName] = useState("");
  const [password, setpassword] = useState("");

  const { setUser } = useContext(userContext);

  const handlesubmit = (e) => {
    e.preventDefault();
    setUser({ userName, password });
  };
  return (
    <div style={style}>
      <h2>Login</h2>
      <input
        value={userName}
        onChange={(e) => setuserName(e.target.value)}
        type="text"
        placeholder="username"
      />
      {' '}
      <input
        value={password}
        onChange={(e) => setpassword(e.target.value)}
        type="text"
        placeholder="password"
      />
      <button onClick={handlesubmit}>Submit</button>
    </div>
  );
};

export default Login;
