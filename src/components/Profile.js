import React, { useState } from 'react';
import Sidebar from './Sidebar';
import './MemberDashboard.css'; // Keep this for the main layout
import './Profile.css';       // Keep this for the profile-specific styles

// Import only the icons needed for THIS page's content
import { FaPencilAlt, FaCamera } from 'react-icons/fa';

const Profile = () => {
  const [isEditing, setIsEditing] = useState(false);

  const currentUser = {
    name: 'Josh Mojica',
    goal: 'Gaining Weight',
    avatar: 'https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?q=80&w=2662&auto-format&fit-crop',
    email: 'example@gmail.com',
    phone: '0950 *** ****',
    dob: '01 / 01 / 1990',
  };

  const membership = {
    type: 'Premium 3 Months',
    startDate: 'April 22, 2025',
    renewalDate: 'July 22, 2025',
    status: 'Active',
  };
  
  const attendance = {
    days: [50, 80, 70, 95, 60, 30, 30], // Heights in % for the bars
    activeDays: 5,
    totalDays: 7,
  };

  return (
    <div className="dashboard-container">
      {/* This is the correct way to include the sidebar */}
      <Sidebar currentUser={currentUser} />

      {/* --- ALL THE DUPLICATED CODE HAS BEEN REMOVED FROM HERE --- */}

      {/* Main Profile Content */}
      <main className="profile-main-content">
        <header className="profile-header">
          <div className="avatar-container">
            <img src={currentUser.avatar} alt="Profile Avatar" className="profile-avatar" />
            <div className="avatar-edit-icon"><FaCamera /></div>
          </div>
          <h1>Your Account</h1>
        </header>

        <div className="profile-widgets-grid">
          {/* Personal Details */}
          <div className="profile-widget">
            <div className="widget-header">
              <h2>Personal Details</h2>
              <div className="widget-edit-icon" onClick={() => setIsEditing(!isEditing)}>
                <FaPencilAlt />
              </div>
            </div>
            <form className="details-form">
              <div className="input-group"><label>Full name:</label><input type="text" defaultValue={currentUser.name} readOnly={!isEditing} /></div>
              <div className="input-group"><label>Email:</label><input type="email" defaultValue={currentUser.email} readOnly={!isEditing} /></div>
              <div className="input-group"><label>Phone:</label><input type="text" defaultValue={currentUser.phone} readOnly={!isEditing} /></div>
              <div className="input-group"><label>Date of Birth:</label><input type="text" defaultValue={currentUser.dob} readOnly={!isEditing} /></div>
            </form>
          </div>

          {/* Membership Status */}
          <div className="profile-widget">
            <div className="widget-header"><h2>Membership Status</h2></div>
            <div className="membership-status-grid">
              <div className="status-item"><p>Membership Type:</p><span>{membership.type} <span className="status-tag">{membership.status}</span></span></div>
              <div className="status-item"><p>Start Date:</p><span>{membership.startDate}</span></div>
              <div className="status-item"><p>Renewal Date:</p><span>{membership.renewalDate}</span></div>
            </div>
            <div className="membership-actions">
              <button className="upgrade-button">Upgrade Membership</button>
              <button className="cancel-button">Cancel Membership</button>
            </div>
          </div>

          {/* Attendance History */}
          <div className="profile-widget">
            <div className="widget-header"><h2>Attendance History</h2></div>
            <div className="attendance-history">
              <p>Your Workout History for this Week:</p>
              <span className="main-stat">{attendance.activeDays} / {attendance.totalDays}</span>
              <div className="attendance-chart">
                {attendance.days.map((height, index) => (
                  <div key={index} className={`bar ${index >= attendance.activeDays ? 'inactive' : ''}`} style={{ height: `${height}%` }}></div>
                ))}
              </div>
               <div className="view-history-link">
                <button onClick={() => alert('Full history page coming soon!')}>View Full History</button>
               </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Profile;