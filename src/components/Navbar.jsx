import React from 'react';
import { Link } from 'react-router-dom';
import './styles/Navbar.css';

const Navbar = () => {
  return (
    <nav className="header">
      <ul>
        <h1>Welcome to BookyfyMe</h1>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/flights">Flights</Link></li>
        <li><Link to="/hotels">Hotels</Link></li>
        <li><Link to="/events">Events</Link></li>
        <li><Link to="/calendar">Calendar</Link></li>
        <li><Link to="/login">Login</Link></li>
        <li><Link to="/register">Register</Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;
