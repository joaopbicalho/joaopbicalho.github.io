import React, { useState, useEffect } from 'react'
import './App.css'
import Sidebar from './components/Sidebar/Sidebar'
import ThemeToggle from './components/ThemeToggle/ThemeToggle'
import AboutSection from './components/sections/AboutSection/AboutSection'
import ResumeSection from './components/sections/ResumeSection/ResumeSection'
import PortfolioSection from './components/sections/PortfolioSection/PortfolioSection'
import ContactSection from './components/sections/ContactSection/ContactSection'

export default function App() {
  const [activeSection, setActiveSection] = useState('about');
  const [isDarkMode, setIsDarkMode] = useState(() => {
    // Get theme from localStorage or default to dark
    const savedTheme = localStorage.getItem('theme');
    return savedTheme ? savedTheme === 'dark' : true;
  });

  useEffect(() => {
    // Set initial theme
    document.documentElement.setAttribute('data-theme', isDarkMode ? 'dark' : 'light');
  }, []);

  const toggleTheme = () => {
    const newTheme = !isDarkMode;
    setIsDarkMode(newTheme);
    document.documentElement.setAttribute('data-theme', newTheme ? 'dark' : 'light');
    // Persist theme preference
    localStorage.setItem('theme', newTheme ? 'dark' : 'light');
  };

  // Navigation handler function to be passed to each section
  const handleNavigate = (section) => {
    setActiveSection(section);
  };

  const renderActiveSection = () => {
    switch (activeSection) {
      case 'about':
        return <div className="section-wrapper">
          <AboutSection isDarkMode={isDarkMode} onNavigate={handleNavigate} />
        </div>;
      case 'resume':
        return <div className="section-wrapper">
          <ResumeSection isDarkMode={isDarkMode} onNavigate={handleNavigate} />
        </div>;
      case 'portfolio':
        return <div className="section-wrapper">
          <PortfolioSection isDarkMode={isDarkMode} onNavigate={handleNavigate} />
        </div>;
      case 'contact':
        return <div className="section-wrapper">
          <ContactSection isDarkMode={isDarkMode} onNavigate={handleNavigate} />
        </div>;
      default:
        return <div className="section-wrapper">
          <AboutSection isDarkMode={isDarkMode} onNavigate={handleNavigate} />
        </div>;
    }
  };

  return (
    <div className="App" style={{ display: 'flex', minHeight: '100vh' }}>
      {/* Left Sidebar */}
      <div style={{ width: '300px', flexShrink: 0 }}>
        <Sidebar isDarkMode={isDarkMode} />
      </div>
      
      {/* Theme Toggle - Hidden for now */}
      {/* <ThemeToggle isDarkMode={isDarkMode} toggleTheme={toggleTheme} /> */}
      
      {/* Main Content Area */}
      <div className="main-content">
        {renderActiveSection()}
      </div>
    </div>
  )
}