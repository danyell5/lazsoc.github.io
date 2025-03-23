import React from 'react';
import '../../partials/_resources.scss';
import HeaderCarousel from '../../components/headerCarousel/headerCarousel';
import { CardCarousel } from '../../components/cardCarousel/cardCarousel';
import Footer from '../../components/footer/footer';

const Policies = () => {
    return (
        <div className="resources-page policies">
        <HeaderCarousel fetchId={'4Mi5AW6Y19iyO6EgNMY4RQ'} variant="clubsAssociation" isTopCarousel={true}/>
            <div className="resources-content">
                <CardCarousel 
                    fetchId="43vMM7u2zepijIbHMTffX7" 
                    variant="gridView"
                />
            </div>
            <Footer />
        </div>
    );
};

export default Policies; 