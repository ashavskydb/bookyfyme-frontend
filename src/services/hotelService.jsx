import axios from 'axios';

const API_URL = `http://localhost:5000/api/accommodations`;

const searchHotels = async (city, checkInDate, checkOutDate) => {
  const response = await axios.get(API_URL, { city, checkInDate, checkOutDate });
  return response.data.accommodations;
};

const hotelService = {
  searchHotels
};

export default hotelService;
