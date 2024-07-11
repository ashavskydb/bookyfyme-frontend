import React, { useState } from "react";
import flightService from "../../services/flightService";
import "./FlightSearch.css";

const FlightSearch = () => {
  const [origin, setOrigin] = useState("");
  const [destination, setDestination] = useState("");
  const [departureDate, setDepartureDate] = useState("");
  const [returnDate, setReturnDate] = useState("");
  const [flights, setFlights] = useState([]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const result = await flightService.searchFlights(
        origin,
        destination,
        departureDate,
        returnDate
      );
      setFlights(result);
      console.log(result);
    } catch (error) {
      console.error("Flight search failed", error);
    }
  };

  const renderFlightDetails = (flight) => {
    if (flights.length === 0) return null;
    const { airline_logo, type, price, total_duration, carbon_emissions, extensions, this_flight, typical_for_this_route, difference_percent } = flight;
    return (
      <div>
        <img src={airline_logo} alt={`${type} logo`} />
        <p>Type: {type}</p>
        <p>Price: {price}</p>
        <p>Total Duration: {total_duration}</p>
        <p>Carbon Emissions: {carbon_emissions ? `CO2: ${carbon_emissions.CO2}` : 'N/A'}</p>
        {extensions && (
          <div>
            <h4>Extensions:</h4>
            <ul>
              {Object.entries(extensions).map(([key, value], index) => (
                <li key={index}>{`${key}: ${JSON.stringify(value)}`}</li>
              ))}
            </ul>
          </div>
        )}
        {this_flight && (
          <div>
            <h4>This Flight:</h4>
            <ul>
              {Object.entries(this_flight).map(([key, value], index) => (
                <li key={index}>{`${key}: ${JSON.stringify(value)}`}</li>
              ))}
            </ul>
          </div>
        )}
        {typical_for_this_route && (
          <div>
            <h4>Typical for This Route:</h4>
            <ul>
              {Object.entries(typical_for_this_route).map(([key, value], index) => (
                <li key={index}>{`${key}: ${JSON.stringify(value)}`}</li>
              ))}
            </ul>
          </div>
        )}
        {difference_percent && (
          <div>
            <h4>Difference Percent:</h4>
            <ul>
              {Object.entries(difference_percent).map(([key, value], index) => (
                <li key={index}>{`${key}: ${JSON.stringify(value)}`}</li>
              ))}
            </ul>
          </div>
        )}
      </div>
    );
  };

  return (
    <div className="flight-search-wrapper">
      <h2 className="search-title">Search Flights by Google Flights</h2>
      <div className="flight-search-container">
        <form onSubmit={handleSubmit} className="flight-search-form">
          <label>
            Where from:
            <input
              type="text"
              value={origin}
              onChange={(e) => setOrigin(e.target.value)}
              required
            />
          </label>
          <label>
            Where to:
            <input
              type="text"
              value={destination}
              onChange={(e) => setDestination(e.target.value)}
              required
            />
          </label>
          <label>
            Departure Date:
            <input
              type="date"
              value={departureDate}
              onChange={(e) => setDepartureDate(e.target.value)}
              required
            />
          </label>
          <label>
            Return Date:
            <input
              type="date"
              value={returnDate}
              onChange={(e) => setReturnDate(e.target.value)}
            />
          </label>
          <button type="submit" className="btn btn-white btn-animate">
            Search
          </button>
        </form>
        <ul className="flight-results">
          {flights.map((flight, index) => (
            <li key={index}>{renderFlightDetails(flight)}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default FlightSearch;
