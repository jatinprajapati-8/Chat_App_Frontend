import React from "react";
import axios from "axios";

const message_API = axios.create({
  baseURL: "http://localhost:5002/api/message",
});

export const getmessages = async (token, chatid) => {
  const messages = await message_API.get(`/${chatid}`, {
    headers: { Authorization: `Bearer ${token}` },
  });
  return messages;
};

export const sendmessage = async (token, chatId, text, type) => {
  // console.log({
  //   token,
  //   chatId,
  //   text,
  //   type,
  // });

  const res = await message_API.post(
    "/",
    { chatId, text, type },
    {
      headers: { Authorization: `Bearer ${token}` },
    }
  );
  return res;
};
