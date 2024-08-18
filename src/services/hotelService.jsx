import axios from 'axios';

const API_KEY = import.meta.env.VITE_API_URL || `https://bookyfyme-backend.onrender.com/api/accommodations`;

const searchAccommodations = async (city, checkInDate, checkOutDate, token) => {
  console.log("Using token:", token);
  if (!city || !checkInDate || !checkOutDate) {
    throw new Error('All search parameters must be provided');
  }
  try {
    const response = await axios.get(API_KEY, {
      params: { city, startDate: checkInDate, endDate: checkOutDate },
      headers: {
        Authorization: `Bearer ${token}`
      }
    });

    return response.data;
  } catch (error) {
    const errorMessage = error.response && error.response.data
      ? `Failed to fetch hotels: ${error.response.data.message || JSON.stringify(error.response.data)}`
      : `Failed to fetch hotels: ${error.message}`;
    throw new Error(errorMessage);
  }
};

const hotelService = {
  searchAccommodations
};

export default hotelService;
