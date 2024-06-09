import React, { useState } from 'react';
import flightService from '../services/flightService';

const FlightSearch = () => {
  const [origin, setOrigin] = useState('');
  const [destination, setDestination] = useState('');
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');
  const [flights, setFlights] = useState([]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const result = await flightService.searchFlights(origin, destination, startDate, endDate);
      setFlights(result);
    } catch (error) {
      console.error('Flight search failed', error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Search Flights</h2>
      <label>
        Origin:
        <input type="text" value={origin} onChange={(e) => setOrigin(e.target.value)} required />
      </label>
      <label>
        Destination:
        <input type="text" value={destination} onChange={(e) => setDestination(e.target.value)} required />
      </label>
      <label>
        Start Date:
        <input type="date" value={startDate} onChange={(e) => setStartDate(e.target.value)} required />
      </label>
      <label>
        End Date:
        <input type="date" value={endDate} onChange={(e) => setEndDate(e.target.value)} required />
      </label>
      <button type="submit">Search</button>
      <ul>
        {flights.map((flight, index) => (
          <li key={index}>{flight}</li>
        ))}
      </ul>
    </form>
  );
};

export default FlightSearch;
