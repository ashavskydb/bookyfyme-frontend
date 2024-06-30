import React, { useState } from 'react';
import flightService from '../../services/flightService';
import './FlightSearch.css';

const FlightSearch = () => {
  const [origin, setOrigin] = useState('');
  const [destination, setDestination] = useState('');
  const [departureDate, setDepartureDate] = useState('');
  const [returnDate, setReturnDate] = useState('');
  const [flights, setFlights] = useState([]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const result = await flightService.searchFlights(origin, destination, departureDate, returnDate);
      setFlights(result);
    } catch (error) {
      console.error('Flight search failed', error);
    }
  };

  return (
    <div className="flight-search-wrapper">
      <h2 className="search-title">Search Flights by Google Flights</h2>
      <div className="flight-search-container">
        <form onSubmit={handleSubmit} className="flight-search-form">
          <label>
            Where from:
            <input type="text" value={origin} onChange={(e) => setOrigin(e.target.value)} required />
          </label>
          <label>
            Where to:
            <input type="text" value={destination} onChange={(e) => setDestination(e.target.value)} required />
          </label>
          <label>
            Departure Date:
            <input type="date" value={departureDate} onChange={(e) => setDepartureDate(e.target.value)} required />
          </label>
          <label>
            Return Date:
            <input type="date" value={returnDate} onChange={(e) => setReturnDate(e.target.value)} />
          </label>
          <button type="submit" className="btn btn-white btn-animate">Search</button>
        </form>
        <ul className="flight-results">
          {flights.map((flight, index) => (
            <li key={index}>{flight}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default FlightSearch;