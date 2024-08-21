import axios from 'axios';

const API_URL = import.meta.env.VITE_API_URL || 'https://bookyfyme-backend.onrender.com/api/accommodations';

const searchAccommodations = async (city, checkInDate, checkOutDate) => {
  const response = await axios.post(`${API_URL}/search`, { city, checkInDate, checkOutDate });
    return response.data;
};

const hotelService = {
  searchAccommodations
};

export default hotelService;
