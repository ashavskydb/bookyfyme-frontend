import axios from 'axios';

const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:5000/api/bandsintown';

const searchEvents = async (artist, region) => {
  const response = await axios.post(`${API_URL}/search`, { artist, region }); //проблема тут 
  return response.data;
};

const eventsService = {
  searchEvents
};

export default eventsService;