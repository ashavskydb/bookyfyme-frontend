import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';
import logo from "../styles/BookyfyMe Logo.jpg";


const Navbar = () => {
  return (
    <nav className="header">
      <div className="logo">
        <img src={logo} alt="BookyfyMe Logo" />
      </div>
      <ul>
        <li><Link to="/" className="btn btn-white btn-animate">Home</Link></li>
        <li><Link to="/flights" className="btn btn-white btn-animate">Flights</Link></li>
        <li><Link to="/hotels" className="btn btn-white btn-animate">Hotels</Link></li>
        <li><Link to="/events" className="btn btn-white btn-animate">Events</Link></li>
        <li><Link to="/login" className="btn btn-white btn-animate">Login</Link></li>
        <li><Link to="/register" className="btn btn-white btn-animate">Register</Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;
