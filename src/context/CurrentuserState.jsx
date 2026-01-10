import React, { useState } from "react";
import { currentUserContext } from "./CurrentUserContext";

export const CurrentUserState = (props) => {
  const [User, SetUser] = useState(JSON.parse(localStorage.getItem("currentUser")));
  return (
    <currentUserContext.Provider value={{ User, SetUser }}>
      {props.children}
    </currentUserContext.Provider>
  );
};