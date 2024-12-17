import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { loginUser } from "../service/userService"; // Adjust the import path based on your project structure
import "./login.css"; // Import the CSS file

interface LoginProps {}

const Login: React.FC<LoginProps> = () => {
  const [username, setUsername] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [error, setError] = useState<string>(""); // For handling errors
  const [loading, setLoading] = useState<boolean>(false); // To show loading state
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(""); // Reset error message on new submission

    try {
      const { token, userId } = await loginUser(username, password); // Call the loginUser service
      localStorage.setItem("token", token); // Store the token in localStorage
      navigate("/main"); // Redirect to the main page
    } catch (err: unknown) {
      if (err instanceof Error) {
        setError(err.message); // Set the error message if it's an instance of Error
      } else {
        setError("An unexpected error occurred. Please try again.");
      }
    }

    setLoading(false);
  };

  return (
    <div className="login-container">
      <h2>Login</h2>
      <form onSubmit={handleSubmit} className="login-form">
        <label htmlFor="username">Username:</label>
        <input
          type="text"
          id="username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          required
        />

        <label htmlFor="password">Password:</label>
        <input
          type="password"
          id="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />

        {error && <p className="error-message">{error}</p>} {/* Show error message if any */}

        <button type="submit" disabled={loading} className="submit-button">
          {loading ? "Logging in..." : "Login"}
        </button>
      </form>

      <p className="register-link">
        Don't have an account? <a href="/register">Register</a>
      </p>
    </div>
  );
};

export default Login;
