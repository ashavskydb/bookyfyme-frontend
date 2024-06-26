import React, { useState } from 'react';
import hotelService from '../../services/hotelService';
import './HotelSearch.css';

const HotelSearch = () => {
  const [city, setCity] = useState('');
  const [checkInDate, setCheckInDate] = useState('');
  const [checkOutDate, setCheckOutDate] = useState('');
  const [hotels, setHotels] = useState([]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const result = await hotelService.searchHotels(city, checkInDate, checkOutDate);
      setHotels(result);
    } catch (error) {
      console.error('Hotel search failed', error);
    }
  };

  return (
    <div className="hotel-search-page">
      <h2 className="search-title">Search Hotels by Google Hotels</h2>
      <div className="hotel-search-container">
        <form onSubmit={handleSubmit} className="hotel-search-form">
          <label>
            City:
            <input type="text" value={city} onChange={(e) => setCity(e.target.value)} required />
          </label>
          <label>
            Check-in Date:
            <input type="date" value={checkInDate} onChange={(e) => setCheckInDate(e.target.value)} required />
          </label>
          <label>
            Check-out Date:
            <input type="date" value={checkOutDate} onChange={(e) => setCheckOutDate(e.target.value)} required />
          </label>
          <button type="submit" className="btn btn-white btn-animate">Search</button>
        </form>
      </div>
      <ul className="hotel-results">
        {hotels.map((hotel, index) => (
          <li key={index}>{hotel.name} - {hotel.rate_per_night.lowest}</li>
        ))}
      </ul>
    </div>
  );
};

export default HotelSearch;
