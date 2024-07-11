import React, { useState } from 'react';
import eventService from '../../services/eventService';
import './EventsSearch.css';

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
      // console.error('Event search failed', error);
    }
  };

  return (
    <div className="event-search-wrapper">
      <h2 className="search-title">Search Events by Bandsintown</h2>
      <div className="event-search-container">
        <form onSubmit={handleSubmit} className="event-search-form">
          <label>
            City:
            <input type="text" value={city} onChange={(e) => setCity(e.target.value)} required />
          </label>
          <label>
            Date:
            <input type="date" value={date} onChange={(e) => setDate(e.target.value)} required />
          </label>
          <button type="submit" className="btn btn-white btn-animate">Search</button>
        </form>
        <ul className="event-results">
          {events.map((event, index) => (
            <li key={index}>{event.name} - {event.date}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default EventSearch;
