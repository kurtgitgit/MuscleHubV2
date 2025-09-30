import React from 'react';
import Sidebar from './Sidebar'; // 1. Import the reusable Sidebar
import './MemberDashboard.css'; // Reuse main layout styles
import './ProgressTracking.css'; // Keep the styles for this page

// 2. We only need the trophy icon for the main content
import { FaTrophy } from 'react-icons/fa';

const ProgressTracking = () => {
  const currentUser = {
    name: 'Josh Mojica',
    goal: 'Gaining Weight',
    avatar: 'https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?q=80&w=2662&auto=format&fit=crop',
  };

  // Mock data for progress
  const progressData = {
    currentWeight: 80,
    goalWeight: 70,
    achievements: ['Lost 5kg milestone', 'Visited gym 30 times'],
    weeklyHours: 6.3,
    weeklyTargetHours: 6,
    workoutFrequency: 5,
    weeklyTargetFrequency: 2,
    frequencyHours: 2,
  };

  return (
    <div className="dashboard-container">
      {/* 3. The entire <aside> block is replaced with this component */}
      <Sidebar currentUser={currentUser} />

      {/* Main Progress Tracking Content remains the same */}
      <main className="main-content">
        <header className="progress-header">
          <h1>Would you like to keep up on your Progress?</h1>
        </header>
        
        <div className="progress-grid">
          {/* Progress & Goals */}
          <div className="progress-card">
            <h3>Progress & Goals</h3>
            <div className="weight-section">
              <div>
                <p>Current Weight</p>
                <span>{progressData.currentWeight} kg</span>
              </div>
              <div>
                <p>Goal</p>
                <span>{progressData.goalWeight} kg</span>
              </div>
            </div>
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

          {/* Weekly Hours */}
          <div className="progress-card full-width">
            <h3>Weekly Hours</h3>
            <div className="stat-line">
              <span className="main-stat">{progressData.weeklyHours}</span>
              <div className="progress-bar-container">
                <div className="progress-bar" style={{ width: `${(progressData.weeklyHours / progressData.weeklyTargetHours) * 100}%` }}></div>
              </div>
            </div>
            <p className="target-text">Target for week: <strong>{progressData.weeklyTargetHours} hours</strong></p>
          </div>

          {/* Workout Frequency */}
          <div className="progress-card full-width">
            <h3>Workout Frequency</h3>
            <div className="stat-line">
              <span className="main-stat">{progressData.workoutFrequency}</span>
              <p className="sub-stat">Times this week</p>
              <div className="progress-bar-container">
                <div className="progress-bar" style={{ width: `${(progressData.frequencyHours / progressData.weeklyTargetFrequency) * 100}%` }}></div>
              </div>
            </div>
            <p className="target-text">Weekly target: {progressData.weeklyTargetFrequency}, <strong>{progressData.frequencyHours}x hours</strong></p>
          </div>
        </div>
      </main>
    </div>
  );
};

export default ProgressTracking;