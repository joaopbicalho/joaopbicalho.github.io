import React from 'react';
import { FaGithub, FaLinkedinIn, FaFileAlt } from 'react-icons/fa';
import { MdOutlineEmail, MdOutlineLocationOn } from 'react-icons/md';
import './Sidebar.css';

const Sidebar = ({ isDarkMode }) => {
  const profileImage = `${import.meta.env.BASE_URL}media/me.JPG`;
  
  return (
    <div className="sidebar">
      <div className="profile-section">
        <div className="profile-image-container">
          <div className="profile-image">
            <img src={profileImage} alt="Joao Pedro Bicalho" />
          </div>
          {/* Social links moved under profile picture for mobile */}
          <div className="social-links">
            <a href="https://github.com/joaopbicalho" target="_blank" rel="noopener noreferrer" title="GitHub">
              <FaGithub />
            </a>
            <a href="https://www.linkedin.com/in/joaopedrobicalho/" target="_blank" rel="noopener noreferrer" title="LinkedIn">
              <FaLinkedinIn />
            </a>
            <a href={`media/resume.pdf`} target="_blank" rel="noopener noreferrer" title="Resume">
              <FaFileAlt />
            </a>
          </div>
        </div>
        <div className="profile-info">
          <h2>João Pedro Bicalho</h2>
          <div className="title-and-contact-row">
            <div className="title-social-group">
              <p className="designation">Software Engineer</p>
              
              {/* Desktop-only email text (no icon) */}
              <div className="email-text-desktop">
                <a href="mailto:joaopbandrade@gmail.com">joaopedrobicalho13@gmail.com</a>
              </div>
              
              {/* Mobile-only email text (no icon) */}
              <div className="email-text-mobile">
                <a href="mailto:joaopbandrade@gmail.com">joaopedrobicalho13@gmail.com</a>
              </div>
              
              {/* Social links for desktop only - mobile moved to profile-image-container */}
              <div className="social-links social-links-desktop">
                <a href="https://github.com/joaopbicalho" target="_blank" rel="noopener noreferrer" title="GitHub">
                  <FaGithub />
                </a>
                <a href="https://www.linkedin.com/in/joaopedrobicalho/" target="_blank" rel="noopener noreferrer" title="LinkedIn">
                  <FaLinkedinIn />
                </a>
                <a href={`media/resume.pdf`} target="_blank" rel="noopener noreferrer" title="Resume">
                  <FaFileAlt />
                </a>
              </div>
            </div>
            
            {/* Location contact for mobile - now hidden */}
            <div className="contact-mobile" style={{ display: 'none' }}>
            </div>
          </div>
        </div>
      </div>
      
      {/* Updated contact info with new styling to match reference
      <div className="contact-info">        
        <div className="contact-item-new location-desktop">
          <div className="contact-icon-new">
            <MdOutlineLocationOn />
          </div>
          <div className="contact-details-new">
            <span>Toronto, CA</span>
          </div>
        </div>
      </div>
       */}

    </div>
  );
};

export default Sidebar;
