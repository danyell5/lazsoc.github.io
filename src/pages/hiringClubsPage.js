import React, { useState } from 'react';
import FaqBlock from '../components/faqBlock/faqBlock';
import Footer from '../components/footer/footer';
import ContactForm from '../components/contactForm/contactForm';
import HeaderCarousel from '../components/headerCarousel/headerCarousel';
import HiringPostSection from '../components/hiringPostSection/hiringPostSection';
import '../partials/_hiringClubs.scss';

const HiringDisclaimer = () => (
    <div className="hiring-disclaimer">
        <div className="disclaimer-content">
            <h2>Currently not hiring!</h2>
            
            <p>Stay tuned for updates!</p>
        </div>
    </div>
);

const HiringClubsPage = () => {
    const [hasHiringPosts, setHasHiringPosts] = useState(true);

    const handlePostsLoaded = (hasPosts) => {
        setHasHiringPosts(hasPosts);
    };

    return (
        <div className="hiring-clubs-page">
            <div className="beige-background">
                <HeaderCarousel fetchId={'6BojRme8bZeXrRIWwJ2nwa'} variant="hiringClubsPage"/>
                <HiringPostSection 
                    fetchId={'5TL0Fgvngaq3aYXGonaEB5'} 
                    onPostsLoaded={handlePostsLoaded}
                />
                {!hasHiringPosts && <HiringDisclaimer />}
                <FaqBlock fetchId={'1SKsxuh93slzSmKnSpJ8hz'} variant="homepage"/>
                <ContactForm />
            </div>
            <Footer />
        </div>
    );
};

export default HiringClubsPage;
