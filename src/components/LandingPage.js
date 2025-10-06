import React from 'react';
import '../styles/LandingPage.css';
import { Link } from 'react-router-dom';

// Import assets
import landingimg from '../assets/landingimg.png';
import paymentsIcon from '../assets/payments.png';
import trackingIcon from '../assets/tracking.png';
import leaderboardIcon from '../assets/leaderboard.png';

const LandingPage = () => {
  return (
    <div className="landing-page-container">
      {/* Hero Section */}
      <section 
        className="hero-section"
        style={{ backgroundImage: `url(${landingimg})` }} // ✅ Background image applied
      >
        <div className="hero-overlay"></div>
        <div className="hero-content">
          <h1>
            <span className="hero-gradient-text">STRENGTH</span> <br />
            <span className="hero-gradient-text">MEETS</span> <br />
            <span className="hero-gradient-text">PROGRESS</span>
          </h1>
          <p>
            Manage memberships, track progress and stay motivated – all in one hub.
          </p>
          <Link to="/register" className="hero-cta-button">Join Now</Link>
        </div>
      </section>

      {/* Why Muscle Hub Section */}
      <section className="why-us-section">
        <h2>Why Muscle Hub?</h2>
        <p className="section-subtitle">
          Muscle Hub is a web-based fitness management platform built to simplify your gym experience. 
          From hassle-free membership registration and secure payments to BMI progress tracking and performance leaderboards, 
          we bring everything you need into one powerful hub.
        </p>
        <div className="stats-bar">
          <div><strong>5k+</strong> Members</div>
          <div><strong>3+</strong> Years</div>
          <div><strong>2k+</strong> Positive Reviews</div>
        </div>
      </section>

      {/* Features Section */}
      <section className="features-section">
        <h2>What You'll Get with <span className="highlight-green">Muscle Hub</span></h2>
        <div className="features-grid">
          <div className="feature-card">
            <div className="feature-icon-wrapper">
              <img src={paymentsIcon} alt="Online Payments" className="feature-icon-img" />
            </div>
            <h3>Online Payments</h3>
            <p>Easily sign up, renew, and manage your plan with secure, cashless transactions.</p>
          </div>
          <div className="feature-card">
            <div className="feature-icon-wrapper">
              <img src={trackingIcon} alt="Progress Tracking" className="feature-icon-img" />
            </div>
            <h3>Progress Tracking</h3>
            <p>Stay on top of your fitness journey with visual reports and progress insights.</p>
          </div>
          <div className="feature-card">
            <div className="feature-icon-wrapper">
              <img src={leaderboardIcon} alt="Leaderboards" className="feature-icon-img" />
            </div>
            <h3>Leaderboards</h3>
            <p>Stay consistent, challenge yourself, and celebrate achievements with friendly competition.</p>
          </div>
        </div>
      </section>

      {/* Membership Tier Section */}
      <section className="tier-section"> 
        <h2>Choose Your MuscleHub Tier</h2>
        <div className="tiers-grid">
          <div className="tier-card">
            <h3>Day Pass</h3>
            <p className="price">₱129<span>/day</span></p>
            <ul>
              <li>Single-day access to one club</li>
              <li>Perfect for trying out a gym</li>
            </ul>
            <button className="tier-button">Get Pass</button>
          </div>
          <div className="tier-card">
            <h3>1 Month (Upfront)</h3>
            <p className="price">₱1,249<span>/mo</span></p>
            <ul>
              <li>One-time payment</li>
              <li>No lock-in contract</li>
            </ul>
            <button className="tier-button">Get Started</button>
          </div>
          <div className="tier-card">
            <h3>1 Month (Autodebit)</h3>
            <p className="price">₱1,149<span>/mo</span></p>
            <ul>
              <li>Convenient monthly billing</li>
              <li>Cancel or pause anytime</li>
            </ul>
            <button className="tier-button">Get Started</button>
          </div>
          <div className="tier-card featured">
            <h3>3 Months</h3>
            <p className="price">₱1,083<span>/mo</span></p>
            <ul>
              <li>Total: ₱3,249</li>
              <li>Good value & flexibility</li>
            </ul>
            <button className="tier-button">Get Started</button>
          </div>
          <div className="tier-card">
            <h3>6 Months</h3>
            <p className="price">₱999<span>/mo</span></p>
            <ul>
              <li>Total: ₱5,994</li>
              <li>Popular mid-term option</li>
            </ul>
            <button className="tier-button">Get Started</button>
          </div>
          <div className="tier-card">
            <h3>12 Months</h3>
            <p className="price">₱949<span>/mo</span></p>
            <ul>
              <li>Total: ₱11,388</li>
              <li>Best value for Plus Tier</li>
            </ul>
            <button className="tier-button">Get Started</button>
          </div>
        </div>
      </section>

      {/* Footer Section */}
      <footer className="footer">
        <div className="footer-content">
          <div className="footer-brand">
            <h3>MuscleHub</h3>
            <p>
              Elevate your training with Muscle Hub. From seamless memberships to progress tracking, 
              we help you stay consistent and committed to your goals.
            </p>
            <div className="social-icons">
              <span>f</span>
              <span>o</span>
              <span>X</span>
            </div>
          </div>
          <div className="footer-links">
            <h4>QUICK LINKS</h4>
            <Link to="/about">About Us</Link>
            <Link to="/membership">Membership Plans</Link>
            <Link to="/features">Features</Link>
            <Link to="/contacts">Contacts</Link>
          </div>
          <div className="footer-contact">
            <h4>CONTACT US</h4>
            <p>123 Lasip Rd, Calasiao, Pangasinan</p>
            <p>+63 915 678 6967</p>
            <p>customerservice.musclehub@gmail.com</p>
          </div>
        </div>
        <div className="footer-bottom">
          <p>© 2025 MuscleHub. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default LandingPage;
