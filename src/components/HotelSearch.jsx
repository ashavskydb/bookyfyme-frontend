import React, { useState } from 'react';
import hotelService from '../services/hotelService';

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
    <form onSubmit={handleSubmit}>
      <h2>Search Hotels</h2>
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
      <button type="submit">Search</button>
      <ul>
        {hotels.map((hotel, index) => (
          <li key={index}>{hotel.name} - {hotel.rate_per_night.lowest}</li>
        ))}
      </ul>
    </form>
  );
};

export default HotelSearch;
