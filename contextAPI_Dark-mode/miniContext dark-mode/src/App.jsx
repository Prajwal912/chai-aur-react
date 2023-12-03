import React from "react";
import UserContextProvider  from "./context/userContextProvider";
import Login from "./Components/Login";
import Profile from "./Components/Profile";
function App() {
  const loginStyles = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  };
  return (
    <UserContextProvider>
      <h1>react with context</h1>
      <Login style={loginStyles}  />
      <Profile />
    </UserContextProvider>
  );
}

export default App;
