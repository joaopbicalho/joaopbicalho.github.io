import React from 'react';
import { FaGithub, FaLinkedinIn, FaFileAlt } from 'react-icons/fa';
import { MdOutlineEmail, MdOutlineLocationOn } from 'react-icons/md';
import './Sidebar.css';

const Sidebar = () => {
  const profileImage = `${import.meta.env.BASE_URL}media/me.JPG`;
  
  return (
    <div className="sidebar">
      <div className="profile-section">
        <div className="profile-image-container">
          <div className="profile-image">
            {/* Largest element on the landing view, so load it eagerly and give
                it intrinsic dimensions to keep the card from reflowing. */}
            <img
              src={profileImage}
              alt="João Pedro Bicalho"
              width="180"
              height="180"
              fetchPriority="high"
              decoding="async"
            />
          </div>
        </div>
        <div className="profile-info">
          <h2>João Pedro Bicalho</h2>
          <div className="title-and-contact-row">
            <div className="title-social-group">
              <p className="designation">Flight Software Engineer</p>
              
              {/* Mobile social links under designation */}
              <div className="social-links social-links-mobile">
                <a href="https://github.com/joaopbicalho" target="_blank" rel="noopener noreferrer" title="GitHub">
                  <FaGithub />
                </a>
                <a href="https://www.linkedin.com/in/joaopedrobicalho/" target="_blank" rel="noopener noreferrer" title="LinkedIn">
                  <FaLinkedinIn />
                </a>
                <a href="mailto:joaopedrobicalho13@gmail.com" title="Email">
                  <MdOutlineEmail />
                </a>
                <a href={`media/resume.pdf`} target="_blank" rel="noopener noreferrer" title="Resume">
                  <FaFileAlt />
                </a>
              </div>
              
              {/* Desktop-only email text (no icon) */}
              <div className="email-text-desktop">
                <a href="mailto:joaopedrobicalho13@gmail.com">joaopedrobicalho13@gmail.com</a>
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
      
      {/* Desktop only: .contact-info and .location-desktop are hidden under the
          mobile breakpoint, where the social row already carries the contacts. */}
      <div className="contact-info">
        <div className="contact-item-new location-desktop">
          <div className="contact-icon-new">
            <MdOutlineLocationOn />
          </div>
          <div className="contact-details-new">
            <span>Munich, Germany</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
