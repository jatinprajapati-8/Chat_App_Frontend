import react from "react";
import axios from "axios";

const CHAT_API = axios.create({
  baseURL: "http://localhost:5002/api/chats",
});

export const getallchats = async (token) => {
  const list = await CHAT_API.get("/", {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return list
};

