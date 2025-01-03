import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./signin.css";
import {
  Design,
  LoginButton,
  OR,
  GoogleButton,
  Text,
  SigninComponents,
} from "./SigninComponents";
import { toast } from 'react-toastify';

const Register = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const navigate = useNavigate();

  const handleRegister = async () => {
    if (password !== confirmPassword) {
      toast.error("Passwords do not match!");
      return;
    }

    // Make API request to register
    const response = await fetch("http://localhost:5000/api/auth/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        username,
        email,
        password,
        confirmPassword,
      }),
    });

    const data = await response.json();

    if (response.ok) {
      toast.success("Registration successful! Please login.");
      navigate("/SignIn"); // Navigate to the SignIn page after registration
    } else {
      toast.error(data.error); // Show error toast for registration failure
    }
  };

  return (
    <div className="signin-container">
      <Design linkto="/SignIn" />

      <SigninComponents label="Username" enter="Enter a username" value={username}
        onChange={(e) => setUsername(e.target.value)} />
      <SigninComponents
        html="email"
        type="email"
        id="email"
        label="Email"
        enter="Enter your email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <SigninComponents
        html="password"
        type="password"
        id="password"
        label="Password"
        enter="**********"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <SigninComponents
        html="password"
        type="password"
        id="password"
        label="Confirm Password"
        enter="**********"
        value={confirmPassword}
        onChange={(e) => setConfirmPassword(e.target.value)}
      />
      <LoginButton btxt="Sign Up" onClick={handleRegister} />
      <OR />
      <GoogleButton gbtxt="Sign Up with Google" />
      <Text text="Already have an account ?" link="Login" linkto="/SignIn" />
    </div>
  );
};

export default Register;
