import React, { useRef } from 'react';
import { Link } from 'react-router-dom';
import { FcGoogle } from 'react-icons/fc';
import ReCAPTCHA from "react-google-recaptcha";
import '../components/Style/Customer_login.css';

function CustomerLogin() {
  const recaptchaRef = useRef();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const token = await recaptchaRef.current.executeAsync();
      console.log('reCAPTCHA token:', token);

      // TODO: Send token to backend for verification and proceed with authentication

    } catch (error) {
      console.error('reCAPTCHA error:', error);
      alert('Failed to verify reCAPTCHA. Please try again.');
    }
  };

  return (
    <div className="CustomerLogin">
      <Link to="/">
        <h2 className="logo-title">ZilBiz</h2>
      </Link>
      <div className="customerlogin-container">
        <h2>Welcome back</h2>
        <button className="google-btn">
          <FcGoogle className="google-icon" /> Sign in with Google
        </button>
        <div className="or-divider">
          <span>or</span>
        </div>
        <form className="login-form" onSubmit={handleSubmit}>
          <input type="email" placeholder="Email" required />
          <input type="password" placeholder="Password" required />
          <button type="submit">Sign In</button>
        </form>
        <ReCAPTCHA
          ref={recaptchaRef}
          sitekey="6Ldk7AIrAAAAAL2Wd660KO73pwESxmOZ0pbzlLiO"
          size="invisible"
        />
        <Link to="/admin" className="admin-user">
          Login as Admin
        </Link>
        <div className="customer-signup-link">
          No account? <Link to="/signup">Sign Up</Link>
        </div>
      </div>
    </div>
  );
}

export default CustomerLogin;
