import React from "react";
import { Link } from "react-router-dom";
import "./SigninComponents.css";
import googleIcon from "../assets/SVG9.png";
import SVG5 from '../assets/SVG5.png';
import SVG6 from '../assets/SVG6.png';
import SVG7 from '../assets/SVG7.png';
import SVG8 from '../assets/SVG8.png';

function Design(props) {
  return (
    <>
      <div class="back-button">
        <Link to={props.linkto}>
          <img src={SVG8} alt="Back" />
        </Link>
      </div>

      <img src={SVG5} alt="Design 1" class="svg-image svg5" />

      <img src={SVG6} alt="Design 2" class="svg-image svg6" />

      <img src={SVG7} alt="Design 3" class="svg-image svg7" />
    </>
  );
}
export {Design};

function SigninComponents(props) {
  return (
    <div className="email-container">
      <label htmlFor={props.html} className="email-label">
        {props.label}
      </label>
      <input
        type={props.type}
        id={props.id}
        placeholder={props.enter}
        className="email-input"
      />
    </div>
  );
}
export { SigninComponents };

function LoginButton(props) {
  return <button className="login-button" onClick={props.onClick}>{props.btxt}</button>;
}
export { LoginButton };

function OR() {
  return <div className="or-text">OR</div>;
}
export { OR };

function GoogleButton(props) {
  return (
    <button class="google-signin-btn">
      <div class="google-icon-container">
        <img src={googleIcon} class="google-icon" alt="Google Icon" />
      </div>
      <span>{props.gbtxt}</span>
    </button>
  );
}
export { GoogleButton };

function Text(props) {
  return (
    <div class="register-container">
      <span class="register-text">{props.text}</span>
      <Link to={props.linkto} class="register-link">
        {props.link}
      </Link>
    </div>
  );
}
export { Text };
