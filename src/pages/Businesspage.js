import React from 'react';
import '../components/Style/Businesspage.css';

const ZilBizLanding = () => {
  return (
    <div className="zilbiz-container">
      {/* Navigation */}
      <nav className="zilbiz-nav">
        <div className="nav-logo">ZilBiz</div>
        <div className="nav-links">
          <a href="#features">Features</a>
          <a href="#solutions">Solutions</a>
          <a href="#pricing">Pricing</a>
          <a href="#resources">Resources</a>
        </div>
        <div className="nav-actions">
          <button className="btn-login">Log In</button>
          <button className="btn-primary">Get Started</button>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-content">
          <h1>Power Your Business with <span>ZilBiz</span></h1>
          <p>The all-in-one platform for modern businesses to grow, connect, and succeed in the digital economy.</p>
          <div className="hero-cta">
            <button className="btn-primary btn-large">Start Free Trial</button>
            <button className="btn-secondary btn-large">Book Demo</button>
          </div>
          <div className="trust-badge">
            <div className="verification-badge">
              <span className="verified-icon">✓</span>
              <span>Get Verified Today</span>
              <button className="btn-verify">Get Verified</button>
            </div>
            <div className="trust-stats">
              <span>10,000+ Verified Businesses</span>
              <span>4.9/5 Rating</span>
            </div>
          </div>
        </div>
        <div className="hero-image">
          <img src="https://via.placeholder.com/600x400" alt="ZilBiz Dashboard Preview" />
        </div>
      </section>

      {/* Verification Benefits */}
      <section className="verification-section">
        <h2>Why Get <span>Verified</span> on ZilBiz?</h2>
        <div className="verification-grid">
          <div className="verification-card">
            <div className="card-icon">🔒</div>
            <h3>Enhanced Trust</h3>
            <p>Build credibility with customers and partners through our verification badge.</p>
          </div>
          <div className="verification-card">
            <div className="card-icon">🚀</div>
            <h3>Priority Visibility</h3>
            <p>Get featured higher in search results and recommendations.</p>
          </div>
          <div className="verification-card">
            <div className="card-icon">💼</div>
            <h3>Business Tools</h3>
            <p>Access exclusive features for verified businesses only.</p>
          </div>
          <div className="verification-card">
            <div className="card-icon">🌐</div>
            <h3>Global Reach</h3>
            <p>Connect with international partners in our verified network.</p>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="features-section" id="features">
        <h2>ZilBiz <span>Business Solutions</span></h2>
        <div className="features-grid">
          <div className="feature-card">
            <h3>Business Profile</h3>
            <p>Create a professional profile showcasing your products, services, and credentials.</p>
          </div>
          <div className="feature-card">
            <h3>Secure Transactions</h3>
            <p>Safe payment processing with escrow protection for all your business deals.</p>
          </div>
          <div className="feature-card">
            <h3>Networking Hub</h3>
            <p>Connect with suppliers, distributors, and potential clients in your industry.</p>
          </div>
          <div className="feature-card">
            <h3>Analytics Dashboard</h3>
            <p>Track your business performance with real-time data and insights.</p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta-section">
        <div className="cta-content">
          <h2>Ready to Elevate Your Business?</h2>
          <p>Join thousands of verified businesses growing with ZilBiz.</p>
          <div className="cta-actions">
            <button className="btn-primary btn-large">Get Verified Now</button>
            <button className="btn-secondary btn-large">Contact Sales</button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="zilbiz-footer">
        <div className="footer-content">
          <div className="footer-column">
            <h4>ZilBiz</h4>
            <p>Empowering businesses to thrive in the digital economy.</p>
          </div>
          <div className="footer-column">
            <h4>Company</h4>
            <a href="#">About Us</a>
            <a href="#">Careers</a>
            <a href="#">Press</a>
          </div>
          <div className="footer-column">
            <h4>Resources</h4>
            <a href="#">Help Center</a>
            <a href="#">Business Guides</a>
            <a href="#">API Documentation</a>
          </div>
          <div className="footer-column">
            <h4>Legal</h4>
            <a href="#">Terms of Service</a>
            <a href="#">Privacy Policy</a>
            <a href="#">Cookie Policy</a>
          </div>
        </div>
        <div className="footer-bottom">
          <p>© {new Date().getFullYear()} ZilBiz. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default ZilBizLanding;