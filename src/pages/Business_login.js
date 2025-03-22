import React from 'react';
import logo from '../logo.png'; 
import '../components/Style/Business_login.css'; 

const BusinessLogin = () => {
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
    <div className="businesslogin-container">
      <img src={logo} className="businesslogin-logo" alt="logo" />
      <div className="businesslogin-box">
        <h2>Sign In as Business</h2>
        <p>Welcome back</p>
        <button className="google-businesslogin">
          <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Google_%22G%22_Logo.svg/512px-Google_%22G%22_Logo.svg.png" alt="Google Icon" className="google-icon" />
          Sign in with Google
        </button>
        <p>or</p>
        <form className="businesslogin-form" onSubmit={handleSubmit}>
          <input type="email" name="email" placeholder="Email" required />
          <input type="password" name="password" placeholder="Password" required />
          <div className="button-group">
            <a href="/home" className="back-home">Back to Home</a>
            <button type="submit" className="businesslogin-button">Sign In</button>
          </div>
        </form>
        <div className="signup-link">
          No account? <a href="/signup">Sign Up</a>
        </div>
      </div>
    </div>
  );
};

export default BusinessLogin;
