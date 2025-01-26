import React, { useState } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import lazsocLogo from '../../assets/images/lazsoc-logo-blue.png';

const TopNavigation = () => {
    const [aboutDropdownOpen, setAboutDropdownOpen] = useState(false);
    const [involvedDropdownOpen, setInvolvedDropdownOpen] = useState(false);
    const [shopDropdownOpen, setShopDropdownOpen] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const [mobileAboutOpen, setMobileAboutOpen] = useState(false);
    const [mobileInvolvedOpen, setMobileInvolvedOpen] = useState(false);
    const [mobileShopOpen, setMobileShopOpen] = useState(false);
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

    const toggleMobileMenu = () => {
        setMobileMenuOpen((prev) => !prev);
    };

    const toggleMobileAbout = () => {
        setMobileAboutOpen((prev) => !prev);
    };

    const toggleMobileInvolved = () => {
        setMobileInvolvedOpen((prev) => !prev);
    };

    const toggleMobileShop = () => {
        setMobileShopOpen((prev) => !prev);
    };

    const isAboutDropdownActive = ['/aboutUs', '/about-good-eats'].includes(location.pathname);
    const isInvolvedDropdownActive = ['/clubs-associations', '/hiring-clubs'].includes(location.pathname);
    const isShopDropdownActive = ['/shop/business-formal', '/shop/club-memberships', '/shop/events', '/shop/merchandise'].includes(location.pathname);

    return (
        <nav className="top-navigation">
            <div className="nav-left">
                <NavLink to="/">
                    <img src={lazsocLogo} alt="LazSoc Logo" className="logo" />
                </NavLink>
            </div>
            
            {/* Desktop Navigation */}
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

            {/* Mobile Menu Button */}
            <button 
                className={`hamburger-menu ${mobileMenuOpen ? 'active' : ''}`}
                onClick={toggleMobileMenu}
                aria-label="Toggle mobile menu"
            >
                <span></span>
                <span></span>
                <span></span>
            </button>

            {/* Mobile Navigation */}
            <div className={`mobile-nav ${mobileMenuOpen ? 'active' : ''}`}>
                <ul className="mobile-nav-links">
                    <li><NavLink to="/" className="nav-link" onClick={toggleMobileMenu}>Home</NavLink></li>
                    
                    <li className="mobile-dropdown">
                        <button 
                            className="dropdown-toggle"
                            onClick={toggleMobileAbout}
                        >
                            About
                            <span className={`dropdown-arrow ${mobileAboutOpen ? 'open' : ''}`}>&#9660;</span>
                        </button>
                        <ul className={`mobile-dropdown-menu ${mobileAboutOpen ? 'show' : ''}`}>
                            <li><NavLink to="/aboutUs" className="dropdown-item" onClick={toggleMobileMenu}>About Us</NavLink></li>
                            <li><NavLink to="/about-good-eats" className="dropdown-item" onClick={toggleMobileMenu}>About Good Eats</NavLink></li>
                        </ul>
                    </li>

                    <li className="mobile-dropdown">
                        <button 
                            className="dropdown-toggle"
                            onClick={toggleMobileInvolved}
                        >
                            Get Involved
                            <span className={`dropdown-arrow ${mobileInvolvedOpen ? 'open' : ''}`}>&#9660;</span>
                        </button>
                        <ul className={`mobile-dropdown-menu ${mobileInvolvedOpen ? 'show' : ''}`}>
                            <li><NavLink to="/clubs-associations" className="dropdown-item" onClick={toggleMobileMenu}>Clubs and Associations</NavLink></li>
                            <li><NavLink to="/hiring-clubs" className="dropdown-item" onClick={toggleMobileMenu}>Hiring and FAQ</NavLink></li>
                        </ul>
                    </li>

                    <li className="mobile-dropdown">
                        <button 
                            className="dropdown-toggle"
                            onClick={toggleMobileShop}
                        >
                            Shop
                            <span className={`dropdown-arrow ${mobileShopOpen ? 'open' : ''}`}>&#9660;</span>
                        </button>
                        <ul className={`mobile-dropdown-menu ${mobileShopOpen ? 'show' : ''}`}>
                            <li><NavLink to="/shop/business-formal" className="dropdown-item" onClick={toggleMobileMenu}>Business Formal Rental Program</NavLink></li>
                            <li><NavLink to="/shop/club-memberships" className="dropdown-item" onClick={toggleMobileMenu}>Club Memberships</NavLink></li>
                            <li><NavLink to="/shop/events" className="dropdown-item" onClick={toggleMobileMenu}>Events</NavLink></li>
                            <li><NavLink to="/shop/merchandise" className="dropdown-item" onClick={toggleMobileMenu}>Merchandise</NavLink></li>
                        </ul>
                    </li>

                    <li><NavLink to="/edi" className="nav-link" onClick={toggleMobileMenu}>EDI</NavLink></li>
                </ul>
            </div>
        </nav>
    );
}

export default TopNavigation; 