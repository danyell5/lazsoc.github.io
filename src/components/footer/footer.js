import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Footer = () => {
    const navigate = useNavigate();
    
    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    };

    const handleNavClick = (path) => (e) => {
        e.preventDefault();
        navigate(path);
        scrollToTop();
    };

    return (
        <footer className="footer">
            <div className="footer-container">
                <div className="footer-content">
                    <div className="footer-nav">
                        <button onClick={scrollToTop} className="back-to-top">Back to Top</button>
                        <a href="/" onClick={handleNavClick('/')}>Home</a>
                        <a href="/lazsoc" onClick={handleNavClick('/lazsoc')}>LazSoc</a>
                        <a href="/clubs-associations" onClick={handleNavClick('/clubs-associations')}>Clubs</a>
                        <a href="/hiring" onClick={handleNavClick('/hiring')}>Hiring</a>
                        <a href="/resources" onClick={handleNavClick('/resources')}>Resources</a>
                        <a href="/refund-policy" onClick={handleNavClick('/refund-policy')}>Refund Policy</a>
                    </div>

                    <div className="footer-acknowledgment">
                        <h2>Land Acknowledgement</h2>
                        <p>Wilfrid Laurier University and its campuses are located on the Haldimand tract, traditional territory of the Neutral, Anishinaabe (Anish-nah-bay) and Haudenosaunee (Hoe-den-no-show-nee) Peoples.</p>
                    </div>

                    <div className="footer-tagline">
                        <h3>Live, Love, <span className="laz">Laz</span><span className="soc">Soc</span>.</h3>
                        <p>Creating Canada's best business school community at Wilfrid Laurier University.</p>
                    </div>
                </div>

                <div className="footer-bottom">
                    <div className="social-links">
                        <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                            <i className="fab fa-instagram"></i>
                        </a>
                        <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                            <i className="fab fa-linkedin"></i>
                        </a>
                        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
                            <i className="fab fa-twitter"></i>
                        </a>
                        <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" aria-label="YouTube">
                            <i className="fab fa-youtube"></i>
                        </a>
                        <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
                            <i className="fab fa-facebook"></i>
                        </a>
                    </div>

                    <div className="payment-methods">
                        <img src="https://cdn.shopify.com/shopifycloud/shopify/assets/payment_icons/american_express-2264c9b8b57b23b0b0831827e90cd7bcda2836adc42a912ebedf545dead35b20.svg" alt="American Express" />
                        <img src="https://cdn.shopify.com/shopifycloud/shopify/assets/payment_icons/apple_pay-f6db0077dc7c325b436ecbdcf254239100b35b70b1663bc7523d7c424901fa09.svg" alt="Apple Pay" />
                        <img src="https://cdn.shopify.com/shopifycloud/shopify/assets/payment_icons/diners_club-16436b9fb6dd9060edb51f1c7c44e23941e544ad798282d6aef1604319562fba.svg" alt="Diners Club" />
                        <img src="https://cdn.shopify.com/shopifycloud/shopify/assets/payment_icons/discover-cc9808e50193c7496e7a5245eb86d5e06f02e2476c0fe70f2c40016707d35461.svg" alt="Discover" />
                        <img src="https://cdn.shopify.com/shopifycloud/shopify/assets/payment_icons/google_pay-c66a29c63facf2053bf69352982c958e9675cabea4f2f7ccec08d169d1856b31.svg" alt="Google Pay" />
                        <img src="https://cdn.shopify.com/shopifycloud/shopify/assets/payment_icons/master-173035bc8124581983d4efa50cf8626e8553c2b311353fbf67485f9c1a2b88d1.svg" alt="Mastercard" />
                        <img src="https://cdn.shopify.com/shopifycloud/shopify/assets/payment_icons/visa-319d545c6fd255c9aad5eeaad21fd6f7f7b4fdbdb1a35ce83b89cca12a187f00.svg" alt="Visa" />
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer; 