import React from 'react';
import './Footer.css';
import logo from '../assets/svg.png'; // Replace with the path to your logo
import icon from '../assets/SVG4.png'

const Footer = () => {
  return (
    <footer className="footer">
      {/* First List */}
      <div className="footer-list">
        <div className="footer-logo">
          <img src={logo} alt="FormBot Logo" />
          <span>FormBot</span>
        </div>
        <p className="footer-note">
          Made with ❤️ by <br/><a href="https://cuvette.tech" target="_blank">@cuvette</a>
        </p>
      </div>

      {/* Second List */}
      <div className="footer-list">
        <span className="footer-heading">Product</span>
        <a className="footer-item" href="#" target="_blank">
          Status<img src={icon} alt="OpenNewTab icon" />
        </a>
        <a className="footer-item" href="#" target="_blank">
          Documentation<img src={icon} alt="OpenNewTab icon" />
        </a>
        <a className="footer-item" href="#" target="_blank">
          Roadmap<img src={icon} alt="OpenNewTab icon" />
        </a>
        <a className="footer-item" href="#" target="_blank">
          Pricing
        </a>
      </div>

      {/* Third List */}
      <div className="footer-list">
        <span className="footer-heading">Community</span>
        <a className="footer-item" href="#" target="_blank">
          Discord<img src={icon} alt="OpenNewTab icon" />
        </a>
        <a className="footer-item" href="#" target="_blank">
          Github Repository<img src={icon} alt="OpenNewTab icon" />
        </a>
        <a className="footer-item" href="#" target="_blank">
          Twitter<img src={icon} alt="OpenNewTab icon" />
        </a>
        <a className="footer-item" href="#" target="_blank">
          LinkedIn<img src={icon} alt="OpenNewTab icon" />
        </a>
        <a className="footer-item" href="#">OSS Friends</a>
      </div>

      {/* Fourth List */}
      <div className="footer-list">
        <span className="footer-heading">Company</span>
        <a className="footer-item" href="#">About</a>
        <a className="footer-item" href="#">Terms of Service</a>
        <a className="footer-item" href="#">Privacy Policy</a>
      </div>
    </footer>
  );
};

export default Footer;
