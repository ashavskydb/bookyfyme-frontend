import axios from 'axios';

const API_URL = import.meta.env.VITE_API_URL || `http://localhost:5000/api/accommodations`;

const searchHotels = async (city, checkInDate, checkOutDate, token) => {
  if (!city || !checkInDate || !checkOutDate) {
    throw new Error('All search parameters must be provided');
  }
  try {
    const response = await axios.get(API_URL, {
      params: { city, checkInDate, checkOutDate },
      headers: {
        Authorization: `Bearer ${token}`
      }
    });
    return response.data.accommodations;
  } catch (error) {
    const errorMessage = error.response && error.response.data
      ? `Failed to fetch hotels: ${error.response.data.message || JSON.stringify(error.response.data)}`
      : `Failed to fetch hotels: ${error.message}`;
    throw new Error(errorMessage);
  }
};

const hotelService = {
  searchHotels
};

export default hotelService;
