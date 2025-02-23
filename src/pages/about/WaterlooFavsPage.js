import React from 'react';
import '../../partials/_about.scss';

const WaterlooFavsPage = () => {
    const favorites = {
        restaurants: [
            {
                name: "Morty's Pub",
                description: "Famous for their wings and casual pub atmosphere.",
                image: "/images/favs/mortys.jpg",
                link: "https://mortyspub.com"
            },
            {
                name: "Mel's Diner",
                description: "Classic diner with great breakfast and late-night options.",
                image: "/images/favs/mels.jpg",
                link: "https://melsdiner.ca"
            }
        ],
        studySpots: [
            {
                name: "Lazaridis Hall",
                description: "Modern study spaces with great natural lighting.",
                image: "/images/favs/lazaridis-hall.jpg"
            },
            {
                name: "Waterloo Public Library",
                description: "Quiet environment with plenty of study rooms.",
                image: "/images/favs/library.jpg"
            }
        ],
        activities: [
            {
                name: "Waterloo Park",
                description: "Beautiful park perfect for outdoor activities and relaxation.",
                image: "/images/favs/waterloo-park.jpg"
            },
            {
                name: "St. Jacobs Market",
                description: "Local farmers market with fresh food and unique vendors.",
                image: "/images/favs/st-jacobs.jpg"
            }
        ]
    };

    return (
        <div className="about-page waterloo-favs">
            <div className="about-content">
                <h1>Our Waterloo Favorites</h1>
                <p className="intro-text">
                    Discover the best spots in Waterloo recommended by LazSoc members. From study spots to 
                    restaurants, these are our favorite places to eat, study, and hang out!
                </p>

                <div className="content-section">
                    <h2>Best Restaurants</h2>
                    <div className="favs-grid">
                        {favorites.restaurants.map((spot, index) => (
                            <div key={index} className="fav-card">
                                <div className="fav-image">
                                    <img src={spot.image} alt={spot.name} />
                                </div>
                                <div className="fav-info">
                                    <h3>{spot.name}</h3>
                                    <p>{spot.description}</p>
                                    {spot.link && (
                                        <a href={spot.link} target="_blank" rel="noopener noreferrer" className="visit-link">
                                            Visit Website
                                        </a>
                                    )}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="content-section">
                    <h2>Study Spots</h2>
                    <div className="favs-grid">
                        {favorites.studySpots.map((spot, index) => (
                            <div key={index} className="fav-card">
                                <div className="fav-image">
                                    <img src={spot.image} alt={spot.name} />
                                </div>
                                <div className="fav-info">
                                    <h3>{spot.name}</h3>
                                    <p>{spot.description}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="content-section">
                    <h2>Activities & Entertainment</h2>
                    <div className="favs-grid">
                        {favorites.activities.map((spot, index) => (
                            <div key={index} className="fav-card">
                                <div className="fav-image">
                                    <img src={spot.image} alt={spot.name} />
                                </div>
                                <div className="fav-info">
                                    <h3>{spot.name}</h3>
                                    <p>{spot.description}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="content-section">
                    <h2>Share Your Favorites</h2>
                    <div className="share-section">
                        <p>
                            Have a favorite spot in Waterloo that you think should be featured here? 
                            Let us know! We're always looking to discover new places to share with 
                            the LazSoc community.
                        </p>
                        <a href="mailto:social@lazsoc.ca" className="cta-button">
                            Submit Your Recommendation
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default WaterlooFavsPage; 