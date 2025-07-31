import React from 'react';
import { FaDownload, FaEnvelope, FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';
import './Hero.css';

const Hero = () => {
  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="hero">
      <div className="hero-background">
        <div className="floating-shapes">
          <div className="shape shape-1"></div>
          <div className="shape shape-2"></div>
          <div className="shape shape-3"></div>
        </div>
      </div>
      
      <div className="hero-content">
        <div className="hero-text">
          <div className="greeting">Hello, I'm</div>
          <h1>
            <span className="highlight">Joao Pedro Bicalho</span>
          </h1>
          <h2>Engineering Science Graduate</h2>
          <p>
            Engineering Science graduate from the University of Toronto with expertise in physics, 
            robotics, AI, and EEG/BCI technologies. Passionate about applying engineering principles 
            to solve complex problems and create innovative solutions.
          </p>
          
          <div className="hero-buttons">
            <button className="btn primary">
              <FaDownload />
              Download CV
            </button>
            <button className="btn secondary" onClick={scrollToContact}>
              <FaEnvelope />
              Contact Me
            </button>
          </div>

          <div className="social-links">
            <a href="#" className="social-link">
              <FaGithub />
            </a>
            <a href="#" className="social-link">
              <FaLinkedin />
            </a>
            <a href="#" className="social-link">
              <FaTwitter />
            </a>
          </div>
        </div>
        
        <div className="hero-image">
          <div className="profile-container">
            <div className="profile-circle">
              <img src={`${import.meta.env.BASE_URL}media/hero-image.svg`} alt="Joao Paulo" />
            </div>
            <div className="profile-glow"></div>
          </div>
        </div>
      </div>
      
      <div className="scroll-indicator">
        <div className="scroll-arrow"></div>
        <span>Scroll</span>
      </div>
    </section>
  );
};

export default Hero;
