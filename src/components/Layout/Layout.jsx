import React, { useState } from 'react';
import Header from '../Header/Header';
import Hero from '../Hero/Hero';
import AboutSection from '../sections/AboutSection/AboutSection';
import PortfolioSection from '../sections/PortfolioSection/PortfolioSection';
import './Layout.css';

const Layout = () => {
  const [isDarkMode, setIsDarkMode] = useState(true);

  return (
    <div className={`layout ${isDarkMode ? 'dark' : 'light'}`}>
      <div className="main-container">
        <div className="content">
          <Header />
          <Hero />
          <AboutSection />
          <PortfolioSection />
          <div style={{ 
            padding: '40px', 
            color: 'white', 
            backgroundColor: '#1a1a2e',
            minHeight: '20vh'
          }}>
            <h1 style={{ color: '#00d4ff', fontSize: '2rem', marginBottom: '20px' }}>
              Test Status: All Main Components Added
            </h1>
            <p style={{ fontSize: '1rem', color: '#b8b8b8' }}>
              Header, Hero, About, and Portfolio sections are all loading.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Layout;
