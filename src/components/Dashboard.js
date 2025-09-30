import React from 'react';
import MemberDashboard from './MemberDashboard';
import OwnerDashboard from './OwnerDashboard';

const Dashboard = () => {
  // Get the user's role from where you stored it (e.g., localStorage)
  const userRole = localStorage.getItem('userRole');

  // Check the role and render the appropriate dashboard
  if (userRole === 'owner') {
    return <OwnerDashboard />;
  }
  
  // Default to the MemberDashboard
  return <MemberDashboard />;
};

export default Dashboard;