import React, { useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { FcGoogle } from 'react-icons/fc';
import ReCAPTCHA from "react-google-recaptcha";
import '../components/Style/Business_signup.css';

function BusinessSignup() {
  const recaptchaRef = useRef();
  const [formErrors, setFormErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const validateForm = (formData) => {
    const errors = {};
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    
    if (!formData.get('name')?.trim()) {
      errors.name = 'Business name is required';
    } else if (formData.get('name').length < 3) {
      errors.name = 'Business name must be at least 3 characters';
    }
    
    if (!formData.get('email')?.trim()) {
      errors.email = 'Email is required';
    } else if (!emailRegex.test(formData.get('email'))) {
      errors.email = 'Please enter a valid email';
    }
    
    if (!formData.get('password')) {
      errors.password = 'Password is required';
    } else if (formData.get('password').length < 8) {
      errors.password = 'Password must be at least 8 characters';
    }
    
    return errors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    const formData = new FormData(e.target);
    const errors = validateForm(formData);
    setFormErrors(errors);
    
    if (Object.keys(errors).length === 0) {
      try {
        const token = await recaptchaRef.current.executeAsync();
        console.log('reCAPTCHA token:', token);

        const data = {
          name: formData.get('name'),
          email: formData.get('email'),
          password: formData.get('password'),
        };
        console.log('Form Data:', data);
        
        // TODO: Send token and data to backend for verification and registration
        // await apiCall(data, token);
        
        alert('Registration successful!');
      } catch (error) {
        console.error('Error:', error);
        alert('Registration failed. Please try again.');
      }
    }
    setIsSubmitting(false);
  };

  return (
    <div className="BusinessSignup">
      <Link to="/">
        <h2 className="logo-title">ZilBiz</h2>
      </Link>
      <div className="businesssignup-container">
        <h2>Welcome! Sign up to get started.</h2>
        <button type="button" className="google-btn">
          <FcGoogle className="google-icon" /> Sign up with Google
        </button>
        <div className="or-divider">
          <span>or</span>
        </div>
        <form className="signup-form" onSubmit={handleSubmit} noValidate>
          <div className="form-group">
            <input
              type="text"
              name="name"
              placeholder="Business Name"
              required
              className={formErrors.name ? 'error' : ''}
            />
            {formErrors.name && <span className="error-message">{formErrors.name}</span>}
          </div>
          
          <div className="form-group">
            <input
              type="email"
              name="email"
              placeholder="Email"
              required
              className={formErrors.email ? 'error' : ''}
            />
            {formErrors.email && <span className="error-message">{formErrors.email}</span>}
          </div>
          
          <div className="form-group">
            <input
              type="password"
              name="password"
              placeholder="Password"
              required
              className={formErrors.password ? 'error' : ''}
            />
            {formErrors.password && <span className="error-message">{formErrors.password}</span>}
          </div>
          
          <div className="button-group">
            <button type="submit" disabled={isSubmitting}>
              {isSubmitting ? 'Processing...' : 'Sign Up'}
            </button>
          </div>
        </form>
        <ReCAPTCHA
          ref={recaptchaRef}
          sitekey="6Ldk7AIrAAAAAL2Wd660KO73pwESxmOZ0pbzlLiO"
          size="invisible"
        />
        <div className="login-link">
          Have an account? <Link to="/business-login">Sign In</Link>
        </div>
      </div>
    </div>
  );
}

export default BusinessSignup;