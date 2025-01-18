import React from 'react'

export const OneTextAboveFourImagesSlide = (props) => {
    const { id, header, images, variant } = props
    return (
        <div id={id} className="one-text-above-four-images">
            <div className="container">
                <div className="text-section">
                    <h2>{header || "Our Sponsors"}</h2>
                </div>
                <div className="images-section">
                    {images?.map((image, index) => (
                        <div key={index} className="grid-image">
                            <img src={image} alt={`Image ${index + 1}`} />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default OneTextAboveFourImagesSlide 