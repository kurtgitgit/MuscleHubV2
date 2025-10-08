import React, { useState } from 'react';
import AdminSidebar from './AdminSidebar';
import '../styles/MemberDashboard.css'; // Main layout styles
import '../styles/Settings.css';        // Specific styles for this page

const Settings = () => {
  const [isTwoFactorEnabled, setIsTwoFactorEnabled] = useState(false);

  const adminUser = {
    name: 'Josh Mojica',
    avatar: 'https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?q=80&w=2662&auto-format&fit=crop',
    email: 'josh.mojica.admin@example.com',
    phone: '0917 123 4567',
  };

  return (
    <div className="dashboard-container">
      <AdminSidebar currentUser={adminUser} />
      <main className="main-content">
        <h1>Settings</h1>
        <div className="settings-grid">
          {/* Account Details Widget */}
          <div className="settings-widget">
            <h2>Account Details</h2>
            <form>
              <div className="input-group">
                <label>Full Name</label>
                <input type="text" defaultValue={adminUser.name} />
              </div>
              <div className="input-group">
                <label>Email Address</label>
                <input type="email" defaultValue={adminUser.email} />
              </div>
              <div className="input-group">
                <label>Phone Number</label>
                <input type="tel" defaultValue={adminUser.phone} />
              </div>
              <button type="submit" className="save-button">Save Changes</button>
            </form>
          </div>

          {/* Security Settings Widget */}
          <div className="settings-widget">
            <h2>Security</h2>
            <div className="security-settings">
              <div className="setting-item">
                <span>Password</span>
                <button className="change-password-button">Change Password</button>
              </div>
              <div className="setting-item">
                <span>Two-Factor Authentication</span>
                <div 
                  className={`toggle-switch ${isTwoFactorEnabled ? 'active' : ''}`}
                  onClick={() => setIsTwoFactorEnabled(!isTwoFactorEnabled)}
                >
                  <div className="toggle-handle"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Settings;

