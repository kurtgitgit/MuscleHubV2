import React from 'react';
import Sidebar from './Sidebar'; // Import the reusable Sidebar
import '../styles/MemberDashboard.css';
import '../styles/Leaderboard.css'; 
const Leaderboard = () => {
  // Mock data for the current user and the leaderboard list
  const currentUser = {
    name: 'Josh Mojica',
    goal: 'Gaining Weight',
    avatar: 'https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?q=80&w=2662&auto-format&fit=crop',
  };

  const otherMembers = [
    { rank: 1, name: 'Maria Rodriguez', goal: 'Toning', progress: 95, avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=2574&auto=format&fit=crop' },
    { rank: 2, name: 'Ethan Cruz', goal: 'Bulking', progress: 88, avatar: 'https://images.unsplash.com/photo-1552058544-f2b08422138a?q=80&w=2598&auto=format&fit=crop' },
    { rank: 3, name: 'Sophia Reyes', goal: 'Losing Weight', progress: 85, avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=2670&auto=format&fit=crop' },
    { rank: 4, name: 'Liam Santos', goal: 'Gaining Weight', progress: 82, avatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=2576&auto-format&fit=crop' },
    { rank: 5, name: 'Isabella Mendoza', goal: 'Toning', progress: 79, avatar: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=2561&auto=format&fit=crop' },
  ];

  return (
    <div className="dashboard-container">
      {/* The entire <aside> block is replaced with this single component */}
      <Sidebar currentUser={currentUser} />

      {/* Main Leaderboard Content remains the same */}
      <main className="main-content">
        <div className="current-user-card">
          <img src={currentUser.avatar} alt={currentUser.name} />
          <h2>{currentUser.name}</h2>
          <p>{currentUser.goal}</p>
        </div>

        <h2 className="other-members-title">Other Members</h2>
        <ul className="leaderboard-list">
          {otherMembers.map(member => (
            <li key={member.rank} className={`list-item rank-${member.rank}`}>
              <span className="rank-number">{member.rank}</span>
              <img src={member.avatar} alt={member.name} className="member-avatar" />
              <div className="member-info">
                <span className="name">{member.name}</span>
                <span className="goal">{member.goal}</span>
              </div>
              <div className="progress-bar-container">
                <div className="progress-bar" style={{ width: `${member.progress}%` }}></div>
              </div>
              <span className="progress-percent">{member.progress}%</span>
            </li>
          ))}
        </ul>
      </main>
    </div>
  );
};

export default Leaderboard;