import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

// Layout and Route Protection
import Layout from './components/Layout';
import ProtectedRoute from './components/ProtectedRoute';

// Page Components
import Analytics from './components/Analytics';
import Dashboard from './components/Dashboard';
import LandingPage from './components/LandingPage';
import Leaderboard from './components/Leaderboard';
import Login from './components/Login';
import Membership from './components/Membership';
import Profile from './components/Profile';
import ProgressTracking from './components/ProgressTracking';
import Registration from './components/Registration';

import Users from './components/Users';
import AdminProfile from './components/AdminProfile';
import AdminPlans from './components/AdminPlans';

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          {/* Public Routes */}
          <Route path="/" element={<LandingPage />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Registration />} />
          
          {/* Protected Member & Admin Routes */}
          <Route path="/dashboard" element={<ProtectedRoute><Dashboard /></ProtectedRoute>} />
          <Route path="/leaderboard" element={<ProtectedRoute><Leaderboard /></ProtectedRoute>} />
          <Route path="/membership" element={<ProtectedRoute><Membership /></ProtectedRoute>} />
          <Route path="/progress" element={<ProtectedRoute><ProgressTracking /></ProtectedRoute>} />
          <Route path="/profile" element={<ProtectedRoute><Profile /></ProtectedRoute>} />
          
          {/* Admin-Specific Routes */}
          <Route path="/users" element={<ProtectedRoute><Users /></ProtectedRoute>} />
          <Route path="/analytics" element={<ProtectedRoute><Analytics /></ProtectedRoute>} />
          <Route path="/admin-plans" element={<ProtectedRoute><AdminPlans /></ProtectedRoute>} />
          
          <Route path="/admin-profile" element={<ProtectedRoute><AdminProfile /></ProtectedRoute>} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;

