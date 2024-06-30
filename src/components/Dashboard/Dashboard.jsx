import React from 'react';
import { Link } from 'react-router-dom';
import Calendar from "../Calendar/Calendar.jsx";
import './Dashboard.css';



const Dashboard = () => {
  return (
    <div className="main-content">
      <div className="dashboard">
        <Calendar />
      </div>
      <div className="sidebar">
        <div className="widget">
          <h2>Search Flights</h2>
          <Link to="/flights">Go to Flight Search</Link>
        </div>
        <div className="widget">
          <h2>Search Hotels</h2>
          <Link to="/hotels">Go to Hotel Search</Link>
        </div>
        <div className="widget">
          <h2>Search Events</h2>
          <Link to="/events">Go to Event Search</Link>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
