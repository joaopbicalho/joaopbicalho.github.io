import React from 'react';
import { FaUser, FaBriefcase, FaEnvelope, FaGraduationCap } from 'react-icons/fa';
import './Navigation.css';

const Navigation = ({ activeSection, onSectionChange }) => {
  const navItems = [
    { id: 'about', label: 'About', icon: <FaUser /> },
    { id: 'resume', label: 'Resume', icon: <FaGraduationCap /> },
    { id: 'projects', label: 'Portfolio', icon: <FaBriefcase /> },
    { id: 'contact', label: 'Contact', icon: <FaEnvelope /> },
  ];

  const handleNavClick = (sectionId) => {
    onSectionChange(sectionId);
  };

  return (
    <nav className="navigation">
      <ul className="nav-list">
        {navItems.map((item) => (
          <li key={item.id} className="nav-item">
            <button
              className={`nav-button ${activeSection === item.id ? 'active' : ''}`}
              onClick={() => handleNavClick(item.id)}
              aria-label={item.label}
            >
              <span className="nav-icon">{item.icon}</span>
              <span className="nav-label">{item.label}</span>
            </button>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navigation;
