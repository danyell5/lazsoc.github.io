import React from 'react';
import '../../partials/_about.scss';
import Footer from '../../components/footer/footer';
import HeaderCarousel from '../../components/headerCarousel/headerCarousel';
import TwoTextFourImage from '../../components/twoTextFourImage/twoTextFourImage';

const WaterlooFavsPage = () => {
    return (
        <div className="about-page waterloo-favs">
            <HeaderCarousel fetchId={'2C18cXbFNoWQtXV2MSRkDW'}/>
            <TwoTextFourImage fetchId={'7sqa2D9Uc0G00qC9iUfMoo'} variant="carousel"/>
            <Footer />
        </div>
    );
};

export default WaterlooFavsPage; 