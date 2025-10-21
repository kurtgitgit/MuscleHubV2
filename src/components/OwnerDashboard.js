import React, { useState } from 'react'; // Removed useState and useEffect
import AdminSidebar from './AdminSidebar';
import '../styles/OwnerDashboard.css';
import NotificationsPanel from './NotificationsPanel';

// Import Chart components
import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js';
import { FaBell, FaUserPlus, FaDollarSign } from 'react-icons/fa';
ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const OwnerDashboard = () => {
  const [isNotificationsOpen, setIsNotificationsOpen] = useState(false);

  const ownerUser = {
    name: 'Josh Mojica',
    avatar: 'https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?q=80&w=2662&auto-format&fit=crop',
  };
  const ownerNotifications = [ { icon: <FaUserPlus />, message: 'New member registered: Maria Clara', time: '15 minutes ago' }, { icon: <FaDollarSign />, message: 'A membership payment of ₱1,249 was received.', time: '1 hour ago' }];

  const revenueData = {
    labels: ['M', 'T', 'W', 'T', 'F', 'S', 'S'],
    datasets: [
      {
        label: 'Weekly Revenue',
        data: [1600, 4500, 2700, 1200, 1400, 4500, 3900],
        backgroundColor: '#ADFF2F',
        borderRadius: 5,
      },
    ],
  };

  const chartOptions = {
    responsive: true,
    plugins: { legend: { display: false } },
    scales: {
      x: { ticks: { color: '#aaa' }, grid: { display: false } },
      y: { ticks: { color: '#aaa' }, grid: { color: '#444' } },
    },
  };

  // No longer need to check for loading or error states
  return (
    <div className="dashboard-container">
      <AdminSidebar currentUser={ownerUser} />
      <main className="main-content">
        <header className="welcome-header">
          <h1>Hello, <span>{ownerUser.name.split(' ')[0]}!!</span></h1>
          <p>this is what's happening in your gym this month.</p>
          <div className="header-actions">
                        <button className="notification-bell" onClick={() => setIsNotificationsOpen(!isNotificationsOpen)}>
                            <FaBell />
                            <div className="notification-dot"></div>
                        </button>
                        {isNotificationsOpen && <NotificationsPanel notifications={ownerNotifications} />}
                    </div>
        </header>

        <div className="stats-cards-grid">
          <div className="stat-card">
            <p>Revenue</p>
            <span className="gradient-text">₱ 15,750</span>
          </div>
          <div className="stat-card">
            <p>Growth Rate</p>
            <span className="gradient-text">25.4%</span>
          </div>
          <div className="stat-card">
            <p>Users</p>
            <span className="gradient-text">321</span>
          </div>
        </div>

        <div className="report-widget">
          <h2>Weekly Revenue Report</h2>
          <p className="subtitle">Revenue performance over the last 7 days.</p>
          <Bar options={chartOptions} data={revenueData} />
        </div>
      </main>
    </div>
  );
};

export default OwnerDashboard;

