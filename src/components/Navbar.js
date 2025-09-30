// src/components/Navbar.js
import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';
import logo from '../assets/logo.png';

const Navbar = ({ isHomePage }) => {
  return (
    // --- UPDATE THIS LINE ---
    // This flips the logic to be solid on the homepage
    <nav className={`navbar ${isHomePage ? 'solid' : 'glass'}`}>
      <Link to="/" className="navbar-logo">
        <img src={logo} alt="Muscle Hub Logo" />
        <span>MUSCLE HUB</span>
      </Link>
      <ul className="nav-menu">
        <li><Link to="/about">About</Link></li>
        <li><Link to="/features">Features</Link></li>
        <li><Link to="/plans">Plans</Link></li>
        <li><Link to="/contacts">Contacts</Link></li>
      </ul>
      <Link to="/register" className="nav-button-signup">Sign Up</Link>
    </nav>
  );
};

export default Navbar;