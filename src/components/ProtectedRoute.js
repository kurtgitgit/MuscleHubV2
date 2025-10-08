import React from 'react';
import { Navigate } from 'react-router-dom';

const ProtectedRoute = ({ children }) => {
  // 1. It looks for the 'token' we saved in localStorage after logging in.
  const token = localStorage.getItem('token');

  // 2. If no token is found, it redirects the user back to the login page.
  if (!token) {
    return <Navigate to="/login" />;
  }

  // 3. If a token IS found, it shows the protected page (the children).
  return children;
};

export default ProtectedRoute;
