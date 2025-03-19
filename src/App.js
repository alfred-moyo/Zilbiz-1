import React from 'react';
import logo from './logo.png';
import { FaSearch } from 'react-icons/fa';
import './App.css';
import 'animate.css';
import Login from './components/customer_login';
import Reviews from './components/reviews';
import Contact from './components/contact';
import BusinessSignin from './components/business_login';
import { 
  BrowserRouter as Router, 
  Route, 
  Routes, 
  Link,
  Navigate } from 'react-router-dom';


function App() {
  return (
    <Router>
      <div className="App">
        <nav>
          <img src={logo} className="App-logo" alt="logo" />
          <div className="search-bar">
            <input type="text" placeholder="Search" />
            <button><FaSearch /></button>
          </div>
          <ul>
            <li><a href="#write-a-review">Write a review</a></li>
            <li><a href="#business">Business</a></li>
          </ul>
          <Link to="/login">
            <button type="button">LOGIN</button>
          </Link>
        </nav>
        <div className="container">
          <h1>ZilBiz</h1>
          <h3>Empower Your Business, Elevate Your Presence! <span>🚀</span></h3>
          <p>
            Welcome to ZilBiz, Mauritius’s premier SME listing and review platform!
            Whether you're a small business owner looking to grow or a customer searching
            for the best local services, we’ve got you covered. ✨
          </p>
          <button>Register Your Business</button>
        </div>

        {/* Spotlight Section */}
        <div className="spotlight">
          <h2>Spotlight</h2>
          <div className="spotlight-posts">
            <div className="post">
              <p><strong>Samuel</strong> recently posted</p>
              <p>J-Claude Resto ●</p>
              <p>The food is worth the price. I recommend this place anytime anyway.</p>
            </div>
            <div className="post">
              <p><strong>Albert</strong> recently posted</p>
              <p>Ritesh Garage ●</p>
              <p>Itken’s garage has the best customer service.</p>
            </div>
            <div className="post">
              <p><strong>Jennifer</strong> recently posted</p>
              <p>Najja Chop ●</p>
              <p>This is the best high-tech restaurant in Rio-en-Nos. I recommend the place anyway.</p>
            </div>
          </div>
        </div>
      </div>
      {/* Footer Section */}
      <footer className="footer">
          <div className="footer-section">
            <img src={logo} className="App-logo" alt="logo" />
          </div>
          <div className="footer-section">
            <h3>Get In Touch</h3>
            <p>192 Avenue des Cailles,</p>
            <p>Flic-en-flac</p>
            <p>Tél. +44 76 66 57 55 </p>
          </div>
          <div className="footer-section">
            <h3>Navigations</h3>
            <ul>
              <li><a href="#about">About</a></li>
              <li><a href="#services">Services</a></li>
              <li><a href="#events">Events</a></li>
              <li><a href="#contact">Contact</a></li>
            </ul>
          </div>
          <div className="footer-section">
            <h3>Legal Notice</h3>
            <ul>
              <li><a href="#terms">Terms and Conditions</a></li>
              <li><a href="#terms-of-use">Terms of Use</a></li>
              <li><a href="#options">Options</a></li>
            </ul>
          </div>
        </footer>

      {/* Define routes */}
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/write-a-review" element={<Reviews />} />
        <Route path="/business-login" element={<BusinessSignin />} />
        <Route path="/contact" element={<Contact />} />

      </Routes>
    </Router>
  );
}

export default App;