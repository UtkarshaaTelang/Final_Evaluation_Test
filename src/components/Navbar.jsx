import React from "react";
import { useNavigate } from 'react-router-dom';
import "../styles/Navbar.css"; // Import the CSS file
import logo from "../assets/svg.png"; // Import the logo

const Navbar = () => {
  const navigate = useNavigate();
  
  return (
    <nav className="navbar">
      {/* Left Section */}
      <div className="nav-left">
        <img src={logo} alt="logo" width="35" height="35" />
        <span>FormBot</span>
      </div>

      {/* Right Section */}
      <div className="nav-right">
        <button onClick={() => navigate('/SignIn')} className="sign-in-btn">Sign In</button>
        <button onClick={() => navigate('/signin')} className="create-btn">Create a FormBot</button>
      </div>
    </nav>
  );
};



export default Navbar;
