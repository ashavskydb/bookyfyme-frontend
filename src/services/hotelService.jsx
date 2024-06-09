import axios from 'axios';

const API_URL = `${import.meta.env.VITE_API_URL}/accommodations`;

const searchHotels = async (city, checkInDate, checkOutDate) => {
  const response = await axios.post(`${API_URL}/search`, { city, checkInDate, checkOutDate });
  return response.data.accommodations;
};

const hotelService = {
  searchHotels
};

export default hotelService;
