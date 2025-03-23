import React from 'react';
import '../../partials/_resources.scss';
import HeaderCarousel from '../../components/headerCarousel/headerCarousel';
import { CardCarousel } from '../../components/cardCarousel/cardCarousel';
import Footer from '../../components/footer/footer';
import TwoTextFourImage from '../../components/twoTextFourImage/twoTextFourImage';

const StudentResources = () => {
    return (
        <div className="resources-page student">
            <HeaderCarousel fetchId={'52rWz12EkpW27XxRAGoinH'} variant="clubsAssociation" isTopCarousel={true}/>
            <div className="resources-content">
                <CardCarousel 
                    fetchId="2fFyHukhwQxxHuDR4LQOXq" 
                    variant="gridView"
                />
            </div>
            <TwoTextFourImage fetchId={'3DVV74ZcIidVKmtnRHmtjd'} variant="carousel"/>
            <Footer />
        </div>
    );
};

export default StudentResources; 