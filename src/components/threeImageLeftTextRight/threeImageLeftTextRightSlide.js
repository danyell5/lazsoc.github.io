import React from 'react'
import { Link } from 'react-router-dom'

export const ThreeImageLeftTextRightSlide = (props) => {
    const { id, slideImages, slideTitle, slideDescription, slideRedirectionURL, variant } = props
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
                    <Link to="/about" className="button-link">
                        Learn More
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default ThreeImageLeftTextRightSlide 