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
                    About 
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="11" viewBox="0 0 20 11" fill="none" className={`dropdown-icon ${aboutDropdownOpen ? 'open' : ''}`}>
                      <path d="M9.29289 9.20711C9.68342 9.59763 10.3166 9.59763 10.7071 9.20711L17.0711 2.84315C17.4616 2.45262 17.4616 1.81946 17.0711 1.42893C16.6805 1.03841 16.0474 1.03841 15.6569 1.42893L10 7.08579L4.34315 1.42893C3.95262 1.03841 3.31946 1.03841 2.92893 1.42893C2.53841 1.81946 2.53841 2.45262 2.92893 2.84315L9.29289 9.20711ZM9 7.5V8.5H11V7.5H9Z" fill="#53449B"/>
                    </svg>
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
                    Get Involved 
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="11" viewBox="0 0 20 11" fill="none" className={`dropdown-icon ${involvedDropdownOpen ? 'open' : ''}`}>
                      <path d="M9.29289 9.20711C9.68342 9.59763 10.3166 9.59763 10.7071 9.20711L17.0711 2.84315C17.4616 2.45262 17.4616 1.81946 17.0711 1.42893C16.6805 1.03841 16.0474 1.03841 15.6569 1.42893L10 7.08579L4.34315 1.42893C3.95262 1.03841 3.31946 1.03841 2.92893 1.42893C2.53841 1.81946 2.53841 2.45262 2.92893 2.84315L9.29289 9.20711ZM9 7.5V8.5H11V7.5H9Z" fill="#53449B"/>
                    </svg>
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
                    Shop 
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="11" viewBox="0 0 20 11" fill="none" className={`dropdown-icon ${shopDropdownOpen ? 'open' : ''}`}>
                      <path d="M9.29289 9.20711C9.68342 9.59763 10.3166 9.59763 10.7071 9.20711L17.0711 2.84315C17.4616 2.45262 17.4616 1.81946 17.0711 1.42893C16.6805 1.03841 16.0474 1.03841 15.6569 1.42893L10 7.08579L4.34315 1.42893C3.95262 1.03841 3.31946 1.03841 2.92893 1.42893C2.53841 1.81946 2.53841 2.45262 2.92893 2.84315L9.29289 9.20711ZM9 7.5V8.5H11V7.5H9Z" fill="#53449B"/>
                    </svg>
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
                    Resources 
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="11" viewBox="0 0 20 11" fill="none" className={`dropdown-icon ${resourcesDropdownOpen ? 'open' : ''}`}>
                      <path d="M9.29289 9.20711C9.68342 9.59763 10.3166 9.59763 10.7071 9.20711L17.0711 2.84315C17.4616 2.45262 17.4616 1.81946 17.0711 1.42893C16.6805 1.03841 16.0474 1.03841 15.6569 1.42893L10 7.08579L4.34315 1.42893C3.95262 1.03841 3.31946 1.03841 2.92893 1.42893C2.53841 1.81946 2.53841 2.45262 2.92893 2.84315L9.29289 9.20711ZM9 7.5V8.5H11V7.5H9Z" fill="#53449B"/>
                    </svg>
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
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="11" viewBox="0 0 20 11" fill="none" className={`dropdown-icon ${mobileAboutOpen ? 'open' : ''}`}>
                              <path d="M9.29289 9.20711C9.68342 9.59763 10.3166 9.59763 10.7071 9.20711L17.0711 2.84315C17.4616 2.45262 17.4616 1.81946 17.0711 1.42893C16.6805 1.03841 16.0474 1.03841 15.6569 1.42893L10 7.08579L4.34315 1.42893C3.95262 1.03841 3.31946 1.03841 2.92893 1.42893C2.53841 1.81946 2.53841 2.45262 2.92893 2.84315L9.29289 9.20711ZM9 7.5V8.5H11V7.5H9Z" fill="#53449B"/>
                            </svg>
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
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="11" viewBox="0 0 20 11" fill="none" className={`dropdown-icon ${mobileInvolvedOpen ? 'open' : ''}`}>
                              <path d="M9.29289 9.20711C9.68342 9.59763 10.3166 9.59763 10.7071 9.20711L17.0711 2.84315C17.4616 2.45262 17.4616 1.81946 17.0711 1.42893C16.6805 1.03841 16.0474 1.03841 15.6569 1.42893L10 7.08579L4.34315 1.42893C3.95262 1.03841 3.31946 1.03841 2.92893 1.42893C2.53841 1.81946 2.53841 2.45262 2.92893 2.84315L9.29289 9.20711ZM9 7.5V8.5H11V7.5H9Z" fill="#53449B"/>
                            </svg>
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
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="11" viewBox="0 0 20 11" fill="none" className={`dropdown-icon ${mobileShopOpen ? 'open' : ''}`}>
                              <path d="M9.29289 9.20711C9.68342 9.59763 10.3166 9.59763 10.7071 9.20711L17.0711 2.84315C17.4616 2.45262 17.4616 1.81946 17.0711 1.42893C16.6805 1.03841 16.0474 1.03841 15.6569 1.42893L10 7.08579L4.34315 1.42893C3.95262 1.03841 3.31946 1.03841 2.92893 1.42893C2.53841 1.81946 2.53841 2.45262 2.92893 2.84315L9.29289 9.20711ZM9 7.5V8.5H11V7.5H9Z" fill="#53449B"/>
                            </svg>
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
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="11" viewBox="0 0 20 11" fill="none" className={`dropdown-icon ${mobileResourcesOpen ? 'open' : ''}`}>
                              <path d="M9.29289 9.20711C9.68342 9.59763 10.3166 9.59763 10.7071 9.20711L17.0711 2.84315C17.4616 2.45262 17.4616 1.81946 17.0711 1.42893C16.6805 1.03841 16.0474 1.03841 15.6569 1.42893L10 7.08579L4.34315 1.42893C3.95262 1.03841 3.31946 1.03841 2.92893 1.42893C2.53841 1.81946 2.53841 2.45262 2.92893 2.84315L9.29289 9.20711ZM9 7.5V8.5H11V7.5H9Z" fill="#53449B"/>
                            </svg>
                        </button>
                        <ul className={`mobile-dropdown-menu ${mobileResourcesOpen ? 'show' : ''}`}>
                            <li><NavLink to="/resources/election" className="dropdown-item" onClick={toggleMobileMenu}>Election Resources</NavLink></li>
                            <li><NavLink to="/resources/policies" className="dropdown-item" onClick={toggleMobileMenu}>Policies</NavLink></li>
                            <li><NavLink to="/resources/student" className="dropdown-item" onClick={toggleMobileMenu}>Student Resources</NavLink></li>
                            <li><NavLink to="/resources/refund-policy" className="dropdown-item" onClick={toggleMobileMenu}>Refund Policy</NavLink></li>
                        </ul>
                    </li>
                </ul>
            </div>
        </nav>
    );
}

export default TopNavigation; 