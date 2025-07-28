import React from 'react';
import { FaArrowLeft, FaHome, FaUser, FaBriefcase, FaEnvelope } from 'react-icons/fa';
import './FloatingSidebars.css';

const FloatingSidebars = ({ onBackClick, onNavClick }) => {
  const leftMenuItems = [
    { icon: <FaArrowLeft />, label: 'Back', action: 'back' },
    { icon: <FaHome />, label: 'Home', action: 'home' },
  ];

  const rightMenuItems = [
    { icon: <FaUser />, label: 'About', action: 'about' },
    { icon: <FaBriefcase />, label: 'Projects', action: 'projects' },
    { icon: <FaEnvelope />, label: 'Contact', action: 'contact' },
  ];

  const handleClick = (action) => {
    if (action === 'back') {
      onBackClick();
    } else {
      onNavClick(action);
    }
  };

  return (
    <>
      {/* Left Floating Sidebar */}
      <div className="floating-sidebar left">
        {leftMenuItems.map((item, index) => (
          <button
            key={index}
            className="floating-btn"
            onClick={() => handleClick(item.action)}
            aria-label={item.label}
          >
            {item.icon}
            <span className="tooltip">{item.label}</span>
          </button>
        ))}
      </div>

      {/* Right Floating Sidebar */}
      <div className="floating-sidebar right">
        {rightMenuItems.map((item, index) => (
          <button
            key={index}
            className="floating-btn"
            onClick={() => handleClick(item.action)}
            aria-label={item.label}
          >
            {item.icon}
            <span className="tooltip">{item.label}</span>
          </button>
        ))}
      </div>
    </>
  );
};

export default FloatingSidebars;
