import React, { useState } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import lazsocLogo from '../../assets/images/lazsoc-logo-blue.png';

const TopNavigation = () => {
    const [aboutDropdownOpen, setAboutDropdownOpen] = useState(false);
    const [involvedDropdownOpen, setInvolvedDropdownOpen] = useState(false);
    const [shopDropdownOpen, setShopDropdownOpen] = useState(false);
    const location = useLocation();

    const toggleAboutDropdown = () => {
        setAboutDropdownOpen((prev) => !prev);
    };

    const toggleInvolvedDropdown = () => {
        setInvolvedDropdownOpen((prev) => !prev);
    };

    const toggleShopDropdown = () => {
        setShopDropdownOpen((prev) => !prev);
    };

    const isAboutDropdownActive = ['/aboutUs', '/about-good-eats'].includes(location.pathname);
    const isInvolvedDropdownActive = ['/clubs-associations', '/hiring-clubs'].includes(location.pathname);
    const isShopDropdownActive = ['/shop/business-formal', '/shop/club-memberships', '/shop/events', '/shop/merchandise'].includes(location.pathname);

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

                <li 
                    className={`nav-link dropdown ${isShopDropdownActive ? 'active' : ''}`}
                    onMouseEnter={toggleShopDropdown} 
                    onMouseLeave={toggleShopDropdown}
                >
                    Shop <span className={`dropdown-arrow ${shopDropdownOpen ? 'open' : ''}`}>&#9660;</span>
                    <ul className={`dropdown-menu ${shopDropdownOpen ? 'show' : ''}`}>
                        <li><NavLink to="/shop/business-formal" className="dropdown-item">Business Formal Rental Program</NavLink></li>
                        <li><NavLink to="/shop/club-memberships" className="dropdown-item">Club Memberships</NavLink></li>
                        <li><NavLink to="/shop/events" className="dropdown-item">Events</NavLink></li>
                        <li><NavLink to="/shop/merchandise" className="dropdown-item">Merchandise</NavLink></li>
                    </ul>
                </li>

                <li><NavLink to="/edi" className="nav-link">EDI</NavLink></li>
            </ul>
        </nav>
    );
};

export default TopNavigation; 