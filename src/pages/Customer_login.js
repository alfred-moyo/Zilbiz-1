import React from 'react'; 
import logo from "../logo.png"
import './customer_login.css';
import SignUp from "./customer_signup";

function C_Login() {
  return (
    <div className="App">
      <img src={logo} className="App-logo" alt="logo" />
      <div className="container">
        <h2>Welcome back</h2>
        <button className="google-btn">Sign in with Google</button>
        <div className="or-divider">or</div>
        <form className="login-form">
          <input type="email" placeholder="Email" required />
          <input type="password" placeholder="Password" required />
          <button type="submit">Sign In</button>
        </form>
        <a href="/home" className="back-home">Back to Home</a>
        <div className="signup-link">
          No account? <a href={SignUp}>Sign Up</a>
        </div>
      </div>
    </div>
  );
}

export default C_Login;