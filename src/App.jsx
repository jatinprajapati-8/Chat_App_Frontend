import React, { useContext } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Landingpage from "./pages/Landingpage";
import RegisterPage from "./pages/Register";
import LoginPage from "./pages/Login";
import About from "./pages/About";
import Chat from "./pages/ChatList";
import HomeLayout from "./layout/applayout";
import { tokencontext } from "./context/Tokencontext";

const App = () => {
  const { token } = useContext(tokencontext);
  return (
    <Routes>
      <Route path="/" element={<HomeLayout />}>
        <Route
          index
          element={token ? <Navigate to="/chat" replace /> : <Landingpage />}
        />
        <Route
          path="/register"
          element={token ? <Navigate to="/chat" replace /> : <RegisterPage />}
        />
        <Route
          path="/login"
          element={token ? <Navigate to="/chat" replace /> : <LoginPage />}
        />
        <Route path="/about" element={<About />} />
        <Route
          path="/chat"
          element={token ? <Chat /> : <Navigate to="/login" replace />}
        />
      </Route>
    </Routes>
  );
};

export default App;

{
  /* fallback - unknown paths -> landing or chat */
}
{
  /* <Route
  path="*"
  element={token ? <Navigate to="/chat" replace /> : <Navigate to="/" replace />}
  /> */
}
