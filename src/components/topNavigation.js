import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import lazsocLogo from '../lazsocLogo.webp'; 

const TopNavigation = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setDropdownOpen((prev) => !prev);
  };

  return (
    <nav className="top-navigation">
      <div className="nav-left">
        <img src={lazsocLogo} alt="LazSoc Logo" className="logo" />
      </div>
      <ul className="nav-links">
        <li><NavLink to="/" className="nav-link">Home</NavLink></li>

        <li 
          className="nav-link dropdown" 
          onMouseEnter={toggleDropdown} 
          onMouseLeave={toggleDropdown}
        >
          About <span className={`dropdown-arrow ${dropdownOpen ? 'open' : ''}`}>&#9660;</span>
          <ul className={`dropdown-menu ${dropdownOpen ? 'show' : ''}`}>
            <li><NavLink to="/aboutUs" className="dropdown-item">About Us</NavLink></li>
            <li><NavLink to="/about-good-eats" className="dropdown-item">About Good Eats</NavLink></li>
          </ul>
        </li>

        <li><NavLink to="/clients" className="nav-link">Clients</NavLink></li>
      </ul>
    </nav>
  );
};

export default TopNavigation;
