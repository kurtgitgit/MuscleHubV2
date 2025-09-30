import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './AuthForm.css'; // We will update this shared CSS file
import authLogo from '../assets/logo-auth.png'; // Make sure your logo is in src/assets/logo.png

const Registration = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    password: '',
    confirmPassword: '',
    agreeTerms: false,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked : value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.agreeTerms) {
      alert("You must agree to the Terms & Conditions.");
      return;
    }
    if (formData.password !== formData.confirmPassword) {
      alert("Passwords do not match!");
      return;
    }
    console.log('Registration data:', formData);
    alert('Account created successfully! (Frontend only)');
  };

  return (
    <div className="auth-container">
      <div className="auth-form-wrapper">
        <Link to="/" className="back-arrow">‹</Link>
        
        <div className="auth-header">
           <img src={authLogo} alt="Muscle Hub Logo" className="auth-logo" />
          <h2>Join Muscle Hub Today</h2>
          <p>Track progress, manage memberships</p>
        </div>

        <form className="auth-form" onSubmit={handleSubmit}>
          <div className="input-group">
            <label htmlFor="fullName">Full Name</label>
            <input
              type="text"
              id="fullName"
              name="fullName"
              className="auth-input"
              placeholder="Philippians Sanchez"
              onChange={handleChange}
              required
            />
          </div>
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
          </div>
          <div className="input-group">
            <label htmlFor="confirmPassword">Confirm Password</label>
            <input
              type="password"
              id="confirmPassword"
              name="confirmPassword"
              className="auth-input"
              placeholder="********"
              onChange={handleChange}
              required
            />
          </div>
          
          <div className="checkbox-group">
            <input
              type="checkbox"
              id="agreeTerms"
              name="agreeTerms"
              checked={formData.agreeTerms}
              onChange={handleChange}
            />
            <label htmlFor="agreeTerms">I agree to the Terms & Conditions</label>
          </div>

          <button type="submit" className="auth-button">Sign Up</button>
          
          <p className="auth-switch-link">
            Already have an account? <Link to="/login">Sign In</Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Registration;