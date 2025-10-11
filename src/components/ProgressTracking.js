import React, { useState } from 'react';
import Sidebar from './Sidebar';
import '../styles/MemberDashboard.css'; // We reuse the main layout styles
import '../styles/ProgressTracking.css'; // New styles for this page

// Import Chart components and Icons
import { Line } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend } from 'chart.js';
import { FaTrophy } from 'react-icons/fa';

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

const ProgressTracking = () => {
  const [height, setHeight] = useState('');
  const [weight, setWeight] = useState('');
  const [bmiResult, setBmiResult] = useState(null);

  const calculateBmi = (e) => {
    e.preventDefault();
    if (height > 0 && weight > 0) {
      const heightInMeters = height / 100;
      const bmi = (weight / (heightInMeters * heightInMeters)).toFixed(2);
      setBmiResult(bmi);
    }
  };

  const currentUser = {
    name: 'Josh Mojica',
    goal: 'Gaining Weight',
    avatar: 'https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?q=80&w=2662&auto-format&fit-crop',
  };

  const progressData = {
    achievements: ['Lost 5kg milestone', 'Visited gym 30 times'],
  };
  
  const bodyMeasurementsData = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May'],
    datasets: [
      {
        label: 'Weight (kg)',
        data: [80, 82, 81, 83, 84],
        borderColor: '#ADFF2F',
        tension: 0.4,
      },
      {
        label: 'Body Fat %',
        data: [22, 21, 20, 19.5, 19],
        borderColor: '#8884d8',
        tension: 0.4,
      }
    ],
  };

  const chartOptions = {
    responsive: true,
    plugins: { legend: { position: 'top' } },
    scales: { x: { ticks: { color: '#aaa' } }, y: { ticks: { color: '#aaa' } } },
  };

  return (
    <div className="dashboard-container">
      <Sidebar currentUser={currentUser} />

      <main className="main-content">
        <header className="progress-header">
          <h1>Would you like to keep up on your Progress?</h1>
        </header>
        
        <div className="progress-grid">
          {/* BMI Calculator */}
          <div className="progress-card bmi-calculator">
            <h3>BMI Calculator</h3>
            <form onSubmit={calculateBmi}>
              <div className="bmi-inputs">
                <div className="input-group">
                  <label>Height (cm)</label>
                  <input type="number" value={height} onChange={(e) => setHeight(e.target.value)} placeholder="e.g., 175" />
                </div>
                <div className="input-group">
                  <label>Weight (kg)</label>
                  <input type="number" value={weight} onChange={(e) => setWeight(e.target.value)} placeholder="e.g., 70" />
                </div>
              </div>
              <button type="submit" className="calculate-btn">Calculate</button>
            </form>
            {bmiResult && (
              <div className="bmi-result">
                <p>Your BMI is</p>
                <span>{bmiResult}</span>
              </div>
            )}
          </div>

          {/* Achievement */}
          <div className="progress-card">
            <h3>Achievement</h3>
            <ul className="achievement-list">
              {progressData.achievements.map((ach, index) => (
                <li key={index}><FaTrophy className="trophy-icon" /> {ach}</li>
              ))}
            </ul>
          </div>

          {/* Body Measurements Graph */}
          <div className="progress-card full-width">
            <h3>Body Measurements</h3>
            <Line options={chartOptions} data={bodyMeasurementsData} />
          </div>
        </div>
      </main>
    </div>
  );
};

export default ProgressTracking;

