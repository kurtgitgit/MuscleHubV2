import React from 'react';
import { NavLink, Link, useLocation } from 'react-router-dom';
import './Sidebar.css'; // Import the new CSS

// Import Icons
import { FaHome, FaTrophy, FaIdCard, FaChartBar, FaSignOutAlt } from 'react-icons/fa';

const Sidebar = ({ currentUser }) => {
  const location = useLocation();
  const isProfileActive = location.pathname === '/profile';

  return (
    <aside className="sidebar">
      {/* The entire profile card is now a link */}
      <Link to="/profile" className={`profile-card-link ${isProfileActive ? 'active' : ''}`}>
        <div className="profile-card">
          <img src={currentUser.avatar} alt="User Avatar" />
          <div className="profile-info">
            <h3>{currentUser.name}</h3>
            <p>{currentUser.goal}</p>
          </div>
        </div>
      </Link>

      <nav>
        <ul className="nav-links">
          <li><NavLink to="/dashboard" className={({ isActive }) => isActive ? "active" : ""}>
              <FaHome className="nav-icon" /> Home
          </NavLink></li>
          <li><NavLink to="/leaderboard" className={({ isActive }) => isActive ? "active" : ""}>
              <FaTrophy className="nav-icon" /> Leaderboard
          </NavLink></li>
          <li><NavLink to="/membership" className={({ isActive }) => isActive ? "active" : ""}>
              <FaIdCard className="nav-icon" /> Membership Plans
          </NavLink></li>
          <li><NavLink to="/progress" className={({ isActive }) => isActive ? "active" : ""}>
              <FaChartBar className="nav-icon" /> Progress Tracking
          </NavLink></li>
        </ul>
      </nav>
      
      {/* Logout Link */}
      <div className="nav-links">
        <li><a href="/login"><FaSignOutAlt className="nav-icon" /> Log Out</a></li>
      </div>
    </aside>
  );
};

export default Sidebar;