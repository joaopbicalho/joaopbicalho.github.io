import React from 'react';
import { FaSun, FaMoon } from 'react-icons/fa';
import './ThemeToggle.css';

const ThemeToggle = ({ isDarkMode, toggleTheme }) => {
  return (
    <button className="theme-toggle" onClick={toggleTheme}>
      <div className={`toggle-slider ${isDarkMode ? 'dark' : 'light'}`}>
        <div className="toggle-icon">
          {isDarkMode ? <FaMoon /> : <FaSun />}
        </div>
      </div>
    </button>
  );
};

export default ThemeToggle;
