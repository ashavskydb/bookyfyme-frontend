import axios from 'axios';

const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:5000/api/bandsintown';

const searchEvents = async (city, date, region) => {
  const response = await axios.post(`${API_URL}/`, { city, date, region });
  return response.data;
};

const eventsService = {
  searchEvents
};

export default eventsService;
