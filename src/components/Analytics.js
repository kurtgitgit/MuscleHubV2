import React from 'react';
import AdminSidebar from './AdminSidebar';
import '../styles/MemberDashboard.css';
import '../styles/Analytics.css'; // New styles for this page

// Import Chart components
import { Line, Doughnut } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, ArcElement, Title, Tooltip, Legend } from 'chart.js';

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, ArcElement, Title, Tooltip, Legend);

const Analytics = () => {
    const ownerUser = {
        name: 'Josh Mojica',
        avatar: 'https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?q=80&w=2662&auto-format&fit=crop',
    };

    const lineData = {
        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
        datasets: [{
            label: 'New Members',
            data: [12, 19, 3, 5, 2, 3],
            borderColor: '#ADFF2F',
            tension: 0.4
        }],
    };

    const doughnutData = {
        labels: ['12 Months', '6 Months', '3 Months', '1 Month'],
        datasets: [{
            data: [300, 50, 100, 120],
            backgroundColor: ['#ADFF2F', '#76F9B9', '#83F9BF', '#32CD32'],
        }],
    };

    return (
        <div className="dashboard-container">
            <AdminSidebar currentUser={ownerUser} />
            <main className="main-content">
                <header className="page-header"><h1>Analytics</h1></header>
                <div className="analytics-grid">
                    <div className="analytics-widget">
                        <h3>New Member Growth</h3>
                        <Line data={lineData} />
                    </div>
                    <div className="analytics-widget">
                        <h3>Membership Plan Distribution</h3>
                        <Doughnut data={doughnutData} />
                    </div>
                </div>
            </main>
        </div>
    );
};

export default Analytics;
