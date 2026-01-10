import React,{ useState } from "react";
import { ChatContext } from "./chatContext";

export const Chatstate = (props) => {
  const [Chat, SetChat] = useState([]);
  return (
    <ChatContext.Provider value={{ Chat, SetChat }}>
      {props.children}
    </ChatContext.Provider>
  );
};
