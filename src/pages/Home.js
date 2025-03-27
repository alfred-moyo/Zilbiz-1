import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import '../components/Style/Home.css';

function Home() {
  return (
    <div className="Home">
      <Navbar />
      <div className="universal-container">
        <div className='hero'>
            <h1>ZilBiz</h1>
            <h3>Empower Your Business, Elevate Your Presence! <span>🚀</span></h3>
            <p>
            Welcome to ZilBiz, Mauritius’s premier SME listing and review platform!
            Whether you're a small business owner looking to grow or a customer searching
            for the best local services, we’ve got you covered. ✨
            </p>
            <button>Register Your Business</button>
        </div>
      </div>

      <div className='universal-container'>
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
            <p>Ritesh's garage has the best customer service.</p>
          </div>
          <div className="post">
            <p><strong>Jennifer</strong> recently posted</p>
            <p>Najja Chop ●</p>
            <p>This is the best high-tech restaurant in Rio-en-Nos. I recommend the place anyway.</p>
          </div>
        </div>
      </div>
      </div>
      
      <Footer />
    </div>
    
  );
}

export default Home;