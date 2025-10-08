import React from 'react';
import MemberDashboard from './MemberDashboard';
import OwnerDashboard from './OwnerDashboard';

const Dashboard = () => {
  // 1. After the ProtectedRoute lets us in, this component checks the 'userRole'.
  const userRole = localStorage.getItem('userRole');

  // 2. If the role is 'owner', it shows the OwnerDashboard.
  if (userRole === 'owner') {
    return <OwnerDashboard />;
  } 
  
  // 3. For any other role (like 'member'), it shows the MemberDashboard.
  return <MemberDashboard />;
};

export default Dashboard;
