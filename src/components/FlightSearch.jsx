import React, { useState } from 'react';
import flightService from '../services/flightService';

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
        Departure Date:
        <input type="date" value={departureDate} onChange={(e) => setDepartureDate(e.target.value)} required />
      </label>
      <label>
        Return Date:
        <input type="date" value={returnDate} onChange={(e) => setReturnDate(e.target.value)} />
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
