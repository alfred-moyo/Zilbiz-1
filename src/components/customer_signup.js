import React, { useState } from 'react';
import logo from './logo.svg';
import './Customer_signup.css';

function C_Signup() {
  const [errors, setErrors] = useState({});
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
  });

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

  const handleSubmit = (event) => {
    event.preventDefault();

    // Validate the entire form
    const validationErrors = validateForm(formData);
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return; // Stop form submission if there are errors
    }

    // If no errors, proceed with form submission
    console.log('Form Data:', formData);
    setErrors({}); // Clear errors
    // You can add an API call here to send data to the backend
  };

  // Check if the form is valid
  const isFormValid = Object.keys(errors).length === 0;

  return (
    <div className="App">
      <img src={logo} className="App-logo" alt="logo" />
      <div className="container">
        <h2>Welcome! Sign up to get started.</h2>
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
        <a href="/home" className="back-home">Back to Home</a>
        <div className="login-link">
          Have an account? <a href="/login">Sign In</a>
        </div>
      </div>
    </div>
  );
}

export default C_Signup;