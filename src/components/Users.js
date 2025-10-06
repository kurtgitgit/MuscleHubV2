import React from 'react';
import AdminSidebar from './AdminSidebar';
import '../styles/MemberDashboard.css'; // Main layout styles
import '../styles/Users.css';           // Specific styles for this page

// Import Icons
import { FaSearch, FaPlus } from 'react-icons/fa';

const Users = () => {
  const adminUser = {
    name: 'Josh Mojica',
    avatar: 'https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?q=80&w=2662&auto-format&fit=crop',
  };

  // Mock data for the user list
  const users = [
    { name: 'Maria Rodriguez', email: 'maria.r@example.com', plan: 'Premium 3 Months', status: 'Active', avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=2574&auto=format&fit=crop' },
    { name: 'Ethan Cruz', email: 'ethan.c@example.com', plan: 'Basic 1 Month', status: 'Active', avatar: 'https://images.unsplash.com/photo-1552058544-f2b08422138a?q=80&w=2598&auto=format&fit=crop' },
    { name: 'Sophia Reyes', email: 'sophia.r@example.com', plan: 'Premium 12 Months', status: 'Expired', avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=2670&auto=format&fit=crop' },
    { name: 'Liam Santos', email: 'liam.s@example.com', plan: 'Basic 6 Months', status: 'Active', avatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=2576&auto=format&fit=crop' },
  ];

  return (
    <div className="dashboard-container">
      <AdminSidebar currentUser={adminUser} />
      <main className="main-content">
        <header className="page-header">
          <h1>Users</h1>
          <div className="header-actions">
            <div className="search-bar">
              <FaSearch className="search-icon" />
              <input type="text" placeholder="Search for a user..." />
            </div>
            {/* --- ADD THIS BUTTON --- */}
            <button className="add-user-button">
              <FaPlus /> Add New User
            </button>
          </div>
        </header>

        <div className="users-table">
          <table>
            <thead>
              <tr>
                <th>User</th>
                <th>Membership Plan</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              {users.map((user, index) => (
                <tr key={index}>
                  <td>
                    <div className="user-info">
                      <img src={user.avatar} alt={user.name} />
                      <div>
                        <span className="name">{user.name}</span>
                        <span className="email">{user.email}</span>
                      </div>
                    </div>
                  </td>
                  <td>{user.plan}</td>
                  <td>
                    <span className={`status-pill ${user.status.toLowerCase()}`}>
                      {user.status}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </main>
    </div>
  );
};

export default Users;

