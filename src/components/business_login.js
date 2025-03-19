import React from 'react';
import logo from '../logo.png'; 
import './business_login.css'; 

const BusinessSignin = () => {
  const handleSubmit = (event) => {
    event.preventDefault();
    // Handle form submission (e.g., send data to backend)
    const formData = new FormData(event.target);
    const data = {
      email: formData.get('email'),
      password: formData.get('password'),
    };
    console.log('Form Data:', data);
  };

  return (
    <div className="signin-container">
      <img src={logo} className="signin-logo" alt="logo" />
      <div className="signin-box">
        <h2>Sign In as Business</h2>
        <p>Welcome back</p>
        <button className="google-signin">
          <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Google_%22G%22_Logo.svg/512px-Google_%22G%22_Logo.svg.png" alt="Google Icon" className="google-icon" />
          Sign in with Google
        </button>
        <p>or</p>
        <form className="signin-form" onSubmit={handleSubmit}>
          <input type="email" name="email" placeholder="Email" required />
          <input type="password" name="password" placeholder="Password" required />
          <div className="button-group">
            <a href="/home" className="back-home">Back to Home</a>
            <button type="submit" className="signin-button">Sign In</button>
          </div>
        </form>
        <div className="signup-link">
          No account? <a href="/signup">Sign Up</a>
        </div>
      </div>
    </div>
  );
};

export default BusinessSignin;
