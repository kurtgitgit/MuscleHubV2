import React from 'react';
import { NavLink, Link, useLocation } from 'react-router-dom';
import '../styles/Sidebar.css'; // We can reuse the same CSS as the client's sidebar

// Import Icons
import { FaHome, FaUsers, FaChartLine, FaCog, FaSignOutAlt } from 'react-icons/fa';

const AdminSidebar = ({ currentUser }) => {
  const location = useLocation();
  const isProfileActive = location.pathname === '/profile'; // Assuming admin has a profile page too

  return (
    <aside className="sidebar">
      <Link to="/profile" className={`profile-card-link ${isProfileActive ? 'active' : ''}`}>
        <div className="profile-card">
          <img src={currentUser.avatar} alt="User Avatar" />
          <div className="profile-info">
            <h3>{currentUser.name}</h3>
            <p className="admin-tag">ADMIN</p> {/* Special tag for admin */}
          </div>
        </div>
      </Link>

      <nav>
        <ul className="nav-links">
          <li><NavLink to="/dashboard" className={({ isActive }) => isActive ? "active" : ""}>
              <FaHome className="nav-icon" /> Home
          </NavLink></li>
          <li><NavLink to="/users" className={({ isActive }) => isActive ? "active" : ""}>
              <FaUsers className="nav-icon" /> Users
          </NavLink></li>
          <li><NavLink to="/analytics" className={({ isActive }) => isActive ? "active" : ""}>
              <FaChartLine className="nav-icon" /> Analytics
          </NavLink></li>
          <li><NavLink to="/settings" className={({ isActive }) => isActive ? "active" : ""}>
              <FaCog className="nav-icon" /> Settings
          </NavLink></li>
        </ul>
      </nav>
      
      <div className="nav-links">
        <li><a href="/login"><FaSignOutAlt className="nav-icon" /> Log Out</a></li>
      </div>
    </aside>
  );
};

export default AdminSidebar;