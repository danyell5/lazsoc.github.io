import React from 'react';
import HeaderCarousel from '../components/headerCarousel/headerCarousel';
import TextLeftRightImage from '../components/leftTextRightImage/textLeftRightImage';
import ThreeImageLeftTextRight from '../components/threeImageLeftTextRight/threeImageLeftTextRight';
import OneTextAboveFourImages from '../components/oneTextAboveFourImages/oneTextAboveFourImages';
import TwoTextFourImage from '../components/twoTextFourImage/twoTextFourImage';
import FaqBlock from '../components/faqBlock/faqBlock';
import Footer from '../components/footer/footer';

const HomePage = () => {
  return (
    <div className="homepage">
      <HeaderCarousel fetchId={'306Jw6IKAXW2jmyTmiyXlg'} variant="homepage" isTopCarousel={true}/>
      <TextLeftRightImage fetchId={'7b9e9BHrW4lk0EoHL5ZKxU'} variant="homepage"/>
      <ThreeImageLeftTextRight fetchId={'4yUuMfOoMxWiqz95YD6PoE'} variant="homepage"/>
      <OneTextAboveFourImages fetchId={'79iTGlb6c8VzG3yaRU3M7T'} variant="homepage"/>
      <TwoTextFourImage fetchId={'2igsGQ1nG9AbYozjakL96d'} variant="homepage"/>
      <TwoTextFourImage fetchId={'OlWEYkLjtRxc4ulKoU39H'} variant="carousel"/>
      <FaqBlock fetchId={'3GY0CtaAoFAkRV1j2JaPEL'} variant="homepage"/>
      <Footer />
    </div>
  );
};

export default HomePage;