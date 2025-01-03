import React, { useState } from "react";
import { SlArrowDown } from "react-icons/sl";
import { FiFolderPlus } from "react-icons/fi";
import { RiDeleteBin6Line } from "react-icons/ri";
import { MdClose } from "react-icons/md";
import { IoMdArrowDropdown } from "react-icons/io";
import "./workspace.css";

const WorkspacePage = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(true); // Default is dark mode

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);

    if (isDarkMode) {
      document.body.classList.add("light-mode");
    } else {
      document.body.classList.remove("light-mode");
    }
  };

  return (
    <div className="workspace-page">
      <header className="workspace-header">
        <div className={`username-section ${isDropdownOpen ? "expanded" : ""}`}>
          <span className="username-text">Utkarshaa Telang's Workspace</span>
          <button
            className={`dropdown-btn ${isDropdownOpen ? "open" : ""}`}
            onClick={toggleDropdown}
          >
            <SlArrowDown color="#FFFFFFEB" className="dropdown-icon" />
          </button>
        </div>
        {isDropdownOpen && (
          <div className="dropdown-menu">
            <div className="dropdown-item">Settings</div>
            <div className="dropdown-item logout-btn">Log Out</div>
          </div>
        )}

        <div className="mode">
          Light
          <div
            className="toggle-switch"
            style={{ backgroundColor: isDarkMode ? "#1A5FFF" : "#B1B1B1" }}
            onClick={toggleTheme}
          >
            <div
              className="switch-state"
              style={{
                transform: isDarkMode ? "translateX(30px)" : "translateX(0px)",
              }}
            ></div>
          </div>
          Dark
        </div>
        <button className="share-btn">Share</button>
      </header>
      <div className="content">
        <div>
           <div className="create-folder"><FiFolderPlus color="#FFFFFFEB"/>Create a folder</div>
        </div>
        <div>
            <div className="create-form"><span>+</span><span>Create a typebot</span></div>
        </div>
      </div>
    </div>
  );
};

export default WorkspacePage;
