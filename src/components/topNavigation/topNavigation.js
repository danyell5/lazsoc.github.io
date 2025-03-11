import React, { useState } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import lazsocLogo from '../../assets/images/lazsoc-logo-blue.png';

const TopNavigation = () => {
    const [aboutDropdownOpen, setAboutDropdownOpen] = useState(false);
    const [involvedDropdownOpen, setInvolvedDropdownOpen] = useState(false);
    const [shopDropdownOpen, setShopDropdownOpen] = useState(false);
    const [resourcesDropdownOpen, setResourcesDropdownOpen] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const [mobileAboutOpen, setMobileAboutOpen] = useState(false);
    const [mobileInvolvedOpen, setMobileInvolvedOpen] = useState(false);
    const [mobileShopOpen, setMobileShopOpen] = useState(false);
    const [mobileResourcesOpen, setMobileResourcesOpen] = useState(false);
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

    const toggleResourcesDropdown = () => {
        setResourcesDropdownOpen((prev) => !prev);
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

    const toggleMobileResources = () => {
        setMobileResourcesOpen((prev) => !prev);
    };

    const isAboutDropdownActive = ['/about/team', '/about/waterloo-favs', '/about/business-bytes'].includes(location.pathname);
    const isInvolvedDropdownActive = ['/clubs-associations', '/hiring-clubs'].includes(location.pathname);
    const isShopDropdownActive = ['/shop/business-formal', '/shop/club-memberships', '/shop/events', '/shop/merchandise'].includes(location.pathname);
    const isResourcesDropdownActive = ['/resources/election', '/resources/policies', '/resources/student', '/resources/refund-policy'].includes(location.pathname);

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
                        <li><NavLink to="/about/team" className="dropdown-item">The Team</NavLink></li>
                        <li><NavLink to="/about/waterloo-favs" className="dropdown-item">Our Waterloo Favs</NavLink></li>
                        <li><NavLink to="/about/business-bytes" className="dropdown-item">Business Bytes</NavLink></li>
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

                <li 
                    className={`nav-link dropdown ${isResourcesDropdownActive ? 'active' : ''}`}
                    onMouseEnter={toggleResourcesDropdown} 
                    onMouseLeave={toggleResourcesDropdown}
                >
                    Resources <span className={`dropdown-arrow ${resourcesDropdownOpen ? 'open' : ''}`}>&#9660;</span>
                    <ul className={`dropdown-menu ${resourcesDropdownOpen ? 'show' : ''}`}>
                        <li><NavLink to="/resources/election" className="dropdown-item">Election Resources</NavLink></li>
                        <li><NavLink to="/resources/policies" className="dropdown-item">Policies</NavLink></li>
                        <li><NavLink to="/resources/student" className="dropdown-item">Student Resources</NavLink></li>
                        <li><NavLink to="/resources/refund-policy" className="dropdown-item">Refund Policy</NavLink></li>
                    </ul>
                </li>
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
                            <li><NavLink to="/about/team" className="dropdown-item" onClick={toggleMobileMenu}>The Team</NavLink></li>
                            <li><NavLink to="/about/waterloo-favs" className="dropdown-item" onClick={toggleMobileMenu}>Our Waterloo Favs</NavLink></li>
                            <li><NavLink to="/about/business-bytes" className="dropdown-item" onClick={toggleMobileMenu}>Business Bytes</NavLink></li>
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

                    <li className="mobile-dropdown">
                        <button 
                            className="dropdown-toggle"
                            onClick={toggleMobileResources}
                        >
                            Resources
                            <span className={`dropdown-arrow ${mobileResourcesOpen ? 'open' : ''}`}>&#9660;</span>
                        </button>
                        <ul className={`mobile-dropdown-menu ${mobileResourcesOpen ? 'show' : ''}`}>
                            <li><NavLink to="/resources/election" className="dropdown-item" onClick={toggleMobileMenu}>Election Resources</NavLink></li>
                            <li><NavLink to="/resources/policies" className="dropdown-item" onClick={toggleMobileMenu}>Policies</NavLink></li>
                            <li><NavLink to="/resources/student" className="dropdown-item" onClick={toggleMobileMenu}>Student Resources</NavLink></li>
                            <li><NavLink to="/resources/refund-policy" className="dropdown-item" onClick={toggleMobileMenu}>Refund Policy</NavLink></li>
                        </ul>
                    </li>

                    <li><NavLink to="/edi" className="nav-link" onClick={toggleMobileMenu}>EDI</NavLink></li>
                </ul>
            </div>
        </nav>
    );
}

export default TopNavigation; 