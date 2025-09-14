import React from 'react';
import '../../partials/_about.scss';
import TextLeftRightImage from '../../components/leftTextRightImage/textLeftRightImage';
import Footer from '../../components/footer/footer';
import TeamDisplay from '../../components/teamDisplay/teamDisplay';

const TeamPage = () => {
    return (
        <div className="team-page">
            <div className="header-section">
                <h1>Empowering <span className='number'>6,000+ </span> students through leadership, innovation, and community.</h1>
            </div>
            <TextLeftRightImage fetchId={'4fBFEDA6VOuAML53T4CBcB'} variant="noButton"/>
            <TeamDisplay fetchId="356Yw7RFQA6mc4PAR1TJMS"/>
            <TextLeftRightImage fetchId={'1bPZTm83ABna60A9w9oasb'} variant="noButton-inverted"/>
            <TeamDisplay fetchId={'5SiTvR5lZZyFv1s7AasRoO'}/>
            <TextLeftRightImage fetchId={'3KTp04eBNq4dJIxBm3KAQk'} variant="noButton"/>
            <TeamDisplay fetchId={'3Qf6GFckwORTf2LQsPAgkT'}/>
            <TextLeftRightImage fetchId={'2ltWnJpMUd1ZSjPl8TUl1t'} variant="noButton-inverted"/>
            <TeamDisplay fetchId={'i1OILq0JzaZ0jud3JG41o'}/>
            <TextLeftRightImage fetchId={'3qFTr34w0oZxbtDZ8pX50k'} variant="noButton"/>
            <TeamDisplay fetchId={'4mCs4yt3BZ2zkV3QXJyxVQ'}/>
            <TextLeftRightImage fetchId={'7xcH9W2lvq1NAPJu7ccPbp'} variant="noButton-inverted"/>
            <TeamDisplay fetchId={'2QcHb4s6Ez0rxYNr6qRooq'}/>
            <TextLeftRightImage fetchId={'4tZy8GvWA1PhFFSIPVCrWS'} variant="noButton"/>
            <TeamDisplay fetchId={'1XIGz7wQcCNIBFTprQUvLG'}/>
            <TextLeftRightImage fetchId={'7FcgAC0jho1hejJfaCCtYy'} variant="noButton-inverted"/>
            <TeamDisplay fetchId={'3yzsGn20BnLdubnWkaKzoR'}/>
            <Footer />
        </div>
    )
};

export default TeamPage; 