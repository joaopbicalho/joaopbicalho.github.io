import React from 'react';
import './AboutSection.css';

const AboutSection = ({ isDarkMode }) => {
  return (
    <div id="about" className="about-section">
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
            I've also contributed to the next generation of the SuperBIT telescope and worked at a Swiss aerospace startup designing spacecraft hardware simulations and HIL testing frameworks.
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
