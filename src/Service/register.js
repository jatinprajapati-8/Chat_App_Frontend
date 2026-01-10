import React from "react";
import axios from "axios";

// axios.defaults.baseURL = "http://localhost:5002/api/auth/";

const AUTH_API = axios.create({
  baseURL: "http://localhost:5002/api/auth/",
});

export const registerUser = async ({ name, email, password }) => {
  const res = await AUTH_API.post("register", { name, email, password });
  return res.data;
};

export const loginUser = async ({ email, password, navigate }) => {
  try {
    const res = await AUTH_API.post("login", { email, password });
    alert("Login Successful!");
    return res?.data;

  } catch (error) {
    console.error(error);
  }
};
