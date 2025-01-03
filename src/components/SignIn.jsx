import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./signin.css";
import {
  Design,
  GoogleButton,
  LoginButton,
  OR,
  Text,
  SigninComponents,
} from "./SigninComponents";
import { toast } from 'react-toastify';

const SignIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = async () => {
    const response = await fetch("http://localhost:5000/api/auth/signin", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email, password }),  
    });

    const data = await response.json();

    if (response.ok) {
      toast.success("Login successful!");
      navigate("/workspacepage"); // Redirect to WorkspacePage after successful login
    } else {
      toast.error(data.error); // Display error message (e.g., invalid credentials)
    }
  };

  return (
    <div className="signin-container">

      <Design linkto="/" />

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

      <LoginButton btxt="Log In" onClick={handleLogin} />
      <OR />
      <GoogleButton gbtxt="Sign In with Google" />
      <Text
        text="Don’t have an account?"
        link="Register Now"
        linkto="/register"
      />
    </div>
  );
};

export default SignIn;
