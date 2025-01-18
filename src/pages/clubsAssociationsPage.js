import React from 'react';
import HeaderCarousel from '../components/headerCarousel/headerCarousel';
import LogoDisplay from '../components/logoDisplay/logoDisplay';
import Footer from '../components/footer/footer';
import TextLeftRightImage from '../components/leftTextRightImage/textLeftRightImage';
import { CardCarousel } from '../components/cardCarousel/cardCarousel';

const ClubsAssociationsPage = () => {
  return (
    <div className="clubs-associtations-page">
        <HeaderCarousel 
            fetchId={'5eIXcEvSwuepOKxBtKwHg7'} 
            variant="clubsAssociation"
        />
        <CardCarousel fetchId={'2YDJePrN9czn5WFzopLk08'} />
        <LogoDisplay 
            fetchId={'6MD7QOzgB8H8Te0yqaaVjl'} 
            variant="clubsAssociations"
        />
        <TextLeftRightImage
            fetchId={'5NlJR0sVu9su6yen5mTQ3G'}
            variant="clubsAssociations"
        />
        <Footer />
    </div>
  );
};

export default ClubsAssociationsPage;
