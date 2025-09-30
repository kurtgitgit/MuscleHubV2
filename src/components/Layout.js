// src/components/Layout.js
import React from 'react';
import { useLocation } from 'react-router-dom';
import Navbar from './Navbar';

const Layout = ({ children }) => {
  const location = useLocation();

  // This is the only condition we need now.
  // It's true only when the path is exactly "/"
  const isHomePage = location.pathname === '/';

  return (
    <>
      {/* Update this line to only check for isHomePage */}
      {isHomePage && <Navbar isHomePage={isHomePage} />}
      <main>{children}</main>
    </>
  );
};

export default Layout;