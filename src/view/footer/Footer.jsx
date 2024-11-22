import React from 'react';
import { NavLink } from 'react-router-dom';
import '../footer/Footer.css';  // Import your footer CSS

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-links">
          <NavLink to="/" className="footer-item">
            Home
          </NavLink>
          <NavLink to="/about" className="footer-item">
            About
          </NavLink>
          <NavLink to="/contact" className="footer-item">
            Contact
          </NavLink>
        </div>
        <div className="footer-copyright">
          &copy; 2024 MyWebsite. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
