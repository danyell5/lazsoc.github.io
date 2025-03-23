import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'




export const ThreeImageLeftTextRightSlide = (props) => {
    const { id, slideImages, slideTitle, slideDescription, slideRedirectionURL, variant } = props

    const [isDesktop, setIsDesktop] = useState(window.innerWidth >= 1024);
    
        useEffect(() => {
            const handleResize = () => {
                setIsDesktop(window.innerWidth >= 1024);
            };
    
            window.addEventListener('resize', handleResize);
            return () => window.removeEventListener('resize', handleResize);
        }, []);

    if (isDesktop) {
        return (
            <div id={id} className="three-image-slide-container">
                <div className="container">
                    <div className="images-section">
                        <div className="grid-image">
                            <img src={slideImages?.citySkyline} alt="City Skyline" />
                        </div>
                        <div className="grid-image">
                            <img src={slideImages?.pickleballHighFive} alt="Pickleball High Five" />
                        </div>
                        <div className="grid-image">
                            <img src={slideImages?.fourPickleballFans} alt="Four Pickleball Fans" />
                        </div>
                    </div>
                    <div className="text-section">
                        <h2>{slideTitle || "Discover our 23 different clubs and associations"}</h2>
                        <p>{slideDescription || "From marketing to accounting, there's a place for you. By joining a club or association,"}</p>
                        <Link to="/clubs-associations" className="button-link">
                            Learn More
                        </Link>
                    </div>
                </div>
            </div>
        )
    }

    return (
        <div id={id} className="three-image-slide-container">
            <div className="container">
                <div className="text-section">
                    <h2>{slideTitle || "Discover our 23 different clubs and associations"}</h2>
                    <p>{slideDescription || "From marketing to accounting, there's a place for you. By joining a club or association,"}</p>
                    <Link to="/clubs-associations" className="button-link">
                        Learn More
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default ThreeImageLeftTextRightSlide 