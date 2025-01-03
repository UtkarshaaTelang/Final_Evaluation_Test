import React from 'react';
import './LandingPage.css'; // Import CSS
import svg2 from '../assets/svg2.png'; // Adjust path as per your project
import svg3 from '../assets/svg3.png'; // Adjust path as per your project
import figure from '../assets/figure.png';

const LandingPage = () => {
  return (
    <div className="landing-page">

      {/* SVG2 Image */}
      <img src={svg2} alt="SVG2" className="svg2" />

      {/* Main Heading */}
      <h1 className="heading">Build advanced chatbots visually</h1>

      {/* Subtext */}
      <p className="subtext">
        Typebot gives you powerful blocks to create unique chat experiences. Embed them
        anywhere on your web/mobile apps and start collecting results like magic.
      </p>

      {/* Button */}
      <button className="create-bot-btn">Create a FormBot for free</button>

      {/* SVG3 Image */}
      <img src={svg3} alt="SVG3" className="svg3" />

      <div className="background-blur-orange"></div>
      <div className="background-blur-blue"></div>

      <div className="figure-image">
        <img src={figure} alt="Figure" style={{ width: '100%', height: '100%' }} />
      </div>

    </div>
  );
};

export default LandingPage;
