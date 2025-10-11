import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import '../styles/AuthForm.css';
import logo from '../assets/logo-auth.png';

const Login = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Reverted to simple frontend-only logic
    // It checks if the email contains "owner" to simulate roles
    let userRole = formData.email.includes('owner') ? 'owner' : 'member';
    
    // We save the simulated role to localStorage so the app knows who is logged in
    localStorage.setItem('userRole', userRole);
    // We also save a dummy token so the ProtectedRoute works
    localStorage.setItem('token', 'fake-jwt-token-for-prototype');
    
    // Redirect to the dashboard
    navigate('/dashboard');
  };

  return (
    <div className="auth-container">
      <div className="auth-form-wrapper">
        <Link to="/" className="back-arrow">‹</Link>
        
        <div className="auth-header">
          <img src={logo} alt="Muscle Hub Logo" className="auth-logo" />
          <h2>Welcome Back!</h2>
          <p>Ready for your next workout?</p>
        </div>

        <form className="auth-form" onSubmit={handleSubmit}>
          <div className="input-group">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              className="auth-input"
              placeholder="owner@email.com"
              onChange={handleChange}
              required
            />
          </div>
          <div className="input-group">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              name="password"
              className="auth-input"
              placeholder="********"
              onChange={handleChange}
              required
            />
            <Link to="/forgot-password" className="forgot-password-link">Forgot Password?</Link>
          </div>

          <button type="submit" className="auth-button">Sign In</button>
          
          <p className="auth-switch-link">
            Don't have an account? <Link to="/register">Sign Up</Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Login;

