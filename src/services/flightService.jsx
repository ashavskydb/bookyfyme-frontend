import axios from 'axios';

const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:5000/api/flights';

const searchFlights = async (origin, destination, departureDate, returnDate) => {
  const response = await axios.post(`${API_URL}/search`, { origin, destination, departureDate, returnDate });
  return response.data;
};

const flightService = {
  searchFlights
};

export default flightService;
