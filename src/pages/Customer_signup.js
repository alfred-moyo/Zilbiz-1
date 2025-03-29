import React, { useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import { FcGoogle } from 'react-icons/fc';
import ReCAPTCHA from "react-google-recaptcha";
import '../components/Style/Customer_signup.css';

function CustomerSignup() {
  const [errors, setErrors] = useState({});
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
  });
  const recaptchaRef = useRef(null);

  const validateForm = (data) => {
    const errors = {};

    // Name validation
    if (!data.name.trim()) {
      errors.name = 'Name is required';
    }

    // Email validation
    if (!data.email.trim()) {
      errors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(data.email)) {
      errors.email = 'Email is invalid';
    }

    // Password validation
    if (!data.password.trim()) {
      errors.password = 'Password is required';
    } else if (data.password.length < 8) {
      errors.password = 'Password must be at least 8 characters long';
    } else if (!/[A-Z]/.test(data.password)) {
      errors.password = 'Password must contain at least one uppercase letter';
    } else if (!/[a-z]/.test(data.password)) {
      errors.password = 'Password must contain at least one lowercase letter';
    } else if (!/[0-9]/.test(data.password)) {
      errors.password = 'Password must contain at least one number';
    } else if (!/[^A-Za-z0-9]/.test(data.password)) {
      errors.password = 'Password must contain at least one special character';
    }

    return errors;
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value,
    });

    // Validate the field being changed
    const updatedErrors = validateForm({ ...formData, [name]: value });
    setErrors(updatedErrors);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    // Validate the entire form
    const validationErrors = validateForm(formData);
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    try {
      // Execute reCAPTCHA
      const token = await recaptchaRef.current.executeAsync();
      
      // Proceed with form submission including reCAPTCHA token
      console.log('Form Data:', { ...formData, recaptchaToken: token });
      setErrors({});
      
      // Add your API call here with the recaptcha token
    } catch (error) {
      console.error('reCAPTCHA error:', error);
      alert('Failed to verify reCAPTCHA. Please try again.');
    }
  };

  // Check if the form is valid
  const isFormValid = Object.keys(errors).length === 0;

  return (
    <div className="CustomerSignup">
      <Link to="/">
          <h2 className="logo-title">ZilBiz</h2>
      </Link>
      <div className="customersignup-container">
        <h2>Sign up to get started.</h2>
        <button className="google-btn">
          <FcGoogle className="google-icon" /> Sign up with Google
        </button>
        <div className="or-divider">
          <span>or</span>
        </div>
        <form className="signup-form" onSubmit={handleSubmit}>
          <div className="form-group">
            <input
              type="text"
              name="name"
              placeholder="Name"
              value={formData.name}
              onChange={handleChange}
              required
            />
            {errors.name && <span className="error">{errors.name}</span>}
          </div>
          <div className="form-group">
            <input
              type="email"
              name="email"
              placeholder="Email"
              value={formData.email}
              onChange={handleChange}
              required
            />
            {errors.email && <span className="error">{errors.email}</span>}
          </div>
          <div className="form-group">
            <input
              type="password"
              name="password"
              placeholder="Password"
              value={formData.password}
              onChange={handleChange}
              required
            />
            {errors.password && <span className="error">{errors.password}</span>}
          </div>
          <button type="submit" disabled={!isFormValid}>
            Sign Up
          </button>
        </form>
        <ReCAPTCHA
          ref={recaptchaRef}
          sitekey="6Ldk7AIrAAAAAL2Wd660KO73pwESxmOZ0pbzlLiO" // Replace with your site key
          size="invisible"
          badge="inline"
        />

        <div className="login-link">
          Have an account?{' '}
          <Link to="/login">Sign In</Link>
        </div>
      </div>
    </div>
  );
}

export default CustomerSignup;