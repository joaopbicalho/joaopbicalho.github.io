import React, { useState, useRef, useEffect } from 'react';
import emailjs from '@emailjs/browser';
import { FaPaperPlane } from 'react-icons/fa';
import './ContactSection.css';

const ContactSection = ({ isDarkMode }) => {
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
    console.log('Form submission started');
    setFormStatus({ submitting: true, submitted: false, error: false });

    // Get form data
    const formElement = form.current;
    console.log('Form element:', formElement);
    console.log('Form data:', formData);

    emailjs.sendForm(
      'service_ylapmk8', // Your EmailJS service ID
      'template_n2w53jc', // Your EmailJS template ID
      formElement,
      '1Qwax90jgbXArP6na' // Your EmailJS public key
    )
      .then((result) => {
        console.log('SUCCESS!', result.status, result.text);
        setFormStatus({ submitting: false, submitted: true, error: false });
        setFormData({ name: '', email: '', subject: '', message: '' });
      })
      .catch((error) => {
        console.log('FAILED...', error);
        console.error('Error details:', error.text || error.message || error);
        setFormStatus({ submitting: false, submitted: false, error: true });
      });
  };

  return (
    <div className="contact-section">
      <div className="section-header">
        <h1>Contact</h1>
      </div>
      
      <div className="contact-content">
        <div className="contact-info">
          <h2>Get In Touch</h2>
          <p>
            I'm always open to discussing new opportunities and interesting projects. 
            Feel free to reach out if you'd like to collaborate!
          </p>
        </div>

        <div className="contact-form-container">
          {formStatus.submitted ? (
            <div className="success-message">
              <h3>Thank you for your message!</h3>
              <p>I'll get back to you as soon as possible.</p>
              <button 
                onClick={() => setFormStatus({submitting: false, submitted: false, error: false})}
                className="send-another-btn"
              >
                Send Another Message
              </button>
            </div>
          ) : (
            <form ref={form} onSubmit={handleSubmit} className="contact-form">
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
                  <p><small>Check the browser console for more details.</small></p>
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
