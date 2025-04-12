import React, { useState } from 'react';
import '../components/Style/BusinessVerifiedDash.css';

const VerifiedDashboard = () => {
  const [activeTab, setActiveTab] = useState('dashboard');
  const [showVerificationBadge, setShowVerificationBadge] = useState(true);

  return (
    <div className="verified-container">
      {/* Verification Success Banner */}
      {showVerificationBadge && (
        <div className="verification-banner">
          <div className="banner-content">
            <span className="verified-icon">✓</span>
            <span>Congratulations! Your business is now verified.</span>
          </div>
          <button 
            className="banner-close"
            onClick={() => setShowVerificationBadge(false)}
          >
            ×
          </button>
        </div>
      )}

      {/* Dashboard Header */}
      <header className="dashboard-header">
        <div className="header-left">
          <h1>ZilBiz <span>Dashboard</span></h1>
          <div className="verified-status">
            <span className="status-badge">Verified</span>
            <span className="status-text">Trust Level: Premium</span>
          </div>
        </div>
        <div className="header-right">
          <button className="btn-notification">
            <span className="notification-icon">🔔</span>
            <span className="notification-count">3</span>
          </button>
          <div className="user-profile">
            <div className="profile-avatar">AB</div>
            <span className="profile-name">Verified Business</span>
          </div>
        </div>
      </header>

      {/* Main Dashboard Content */}
      <div className="dashboard-main">
        {/* Sidebar Navigation */}
        <nav className="dashboard-sidebar">
          <ul className="nav-menu">
            <li 
              className={activeTab === 'dashboard' ? 'active' : ''}
              onClick={() => setActiveTab('dashboard')}
            >
              <span className="nav-icon">📊</span>
              Dashboard
            </li>
            <li 
              className={activeTab === 'network' ? 'active' : ''}
              onClick={() => setActiveTab('network')}
            >
              <span className="nav-icon">🌐</span>
              Verified Network
            </li>
            <li 
              className={activeTab === 'insights' ? 'active' : ''}
              onClick={() => setActiveTab('insights')}
            >
              <span className="nav-icon">📈</span>
              Premium Insights
            </li>
            <li 
              className={activeTab === 'deals' ? 'active' : ''}
              onClick={() => setActiveTab('deals')}
            >
              <span className="nav-icon">💼</span>
              Exclusive Deals
            </li>
            <li 
              className={activeTab === 'tools' ? 'active' : ''}
              onClick={() => setActiveTab('tools')}
            >
              <span className="nav-icon">🛠️</span>
              Business Tools
            </li>
            <li 
              className={activeTab === 'settings' ? 'active' : ''}
              onClick={() => setActiveTab('settings')}
            >
              <span className="nav-icon">⚙️</span>
              Settings
            </li>
          </ul>

          <div className="upgrade-banner">
            <h4>Verified Pro</h4>
            <p>Upgrade for advanced features</p>
            <button className="btn-upgrade">Upgrade Now</button>
          </div>
        </nav>

        {/* Dashboard Content Area */}
        <div className="dashboard-content">
          {/* Dashboard Overview */}
          {activeTab === 'dashboard' && (
            <div className="tab-content">
              <div className="welcome-card">
                <h2>Welcome to Your Verified Dashboard</h2>
                <p>As a verified member, you now have access to premium features and tools to grow your business.</p>
                <div className="welcome-actions">
                  <button className="btn-primary">Complete Profile</button>
                  <button className="btn-secondary">Take Tour</button>
                </div>
              </div>

              {/* Verification Benefits */}
              <div className="benefits-section">
                <h3>Your Verification Benefits</h3>
                <div className="benefits-grid">
                  <div className="benefit-card">
                    <div className="benefit-icon">🚀</div>
                    <h4>Priority Listing</h4>
                    <p>Your business appears first in search results</p>
                  </div>
                  <div className="benefit-card">
                    <div className="benefit-icon">🔒</div>
                    <h4>Secure Transactions</h4>
                    <p>Escrow protection on all deals</p>
                  </div>
                  <div className="benefit-card">
                    <div className="benefit-icon">📈</div>
                    <h4>Advanced Analytics</h4>
                    <p>Access to premium business insights</p>
                  </div>
                  <div className="benefit-card">
                    <div className="benefit-icon">🤝</div>
                    <h4>VIP Networking</h4>
                    <p>Connect with other verified businesses</p>
                  </div>
                </div>
              </div>

              {/* Quick Actions */}
              <div className="quick-actions">
                <h3>Quick Actions</h3>
                <div className="actions-grid">
                  <button className="action-card">
                    <span className="action-icon">📢</span>
                    <span>Post Announcement</span>
                  </button>
                  <button className="action-card">
                    <span className="action-icon">📝</span>
                    <span>Create Offer</span>
                  </button>
                  <button className="action-card">
                    <span className="action-icon">👥</span>
                    <span>Invite Partners</span>
                  </button>
                  <button className="action-card">
                    <span className="action-icon">📊</span>
                    <span>Generate Report</span>
                  </button>
                </div>
              </div>

              {/* Recent Activity */}
              <div className="activity-section">
                <h3>Recent Activity</h3>
                <div className="activity-list">
                  <div className="activity-item">
                    <div className="activity-icon">🔍</div>
                    <div className="activity-text">
                      <p>Your profile was viewed by 12 businesses today</p>
                      <small>2 hours ago</small>
                    </div>
                  </div>
                  <div className="activity-item">
                    <div className="activity-icon">🤝</div>
                    <div className="activity-text">
                      <p>New connection request from TechSolutions Inc.</p>
                      <small>5 hours ago</small>
                    </div>
                  </div>
                  <div className="activity-item">
                    <div className="activity-icon">💬</div>
                    <div className="activity-text">
                      <p>You received a message from Global Suppliers</p>
                      <small>1 day ago</small>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Verified Network Tab */}
          {activeTab === 'network' && (
            <div className="tab-content">
              <h2>Verified Network</h2>
              <p>Connect with other verified businesses in your industry.</p>
              {/* Network content would go here */}
            </div>
          )}

          {/* Premium Insights Tab */}
          {activeTab === 'insights' && (
            <div className="tab-content">
              <h2>Premium Insights</h2>
              <p>Advanced analytics and market data for your business.</p>
              {/* Insights content would go here */}
            </div>
          )}

          {/* Exclusive Deals Tab */}
          {activeTab === 'deals' && (
            <div className="tab-content">
              <h2>Exclusive Deals</h2>
              <p>Special offers available only to verified members.</p>
              {/* Deals content would go here */}
            </div>
          )}

          {/* Business Tools Tab */}
          {activeTab === 'tools' && (
            <div className="tab-content">
              <h2>Business Tools</h2>
              <p>Premium tools to help you manage and grow your business.</p>
              {/* Tools content would go here */}
            </div>
          )}

          {/* Settings Tab */}
          {activeTab === 'settings' && (
            <div className="tab-content">
              <h2>Account Settings</h2>
              <p>Manage your verified account preferences.</p>
              {/* Settings content would go here */}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default VerifiedDashboard;