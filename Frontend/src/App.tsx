import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./pages/login";
import Register from "./pages/register";
import Main from "./pages/main";

const App: React.FC = () => {

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} /> {/* Default route points to Login */}
        <Route path="/main" element={<Main />} /> {/* Main page moved to /main */}
        <Route path="/register" element={<Register />} />
      </Routes>
    </Router>
  );
};

export default App;
