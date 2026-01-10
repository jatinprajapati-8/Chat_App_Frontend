import React, { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { BrowserRouter } from "react-router-dom";
import Tokenstate from "./context/Tokenstate.jsx";
import { AuthProvider } from "./context/AuthContext.jsx";
import { Chatstate } from "./context/Chatstate.jsx";
import { CurrentUserState } from "./context/CurrentuserState.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <CurrentUserState>
      <Tokenstate>
        <AuthProvider>
          <BrowserRouter>
            <Chatstate>
              <App />
            </Chatstate>
          </BrowserRouter>
        </AuthProvider>
      </Tokenstate>
    </CurrentUserState>
  </StrictMode>
);
