import React, { useState } from 'react';
import eventService from '../../services/eventService';
import './EventsSearch.css';

const EventSearch = () => {
    const [city, setCity] = useState('');
    const [date, setDate] = useState('');
    const [events, setEvents] = useState([]);

    const cities = [
  { name: 'California', code: 'CA' },
  { name: 'New York', code: 'NY' },
  { name: 'Texas', code: 'TX' },
  { name: 'Florida', code: 'FL' },
  { name: 'Illinois', code: 'IL' },
  { name: 'Pennsylvania', code: 'PA' },
  { name: 'Ohio', code: 'OH' },
  { name: 'Georgia', code: 'GA' },
  { name: 'North Carolina', code: 'NC' },
  { name: 'Tel Aviv', code: 'TLV' },
  { name: 'Boston', code: 'BOS' },
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
  { name: 'Singapore', code: 'SIN' },
  { name: 'Vienna', code: 'VIE' },
  { name: 'Munich', code: 'MUC' },
  { name: 'Prague', code: 'PRG' },
  { name: 'Budapest', code: 'BUD' },
  { name: 'Warsaw', code: 'WAW' },
  { name: 'Brussels', code: 'BRU' },
  { name: 'Stockholm', code: 'STO' },
  { name: 'Oslo', code: 'OSL' },
  { name: 'Helsinki', code: 'HEL' },
  { name: 'Copenhagen', code: 'CPH' },
  { name: 'Zurich', code: 'ZRH' },
  { name: 'Lisbon', code: 'LIS' },
  { name: 'Athens', code: 'ATH' },
  { name: 'Bangkok', code: 'BKK' },
  { name: 'Jakarta', code: 'JKT' },
  { name: 'Kuala Lumpur', code: 'KUL' },
  { name: 'Manila', code: 'MNL' },
  { name: 'Mumbai', code: 'BOM' },
  { name: 'Delhi', code: 'DEL' },
  { name: 'Shanghai', code: 'SHA' },
  { name: 'Beijing', code: 'PEK' },
  { name: 'Taipei', code: 'TPE' },
  { name: 'Auckland', code: 'AKL' },
  { name: 'Austin', code: 'AUS' },
  { name: 'New Orleans', code: 'MSY' },
  { name: 'Seattle', code: 'SEA' },
  { name: 'Philadelphia', code: 'PHL' },
  { name: 'Houston', code: 'IAH' },
  { name: 'Washington, D.C.', code: 'WAS' },
  { name: 'Vancouver', code: 'YVR' },
  { name: 'Montreal', code: 'YUL' },
  { name: 'Manchester', code: 'MAN' },
  { name: 'Glasgow', code: 'GLA' },
  { name: 'Lyon', code: 'LYS' },
  { name: 'Lisbon', code: 'LIS' },
  { name: 'Milan', code: 'MIL' },
  { name: 'Zurich', code: 'ZRH' },
  { name: 'Brussels', code: 'BRU' },
  { name: 'Vienna', code: 'VIE' },
  { name: 'Prague', code: 'PRG' },
  { name: 'Warsaw', code: 'WAW' },
  { name: 'Budapest', code: 'BUD' },
  { name: 'Munich', code: 'MUC' },
  { name: 'Stockholm', code: 'ARN' },
  { name: 'Oslo', code: 'OSL' },
  { name: 'Copenhagen', code: 'CPH' },
  { name: 'Helsinki', code: 'HEL' },
  { name: 'Reykjavik', code: 'KEF' },
  { name: 'Brisbane', code: 'BNE' },
  { name: 'Perth', code: 'PER' },
  { name: 'Tokyo', code: 'HND' },
  { name: 'Osaka', code: 'KIX' },
  { name: 'Seoul', code: 'ICN' },
  { name: 'Beijing', code: 'PEK' },
  { name: 'Shanghai', code: 'PVG' },
  { name: 'Hong Kong', code: 'HKG' },
  { name: 'Taipei', code: 'TPE' },
  { name: 'Bangkok', code: 'BKK' },
  { name: 'Singapore', code: 'SIN' },
  { name: 'Kuala Lumpur', code: 'KUL' },
  { name: 'Jakarta', code: 'CGK' },
  { name: 'Manila', code: 'MNL' },
  { name: 'Mumbai', code: 'BOM' },
  { name: 'Delhi', code: 'DEL' },
  { name: 'Cape Town', code: 'CPT' },
  { name: 'Johannesburg', code: 'JNB' },
  { name: 'Buenos Aires', code: 'EZE' },
  { name: 'Sao Paulo', code: 'GRU' },
  { name: 'Rio de Janeiro', code: 'GIG' },
  { name: 'Santiago', code: 'SCL' },
  { name: 'Mexico City', code: 'MEX' },
  { name: 'Guadalajara', code: 'GDL' },
  { name: 'Monterrey', code: 'MTY' },
  { name: 'Bogota', code: 'BOG' },
  { name: 'Lima', code: 'LIM' },
  { name: 'Caracas', code: 'CCS' },
  { name: 'Tel Aviv', code: 'TLV' },
  { name: 'Istanbul', code: 'IST' },
  { name: 'Athens', code: 'ATH' },
  { name: 'Cairo', code: 'CAI' },
  { name: 'Casablanca', code: 'CMN' },
  { name: 'Lagos', code: 'LOS' },
  { name: 'Nairobi', code: 'NBO' },
  { name: 'Cape Town', code: 'CPT' },
  { name: 'Durban', code: 'DUR' },
  { name: 'Accra', code: 'ACC' },
  { name: 'Dakar', code: 'DKR' },
  { name: 'Marrakesh', code: 'RAK' },
  { name: 'Tunis', code: 'TUN' },
  { name: 'Algiers', code: 'ALG' },
  { name: 'Beirut', code: 'BEY' },
  { name: 'Amman', code: 'AMM' },
  { name: 'Doha', code: 'DOH' },
  { name: 'Kuwait City', code: 'KWI' },
  { name: 'Muscat', code: 'MCT' },
  { name: 'Manama', code: 'BAH' },
  { name: 'Tbilisi', code: 'TBS' }
];

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
    <div className="event-search-wrapper">
        <h2 className="search-title">Search Events by Bandsintown</h2>
        <div className="event-search-container">
            <form onSubmit={handleSubmit} className="event-search-form">
                <label>
                    City:
                    <select value={city} onChange={(e) => setCity(e.target.value)} required>
                        <option value="">Select a city</option>
                        {cities.map((city, index) => (
                            <option key={index} value={city.code}>
                                {city.name}
                            </option>
                        ))}
                    </select>
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
