import React from 'react';
import AboutSection from '../sections/AboutSection/AboutSection';
import ResumeSection from '../sections/ResumeSection/ResumeSection';
import PortfolioSection from '../sections/PortfolioSection/PortfolioSection';
import ContactSection from '../sections/ContactSection/ContactSection';
import './MainContent.css';

const MainContent = ({ activeSection, isDarkMode }) => {
  const renderSection = () => {
    switch (activeSection) {
      case 'about':
        return <AboutSection isDarkMode={isDarkMode} />;
      case 'resume':
        return <ResumeSection isDarkMode={isDarkMode} />;
      case 'portfolio':
        return <PortfolioSection isDarkMode={isDarkMode} />;
      case 'contact':
        return <ContactSection isDarkMode={isDarkMode} />;
      default:
        return <AboutSection isDarkMode={isDarkMode} />;
    }
  };

  return (
    <div className="main-content">
      <div className="content-container">
        {renderSection()}
      </div>
    </div>
  );
};

export default MainContent;
