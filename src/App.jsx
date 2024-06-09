import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Dashboard from './components/Dashboard';
import FlightSearch from './components/FlightSearch';
import HotelSearch from './components/HotelSearch';
import EventSearch from './components/EventsSearch';
import Calendar from './components/Calendar';
import LoginRegister from './components/LoginRegister';
import { AuthProvider } from './contexts/AuthContext';
import './App.css';

function App() {
  return (
    <AuthProvider>
      <Router>
        <div className="app-container">
          <Navbar />
          <div className="main-content">
            <Routes>
              <Route path="/" element={<Dashboard />} />
              <Route path="/flights" element={<FlightSearch />} />
              <Route path="/hotels" element={<HotelSearch />} />
              <Route path="/events" element={<EventSearch />} />
              <Route path="/calendar" element={<Calendar />} />
              <Route path="/login" element={<LoginRegister page="Login" />} />
              <Route path="/register" element={<LoginRegister page="Register" />} />
            </Routes>
          </div>
        </div>
      </Router>
    </AuthProvider>
  );
}

export default App;
