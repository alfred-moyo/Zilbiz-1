import React from 'react';
import { FaUserCircle, FaSearch } from 'react-icons/fa';
import '../components/Style/CustomerDashboard.css';

const CustomerLanding = () => {
  return (
    <div className="customer-landing">
      <nav className="navbar">
        <div className="logo">ZilBiz</div>
        <div className="search-bar">
          <input type="text" placeholder="Search for SMEs, services, or categories..." />
          <button><FaSearch /></button>
        </div>
        <div className="nav-links">
          <a href="#review">Write a Review</a>
          <a href="#business">Business</a>
          <div className="user-icon">
            <FaUserCircle size={28} />
            <div className="user-menu">
              <a href="#profile">Profile</a>
              <a href="#settings">Settings</a>
            </div>
          </div>
        </div>
      </nav>

      <header className="welcome-section">
        <h1>Welcome to ZilBiz</h1>
        <p>Where Mauritius’s Small Businesses Shine 🌟</p>
        <p>Helping you discover, support, and review local SMEs making a big impact in our communities.</p>
      </header>

      <section className="categories">
        <h2>Explore SME Categories</h2>
        <div className="category-grid">
          <div className="category">Food & Beverage</div>
          <div className="category">Beauty & Wellness</div>
          <div className="category">Automotive Services</div>
          <div className="category">IT & Tech Support</div>
          <div className="category">Construction & Maintenance</div>
          <div className="category">Retail & Boutiques</div>
          <div className="category">Creative & Media</div>
          <div className="category">Education & Training</div>
          <div className="category">Handicrafts & Artisans</div>
          <div className="category">Legal & Financial Services</div>
        </div>
      </section>
    </div>
  );
};

export default CustomerLanding;
