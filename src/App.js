import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Layout from './components/Layout'; // Import the new Layout component

// Import all your page components
import LandingPage from './components/LandingPage';
import Login from './components/Login';
import Registration from './components/Registration';
import Dashboard from './components/Dashboard';
import ProtectedRoute from './components/ProtectedRoute';
import Profile from './components/Profile';
import Membership from './components/Membership';

import Leaderboard from './components/Leaderboard'; // 1. Import the new component
import ProgressTracking from './components/ProgressTracking';

function App() {
  return (
    <Router>
      {/* The Layout component now wraps your routes */}
      <Layout>
        <Routes>
          {/* Public Routes */}
          <Route path="/" element={<LandingPage />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Registration />} />

          {/* Protected Routes */}
          <Route 
            path="/dashboard" 
            element={<ProtectedRoute><Dashboard /></ProtectedRoute>} 
          />
          <Route 
            path="/profile" 
            element={<ProtectedRoute><Profile /></ProtectedRoute>} 
          />
          <Route 
            path="/membership" 
            element={<ProtectedRoute><Membership /></ProtectedRoute>} 
          />
          <Route 
            path="/leaderboard" 
            element={<ProtectedRoute><Leaderboard /></ProtectedRoute>} 
          />
          <Route 
            path="/progress" 
            element={<ProtectedRoute><ProgressTracking /></ProtectedRoute>} 
          />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;