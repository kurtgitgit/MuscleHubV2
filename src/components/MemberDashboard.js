import React, { useState } from 'react';
import Sidebar from './Sidebar'; // 1. Import the new Sidebar component
import '../styles/MemberDashboard.css';
import NotificationsPanel from './NotificationsPanel';

// 2. We no longer need NavLink or most icons here, they are in the Sidebar
import { Line } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend } from 'chart.js';
import { FaBell, FaTrophy, FaCheckCircle } from 'react-icons/fa';
ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);



const MemberDashboard = () => {
  const [isNotificationsOpen, setIsNotificationsOpen] = useState(false);
  const user = {
    name: 'Josh Mojica',
    goal: 'Gaining Weight',
    avatar: 'https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?q=80&w=2662&auto-format&fit=crop',
  };
  const memberNotifications = [ { icon: <FaTrophy />, message: 'You reached a new milestone: 5kg lost!', time: '2 hours ago' }, { icon: <FaCheckCircle />, message: 'Your membership renewal is due next week.', time: '1 day ago' }];

  const champions = [
    { name: 'Alex Johnson Lee', goal: 'Losing Weight', avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=2574&auto=format&fit=crop' },
    { name: 'Maria Rodriguez', goal: 'Toning', avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=2574&auto-format&fit=crop' },
    { name: 'David Garcia', goal: 'Bulking', avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=2574&auto-format&fit=crop' },
  ];

  const bmiData = {
    labels: ['January', 'February', 'March', 'April', 'May'],
    datasets: [
      {
        label: 'BMI',
        data: [22.5, 23, 22.8, 23.5, 24],
        borderColor: '#00ff00', // Updated to match our theme color
        backgroundColor: 'rgba(173, 255, 47, 0.1)',
        fill: true,
        tension: 0.4,
      },
    ],
  };
  
  const chartOptions = {
    responsive: true,
    plugins: { legend: { display: false } },
    scales: {
      x: { ticks: { color: '#aaa' }, grid: { color: '#444' } },
      y: { ticks: { color: '#aaa' }, grid: { color: '#444' } },
    },
  };

  return (
    <div className="dashboard-container">
      {/* 3. The entire <aside> block is replaced with this single line */}
      <Sidebar currentUser={user} />

      {/* Main Content remains the same */}
      <main className="main-content">
        <div className="dashboard-top"></div>
        <header className="welcome-header">
          <h1>Welcome back, <span>{user.name.split(' ')[0]}!</span></h1>
          <p>This is your personalized dashboard where you can track your BMI Progress, Monitor your Health Achievements, and see how you rank on the leaderboard alongside fellow members.</p>
          </header>
                 {/* ADD THIS WRAPPER AND BUTTON */}
                    <div className="header-actions">
                        <button className="notification-bell" onClick={() => setIsNotificationsOpen(!isNotificationsOpen)}>
                            <FaBell />
                            <div className="notification-dot"></div>
                        </button>
                        {isNotificationsOpen && 
                        <NotificationsPanel notifications={memberNotifications} />}
                    </div>
              
        <div className="widgets-grid">
          <div className="widget">
            <h2>BMI Progress Overview</h2>
            <Line options={chartOptions} data={bmiData} />
          </div>
          <div className="widget">
            <h2>Fitness Champions</h2>
            <ul className="champions-list">
              {champions.map((champion, index) => (
                <li key={index} className="champion-item">
                  <img src={champion.avatar} alt={champion.name} />
                  <div className="champion-info">
                    <div className="name">{champion.name}</div>
                    <div className="goal">{champion.goal}</div>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </main>
    </div>
  );
};

export default MemberDashboard;