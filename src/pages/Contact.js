import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import logo from '../logo.png';
import '../components/Style/Contact.css';

function ContactUs() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form Data:', formData);
    alert('Thank you for contacting us! We will get back to you soon.');
    setFormData({ name: '', email: '', message: '' }); // Clear form
  };

  return (
    <div className="ContactUs">
      <img src={logo} className="ContactUs-logo" alt="ZilBiz Logo" />
      <div className="container">
        <h2>Contact Us</h2>
        <p>Have questions or feedback? We'd love to hear from you!</p>
        <form className="contact-form" onSubmit={handleSubmit}>
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
          <div className="form-group">
            <textarea
              name="message"
              placeholder="Your Message"
              value={formData.message}
              onChange={handleChange}
              required
            />
          </div>
          <button type="submit">Send Message</button>
        </form>
        <Link to="/" className="back-home">
          Back to Home
        </Link>
      </div>
    </div>
  );
}

export default ContactUs;