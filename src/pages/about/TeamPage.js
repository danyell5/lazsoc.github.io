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
            <TextLeftRightImage fetchId={'2EA0sRssNq3IB9GZZj3IiK'} variant="noButton-inverted"/>
            <TeamDisplay fetchId={'5SiTvR5lZZyFv1s7AasRoO'}/>
            <TextLeftRightImage fetchId={'3qMgnckgICYRPntyF9RDY3'} variant="noButton"/>
            <TeamDisplay fetchId={'3Qf6GFckwORTf2LQsPAgkT'}/>
            <TextLeftRightImage fetchId={'2WXqd1AcJJMgwbgZuIj8oT'} variant="noButton-inverted"/>
            <TeamDisplay fetchId={'i1OILq0JzaZ0jud3JG41o'}/>
            <TextLeftRightImage fetchId={'1wpamm4NCLy3h0Un6bPiR0'} variant="noButton"/>
            <TeamDisplay fetchId={'4mCs4yt3BZ2zkV3QXJyxVQ'}/>
            <TextLeftRightImage fetchId={'4an4lPR5NUdVte38EkNo5X'} variant="noButton-inverted"/>
            <TeamDisplay fetchId={'2QcHb4s6Ez0rxYNr6qRooq'}/>
            <TextLeftRightImage fetchId={'58Hcd4WeH7AjLsjqSQ7Zc6'} variant="noButton"/>
            <TeamDisplay fetchId={'1XIGz7wQcCNIBFTprQUvLG'}/>
            <TextLeftRightImage fetchId={'9WBKM0BeYqX1XXbzc4Je0'} variant="noButton-inverted"/>
            <TeamDisplay fetchId={'3yzsGn20BnLdubnWkaKzoR'}/>
            <Footer />
        </div>
    )
};

export default TeamPage; 