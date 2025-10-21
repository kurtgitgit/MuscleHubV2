import React from 'react';
import MemberDashboard from './MemberDashboard';
import OwnerDashboard from './OwnerDashboard';

const Dashboard = () => {
  // Check the user's role saved during login
  const userRole = localStorage.getItem('userRole');

  // --- UPDATE THIS LOGIC ---
  // If the role is 'owner' OR 'staff', show the OwnerDashboard.
  if (userRole === 'owner' || userRole === 'staff') {
    return <OwnerDashboard />;
  } 
  
  // Otherwise, default to the MemberDashboard.
  return <MemberDashboard />;
};

export default Dashboard;