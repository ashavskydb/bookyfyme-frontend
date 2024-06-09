import axios from 'axios';

const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:5000/api/auth';

const register = async (email, password) => {
  await axios.post(`${API_URL}/register`, { email, password });
};

const login = async (email, password) => {
  const response = await axios.post(`${API_URL}/login`, { email, password });
  return response.data;
};

const authService = {
  register,
  login
};

export default authService;
