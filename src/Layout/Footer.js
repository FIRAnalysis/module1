import React from "react";
import { Link } from "react-router-dom";
import "../styles/footer.css";
const Footer = () => {
  return (
    <div className="footer">
      <h4 className="text-center">Source Code</h4>
      <p className="text-center mt-3">
        <Link to="/about">Shreshtha Suri </Link>|
        <Link to="/contact">Shreya Ameta</Link>|
        <Link to="/about">Shruti Sharma</Link>|
        <Link to="/contact">Sonali Jain</Link>
      </p>
    </div>
  );
};

export default Footer;
