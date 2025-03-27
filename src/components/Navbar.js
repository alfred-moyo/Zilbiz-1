import React from 'react';
import './Style/Navbar.css';
// import logo from '../logo.png';
import { FaSearch } from 'react-icons/fa';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <div className="Navbar">
      <nav>
        {/* Logo */}
        {/* <img src={logo} className="Nav-logo" alt="ZilBiz Logo" /> */}
        <Link to="/">
        <h2 className="Nav-title">ZilBiz</h2>
        </Link>

        {/* Search Bar */}
        <div className="search-bar">
          <input type="text" placeholder="Search" aria-label="Search" />
          <div className="nav-search-btn">
            <button aria-label='Search button'>
              <FaSearch />
            </button>
          </div>
          
        </div>

        {/* Navigation Links */}
        <div className="navbar-links">
          <Link to="/write-a-review" aria-label="Write a review">
            Write a review
          </Link>
          <Link to="/business" aria-label="Business">
            Business
          </Link>
        </div>

        {/* Login Button */}
        <div className="navbar-button">
          <Link to="/login">
            <button type="button" aria-label="Login">
              LOGIN
            </button>
          </Link>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;