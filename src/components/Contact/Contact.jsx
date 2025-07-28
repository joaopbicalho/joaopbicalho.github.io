import React, { useState } from 'react';
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaGithub, FaLinkedin, FaTwitter, FaPaperPlane } from 'react-icons/fa';
import './Contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setFormData({ name: '', email: '', subject: '', message: '' });
      alert('Message sent successfully!');
    }, 2000);
  };

  const contactInfo = [
    {
      icon: <FaEnvelope />,
      title: "Email",
      value: "joao.bicalho@example.com",
      link: "mailto:joao.bicalho@example.com"
    },
    {
      icon: <FaPhone />,
      title: "Phone",
      value: "+1 647 XXX XXXX",
      link: "tel:+1647XXXXXXX"
    },
    {
      icon: <FaMapMarkerAlt />,
      title: "Location",
      value: "Toronto, Canada",
      link: "#"
    }
  ];

  const socialLinks = [
    {
      icon: <FaGithub />,
      name: "GitHub",
      url: "#"
    },
    {
      icon: <FaLinkedin />,
      name: "LinkedIn", 
      url: "#"
    },
    {
      icon: <FaTwitter />,
      name: "Twitter",
      url: "#"
    }
  ];

  return (
    <section id="contact" className="contact">
      <div className="container">
        <h2 className="section-title">Get In Touch</h2>
        <p className="section-subtitle">
          I'm always open to discussing new opportunities and interesting projects
        </p>

        <div className="contact-content">
          <div className="contact-info">
            <h3>Let's Talk</h3>
            <p>
              I'm currently available for freelance work and full-time opportunities. 
              If you have a project in mind or just want to chat about web development, 
              feel free to reach out!
            </p>

            <div className="contact-details">
              {contactInfo.map((info, index) => (
                <a key={index} href={info.link} className="contact-item">
                  <div className="contact-icon">
                    {info.icon}
                  </div>
                  <div className="contact-text">
                    <h4>{info.title}</h4>
                    <span>{info.value}</span>
                  </div>
                </a>
              ))}
            </div>

            <div className="social-section">
              <h4>Follow Me</h4>
              <div className="social-links">
                {socialLinks.map((social, index) => (
                  <a key={index} href={social.url} className="social-link" title={social.name}>
                    {social.icon}
                  </a>
                ))}
              </div>
            </div>
          </div>

          <div className="contact-form-container">
            <form className="contact-form" onSubmit={handleSubmit}>
              <h3>Send Message</h3>
              
              <div className="form-row">
                <div className="form-group">
                  <input
                    type="text"
                    name="name"
                    placeholder="Your Name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="form-group">
                  <input
                    type="email"
                    name="email"
                    placeholder="Your Email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                </div>
              </div>

              <div className="form-group">
                <input
                  type="text"
                  name="subject"
                  placeholder="Subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="form-group">
                <textarea
                  name="message"
                  placeholder="Your Message"
                  rows="6"
                  value={formData.message}
                  onChange={handleChange}
                  required
                ></textarea>
              </div>

              <button type="submit" className="submit-btn" disabled={isSubmitting}>
                {isSubmitting ? (
                  <>
                    <div className="loading-spinner"></div>
                    Sending...
                  </>
                ) : (
                  <>
                    <FaPaperPlane />
                    Send Message
                  </>
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
