import React from 'react';
import logo from '../logo.png'; 
import '../components/Style/Business_signup.css'; 

const BusinessSignup = () => {
  const handleSubmit = (event) => {
    event.preventDefault();
    // Handle form submission (e.g., send data to backend)
    const formData = new FormData(event.target);
    const data = {
      name: formData.get('name'),
      email: formData.get('email'),
      password: formData.get('password'),
    };
    console.log('Form Data:', data);
  };

  return (
    <div className="BusinessSignUp">
      <img src={logo} className="BusinessSignUp-logo" alt="logo" />
      <div className="container">
        <h2>Welcome! Sign up to get started.</h2>
        <form className="signup-form" onSubmit={handleSubmit}>
          <input type="text" name="name" placeholder="Name" required />
          <input type="email" name="email" placeholder="Email" required />
          <input type="password" name="password" placeholder="Password" required />
          <button type="submit">Sign Up</button>
        </form>
        <a href="/home" className="back-home">Back to Home</a>
        <div className="login-link">
          Have an account? <a href="/login">Sign In</a>
        </div>
      </div>
    </div>
  );
};

export default BusinessSignup;