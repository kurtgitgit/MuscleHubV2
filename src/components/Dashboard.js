import React from 'react';
import MemberDashboard from './MemberDashboard';
import OwnerDashboard from './OwnerDashboard';

const Dashboard = () => {
  // Check the user's role saved during login
  const userRole = localStorage.getItem('userRole');

  // If the role is 'owner', show the OwnerDashboard.
  // Otherwise, show the MemberDashboard.
  if (userRole === 'owner') {
    return <OwnerDashboard />;
  } else {
    return <MemberDashboard />;
  }
};

export default Dashboard;