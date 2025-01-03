import React from 'react'

export const TextLeftRightImageSlide = (props) => {
    const { id, slideImage, slideTitle, slideDescription, slideRedirectionURL } = props
    return (
        <div id={id} className="slide-container">
        <div className="text-section">
            <h1>{slideTitle}</h1>
            <p>{slideDescription}</p>
            {slideRedirectionURL && (
                <a href={slideRedirectionURL} className="button-link">
                    Learn More
                </a>
            )}
        </div>
        <div className="image-section">
            <img src={slideImage} alt={slideTitle} className="slide-image" />
        </div>
    </div>
    )
}

export default TextLeftRightImageSlide
