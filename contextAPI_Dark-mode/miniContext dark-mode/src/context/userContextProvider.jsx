import React, { useState } from "react";
import userContext from "./userContext";

const userContextProvider = ({ children }) => {
const [user, setUser] = useState(null);
  return (
  <userContext.Provider value={{user, setUser}}>
    {children}
  </userContext.Provider>
  )
};

export default userContextProvider;


// this is an global file context store where we store or 
// wrap all the components div or any block and we can access the divs or say any variable data