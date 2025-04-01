import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import '../components/Style/BusinessListings.css';

function BusinessListings() {
  const [businesses, setBusinesses] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchBusinesses = async () => {
      try {
        const response = await fetch('http://localhost:5000/api/businesses');
        const data = await response.json();
        
        if (!response.ok) {
          throw new Error(data.message || 'Failed to fetch businesses');
        }
        
        setBusinesses(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchBusinesses();
  }, []);

  if (loading) {
    return <div className="loading">Loading businesses...</div>;
  }

  if (error) {
    return <div className="error">{error}</div>;
  }

  return (
    <div className="business-listings">
      <h1>Business Directory</h1>
      
      {businesses.length === 0 ? (
        <div className="no-businesses">
          <p>No businesses have registered yet.</p>
          <Link to="/business-signup" className="register-link">
            Be the first to register your business
          </Link>
        </div>
      ) : (
        <div className="business-grid">
          {businesses.map((business) => (
            <div key={business._id} className="business-card">
              <h2>{business.name}</h2>
              <p className="business-type">{business.businessType}</p>
              
              <div className="rating">
                {[1, 2, 3, 4, 5].map((star) => (
                  <span 
                    key={star} 
                    className={`star ${star <= (business.averageRating || 0) ? 'filled' : ''}`}
                  >
                    ★
                  </span>
                ))}
                <span>({business.reviews?.length || 0} reviews)</span>
              </div>
              
              <div className="reviews">
                {business.reviews?.slice(0, 2).map((review, index) => (
                  <div key={index} className="review">
                    <p>"{review.comment}"</p>
                    <p className="reviewer">- {review.customerName}</p>
                  </div>
                ))}
              </div>
              
              <Link to={`/business/${business._id}`} className="view-details">
                View Details
              </Link>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default BusinessListings;