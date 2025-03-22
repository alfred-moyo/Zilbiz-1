import React from 'react';
import { Link } from 'react-router-dom';
import { FcGoogle } from 'react-icons/fc'; // Import Google icon
import logo from '../logo.png';
import '../components/Style/Customer_login.css';

function CustomerLogin() {
  return (
    <div className="CustomerLogin">
      <img src={logo} className="CustomerLogin-logo" alt="logo" />
      <div className="container">
        <h2>Welcome back</h2>
        <button className="google-btn">
          <FcGoogle className="google-icon" /> Sign in with Google
        </button>
        <div className="or-divider">
          <span>or</span>
        </div>
        <form className="login-form">
          <input type="email" placeholder="Email" required />
          <input type="password" placeholder="Password" required />
          <button type="submit">Sign In</button>
        </form>
        <Link to="/" className="back-home">
          Back to Home
        </Link>
        <div className="signup-link">
          No account? <Link to="/signup">Sign Up</Link>
        </div>
      </div>
    </div>
  );
}

export default CustomerLogin;