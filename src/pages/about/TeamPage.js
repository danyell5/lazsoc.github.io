import React from 'react';
import '../../partials/_about.scss';
import TwoTextFourImage from '../../components/twoTextFourImage/twoTextFourImage';
import Footer from '../../components/footer/footer';
const TeamPage = () => {
    return (
        <div className="team-page">
            <TwoTextFourImage fetchId={'3F5PJ79unyXEZNedypiz8R'} variant="carousel"/>
            <Footer />
        </div>
    )
};

export default TeamPage; 