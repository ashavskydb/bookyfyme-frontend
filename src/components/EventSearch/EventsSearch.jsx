import React, { useState } from 'react';
import eventService from '../../services/eventService';
import './EventsSearch.css';

const EventSearch = () => {
  const [city, setCity] = useState('');
  const [date, setDate] = useState('');
  const [region, setRegion] = useState('');
  const [events, setEvents] = useState([]);

  const regions = [
    { name: 'California', code: 'CA' },
    { name: 'New York', code: 'NY' },
    { name: 'Texas', code: 'TX' },
    { name: 'Florida', code: 'FL' },
    { name: 'Illinois', code: 'IL' },
    { name: 'Pennsylvania', code: 'PA' },
    { name: 'Ohio', code: 'OH' },
    { name: 'Georgia', code: 'GA' },
    { name: 'North Carolina', code: 'NC' },
    { name: 'Michigan', code: 'MI' },
    { name: 'Moscow', code: 'MOW' },
    { name: 'Saint Petersburg', code: 'SPE' },
    { name: 'London', code: 'LND' },
    { name: 'Berlin', code: 'BER' },
    { name: 'Paris', code: 'PAR' },
    { name: 'Tokyo', code: 'TOK' },
    { name: 'Sydney', code: 'SYD' },
    { name: 'Toronto', code: 'TOR' },
    { name: 'Los Angeles', code: 'LA' },
    { name: 'Chicago', code: 'CHI' },
    { name: 'Miami', code: 'MIA' },
    { name: 'Las Vegas', code: 'LV' },
    { name: 'Barcelona', code: 'BCN' },
    { name: 'Amsterdam', code: 'AMS' },
    { name: 'Madrid', code: 'MAD' },
    { name: 'Rome', code: 'ROM' },
    { name: 'Dublin', code: 'DUB' },
    { name: 'Buenos Aires', code: 'BA' },
    { name: 'Mexico City', code: 'MEX' },
    { name: 'São Paulo', code: 'SP' },
    { name: 'Rio de Janeiro', code: 'RIO' },
    { name: 'Istanbul', code: 'IST' },
    { name: 'Dubai', code: 'DXB' },
    { name: 'Seoul', code: 'SEL' },
    { name: 'Hong Kong', code: 'HKG' },
    { name: 'Singapore', code: 'SIN' }
  ];

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const result = await eventService.searchEvents(city, date, region);
      setEvents(result);
    } catch (error) {
      console.error('Event search failed', error);
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
          <label>
            Region:
            <select value={region} onChange={(e) => setRegion(e.target.value)} required>
              <option value="">Select a region</option>
              {regions.map((region, index) => (
                <option key={index} value={region.code}>
                  {region.name}
                </option>
              ))}
            </select>
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