import React from 'react';
import { NavLink, Link, useLocation, useNavigate } from 'react-router-dom';
import '../styles/Sidebar.css';

// Import Icons
import { FaHome, FaTrophy, FaIdCard, FaChartBar, FaSignOutAlt } from 'react-icons/fa';

const Sidebar = ({ currentUser }) => {
  const location = useLocation();
  const isProfileActive = location.pathname === '/profile';
  const navigate = useNavigate();

  const handleLogout = () => {
    // TODO: Clear auth tokens/session if needed
    navigate("/"); // ✅ Redirects back to LandingPage
  };

  return (
    <aside className="sidebar">
      {/* Profile Card */}
      <Link to="/profile" className={`profile-card-link ${isProfileActive ? 'active' : ''}`}>
        <div className="profile-card">
          <img src={currentUser.avatar} alt="User Avatar" />
          <div className="profile-info">
            <h3>{currentUser.name}</h3>
            <p>{currentUser.goal}</p>
          </div>
        </div>
      </Link>

      {/* Navigation */}
      <nav>
        <ul className="nav-links">
          <li>
            <NavLink to="/dashboard" className={({ isActive }) => isActive ? "active" : ""}>
              <FaHome className="nav-icon" /> Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/leaderboard" className={({ isActive }) => isActive ? "active" : ""}>
              <FaTrophy className="nav-icon" /> Leaderboard
            </NavLink>
          </li>
          <li>
            <NavLink to="/membership" className={({ isActive }) => isActive ? "active" : ""}>
              <FaIdCard className="nav-icon" /> Membership Plans
            </NavLink>
          </li>
          <li>
            <NavLink to="/progress" className={({ isActive }) => isActive ? "active" : ""}>
              <FaChartBar className="nav-icon" /> Progress Tracking
            </NavLink>
          </li>
        </ul>
      </nav>

      {/* Logout Button */}
      <button className="logout-btn" onClick={handleLogout}>
        <FaSignOutAlt className="nav-icon" /> Log Out
      </button>
    </aside>
  );
};

export default Sidebar;
