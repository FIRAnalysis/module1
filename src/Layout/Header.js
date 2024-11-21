import React from "react";

import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <div>
      <nav className="navbar navbar-expand-lg bg-dark navbar-dark ">
        <div className="container-fluid">
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarTogglerDemo01"
            aria-controls="navbarTogglerDemo01"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarTogglerDemo01">
            <NavLink className="navbar-brand">FIR ANALYSIS</NavLink>
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <NavLink to="/home" className="nav-link " aria-current="page">
                  About
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="/FAQs" className="nav-link" href="#">
                  FAQs
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="/login" className="nav-link" href="#">
                  analytics
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="/event" className="nav-link" href="#">
                  Developers
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="/event" className="nav-link" href="#">
                  Register/Login
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Header;
