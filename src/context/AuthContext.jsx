import React, { createContext, useContext, useState } from "react";
import { currentUserContext } from "./CurrentUserContext";
import { tokencontext } from "./Tokencontext";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const { SetUser } = useContext(currentUserContext);
  const { settoken } = useContext(tokencontext);

  const login = (newToken, userData) => {
    localStorage.setItem("token", newToken);
    localStorage.setItem("currentUser", JSON.stringify(userData));
    settoken(newToken);
    SetUser(userData);
  };

  const logout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("currentUser");
    SetUser(null);
    settoken(null);
  };

  return (
    <AuthContext.Provider value={{ login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
