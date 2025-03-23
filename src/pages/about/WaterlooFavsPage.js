import React from 'react';
import '../../partials/_about.scss';
import Footer from '../../components/footer/footer';
import HeaderCarousel from '../../components/headerCarousel/headerCarousel';
import TwoTextFourImage from '../../components/twoTextFourImage/twoTextFourImage';
import TextLeftRightImage from '../../components/leftTextRightImage/textLeftRightImage';
import OneTextAboveFourImages from '../../components/oneTextAboveFourImages/oneTextAboveFourImages';

const WaterlooFavsPage = () => {
    return (
        <div className="about-page waterloo-favs">
            <HeaderCarousel fetchId={'2C18cXbFNoWQtXV2MSRkDW'} isTopCarousel={true}/>
            <TextLeftRightImage fetchId={'5MbEndYqVHdoCTGKY7KyfN'} variant="noButton"/>
            <TextLeftRightImage fetchId={'6IB4Xq1i1SRFWPNB0Zuoxd'} variant="noButton-inverted"/>
            <TextLeftRightImage fetchId={'w5o74e6OGadi9kfThJhFp'} variant="noButton"/>
            <TextLeftRightImage fetchId={'3ykas7zS7sS4jX6rg3iKLJ'} variant="noButton-inverted"/>
            <TwoTextFourImage fetchId={'7sqa2D9Uc0G00qC9iUfMoo'} variant="carousel"/>
            <OneTextAboveFourImages fetchId={'7KsfjsHeFWe5sBhLIUCOxH'} variant="homepage"/>
            <Footer />
        </div>
    );
};

export default WaterlooFavsPage; 