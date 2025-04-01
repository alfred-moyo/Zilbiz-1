import React, { useRef } from 'react';
import { Link } from 'react-router-dom';
import { FcGoogle } from 'react-icons/fc';
import ReCAPTCHA from "react-google-recaptcha";
import '../components/Style/Business_login.css';

function BusinessLogin() {
  const recaptchaRef = useRef();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const token = await recaptchaRef.current.executeAsync();
      console.log('reCAPTCHA token:', token);

      // TODO: Send token to backend for verification and proceed with authentication
      const formData = new FormData(e.target);
      const data = {
        email: formData.get('email'),
        password: formData.get('password'),
      };
      console.log('Form Data:', data);

    } catch (error) {
      console.error('reCAPTCHA error:', error);
      alert('Failed to verify reCAPTCHA. Please try again.');
    }
  };

  return (
    <div className="BusinessLogin">
      <Link to="/">
        <h2 className="logo-title">ZilBiz</h2>
      </Link>
      <div className="businesslogin-container">
        <h2>Sign In as Business</h2>
        <p>Welcome back</p>
        <button className="google-btn">
          <FcGoogle className="google-icon" /> Sign in with Google
        </button>
        <div className="or-divider">
          <span>or</span>
        </div>
        <form className="login-form" onSubmit={handleSubmit}>
          <input type="email" name="email" placeholder="Business Email" required />
          <input type="password" name="password" placeholder="Password" required />
          <div className="button-group">
            <button type="submit">Sign In</button>
          </div>
        </form>
        <ReCAPTCHA
          ref={recaptchaRef}
          sitekey="6Ldk7AIrAAAAAL2Wd660KO73pwESxmOZ0pbzlLiO"
          size="invisible"
        />
        <div className="signup-link">
          No account? <Link to="/business-signup">Sign Up</Link>
        </div>
      </div>
    </div>
  );
}

export default BusinessLogin;