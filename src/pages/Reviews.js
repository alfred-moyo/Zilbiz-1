import React, { useState, useEffect, useRef } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { FaStar, FaRegStar, FaSearch, FaChevronLeft, FaMapMarkerAlt } from 'react-icons/fa';
import { MAP_API_KEY, MAP_DEFAULT_OPTIONS } from '../config/googleMaps';
import logo from '../logo.png';
import './Style/WriteReview.css';

function WriteReview() {
  const [step, setStep] = useState(1);
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const [selectedBusiness, setSelectedBusiness] = useState(null);
  const [formData, setFormData] = useState({
    rating: 0,
    reviewText: '',
    photos: []
  });
  const [hoverRating, setHoverRating] = useState(0);
  const [photoPreviews, setPhotoPreviews] = useState([]);
  const [map, setMap] = useState(null);
  const [markers, setMarkers] = useState([]);
  const mapRef = useRef(null);
  const navigate = useNavigate();

  // Initialize Google Maps
  useEffect(() => {
    if (window.google && step === 1 && mapRef.current && !map) {
      const newMap = new window.google.maps.Map(mapRef.current, MAP_DEFAULT_OPTIONS);
      setMap(newMap);
      
      // Add search box
      const input = document.getElementById('business-search');
      const searchBox = new window.google.maps.places.SearchBox(input);
      
      searchBox.addListener('places_changed', () => {
        const places = searchBox.getPlaces();
        if (places.length === 0) return;
        
        const results = places.map(place => ({
          id: place.place_id,
          name: place.name,
          type: place.types[0] || 'Business',
          address: place.formatted_address,
          location: place.geometry.location
        }));
        
        setSearchResults(results);
        displayMarkers(newMap, results);
      });
    }
  }, [step]);

  const displayMarkers = (map, businesses) => {
    // Clear existing markers
    markers.forEach(marker => marker.setMap(null));
    
    const newMarkers = businesses.map(business => {
      return new window.google.maps.Marker({
        position: business.location,
        map: map,
        title: business.name
      });
    });
    
    setMarkers(newMarkers);
    
    // Fit map to markers
    if (businesses.length > 0) {
      const bounds = new window.google.maps.LatLngBounds();
      businesses.forEach(business => bounds.extend(business.location));
      map.fitBounds(bounds);
    }
  };

  const handleBusinessSelect = (business) => {
    setSelectedBusiness(business);
    setStep(2);
  };

  const handlePhotoUpload = (e) => {
    const files = Array.from(e.target.files);
    const previews = files.map(file => URL.createObjectURL(file));
    setPhotoPreviews([...photoPreviews, ...previews]);
    setFormData({
      ...formData,
      photos: [...formData.photos, ...files]
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const reviewData = {
      business: selectedBusiness,
      ...formData,
      date: new Date().toISOString()
    };
    console.log('Review Submitted:', reviewData);
    alert(`Thank you for reviewing ${selectedBusiness.name}!`);
    navigate('/');
  };

  return (
    <div className="WriteReview">
      <img src={logo} className="WriteReview-logo" alt="ZilBiz Logo" />
      <div className="container">
        {step === 1 ? (
          <>
            <h2>Find a Business to Review</h2>
            <div className="search-container">
              <div className="search-group">
                <input
                  id="business-search"
                  type="text"
                  placeholder="Search for a business..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  required
                />
                <button type="button" className="search-btn">
                  <FaSearch />
                </button>
              </div>
              <div className="map-container" ref={mapRef}></div>
            </div>

            <div className="search-results">
              {searchResults.map((business) => (
                <div 
                  key={business.id} 
                  className="business-card"
                  onClick={() => handleBusinessSelect(business)}
                >
                  <h3>{business.name}</h3>
                  <p className="business-type">{business.type}</p>
                  <p className="business-address">
                    <FaMapMarkerAlt /> {business.address}
                  </p>
                </div>
              ))}
            </div>
          </>
        ) : (
          <>
            <div className="review-header">
              <button 
                className="back-button"
                onClick={() => {
                  setStep(1);
                  setSelectedBusiness(null);
                }}
              >
                <FaChevronLeft /> Back
              </button>
              <h2>Review {selectedBusiness.name}</h2>
              <p className="business-address">
                <FaMapMarkerAlt /> {selectedBusiness.address}
              </p>
            </div>

            {/* Rest of your review form remains the same */}
            {/* ... */}
          </>
        )}
      </div>
    </div>
  );
}

export default WriteReview;