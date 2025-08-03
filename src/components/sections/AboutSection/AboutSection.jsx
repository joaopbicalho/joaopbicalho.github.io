import React from 'react';
import './AboutSection.css';

const AboutSection = ({ isDarkMode, onNavigate }) => {
  return (
    <div id="about" className="about-section">
      {/* Navigation using state-based navigation similar to PortfolioSection */}
      <div className="top-navigation">
        <nav>
          <ul>
            <li><a href="#" onClick={(e) => { e.preventDefault(); onNavigate('about'); }} className="active">About</a></li>
            <li><a href="#" onClick={(e) => { e.preventDefault(); onNavigate('resume'); }}>Resume</a></li>
            <li><a href="#" onClick={(e) => { e.preventDefault(); onNavigate('portfolio'); }}>Portfolio</a></li>
            <li><a href="#" onClick={(e) => { e.preventDefault(); onNavigate('contact'); }}>Contact</a></li>
          </ul>
        </nav>
      </div>
      
      <div className="section-header">
        <h1>About</h1>
      </div>
      
      <div className="about-content">
        <div className="about-text">
          <p>
            I'm an Engineering Physics graduate from the University of Toronto with a passion for fundamental physics, software engineering, EEG and neurotechnology, and space exploration.
          </p>
          
          <p>
            My academic path included graduate-level courses in General Relativity, Particle Physics, and Computational Physics, alongside minors in Mechatronics, Robotics, and Artificial Intelligence. I developed signal processing pipelines and neural networks to classify sleep stages from EEG data—research that led to a conference paper at ICCCE and earned a conference Award.
          </p>
          
          <p>
            I completed two internships at Coactum, a Swiss aerospace startup developing an orbital transfer vehicle, where I developed a flight software testbench designing hardware for the HIL setup and writing software emulations for key avionics and sensors.
          </p>

          <p>
            I've lived in Italy, Brazil, Costa Rica, Canada, Switzerland, and now Germany—experiences that have shaped how I approach teamwork, communication, and engineering with a global mindset. In my free time, I enjoy hiking, surfing, and playing guitar.
          </p>

          <p>
            I'm driven by curiosity—whether it's decoding brainwaves, simulating satellites, or understanding the universe at its core.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutSection;
