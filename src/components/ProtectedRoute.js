import React from 'react';
import { Navigate } from 'react-router-dom';

const ProtectedRoute = ({ children }) => {
  // Check if the user is "logged in" by seeing if the role exists
  const userRole = localStorage.getItem('userRole');

  if (!userRole) {
    // If no role is found, redirect them to the login page
    return <Navigate to="/login" />;
  }

  // If a role exists, show the component they were trying to access
  return children;
};

export default ProtectedRoute;