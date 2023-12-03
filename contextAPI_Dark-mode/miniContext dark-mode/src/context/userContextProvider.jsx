import React, { useState } from "react";
import useContext from "./useContext";

const userContextProvider = ({ children }) => {
    const [user, setUser] = useState(null);
  return (
  <useContext.Provider value={{user, setUser}}>
    {children}
  </useContext.Provider>
  )
};

export default userContextProvider;
