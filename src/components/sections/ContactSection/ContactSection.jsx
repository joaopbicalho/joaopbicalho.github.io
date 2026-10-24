import React, { useState, useRef, useEffect } from 'react';
import emailjs from '@emailjs/browser';
import { FaPaperPlane } from 'react-icons/fa';
import SectionNav from '../../SectionNav/SectionNav';
import './ContactSection.css';

const ContactSection = ({ onNavigate }) => {
  const form = useRef();
  const [formStatus, setFormStatus] = useState({
    submitting: false,
    submitted: false,
    error: false
  });
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  // Initialize EmailJS
  useEffect(() => {
    emailjs.init('1Qwax90jgbXArP6na');
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormStatus({ submitting: true, submitted: false, error: false });

    emailjs.sendForm(
      'service_ylapmk8', // Your EmailJS service ID
      'template_n2w53jc', // Your EmailJS template ID
      form.current,
      '1Qwax90jgbXArP6na' // Your EmailJS public key
    )
      .then(() => {
        setFormStatus({ submitting: false, submitted: true, error: false });
        setFormData({ name: '', email: '', subject: '', message: '' });
      })
      .catch((error) => {
        console.error('Contact form submission failed:', error.text || error.message || error);
        setFormStatus({ submitting: false, submitted: false, error: true });
      });
  };

  return (
    <div className="contact-section">
      <SectionNav activeSection="contact" onNavigate={onNavigate} />

      <div className="section-header">
        <h1>Contact</h1>
      </div>
      
      <div className="contact-content">
        <div className="contact-info">
          <p>
            I’m always open to discussing new opportunities and interesting projects, but I also love chatting about travel adventures, any of my work, or the places I’ve lived.
            Feel free to reach out. I’d love to connect and hear your story too!
          </p>
        </div>

        <div className="contact-form-container">
          {formStatus.submitted ? (
            <div className="success-message">
              <h3>Thank you for your message!</h3>
              <p>I’ll get back to you as soon as possible.</p>
              <button 
                onClick={() => setFormStatus({submitting: false, submitted: false, error: false})}
                className="send-another-btn"
              >
                Send Another Message
              </button>
            </div>
          ) : (
            <form ref={form} onSubmit={handleSubmit} className="contact-form">
              {/* The labels are visually hidden: the placeholders carry the
                  design, but a placeholder is not an accessible name and
                  disappears as soon as the field has text. */}
              <div className="form-row">
                <div className="form-group">
                  <label className="sr-only" htmlFor="contact-name">Your name</label>
                  <input
                    id="contact-name"
                    type="text"
                    name="name"
                    placeholder="Your Name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="form-group">
                  <label className="sr-only" htmlFor="contact-email">Your email</label>
                  <input
                    id="contact-email"
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
                <label className="sr-only" htmlFor="contact-subject">Subject</label>
                <input
                  id="contact-subject"
                  type="text"
                  name="subject"
                  placeholder="Subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="form-group">
                <label className="sr-only" htmlFor="contact-message">Your message</label>
                <textarea
                  id="contact-message"
                  name="message"
                  placeholder="Your Message"
                  rows="10"
                  value={formData.message}
                  onChange={handleChange}
                  required
                ></textarea>
              </div>
              
              <button 
                type="submit" 
                className="submit-btn"
                disabled={formStatus.submitting}
              >
                {formStatus.submitting ? 'Sending...' : <><FaPaperPlane /> Send Message</>}
              </button>
              
              {formStatus.error && (
                <div className="error-message">
                  <p>Something went wrong. Please try again later or contact me directly at joaopedrobicalho13@gmail.com</p>
                </div>
              )}
            </form>
          )}
        </div>

        
      </div>
    </div>
  );
};

export default ContactSection;
