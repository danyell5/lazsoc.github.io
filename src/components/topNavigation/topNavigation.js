import React, { useState } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import lazsocLogo from '../../assets/images/lazsoc-logo-blue.png';

const TopNavigation = () => {
    const [aboutDropdownOpen, setAboutDropdownOpen] = useState(false);
    const [involvedDropdownOpen, setInvolvedDropdownOpen] = useState(false);
    const location = useLocation();

    const toggleAboutDropdown = () => {
        setAboutDropdownOpen((prev) => !prev);
    };

    const toggleInvolvedDropdown = () => {
        setInvolvedDropdownOpen((prev) => !prev);
    };

    const isAboutDropdownActive = ['/aboutUs', '/about-good-eats'].includes(location.pathname);
    const isInvolvedDropdownActive = ['/clubs-associations', '/hiring-faq'].includes(location.pathname);

    return (
        <nav className="top-navigation">
            <div className="nav-left">
                <img src={lazsocLogo} alt="LazSoc Logo" className="logo" />
            </div>
            <ul className="nav-links">
                <li><NavLink to="/" className="nav-link">Home</NavLink></li>

                <li 
                    className={`nav-link dropdown ${isAboutDropdownActive ? 'active' : ''}`}
                    onMouseEnter={toggleAboutDropdown} 
                    onMouseLeave={toggleAboutDropdown}
                >
                    About <span className={`dropdown-arrow ${aboutDropdownOpen ? 'open' : ''}`}>&#9660;</span>
                    <ul className={`dropdown-menu ${aboutDropdownOpen ? 'show' : ''}`}>
                        <li><NavLink to="/aboutUs" className="dropdown-item">About Us</NavLink></li>
                        <li><NavLink to="/about-good-eats" className="dropdown-item">About Good Eats</NavLink></li>
                    </ul>
                </li>

                <li 
                    className={`nav-link dropdown ${isInvolvedDropdownActive ? 'active' : ''}`}
                    onMouseEnter={toggleInvolvedDropdown} 
                    onMouseLeave={toggleInvolvedDropdown}
                >
                    Get Involved <span className={`dropdown-arrow ${involvedDropdownOpen ? 'open' : ''}`}>&#9660;</span>
                    <ul className={`dropdown-menu ${involvedDropdownOpen ? 'show' : ''}`}>
                        <li><NavLink to="/clubs-associations" className="dropdown-item">Clubs and Associations</NavLink></li>
                        <li><NavLink to="/hiring-clubs" className="dropdown-item">Hiring and FAQ</NavLink></li>
                    </ul>
                </li>
                <li><NavLink to="/edi" className="nav-link">EDI</NavLink></li>
            </ul>
        </nav>
    );
};

export default TopNavigation; 