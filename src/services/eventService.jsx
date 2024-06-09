import axios from 'axios';

const API_URL = `${import.meta.env.VITE_API_URL}/bandsintown`;

const searchEvents = async (city, date) => {
  const response = await axios.post(`${API_URL}/search`, { city, date });
  return response.data.events;
};

const eventService = {
  searchEvents
};

export default eventService;
