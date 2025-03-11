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
        let classes = [];
        if (variant === 'homepage') classes.push('homepage-hero');
        if (variant === 'clubsAssociations') classes.push('clubsAssociations');
        if (variant === 'noButton') classes.push('no-button');
        if (variant === 'noButton-inverted') classes.push('inverted');
        return classes.join(' ');
    };

    const shouldShowButton = variant !== 'noButton' && variant !== 'noButton-inverted';

    if (variant === 'clubsAssociations') {
        return (
            <div id={id} className={`slide-container ${getVariantClass()}`}>
                <div className="content-wrapper">
                    <div className="text-section">
                        <h1>{slideTitle || "Hello there!"}</h1>
                        <p style={{ whiteSpace: 'pre-line' }}>
                            {slideDescription || "The Lazaridis Students' Society is the student-led governing body of the Lazaridis School of Business and Economics. We're all about fostering a sense of community, providing opportunities for personal and professional growth, and representing the interests of Lazaridis students through events, initiatives, and resources tailored to their success."}
                        </p>
                        {shouldShowButton && (
                            <a href={slideRedirectionUrl || "/about"} className="button-link">
                                {slideDescriptionOne || "About Us"}
                            </a>
                        )}
                    </div>
                </div>
            </div>
        );
    }

    const textSection = (
        <div className="text-section">
            <h1>{slideTitle || "Hello there!"}</h1>
            <p style={{ whiteSpace: 'pre-line' }}>
                {slideDescription || "The Lazaridis Students' Society is the student-led governing body of the Lazaridis School of Business and Economics. We're all about fostering a sense of community, providing opportunities for personal and professional growth, and representing the interests of Lazaridis students through events, initiatives, and resources tailored to their success."}
            </p>
            {shouldShowButton && (
                <a href={slideRedirectionUrl || "/about"} className="button-link">
                    {slideDescriptionOne || "About Us"}
                </a>
            )}
        </div>
    );

    const imageSection = (
        <div className="image-section">
            <img src={slideImage} alt={slideTitle} className="slide-image" />
        </div>
    );

    return (
        <div id={id} className={`slide-container ${getVariantClass()}`}>
            {variant === 'noButton-inverted' ? (
                <>
                    {imageSection}
                    {textSection}
                </>
            ) : (
                <>
                    {textSection}
                    {imageSection}
                </>
            )}
        </div>
    )
}

export default TextLeftRightImageSlide
