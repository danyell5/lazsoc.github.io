import React from 'react'

export const TextLeftRightImageSlide = (props) => {
    const { 
        id, 
        slideImage, 
        slideTitle, 
        slideDescription, 
        slideDescriptionOne, 
        slideRedirectionUrl, 
        variant 
    } = props;

    const getVariantClass = () => {
        if (variant === 'homepage') return 'homepage-hero';
        if (variant === 'clubsAssociations') return 'clubsAssociations';
        return '';
    };

    if (variant === 'clubsAssociations') {
        return (
            <div id={id} className={`slide-container ${getVariantClass()}`}>
                <div className="content-wrapper">
                    <div className="text-section">
                        <h1>{slideTitle || "Hello there!"}</h1>
                        <p style={{ whiteSpace: 'pre-line' }}>
                            {slideDescription || "The Lazaridis Students' Society is the student-led governing body of the Lazaridis School of Business and Economics. We're all about fostering a sense of community, providing opportunities for personal and professional growth, and representing the interests of Lazaridis students through events, initiatives, and resources tailored to their success."}
                        </p>
                        <a href={slideRedirectionUrl || "/about"} className="button-link">
                            {slideDescriptionOne || "About Us"}
                        </a>
                    </div>
                </div>
            </div>
        );
    }

    return (
        <div id={id} className={`slide-container ${getVariantClass()}`}>
            <div className="text-section">
                <h1>{slideTitle || "Hello there!"}</h1>
                <p style={{ whiteSpace: 'pre-line' }}>
                    {slideDescription || "The Lazaridis Students' Society is the student-led governing body of the Lazaridis School of Business and Economics. We're all about fostering a sense of community, providing opportunities for personal and professional growth, and representing the interests of Lazaridis students through events, initiatives, and resources tailored to their success."}
                </p>
                <a href={slideRedirectionUrl || "/about"} className="button-link">
                    {slideDescriptionOne || "About Us"}
                </a>
            </div>
            <div className="image-section">
                <img src={slideImage} alt={slideTitle} className="slide-image" />
            </div>
        </div>
    )
}

export default TextLeftRightImageSlide
