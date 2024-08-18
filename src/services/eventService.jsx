import axios from 'axios';

const API_URL = import.meta.env.VITE_API_URL || 'https://bookyfyme-backend.onrender.com/api/bandsintown';

const searchEvents = async (city, date) => {
  const response = await axios.post(`${API_URL}/`, { city, date });
  return response.data;
};

const eventsService = {
  searchEvents
};

export default eventsService;
