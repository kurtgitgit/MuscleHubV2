import React from 'react';
import AdminSidebar from './AdminSidebar';
import '../styles/OwnerDashboard.css';

// Import Chart components
import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js';

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const OwnerDashboard = () => {
  // --- This object is now defined inside the component ---
  // This guarantees ownerUser and ownerUser.name will always exist.
  const ownerUser = {
    name: 'Josh Mojica',
    avatar: 'https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?q=80&w=2662&auto-format&fit-crop',
  };

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

  return (
    <div className="dashboard-container">
      <AdminSidebar currentUser={ownerUser} />
      <main className="main-content">
        <header className="welcome-header">
          <h1>Hello, <span>{ownerUser.name.split(' ')[0]}!!</span></h1>
          <p>this is what's happening in your gym this month.</p>
        </header>

        <div className="stats-cards-grid">
          <div className="stat-card">
            <p>Revenue</p>
            <span>₱ 15,750</span>
          </div>
          <div className="stat-card">
            <p>Growth Rate</p>
            <span>25.4%</span>
          </div>
          <div className="stat-card">
            <p>Users</p>
            <span>321</span>
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
