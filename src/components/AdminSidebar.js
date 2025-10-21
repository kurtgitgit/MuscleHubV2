import React from 'react';
import { NavLink, Link, useLocation } from 'react-router-dom';
import '../styles/Sidebar.css'; // We will update this shared CSS file

// Import Icons
import { FaHome, FaUsers, FaChartLine,  FaIdCard, FaSignOutAlt } from 'react-icons/fa';

const AdminSidebar = ({ currentUser }) => {
  const location = useLocation();
  const isProfileActive = location.pathname === '/admin-profile';

  // A function to handle logging out (for frontend-only prototype)
  const handleLogout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('userRole');
    // In a real app, you'd navigate, but for now, a simple href is fine
    // navigate('/login'); 
  };

  return (
    <aside className="sidebar">
      {/* This top div groups the profile and main navigation */}
      <div>
        <Link to="/admin-profile" className={`profile-card-link ${isProfileActive ? 'active' : ''}`}>
          <div className="profile-card">
            <img src={currentUser.avatar} alt="Admin Avatar" className="profile-avatar" />
            <div className="profile-info">
              <h4>{currentUser.name}</h4>
              <p className="admin-tag">ADMIN</p>
            </div>
          </div>
        </Link>

        <nav className="sidebar-nav">
          <ul>
            <li><NavLink to="/dashboard"><FaHome /> Home</NavLink></li>
            <li><NavLink to="/users"><FaUsers /> Users</NavLink></li>
            <li><NavLink to="/analytics"><FaChartLine /> Analytics</NavLink></li>
            <li><NavLink to="/admin-plans"><FaIdCard /> Plans</NavLink></li>
           
          </ul>
        </nav>
      </div>

      {/* This bottom div holds only the logout button */}
      <div className="sidebar-logout">
        <a href="/login" onClick={handleLogout} className="logout-button">
          <FaSignOutAlt /> Log Out
        </a>
      </div>
    </aside>
  );
};

export default AdminSidebar;