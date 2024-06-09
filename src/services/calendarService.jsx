import axios from 'axios';

const API_URL = 'http://localhost:5000/api/calendars';

const getEvents = async () => {
  const response = await axios.get(`${API_URL}`);
  return response.data.map(calendar => calendar.events).flat();
};

const createEvent = async (newEvent) => {
  
  const response = await axios.post(`${API_URL}/1/events`, newEvent); 
  return response.data;
};

const calendarService = {
  getEvents,
  createEvent
};

export default calendarService;
