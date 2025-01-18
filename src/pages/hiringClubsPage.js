import React from 'react';
import FaqBlock from '../components/faqBlock/faqBlock';
import Footer from '../components/footer/footer';
import ContactForm from '../components/contactForm/contactForm';
import HeaderCarousel from '../components/headerCarousel/headerCarousel';

const HiringClubsPage = () => {
    return (
        <div className="hiring-clubs-page">
            <div className="beige-background">
                <HeaderCarousel fetchId={'6BojRme8bZeXrRIWwJ2nwa'} variant="hiringClubsPage"/>
                <FaqBlock fetchId={'1SKsxuh93slzSmKnSpJ8hz'} variant="homepage"/>
                <ContactForm />
            </div>
            <Footer />
        </div>
    );
};

export default HiringClubsPage;
