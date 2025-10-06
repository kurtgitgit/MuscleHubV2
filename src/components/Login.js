import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import '../styles/AuthForm.css';
import authLogo from '../assets/logo-auth.png';
 // Make sure your logo is in src/assets/logo.png

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
    // Simulate API call based on email
    let userRole = formData.email.includes('owner') ? 'owner' : 'member';
    localStorage.setItem('userRole', userRole);
    navigate('/dashboard');
    console.log('Login data:', formData);
  };

  return (
    <div className="auth-container">
      <div className="auth-form-wrapper">
        <Link to="/" className="back-arrow">‹</Link>
        
        <div className="auth-header">
          <img src={authLogo} alt="Muscle Hub Logo" className="auth-logo" />
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
              placeholder="example@gmail.com"
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