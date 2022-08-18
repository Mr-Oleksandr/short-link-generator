import React from 'react';
import { NavLink } from 'react-router-dom';
import Logo from '../../Icons/Logo';
import './Navbar.css';
import Line from '../../Icons/Line';
const Navbar = () => {
  return (
    <div>
      <nav className="nav background white">
        <div className="nav-wrapper">
          <div>
            <h1 className="header-logo">
              <NavLink to="/create">
                {' '}
                <Logo />
              </NavLink>
            </h1>
            <Line className="vector-line" />
          </div>
          <div>
            <NavLink className="validate-link" to="/detail">
              Validate Link
            </NavLink>
            <NavLink className="btn-docs" to="/docs">
              Docs
            </NavLink>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
