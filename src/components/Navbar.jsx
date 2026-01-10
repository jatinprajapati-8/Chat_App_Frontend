import React, { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import ChatIcon from "./Icon";
import { AuthContext } from "../context/AuthContext";
import { tokencontext } from "../context/Tokencontext";

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const navigate = useNavigate();

  // auth check
  const { token } = useContext(tokencontext);
  const { logout } = useContext(AuthContext);

  // logout handler
  const handleLogout = () => {
    logout();
    setMobileMenuOpen(false);
    navigate("/login");
  };

  return (
    <>
      <nav className="flex w-full h-14 bg-[#0a0f2814] backdrop-blur-2xl items-center justify-between px-4 md:px-8 fixed top-0 z-50">
          <Link to="/">
            <ChatIcon size={50} />
          </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex gap-4">
          {!token ? (
            <>
              <Link
                to="/register"
                className="bg-gradient-to-br from-blue-500 to-purple-600 text-white px-6 py-2 rounded-lg font-medium hover:opacity-70"
              >
                Register
              </Link>
              <Link
                to="/login"
                className="bg-gradient-to-br from-blue-500 to-purple-600 text-white px-6 py-2 rounded-lg font-medium hover:opacity-70"
              >
                Login
              </Link>
            </>
          ) : (
            <button
              onClick={handleLogout}
              className="bg-gradient-to-br from-blue-500 to-purple-600 text-white px-6 py-2 rounded-lg font-medium hover:opacity-70"
            >
              Logout
            </button>
          )}
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden text-white p-2"
        >
          {mobileMenuOpen ? (
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          ) : (
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          )}
        </button>
      </nav>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden fixed top-14 left-0 right-0 bg-[#0a0f2814] backdrop-blur-2xl z-40 p-4 space-y-3">
          {!token ? (
            <>
              <Link
                to="/register"
                onClick={() => setMobileMenuOpen(false)}
                className="block w-full bg-gradient-to-br from-blue-500 to-purple-600 text-white px-6 py-3 rounded-lg text-center"
              >
                Register
              </Link>
              <Link
                to="/login"
                onClick={() => setMobileMenuOpen(false)}
                className="block w-full bg-gradient-to-br from-blue-500 to-purple-600 text-white px-6 py-3 rounded-lg text-center"
              >
                Login
              </Link>
            </>
          ) : (
            <button
              onClick={handleLogout}
              className="block w-full bg-gradient-to-br from-blue-500 to-purple-600 text-white px-6 py-3 rounded-lg text-center"
            >
              Logout
            </button>
          )}
        </div>
      )}
    </>
  );
};

export default Navbar;
