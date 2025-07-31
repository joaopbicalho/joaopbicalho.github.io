import React from 'react';
import { FaGithub, FaLinkedin, FaMapMarkerAlt, FaDownload } from 'react-icons/fa';
import './Sidebar.css';

const Sidebar = ({ isDarkMode }) => {
  const profileImage = `${import.meta.env.BASE_URL}media/me.JPG`;
  
  return (
    <div className="sidebar">
      <div className="profile-section">
        <div className="profile-image">
          <img src={profileImage} alt="Joao Pedro Bicalho" />
        </div>
        
        <div className="profile-info">
          <h2>Joao Pedro Bicalho</h2>
          <p className="designation">Software Engineer</p>
        </div>
        
        <div className="social-links">
          <a href="https://github.com/joaopbicalho/" target="_blank" rel="noopener noreferrer">
            <FaGithub size={18} />
          </a>
          <a href="https://www.linkedin.com/in/joaopedrobicalho/" target="_blank" rel="noopener noreferrer">
            <FaLinkedin size={18} />
          </a>
        </div>
      </div>
      
      <div className="contact-info">
        <div className="contact-item">
          <div className="contact-details">
            <span className="label">Email</span>
            <a href="mailto:joaopedrobicalho13@gmail.com">joaopedrobicalho13@gmail.com</a>
          </div>
        </div>
        
        <div className="contact-item">
          <div className="contact-icon">
            <FaMapMarkerAlt size={18} />
          </div>
          <div className="contact-details">
            <span className="label">Location</span>
            <span>Toronto, Canada</span>
          </div>
        </div>
      </div>
      
      <div className="download-cv">
        <a href="Resume (2).pdf" className="cv-button" download="Resume.pdf">
          <FaDownload size={18} />
          Download CV
        </a>
      </div>
    </div>
  );
};

export default Sidebar;
