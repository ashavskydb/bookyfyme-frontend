import axios from "axios";

const API_URL =
  import.meta.env.VITE_API_URL || "http://localhost:5001/api/accommodations"; 'https://bookyfyme-backend.onrender.com/api/accommodations';

const searchAccommodations = async (city, checkInDate, checkOutDate) => {
  const response = await axios.post(`${API_URL}/search`, {
    city,
    checkInDate,
    checkOutDate,
  });
  console.log(response);
  return response.data;
};

const hotelService = {
  searchAccommodations,
};

export default hotelService;

