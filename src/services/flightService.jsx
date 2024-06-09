import axios from 'axios';

const API_URL = `${import.meta.env.VITE_API_URL}/trips`;

const searchFlights = async (origin, destination, startDate, endDate) => {
  const response = await axios.post(`${API_URL}/search`, { origin, destination, startDate, endDate });
  return response.data.flights;
};

const flightService = {
  searchFlights
};

export default flightService;
