import React, { useState } from 'react';
import eventService from '../services/eventService';

const EventSearch = () => {
  const [city, setCity] = useState('');
  const [date, setDate] = useState('');
  const [events, setEvents] = useState([]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const result = await eventService.searchEvents(city, date);
      setEvents(result);
    } catch (error) {
      console.error('Event search failed', error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Search Events</h2>
      <label>
        City:
        <input type="text" value={city} onChange={(e) => setCity(e.target.value)} required />
      </label>
      <label>
        Date:
        <input type="date" value={date} onChange={(e) => setDate(e.target.value)} required />
      </label>
      <button type="submit">Search</button>
      <ul>
        {events.map((event, index) => (
          <li key={index}>{event.name} - {event.date}</li>
        ))}
      </ul>
    </form>
  );
};

export default EventSearch;
