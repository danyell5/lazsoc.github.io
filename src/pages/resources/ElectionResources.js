import React from 'react';
import '../../partials/_resources.scss';
import HeaderCarousel from '../../components/headerCarousel/headerCarousel';
import { CardCarousel } from '../../components/cardCarousel/cardCarousel';
import Footer from '../../components/footer/footer';

const ElectionResources = () => {
    return (
        <div className="resources-page election">
        <HeaderCarousel fetchId={'3ZdRpHmC2ehO3cQ7vTQQa7'} variant="clubsAssociation" isTopCarousel={true}/>
            <div className="resources-content">
                <CardCarousel 
                    fetchId="63k0bOKnqAX9zqibZG8Jnn" 
                    variant="gridView"
                />
            </div>
            <Footer />
        </div>
    );
};

export default ElectionResources; 