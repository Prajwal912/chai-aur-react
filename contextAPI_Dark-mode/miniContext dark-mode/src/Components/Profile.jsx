import React, { useContext } from "react";
import userContext from "../context/userContext";

const Profile = () => {
  const { user } = useContext(userContext);
    return !user ? <div>Please Login</div> : <div>Welcome {user.userName}</div>;
  // if (!user) return <div>Please Login</div>
  // return  <div>Welcome {user.userName}</div>
};

export default Profile;
