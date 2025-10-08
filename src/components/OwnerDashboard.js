import React, { useState, useEffect } from 'react';
import AdminSidebar from './AdminSidebar';
import '../styles/OwnerDashboard.css';

// Import Chart components
import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js';

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const OwnerDashboard = () => {
  const [stats, setStats] = useState(null);
  const [error, setError] = useState('');

  const ownerUser = {
    name: 'Josh Mojica', // This can also be fetched, but is fine as mock for now
    avatar: 'https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?q=80&w=2662&auto-format&fit=crop',
  };

  // Fetch admin stats when the component loads
  useEffect(() => {
    const fetchAdminStats = async () => {
      const token = localStorage.getItem('token');
      if (!token) {
        setError('No token found, please log in.');
        return;
      }

      try {
        const response = await fetch('http://localhost:5000/api/admin/stats', {
          method: 'GET',
          headers: {
            'Authorization': `Bearer ${token}`,
          },
        });

        const data = await response.json();

        if (!response.ok) {
          throw new Error(data.message || 'Failed to fetch admin stats.');
        }
        
        setStats(data);

      } catch (err) {
        setError(err.message);
        console.error('Admin stats fetch error:', err);
      }
    };

    fetchAdminStats();
  }, []);

  // Mock data for the chart (can be replaced with fetched data later)
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

  // Show a loading or error message while data is being fetched
  if (error) {
    return <div className="dashboard-container"><p style={{ color: 'red', padding: '20px' }}>Error: {error}</p></div>;
  }
  if (!stats) {
    return <div className="dashboard-container"><p style={{ padding: '20px' }}>Loading dashboard...</p></div>;
  }

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
            <span className="gradient-text">₱ {stats.simulatedRevenue.toLocaleString()}</span>
          </div>
          <div className="stat-card">
            <p>Growth Rate</p>
            <span className="gradient-text">25.4%</span>
          </div>
          <div className="stat-card">
            <p>Users</p>
            <span className="gradient-text">{stats.totalUsers}</span>
          </div>
        </div>

        <div className="report-widget">
          <h2>Weekly Revenue Report</h2>
          <p className="subtitle">Revenue performance over the last 7 days.</p>
          <Bar options={chartOptions} data={revenueData} />
        </div>

        {/* Optional: Display recent users */}
        <div className="report-widget" style={{ marginTop: '30px' }}>
            <h2>Recent Sign-ups</h2>
            <ul>
                {stats.recentUsers.map((user, index) => (
                    <li key={index}>{user.fullName} - {user.email}</li>
                ))}
            </ul>
        </div>
      </main>
    </div>
  );
};

export default OwnerDashboard;

