import React, { useState } from 'react';
import Sidebar from './Sidebar'; // 1. Import the reusable Sidebar
import '../styles/MemberDashboard.css';
import '../styles/Membership.css';

// 2. We only need the icons for the main content now
import { FaInfoCircle, FaCheckCircle } from 'react-icons/fa';

const Membership = () => {
  const [selectedPlan, setSelectedPlan] = useState(null);

  const currentUser = {
    name: 'Josh Mojica',
    goal: 'Gaining Weight',
    avatar: 'https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?q=80&w=2662&auto-format&fit=crop',
  };

  const plans = [
    { id: 1, name: 'Day Pass', price: 129, period: '/day', features: ['Single-day access to one club', 'Perfect for trying out a gym'] },
    { id: 2, name: '1 Month (Upfront)', price: 1249, period: '/day', features: ['One-time payment', 'No lock-in contract'] },
    { id: 3, name: '1 Month (Autodebit)', price: 1149, period: '/day', features: ['Convenient monthly billing', 'Cancel or pause anytime'] },
    { id: 4, name: '3 Months', price: 1083, period: '/day', features: ['Total: ₱3,249', 'Good value & flexibility'] },
    { id: 5, name: '6 Months', price: 999, period: '/day', features: ['Total: ₱5,994', 'Popular mid-term option'] },
    { id: 6, name: '12 Months', price: 949, period: '/day', features: ['Total: ₱11,388', 'Best value for Plus Tier'] },
  ];

  const handleSelectPlan = (plan) => {
    setSelectedPlan(plan);
  };

  return (
    <div className="dashboard-container">
      {/* 3. The entire <aside> block is replaced with this component */}
      <Sidebar currentUser={currentUser} />

      {/* Main Membership Content remains the same */}
      <main className="main-content">
        <div className="no-plan-message">
          <FaInfoCircle className="info-icon" />
          <h2>No Active Membership Plan Found</h2>
          <p>It looks like you don't have an active fitness plan with us. Explore our membership options below to select the perfect package to start your journey!</p>
        </div>

        <h2 className="plans-title">Choose Your MuscleHub Tier</h2>
        <div className="plans-grid">
          {plans.map(plan => (
            <div 
              key={plan.id} 
              className={`plan-card ${selectedPlan?.id === plan.id ? 'selected' : ''}`}
              onClick={() => handleSelectPlan(plan)}
            >
              <h3>{plan.name}</h3>
              <p className="price">₱{plan.price.toLocaleString()}<span>{plan.period}</span></p>
              <ul>
                {plan.features.map(feature => <li key={feature}><FaCheckCircle className="check-icon" />{feature}</li>)}
              </ul>
              <button className="plan-button">Get {plan.name === 'Day Pass' ? 'Pass' : 'Started'}</button>
            </div>
          ))}
        </div>

        {selectedPlan && (
          <div className="payment-section">
            <h2>Payment Method</h2>
            <form>
              <div className="input-group">
                <label>GCASH Phone Number</label>
                <input type="text" defaultValue="0950 2*** ***" />
              </div>
              <div className="payment-buttons">
                {/* TODO: Integrate PayMongo here */}
                <button type="submit" className="pay-button">Pay with Gcash</button>
                <button type="button" className="cancel-button" onClick={() => setSelectedPlan(null)}>Cancel</button>
              </div>
            </form>
          </div>
        )}
      </main>
    </div>
  );
};

export default Membership;