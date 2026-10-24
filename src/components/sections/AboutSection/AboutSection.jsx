import React from 'react';
import SectionNav from '../../SectionNav/SectionNav';
import './AboutSection.css';

const AboutSection = ({ onNavigate }) => {
  return (
    <div id="about" className="about-section">
      <SectionNav activeSection="about" onNavigate={onNavigate} />

      <div className="section-header">
        <h1>About</h1>
      </div>

      <div className="about-content">
        <div className="about-text">
          <p>
            I’m a Flight Software Engineer at The Exploration Company in Munich, working on
            Nyx — a modular, reusable spacecraft scheduled to dock to the ISS in 2028. I write the
            flight software for propulsion and for sequential — the separation and deployment
            events the vehicle gets one attempt at — and act as the software team’s point of
            contact for both.
          </p>

          <p>
            I studied Engineering Physics at the University of Toronto, with minors in
            Mechatronics, Robotics and Artificial Intelligence, and graduate-level courses in
            General Relativity, Particle Physics and Computational Physics.
          </p>

          <p>
            For a year I worked in Dr. Steve Mann’s lab on EEG, building signal processing
            pipelines and neural networks to classify sleep stages. That work became a{' '}
            <a
              href="https://ieeexplore.ieee.org/document/10929845"
              target="_blank"
              rel="noopener noreferrer"
              className="paper-link"
            >
              paper at IEEE ICCE 2025
            </a>{' '}
            and earned a conference award.
          </p>

          <p>
            Before that, two internships at Coactum, a Swiss startup building an orbital
            transfer vehicle. I built their flight software testbench from scratch — the
            hardware-in-the-loop setup, and software emulations of the avionics and sensors
            so the onboard software could be tested without the real units.
          </p>

          <p>
            I’ve lived in Italy, Brazil, Costa Rica, Canada, Switzerland and now Germany.
            Outside work I hike, surf, race triathlons and play guitar.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutSection;
