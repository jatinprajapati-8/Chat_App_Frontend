import React, { useState } from "react";
import { tokencontext } from "./Tokencontext";

const Tokenstate = (props) => {
  const [token, settoken] = useState(localStorage.getItem("token"));
  return (
    <tokencontext.Provider value={{ token, settoken }}>
      {props.children}
    </tokencontext.Provider>
  );
};

export default Tokenstate;
