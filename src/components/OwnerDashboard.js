import React from 'react';
import './OwnerDashboard.css';
import { FaDollarSign, FaUserClock } from 'react-icons/fa';
// --- Import Chart components ---
import { Line } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';

// --- Register Chart components ---
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const OwnerDashboard = () => {
  // ... (keep the existing mock data for stats and recentMembers)
  const stats = {
    revenue: '₱15,750',
    membersPresent: 32,
    newSignups: 4,
  };

  const recentMembers = [
    { name: 'John Ryan Reyes', email: 'jr.reyes@example.com', status: 'Checked In' },
    { name: 'Johaina Aguado', email: 'j.aguado@example.com', status: 'Checked In' },
    { name: 'Ivan Paul Beltran', email: 'ip.beltran@example.com', status: 'New Signup' },
    { name: 'Christian Marata', email: 'c.marata@example.com', status: 'Checked In' },
  ];
  // --- Mock data for the chart ---
  const revenueData = {
    labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
    datasets: [
      {
        label: 'Revenue (₱)',
        data: [1200, 1900, 3000, 5000, 2300, 3100, 4000],
        borderColor: '#00ff00',
        backgroundColor: 'rgba(0, 255, 0, 0.1)',
        fill: true,
        tension: 0.4,
      },
    ],
  };

  return (
    <div className="dashboard-container">
      {/* ... (header and stats-grid remain the same) ... */}
       <header className="dashboard-header">
        <h1>Welcome, Owner!</h1>
        <p>Here's a snapshot of your gym's performance today.</p>
      </header>
      <div className="stats-grid">
        <div className="stat-card">
          <div className="icon-container"><FaDollarSign /></div>
          <div className="info">
            <h3>Today's Revenue</h3>
            <p>{stats.revenue}</p>
          </div>
        </div>
        <div className="stat-card">
          <div className="icon-container"><FaUserClock /></div>
          <div className="info">
            <h3>Members Present</h3>
            <p>{stats.membersPresent}</p>
          </div>
        </div>
        <div className="stat-card">
          <div className="info">
            <h3>New Signups Today</h3>
            <p>{stats.newSignups}</p>
          </div>
        </div>
      </div>
      <div className="main-content-grid">
        <div className="dashboard-widget">
          <h2>Revenue Trend (Last 7 Days)</h2>
          {/* --- Replace placeholder with the Line chart component --- */}
          <Line data={revenueData} />
        </div>
        <div className="dashboard-widget recent-members-list">
             <h2>Recent Activity</h2>
          <ul>
            {recentMembers.map((member, index) => (
              <li key={index}>
                <div className="member-info">
                  <span className="name">{member.name}</span>
                  <span className="email">{member.email}</span>
                </div>
                <span className="member-status">{member.status}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default OwnerDashboard;