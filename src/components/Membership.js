import React, { useState } from 'react';
import Sidebar from './Sidebar';
import '../styles/MemberDashboard.css'; // Reuse main layout
import '../styles/Membership.css';     // Styles for this page

// Import Icons
import { FaInfoCircle, FaCheckCircle } from 'react-icons/fa';

// --- Payment Modal Component ---
const PaymentModal = ({ plan, onClose }) => {
    return (
        <div className="modal-overlay">
            <div className="modal-content">
                <button className="modal-close-button" onClick={onClose}>&times;</button>
                <h2>Payment Method</h2>
                <div className="payment-options">
                    <div className="payment-option selected">
                        <input type="radio" id="gcash" name="payment" value="gcash" defaultChecked />
                        <label htmlFor="gcash">
                            <img src="https://via.placeholder.com/40x40/2E71B5/FFFFFF?text=G" alt="GCash Logo" />
                            <span>GCash</span>
                        </label>
                    </div>
                    
                </div>
                <div className="payment-summary">
                    <div className="summary-item">
                        <span>Plan:</span>
                        <span>{plan.name}</span>
                    </div>
                    <div className="summary-item total">
                        <span>Total:</span>
                        <span>₱{plan.price.toLocaleString()}.00</span>
                    </div>
                </div>
                <button 
                    className="pay-now-button" 
                    onClick={() => {
                        alert(`Payment for ${plan.name} successful! (Frontend Simulation)`);
                        onClose();
                    }}
                >
                    Pay Now
                </button>
                {/* --- ADDED CANCEL BUTTON --- */}
                <button className="cancel-payment-button" onClick={onClose}>
                    Cancel
                </button>
            </div>
        </div>
    );
};


const Membership = () => {
  const [selectedPlan, setSelectedPlan] = useState(null);

  const currentUser = {
    name: 'Josh Mojica',
    goal: 'Gaining Weight',
    avatar: 'https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?q=80&w=2662&auto-format&fit-crop',
  };

  const plans = [
    { id: 1, name: 'Day Pass', price: 129, period: '/day', features: ['Single-day access to one club', 'Perfect for trying out a gym'] },
    { id: 2, name: '1 Month (Upfront)', price: 1249, period: '/mo', features: ['One-time payment', 'No lock-in contract'] },
    { id: 3, name: '1 Month (Autodebit)', price: 1149, period: '/mo', features: ['Convenient monthly billing', 'Cancel or pause anytime'] },
    { id: 4, name: '3 Months', price: 1083, period: '/mo', features: ['Total: ₱3,249', 'Good value & flexibility'] },
    { id: 5, name: '6 Months', price: 999, period: '/mo', features: ['Total: ₱5,994', 'Popular mid-term option'] },
    { id: 6, name: '12 Months', price: 949, period: '/mo', features: ['Total: ₱11,388', 'Best value for Plus Tier'] },
  ];

  return (
    <div className="dashboard-container">
      <Sidebar currentUser={currentUser} />

      {/* Main Membership Content */}
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
              className="plan-card"
              onClick={() => setSelectedPlan(plan)} // Clicking the card opens the modal
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
      </main>

      {/* Conditionally render the modal when a plan is selected */}
      {selectedPlan && <PaymentModal plan={selectedPlan} onClose={() => setSelectedPlan(null)} />}
    </div>
  );
};

export default Membership;

