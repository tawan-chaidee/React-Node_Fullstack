import React, { useState, useEffect } from "react";
import "./navbar.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSignOutAlt } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";

const Navbar: React.FC = () => {
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);
  const navigate = useNavigate();

  // Check if user is logged in by verifying the token
  useEffect(() => {
    const token = localStorage.getItem("token");
    setIsLoggedIn(!!token); // Set to true if token exists
  }, []);

  // Logout handler
  const handleLogout = () => {
    localStorage.removeItem("token"); // Clear the token
    setIsLoggedIn(false);
    navigate("/"); // Redirect to login page
  };

  return (
    <div>
      <div className="navbar">
        <div className="todo-list-header">User Management</div>
        {isLoggedIn ? (
          <div className="user-profile" onClick={handleLogout}>
            <FontAwesomeIcon icon={faSignOutAlt} size="2x" />
            <span className="login-text">Logout</span>
          </div>
        ) : (
          <div className="user-profile" onClick={() => navigate("/")}>
            <FontAwesomeIcon icon={faSignOutAlt} size="2x" />
            <span className="login-text">Login</span>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
